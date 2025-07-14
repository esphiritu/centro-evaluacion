"use client"
import React from "react";
import { useState } from "react";
import { useRef, useEffect } from "react";
import { CalendarIcon, ChevronLeft, ChevronRight, Upload, X, FileText, Image, ArrowLeft, ArrowRight, File, Trash2 } from "lucide-react";
import { add, format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// Modules added to enable the date picker in Spanish
import es from "date-fns/locale/es";
import { Separator } from "@radix-ui/react-dropdown-menu";

const formSchema = z.object({
  // Step 1: General Information

  lastName: z.string().min(2, {
    message: "Apellido paterno es necesario",
  }),
  middleName: z.string().min(2, {
    message: "Apellido materno es necesario",
  }),
  firstName: z.string().min(2, {
    message: "Su nombre es necesario",
  }),
  email: z.string().email({
    message: "Ingresa un correo electrónico válido.",
  }),
  phone: z.string().min(10, {
    message: "Número con almenos 10 dígitos.",
  }),

  // Step 2: Selection Controls


  address: z.string().min(2, {
    message: "Ingrese su domicilio completo",
  }),
  colonia: z.string().min(2, {
    message: "Su colonia es necesaria",
  }),
  zipCode: z.string().min(2, {
    message: "Su código postal es necesario",
  }),
  county: z.string().min(2, {
    message: "Su municipio es necesario",
  }),
  state: z.string().min(2, {
    message: "Su estado es necesario",
  }),
  city: z.string(z.any()).optional(),

  // Step 3: Details
  channel: z.string({
    required_error: "Selecciona el principal método de contacto",
  }),
  files: z.array(z.any()).optional(),
})

const steps = [
  {
    title: "Datos generales del usuario",
    description: "Sus datos para la solicitud",
  },
  {
    title: "Domicilio",
    description: "Adjunte documentos que respalden su solicitud",
  },
  {
    title: "Documentos de soporte",
    description: "Adjunte su identificación oficial (ambos lados) y CURP",
  },
]


export default function AtencionUsuarios() {
  const [currentStep, setCurrentStep] = useState(0)
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [date, setDate] = useState(new Date())

  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: "onTouched", // or "onBlur"
    delayError: 200,
    defaultValues: {
      lastName: "",
      middleName: "",
      firstName: "",
      email: "",
      phone: "",
      address: "",
      colonia: "",
      zipCode: "",
      county: "",
      state: "",
      city: "",
      channel: "phone",
      // Initialize services as an empty array  
      files: [],
    },
  })

  // Define individual refs for the first interactive element of each step
  const firstNameRef = useRef(null);
  const priorityRef = useRef(null);
  const dateButtonRef = useRef(null); // Ref for the date picker's trigger button
  const hourTextareaRef = useRef(null); // Ref for the hour textarea to potentially blur it

  useEffect(() => {
    const focusElement = () => {
      let targetRef = null;

      if (currentStep === 2) {
        targetRef = dateButtonRef;

        // Immediately after attempting to focus the date button,
        // specifically blur the textarea if it somehow gained focus.
        // This is a last-resort override for the stubborn textarea.
        if (hourTextareaRef.current && document.activeElement === hourTextareaRef.current) {
          hourTextareaRef.current.blur();
        }
      }

      // Attempt to focus the target element's current DOM node
      if (targetRef?.current) {
        targetRef.current.focus();
      }
    };

    // Use a setTimeout to ensure the DOM is fully rendered and hydrated
    // before attempting to manipulate focus.
    const timer = setTimeout(focusElement, 50); // Increased to 250ms

    return () => clearTimeout(timer); // Cleanup the timer
  }, [currentStep]); // Dependencies: only re-run when currentStep changes. `form` is not needed here as we're using direct DOM focus.


  const nextStep = async () => {
    const fields = getFieldsForStep(currentStep)
    const isValid = await form.trigger(fields)

    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  const getFieldsForStep = (step) => {
    switch (step) {
      case 0:
        return ["lastName", "middleName", "firstName", "email", "phone"]
      case 1:
        return ["address", "colonia", "zipCode", "county", "state", "city"]
      case 2:
        return ["channel", "files"]
      default:
        return []
    }
  }

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files || [])
    const validFiles = files.filter((file) => {
      const isValidType =
        file.type.startsWith("image/") ||
        file.type === "application/pdf" ||
        file.type.startsWith("application/msword") ||
        file.type.startsWith("application/vnd.openxmlformats-officedocument")
      const isValidSize = file.size <= 10 * 1024 * 1024 // 10MB limit
      return isValidType && isValidSize
    })

    setUploadedFiles((prev) => [...prev, ...validFiles])
    form.setValue("files", [...uploadedFiles, ...validFiles])
  }

  const removeFile = (index) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index)
    setUploadedFiles(newFiles)
    form.setValue("files", newFiles)
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }

  const getFileIcon = (file) => {
    if (file.type.startsWith("image/")) {
      return <ImageIcon className="w-4 h-4" />;
    }
    return <FileText className="w-4 h-4" />;
  }

  function onSubmit(values) {
    const formData = {
      ...values,
      files: uploadedFiles.map((file) => ({
        name: file.name,
        size: file.size,
        type: file.type,
      })),
    }
    console.log("Tipo de archivo:", formData)
    console.log("Archivos cargados:", uploadedFiles)
    alert(`Información enviada con ${uploadedFiles.length} archivos adjuntos.`)
  }


  let progress = 0;
  switch (currentStep) {
    case 0:
      progress = 0;
      break;
    case 1:
      progress = 30;
      break;
    case 2:
      progress = 60;
      break;
    default:
      progress = 0;
  }

  return (
    (<div className="max-w-2xl mx-auto px-6">
      <Card>
        <CardHeader className="mb-3">
          <CardDescription className="text-right">
            Paso {currentStep + 1}
          </CardDescription>
          <Progress value={progress} className="w-full" />
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Step 1: General Information */}
              {currentStep === 0 && (
                <div className="space-y-8">
                  <h3 className="text-2xl font-semibold">{steps[0].title}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Last name field */}
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-normal">Apellido paterno</FormLabel>
                          <FormControl>
                            <Input placeholder="Martínez" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />

                    {/* Middle name field */}
                    <FormField
                      control={form.control}
                      name="middleName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-normal">Apellido materno</FormLabel>
                          <FormControl>
                            <Input placeholder="López" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                  </div>

                  {/* First name field */}
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-normal">Nombre(s)</FormLabel>
                        <FormControl>
                          <Input placeholder="Juan" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-normal">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="juan@mail.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-normal">Número de teléfono</FormLabel>
                        <FormControl>
                          <Input placeholder="(555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                </div>
              )}

              {/* Step 2: Selection Controls */}
              {currentStep === 1 && (
                <div className="space-y-8">
                  <h3 className="text-2xl font-semibold">{steps[1].title}</h3>

                  {/* Address field */}
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-normal">Calle, número interior o número exterior</FormLabel>
                        <FormControl>
                          <Input placeholder="Calle, número exterior, número interior" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                  {/* Colonia field */}
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="colonia"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-normal">Colonia</FormLabel>
                          <FormControl>
                            <Input placeholder="Valle Diamante" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />

                    {/* Zip Code field */}
                    <FormField
                      control={form.control}
                      name="zipCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-normal">Código Postal</FormLabel>
                          <FormControl>
                            <Input placeholder="90342" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />

                  </div>

                  {/* County and State fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="county"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-normal">Alcaldía o municipio</FormLabel>
                          <FormControl>
                            <Input placeholder="Alcaldía Cuautemoc" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />

                    {/* State field */}
                    <FormField
                      control={form.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-normal">Estado</FormLabel>
                          <FormControl>
                            <Input placeholder="Ciudad de México" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                  </div>
                  {/* City field */}
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-normal">Ciudad</FormLabel>
                        <FormControl>
                          <Input placeholder="(Ciudad)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                </div>
              )}

              {/* Step 3: Details */}
              {currentStep === 2 && (
                <div className="space-y-8">
                  <h3 className="text-2xl font-semibold">{steps[2].title}</h3>
                  <p className="text-lg">Los siguientes documentos son necesarios para continuar con tu solicitud:</p>
                  <ol className="list-decimal pl-6 mb-4 text-lg">
                    <li>Identificación oficial</li>
                    <li>CURP</li>
                  </ol>
                  {/* Upload field */}
                  <FormField
                    control={form.control}
                    name="files"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="file-upload"><span className="font-normal">Carga los documentos aquí: </span></FormLabel>
                        <FormControl>
                          <div className="space-y-4">
                            <div
                              className="border-2 border-dashed border-gray-300 rounded-lg p-10 text-center hover:border-gray-400 transition-colors">
                              <div className="flex justify-center items-center space-x-4">
                                <File className="h-10 w-10 text-gray-600" strokeWidth={1.25} absoluteStrokeWidth />
                                <Upload className="h-20 w-20 text-gray-600" strokeWidth={1.50} absoluteStrokeWidth />
                                <Image className="h-10 w-10 text-gray-600" strokeWidth={1.25} absoluteStrokeWidth />
                              </div>
                              <div className="mt-4">
                                <label htmlFor="file-upload" className="cursor-pointer">
                                  <span className="mt-2 block text-base font-medium text-gray-900">
                                    Arrasta archivos aquí o <span className="text-teal-600">haz clic para subir</span>
                                  </span>
                                  <span className="mt-1 block text-xs text-gray-500">
                                    PDF, DOC, PNG, JPG de hasta 10MB cada uno
                                  </span>
                                </label>
                                <input
                                  id="file-upload"
                                  name="file-upload"
                                  type="file"
                                  multiple
                                  accept="image/*,.pdf,.doc,.docx"
                                  className="sr-only"
                                  onChange={handleFileUpload} />
                              </div>
                            </div>

                            {uploadedFiles.length > 0 && (
                              <div className="space-y-2">
                                <h4 className="text-sm font-medium">Archivos enviados:</h4>
                                {uploadedFiles.map((file, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div className="flex items-center space-x-3">
                                      {getFileIcon(file)}
                                      <div>
                                        <p className="text-sm font-medium text-gray-900">{file.name}</p>
                                        <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                                      </div>
                                    </div>
                                    <Button
                                      type="button"
                                      variant="ghost"
                                      size="sm"
                                      onClick={() => removeFile(index)}
                                      className="text-red-500 hover:text-red-700">
                                      <Trash2 className="w-4 h-4" />
                                      
                                    </Button>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </FormControl>
                        <FormDescription>La identificación oficial deberá ser credencial de elector, bien enfocada y con todos los bordes.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )} />
                
                  {/* channel field */}
                  {/* <FormField
                    control={form.control}
                    name="channel"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-base font-normal">¿Cuál fue su medio de contacto con su asesor?</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-row space-y-1 space-x-6">
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value="phone" id="phone" />
                              <Label htmlFor="phone" className="text-lg font-normal">Teléfono</Label>
                            </div>
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value="email" id="email" />
                              <Label htmlFor="email" className="text-lg font-normal">Email</Label>
                            </div>
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value="presencial" id="presencial" />
                              <Label htmlFor="presencial" className="text-lg font-normal">Presencial</Label>
                            </div>
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value="redes" id="redes" />
                              <Label htmlFor="redes" className="text-lg font-normal">Redes sociales</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} /> */}
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <Button
                  className="text-lg py-2 px-4"
                  type="button"
                  variant="link"
                  onClick={prevStep}
                  disabled={currentStep === 0}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Anterior
                </Button>

                {currentStep < steps.length - 1 ? (
                  <Button className="text-lg py-2 px-4" type="button" onClick={nextStep}>
                    Siguiente
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button className="text-lg py-2 px-4" type="submit">Enviar</Button>
                )}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>)
  );
}
