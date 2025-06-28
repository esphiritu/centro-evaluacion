"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
// Icons from Lucide
import { User, Phone, Mail, CalendarIcon } from "lucide-react";
// Z is the core library for defining and validating data structures using Zod schemas.
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// --- Zod Schema ---
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Ingrese su(s) nombre(s)",
  }),
  userphone: z.string().min(10, {
    message: "Escriba un número de teléfono válido",
  }),
  email: z.string().email({
    message: "Escriba un correo válido",
  }),
  // These fields were missing in your schema, but present in defaultValues and form.
  userlastname: z.string().min(2, {
    message: "Ingrese su apellido paterno",
  }),
  usermiddlename: z.string().min(2, {
    message: "Ingrese su apellido materno",
  }),
  subject: z.string({
    required_error: "Por favor, selecciona un asunto.",
  }),
  ec: z.string({
    required_error: "Por favor, selecciona un estándar de competencia.",
  }),
  date: z.date({
    required_error: "Seleccione una fecha y hora",
  }),
  terms: z.boolean().refine((val) => val === true, {
    message: "Debe aceptar los términos y condiciones",
  }),
});

// --- Data for estandares (kept outside for clarity) ---
const estandares = [
    {
      id: "EC0217.01",
      title: "EC0217.01",
      description: "Servicios educativos",
      content: "Impartición de cursos de formación de capital humano de manera presencial grupal",
      snc: "3/5",
      borColor: "border-t-purple-400",
      comite: "Asociación Mexicana de Capacitación de Personal y Empresarial, A.C",
      sector: "Servicios educativos",
      ocupaciones: "Capacitador, facilitador, instructor",
      duracion: "1 hora en gabinete y 2 horas en campo, totalizando 3 horas",
      proposito: "El estándar contempla las funciones sustantivas de preparar, conducir y evaluar cursos de capacitación. Preparar la sesión mediante la planeación de la sesión y la comprobación de la existencia y el funcionamiento de los recursos requeridos para la sesión. Conducir la sesión realizando el encuadre, desarrollo y cierre, empleando técnicas instruccionales y grupales que faciliten el proceso de aprendizaje. Evaluar el aprendizaje antes, durante y al final del curso, considerando la satisfacción de los participantes/capacitandos",
      requisitos: "Ninguno",
      price: "$5,000 MXN",
    },
    {
      id: "EC0366",
      title: "EC0366",
      description: "Servicios educativos",
      content: "Desarrollo de cursos de formación en línea",
      snc: "3/5",
      borColor: "border-t-blue-400",
      comite: "Comité de Gestión por Competencias de la Formación para el Trabajo",
      sector: "Servicios educativos",
      ocupaciones: "Instructor y capacitador",
      duracion: "6 horas",
      proposito: "Servir como referente para la evaluación y certificación de las personas que se desempeñan como desarrolladores de cursos para formación en línea.",
      requisitos: "Ninguno",
      price: "$5,500 MXN",
    },
    {
      id: "EC0301",
      title: "EC0301",
      description: "Servicios educativos",
      content: "Diseño de cursos de formación del capital humano de manera presencial grupal, sus instrumentos de evaluación y manuales del curso",
      snc: "3/5",
      borColor: "border-t-orange-400",
      comite: "Asociación Mexicana de Capacitación de Personal y Empresarial. AMECAP, A.C. ",
      sector: "Servicios educativos",
      ocupaciones: "Capacitador, facilitador, instructor",
      duracion: "2 horas en gabinete y 1 hora en campo, totalizando 3 horas",
      proposito: "Servir como referente para la evaluación y certificación de las personas que diseñan cursos de formación del capital humano de manera presencial grupal, diseñando cursos de capacitación presenciales, diseñando instrumentos para la evaluación de cursos de capacitación presenciales y desarrollando manuales del curso de capacitación presenciales",
      requisitos: "Ninguno",
      price: "$5,800 MXN",
    },
  ];


// --- Memoized Form Field Components ---

