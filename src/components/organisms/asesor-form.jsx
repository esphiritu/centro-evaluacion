"use client"
import React from "react";
import { useState } from "react";
import { useRef, useEffect } from "react";
import { CalendarIcon, ChevronLeft, ChevronRight, Upload, X, FileText, ImageIcon, ArrowLeft, ArrowRight } from "lucide-react";
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
    message: "Tu nombre es necesario",
  }),
  lastName: z.string().min(2, {
    message: "Al menos un apellido paterno",
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
})

const steps = [
  {
    title: "Datos de contacto",
    description: "Vamos a estar en contacto contigo",
  },
  {
    title: "Información profesional",
    description: "Cuéntanos un poco más de tu área laboral",
  },
  {
    title: "Fecha para contactarte",
    description: "¿Cuándo te gustaría que te contactemos?",
  },
]


export default function AsesorForm() {
  const [currentStep, setCurrentStep] = useState(0)
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
    },
  })

  // Define individual refs for the first interactive element of each step
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
        return ["firstName", "lastName", "email", "phone"]
      case 1:
        return ["priority", "sector", "preferredContact"]
      case 2:
        return ["date", "hour", "horario"]
      default:
        return []
    }
  }


  function onSubmit(values) {
    const formData = {
      ...values,
    }

    alert(`Información enviada.`)
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
              {/* Step 1: General Information */}
              {currentStep === 0 && (
                <div className="space-y-8">
                  <h3 className="text-2xl font-semibold">{steps[0].title}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-normal">Nombre</FormLabel>
                          <FormControl>
                            <Input placeholder="Juan" {...field} />
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
                            <SelectTrigger className="text-lg">
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

                  <div className="flex flex-col lg:flex-row space-x-5">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel className="text-base font-normal">
                            Fecha
                          </FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  ref={dateButtonRef}
                                  tabIndex={0} // Ensure it's keyboard tabbable
                                  type="button" // Prevents form submission
                                  variant={"outline"}
                                  className={cn(
                                    "w-[278px] h-14 pl- 4 text-left font-normal text-lg hover:bg-transparent",
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
                          <FormDescription>Elige un día para ponernos en contacto</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )} />

                    {/* Campo de horario o parte del día */}
                    <FormField
                      control={form.control}
                      name="horario"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel className="text-base font-normal">Momento o parte del día</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="text-lg h-14">
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
                  </div>

                  <FormField
                    control={form.control}
                    name="hour"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-normal">Hora</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="10 de la mañana o, 5:30 pm"
                            className="min-h-[80px] text-lg"
                            {...field}
                            ref={hourTextareaRef}
                          />
                        </FormControl>
                        <FormDescription>¿A qué hora exacta te gustaría que te contactemos?</FormDescription>
                        {/* Show error message only if the field is touched and has an error */}
                        {form.formState.errors.hour && form.formState.touchedFields.hour && <FormMessage />}
                      </FormItem>
                    )} />

                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <Button
                  className="text-lg py-2"
                  type="button"
                  variant="link"
                  onClick={prevStep}
                  disabled={currentStep === 0}>
                  <ArrowLeft className="w-5 h-5 mr-1" />
                  Anterior
                </Button>

                {currentStep < steps.length - 1 ? (
                  <Button
                    className="text-lg py-2" 
                    type="button" 
                    onClick={nextStep}>
                    Siguiente
                    <ArrowRight className="w-5 h-5 ml-1" />
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
