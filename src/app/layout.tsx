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
      <body className="max-w-4/5 w-4/5 mx-auto bg-gray-700 font-mono text-gray-50 min-h-screen">
        <main className="flex flex-col justify-between items-center min-h-screen pt-20 pb-10">
          {children}
        </main>
      </body>
    </html>
  );
}
