"use client";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";


export default function FormItemsBuzon() {
  return (
      <div className="grid w-full gap-1.5">
        <Label htmlFor="message" className="font-normal text-lg">Escribe tu mensaje</Label>
        <Textarea placeholder="Comparte tu comentario, sugerencia o queja" id="message" />
      </div>
  )
}