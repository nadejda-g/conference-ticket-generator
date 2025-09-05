import Image from "next/image";
import styles from "./page.module.css";
import Logo from "@/lib/Components/Logo";
import Header from "@/lib/Components/Header";
import Form from "@/lib/Components/Form";

export default function Home() {
  return (
      <div className={styles.mainPage}>
          <Logo/>
          <Header/>
          <Form/>
      </div>
  );
}
