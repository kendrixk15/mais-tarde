import { Inter } from "next/font/google";
import Container from "./Components/Container";
import NavBar from "./Components/Nav-bar";
import Menu from "./Components/Menu";
import History from "./Components/History";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full about-us-font h-fit flex justify-start flex-col gap-1 items-center bg-[#1C2120] transition-all duration-700">
      <Head>
        <title>Mais Tarde Coffee House</title>
      </Head>
      <div className="z-40">
        <NavBar />
      </div>
      <Container className="flex flex-col py-16 md:py-8 items-center text-white">
        <div className="w-full flex justify-center items-center relative">
          {/* <img src="/ice-no-bg.png" className="w-72 absolute" /> */}
          <img src="/mais-tarde.png" className="hidden md:block w-fit pl-24 pt-24 -z-0" />
          <h1 className="md:hidden">Mais Tarde Coffee House</h1>
        </div>
        <div>
          <History />
        </div>
        <div id="menu" className="flex flex-col justify-start items-start  ">
          <h2>Mais Tarde's Menus</h2>
          <Menu />
        </div>
        <div className="py-24  px-8 md:px-0">
          {/* QUOTE */}
          "O café é um bálsamo para o coração e para o espírito"
          - Mário Quintana
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-full flex flex-col md:flex-row gap-20">
            <div>
              <h4 className="md:text-[48px] pb-4">Where to find us</h4>
              <p>123/4 Sukhumvit Rd,</p>
              <p>Khlong Tan Nuea, Watthana,</p>
              <p> Bangkok 10110, Thailand</p>
            </div>
            <div>
              Find Us on Google Map:
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.784408512915!2d100.56703251486836!3d13.731498501463074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f018cce6271%3A0x3314589d712fb05a!2sEmQuartier!5e0!3m2!1sen!2sth!4v1680540446513!5m2!1sen!2sth"
                style={{ border: 0, borderRadius: 20 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className=" w-fit h-auto md:w-[450px] md:h-[600px] py-4"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
