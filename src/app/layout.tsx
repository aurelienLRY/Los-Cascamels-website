import type { Metadata } from "next";
import Provider from "./Provider";
import {
  Roboto,
  Love_Ya_Like_A_Sister,
  Shadows_Into_Light_Two,
  Roboto_Mono,
} from "next/font/google";

import "@/styles/globals.css";

/* components */
import { Header, Footer } from "@/components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

const mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

const loveYaLikeASister = Love_Ya_Like_A_Sister({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-love-ya-like-a-sister",
});

const shadowsIntoLightTwo = Shadows_Into_Light_Two({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-shadows-into-light-two",
});

export const metadata: Metadata = {
  title: "École primaire Los Cascamels - Rieux-Minervois",
  description: "École primaire Los Cascamels - Rieux-Minervois",
  keywords: [
    "École primaire Los Cascamels",
    "Rieux-Minervois",
    "École éducative",
    "Éducation innovante",
    "École enracinée dans la culture occitane",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${roboto.variable} ${mono.variable} ${loveYaLikeASister.variable} ${shadowsIntoLightTwo.variable} antialiased `}
      >
        <Provider>
          <Header />
          <main className="min-h-[80vh]">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
