import type { Metadata } from "next";
import { Great_Vibes, Poppins } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Yury | Creadora de Contenido & TikTok Shop",
  description:
    "Yury — creadora de contenido y vendedora en TikTok Shop. Belleza, skincare, moda y hallazgos virales.",
  openGraph: {
    title: "Yury | TikTok Shop & Contenido",
    description:
      "Recomiendo lo que me encanta. Descubre mis tiendas, videos y media kit.",
    images: ["/assets/yurifoto.png"],
  },
  icons: {
    icon: "/assets/yurifoto.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${greatVibes.variable} ${poppins.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
