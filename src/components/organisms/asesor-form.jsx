"use client"
import es from "date-fns/locale/es";
import React from "react";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Progress } from "@/components/ui/progress";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger, DrawerFooter, DrawerClose, } from '@/components/ui/drawer';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, ArrowLeft, ArrowRight, User, UserCheck, Mail, Phone } from "lucide-react";
// Modules added to enable the date picker in Spanish

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
    message: "Número con al menos 10 dígitos.",
  }),
  // Step 2: Professional Information
  position: z.string({
    required_error: "Ingresa el puesto que desempeñas",
  }),
  category: z.string({
    required_error: "Selecciona una categoría en la que te desempeñas",
  }),
  service: z.string({
    required_error: "Por favor selecciona una opción",
  }),
  // Step 3: Date and time
  date: z.date({
    required_error: "Selecciona una fecha y hora",
  }),
  timeZone: z.string()
  .optional(),
  preferredContact: z.string({
    required_error: "Selecciona el principal método de contacto",
  }),
  terms: z.boolean().refine((val) => val === true, {
    message: "Debe aceptar los términos y condiciones",
  }),
});

const steps = [
  {
    title: "Datos de contacto",
    description: "Vamos a estar en contacto contigo",
  },
  {
    title: "Información laboral y profesional",
    description: "Cuéntanos un poco más de tu área laboral",
  },
  {
    title: "Datos para la consulta profesional",
    description: "¿Cuándo te gustaría que te contactemos?",
  },
];

