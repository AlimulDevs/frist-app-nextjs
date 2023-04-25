import React from "react";
import Link from "next/link";
import styles from "../../components/header/Header.module.css";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link
            href="/"
            className={router.asPath === "/" ? "active" : ""}
          >
            Home
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href="/blog"
            className={router.asPath === "/" ? "active" : ""}
          >
            Blog
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href="/users"
            className={router.asPath === "/" ? "active" : ""}
          >
            Users
          </Link>
        </li>
      </ul>
    </header>
  );
}
