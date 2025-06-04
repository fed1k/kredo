import React from 'react'
import { RxDoubleArrowDown } from "react-icons/rx";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { HiOutlineChevronDoubleDown } from "react-icons/hi2";
import { programCards } from '../constans';
import { titles } from '../constans';
const Program = () => {
  return (
    <div className="bg-black h-auto mt-[71px] miin-h-[100vh] lg:mt-20 w-full">
         <div className="flex container  relative pt-20 lg:pt-36 items-center lg:mt-10 justify-center gap-x-5 md:gap-x-10">
          <img
            className="tn-atom__img t-img loaded w-20 md:w-[114px]"
            data-original="https://web.archive.org/web/20241007013022/https://static.tildacdn.net/tild3533-6664-4539-b931-613135386434/Group_237825.png"
            alt=""
            imgfield="tn_img_1720395273030"
            src="https://web.archive.org/web/20241007013022im_/https://optim.tildacdn.net/tild3533-6664-4539-b931-613135386434/-/resize/135x/-/format/webp/Group_237825.png"
          ></img>
          <p className="text-white uppercase text-sm md:text-[22px] font-semibold">
            реферальная программа
          </p>
          <div className="light-bg left-0 opacity-65"></div>
          <img
            className="tn-atom__img t-img loaded w-20 md:w-[114px]"
            data-original="https://web.archive.org/web/20241007013022/https://static.tildacdn.net/tild6131-6437-4061-b563-376666303265/Group_237843.png"
            alt=""
            imgfield="tn_img_1720395213049"
            src="https://web.archive.org/web/20241007013022im_/https://optim.tildacdn.net/tild6131-6437-4061-b563-376666303265/-/resize/136x/-/format/webp/Group_237843.png"
          ></img>
        </div>
        <div className='container pt-8'>
             <p className='lg:text-4xl md:text-[24px] text-[20px] font-bold text-center leading-8 lg:leading-[51px] text-white'>Приглашаем вас принять участие в нашей реферальной программе и получать дополнительное <span className='text-[#33D2FF]'>вознаграждение за привлечение активных трейдеров</span> на нашу платформу!</p>
             <RxDoubleArrowDown className="text-cyan-400 mx-auto mt-6 hidden lg:block text-4xl"/>
        </div>
        <div className='container relative pb-16 md:pb-28'>
          <div className="light-bg top-[200px]"></div>
           <h3>Как это работает?</h3>
           <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7'>
              {programCards && programCards.map((item)=>(
                 <div className='bg-[#090818] rounded-2xl relative max-w-[371px] h-[346px] md:h-[389px] p-5'>
                     <div className=''>
                         <img className='md:w-[250px] w-[213px] h-[213px] md:h-[300px] -left-8 md:-left-4 -top-6 md:-top-6 absolute' src={item.numberImg} alt="" /> 
                         <img className='md:w-[184px] w-[150px] absolute top-10 md:top-16 right-6 -rotate-12 h-[154px] md:h-[184px]' src={item.image} alt="" />
                     </div>
                     <p className='text-white absolute text-center md:text-start bottom-6 text-[16px] md:text-[18px] font-medium mr-7'>
                        <span className='text-[#33D2FF]'>{item.title}</span>
                        {item.subtitle}
                     </p>
                 </div>
              ))}
           </div>
        </div>

        <div className="container md:pb-20">
                  <div className="flex items-center justify-center gap-x-10">
                    <img
                      className="tn-atom__img t-img loaded w-20 md:w-[114px]"
                      data-original="https://web.archive.org/web/20241007013022/https://static.tildacdn.net/tild3533-6664-4539-b931-613135386434/Group_237825.png"
                      alt=""
                      imgfield="tn_img_1720395273030"
                      src="https://web.archive.org/web/20241007013022im_/https://optim.tildacdn.net/tild3533-6664-4539-b931-613135386434/-/resize/135x/-/format/webp/Group_237825.png"
                    ></img>
                    <p className="text-white uppercase text-md md:text-[22px] font-semibold">
                      как начать
                    </p>
                    <img
                      className="tn-atom__img t-img loaded w-20 md:w-[114px]"
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
            <h3 className="md:text-[36px] text-[24px] leading-10 mb-3 md:mb-6 text-white text-center md:text-start font-extrabold">
              Заполните форму, и приступайте к работе в кратчайшие сроки!
            </h3>
            <p className="md:text-[22px] w-full text-[18px] font-medium text-white text-center md:text-start">
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
    </div>
  )
}

export default Program
