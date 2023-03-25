import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
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
        <h1>Goblins Impact</h1>
      </div>

      <div className={styles.grid}>
        <Link href="/" className={styles.card}>
          <h2 className={inter.className}>
            Blog <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Là où je partage mes pensées gobelinoïdes... <em>todo</em>
          </p>
        </Link>

        <Link href="/" className={styles.card}>
          <h2 className={inter.className}>
            Histoires <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Là où les gobelins prennent vie... <em>todo</em>
          </p>
        </Link>

        <Link href="/" className={styles.card}>
          <h2 className={inter.className}>
            Jeu <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Là où commence ton aventure gobelinesque... <em>todo</em>
          </p>
        </Link>
      </div>
    </main>
  );
}
