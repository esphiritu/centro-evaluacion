"use client";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

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
    message: "Escribe tu nombre completo",
  }),
  email: z.string().email({
    message: "Escriba un correo válido",
  }),
  subject: z.string({
    required_error: "Elija un tema",
  }),
  date: z.date({
    required_error: "Seleccione una fecha y hora",
  }),
});

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
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-md">Nombre completo</FormLabel>
            <FormControl>
              <Input placeholder="Nombre" {...field} autoComplete="true" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-md">Email</FormLabel>
            <FormControl>
              <Input placeholder="correo@gmail.com" {...field} autoComplete="true" />
            </FormControl>
            
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md">Tema</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Elije un asunto" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem className="text-lg" value="general">Pregunta general</SelectItem>
                  <SelectItem className="text-lg" value="support">Evaluación diagnóstica</SelectItem>
                  <SelectItem className="text-lg" value="feedback">Costos</SelectItem>
                  <SelectItem className="text-lg" value="other">Otro</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>Elije un asunto que deseas tratar</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-base">Fecha</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn("w-[240px] h-[3.2rem] pl- 4 text-left font-normal text-lg", !field.value && "text-muted-foreground")}
                    >
                      {field.value ? format(field.value, "PPP") : <span>Elige una fecha</span>}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
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
              <FormDescription>Choose a date for your inquiry or appointment.</FormDescription>
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