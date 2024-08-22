import { GoDownload } from "react-icons/go";
import Dashboard from "@/components/dashboard";
import Image from "next/image";
import { AiFillThunderbolt } from "react-icons/ai";
import anh14 from "../../public/anh14.png";
import anh15 from "../../public/anh15.png";
import anh16 from "../../public/anh16.png";
import anh17 from "../../public/anh17.png";
import anh18 from "../../public/anh18.png";
import anh19 from "../../public/anh19.jpg";
import anh13 from "../../public/anh13.jpg";
import anh8 from "../../public/anh8.png";
import anh9 from "../../public/anh9.png";
import anh10 from "../../public/anh10.png";
import anh11 from "../../public/anh11.png";
import anh12 from "../../public/anh12.png";
import anh2 from "../../public/anh2.jpg";
import anh4 from "../../public/anh3.png";
import anh5 from "../../public/anh5.jpg";
import anh6 from "../../public/anh6.png";
import anh7 from "../../public/anh7.png";
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { GiExpander } from "react-icons/gi";
import { FaApple } from "react-icons/fa6";
import { BsGooglePlay } from "react-icons/bs";
export default function Home() {
  return (
    <main className=" w-screen  ">
      <div className="px-[6%] pt-[10%]  pb-[15%] bg-gradient-to-b from-slate-500 bg-stone-950 text-slate-200  ">
        <p className="text-[60px] max-md:text-[30px]   text-center font-bold ">
          Easily invest in stocks and crypto{" "}
        </p>
        <p className="text-[60px] max-md:text-[30px] text-center font-bold ">
          in one{" "}
          <span className=" font-bold bg-gradient-to-r from-blue-700 to-purple-500 bg-clip-text  text-transparent">
            GoStock platform{" "}
          </span>{" "}
        </p>
        <p className="font-light max-md:text-[30px] text-center mt-7 max-md:hidden ">
          Get all the conveniences of investing in stocks or cryptocurrencies in
          one
        </p>
        <p className="font-light text-center max-md:hidden">
          {" "}
          GoStock platform.Now you can use this app in desktop version
        </p>
        <div className="flex justify-center space-x-10 mt-7">
          <p className="p-2 cursor-pointer outline outline-2 rounded-full hover:outline-blue-500 ">
            How it work
          </p>
          <div className="flex cursor-pointer items-center space-x-1 rounded-full bg-slate-100 hover:text-slate-50 hover:bg-slate-600 text-black p-2">
            <p>Get app now</p>
            <p>
              <GoDownload />
            </p>
          </div>
        </div>
      </div>
      <div className=" flex justify-center relative max-xl:hidden ">
        <div className="w-[70%]  absolute top-[-100px] ">
          <Dashboard />
        </div>
      </div>
      <ul className=" max-xl:hidden  mt-[700px] max-xl:mt-10 pb-10 bg-white flex justify-center space-x-10">
        <li>
          <Image
            className="opacity-50 "
            src={anh14}
            alt="1"
            width={100}
            height={20}
          ></Image>
        </li>
        <li>
          <Image
            className="opacity-50"
            src={anh15}
            alt="1"
            width={100}
            height={20}
          ></Image>
        </li>
        <li>
          <Image
            className="opacity-50"
            src={anh16}
            alt="1"
            width={100}
            height={20}
          ></Image>
        </li>
        <li>
          <Image
            className="opacity-50"
            src={anh17}
            alt="1"
            width={180}
            height={20}
          ></Image>
        </li>
        <li>
          <Image
            className="opacity-50"
            src={anh18}
            alt="1"
            width={200}
            height={20}
          ></Image>
        </li>
        <li>
          <Image
            className="opacity-50"
            src={anh19}
            alt="1"
            width={140}
            height={20}
          ></Image>
        </li>
      </ul>
      <div className="mx-[22%] max-md:block max-xl:mx-10 flex mt-10 px-10">
        <div className="relative w-full ">
          <div className="  py-6 px-10 bg-gradient-to-b from-indigo-800 to-indigo-950  blur-[1px] rounded-3xl ">
            <div className=" bg-white p-3 rounded-lg ">
              <div className="flex justify-between items-center mb-4">
                <p className="font-bold">My watchlist</p>
                <p className="text-[20px]">+</p>
              </div>
              <div className="divide-y space-y-3 divide-slate-200">
                <div className="flex items-center justify-between text-[12px]">
                  <div className="flex items-center">
                    <p>
                      <Image
                        className="rounded-full"
                        src={anh8}
                        alt="1"
                        width={40}
                        height={22}
                      ></Image>
                    </p>
                    <div>
                      <p className="font-bold">SPOT</p>
                      <p className="text-10px">Spotify</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold">$310,40</p>
                    <p className="text-red-500">-1,10%</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[12px] pt-3">
                  <div className="flex items-center space-x-2">
                    <p>
                      <Image
                        className="rounded-full"
                        src={anh9}
                        alt="1"
                        width={22}
                        height={22}
                      ></Image>
                    </p>
                    <div>
                      <p className="font-bold">ABNB</p>
                      <p className="text-10px">Airbnb</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold">$132,40</p>
                    <p className="text-red-500">-0,10%</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[12px] pt-3">
                  <div className="flex items-center space-x-2">
                    <p>
                      <Image
                        className="rounded-full"
                        src={anh10}
                        alt="1"
                        width={22}
                        height={22}
                      ></Image>
                    </p>
                    <div>
                      <p className="font-bold">SHOP</p>
                      <p className="text-10px">Shoppify</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold">$12,40</p>
                    <p className="text-red-500">-0,90%</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[12px] pt-3">
                  <div className="flex items-center space-x-2">
                    <p>
                      <Image
                        className="rounded-full"
                        src={anh11}
                        alt="1"
                        width={22}
                        height={22}
                      ></Image>
                    </p>
                    <div>
                      <p className="font-bold">SONY</p>
                      <p className="text-10px">Playstation</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold">$1,40</p>
                    <p className="text-red-500">-2,90%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex max-xl:hidden items-center rounded-xl w-[360px] p-3 h- left-[20px] justify-between text-[12px] pt-3  absolute bg-slate-100 shadow-md  opacity-100 top-[130px] ">
            <div className="flex items-center space-x-2">
              <p>
                <Image
                  className="rounded-full"
                  src={anh12}
                  alt="1"
                  width={22}
                  height={22}
                ></Image>
              </p>
              <div>
                <p className="font-bold">DBX</p>
                <p className="text-10px">Dropbox Inc</p>
              </div>
            </div>
            <div>
              <p className="font-bold">$100,40</p>
              <p className="text-red-500">-3,90%</p>
            </div>
          </div>
        </div>

        <div className="w-full pl-20 max-sm:pl-5 mt-7">
          <p className="text-[35px] max-md:text-[20px]  font-medium leading-5 ">Easily monitor </p>
          <p className="text-[35px] max-md:text-[20px]  font-medium ">stock movements</p>
          <p className="text-[35px]  max-md:text-[20px] font-medium leading-5">
            on <span className="text-blue-500">GoStock</span>
          </p>
          <p className="font-light mt-4">
            Monitor the stocks you are after in real time{" "}
          </p>
          <p className="font-light mb-4">
            and of course easily and accurately{" "}
          </p>
          <div className="flex items-center space-x-2">
            <p className="p-1 bg-slate-300 rounded-full text-[10px]">
              <FaChevronDown />
            </p>
            <p className="font-light">Monitor stocks easily and accurately</p>
          </div>
          <div className="flex items-center space-x-2">
            <p className="p-1 bg-slate-300 rounded-full text-[10px]">
              <FaChevronDown />
            </p>
            <p className="font-light">
              Get regular reports on the shares you own
            </p>
          </div>
          <button className="py-2 px-3 text-[14px] mt-4 bg-black rounded-full text-white">
            Learn more
          </button>
        </div>
      </div>

      <div className="mx-[15%] max-xl:mx-10 flex max-md:pl-20 max-sm:pl-5 mt-20 max-md:block ">
        <div className="w-full pl-20 max-md:pl-1  mt-7">
          <p className="text-[12px] max-sm:hidden text-center font-bold px-2 rounded-full shadow-md w-[40%] mb-10 ">
            GET A LOT OF INVESTMENT EASY
          </p>
          <p className="text-[35px] max-md:text-[20px] font-medium leading-5">A wide variety of</p>
          <p className="text-[35px] max-md:text-[20px]  font-medium ">stocks from all over </p>
          <p className="text-[35px] max-md:text-[20px]  font-medium leading-5 mb-10">the world</p>

          <div className="flex text-[12px] space-x-10">
            <div className=" flex items-start space-x-2 ">
              <p className="p-1 text-[10px]">
                <GiExpander />
              </p>
              <div>
                <p>Starting from local stocks,</p>
                <p>US stocks you can find and</p>
                <p>you can buy here</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <p className="p-1 text-[10px]">
                <GiExpander />
              </p>
              <div>
                <p>you can buy international</p>
                <p>stocks easily and quickly</p>
                <p>only on GoStock</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" relative  w-[60%] max-md:w-full max-md:mt-10 py-3 px-10 bg-gradient-to-b from-indigo-800 h-[350px] to-indigo-950   rounded-3xl ">
          <div className="flex top-[170px] rotate-12 left-[100px] absolute space-x-6 justify-center py-5 rounded-lg  text-[12px] p-3 bg-slate-50 w-[55%]">
            <div className="space-y-3">
              <div className="flex items-center space-x-1">
                <p className="  ">
                  <Image
                    className="rounded-full"
                    src={anh4}
                    alt="1"
                    width={22}
                    height={20}
                  ></Image>
                </p>
                <p className="font-medium">Apple</p>
              </div>
              <p className="font-light">Total Shares</p>
              <p className="font-light">Total Return</p>
            </div>
            <div className="">
              <p>
                <Image src={anh2} alt="1" width={50} height={30}></Image>
              </p>
              <p className="mt-[1px] font-bold">$10,40</p>
              <div className="flex mt-[10px] items-center text-red-500">
                <p className="">-9,10%</p>
                <p>
                  <FaLongArrowAltDown />
                </p>
              </div>
            </div>
          </div>
          <div className="flex absolute bg-slate-100 origin-bottom -rotate-12 top-[120px] left-[100px]   space-x-6 justify-center py-5 rounded-lg  text-[12px] p-3  w-[55%]">
            <div className="space-y-3">
              <div className="flex items-center space-x-1">
                <p className="  ">
                  <Image
                    className="rounded-full"
                    src={anh4}
                    alt="1"
                    width={22}
                    height={20}
                  ></Image>
                </p>
                <p className="font-medium">Apple</p>
              </div>
              <p className="font-light">Total Shares</p>
              <p className="font-light">Total Return</p>
            </div>
            <div className="">
              <p>
                <Image src={anh2} alt="1" width={50} height={30}></Image>
              </p>
              <p className="mt-[1px] font-bold">$310,40</p>
              <div className="flex mt-[10px] items-center text-red-500">
                <p className="">-1,10%</p>
                <p>
                  <FaLongArrowAltDown />
                </p>
              </div>
            </div>
          </div>
          <div className="flex absolute bg-white top-[80px] shadow-sm left-[100px] space-x-6 justify-center py-5 rounded-lg  text-[12px] p-3  w-[55%]">
            <div className="space-y-3">
              <div className="flex items-center space-x-1">
                <p className="  ">
                  <Image
                    className="rounded-full"
                    src={anh4}
                    alt="1"
                    width={22}
                    height={20}
                  ></Image>
                </p>
                <p className="font-medium">Apple</p>
              </div>
              <p className="font-light">Total Shares</p>
              <p className="font-light">Total Return</p>
            </div>
            <div className="">
              <p>
                <Image src={anh2} alt="1" width={50} height={30}></Image>
              </p>
              <p className="mt-[1px] font-bold">$310,40</p>
              <div className="flex mt-[10px] items-center text-red-500">
                <p className="">-1,10%</p>
                <p>
                  <FaLongArrowAltDown />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-[35px] pl-[17%] font-medium mt-20">
        Find the most suitable
      </p>
      <p className="text-[35px] pl-[17%] font-medium">
        stock for you to buy now
      </p>

      <div className="flex justify-center  mt-10">
        <div className="w-[70%] max-lg:w-[90%] max-sm:hidden bg-slate-100 shadow-lg py-4 px-6 divide-y space-y-3 divide-slate-300 rounded-lg">
          <div className=" grid grid-cols-5 justify-items-center  text-[12px]">
            <div className="flex items-center font-bold text-slate-500">
              STOCK NAME
            </div>
            <p className="font-bold text-slate-500">MARKET CAP</p>
            <p className="font-bold text-slate-500">VOLUME</p>
            <p className="font-bold text-slate-500">SUPPLY</p>
            <div className="flex space-x-2 font-bold text-slate-500">
              TRADEACTIVITIES
            </div>
          </div>
          <div className="grid grid-cols-5 justify-items-center items-center  text-[12px] pt-2">
            <div className="flex items-center">
              <p>
                <Image
                  className="rounded-full"
                  src={anh8}
                  alt="1"
                  width={40}
                  height={22}
                ></Image>
              </p>
              <div>
                <p className="font-bold">SPOT</p>
                <p className="text-10px">Spotify</p>
              </div>
            </div>
            <p className="font-bold">$377,37B</p>
            <p className="font-bold">$48,37B</p>
            <p className="font-bold">$38,40B</p>
            <div className="flex space-x-2">
              <p className="text-green-500 font-bold">$67% Buy</p>
              <p className="bg-slate-400 h-full text-slate-400 w-[3px]">l</p>
              <p className="text-red-500 font-bold">31% Sell</p>
            </div>
          </div>
          <div className="grid grid-cols-5 justify-items-center items-center  text-[12px] pt-2">
            <div className="flex items-center space-x-2">
              <p>
                <Image
                  className="rounded-full"
                  src={anh9}
                  alt="1"
                  width={22}
                  height={22}
                ></Image>
              </p>
              <div>
                <p className="font-bold">ABNB</p>
                <p className="text-10px">Airbnb</p>
              </div>
            </div>
            <p className="font-bold">$430,37B</p>
            <p className="font-bold">$78,07B</p>
            <p className="font-bold">$100,40B</p>
            <div className="flex space-x-2">
              <p className="text-green-500 font-bold">$41% Buy</p>
              <p className="bg-slate-400 h-full text-slate-400 w-[3px]">l</p>
              <p className="text-red-500 font-bold">21% Sell</p>
            </div>
          </div>
          <div className="grid grid-cols-5 justify-items-center items-center  text-[12px] pt-2">
            <div className="flex items-center space-x-2">
              <p>
                <Image
                  className="rounded-full"
                  src={anh10}
                  alt="1"
                  width={22}
                  height={22}
                ></Image>
              </p>
              <div>
                <p className="font-bold">SHOP</p>
                <p className="text-10px">Shoppify</p>
              </div>
            </div>
            <p className="font-bold">$60,37B</p>
            <p className="font-bold">$68,07B</p>
            <p className="font-bold">$5,4B</p>
            <div className="flex space-x-2">
              <p className="text-green-500 font-bold">$44% Buy</p>
              <p className="bg-slate-400 h-full text-slate-400 w-[3px]">l</p>
              <p className="text-red-500 font-bold">81% Sell</p>
            </div>
          </div>
          <div className="grid grid-cols-5 justify-items-center items-center  text-[12px] pt-2">
            <div className="flex items-center space-x-2">
              <p>
                <Image
                  className="rounded-full"
                  src={anh11}
                  alt="1"
                  width={22}
                  height={22}
                ></Image>
              </p>
              <div>
                <p className="font-bold">SONY</p>
                <p className="text-10px">Playstation</p>
              </div>
            </div>
            <p className="font-bold">$4,37B</p>
            <p className="font-bold">$88,07B</p>
            <p className="font-bold">$56,4B</p>
            <div className="flex space-x-2">
              <p className="text-green-500 font-bold">$24% Buy</p>
              <p className="bg-slate-400 h-full text-slate-400 w-[3px]">l</p>
              <p className="text-red-500 font-bold">5% Sell</p>
            </div>
          </div>
          <div className="grid grid-cols-5 justify-items-center items-center  text-[12px] pt-2">
            <div className="flex items-center space-x-2">
              <p>
                <Image
                  className="rounded-full"
                  src={anh12}
                  alt="1"
                  width={22}
                  height={22}
                ></Image>
              </p>
              <div>
                <p className="font-bold">DBX</p>
                <p className="text-10px">Dropbox Inc</p>
              </div>
            </div>
            <p className="font-bold">$45,37B</p>
            <p className="font-bold">$58,07B</p>
            <p className="font-bold">$90,4B</p>
            <div className="flex space-x-2">
              <p className="text-green-500 font-bold">$64% Buy</p>
              <p className="bg-slate-400 h-full text-slate-400 w-[3px]">l</p>
              <p className="text-red-500 font-bold">51% Sell</p>
            </div>
          </div>
          <div className="grid grid-cols-5 justify-items-center items-center  text-[12px] pt-2">
            <div className="flex items-center space-x-2">
              <p>
                <Image
                  className="rounded-full"
                  src={anh13}
                  alt="1"
                  width={22}
                  height={22}
                ></Image>
              </p>
              <div>
                <p className="font-bold">DBX</p>
                <p className="text-10px">Dropbox Inc</p>
              </div>
            </div>
            <p className="font-bold">$6,37B</p>
            <p className="font-bold">$10,07B</p>
            <p className="font-bold">$50,4B</p>
            <div className="flex space-x-2">
              <p className="text-green-500 font-bold">$74% Buy</p>
              <p className="bg-slate-400 h-full text-slate-400 w-[3px]">l</p>
              <p className="text-red-500 font-bold">21% Sell</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[100px] mb-5 ">
        <p className="text-[12px] shadow-sm rounded-full font-medium text-center p-1 w-[200px] bg-slate-100 ">
          GET THE APP FOR FREE
        </p>
      </div>
      <div className="text-[35px] leading-10 font-medium my-8">
        <p className="text-center">Download the application and</p>
        <p className="text-center">feel the ease of investing</p>
      </div>
      <p className="text-center text-[14px] text-slate-500">
        You can now use the GoStock application in the mobile version.You can
        get the
      </p>
      <p className="text-center text-[14px] text-slate-500 mb-8">
        app in the Appstore or Playstore.Download now and feel the convenience!
      </p>
      <div className="flex justify-center space-x-6 relative">
        <div className="flex items-center px-4 border-2 border-black">
          <p className="text-[25px]">
            <FaApple />
          </p>
          <div>
            <p className="text-[8px] font-bold">Download on the</p>
            <p className="text-[13px] font-bold ">App Store</p>
          </div>
        </div>
        <div className="flex items-center px-4 border-2 border-black">
          <p className="text-[25px]">
            <BsGooglePlay />
          </p>
          <div>
            <p className="text-[8px] font-bold">GET IT ON</p>
            <p className="text-[13px] font-bold ">Google Play</p>
          </div>
        </div>
        <p className="absolute max-xl:hidden top-[-250px] left-[350px] p-2 bg-slate-100 rounded-full shadow-sm">
          <Image
            className="rounded-full"
            src={anh4}
            alt="1"
            width={50}
            height={20}
          ></Image>
        </p>
        <p className=" absolute max-xl:hidden top-[-130px] left-[400px]  p-2 bg-slate-100 rounded-full shadow-sm">
          <Image
            className="rounded-full"
            src={anh5}
            alt="1"
            width={30}
            height={20}
          ></Image>
        </p>

        <p className=" max-xl:hidden absolute top-[-150px] left-[1050px] p-2 bg-slate-100 rounded-full shadow-sm">
          <Image
            className="rounded-full"
            src={anh6}
            alt="1"
            width={32}
            height={20}
          ></Image>
        </p>
        <p className=" max-xl:hidden p-2 bg-slate-100 rounded-full shadow-sm absolute top-[-300px] left-[1080px]">
          <Image
            className="rounded-full"
            src={anh7}
            alt="1"
            width={50}
            height={20}
          ></Image>
        </p>
      </div>
      <div className="bg-slate-300 h-[2px] my-[80px] "></div>
      <div className="flex text-[14px] space-x-20 justify-center max-lg:hidden">
        <div>
          <div className="flex  items-center  space-x-1 ">
            <p className="bg-black p-1 rounded-full">
              <AiFillThunderbolt className="text-white  " />
            </p>
            <p className="font-bold  ">GoStock</p>
          </div>
          <div className="space-y-1 my-5">
            <p>Technology Park</p>
            <p>8-14 Marie Curie Street </p>
            <p>08042 Barcelona</p>
          </div>
          <p>gostock@example.com</p>
        </div>
        <div>
          <p className="font-bold mb-5">Platform</p>
          <div className="space-y-2">
            <p>Analytics</p>
            <p>Collaboration</p>
            <p>Data Management</p>
            <p>Integrations</p>
            <p>Security</p>
          </div>
        </div>
        <div>
          <p className="font-bold mb-5">Resources</p>
          <div className="space-y-2">
            <p>Customers</p>
            <p>Strategic Finance</p>
            <p>Ebooks & Events</p>
            <p>Podcast & video</p>
          </div>
        </div>
        <div>
          <p className="font-bold mb-5">Solutions</p>
          <div className="space-y-2">
            <p>Financial</p>
            <p>Investoes & CEOs</p>
            <p>Tevenue Operations</p>
            <p>Sales & Marketing</p>
            <p>Human Resources</p>
          </div>
        </div>
        <div>
          <p className="font-bold mb-5">Resources</p>
          <div className="space-y-2">
            <p>Customers</p>
            <p>Strategic Finance</p>
            <p>Ebooks & Guides</p>
            <p>Webinars & Events</p>
            <p>Podcast & video</p>
            <p>Matrics Catalog</p>
          </div>
        </div>
      </div>
     
    </main>
  );
}
