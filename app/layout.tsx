import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const oswald = Oswald({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Yury Chacón | Creadora de Contenido & TikTok Shop",
  description:
    "Yury Chacón — creadora de contenido, YC Noticias y consultora de marketing digital.",
  openGraph: {
    title: "Yury Chacón | YC Noticias",
    description:
      "Noticias, marketing digital, Amazon y contenido. Descubre mis canales y media kit.",
    images: ["/assets/yurifoto.png"],
  },
  icons: {
    icon: [{ url: "/assets/Ycnoticas.png", type: "image/png" }],
    apple: "/assets/Ycnoticas.png",
    shortcut: "/assets/Ycnoticas.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={oswald.variable}>
      <body className={oswald.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
