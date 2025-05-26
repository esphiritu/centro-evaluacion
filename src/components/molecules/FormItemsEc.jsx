"use client";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


export default function FormItemsEc() {
  const form = useForm({
      defaultValues: {
      },
    });
  return (
    <>
      <h3 className="text-lg font-bold">¿En qué estás interesado?</h3>
      <div className="flex flex-col lg:flex-row justify-between w-full space-y-6 lg:space-y-0 lg:space-x-5">
            {/* Campo de asunto de la consulta */}
            <FormField
              {...form}
              className="min-w-max xl:w-1/2"
              control={form.control}
              name="subject"
              id="subject"
              render={({ field }) => (
                <FormItem className="w-full lg:w-1/2">
                  <FormLabel className="text-lg font-normal" htmlFor="subject-trigger">Asunto</FormLabel>
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
                  <FormLabel className="text-lg font-normal" htmlFor="ec-trigger">Estándar de competencia</FormLabel>
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
    </>
   
        
  )
}