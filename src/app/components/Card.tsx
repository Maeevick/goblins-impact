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
      className="p-2 m-2 border rounded-lg border-transparent hover:border-orange-500 hover:italic"
    >
      <h2 className="text-2xl hover:underline">{title}</h2>
      <p className="italic text-s text-gray-400">{subtitle}</p>
    </Link>
  );
}
