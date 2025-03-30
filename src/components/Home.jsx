import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
const Home = () => {
  const [bgColor, setBgColor] = useState("bg-transparent");
  const [activeMenu, setActiveMenu] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setBgColor("bg-[#459efe]");
      } else {
        setBgColor("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="sec-1">

        <div className={`w-full fixed top-0 right-0 z-50 left-0 h-24 mx-auto px-5 py-8 transition-all duration-300 ${bgColor}`}>
          <div className='flex justify-between items-center max-w-[1140px] mx-[12%]'>
            <a href='' className='text-[17px] pl-10 logo text-white cursor-pointer font-bold'>Kredo</a>
            <nav>
              <ul className='md:flex hidden gap-5 text-white text-[500]'>
                <li><a className='text-sm hover:underline hover:text-[#2c4ac0] font-semibold transition-all' href="#about">О нас </a></li>
                <li><a className='text-sm hover:underline hover:text-[#2c4ac0] font-semibold  transition-all' href="#opportunities">Наши возможности</a></li>
                <li><a className='text-sm hover:underline hover:text-[#2c4ac0] font-semibold  transition-all' href="#globe">Обратная связь</a></li>
                <li><a className='text-sm hover:underline hover:text-[#2c4ac0] font-semibold  transition-all' href="#contacts">Контакты</a></li>
              </ul>
            </nav>
            <AiOutlineMenu onClick={() => setActiveMenu(!activeMenu)} className='md:hidden transition-all duration-500 block text-white text-3xl cursor-pointer' />
          </div>
          {activeMenu && <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute lg:hidden transition-all duration-500 top-0 left-0 right-0 p-5 h-[240px] w-full px-8 bg-[#459efe]">
            <IoMdClose className='md:hidden ml-auto  text-white transition-all duration-500 block text-3xl cursor-pointer' onClick={() => setActiveMenu(!activeMenu)} />
            <nav>
              <ul className='flex flex-col gap-y-3 text-white text-[500]'>
                <li><a className='text-lg hover:underline hover:text-[#2c4ac0] pb-2 transition-all ' href="#about">О нас </a></li>
                <li><a className='text-lg  hover:underline hover:text-[#2c4ac0] pb-2 transition-all' href="#opportunities">Наши возможности</a></li>
                <li><a className='text-lg  hover:underline hover:text-[#2c4ac0] pb-2 transition-all' href="#globe">Обратная связь</a></li>
                <li><a className='text-lg  hover:underline hover:text-[#2c4ac0] pb-2 transition-all' href="#contacts">Контакты</a></li>
              </ul>
            </nav>
          </motion.div>}
        </div>

        <section id='' className='w-full h-[10vh] min-h-screen'>
          <div className='flex justify-between max-w-[1300px] px-5 pl-[12%] mx-auto'>
            <div>
              <button className='flex gap-2 min-w-[229px] mb-5 items-center py-2 justify-center px-[10px] rounded-md bg-white'>
                <span class="blinking-dot"></span>

                <p className='text-[#2c4ac0] text-sm'> Набор трейдеров открыт</p>
              </button>
              <p className="md:text-[64px] text-[32px] text-white lg:mb-8 mb-4 font-medium lg:tracking-wide lg:leading-[68px] leading-[36px]">
                Международная <br /> процессинг <br /> платформа
              </p>
              <p className="text-white text-[16px] font-normal max-w-[400px]">
                Наша платформа предлагает лучшие условия работы для новичков и опытных команд в сфере обработки платежного трафика
              </p>
            </div>
            <div></div>
          </div>
        </section>
      </div>

      <section id="about" className='w-full bg-white  pt-20'>
        <div className=" max-w-[960px] px-5 mx-auto">
          <h3 className="md:text-[32px] text-2xl mb-3 lg:mb-6 font-bold text-[#2c4ac0]">Что такое Kredo</h3>
          <div className="mb-16 lg:mb-32">
            <img className="w-full md:block hidden rounded-[20px] h-[480px] custom-shadow mb-8" src="./tables.avif" alt="" />
            <div className="w-full ml-auto">

              <p className="text-[16px] font-normal text-[#5A6789]">Kredo – это всемирная универсальная платформа для обработки платежного трафика. Мы предоставляем широкий ассортимент инструментов, созданных для комфорта трейдеров, лучшую автоматику и огромный объем вторичного платежного трафика. Находимся на рынке уже более 2 лет, и настроены дальше создавать лучшие условия для работы трейдеров.</p>
            </div>
          </div>

          <h4 className="md:text-[32px] text-2xl mb-3 text-center text-[#2c4ac0]mb-8 lg:mb-12  font-bold text-[#2c4ac0]">Условия для подключения</h4>
          <div className="flex flex-col md:gap-24 md:flex-row justify-evenly mx-auto lg:max-w-[70%] text-center">
            <div className="mb-3">
              <p className="mb-6  md:text-[18px] text-[#5a6789] font-normal ">Количество материала</p>
              <h4 className="text-[56px] text-start text-2xl text-[#2c4ac0] font-medium"> 4 ЛК+</h4>
            </div>
            <div className="mb-3">
              <p className="mb-6  md:text-[18px] text-[#5a6789] font-normal">Минимальный торговый депозит</p>
              <h4 className="text-start text-[56px] text-2xl text-[#2c4ac0] font-medium">500 USDT</h4>
            </div>
          </div>
          <div className="mx-auto mt-10  flex flex-col items-center">
            <p className="mb-6 md:text-[18px] text-[#5a6789] font-normal">Минимальный страховой депозит</p>
            <h4 className="text-[56px] text-2xl text-[#2c4ac0] font-medium">500 USDT</h4>
          </div>

        </div>
      </section>

      <div className="relative w-full overflow-hidden min-h-[300px] mt-20">
        <div className="md:h-16 h-12 top-20 absolute z-10 w-full p-4 py-3 kredo-rotation-bg  rotate-12 md:rotate-6">
          <div className="flex space-x-8 mt-2 animate-marquee">
            {Array(70)
              .fill("Kredo")
              .map((text, index) => (
                <span key={index} className="text-[16px] text-white font-bold">
                  {text}
                </span>
              ))}
          </div>
        </div>
        <div className="md:h-16 h-12 absolute top-20 w-full p-4 py-3  kredo-rotation-bg -rotate-12 md:-rotate-6">
          <div className="flex space-x-8 mt-2 animate-marquee1">
            {Array(70)
              .fill("Kredo")
              .map((text, index) => (
                <span key={index} className="text-[16px] text-white font-bold">
                  {text}
                </span>
              ))}
          </div>
        </div>
      </div>


      <h4 className="md:text-[32px] text-2xl  text-center text-[#2c4ac0] mb-8 lg:mb-12  font-bold ">В чем наше преимущество?</h4>
      <div className="max-w-[343px] md:max-w-[700px] lg:max-w-[960px] px-5 mx-auto">
        <div className="w-full h-[231px] mb-4 rounded-lg bg-gradient-to-r p-5 from-[#459efe] via-[#a9caff] to-[#a1d9ed]">
          <p className="text-white text-[20px] font-semibold text-xl mb-5">Наилучшая  автоматика</p>
          <p className="md:w-[40%] w-full text-white text-sm">Продвинутая система автоматической проверки поступления платежей, которая работает быстро и безопасно. Именно это предлагает наша процессинг платформа - наилучшая автоматика для вашей работы.</p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 mb-20">
          <div className="h-[300px] mb-5 p-5 bg-[#459efe] rounded-md">
            <p className="text-white font-semibold text-[20px] mb-5">Неограниченный <br />
              объем трафика</p>
            <p className="w-[80%] text-sm text-white">Поток платежей-основа вашего
              заработок. Платформа обработки каннабиса
              обеспечить стабильный поток
              транзакционный узел ограниченный по объекту</p>
          </div>
          <div className="h-[300px] mb-5 p-5 bg-[#459efe] rounded-md">
            <p className="text-white text-[20px] font-semibold mb-5">Вторичный <br />
              платежный трафик</p>
            <p className="w-[80%] text-sm text-white">Наша процессинг платформа
              работает исключительно с
              вторичным платежным трафиком.
              Благодаря этому, ваш материал
              работает стабильнее, а прибыль -
              увеличивается</p>
          </div>
          <div className="h-[300px] p-5 bg-[#459efe] rounded-md">
            <p className="text-white font-semibold text-[20px] mb-5">Высокие <br />
              комиссии</p>
            <p className="w-[80%] text-sm text-white">Наша платформа быстро реагирует на
              тенденции рынка, увеличивая комиссии.
              Актуальные ставки узнавайте у саппорта</p>
          </div>
        </div>
        <h4 id="opportunities" className="md:text-[32px] text-2xl  text-start text-[#2c4ac0] mb-8 lg:mb-12  font-bold ">Поддерживаемые валюты</h4>

      </div>
      <div className="carousel-container">
        <div className="carousel-track">
          <div className="carousel-item">Kazakhstani Tenge</div>
          <div className="carousel-item">USD Dollar</div>
          <div className="carousel-item">Tether</div>
          <div className="carousel-item">Russian Ruble</div>
          <div className="carousel-item">Kazakhstani Tenge</div>
          <div className="carousel-item">Kazakhstani Tenge</div>
          <div className="carousel-item">USD Dollar</div>
          <div className="carousel-item">Tether</div>
          <div className="carousel-item">Russian Ruble</div>
          <div className="carousel-item">Kazakhstani Tenge</div>
        </div>
      </div>
      <div className=" max-w-[960px] px-5 mx-auto">
        <h4 className="md:text-[32px] text-2xl text-start mb-8 lg:my-12  my-8 font-bold text-[#2c4ac0]">Наши сильные стороны:</h4>
        <div className="grid lg:grid-cols-2 gap-y-5 md:grid-cols-2 grid-cols-1 gap-x-6 mb-20">
          <div className="h-[133px] rounded-[8px] bg-[#fbfcfe] border  border-spacing-1 p-4 border-[#e9e8e8] ">
            <p className="text-[24px] font-bold text-[#5A6789] mb-3">01</p>
            <p className="c">Отсутствие
              «треугольников»</p>
          </div>
          <div className="h-[133px] rounded-[8px] bg-[#fbfcfe] border  border-spacing-1 p-4 border-[#e9e8e8] ">
            <p className="text-[24px] font-bold text-[#5A6789] mb-3">02</p>
            <p className="text-[20px] font-normal text-[#5A6789] mb-3">Множество доступных
              географий</p>
          </div>
          <div className="h-[133px] rounded-[8px] bg-[#fbfcfe] border  border-spacing-1 p-4 border-[#e9e8e8]">
            <p className="text-[24px] font-bold text-[#5A6789] mb-3">03</p>
            <p className="text-[20px] font-normal text-[#5A6789] mb-3">Компенсация за
              компрометации</p>
          </div>
          <div className="h-[133px] rounded-[8px] bg-[#fbfcfe] border  border-spacing-1 p-4 border-[#e9e8e8]">
            <p className="text-[24px] font-bold text-[#5A6789] mb-3">04</p>
            <p className="text-[20px] font-normal text-[#5A6789] mb-3">Реферальные кабинеты
              для агентов</p>
          </div>
        </div>
      </div>
      <div id="globe" className="bg-globe">


        <div className="card">
          <h4 className="md:text-[32px] text-2xl text-center mb-8 lg:my-12  font-bold text-[#2c4ac0]">География работы</h4>
        </div>
        <div className="w-full overflow-hidden my-32 p-4">
          <div className="flex space-x-8 z-0 animate-marquees">
            {Array(2)
              .fill([
                "Republic of Uzbekistan",
                "Armenia",
                "Republic of Belarus",
                "Turkmenistan",
                "Republic of Tajikistan",
                "Armenia",
                "Russian Federation",
                "Republic of Kazakhstan",
                "Kyrgyz Republic",
              ])
              .flat()
              .map((country, index) => (
                <span key={index} className="text-[16px] text-[#5A6789] font-medium whitespace-nowrap">
                  {country}
                </span>
              ))}
          </div>
        </div>

        <div className="max-w-[470px] h-[216px] mb-20 p-4 flex flex-col justify-between rounded-lg mx-auto bg-[#459efe] text-white">
          <p className="text-[24px] mb-3">Telegram Support</p>
          <p className="mb-3 text-[16px]">Вы можете задать вопросы о
            подключении в Telegram</p>
          <a className="bg-white text-[#459efe] p-3 rounded-lg">Напишите нам</a>
        </div>
      </div>


      <div className="max-w-[960px] px-5 mx-auto mb-6">

        <div className="w-full h-[1px] mb-6 bg-gray-700"></div>
        <div className="max-w-[960px] mx-auto">
          <p className='text-[17px] pb-6 pl-6 logo text-[#2c4ac0] cursor-pointer font-bold'>Kredo</p>
          <p className="text-[#5a6789]">© Kredo 2024</p>
          <p className="text-[#5a6789]">For Inquiries email us at <a className="text-xl text-[#2c4ac0] ml-6">connect@trademo.net</a></p>
          <div className="md:flex sm:block w-full justify-between gap-16 mt-8">
            <div className="mb-4">
              <p className="text-[#2c4ac0] text-sm md:text-xl uppercase font-normal mb-6">Navigation</p>
              <ul className='flex flex-col gap-y-3 text-gray-600 text-[500]'>
                <li><a href="#about" className='md:text-[20px] text-sm text-[#5A6789] hover:underline hover:text-[#2c4ac0]'>О проекте</a></li>
                <li><a className='md:text-[20px] text-sm  text-[#5A6789] hover:underline hover:text-[#2c4ac0]' href="#opportunities">Наши возможности</a></li>
                <li><a className='md:text-[20px] text-sm  text-[#5A6789] hover:underline hover:text-[#2c4ac0]' href="#globe">Обратная связь</a></li>
                <li><a className='md:text-[20px] text-sm  text-[#5A6789] hover:underline hover:text-[#2c4ac0]' href="">Карта сайта</a></li>
              </ul>
            </div>
            <div id="contacts" className="flex flex-col gap-2.5">
              <p className="text-[#2c4ac0] md:text-xl text-sm uppercase font-normal mb-2">Contacts</p>
              <p className="text-[#5a6789] text-md text-xl ">Telegram Поддержка</p>
              <p className="text-[#5a6789] text-md text-xl ">connect@trademo.net</p>
              <p className="text-[#5a6789]">ИП Куприянов А.В. ИНН 773178838030</p>
              <p className="text-[#5a6789]">Телефон для связи +7 996 411 0122</p>
              <p className="text-[#5a6789]">Пресненская наб., 10, стр. 2, Москва</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
