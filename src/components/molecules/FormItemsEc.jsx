"use client";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";


export default function FormItemsEc() {
  const form = useForm({
    defaultValues: {
      subject: "",
      ec: "",
    },
  });
  return (
    <>
      <h3 className="text-lg font-bold">¿En qué estás interesado?</h3>
      <div className="flex flex-col lg:flex-row justify-between w-full space-y-6 lg:space-y-0 lg:space-x-5">
        {/* Campo de asunto de la consulta */}
        <FormField
          className="min-w-max xl:w-1/2"
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem className="w-full lg:w-1/2">
              <FormLabel className="text-lg font-normal" htmlFor={field.name}>Asunto</FormLabel>
              <Select className="relative" onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger id={field.name} name={field.name}>
                  <FormControl>
                    <SelectValue placeholder="Selecciona una opción" />
                  </FormControl>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Procesos</SelectLabel>
                    <SelectItem value="prueba">Prueba diagnóstica</SelectItem>
                    <SelectItem value="evaluacion">Evaluación</SelectItem>
                    <SelectItem value="emision">Emisión de certificado</SelectItem>
                    <SelectItem value="asesoria">Asesoría personalizada</SelectItem>
                  </SelectGroup>
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
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-normal" htmlFor={field.name}>Estándar de competencia</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger id={field.name} name={field.name}>
                    <SelectValue placeholder="Selecciona un Estándar" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="developer">Developer</SelectItem>
                    <SelectItem value="designer">Designer</SelectItem>
                    <SelectItem value="product">Product Manager</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormDescription>Selecciona el estándar de competencia</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div >
    </>


  )
}