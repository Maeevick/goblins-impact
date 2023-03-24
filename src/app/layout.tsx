import "./globals.css";

export const metadata = {
  title: "Goblins Impact",
  description:
    "My Blog, my Game and my sandbox about Goblins, Code, and what I want...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
