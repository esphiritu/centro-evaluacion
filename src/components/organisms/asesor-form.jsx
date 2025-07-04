"use client"
import React from "react";
import { useState } from "react";
import { useRef, useEffect } from "react";
import { CalendarIcon, ChevronLeft, ChevronRight, Upload, X, FileText, ImageIcon } from "lucide-react";
import { format } from "date-fns";

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

const formSchema = z.object({
  // Step 1: General Information
  firstName: z.string().min(2, {
    message: "Escribe al menos 2 caracteres",
  }),
  lastName: z.string().min(2, {
    message: "Escribe al menos 2 caracteres",
  }),
  email: z.string().email({
    message: "Ingresa un correo electrónico válido.",
  }),
  phone: z.string().min(10, {
    message: "Número con almenos 10 dígitos.",
  }),

  // Step 2: Selection Controls

  priority: z.string({
    required_error: "Selecciona una categoría laboral que mejor describa tu función laboral",
  }),
  sector: z.string({
    required_error: "Selecciona una categoría laboral que mejor describa tu función laboral",
  }),
  services: z.array(z.string()).min(1, {
    message: "Selecciona un servicio.",
  }),
  preferredContact: z.string({
    required_error: "Selecciona el principal método de contacto",
  }),

  // Step 3: Details
  date: z.date({
    required_error: "Selecciona una fecha",
  }),
  horario: z.string({
    required_error: "Por favor selecciona en qué momento es conveniente contactarte",
  }),
  hour: z.string().min(2, {
    message: "Ingresa una hora ideal para contactarte",
  }),
  files: z.array(z.any()).optional(),
})

const steps = [
  {
    title: "Información General",
    description: "Vamos a estar en contacto contigo",
  },
  {
    title: "Información profesional",
    description: "¿Cómo podemos ayudarte?",
  },
  {
    title: "Cita para contactarte",
    description: "¿Cuándo te gustaría que te contactemos?",
  },
]

const services = [
  { id: "certificacion", label: "Certificación" },
  { id: "alineacion ", label: "Alineación" },
  { id: "capacitacion", label: "Capacitación empresarial" },
  { id: "coaching", label: "Coaching empresarial" },
  { id: "consultoria", label: "Consultoría empresarial" },
  { id: "otro", label: "Otro servicio" },
]