const UsernameField = React.memo(({ control }) => (
  <FormField
    control={control}
    name="username"
    render={({ field }) => (
      <FormItem className="relative w-full">
        <User className="w-5 h-5 absolute top-11 left-3 pointer-events-none" />
        <FormLabel className="text-lg font-normal">Nombre(s)</FormLabel>
        <FormControl>
          <Input placeholder="Nombre" {...field} className="pl-10 w-full" />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
));
UsernameField.displayName = 'UsernameField';

const UserLastnameField = React.memo(({ control }) => (
  <FormField
    control={control}
    name="userlastname"
    render={({ field }) => (
      <FormItem className="w-full lg:w-1/2">
        <FormLabel className="text-lg font-normal" htmlFor="userlastname">Apellido paterno</FormLabel>
        <FormControl>
          <Input name="userlastname" id="userlastname" placeholder="Apellido paterno" {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
));
UserLastnameField.displayName = 'UserLastnameField';

const UserMiddlenameField = React.memo(({ control }) => (
  <FormField
    control={control}
    name="usermiddlename"
    render={({ field }) => (
      <FormItem className="w-full lg:w-1/2">
        <FormLabel className="text-lg font-normal" htmlFor="usermiddlename">Apellido materno</FormLabel>
        <FormControl>
          <Input name="usermiddlename" id="usermiddlename" placeholder="Apellido materno" {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
));
UserMiddlenameField.displayName = 'UserMiddlenameField';

const EmailField = React.memo(({ control }) => (
  <div className="w-full lg:w-1/2 relative flex items-center focus-within:text-gray-500">
    <FormField
      control={control}
      name="email"
      render={({ field }) => (
        <FormItem className="w-full">
          <Mail className="w-5 h-5 absolute top-12 left-3 pointer-events-none" />
          <FormLabel className="text-lg font-normal">Email</FormLabel>
          <FormControl>
            <Input
              placeholder="Ingresa tu correo electrónico"
              {...field}
              className="pl-10"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </div>
));
EmailField.displayName = 'EmailField';

const PhoneField = React.memo(({ control }) => (
  <div className="w-full lg:w-1/2 relative flex items-center focus-within:text-gray-500">
    <FormField
      control={control}
      name="userphone"
      render={({ field }) => (
        <FormItem className="w-full">
          <Phone className="w-5 h-5 absolute top-12 left-3 pointer-events-none" />
          <FormLabel className="text-lg font-normal">Teléfono celular</FormLabel>
          <FormControl>
            <Input placeholder="Teléfono para contactarte" {...field} className="pl-10" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </div>
));
PhoneField.displayName = 'PhoneField';

const CalendarField = React.memo(({ control }) => (
  <FormField
          control={control}
          name="date"
          id="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-md font-bold">Fecha</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn("w-[278px] h-[3.5rem] pl- 4 text-left font-normal text-lg hover:bg-transparent", !field.value && "text-muted-foreground")}
                    >
                      {field.value ? format(field.value, "EEEE, d MMMM yyyy", { locale: es }) : <span>Elige una fecha</span>}
                      <CalendarIcon className="ml-auto h-5 w-5 opacity-60" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date < new Date() || date > new Date("2100-01-01")}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>Selecciona un día para la llamada</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
));

const TermsCheckbox = React.memo(({ control }) => (
  <FormField
    control={control}
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
));
TermsCheckbox.displayName = 'TermsCheckbox';

// --- Main ContactForm Component ---

export default function ContactForm({ children }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      userlastname: "",
      usermiddlename: "",
      userphone: "",
      email: "",
      terms: false,
      subject: "", // Ensure these default values match your schema if they are optional
      ec: "", // Ensure these default values match your schema if they are optional
      date: undefined, // date field needs a default value, or make it optional in schema
    },
  });

  const [submissionState, setSubmissionState] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: ''
  });

  async function onSubmit(values) {
    try {
      setSubmissionState({
        isSubmitting: true,
        isSuccess: false,
        isError: false,
        message: ''
      });

      // Simulate API call - In a real app, this would be your actual fetch/axios call
      await new Promise(resolve => setTimeout(resolve, 100)); // Increased timeout for visibility

      setSubmissionState({
        isSubmitting: false,
        isSuccess: true,
        isError: false,
        message: 'Formulario enviado correctamente. ¡Gracias!'
      });

      form.reset(); // Optionally reset form after successful submission
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmissionState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: 'Fallo el envío. Por favor, inténtelo de nuevo.'
      });
    }
  }

  return (
    <Form {...form} className="mb-6">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Children components would be rendered here if passed */}
        {children}

        <div className="flex items-center focus-within:text-gray-500">
          <UsernameField control={form.control} />
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 lg:space-x-5">
          <UserLastnameField control={form.control} />
          <UserMiddlenameField control={form.control} />
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 lg:space-x-5">
          <PhoneField control={form.control} />
          <EmailField control={form.control} />
        </div>

        <CalendarField control={form.control} />

        {/* You'll need to implement the subject, EC, and date fields similarly */}
        {/* For example, if 'subject' is a select/dropdown: */}
        {/*
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Asunto</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un asunto" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Consulta General">Consulta General</SelectItem>
                  <SelectItem value="Información de Cursos">Información de Cursos</SelectItem>
                  <SelectItem value="Soporte Técnico">Soporte Técnico</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        */}
    

        <div className="flex items-center space-x-2">
          <TermsCheckbox control={form.control} />
        </div>

        <Separator />

        <div className="flex justify-between">
          <Button
            type="submit"
            className="
              h-auto
              w-full
              transition-all
              duration-300
              ease-in-out
              text-center
              bg-teal-500
              hover:bg-teal-600 focus:bg-teal-600
              rounded-sm
              text-white
              font-bold
              py-3
              px-8
              md:text-lg
              shadow-md
              block
            "
            disabled={submissionState.isSubmitting} // Disable button during submission
          >
            {submissionState.isSubmitting ? 'Enviando...' : 'Enviar'}
          </Button>
        </div>

        {submissionState.message && (
          <p className={`mt-4 text-center ${submissionState.isError ? 'text-red-500' : 'text-green-500'}`}>
            {submissionState.message}
          </p>
        )}
      </form>
    </Form>
  );
}