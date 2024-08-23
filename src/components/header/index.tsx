"use client";
import { useState, useEffect } from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { UserHook } from "../hook/userHook";
import { useRouter, usePathname } from "next/navigation";
import { FiAlignJustify } from "react-icons/fi";
const Header = () => {
  const item = "flex justify-between items-center ";
  const router = useRouter();
  const pathname = usePathname();
  const [pathName, SetPathName] = useState<string | null>(pathname);
  const { getUserId } = UserHook();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    SetPathName(pathname);
  }, [pathname]);

  const handleNavigation = (path: string) => {
    if (pathName !== path) {
      SetPathName(null);
      router.push(path);
    }
  };
  return (
    <div
      className={`${item}   dark:text-white  py-5 px-[7%] bg-gray-900 text-slate-200 text-[15px] fixed top-0 z-20 w-full `}
    >
      <div className={`${item} space-x-1 max-md:hidden `}>
        <p className="bg-white p-1 rounded-full">
          <AiFillThunderbolt className="text-black" />
        </p>
        <p>GoStock</p>
      </div>
      <div
        className={`${item} space-x-[50px] max-md:space-x-5 ${
          getUserId?.userName ? "pr-20" : ""
        }`}
      >
        <div
          onClick={() => handleNavigation("/")}
          className={`px-5 py-2 rounded-full cursor-pointer hover:bg-slate-600 ${
            pathName === "/" ? "bg-slate-700" : ""
          }`}
        >
          Home
        </div>
        <div
          onClick={() => handleNavigation("/Dashboard")}
          className={`px-5 py-2 rounded-full cursor-pointer hover:bg-slate-600 ${
            pathName === "/Dashboard" ? "bg-slate-700" : ""
          }`}
        >
          Dashboard
        </div>
      </div>
      {!getUserId?.userName ? (
        <>
          <div className={`${item} space-x-5 max-md:hidden`}>
            <p
              onClick={() => handleNavigation("/login")}
              className={`px-5 py-2 rounded-full cursor-pointer hover:bg-slate-600 ${
                pathName === "/login" ? "bg-slate-700" : ""
              }`}
            >
              Login
            </p>
            <p
              onClick={() => handleNavigation("/singUp")}
              className={`px-5 py-2 rounded-full cursor-pointer hover:bg-slate-600 ${
                pathName === "/singUp" ? "bg-slate-700" : ""
              }`}
            >
              Sing up
            </p>
          </div>
        </>
      ) : (
        <></>
      )}
      <button className={`${isOpen && 'hidden max-md:hidden'} hidden max-md:block`} onClick={() => setIsOpen(!isOpen)}>
        <FiAlignJustify />
      </button>
      {isOpen && (
        <div>
          <p
            onClick={() => handleNavigation("/login")}
            className={`px-5 py-2 rounded-full cursor-pointer hover:bg-slate-600 ${
              pathName === "/login" ? "bg-slate-700" : ""
            }`}
          >
            Login
          </p>
          <p
            onClick={() => handleNavigation("/singUp")}
            className={`px-5 py-2 rounded-full cursor-pointer hover:bg-slate-600 ${
              pathName === "/singUp" ? "bg-slate-700" : ""
            }`}
          >
            Sing up
          </p>
        </div>
      )}
    </div>
  );
};
export default Header;
