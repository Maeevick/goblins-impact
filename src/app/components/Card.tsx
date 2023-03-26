import Link from "next/link";

export type CardProps = {
  href: string;
  title: string;
  subtitle: string;
};

export default function Card({ href, title, subtitle }: CardProps) {
  return (
    <Link
      href={href}
      className="p-2 m-2 border rounded-lg border-transparent hover:border-green-900 hover:italic"
    >
      <h2 className="text-2xl">{title}</h2>
      <p className="italic text-s text-gray-500">{subtitle}</p>
    </Link>
  );
}
