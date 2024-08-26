import anh7 from "../../../public/anh7.png";
import anh5 from "../../../public/anh5.jpg";
import anh4 from "../../../public/anh3.png";
import anh6 from "../../../public/anh6.png";
import anh2 from "../../../public/anh2.jpg";
import anh8 from "../../../public/anh8.png";
import anh9 from "../../../public/anh9.png";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/app/globals.css";
import { FaLongArrowAltDown } from "react-icons/fa";
import "./slide.css";

const Slide = () => {
  const arr = [
    {
      img: anh4,
      name: "Apple",
      price: "$310,40",
      priceG: "-1,10%",
    },
    {
      img: anh5,
      name: "Meta",
      price: "$140,40",
      priceG: "-0,10%",
    },
    {
      img: anh6,
      name: "Microsoft",
      price: "$240,40",
      priceG: "-2,10%",
    },
    {
      img: anh7,
      name: "Google",
      price: "$99,22",
      priceG: "-0,04%",
    },
    {
      img: anh8,
      name: "Google",
      price: "$39,22",
      priceG: "-1,4%",
    },
    {
      img: anh9,
      name: "Google",
      price: "$10,22",
      priceG: "-2,04%",
    },
  ];
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-white dark:bg-slate-700  mx-7 rounded-lg py-3 px-2  space-x-5 ">
      <Slider {...settings}>
        {arr.map((e) => (
          <div key={e.name} className="px-1">
            <div className="flex space-x-6 dark:bg-white dark:text-black justify-center text-[12px] p-3 rounded-md shadow-sm border">
                <div className="space-y-3">
                  <div className="flex items-center space-x-1">
                    <p className="  ">
                      <Image
                        className="rounded-full"
                        src={e.img}
                        alt="1"
                        width={22}
                        height={20}
                      ></Image>
                    </p>
                    <p className="font-medium">{e.name}</p>
                  </div>
                  <p className="font-light">Total Shares</p>
                  <p className="font-light">Total Return</p>
                </div>
                <div className="">
                  <p>
                    <Image src={anh2} alt="1" width={50} height={30}></Image>
                  </p>
                  <p className="mt-[1px] font-bold">{e.price}</p>
                  <div className="flex mt-[10px] items-center text-red-500">
                    <p className="">{e.priceG}</p>
                    <p>
                      <FaLongArrowAltDown />
                    </p>
                  </div>
                </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Slide;
