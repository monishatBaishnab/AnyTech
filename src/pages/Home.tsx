import Header from "../components/Home/Header/Header";
import Philosophy from "../components/Home/Philosophy/Philosophy";
import Technology from "../components/Home/Technology/Technology";
import CountUp from "react-countup";
import Button from "../components/Sheared/Buttons/Button";

const logos = [
  "https://i.ibb.co.com/WvzdDvHy/3ce67f3ece1c1b696d9d6e75f665c31ac155b679-960x540.png",
  "https://i.ibb.co.com/zTYVmLw2/5f4683ef95594b29414088c82c00dddb4c61338b-862x289.png",
  "https://i.ibb.co.com/wFHptXnG/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527.png",
  "https://i.ibb.co.com/bMd6rWp8/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.png",
  "https://i.ibb.co.com/HSB5rGf/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png",
  "https://i.ibb.co.com/zW9GHR2Q/67ef6d224529c5521d5d38b4ac18521f589865d9-603x414-1.png",
  "https://i.ibb.co.com/PvBmQQtB/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png",
  "https://i.ibb.co.com/cXrKxGL6/9764422d5b731f38edd216852c7c77e650647975-500x330.png",
  "https://i.ibb.co.com/b9Lz6tz/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137.png",
  "https://i.ibb.co.com/6R68sPpr/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292.png",
  "https://i.ibb.co.com/qFNshcWJ/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png",
  "https://i.ibb.co.com/qYkp0chP/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png",
  "https://i.ibb.co.com/FbtYSH3W/d96d229024fe964c6cc68d62beb75b126b08d3b5-318x61.png",
  "https://i.ibb.co.com/LXMNKGZ7/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png",
  "https://i.ibb.co.com/wr0dpt4j/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png",
];

import webDesktopTwo from "../assets/backgrounds/WaveLinesDesktop2.svg";
import webDesktopOne from "../assets/backgrounds/WaveLinesDesktop2.svg";

