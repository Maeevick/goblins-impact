export type DescriptionProps = {
  title: string;
  subtitle: string;
  date: string;
};

export const Description = ({ title, subtitle, date }: DescriptionProps) => {
  return (
    <>
      <h1 className="text-lg">{title}</h1>
      <p className="italic text-gray-400">{subtitle}</p>
      <br />
      <p className="italic text-s text-right">{date}</p>
    </>
  );
};
