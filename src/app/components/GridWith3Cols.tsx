import Card, { CardProps } from "./Card";

export type GridWith3ColsProps = {
  data: CardProps[];
};

export default function GridWith3Cols({ data }: GridWith3ColsProps) {
  return (
    <div className="flex flex-col-reverse md:flex-row">
      {data.map(({ href, title, subtitle }: CardProps, i: number) => (
        <Card key={i} href={href} title={title} subtitle={subtitle} />
      ))}
    </div>
  );
}
