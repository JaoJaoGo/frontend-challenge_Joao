import Formulario from "@/pages/formulario/index";
import { Metadata } from 'next';

export const metadata = {
  title: 'Imobimax - Formulário',
}

export default function Home() {
  return (
    <main className="app">
      <Formulario />
    </main>
  );
}