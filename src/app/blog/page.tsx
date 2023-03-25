import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "../page.module.css";
import HomeLink from "../components/HomeLink";

const inter = Inter({ subsets: ["latin"] });

export default function Blog() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p className={inter.className}>
          Blog : Là où je partage mes pensées gobelinoïdes...
        </p>
        <HomeLink />
      </div>

      <div className={styles.center}></div>

      <div className={styles.grid}>
        <Link href="/blog" className={styles.card}>
          <h2 className={inter.className}>Pourquoi les gobelins ?</h2>
          <p className={inter.className}>
            <em>C&#39;est quoi ton délire !</em>
          </p>
        </Link>
      </div>
    </main>
  );
}
