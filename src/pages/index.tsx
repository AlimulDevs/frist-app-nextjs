import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "../../components/layout";

export default function Home() {
  return (
    <>
      <Layout pageTitle="Home Page">
        <Image
          src="/tes.jpg"
          width={200}
          height={200}
          alt="tes image"
        ></Image>
        <img
          src="/tes.jpg"
          width={200}
          height={200}
          alt="tes image"
        />
        <h1 className={styles["title-homepage"]}>Welcome Alimul</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos eveniet
          tenetur aliquam et, rerum optio porro est quasi alias illo earum eius
          consectetur mollitia culpa sint similique repellat veniam inventore!
        </p>
      </Layout>
    </>
  );
}