const Home = () => {
  return (
    <main>
      <Header />
      {/* Finance Section */}
      <section>
        <div className="container py-10 grid grid-cols-1 gap-5 items-center md:grid-cols-2">
          <div className="space-y-8">
            <h6 className="text-lg font-semibold text-blue-600 -tracking-tighter">
              POWERING THE FUTURE OF FINANCE
            </h6>
            <h2 className="text-blue-950 text-3xl sm:text-5xl md:text-6xl font-semibold">
              Uncovering new ways to delight customers
            </h2>
            <p className="text-blue-950 font-semibold">
              AnyTech is revolutionising financial technology by introducing
              innovative and real-time transaction account processing
              capabilities, specifically designed for retail financial services.
            </p>
            <p className="text-blue-900">
              Our modern approach surpasses traditional banking and card
              processing systems, empowering you with the most advanced
              technology for lasting success.
            </p>
          </div>
          <div className="h-[520px] overflow-hidden relative">
            <div className="h-full w-full overflow-hidden pt-10">
              <img
                className="size-full object-contain"
                src="https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=960&auto=format"
                alt="Task"
              />
            </div>

            <div className="absolute left-10 top-[30%] w-20">
              <img
                src="https://cdn.sanity.io/images/6jywt20u/production/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg?w=74&auto=format"
                alt=""
              />
            </div>
            <div className="absolute left-40 top-[45%] w-20">
              <img
                src="https://cdn.sanity.io/images/6jywt20u/production/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg?w=89&auto=format"
                alt=""
              />
            </div>
            <div className="absolute right-10 top-[10%] w-28">
              <img
                src="https://cdn.sanity.io/images/6jywt20u/production/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg?w=116&auto=format"
                alt=""
              />
            </div>
            <div className="absolute left-0 right-0 -bottom-28">
              <img
                src="https://anytxn.com/backgrounds/home/futureOfFinance/foreground.png"
                alt=""
              />
            </div>
            <div className="absolute -z-10 left-0 right-0 -bottom-10">
              <img
                src="https://anytxn.com/backgrounds/home/futureOfFinance/background.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <svg
          className="undefined max-h-[240px] md:my-sm my-lg w-full min-h-[60px]"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1920 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.7"
            d="M-240 0L1680 0L-240 280L-240 0Z"
            fill="url(#paint0_linear_6055_471)"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_6055_471"
              x1="458.5"
              y1="1561.14"
              x2="392.705"
              y2="52.1879"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1F80F0"></stop>
              <stop offset="1" stop-color="#1F80F0" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </section>
      <Philosophy />
      <Technology />
      <section>
        <div className="container space-y-8">
          <h6 className="text-center text-lg font-semibold text-blue-600 -tracking-tighter">
            OUR PHILOSOPHY
          </h6>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center space-y-5">
              <h1 className="text-8xl font-bold text-blue-500">
                {">"}
                <CountUp end={20} />
              </h1>
              <h6 className="text-lg text-gray-800">Years of Experience</h6>
            </div>
            <div className="text-center space-y-5">
              <h1 className="text-8xl font-bold text-blue-500">
                <CountUp end={40} />
                {"+"}
              </h1>
              <h6 className="text-lg text-gray-800">Financial Institutions</h6>
            </div>
            <div className="text-center space-y-5">
              <h1 className="text-8xl font-bold text-blue-500">
                <CountUp end={200} />
                {"m"}
              </h1>
              <h6 className="text-lg text-gray-800">Customers Each</h6>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-10 gap-x-16 gap-y-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {logos?.map((logo) => (
            <div key={logo} className="flex items-center justify-center">
              <div className="">
                <img src={logo} alt={logo} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="footer">
        <div className="bg-radial-[at_20%_35%] pt-20 from-blue-400 to-blue-600 min-h-[600px] overflow-hidden relative">
          <div className="md:absolute z-50 left-0 right-0 top-20 container py-32 text-white space-y-6">
            <h1 className="text-4xl md:text-7xl w-full lg:w-1/2 font-semibold">
              Legacy no longer
            </h1>
            <p className="text-lg font-semibold w-full lg:w-1/2">
              Talk to us to find out how we can transform your organisation for
              the future
            </p>
            <Button>Contact Us</Button>
          </div>
          <div className="absolute -left-[70%] right-0 bottom-0 w-full h-full overflow-hidden">
            <img
              className="size-full object-cover object-left"
              src={webDesktopTwo}
              alt=""
            />
          </div>
          <div className="absolute left-0 right-0 bottom-0 w-full h-full overflow-hidden">
            <img
              className="size-full object-cover object-center"
              src={webDesktopTwo}
              alt=""
            />
          </div>
          <div className="absolute left-0 right-0 bottom-0 size-full">
            <img
              className="size-full object-contain object-left"
              src={webDesktopOne}
              alt=""
            />
          </div>
          <div className="absolute left-0 right-0 bottom-0 size-full">
            <img
              className="size-full object-contain object-right"
              src={webDesktopOne}
              alt=""
            />
          </div>
        </div>
      </section>
      <footer className="bg-blue-900">
        <div className="container py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-wrap justify-between">
            <div className="flex items-center justify-center md:justify-start">
              <img src="https://i.ibb.co.com/4ZJWt6Rp/logo-1.png" alt="" />
            </div>
            <div className="flex justify-center md:justify-end gap-5 text-lg text-white">
              <a href="#" className="hover:text-blue-500 transition-all">
                Our Solutions
              </a>
              <a href="#" className="hover:text-blue-500 transition-all">
                AnyCaas
              </a>
              <a href="#" className="hover:text-blue-500 transition-all">
                AnyBass
              </a>
              <a href="#" className="hover:text-blue-500 transition-all">
                AnyPass
              </a>
            </div>
          </div>
        </div>
        <div className='bg-blue-950'>
          <div className="container py-5 flex items-center justify-center md:justify-between flex-wrap">
            <h6 className="text-white">©2023 All rights reserved. Any Technology Pte Ltd.</h6>
            <h6 className="text-white">Privacy Policy</h6>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
