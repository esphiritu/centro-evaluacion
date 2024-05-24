import Link from "next/link";
import Users from "../lib/jsonplaceholder/Users";
import { Button, buttonVariants } from "@/components/ui/button";


export default function Home({Component, pageProps}) {
  return (
      <>
        <main>
          <section className="py-10 flex flex-col gap-8 items-center">
            <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl py-3">Impulsa tu vida profesional y respalda tu experiencia laboral con certificaciones oficiales</h1>
            <div>
              <Link href="./proyecto" className={buttonVariants({ variant: "outline" })}>Comienza ahora</Link>
              <Link href="./sesion" className={buttonVariants({ variant: "primary" })}>Comienza con un asesor</Link>
            </div>
          </section>
          <section>
            <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl py-3">Beneficios de la certificación</h2>
          </section>
          <section>
            <h4 className="scroll-m-20 text-2xl font-bold tracking-normal lg:text-2xl py-3">¿Quieres saber de la certificación gratuita?</h4>
          </section>
          <section>
            <h3 className="scroll-m-20 text-2xl font-bold tracking-normal lg:text-2xl py-3">¿Qué hay de nuevo hoy?</h3>
          </section>
          <Users/>
          <hr/>
          <Button>Try it now!</Button>
        </main>
      </>
  );
}
