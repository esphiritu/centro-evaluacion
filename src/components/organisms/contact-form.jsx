"use client";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import es from "date-fns/locale/es";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
// Z is the core library for defining and validating data structures using Zod schemas.
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// Creates a Zod object schema.
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Ingrese su nombre(s)",
  }),
  email: z.string().email({
    message: "Escriba un correo válido",
  }),
  subject: z.string({
    required_error: "Seleccione un estándar de competencia",
  }),
  date: z.date({
    required_error: "Seleccione una fecha y hora",
  }),
});

// Información de los estándares de competencia que se ofrecen
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
    // icon: estandarIcon,
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
    // icon: estandarIcon,
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
    // icon: estandarIcon,
    price: "$5,800 MXN",
  },
]

export default function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
    // Here you would typically send the form data to your backend
    alert("Form submitted successfully!");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="w-full flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-3">
          {/* Campo de nombres */}
          <FormField
            control={form.control}
            name="username"
            id="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md font-bold" htmlFor="username">Nombre(s)</FormLabel>
                <FormControl>
                  <Input placeholder="Nombre" {...field} autoComplete="true" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Campo de primer apellido */}
          <FormField
            control={form.control}
            name="userlastname"
            id="userlastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md font-bold" htmlFor="userlastname">Apellido</FormLabel>
                <FormControl>
                  <Input placeholder="Apellido paterno" {...field} autoComplete="true" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* Campo teléfono celular */}
        <FormField
          control={form.control}
          name="userphone"
          id="userphone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md font-bold" htmlFor="userphone">Teléfono celular</FormLabel>
              <FormControl>
                <Input placeholder="Número celular para contactarte" {...field} autoComplete="true" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        {/* Campo de email */}
        <FormField
          control={form.control}
          name="email"
          id="useremail"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md font-bold" htmlFor="useremail">Email</FormLabel>
              <FormControl>
                <Input placeholder="Ingresa tu correo electrónico" {...field} autoComplete="true" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col lg:flex-row justify-between w-full space-x-0 lg:space-x-3">
          {/* Campo de asunto de la consulta */}
          <FormField
            className="min-w-max xl:w-1/2"
            control={form.control}
            name="subject"
            id="subject"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel className="text-md font-bold" htmlFor="subject-trigger">¿En qué estás interesado?</FormLabel>
                <Select className="relative">
                  <SelectTrigger id="subject-trigger">
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Prueba diagnóstica</SelectItem>
                    <SelectItem value="dark">Evaluación</SelectItem>
                    <SelectItem value="system">Emisión de certificado</SelectItem>
                    <SelectItem value="syst">Consulta administrativa</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Campo de estándar de competencia */}
          <FormField
            className="w-full xl:w-1/2"
            control={form.control}
            name="ec"
            id="ec"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md font-bold" htmlFor="ec-trigger">Código EC</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger id="ec-trigger">
                      <SelectValue placeholder="Selecciona un código" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="developer">Developer</SelectItem>
                    <SelectItem value="designer">Designer</SelectItem>
                    <SelectItem value="product">Product Manager</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>Selecciona el estándar de competencia</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* Campo de calendario */}
        <FormField
          control={form.control}
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
        <Button type="submit" className="
                      h-auto
                      w-fit
                      transition-all 
                      duration-300
                      ease-in-out 
                      text-center 
                      bg-teal-500
                      hover:bg-teal-500
                      rounded-sm 
                      text-white 
                      font-bold
                      py-3
                      px-8
                      md:text-lg 
                      shadow-md
                      block">
          Enviar solicitud</Button>
      </form>
    </Form>
  );
}