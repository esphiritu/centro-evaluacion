import Users from "../lib/jsonplaceholder/Users";
import { Button } from "@/components/ui/button";

export default function Home({Component, pageProps}) {
  return (
      <>
        <main>
          <h1>Página principal</h1>
          <Users/>
          <Button>Try it now!</Button>
        </main>
      </>
  );
}
