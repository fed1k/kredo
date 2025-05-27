import React, { useState } from 'react'
import { FiArrowRight } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import AutoScrollImage from './Carusel';
const Home = () => {
  const [activeMenu,setActiveMenu]=useState(false)
  return (
    <div>
       {/* Navbar */}
        <div className='bg-black  w-full border-b-2 border-[#fff]'>
              <header className='container flex items-center justify-between py-4 md:py-7'>
              <a  href="/web/20241007013022/https://kredo.vip/">
                <img className='md:h-auto h-14' src="./logo.svg" alt="" />
              </a>
              <ul className='lg:flex hidden items-center gap-x-7 text-white text-[18px] font-medium'>
                <li>
                    <a href="https://web.archive.org/web/20241007013652/https://kredo.vip/contacts">Контакты</a>
                </li>
                <li>
                    <a href="https://web.archive.org/web/20241007013652/https://kredo.vip/contacts">Блог</a>
                </li>
                <li>
                    <a href="https://web.archive.org/web/20241007013652/https://kredo.vip/contacts">Реферальная программа</a>
                </li>
                
              </ul>
              <ul className='lg:flex hidden gap-x-5 text-white text-[18px] font-medium'>
                <li className='mt-3 mr-2'>
                    <a href="https://web.archive.org/web/20241007013652/https://kredo.vip/contacts">Войти</a>
                </li>
                <button className='bg-[#120b29]  rounded-[10px] h-12 w-[203px] border-2 border-[#292735]'>
                  <a href="">Зарегистрироваться</a>
                </button>
                <li>
                    <button className='bg-[#120b29]  rounded-[10px] h-11 w-[53px] border-2 border-[#292735]'>
                          <img src="./tg.svg" alt="" />
                    </button>
                </li>
                
              </ul>
              {!activeMenu ? <HiMenuAlt3 onClick={()=>setActiveMenu(!activeMenu)} className='text-4xl cursor-pointer block lg:hidden text-white'/>:<IoMdClose onClick={()=>setActiveMenu(!activeMenu)} className='text-4xl cursor-pointer block lg:hidden text-white'/>}
              {
                activeMenu && <div className={`absolute bg-black text-white z-30 left-0 right-0 transition-all duration-500 ease-in-out transform ${
                activeMenu ? 'top-[100px] opacity-100 translate-y-0' : 'top-0 opacity-0 -translate-y-10 pointer-events-none'
              } p-10`}>
                 <div className='flex flex-col justify-center gap-y-4 text-center mb-10'>
                       <a href="">Контакты</a> 
                        <a href="">Блог</a> 
                        <a href="">Реферальная программа</a> 
                        <a href="">Мы в Telegram</a> 
                 </div>
                 <a href="" className='bg-[#232938] rounded-2xl mb-4 h-10 w-[149px] text-center text-white mx-auto py-2 px-5'>Регистрация</a> <br />
                 <a href="" className='text-[#181828] rounded-2xl  h-10 w-[104px] text-center bg-white mx-auto py-2 px-5'>Войти</a>
              </div>
              }
            </header>
        </div>
       {/* Navbar */}
        {/* Home */}
       <section className='w-full md:py-24 py-16  bg-black relative'>
              <div className="flex pl-5 md:pl-[150px]">
                    <div className='md:w-[60%] w-full' >
                      <img src="./kredo.svg" className='mb-4' alt="" />
                      <h2 className='text-white text-3xl md:text-[50px] lg:text-[70px] mb-6 lg:leading-[90px] font-extrabold'>Революционный сервис для передовых P2P решений</h2>
                      <img className='w-[224px] lg:hidden h-[238px] mb-4' src="./info.jpg" alt="" />
                      <p className=' text-[18px] md:text-[22px] pr-5 max-w-[600px] text-[#33D2FF]'>
                         Зарабатывайте на своих умениях вместе с Kredo! 
                         <span className='text-white'> Мы предоставляем трейдерам выгодные условия для обработки платежей.</span>
                      </p>
                      <a href="https://web.archive.org/web/20241004012351/https://dashboard.kredo.vip/login" className='text-[#040112] text-[16px] md:text-[20px] h-14 md:h-[70px] mt-10 bg-[#33D2FF] rounded-2xl w-[230px] md:w-[313px] flex items-center justify-center gap-x-5 font-bold'>
                         Присоединиться!
                         <FiArrowRight className='font-bold text-xl'/>
                      </a>
                    </div>
            
                    <div className="light-bg top-64"></div>
                    <div className="light-bg hidden lg:block top-40 left-1/2"></div>
                    <div className="w-[40%] lg:block hidden bg-[url('./bg.png')] h-[500px]  ml-auto">
                      <img src="./info.jpg" className='h-[400px] w-[400px] ml-32' alt="" />
                    </div>
                  </div>
       </section>
       <section className='text-center relative w-full py-20 bg-black'>
            <h3 className='md:text-[36px] text-[24px] text-white font-bold mb-8'>Широкий спектр гео</h3>
               <AutoScrollImage/>
             <p className='md:text-[22px] text-[16px] mx-auto max-w-[250px] md:max-w-[650px] mb-40 text-white mt-10'>Мы работаем с различными регионами, включая страны  <span className='font-semibold  text-cyan-400'>СНГ, Индию и Турцию, и продолжаем расширять наши горизонты!</span></p>
             <div className="light-bg top-60 left-1/2"></div>
             <div className='container h-[377px] bg-slate-800 py-5 text-center rounded-2xl md:flex items-center gap-x-8'>
                  <img className='ml-20 mr-10' src="./mayfPay.svg" alt="" />
                  <img className=" loaded md:h-[90%] rotate-90 md:rotate-0" data-original="https://web.archive.org/web/20241007013022/https://static.tildacdn.net/tild6164-3137-4165-b536-643338326465/Line_8.png" alt="" imgfield="tn_img_1720394766680" src="https://web.archive.org/web/20241007013022im_/https://optim.tildacdn.net/tild6164-3137-4165-b536-643338326465/-/format/webp/Line_8.png"/>
                  <div className='mx-16'>
                    <p className='text-[36px] text-white font-extrabold'>Платформа разработана командой финтеха MayfPay</p>
                    <p className='text-white text-[22px] '>
                        MayfPay на протяжении более трех лет успешно работает в сфере финтех,
                        <span className='text-[#9b96ae]'>обладая обширным опытом и глубокими знаниями, что гарантирует высокое качество и надежность предоставляемых решений.</span>
                    </p>
                  </div>
             </div>

             <div className='mt-40'>
                 <div className='flex items-center justify-center gap-x-10'>
                      <img class="tn-atom__img t-img loaded w-[114px]" data-original="https://web.archive.org/web/20241007013022/https://static.tildacdn.net/tild3533-6664-4539-b931-613135386434/Group_237825.png" alt="" imgfield="tn_img_1720395273030" src="https://web.archive.org/web/20241007013022im_/https://optim.tildacdn.net/tild3533-6664-4539-b931-613135386434/-/resize/135x/-/format/webp/Group_237825.png"></img>
                    <p className='text-white uppercase text-[22px] font-semibold'>трейдерам</p>
                 <img class="tn-atom__img t-img loaded w-[114px]" data-original="https://web.archive.org/web/20241007013022/https://static.tildacdn.net/tild6131-6437-4061-b563-376666303265/Group_237843.png" alt="" imgfield="tn_img_1720395213049" src="https://web.archive.org/web/20241007013022im_/https://optim.tildacdn.net/tild6131-6437-4061-b563-376666303265/-/resize/136x/-/format/webp/Group_237843.png"></img>
                 </div>
                 <p className='text-white text-[36px] font-extrabold mt-5'>Преимущества P2P Трейдинга</p>
             </div>
       </section>
       {/* Home */}
    </div>
  )
}

export default Home
