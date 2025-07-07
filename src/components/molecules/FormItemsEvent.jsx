"use client";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import es from "date-fns/locale/es";

function FormItemsEvent() {
  return (
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
                      variant={"outline-solid"}
                      className={cn("w-[278px] h-14 pl- 4 text-left font-normal text-lg hover:bg-transparent", !field.value && "text-muted-foreground")}
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
  )
}

export default FormItemsEvent