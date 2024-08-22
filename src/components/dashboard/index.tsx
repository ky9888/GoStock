"use client";
import Image from "next/image";
import { FaLongArrowAltDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaArrowUpLong } from "react-icons/fa6";
import { BsFillGridFill } from "react-icons/bs";
import { BsFillFloppyFill } from "react-icons/bs";
import { AiFillContainer } from "react-icons/ai";
import { MdScreenshotMonitor } from "react-icons/md";
import { FaSortDown } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { CiPhone } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { LineChart } from "@mui/x-charts/LineChart";
import { MdOutlineMailOutline } from "react-icons/md";
import anh1 from "../../../public/anh1.png";
import anh4 from "../../../public/anh3.png";
import anh8 from "../../../public/anh8.png";
import anh9 from "../../../public/anh9.png";
import anh10 from "../../../public/anh10.png";
import anh11 from "../../../public/anh11.png";
import anh12 from "../../../public/anh12.png";
import anh13 from "../../../public/anh13.jpg";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import Slide from "../slide";
import { UserHook } from "../hook/userHook";

const Dashboard = () => {
  const [drop, setDrop] = useState(true);
  const { getUserId } = UserHook();
  const [theme, setTheme] = useState("light");
  const element = document.documentElement;
  const option = [
    { icon: <MdLightMode />, text: "light" },
    { icon: <MdDarkMode />, text: "dark" },
  ];
  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        break;
      case "light":
        element.classList.remove("dark");
        break;
      default:
        break;
    }
  }, [theme, element.classList]);

  return (
    <div
      className={`bg-slate-300 dark:text-white   flex  shadow-md relative ${
        theme === "dark" ? "" : "rounded-2xl "
      } `}
    >
      <div 
        className={`w-[22%] max-sm:hidden max-lg:w-[35%] dark:bg-slate-800 dark:text-white bg-white px-5 py-7 font-medium ${
          theme === "dark" ? "" : "rounded-l-2xl "
        }`}
      >
        <div className="flex  items-center space-x-1 justify-center">
          <p className="bg-black dark:bg-slate-100  p-1 rounded-full">
            <AiFillThunderbolt className="text-white dark:text-slate-900 " />
          </p>
          <p className=" text-[15px] font-bold">GoStock</p>
        </div>

        <div className="bg-slate-950 dark:bg-slate-700  my-7 text-white flex items-center justify-between p-3 rounded-lg">
          <div>
            <p className="text-[12px]">Total Investment</p>
            <p>$5380,90</p>
          </div>
          <div className="flex text-[12px] h-full items-center text-green-500">
            <p className="">+18,10%</p>
            <p>
              <FaArrowUpLong />
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-1 p-2 cursor-pointer rounded-lg hover:bg-slate-200">
          <p className="text-[20px]">
            <GoHome />
          </p>
          <p className="text-[15px] ">Home</p>
        </div>
        <div className="flex items-center space-x-1 p-2 cursor-pointer rounded-lg  hover:bg-slate-200">
          <p>
            <BsFillGridFill />
          </p>
          <p className="text-[15px] ">Dashboard</p>
        </div>
        <div className="flex items-center space-x-1 p-2 cursor-pointer rounded-lg  hover:bg-slate-200">
          <p>
            <BsFillFloppyFill />
          </p>
          <p className="text-[15px]">Wallet</p>
        </div>
        <div className="flex items-center space-x-1 p-2 cursor-pointer rounded-lg  hover:bg-slate-200">
          <p>
            <AiFillContainer />
          </p>
          <p className="text-[15px]">New</p>
        </div>

        <div
          onClick={() => setDrop(!drop)}
          className="flex justify-between cursor-pointer  p-2 rounded-lg  hover:bg-slate-200"
        >
          <div className="flex items-center space-x-1 ">
            <p>
              <MdScreenshotMonitor />
            </p>
            <p className="text-[15px]">Stock & fund</p>
          </div>
          <p>
            <FaSortDown />
          </p>
        </div>
        {drop && (
          <div className="text-[14px] px-7 font-light space-y-1">
            <p className="font-medium">Stock</p>
            <p>Cryptocurrency</p>
            <p>Mutual Fund</p>
            <p>Gold</p>
          </div>
        )}
        <div className="bg-slate-500 h-[1px] mb-3 mt-20"></div>

        <div className="flex items-center space-x-1 p-2 cursor-pointer rounded-lg  hover:bg-slate-200">
          <p>
            <IoPeopleOutline />
          </p>
          <p className="text-[15px]">Our community</p>
        </div>
        <div className="flex items-center space-x-1 p-2 cursor-pointer rounded-lg  hover:bg-slate-200">
          <p>
            <IoMdSettings />
          </p>
          <p className="text-[15px]">Settings</p>
        </div>
        <div className="flex items-center space-x-1 p-2 cursor-pointer rounded-lg  hover:bg-slate-200">
          <p>
            <CiPhone />
          </p>
          <p className="text-[15px]">Contact us</p>
        </div>
      </div>
      <div
        className={`bg-slate-100 max-sm:w-full dark:bg-slate-700  max-lg:w-[65%]  w-[78%]  ${
          theme === "dark" ? "" : "rounded-r-2xl "
        }`}
      >
        <div
          className={`bg-white p-5 dark:bg-slate-700 max-lg:block max-lg:space-y-6 flex justify-between items-center ${
            theme === "dark" ? "" : "rounded-r-2xl "
          }`}
        >
          <div className=" flex justify-between space-x-3 max-sm:block max-sm:space-y-3 ">
            <div className="flex  w-[270px] max-sm:w-[50%] bg-slate-100 p-2 space-x-1 rounded-md items-center ">
              <label htmlFor=" dark:text-white">
                <CiSearch className="dark:text-black" />
              </label>
              <input
                type="text"
                className="text-[12px]  bg-slate-100 w-full outline-0  dark:text-black "
                placeholder="pres to search for various stocks"
              />
            </div>
            <div className="text-[35px] max-sm:w-[40%] max-sm:justify-around  dark:bg-slate-500 bg-slate-300 py-1 px-4 spacex-2 flex space-x-5 rounded-2xl">
              {option?.map((e) => (
                <button
                  key={e.text}
                  onClick={() => setTheme(e.text)}
                  className={`  ${theme === e.text && "text-blue-500"}`}
                >
                  {e.icon}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4 max-lg:flex max-lg:justify-end">
            <p className="text-[22px]">
              <MdOutlineMailOutline />
            </p>
            <div className="text-[22px] relative">
              <p>
                <FaRegBell />
              </p>
              <p className="absolute text-[9px] top-[-5px] font-medium text-white left-2 bg-red-500 rounded-full px-[4px] ">
                5
              </p>
            </div>
            <div className="bg-black w-[1px] dark:text-slate-700 dark:bg-white text-white h-full">
              l
            </div>
            <p>
              <Image src={anh1} alt="1" width={22} height={20}></Image>
            </p>
            {!getUserId?.userName ? (
              <>
                <div className=" flex space-x-1">
                  <p className="text-[15px] font-medium">Nguyen van ky</p>
                  <p>
                    <FaSortDown />
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className=" flex space-x-1">
                  <p className="text-[15px] font-medium">
                    {getUserId?.userName}
                  </p>
                  <p>
                    <FaSortDown />
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
        <p className="font-medium text-[16px] p-5 ">My portfoliio</p>
        <Slide />

        <div className="flex m-8 justify-between max-lg:block">
          <div className="bg-white w-[65%] max-lg:w-full max-lg:mb-10 dark:text-black  p-5 rounded-lg">
            <div className="flex justify-between border-b pb-6 ">
              <div className="flex items-center space-x-3">
                <p>
                  <Image
                    className="rounded-full"
                    src={anh4}
                    alt="1"
                    width={25}
                    height={20}
                  ></Image>
                </p>
                <div>
                  <p className="text-[15px ] font-bold">Apple inc</p>
                  <p className="text-[12px] font-light">AAPL</p>
                </div>
              </div>
              <div>
                <div>
                  <div className="flex items-center space-x-2">
                    <div className="flex  items-center text-white text-[8px] py-[1px] px-[2px] rounded-full bg-red-500">
                      <p className="">-2,10%</p>
                      <p>
                        <FaLongArrowAltDown />
                      </p>
                    </div>
                    <p className="font-bold">$150,70</p>
                  </div>
                  <p className="text-[10px] text-end">Last update at 14:30</p>
                </div>
                <p></p>
              </div>
            </div>
            <div className="flex justify-center ">
              <LineChart
                className=""
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                  {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                    area: true,
                  },
                ]}
                width={500}
                height={300}
              />
            </div>
          </div>

          <div className="w-[30%] max-lg:w-full bg-white  dark:text-black p-3 rounded-lg">
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
              <div className="flex items-center justify-between text-[12px] pt-3">
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
              <div className="flex items-center justify-between text-[12px] pt-3">
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
                <div>
                  <p className="font-bold">$4,40</p>
                  <p className="text-red-500">-3,90%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
