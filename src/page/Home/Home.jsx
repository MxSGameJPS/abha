import style from "./home.module.css";
import Hero from "../../components/hero/hero";

export default function Home() {
  return (
    <div className={style.home}>
      <Hero />
    </div>
  );
}