export default function AsesorForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [date, setDate] = useState(new Date())

  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: "onTouched", // or "onBlur"
    delayError: 200,
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      priority: "",
      sector: "",
      preferredContact: "phone",
      date: date,
      horario: "",
      hour: "",
      // Initialize services as an empty array  
      services: [],
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

      if (currentStep === 0) {
        targetRef = firstNameRef;
      } else if (currentStep === 1) {
        targetRef = priorityRef;
      } else if (currentStep === 2) {
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
        return ["firstName", "lastName", "email", "phone"]
      case 1:
        return ["priority", "sector", "services", "preferredContact"]
      case 2:
        return ["date", "hour", "horario", "files"]
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
        <CardHeader>
          <CardDescription className="py-2 text-center">
            Paso {currentStep + 1}
          </CardDescription>
          <Progress value={progress} className="w-full" />
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Step 1: General Information */}
              {currentStep === 0 && (
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">{steps[0].title}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-normal">Nombre</FormLabel>
                          <FormControl>
                            <Input placeholder="Juan" {...field} ref={firstNameRef} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />

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
                  </div>

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

                  <FormField
                    control={form.control}
                    name="priority"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-normal">Funcion laboral</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger ref={priorityRef} className="text-lg">
                              <SelectValue placeholder="Selecciona la mejor opción" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="operativo" className="text-lg">Operativo</SelectItem>
                            <SelectItem value="administrativo" className="text-lg">Administrativo</SelectItem>
                            <SelectItem value="directivo" className="text-lg">Directivo</SelectItem>
                            <SelectItem value="independiente" className="text-lg">Servicios independientes</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />

                  <FormField
                    control={form.control}
                    name="sector"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-normal">Sector laboral</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="text-lg">
                              <SelectValue placeholder="Selecciona una categoría" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="general" className="text-lg">Empresa privada</SelectItem>
                            <SelectItem value="support" className="text-lg">Entidad pública</SelectItem>
                            <SelectItem value="sales" className="text-lg">Organización social</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />


                  <FormField
                    control={form.control}
                    name="services"
                    render={() => (
                      <FormItem>
                        <div className="mb-4">
                          <FormLabel className="text-base font-normal">Servicios</FormLabel>
                          <FormDescription>Selecciona los servicios de tu interés</FormDescription>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {services.map((service) => (
                            <FormField
                              key={service.id}
                              control={form.control}
                              name="services"
                              render={({ field }) => {
                                return (
                                  (<FormItem
                                    key={service.id}
                                    className="flex flex-row items-center space-x-3 space-y-2">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(service.id)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, service.id])
                                            : field.onChange(field.value?.filter((value) => value !== service.id));
                                        }} />
                                    </FormControl>
                                    <FormLabel className="text-lg font-normal">{service.label}</FormLabel>
                                  </FormItem>)
                                );
                              }} />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )} />

                  <FormField
                    control={form.control}
                    name="preferredContact"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-base font-normal">Método principal de contacto</FormLabel>
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
                              <RadioGroupItem value="wa" id="wa" />
                              <Label htmlFor="wa" className="text-lg font-normal">WhatsApp</Label>
                            </div>
                          </RadioGroup>
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

                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="text-base font-normal">Elige una fecha</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                ref={dateButtonRef}
                                tabIndex={0} // Ensure it's keyboard tabbable
                                type="button" // Prevents form submission
                                variant={"outline"}
                                className={cn(
                                  "w-[278px] h-[3.5rem] pl- 4 text-left font-normal text-lg hover:bg-transparent",
                                  !field.value && "text-muted-foreground"
                                )}>
                                {field.value ? format(field.value, "EEEE, d MMMM yyyy", { locale: es }) : <span>Elige una fecha</span>}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              className="rounded-lg border"
                            />
                          </PopoverContent>
                        </Popover>
                        <FormDescription>Selecciona un día para ponernos en contacto</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )} />

                  <FormField
                    control={form.control}
                    name="horario"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-normal">Momento o parte del día</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="text-lg">
                              <SelectValue placeholder="Por la mañana o por la tarde" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="temprano" className="text-lg">Por la mañana</SelectItem>
                            <SelectItem value="tarde" className="text-lg">Por la tarde</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />

                  <FormField
                    control={form.control}
                    name="hour"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-normal">Hora</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="10 de la mañana o, 5 pm"
                            className="min-h-[120px] text-lg"
                            {...field}
                            ref={hourTextareaRef}
                          />
                        </FormControl>
                        <FormDescription>¿A qué hora exacta te gustaría que te contactemos?</FormDescription>
                         {/* Show error message only if the field is touched and has an error */}
                        {form.formState.errors.hour && form.formState.touchedFields.hour && <FormMessage />}
                      </FormItem>
                    )} />

                  <FormField
                    control={form.control}
                    name="files"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="file-upload">Documentos de soporte <span className="text-gray-500 text-sm">(Opcional)</span></FormLabel>
                        <FormControl>
                          <div className="space-y-4">
                            <div
                              className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                              <Upload className="mx-auto h-12 w-12 text-gray-400" />
                              <div className="mt-4">
                                <label htmlFor="file-upload" className="cursor-pointer">
                                  <span className="mt-2 block text-sm font-medium text-gray-900">
                                    Arrasta archivos aquí o haz clic para subir
                                  </span>
                                  <span className="mt-1 block text-xs text-gray-500">
                                    PNG, JPG, PDF, DOC de hasta 10MB cada uno
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
                                      <X className="w-4 h-4" />
                                    </Button>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </FormControl>
                        <FormDescription>Envía certificados, títulos académicos, constacias de capacitación, etc.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )} />
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 0}>
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Anterior
                </Button>

                {currentStep < steps.length - 1 ? (
                  <Button type="button" onClick={nextStep}>
                    Siguiente
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button type="submit">Enviar</Button>
                )}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>)
  );
}
