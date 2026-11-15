
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nuvora Digital | Création de sites web en Tunisie",
  description:
    "Nuvora Digital accompagne les petites entreprises en Tunisie avec des sites web modernes, des boutiques en ligne et des solutions digitales.",
  keywords: [
    "Nuvora Digital",
    "création site web Tunisie",
    "site vitrine",
    "site e-commerce",
    "agence digitale",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
