import Card, { CardProps } from "./Card";

export type CardLayoutProps = {
  data: CardProps[];
};

export default function CardLayout({ data }: CardLayoutProps) {
  return (
    <div className="flex flex-col-reverse md:flex-row">
      {data.map(({ href, title, subtitle }: CardProps, i: number) => (
        <Card key={i} href={href} title={title} subtitle={subtitle} />
      ))}
    </div>
  );
}
