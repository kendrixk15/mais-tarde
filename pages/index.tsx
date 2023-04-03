import { Inter } from "next/font/google";
import Container from "./Components/Container";
import NavBar from "./Components/Nav-bar";
import Menu from "./Components/Menu";
import History from "./Components/History";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full about-us-font h-fit flex justify-start flex-col gap-1 items-center bg-[#1C2120] transition-all duration-700">
      <div>
        <NavBar />
      </div>
      <Container className="flex flex-col py-24 md:py-8 items-center text-white">
        <div className="w-full flex justify-start items-center relative">
          <img src="/ice-no-bg.png" className="w-72 absolute" />
          <img src="/mais-tarde.png" className="w-fit pl-24" />
        </div>
        <div>
          <History />
        </div>
        <div id="menu" className="flex flex-col justify-start items-start ">
          Menus
          <Menu />
        </div>
        <div className="flex flex-col justify-center items-center">
          Where to find us
          <p>
            123/4 Sukhumvit Rd, Khlong Tan Nuea, Watthana, Bangkok 10110,
            Thailand
          </p>
        </div>
      </Container>
    </div>
  );
}
