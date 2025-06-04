import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black pb-16">
      <div className="container h-[1px] bg-slate-800 w-full mb-5"></div>
      <div className="w-full lg:flex block container justify-between pt-5 items-center">
        <p className="text-white font-semibold text-xl md:text-[29px]">Kredo</p>
        <div className="flex items-center gap-x-5 ">
          <Link
            className="text-white font-semibold text-sm md:text-[19px]"
            to="/affilate-program"
          >
            Реферальная программа
          </Link>
          <Link
            className="text-white font-semibold text-sm md:text-[19px]"
            to="contact"
          >
            Контакты
          </Link>
          <a
            href="https://t.me/KredoPay"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#33D2FF]"
          >
            <img src="./tg.svg" alt="" />
          </a>
        </div>
      </div>

      <div className="container w-full grid grid-cols-2 lg:grid-cols-4 items-center gap-x-4 pt-12">
        <a
          className="text-[#9B96AE] font-bold text-sm md:text-[18px]"
          href="https://t.me/KredoPay"
          target="_blank"
          rel="noopener noreferrer"
        >
          Мы в Telegram
        </a>
      </div>
    </div>
  );
};

export default Footer;