export default function AsesorForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [date, setDate] = useState(undefined);
  const [open, setOpen] = React.useState(false);
  const [selectedTime, setSelectedTime] = React.useState(undefined);
  const [combinedDateTime, setCombinedDateTime] = useState(null);
  const timeSlots = Array.from({ length: 37 }, (_, i) => {
    const totalMinutes = i * 15
    const hour = Math.floor(totalMinutes / 60) + 9
    const minute = totalMinutes % 60
    return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`
  });

  // Default values for the form
  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: "onTouched", // or "onBlur"
    delayError: 200,
    defaultValues: {
      // Step 1: General Information
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      // Step 2: Professional Information
      position: "",
      category: "",
      service: "",
      // Step 3: Date and details
      date: undefined,
      preferredContact: "phone",
      terms: false,
      time: "",
    },
  });

    // Calculate progress based on the current step
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

  // Effect to combine date + time when either changes
  useEffect(() => {
    if (date && selectedTime) {
      const [hours, minutes] = selectedTime.split(':').map(Number);
      const newDateTime = new Date(date);
      newDateTime.setHours(hours, minutes);
      setCombinedDateTime(newDateTime);

      // Update form value
      form.setValue('date', newDateTime);
    }
  }, [date, selectedTime, form]);

  // Function to get the fields for the current step
  const getFieldsForStep = (step) => {
    switch (step) {
      case 0:
        return ["firstName", "lastName", "email", "phone"]
      case 1:
        return ["position", "category", "service"]
      case 2:
        return ["date", "preferredContact", "terms"]
      default:
        return []
    }
  }

  // REVIEW NEEDED
  // This section is commented out because it was part of an second approach to handle form submission with async operations.
  // I created a few state variables to control form submission
  const [submissionState, setSubmissionState] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: "",
  })

  // async function onSubmit(values) {
  //   try {
  //     setSubmissionState({
  //       isSubmitting: true,
  //       isSuccess: false,
  //       isError: false,
  //       message: "",
  //     });
  //   // Original approach  
  //     const formData = {
  //       ...values,
  //     }
  //   // or simulate API call. This would be your actual fetch/axios call
  //     await new Promise (resolve => setTimeout (resolve, 400));
  //     setSubmissionState({
  //       isSubmitting: false,
  //       isSuccess: true, 
  //       isError: false,
  //       message: "Formulario enviado correctamente. ¡Gracias!",
  //     });
  //     alert(`Información enviada.`);
  //     form.reset();
  //   } catch (error){
  //     console.error("Form submmission error:", error);
  //     setSubmissionState({
  //       isSubmitting: false,
  //       isSuccess: false,
  //       isError: true,
  //       message: "Formulario enviado correctamente. ¡Gracias!",
  //     });
  //   }
  // }

  function onSubmit(values) {
    const formData = {
      ...values,
      time: selectedTime, // Include the selected time
    }
    alert(`Información enviada para la fecha: ${values.date}`);
    console.log(values);
  }

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

  return (
    (<div className="max-w-2xl mx-auto px-6">
      <Card>
        <CardHeader className="mb-3">
          <CardDescription className="text-right">
            Paso {currentStep + 1}/3
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
                        <FormItem className="relative">
                          <User className="w-5 h-5 absolute top-13 left-3 text-muted-foreground pointer-events-none" />
                          <FormLabel className="text-base font-normal">Nombre</FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              className="pl-10"
                              placeholder="Juan Alberto"
                              required
                              {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />

                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem className="relative">
                          <UserCheck className="w-5 h-5 absolute top-13 left-3 text-muted-foreground pointer-events-none" />
                          <FormLabel className="text-base font-normal">Apellido paterno</FormLabel>
                          <FormControl>
                            <Input
                              className="pl-10"
                              placeholder="Martínez"
                              required
                              {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="relative">
                        <Mail className="w-5 h-5 absolute text-muted-foreground top-13 left-3" />
                        <FormLabel className="text-base font-normal">Email</FormLabel>
                        <FormControl>
                          <Input
                            className="pl-10"
                            type="email"
                            placeholder="juan@mail.com"
                            required
                            {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="relative">
                        <Phone className="w-5 h-5 absolute top-13 left-3 text-muted-foreground" />
                        <FormLabel className="text-base font-normal">Número de teléfono</FormLabel>
                        <FormControl>
                          <Input
                            className="pl-10"
                            placeholder="+52 (555) 123-4567"
                            required
                            {...field} />
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
                    name="position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-normal">Posición o puesto laboral</FormLabel>
                        <FormControl>
                          <Input placeholder="Asesor financiero, especialista en marketing" {...field} required />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-normal">Categoría</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="text-xl">
                              <SelectValue placeholder="Selecciona la mejor opción" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="operativo" className="text-lg">Operativo</SelectItem>
                            <SelectItem value="administrativo" className="text-lg">Administrativo</SelectItem>
                            <SelectItem value="directivo" className="text-lg">Directivo</SelectItem>
                            <SelectItem value="independiente" className="text-lg">Servicios independientes</SelectItem>
                            <SelectItem value="otra-categoria-laboral" className="text-lg">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-normal">Servicio</FormLabel>
                        <FormDescription>¿Qué servicio de Proyecta Empresarial te interesa?</FormDescription>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="text-xl">
                              <SelectValue placeholder="Selecciona una opción" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="certificacion" className="text-lg">Certificación laboral</SelectItem>
                            <SelectItem value="alineacion" className="text-lg">Alineación a estándar</SelectItem>
                            <SelectItem value="prueba" className="text-lg">Prueba diagnóstica</SelectItem>
                            <SelectItem value="otro-servicio" className="text-lg">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                </div>
              )}

              {/* Step 3: Details for interview */}
              {currentStep === 2 && (
                <div className="space-y-10">
                  <h3 className="text-2xl font-semibold">{steps[2].title}</h3>
                  {/* Campo fecha */}
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="text-base font-normal">
                          Fecha
                        </FormLabel>
                        {/* <FormDescription>¿Cuándo te gustaría tener la entrevista?</FormDescription> */}
                        <Drawer open={open} onOpenChange={setOpen}>
                          <DrawerTrigger asChild>
                            <FormControl>
                              <Button
                                tabIndex={0} // Ensure it's keyboard tabbable
                                name="calendar-button"
                                type="button" // Prevents form submission
                                variant={"outline"}
                                className={cn(
                                  "w-[278px] h-14 pl- 4 text-left first-letter:uppercase font-normal text-lg hover:bg-transparent",
                                  !date && "text-muted-foreground"
                                )}>
                                {field.value ? format(field.value, "EEEE, d MMMM yyyy", { locale: es }) : <span>Elige una fecha y hora</span>}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </DrawerTrigger>
                          <DrawerContent className="w-auto overflow-hidden p-0 md:pr-48">
                            <DrawerHeader>
                              <DrawerTitle className="text-center text-2xl">Selecciona una fecha</DrawerTitle>
                              <DrawerDescription className="sr-only">¿Cuándo nos comunicamos contigo?</DrawerDescription>
                            </DrawerHeader>
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={(selectedDate) => {
                                field.onChange(selectedDate); // Update react-hook-form's state (this will ensure the date is properly registered in the form state)
                                setDate(selectedDate); // Also update local state to use in the confirmation message
                              }}
                              disabled={(date) => date < new Date()}
                              className="rounded-lg border mx-auto [--cell-size:clamp(0px,calc(100vw/7.5),52px)] mb-2"
                            />
                            <div className="no-scrollbar inset-y-0 lg:right-1/4 right-0 flex max-h-72 w-full scroll-pb-6 flex-col gap-4 overflow-y-auto border-t p-6 lg:pt-10 lg:px-10 md:absolute md:max-h-none md:w-60 md:border-l md:border-t-0">
                              <h4 className="text-center lg:text-left text-2xl font-bold">Selecciona hora</h4>
                              <div className="grid gap-2">
                                {timeSlots.map((time) => (
                                  <Button
                                    key={time}
                                    variant={selectedTime === time ? "default" : "outline"}
                                    onClick={() => setSelectedTime(time)}
                                    className="w-full shadow-none text-lg"
                                  >
                                    {time}
                                  </Button>
                                ))}
                              </div>
                            </div>
                            <DrawerFooter>
                              {/* Show confirmation message for the selected date and time */}
                              <div className="w-full lg:w-[400px] mx-auto text-md py-2">
                                {date && selectedTime ? (
                                  <>
                                    La consulta esta agendada para el {" "}
                                    <span className="font-bold">
                                      {" "}
                                      {date?.toLocaleDateString("es-US", {
                                        weekday: "long",
                                        day: "numeric",
                                        month: "long",
                                      })}{" "}
                                    </span>
                                    a las <span className="font-bold">{selectedTime} horas</span>.
                                  </>
                                ) : (
                                  <>Selecciona una fecha y hora para la consulta.</>
                                )}
                              </div>
                              <DrawerClose asChild className="text-xl w-full lg:w-[400px] mx-auto">
                                <Button className={selectedTime && date ? "bg-teal-500" : "bg-gray-700"}>Continuar</Button>
                              </DrawerClose>
                            </DrawerFooter>
                          </DrawerContent>
                        </Drawer>
                        <FormMessage />
                        {selectedTime ? (
                          <span className="text-base text-muted-foreground pl-2 py-1">
                            La entrevista se programará a las {selectedTime} horas.
                          </span>
                        ) : (
                          <span className="text-base text-muted-foreground pl-2 py-1">
                            La entrevista es de carácter informativo.
                          </span>
                        )}
                      </FormItem>
                    )} />

                  {/* Método de contacto */}
                  <FormField
                    control={form.control}
                    name="preferredContact"
                    render={({ field }) => (
                      <FormItem className="space-y-8">
                        <FormLabel className="text-base font-normal py-2">Método principal de contacto</FormLabel>
                        <FormControl className="mt-6">
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-row space-y-1 space-x-8">
                            <div className="flex items-center space-x-3 has-checked:bg-proyecta-100/50 has-checked:border-teal-200 dark:has-checked:bg-proyecta-950 px-5 py-3 rounded-lg">
                              <RadioGroupItem value="phone" id="phone" />
                              <Label htmlFor="phone" className="text-lg font-normal pr-2">Teléfono</Label>
                            </div>
                            <div className="flex items-center space-x-3 has-checked:bg-proyecta-100/50 has-checked:border-teal-200 dark:has-checked:bg-proyecta-950 px-5 py-3 rounded-lg">
                              <RadioGroupItem value="email" id="email" />
                              <Label htmlFor="email" className="text-lg font-normal pr-2">Email</Label>
                            </div>
                            <div className="flex items-center space-x-3 has-checked:bg-proyecta-100/50 has-checked:border-teal-200 dark:has-checked:bg-proyecta-950 px-5 py-3 rounded-lg">
                              <RadioGroupItem value="wa" id="wa" />
                              <Label htmlFor="wa" className="text-lg font-normal pr-2">WhatsApp</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
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
                          />
                        </FormControl>
                        <FormLabel className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pt-1 pl-2">
                          Accepto términos y condiciones
                        </FormLabel>
                        <FormMessage />
                      </div>
                    )}
                  />

                  {/* Campo de horario o parte del día */}
                  {/* <FormField
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
                    )} /> */}

                  {/* <FormField
                    control={form.control}
                    name="hour"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-normal">Hora</FormLabel>
                        <FormDescription>¿A qué hora exacta te gustaría que te contactemos?</FormDescription>
                        <FormControl>
                          <Textarea
                            placeholder="10 de la mañana o, 5:30 pm"
                            className="min-h-[80px] text-lg"
                            {...field}
                            ref={hourTextareaRef}
                          />
                        </FormControl>
                        {form.formState.errors.hour && form.formState.touchedFields.hour && <FormMessage />}
                      </FormItem>
                    )} /> */}
                  {/* Show error message only if the field is touched and has an error */}
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

                {currentStep === steps.length - 1 ? (
                  <Button
                    className="text-lg font-bold py-2 px-4"
                    type="submit"
                    disabled={submissionState.isSubmitting}>
                    {submissionState.isSubmitting ? 'Enviando' : 'Enviar'}
                  </Button>
                ) : (
                  <Button
                    className="text-lg py-2"
                    type="button"  // Explicitly set type to button
                    onClick={nextStep}>
                    Siguiente
                    <ArrowRight className="w-5 h-5 ml-1" />
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>)
  );
}
