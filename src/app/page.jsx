import Link from "next/link";
import styles from "./homepage.module.css";
import { Featured } from "@/component/feactured/Featured";
import { CategoryList } from "@/component/categoryList/CategoryList";
import { CardList } from "@/component/cardList/CardList";
import { Menu } from "@/component/Menu/Menu";


export default function Home({searchParams}) {
const page=parseInt(searchParams.page)||1

  return <div className={styles.container}>
    <Featured />
    <CategoryList />
    <div className={styles.content}>
      <CardList page={page} />
      <Menu />
    </div>
  </div>;
}
