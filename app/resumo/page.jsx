import Resumo from "@/pages/resumo/Resumo";
import { Metadata } from 'next';

export const metadata = {
  title: 'Imobimax - Resumo',
}

export default function Resume() {
  return (
    <main className="resumo">
      <Resumo />
    </main>
  );
}
