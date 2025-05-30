import React from "react";
import { FiArrowRight } from "react-icons/fi";
const Main = () => {
  return (
    <section className="w-full md:pt-48 pt-36  bg-black relative">
      <div className="flex pl-5 md:pl-[150px]">
        <div className="md:w-[60%] w-full">
          <img src="./kredo.svg" className="mb-4" alt="" />
          <h2 className="text-white text-3xl md:text-[50px] lg:text-[70px] mb-6 lg:leading-[90px] font-bold">
            Революционный сервис для передовых P2P решений
          </h2>
          <img
            className="w-[224px] lg:hidden h-[288px] mb-4"
            src="./info.jpg"
            alt=""
          />
          <p className=" text-[18px] md:text-[22px] pr-5 max-w-[600px] text-[#33D2FF]">
            Зарабатывайте на своих умениях вместе с Kredo!
            <span className="text-white">
              {" "}
              Мы предоставляем трейдерам выгодные условия для обработки
              платежей.
            </span>
          </p>
          <a
            href="https://web.archive.org/web/20241004012351/https://dashboard.kredo.vip/login"
            className="text-[#040112] text-[16px] md:text-[20px] h-14 md:h-[70px] mt-10 bg-[#33D2FF] rounded-2xl w-[230px] md:w-[263px] flex items-center justify-center gap-x-5 font-bold"
          >
            Присоединиться!
            <FiArrowRight className="font-bold text-xl" />
          </a>
        </div>

        <div className="light-bg top-64"></div>
        <div className="light-bg hidden lg:block top-40 left-1/2"></div>
        <div className="w-[60%] lg:block relative hidden bg-[url('./bg.png')] h-[500px]  ml-auto">
          <img
            src="/coin.png"
            className="absolute z-10 bottom-0 w-32 h-32 coin-animate"
            alt=""
          />
          <img
            src="/info.png"
            className="h-[550px] w-[370px] big-card-animation ml-32"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
