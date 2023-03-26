import Link from "next/link";
import GoblinsImage from "./GoblinImage";

export default function HomeLink() {
  return (
    <Link href="/" className="flex justify-center items-center">
      <p className="text-gray-500 text-xs italic px-2">Retour</p>
      <GoblinsImage />
    </Link>
  );
}
