import type { ReactNode } from "react";
import Navbar from "../components/NavBar";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sv">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

