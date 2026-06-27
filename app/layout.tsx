import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prumo — Trading automatizado com disciplina",
  description:
    "Automatize suas operações com disciplina e controle de risco, na sua própria conta de corretora. Sem emoção, dentro dos seus limites.",
  icons: {
    icon: "/prumo_mark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
