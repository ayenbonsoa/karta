import "./globals.css";

export const metadata = {
  title: "Karta",
  description: "CRM puissant pour la gestion de PME/TPE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
