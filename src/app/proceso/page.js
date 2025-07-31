'use client';
import React from "react";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Info, User, MailCheck, FileUp, ListChecks, Upload, FileText, Image, ArrowLeft, ArrowRight, File, Trash2, ImageIcon, Check } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import SecondaryLink from "@/components/atoms/SecondaryLink";

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
  terms: z.boolean().refine((val) => val === true, {
    message: "Debe aceptar los términos y condiciones",
  }),

  // Step 4: Survey
  questionOne: z.string().min(2, {
    message: "Por favor, selecciona una opción",
  }),
  questionTwo: z.string().min(2, {
    message: "Por favor, selecciona una opción",
  }),
  questionThree: z.string().min(2, {
    message: "Por favor, selecciona una opción",
  }),
  questionFour: z.string().min(2, {
    message: "Por favor, selecciona una opción",
  }),
  questionFive: z.string().min(2, {
    message: "Por favor, selecciona una opción",
  }),
})

const steps = [
  {
    title: "Datos generales del usuario",
    description: "Sus datos para la solicitud",
  },
  {
    title: "Información de domicilio",
    description: "Adjunte documentos que respalden su solicitud",
  },
  {
    title: "Documentos de soporte",
    description: "Adjunte su identificación oficial (ambos lados) y CURP",
  },
  {
    title: "Encuesta",
    description: "Estimado usuario, le agradeceremos que conteste el siguiente cuestionario para mejorar nuestro servicio.",
  },
]

