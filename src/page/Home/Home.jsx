import style from "./home.module.css";
import Hero from "../../components/hero/hero";
import Abha from "../../components/abha/abha";
import Social from "../../components/social/social";

export default function Home() {
  return (
    <div className={style.home}>
      <Hero />
      <Abha />
      <Social />
    </div>
  );
}
