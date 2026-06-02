import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PPS Digital",
  description:
    "Portal académico para gestionar la acreditación de PPS Laboral con expediente digital y firma electrónica con trazabilidad.",
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
