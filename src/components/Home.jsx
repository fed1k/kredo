import React, { useEffect, useState } from "react";
import { HiOutlineChevronDoubleDown } from "react-icons/hi2";
import AutoScrollImage from "./Carusel";
import { cards, titles } from "../constans";
import { RxDoubleArrowLeft } from "react-icons/rx";
import Main from "./Main";
const Home = () => {
  return (
    <div>

      {/* Home */}
      <Main />
      <section className="text-center relative  w-full px-5 pt-20 bg-black">
        <h3 className="md:text-[36px] text-[24px] text-white font-bold mb-8">
          Широкий спектр гео
        </h3>
        <AutoScrollImage />
        <p className="md:text-[22px] text-[16px] mx-auto max-w-[250px] md:max-w-[650px] mb-40 text-white mt-10">
          Мы работаем с различными регионами, включая страны{" "}
          <span className="font-semibold  text-cyan-400">
            СНГ, Индию и Турцию, и продолжаем расширять наши горизонты!
          </span>
        </p>

        <div className="light-bg top-60 md:left-1/2 h-[300px] md:h-auto"></div>
        <div className="container h-auto lg:h-[377px] relative  bg-slate-800 py-5 text-center rounded-2xl md:flex items-center gap-x-8">
          <img
            src="_.png"
            alt=""
            className="absolute w-[147px] lg:w-[268px] lg:-left-20 -left-4 lg:-top-24 -top-11"
          />
          <img
            src="_(1).png"
            alt=""
            className="absolute -right-8 lg:left-[17%] w-[144px] lg:w-[220px] -bottom-[104px] md:-bottom-24"
          />
          {/* <img className="md:ml-20 md:mr-10 bg-transparent" src="./trans.png" alt="" /> */}
          <p className="md:ml-20 md:mr-10 arista-font text-white text-5xl">Kredo</p>
          <img
            className=" loaded md:h-[90%] mx-auto lg:block hidden"
            data-original="https://web.archive.org/web/20241007013022/https://static.tildacdn.net/tild6164-3137-4165-b536-643338326465/Line_8.png"
            alt=""
            imgfield="tn_img_1720394766680"
            src="https://web.archive.org/web/20241007013022im_/https://optim.tildacdn.net/tild6164-3137-4165-b536-643338326465/-/format/webp/Line_8.png"
          />
          <div className="h-[2px] rounded-3xl bg-white w-full mx-auto md:hidden block my-6"></div>
          <div className="md:mx-16 mx-5">
            <p className="md:text-[36px] text-[20px] mb-4 md:mb-0 text-white font-extrabold">
              Платформа разработана командой финтеха Kredo
            </p>
            <p className="text-white text-[16px] md:text-[22px] ">
              Kredo на протяжении более трех лет успешно работает в сфере
              финтех
              <span className="text-[#9b96ae]">
                , обладая обширным опытом и глубокими знаниями, что гарантирует
                высокое качество и надежность предоставляемых решений.
              </span>
            </p>
          </div>
        </div>

        <div className="my-40 relative">
          <div className="flex items-center justify-center gap-x-10">
            <img
              className="tn-atom__img t-img loaded w-[114px]"
              data-original="https://web.archive.org/web/20241007013022/https://static.tildacdn.net/tild3533-6664-4539-b931-613135386434/Group_237825.png"
              alt=""
              imgfield="tn_img_1720395273030"
              src="https://web.archive.org/web/20241007013022im_/https://optim.tildacdn.net/tild3533-6664-4539-b931-613135386434/-/resize/135x/-/format/webp/Group_237825.png"
            ></img>
            <p className="text-white uppercase text-md md:text-[22px] font-semibold">
              трейдерам
            </p>
            <img
              className="tn-atom__img t-img loaded w-[114px]"
              data-original="https://web.archive.org/web/20241007013022/https://static.tildacdn.net/tild6131-6437-4061-b563-376666303265/Group_237843.png"
              alt=""
              imgfield="tn_img_1720395213049"
              src="https://web.archive.org/web/20241007013022im_/https://optim.tildacdn.net/tild6131-6437-4061-b563-376666303265/-/resize/136x/-/format/webp/Group_237843.png"
            ></img>
            <div className="light-bg top-64"></div>
          </div>
          <p className="text-white mb-8 text-[24px] md:text-[36px] font-extrabold mt-5">
            Преимущества P2P Трейдинга
          </p>
          <div className="container grid lg:grid-cols-2 gap-x-4 gap-y-5 lg:gap-y-10 grid-cols-1">
            {cards &&
              cards.map((card) => (
                <div
                  key={card.id}
                  className="text-white md:p-8 p-4 rounded-2xl relative bg-slate-900"
                >
                  <div className="flex flex-col-reverse  lg:flex-row w-full items-center justify-between mb-5">
                    <p className="lg:text-[24px] text-[18px] font-bold w-full lg:w-[60%] lg:text-start text-center mt-4 lg:mt-0">
                      {card.title}
                    </p>
                    {card.img && (
                      <img
                        src={card.img}
                        className="w-[60px] h-[60px]"
                        alt=""
                      />
                    )}
                    {card.bigImg && (
                      <img
                        className={`w-20 h-20 lg:w-36 lg:h-36 ${card.id === 5 ? "animate-up" : ""} lg:absolute lg:-top-10 lg:right-10 ${card.id === 2 ? "coin-animate" : ""}`}
                        src={card.bigImg}
                        alt=""
                      />
                    )}
                  </div>
                  <p className="md:text-[18px] text-[#9B96AE] text-sm text-center lg:text-start">
                    {card.subtitle}
                  </p>
                </div>
              ))}
          </div>
        </div>
        <div className="container">
          <div className="flex items-center justify-center gap-x-10">
            <img
              className="tn-atom__img t-img loaded w-[114px]"
              data-original="https://web.archive.org/web/20241007013022/https://static.tildacdn.net/tild3533-6664-4539-b931-613135386434/Group_237825.png"
              alt=""
              imgfield="tn_img_1720395273030"
              src="https://web.archive.org/web/20241007013022im_/https://optim.tildacdn.net/tild3533-6664-4539-b931-613135386434/-/resize/135x/-/format/webp/Group_237825.png"
            ></img>
            <p className="text-white uppercase text-md md:text-[22px] font-semibold">
              как начать
            </p>
            <img
              className="tn-atom__img t-img loaded w-[114px]"
              data-original="https://web.archive.org/web/20241007013022/https://static.tildacdn.net/tild6131-6437-4061-b563-376666303265/Group_237843.png"
              alt=""
              imgfield="tn_img_1720395213049"
              src="https://web.archive.org/web/20241007013022im_/https://optim.tildacdn.net/tild6131-6437-4061-b563-376666303265/-/resize/136x/-/format/webp/Group_237843.png"
            ></img>
            <div className="light-bg top-[200px]"></div>
          </div>
          <p className="text-white mb-8 text-[24px] md:text-[36px] font-extrabold mt-5">
            Как зарабатывать с нами?
          </p>
          <div className="lg:flex items-center relative justify-between">
            <div className="w-[40%] relative">
              <div className="light-bg relative top-[200px] left-[20%]"></div>
              <img
                className="absolute w-[340px] lg:block hidden left-0 -top-60"
                src="./blue_target.png"
                alt=""
              />
              <img
                src="./coin.png"
                className="absolute coin-animate w-[110px] lg:block hidden bottom-0 right-0 rotate-90"
                alt=""
              />
              <img
                src="./coin.png"
                className="absolute coin-animate w-[120px] lg:block hidden  top-20 left-0 "
                alt=""
              />
              <img
                className="lg:block hidden absolute w-[284px]  top-20 right-0"
                src="./blue_chess.png"
                alt=""
              />
            </div>
            <div className="md:w-[50%] w-full left-auto">
              {titles.map((title, index) => (
                <div className="max-w-[500px] mb-7 relative" key={title.id}>
                  {index !== 0 && (
                    <img
                      src="./coin.png"
                      className={`w-[110px] lg:hidden absolute ${
                        index == 1 ? "-top-20" : "-top-16 left-52 rotate-90"
                      }`}
                    />
                  )}
                  <p className="flex text-white items-center gap-x-3 mb-8">
                    <span className="text-[22px] mx-auto lg:mx-0 font-semibold">
                      {title.number}
                    </span>
                    <RxDoubleArrowLeft className="text-cyan-400 hidden lg:block text-2xl" />
                    
                  </p>
                  <p className="md:text-[22px] text-[16px] text-center lg:text-start font-medium text-white">
                    {title.title}
                  </p>
                  {index !== titles.length - 1 && (
                    <HiOutlineChevronDoubleDown className="text-cyan-400 block mx-auto my-5 lg:hidden text-4xl font-bold" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container lg:flex block relative justify-between w-full gap-x-20 py-28">
          <div className="w-full lg:w-[50%]">
            <div className="flex items-center justify-start mb-5 gap-x-4">
              <p className="text-white uppercase text-md md:text-[22px] font-semibold">
                присоединиться
              </p>
              <img
                className="tn-atom__img t-img loaded w-[114px]"
                data-original="https://web.archive.org/web/20241007013022/https://static.tildacdn.net/tild6131-6437-4061-b563-376666303265/Group_237843.png"
                alt=""
                imgfield="tn_img_1720395213049"
                src="https://web.archive.org/web/20241007013022im_/https://optim.tildacdn.net/tild6131-6437-4061-b563-376666303265/-/resize/136x/-/format/webp/Group_237843.png"
              ></img>
              <div className="light-bg top-64"></div>
            </div>
            <h3 className="md:text-[36px] text-[24px] leading-10 mb-3 md:mb-6 text-white text-start font-extrabold">
              Заполните форму, и приступайте к работе в кратчайшие сроки!
            </h3>
            <p className="md:text-[22px] w-full text-[18px] font-medium text-white text-start">
              Присоединяйтесь к нашему{" "}
              <a
                href="https://t.me/KredoPay"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#33D2FF]"
              >
                телеграмм аккаунту
              </a>{" "}
              и будьте в курсе всех последних новостей. Будем рады видеть вас
              среди наших подписчиков и установить стабильные партнерские
              отношения!
            </p>
            <div className="flex gap-4">
              <div className="pt-10">
                <a
                  href="https://t.me/KredoPay"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="./tg-button.svg" className="lg:block hidden" alt="" />
                </a>
                <img
                  className="lg:w-[100px] hidden mt-12 h-[80px]"
                  src="./navi.png"
                  alt=""
                />
              </div>
              <img className="mt-6 lg:block hidden" src="./photo2.svg" alt="" />
            </div>
          </div>
          <div className="light-bg top-[200px] left-[20%]"></div>
          <form className="w-full lg:w-[50%] flex justify-center flex-col gap-y-6">
            {/* <label className="w-full text-start mt-6">
              <span className="text-white text-[16px] md:text-[18px]">
                Как к Вам обращаться*
              </span>{" "}
              <br />
              <input
                className="bg-[#0E0f23] mt-3 rounded-xl placeholder:text-[#9b96ae] lg:py-6 py-4 px-3 border-none w-full md:w-[80%] text-white outline-none focus:border-blue-400 focus:ring-2"
                type="text"
                placeholder="Иванов Сергей"
              />
            </label>
            <label className="w-full text-start">
              <span className="text-white text-[16px] md:text-[18px]">
                Ваша почта*
              </span>
              <br />
              <input
                className="bg-[#0E0f23] mt-3 rounded-xl placeholder:text-[#9b96ae] lg:py-6 py-4 px-3 border-none w-full md:w-[80%] text-white outline-none focus:border-blue-400 focus:ring-2"
                type="email"
                placeholder="email@example.com"
              />
            </label>
            <label className="w-full text-start">
              <span className="text-white text-[16px] md:text-[18px]">
                Ваш Telegram
              </span>{" "}
              <br />
              <input
                className="bg-[#0E0f23] mt-3 rounded-xl placeholder:text-[#9b96ae] lg:py-6 py-4 px-3 border-none w-full md:w-[80%] text-white outline-none focus:border-blue-400 focus:ring-2"
                type="text"
                placeholder="@telegram_username"
              />
            </label>
            <label className="w-full text-start">
              <span className="text-white text-[16px] md:text-[18px]">
                Комментарий*
              </span>{" "}
              <br />
              <textarea
                className="bg-[#0E0f23] mt-3 min-h-32 rounded-xl placeholder:text-[#9b96ae] lg:py-6 py-4 px-3 border-none w-full md:w-[80%] text-white outline-none focus:border-blue-400 focus:ring-2"
                name=""
                id=""
                placeholder="Оставьте любое сообщение"
              ></textarea>
            </label> */}
            <div className="flex lg:flex-row flex-col-reverse gap-4 items-center">
              <button>
                <a
                  href="https://t.me/KredoSupport"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#040112] text-[16px] md:text-[20px] h-14 md:h-[60px] mt-2 bg-[#33D2FF] rounded-2xl w-[200px] md:w-[250px] flex items-center justify-center gap-x-5 font-bold"
                >
                  Отправить заявку
                </a>
              </button>
              <a
                href="https://t.me/KredoSupport"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./tg-button.svg" alt="" />
              </a>
            </div>
            <div className="light-bg bottom-[50px] left-[40%]"></div>
          </form>
        </div>
      </section>

     

      {/* Home */}
    </div>
  );
};

export default Home;
