import React, { ReactNode } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../components/layout/Layout.module.css";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;

  return (
    <>
      <Head>
        <title>
          NextJS | {""} {pageTitle}
        </title>
        <meta
          name="description"
          content="Website NextJS First APP"
        />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
}
