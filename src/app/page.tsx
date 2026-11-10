import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import {
  Contacto,
  Faq,
  Hero,
  Proceso,
  Servicios,
  SobreMi,
  Trabajos,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Servicios />
        <Trabajos />
        <Proceso />
        <SobreMi />
        <Faq />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
