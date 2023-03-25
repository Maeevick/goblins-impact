import "./globals.css";

export const metadata = {
  title: "Goblins Impact",
  description:
    "Le blog, le jeu et mon bac à sable à propos de Gobelins, de Code et de tout ce qui me passe par la tête...",
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
