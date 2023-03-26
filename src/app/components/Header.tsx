import { ReactNode } from "react";

export type HeaderProps = {
  description: ReactNode;
  action: JSX.Element;
};

export default function Header({ description, action }: HeaderProps) {
  return (
    <header className="w-full flex items-center justify-between">
      <p className="flex-none border border-green-900 rounded-lg p-2 m-2 text-sm">
        {description}
      </p>
      <div className="flex-none p-2 m-2">{action}</div>
    </header>
  );
}