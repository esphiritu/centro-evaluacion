import Users from "../lib/jsonplaceholder/Users";

export default function Home({Component, pageProps}) {
  return (
      <>
        <main>
          <h1>Página principal</h1>
          <Users/>
        </main>
      </>
  );
}
