
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/global.css";
import { Providers } from "./providers";
import { PersistGate } from "redux-persist/integration/react";
import store,{persistor} from "@/lib/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "S-WORKS",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="wrapper">
        <div className="header">
          <div className="inner">
          </div>
        </div>
        <section id="content">
          <Providers>
              {children}
          </Providers>

        </section>
      </body>
    </html>
  );
}
