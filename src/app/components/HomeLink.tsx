import Link from "next/link";
import GoblinsImage from "./GoblinImage";

export default function HomeLink() {
  return (
    <Link
      href="/"
      className="flex flex-col md:flex-row justify-center items-center"
    >
      <p className="text-gray-400 text-xs italic px-2">Accueil</p>
      <GoblinsImage />
    </Link>
  );
}
