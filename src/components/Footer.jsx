import React from 'react'

const Footer = () => {
  return (
     <div className="bg-black pb-16">
        <div className="container h-[1px] bg-slate-800 w-full mb-5"></div>
        <div className="w-full lg:flex block container justify-between pt-5 items-center">
          <p className="text-white font-semibold text-xl md:text-[29px]">
            Kredo
          </p>
          <div className="flex items-center gap-x-5 ">
            <a
              className="text-white font-semibold text-sm md:text-[19px]"
              href=""
            >
              Реферальная программа
            </a>
            <a
              className="text-white font-semibold text-sm md:text-[19px]"
              href=""
            >
              Контакты
            </a>
            <a href="">
              <img src="./tg.svg" alt="" />
            </a>
          </div>
        </div>

        <div className="container w-full grid grid-cols-2 lg:grid-cols-4 items-center gap-x-4 pt-12">
          <a
            className="text-[#9B96AE] font-bold text-sm md:text-[18px]"
            href=""
          >
            Мы в Telegram
          </a>
          <a
            className="text-[#9B96AE] font-bold text-sm md:text-[18px]"
            href=""
          >
            Публичная оферта
          </a>
          <a
            className="text-[#9B96AE] font-bold text-sm md:text-[18px]"
            href=""
          >
            Политика конфиденциальности
          </a>
          <a
            className="text-[#9B96AE] font-bold text-sm md:text-[18px]"
            href=""
          >
            AML & KYC
          </a>
        </div>
      </div>
  )
}

export default Footer
