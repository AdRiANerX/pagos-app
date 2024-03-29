import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
// import CheckSession from "./CheckSession";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recaudación SDC",
  description: "Creado por Adrian Rico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={font.className}>
        <div className="mx-auto max-w-screen-md">
          {/* <CheckSession /> */}
          {children}
        </div>
      </body>
    </html>
  );
}
