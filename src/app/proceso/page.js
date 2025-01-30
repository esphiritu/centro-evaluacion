'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// Z is the core library for defining and validating data structures using Zod schemas.
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Creates a Zod object schema.
const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Por favor, escribe tu nombre completo",
  }),
})
export default function Proceso() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  })
  return (
    <header className="w-full py-2 mb-10">
      <div className="container z-20 flex flex-col lg:flex-row h-auto lg:h-[36rem] justify-center items-center">
        <div className="relative w-full lg:w-1/2 flex flex-col justify-normal items-center lg:items-start rounded-lg text-slate-800 dark:text-slate-200 py-2 lg:py-8 mt-2 lg:mt-10">
          <h1 className="w-4/5 text-xl md:text-2xl lg:text-3xl text-left font-bold md:leading-[2.5rem] pt-5 pb-4 pr-5">Solicitud de Certificación de Competencias Laborales
          </h1>

        </div>
        <div className="w-full lg:w-1/2 border rounded-2xl shadow-lg px-[3rem] py-6">
          <h4 className="text-3xl font-bold py-4 mb-3">Información general</h4>
          <p className="text-lg mb-8">Completa los campos requeridos para iniciar el trámite de certificación laboral. Una vez recibida tu solicitud, uno de nuestros ejecutivos se pondrá en contacto contigo para continuar el proceso.</p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit()} className="w-2/3 space-y-6">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-bold">Ingresa nombre completo</FormLabel>
                    <FormControl>
                      <Input placeholder="Nombre" {...field} autoComplete="true" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="
                      h-auto
                      transition-all 
                      duration-300
                      ease-in-out 
                      text-center 
                      bg-amber-300
                      hover:bg-amber-400
                      rounded-sm 
                      text-slate-800 
                      font-bold
                      py-3
                      px-8
                      md:text-xl 
                      shadow-md">
                Enviar solicitud</Button>
            </form>
          </Form>
        </div>
      </div>
    </header>
  );
}

