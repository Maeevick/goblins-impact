export type PageTitleProps = {
  title: string;
};

export default function PageTitle({ title }: PageTitleProps) {
  return (
    <div className="flex-1 p-20">
      <h1 className="text-4xl">{title}</h1>
    </div>
  );
}
