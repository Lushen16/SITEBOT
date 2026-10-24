import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SiteBot | Plataforma SaaS de Automação PokéTibia",
  description: "Targeting inteligente, cavebot sem falhas, rotação de skills otimizada e estatísticas em tempo real para PokéTibia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased selection:bg-emerald-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}