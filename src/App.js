import AOS from "aos";
import "aos/dist/aos.css";

import main1 from "./assets/img/main-1.png";
import main2 from "./assets/img/main-2.png";
import mainx from "./assets/img/main-x.png";
import post from "./assets/img/tw-post.jpg";
import logo from "./assets/img/x-logo.png";

import "./App.scss";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="App bg-black">
      <header className="text-white py-8 px-5 lg:px-20 z-50 relative">
        <div className="flex justify-between">
          <div className="flex gap-3 lg:gap-5">
            <a href="#" target="_blank" rel="noopener noreferrer">
              UNISWAP
            </a>
            <a
              href="https://www.dextools.io/app/en/ether/pair-explorer/0x504e37d11bc6b49c5085057425ab3b5f37c3eebb"
              target="_blank"
              rel="noopener noreferrer">
              DEXTOOLS
            </a>
          </div>
          <div className="flex gap-3 lg:gap-5">
            <a
              href="https://t.me/Starlinkerc20"
              target="_blank"
              rel="noopener noreferrer">
              TELEGRAM
            </a>
            <a
              href="https://twitter.com/StarlinkERC20"
              target="_blank"
              rel="noopener noreferrer">
              TWITTER
            </a>
          </div>
        </div>
      </header>

      <main className="relative">
        <div className="max-w-32 z-20 w-20 lg:w-32 absolute left-1/2 -translate-x-1/2 lg:-top-10 -top-5">
          <img src={logo} alt="" />
        </div>
        <div className="max-w-md absolute z-50 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:block hidden">
          <img src={mainx} alt="" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div
            className="bg-white flex justify-center items-center h-[550px] xl:h-[600px]"
            data-aos="fade-right">
            <div className="max-w-2xl lg:w-3/4 w-full xl:h-[400px] h-[350px] lg:border-2 border-black rounded-lg p-5">
              <img
                className="border-2 border-black rounded-lg w-full h-full object-cover"
                src={post}
              />
            </div>
          </div>
          <div
            className="bg-black flex justify-center items-end h-[550px] xl:h-[600px]"
            data-aos="fade-left">
            <div className="max-w-2xl">
              <img src={main1} alt="" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div
            className="flex justify-center items-end h-[550px] xl:h-[600px]"
            data-aos="fade-right">
            <div className="max-w-2xl">
              <img src={main2} alt="" />
            </div>
          </div>
          <div
            className="bg-white text-black flex justify-center items-center h-[550px] xl:h-[600px]"
            data-aos="fade-left">
            <span className="max-w-xs text-center lg:text-left lg:max-w-xl px-5 break-words">
              0x81B583F02C21EAB51dFE93F1BE207059f47B53c0
            </span>
          </div>
        </div>
      </main>

      <footer className="text-center text-white pt-14 py-8">
        <span>All Rights Reserved | 2023 | developer@starlinkerc.com</span>
      </footer>
    </div>
  );
}

export default App;
