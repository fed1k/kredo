import React from "react";
import { useEffect,useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  useEffect(() => {
    if (activeMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [activeMenu]);
  return (
    <div>
        <div className="bg-[#040112] fixed left-0 right-0 top-0 z-50 w-full border-b-2 border-[#fff]">
                {activeMenu && (
                  <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-30"
                    onClick={() => setActiveMenu(!activeMenu)}
                  />
                )}
                <header className="container flex items-center justify-between py-4 md:py-7">
                  <img className="md:w-auto w-20" src="./logo.png" alt="" />
                  <ul className="lg:flex hidden items-center gap-x-7 text-white text-[18px] font-medium">
                    <li>
                      <NavLink to={'/contact'} >
                        Контакты
                      </NavLink>
                    </li>
                    <li>
                      <a href="">
                        Реферальная программа
                      </a>
                    </li>
                  </ul>
                  <ul className="lg:flex hidden gap-x-5 text-white text-[18px] font-medium">
                    <li className="mt-3 mr-2">
                      <a href="https://crocopay.vercel.app/login">Войти</a>
                    </li>
                    <button className="bg-[#120b29]  rounded-[10px] h-12 w-[203px] border-2 border-[#292735]">
                      <a
                        href="https://t.me/KredoSupport"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Зарегистрироваться
                      </a>
                    </button>
                    <li>
                      <button className="bg-[#120b29]  rounded-[10px] h-11 w-[53px] border-2 border-[#292735]">
                        <a
                          href="https://t.me/KredoPay"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src="./tg.svg" alt="" />
                        </a>
                      </button>
                    </li>
                  </ul>
                  {!activeMenu ? (
                    <HiMenuAlt3
                      onClick={() => setActiveMenu(!activeMenu)}
                      className="text-4xl cursor-pointer block lg:hidden text-white"
                    />
                  ) : (
                    <IoMdClose
                      onClick={() => setActiveMenu(!activeMenu)}
                      className="text-4xl cursor-pointer block lg:hidden text-white"
                    />
                  )}
                  {activeMenu && (
                    <div
                      className={`absolute bg-slate-900 shadow-2xl text-white z-30 left-0 right-0 transition-all duration-500 ease-in-out transform ${
                        activeMenu
                          ? "top-[0px] opacity-100 translate-y-0"
                          : "top-0 opacity-0 -translate-y-0 pointer-events-none"
                      } px-5 py-7`}
                    >
                      <div className="flex items-center border-b-2 pb-5 border-white justify-between mb-8 w-full">
                        <img
                          className="md:w-auto w-20"
                          src="./kredo-mobile.svg"
                          alt=""
                        />
                        <IoMdClose
                          onClick={() => setActiveMenu(!activeMenu)}
                          className="text-4xl cursor-pointer block lg:hidden text-white"
                        />
                      </div>
                      <div className="flex flex-col justify-center gap-y-3 text-center mb-6">
                        <a onClick={() => setActiveMenu(!activeMenu)} href="">
                          Контакты
                        </a>
                        <a onClick={() => setActiveMenu(!activeMenu)} href="">
                          Реферальная программа
                        </a>
                        <a onClick={() => setActiveMenu(!activeMenu)} href="">
                          Мы в Telegram
                        </a>
                      </div>
                      <a
                        href=""
                        onClick={() => setActiveMenu(!activeMenu)}
                        className="bg-[#232938] rounded-2xl mx-auto h-10 w-[149px] text-center text-white flex justify-center py-2 px-4 md:px-5"
                      >
                        Регистрация
                      </a>{" "}
                      <br />
                      <a
                        href="https://crocopay.vercel.app/login"
                        onClick={() => setActiveMenu(!activeMenu)}
                        className="text-[#181828] rounded-2xl  h-10 w-[104px] text-center bg-white mx-auto flex justify-center py-2 px-4 md:px-5"
                      >
                        Войти
                      </a>
                    </div>
                  )}
                </header>
              </div>
    </div>
  )
}

export default Navbar
