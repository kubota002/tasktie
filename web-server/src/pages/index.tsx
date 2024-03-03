import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
    <h1>Welcome to My Homepage!</h1>
    <p>This is the content of the home page.</p>
  </div>
  );
}
