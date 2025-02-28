import AfterBanner from "@/components/AfterBanner";
import Banner from "@/components/Banner";
import Cooperate from "@/components/Cooperate";
import Friendly from "@/components/Friendly";
import Header from "@/components/Header";
import Impress from "@/components/Impress";
import { Inf } from "@/components/Inf";
import Invest from "@/components/Invest";
import Mission from "@/components/Mission";
import Vision from "@/components/Vision";

export default function Home() {
  return (
    <div className="max-w-[1600px] bg-white w-full relative overflow-hidden">
      <header className="absolute top-0 z-10 left-0 right-0">
        <Header />
      </header>
      <main className="main">
        <section id="banner">
          <Banner />
        </section>
        <section id="after-banner">
          <AfterBanner />
        </section>
        <section id="vision">
          <Vision />
        </section>
        <section id="mision">
          <Mission />
        </section>
        <section id="investment">
          <Invest />
        </section>
        <section id="impress">
          <Impress />
        </section>
        <section id="friendly">
          <Friendly />
          <div className="bg-tran"></div>
        </section>
        <section id="cooperate">
          <Cooperate />
        </section>
        <section id="inf">
          <Inf />
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
