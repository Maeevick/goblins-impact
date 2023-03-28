import { ReactNode } from "react";

export type HeaderProps = {
  description: ReactNode;
  action: JSX.Element;
};

export default function Header({ description, action }: HeaderProps) {
  return (
    <header className="w-full flex items-center justify-between">
      <div className="flex-none max-w-[120px] md:max-w-fit border border-orange-500 rounded-lg p-2 m-2 text-sm">
        {description}
      </div>
      <div className="flex-none p-2 m-2">{action}</div>
    </header>
  );
}
