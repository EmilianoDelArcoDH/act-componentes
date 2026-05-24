import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StreamFlix Actividades",
  description: "Actividades educativas embebibles para practicar componentes web.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
