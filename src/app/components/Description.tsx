export type DescriptionProps = {
  title: string;
  subtitle: string;
  date: string;
};

export const Description = ({ title, subtitle, date }: DescriptionProps) => {
  return (
    <>
      <p className="text-lg">{title}</p>
      <p className="italic text-gray-500">{subtitle}</p>
      <br />
      <p className="italic text-s text-right">{date}</p>
    </>
  );
};
