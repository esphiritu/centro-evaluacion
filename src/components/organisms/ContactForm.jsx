"use client";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox"
import { useForm } from "react-hook-form";
// Icons from Lucide
import { User, Phone, Mail, Lock } from "lucide-react";
// Z is the core library for defining and validating data structures using Zod schemas.
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// Creates a Zod object schema.
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
  subject: z.string({
    required_error: "Por favor, selecciona un asunto.", // Mensaje si no se selecciona nada
  }),
  ec: z.string({
    required_error: "Por favor, selecciona un estándar de competencia.", // Mensaje si no se selecciona nada
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

export default function ContactForm({ children }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      userlastname: "",
      usermiddlename: "",
      userphone: "",
      email: "",
      subject: "",
      ec: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
    // Here you would typically send the form data to your backend
    alert("Form submitted successfully!");
  }

  return (
    <Form {...form} className="mb-6">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Aquí se renderizarán los componentes hijos */}
        {children}
        {/* Campo de nombres */}
        <div className="flex items-center focus-within:text-gray-500">
          
          <FormField
            control={form.control}
            name="username" id="username"
            className="pl-10 w-full"
            render={({ field }) => (
              <FormItem className="relative w-full">
                <User className="w-5 h-5 absolute top-11 left-3 pointer-events-none" />
                <FormLabel className="text-lg font-normal" htmlFor="username">Nombre(s)</FormLabel>
                <FormControl>
                  <Input name="username" id="username" placeholder="Nombre" {...field} autoComplete="true" className="pl-10 w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 lg:space-x-5">
          {/* Campo de primer apellido */}
          <FormField
            control={form.control}
            name="userlastname" id="userlastname"
            render={({ field }) => (
              <FormItem className="w-full lg:w-1/2">
                <FormLabel className="text-lg font-normal" htmlFor="userlastname">Apellido paterno</FormLabel>
                <FormControl>
                  <Input name="userlastname" id="userlastname" placeholder="Apellido paterno" {...field} autoComplete="true" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Campo de segundo apellido */}
          <FormField
            control={form.control}
            name="usermiddlename" id="usermiddlename"
            render={({ field }) => (
              <FormItem className="w-full lg:w-1/2">
                <FormLabel className="text-lg font-normal" htmlFor="usermiddlename">Apellido materno</FormLabel>
                <FormControl>
                  <Input name="usermiddlename" id="usermiddlename" placeholder="Apellido materno" {...field} autoComplete="true" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center space-x-5">
          {/* Campo teléfono celular */}
          <div className="w-full lg:w-1/2 relative flex items-center focus-within:text-gray-500">
            <FormField
              control={form.control}
              name="userphone" id="userphone"
              render={({ field }) => (
                <FormItem className="w-full">
                  <Phone className="w-5 h-5 absolute top-12 left-3 pointer-events-none" />
                  <FormLabel className="text-lg font-normal" htmlFor="userphone">Teléfono celular</FormLabel>
                  <FormControl>
                    <Input name="userphone" id="userphone" placeholder="Teléfono para contactarte" {...field} autoComplete="true" className="pl-10" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* Campo de email */}
          <div className="w-full lg:w-1/2 relative flex items-center focus-within:text-gray-500">
            <FormField
              control={form.control}
              name="email" id="useremail"
              render={({ field }) => (
                <FormItem className="w-full">
                  <Mail className="w-5 h-5 absolute top-12 left-3 pointer-events-none" />
                  <FormLabel className="text-lg font-normal" htmlFor="useremail">Email</FormLabel>
                  <FormControl>
                    <Input name="email" id="useremail" placeholder="Ingresa tu correo electrónico" {...field} autoComplete="true" className="pl-10" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms2" name="terms2" />
          <label
            htmlFor="terms2"
            className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pt-1 pl-2"
          >
            Accepto términos y condiciones
          </label>
        </div>
        <Separator />
        <div className="flex justify-between">
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
            Enviar</Button>
          <div className="flex justify-center items-center leading-0 pt-5"><Lock className="text-muted-foreground" strokeWidth={2.0} size={14} /> <p className="text-muted-foreground text-sm pl-2 pt-1">Tus datos están protegidos por nuestra política de privacidad</p></div>
        </div>
      </form>
      
    </Form>
  );
}