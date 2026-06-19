import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PPS Talentia",
  description:
    "Sistema web para gestionar PPS universitarias con configuración por institución, trazabilidad completa y flujo de constancia final.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
