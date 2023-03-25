import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function HomeLink() {
  return (
    <div>
      <Link href="/" className={inter.className}>
        Accueil{" "}
        <Image
          src="/maeevick.png"
          alt="logo de goblin"
          width={100}
          height={100}
          priority
        />
      </Link>
    </div>
  );
}
