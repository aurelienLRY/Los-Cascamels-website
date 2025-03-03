import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - École Calandreta Los Cascamèls",
  description: "Contactez-nous pour plus d'informations",
  keywords: [
    "contact",
    "école primaire",
    "calandreta",
    "cascamèls",
    "contactez-nous",
  ],
  authors: [{ name: "Calandreta Los Cascamèls" }],
  openGraph: {
    url: `${process.env.NEXT_PUBLIC_URL}/contact`,
    title: "Contact - École Calandreta Los Cascamèls",
    description:
      "Contactez-nous pour plus d'informations , nous répondrons à vos questions dans les plus brefs délais",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/img/open-graph/og-contact.webp`,
        width: 1200,
        height: 630,
        alt: "Contact - École Calandreta Los Cascamèls",
      },
    ],
    locale: "fr-FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - École Calandreta Los Cascamèls",
    description:
      "Contactez-nous pour plus d'informations , nous répondrons à vos questions dans les plus brefs délais",
    images: [
      `${process.env.NEXT_PUBLIC_URL}/img/open-graph/og-contact-twitter.webp`,
    ],
  },
};
