import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p className={inter.className}>
          Pour suivre l&#39;aventure, le repo est{" "}
          <code className={styles.code}>
            <a
              href="https://github.com/Maeevick/goblins-impact"
              target="_blank"
              rel="noopener noreferrer"
            >
              ici
            </a>
          </code>
        </p>
        <div>
          <a
            className={inter.className}
            href="https://www.linkedin.com/in/aurel-estoup/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Par{" "}
            <Image
              src="/me.png"
              alt="Photo of me"
              width={100}
              height={100}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <h1 className={inter.className}>Goblins Impact</h1>
      </div>

      <div className={styles.grid}>
        <Link href="/blog" className={styles.card}>
          <h2 className={inter.className}>
            Le Blog <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            <em>Là où je partage mes pensées gobelinoïdes...</em>
          </p>
        </Link>

        <Link href="/stories" className={styles.card}>
          <h2 className={inter.className}>
            Les Nouvelles <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            <em>Là où les gobelins prennent vie...</em>
          </p>
        </Link>

        <Link href="/" className={styles.card}>
          <h2 className={inter.className}>
            Le Jeu <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            <em>Là où commence ton aventure gobelinesque...</em>
          </p>
        </Link>
      </div>
    </main>
  );
}