export default function Proceso({ params }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [date, setDate] = useState(new Date());
  // Default values for the form
  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: "onBlur", // or "onBlur"
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
      terms: false,
      questionOne: "",
      questionTwo: "",
      questionThree: "",
      questionFour: "",
      questionFive: "",
    },
  });

  const nextStep = async (e) => {
    e?.preventDefault(); // Prevent form submission if event is passed
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
        return ["channel", "files", "terms"]
      case 3:
        return ["questionOne", "questionTwo", "questionThree", "questionFour", "questionFive"]
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
      progress = 25;
      break;
    case 2:
      progress = 50;
      break;
    case 3:
      progress = 75;
      break;
    default:
      progress = 0;
  }

  return (
    <main className="container-none lg:container mb-10 pt-4 lg:pt-18">
      <div className="sticky top-10 lg:top-18 bg-white dark:bg-slate-950 z-10 pt-4 lg:pt-2">
        <div className="w-full flex flex-col lg:flex-row justify-between align-center pb-4 lg:pb-0">
          <h1 className="text-3xl text-center lg:text-left text-pretty font-bold md:leading-10 pt-4 pb-4">
            Certificación de Competencias Laborales
          </h1>
          <Sheet>
            <SheetTrigger>
              <span className="text-xl text-teal-600 hover:text-teal-700 dark:hover:text-teal-400 transition-all duration-200 py-3 pl-1 pr-3">
                Mostrar resumen de solicitud
              </span>
            </SheetTrigger>
            <SheetContent side="right" className="w-full">
              <SheetHeader>
                <SheetTitle className="text-2xl pt-10 pb-2">
                  Proceso de Certificación Laboral
                </SheetTitle>
                <Separator />
              </SheetHeader>
              <div className="flex flex-col text-slate-800 dark:text-slate-200 py-2 lg:py-4 mt-2">
                <p className="text-lg mt-7 mb-8"><span className="font-bold">Proceso solicitado:</span> (evaluación, prueba diagnóstica, o alineación)</p>
                <p className="text-lg mb-8"><span className="font-bold">Estándar de competencia:</span> EC000</p>
                <Separator />
                <div className="pt-10">
                  <p className="text-lg ">Completa los siguientes pasos:</p>
                  <ul className="pl-6 mt-8 space-y-4">
                    <li className="text-lg flex items-center">
                      <span className="relative border rounded-full mr-4">
                        <User size={36} strokeWidth={2.3} absoluteStrokeWidth={true} className="text-proyecta-600 dark:text-proyecta-400 p-2" />
                        {progress >= 25 ? <Check size={19} className="absolute text-white top-5 left-7 bg-blue-500 rounded-full p-1 z-20" /> : null}
                      </span>
                      Datos generales
                    </li>
                    <li className="text-lg flex items-center">
                      <span className="relative border rounded-full mr-4">
                        <MailCheck size={36} strokeWidth={2.3} absoluteStrokeWidth={true} className="text-proyecta-600 dark:text-proyecta-400 p-2" />
                        {progress >= 50 ? <Check size={19} className="absolute text-white top-5 left-7 bg-blue-500 rounded-full p-1 z-20" /> : null}
                      </span>
                      Información de domicilio
                    </li>
                    <li className="text-lg flex items-center">
                      <span className="relative border rounded-full mr-4">
                        <FileUp size={36} strokeWidth={2.3} absoluteStrokeWidth={true} className="text-proyecta-600 dark:text-proyecta-400 p-2" />
                        {progress >= 75 ? <Check size={19} className="absolute text-white top-5 left-7 bg-blue-500 rounded-full p-1 z-20" /> : null}
                      </span>
                      Documentos de soporte
                    </li>
                    <li className="text-lg flex items-center">
                      <span className="border rounded-full mr-4">
                        <ListChecks size={36} strokeWidth={2.3} absoluteStrokeWidth={true} className="text-proyecta-600 dark:text-proyecta-400 p-2" />
                      </span>
                      Encuesta
                    </li>
                  </ul>
                </div>
                <Alert className="mt-10 text-muted-foreground pt-6">
                  <Info className="w-4 h-4" />
                  <AlertDescription className="text-sm text-muted-foreground">
                    Una vez recibida tu solicitud, uno de nuestros asesores
                    se pondrá en contacto contigo para continuar el proceso.
                  </AlertDescription>
                </Alert>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <Separator />
      </div>

      <div className="w-full lg:w-1/2 mx-auto border-none lg:border-solid border-slate-200 rounded">
        <div className="max-w-2xl mx-auto px-6">
          <Card>
            <CardHeader className="mt-2">
              <CardDescription className="text-right">
                Paso {currentStep + 1}/4
              </CardDescription>
              <Progress value={progress} className="w-full" />
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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
                                <Input placeholder="Martínez" {...field} required />
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
                                <Input placeholder="López" {...field} required />
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
                              <Input placeholder="Juan" {...field} required />
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
                              <Input type="email" placeholder="juan@mail.com" {...field} required />
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
                              <Input placeholder="+52 (555) 123-4567" {...field} required />
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
                            <FormLabel className="text-base font-normal">Calle y número </FormLabel>
                            <FormControl>
                              <Input placeholder="Heróico Colegio Militar, número 152 (o número exterior)" {...field} required />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />

                      {/* District field */}
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="colonia"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base font-normal">Colonia</FormLabel>
                              <FormControl>
                                <Input placeholder="Valle Diamante" {...field} required />
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
                                <Input placeholder="90342" {...field} required />
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
                                <Input placeholder="Alcaldía Cuautemoc" {...field} required />
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
                                <Input placeholder="Ciudad de México" {...field} required />
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
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold">{steps[2].title}</h3>
                      <p className="text-xl">Los siguientes documentos son necesarios para continuar con tu solicitud:</p>
                      <ol className="list-decimal pl-6 mb-8 text-lg">
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
                              <div className="space-y-3">
                                <div
                                  className="border-2 border-dashed border-gray-300 rounded-lg p-10 mt-2 text-center hover:border-gray-400 transition-colors bg-white dark:bg-slate-950">
                                  <div className="flex justify-center items-center space-x-3">
                                    <File className="h-10 w-10 text-gray-600" strokeWidth={1.25} absoluteStrokeWidth />
                                    <Upload className="h-18 w-18 text-gray-600" strokeWidth={1.50} absoluteStrokeWidth />
                                    <Image className="h-10 w-10 text-gray-600" strokeWidth={1.25} absoluteStrokeWidth />
                                  </div>
                                  <div className="mt-4">
                                    <label htmlFor="file-upload" className="cursor-pointer">
                                      <span className="mt-2 block text-base font-medium">
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

                      {/* Checkbox for terms and conditions */}
                      <FormField
                        control={form.control}
                        name="terms"
                        render={({ field }) => (
                          <div className="flex items-center space-x-2">
                            <FormControl>
                              <Checkbox
                                id="terms"
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                required
                              />
                            </FormControl>
                            <FormLabel className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pt-1 pl-2">
                              Accepto términos y condiciones
                            </FormLabel>
                            <FormMessage className="pt-1" />
                          </div>
                        )}
                      />
                    </div>
                  )}

                  {/* Step 4: Survey */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold">{steps[3].title}</h3>
                      {/* Question 1 */}
                      <FormField
                        control={form.control}
                        name="questionOne"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-xl font-normal">¿Cómo califica la atención que se le ha dado?</FormLabel>
                            <FormDescription className="text-sm text-muted-foreground">Tiempo en que fue atendido y utilidad de la Información que se le proporcionó.</FormDescription>
                            <FormControl className="mt-1">
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-row space-y-1 space-x-8">
                                <div className="flex items-center space-x-3 has-checked:bg-proyecta-100/50 has-checked:border-teal-200 dark:has-checked:bg-proyecta-950 px-5 py-3 rounded-lg">
                                  <RadioGroupItem
                                    value="bueno"
                                    id="question-one-bueno" />
                                  <Label
                                    htmlFor="question-one-bueno"
                                    className="text-lg font-normal pr-2">
                                    Bueno
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-3 has-checked:bg-proyecta-100/50 has-checked:border-teal-200 dark:has-checked:bg-proyecta-950 px-5 py-3 rounded-lg">
                                  <RadioGroupItem
                                    value="regular"
                                    id="question-one-regular" />
                                  <Label
                                    htmlFor="question-one-regular"
                                    className="text-lg font-normal pr-2">
                                    Regular
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-3 has-checked:bg-proyecta-100/50 has-checked:border-teal-200 dark:has-checked:bg-proyecta-950 px-5 py-3 rounded-lg">
                                  <RadioGroupItem
                                    value="malo"
                                    id="question-one-malo" />
                                  <Label
                                    htmlFor="question-one-malo"
                                    className="text-lg font-normal pr-2">
                                    Malo
                                  </Label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                      {/* Question 2 */}
                      <FormField
                        control={form.control}
                        name="questionTwo"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-xl font-normal">¿Considera que el tiempo  de atención fue el adecuado?</FormLabel>
                            <FormDescription className="text-sm text-muted-foreground">Tiempo que duró la explicación y aclaración de dudas</FormDescription>
                            <FormControl className="mt-1">
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-row space-y-1 space-x-8">
                                <div className="flex items-center space-x-3 has-checked:bg-proyecta-100/50 has-checked:border-teal-200 dark:has-checked:bg-proyecta-950 px-5 py-3 rounded-lg">
                                  <RadioGroupItem
                                    value="bueno"
                                    id="question-two-bueno" />
                                  <Label
                                    htmlFor="question-two-bueno"
                                    className="text-lg font-normal pr-2">
                                    Bueno
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-3 has-checked:bg-proyecta-100/50 has-checked:border-teal-200 dark:has-checked:bg-proyecta-950 px-5 py-3 rounded-lg">
                                  <RadioGroupItem
                                    value="regular"
                                    id="question-two-regular" />
                                  <Label
                                    htmlFor="question-two-regular"
                                    className="text-lg font-normal pr-2">
                                    Regular
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-3 has-checked:bg-proyecta-100/50 has-checked:border-teal-200 dark:has-checked:bg-proyecta-950 px-5 py-3 rounded-lg">
                                  <RadioGroupItem
                                    value="malo"
                                    id="question-two-malo" />
                                  <Label
                                    htmlFor="question-two-malo"
                                    className="text-lg font-normal pr-2">
                                    Malo
                                  </Label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                      {/* Question 3 */}
                      <FormField
                        control={form.control}
                        name="questionThree"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-xl font-normal">¿Considera que se le dio un trato amable?</FormLabel>
                            <FormDescription className="text-sm text-muted-foreground">La persona le saludó, le trató con respeto y cordialidad</FormDescription>
                            <FormControl className="mt-1">
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-row space-y-1 space-x-8">
                                <div className="flex items-center space-x-3 has-checked:bg-proyecta-100/50 has-checked:border-teal-200 dark:has-checked:bg-proyecta-950 px-5 py-3 rounded-lg">
                                  <RadioGroupItem
                                    value="bueno"
                                    id="question-three-bueno" />
                                  <Label
                                    htmlFor="question-three-bueno"
                                    className="text-lg font-normal pr-2">
                                    Bueno
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-3 has-checked:bg-proyecta-100/50 has-checked:border-teal-200 dark:has-checked:bg-proyecta-950 px-5 py-3 rounded-lg">
                                  <RadioGroupItem
                                    value="regular"
                                    id="question-three-regular" />
                                  <Label
                                    htmlFor="question-three-regular"
                                    className="text-lg font-normal pr-2">
                                    Regular
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-3 has-checked:bg-proyecta-100/50 has-checked:border-teal-200 dark:has-checked:bg-proyecta-950 px-5 py-3 rounded-lg">
                                  <RadioGroupItem
                                    value="malo"
                                    id="question-three-malo" />
                                  <Label
                                    htmlFor="question-three-malo"
                                    className="text-lg font-normal pr-2">
                                    Malo
                                  </Label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                      {/* Question 4 */}
                      <FormField
                        control={form.control}
                        name="questionFour"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-xl font-normal">La persona que le brindó la atención ¿Le dio la confianza necesaria para satisfacer todas sus dudas respecto al proceso de evaluación-certificación?</FormLabel>
                            <FormControl className="mt-1">
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-row space-y-1 space-x-8">
                                <div className="flex items-center space-x-3 has-checked:bg-proyecta-100/50 has-checked:border-teal-200 dark:has-checked:bg-proyecta-950 px-5 py-3 rounded-lg">
                                  <RadioGroupItem
                                    value="bueno"
                                    id="question-four-bueno" />
                                  <Label
                                    htmlFor="question-four-bueno"
                                    className="text-lg font-normal pr-2">
                                    Bueno
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-3 has-checked:bg-proyecta-100/50 has-checked:border-teal-200 dark:has-checked:bg-proyecta-950 px-5 py-3 rounded-lg">
                                  <RadioGroupItem
                                    value="regular"
                                    id="question-four-regular" />
                                  <Label
                                    htmlFor="question-four-regular"
                                    className="text-lg font-normal pr-2">
                                    Regular
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-3 has-checked:bg-proyecta-100/50 has-checked:border-teal-200 dark:has-checked:bg-proyecta-950 px-5 py-3 rounded-lg">
                                  <RadioGroupItem
                                    value="malo"
                                    id="question-four-malo" />
                                  <Label
                                    htmlFor="question-four-malo"
                                    className="text-lg font-normal pr-2">
                                    Malo
                                  </Label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                      {/* Question 5 */}
                      <FormField
                        control={form.control}
                        name="questionFive"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-xl font-normal">¿Para dirigirse a usted la persona que lo atendió utilizó palabras y términos que le facilitaron comprender lo que estaba explicando?</FormLabel>
                            <FormControl className="mt-1">
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-row space-y-1 space-x-8">
                                <div className="flex items-center space-x-3 has-checked:bg-proyecta-100/50 has-checked:border-teal-200 dark:has-checked:bg-proyecta-950 px-5 py-3 rounded-lg">
                                  <RadioGroupItem
                                    value="bueno"
                                    id="question-five-bueno" />
                                  <Label
                                    htmlFor="question-five-bueno"
                                    className="text-lg font-normal pr-2">
                                    Bueno
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-3 has-checked:bg-proyecta-100/50 has-checked:border-teal-200 dark:has-checked:bg-proyecta-950 px-5 py-3 rounded-lg">
                                  <RadioGroupItem
                                    value="regular"
                                    id="question-five-regular" />
                                  <Label
                                    htmlFor="question-five-regular"
                                    className="text-lg font-normal pr-2">
                                    Regular
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-3 has-checked:bg-proyecta-100/50 has-checked:border-teal-200 dark:has-checked:bg-proyecta-950 px-5 py-3 rounded-lg">
                                  <RadioGroupItem
                                    value="malo"
                                    id="question-five-malo" />
                                  <Label
                                    htmlFor="question-five-malo"
                                    className="text-lg font-normal pr-2">
                                    Malo
                                  </Label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
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
        </div>
      </div>
    </main>
  );
}