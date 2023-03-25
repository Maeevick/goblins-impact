import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "../page.module.css";
import HomeLink from "../components/HomeLink";

const inter = Inter({ subsets: ["latin"] });

export default function Stories() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p className={inter.className}>
          Histoires : Là où les gobelins prennent vie......
        </p>
        <HomeLink />
      </div>

      <div className={styles.center}></div>

      <div className={styles.grid}>
        <Link href="/stories" className={styles.card}>
          <h2 className={inter.className}>Drôle d&#39;aventures</h2>
          <p className={inter.className}>
            <em>ou, comment se tromper en trois leçons.</em>
          </p>
        </Link>
      </div>
    </main>
  );
}
