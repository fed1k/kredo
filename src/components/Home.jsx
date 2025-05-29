import React, { useEffect, useState } from 'react'

import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import AutoScrollImage from './Carusel';
import { cards, titles } from '../constans';
import { RxDoubleArrowLeft } from "react-icons/rx";
import Hime from './Hime';
const Home = () => {
  const [activeMenu,setActiveMenu]=useState(false)
  useEffect(() => {
  if (activeMenu) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}, [activeMenu]);
  return (
    <div>
       {/* Navbar */}
        <div className='bg-black fixed left-0 right-0 top-0 z-50 w-full border-b-2 border-[#fff]'>
                  {activeMenu && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-40 z-30"
                  onClick={() => setActiveMenu(!activeMenu)}
                />
              )}
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
                 <div className='flex flex-col justify-center gap-y-3 text-center mb-6'>
                       <a onClick={()=>setActiveMenu(!activeMenu)} href="">Контакты</a> 
                        <a onClick={()=>setActiveMenu(!activeMenu)} href="">Блог</a> 
                        <a onClick={()=>setActiveMenu(!activeMenu)} href="">Реферальная программа</a> 
                        <a onClick={()=>setActiveMenu(!activeMenu)} href="">Мы в Telegram</a> 
                 </div>
                 <a href="" onClick={()=>setActiveMenu(!activeMenu)} className='bg-[#232938] rounded-2xl mx-auto h-10 w-[149px] text-center text-white flex justify-center py-2 px-4 md:px-5'>Регистрация</a> <br />
                 <a href="" onClick={()=>setActiveMenu(!activeMenu)} className='text-[#181828] rounded-2xl  h-10 w-[104px] text-center bg-white mx-auto flex justify-center py-2 px-4 md:px-5'>Войти</a>
              </div>
              }
            </header>
             
        </div>
       {/* Navbar */}
        {/* Home */}
       <Hime/>
       <section className='text-center relative  w-full px-5 py-20 bg-black'>
            <h3 className='md:text-[36px] text-[24px] text-white font-bold mb-8'>Широкий спектр гео</h3>
               <AutoScrollImage/>
             <p className='md:text-[22px] text-[16px] mx-auto max-w-[250px] md:max-w-[650px] mb-40 text-white mt-10'>Мы работаем с различными регионами, включая страны  <span className='font-semibold  text-cyan-400'>СНГ, Индию и Турцию, и продолжаем расширять наши горизонты!</span></p>
             <div className="light-bg top-60 md:left-1/2 h-[300px] md:h-auto"></div>
             <div className='container  h-auto lg:h-[377px] relative  bg-slate-800 py-5 text-center rounded-2xl md:flex items-center gap-x-8'>
              <img src="_.png" alt="" className='absolute left-0 -top-20 w-32' />
              <img src="_(1).png" alt="" className='absolute -right-6 -bottom-10 w-32' />
                  <img className='ml-20 mr-10' src="./mayfPay.svg" alt="" />
                  <img className=" loaded md:h-[90%] mx-auto lg:block hidden" data-original="https://web.archive.org/web/20241007013022/https://static.tildacdn.net/tild6164-3137-4165-b536-643338326465/Line_8.png" alt="" imgfield="tn_img_1720394766680" src="https://web.archive.org/web/20241007013022im_/https://optim.tildacdn.net/tild6164-3137-4165-b536-643338326465/-/format/webp/Line_8.png"/>
                  <div className='h-[2px] rounded-3xl bg-white w-full mx-auto md:hidden block my-6'></div>
                  <div className='md:mx-16 mx-5'>
                    <p className='md:text-[36px] text-[20px] mb-4 md:mb-0 text-white font-extrabold'>Платформа разработана командой финтеха MayfPay</p>
                    <p className='text-white text-[16px] md:text-[22px] '>
                        MayfPay на протяжении более трех лет успешно работает в сфере финтех,
                        <span className='text-[#9b96ae]'>обладая обширным опытом и глубокими знаниями, что гарантирует высокое качество и надежность предоставляемых решений.</span>
                    </p>
                  </div>
             </div>

             <div className='my-40 relative'>
                 <div className='flex items-center justify-center gap-x-10'>
                      <img className="tn-atom__img t-img loaded w-[114px]" data-original="https://web.archive.org/web/20241007013022/https://static.tildacdn.net/tild3533-6664-4539-b931-613135386434/Group_237825.png" alt="" imgfield="tn_img_1720395273030" src="https://web.archive.org/web/20241007013022im_/https://optim.tildacdn.net/tild3533-6664-4539-b931-613135386434/-/resize/135x/-/format/webp/Group_237825.png"></img>
                    <p className='text-white uppercase text-md md:text-[22px] font-semibold'>трейдерам</p>
                 <img className="tn-atom__img t-img loaded w-[114px]" data-original="https://web.archive.org/web/20241007013022/https://static.tildacdn.net/tild6131-6437-4061-b563-376666303265/Group_237843.png" alt="" imgfield="tn_img_1720395213049" src="https://web.archive.org/web/20241007013022im_/https://optim.tildacdn.net/tild6131-6437-4061-b563-376666303265/-/resize/136x/-/format/webp/Group_237843.png"></img>
                 <div className="light-bg top-64"></div>
                 </div>
                 <p className='text-white mb-8 text-[24px] md:text-[36px] font-extrabold mt-5'>Преимущества P2P Трейдинга</p>
                  <div className='container grid lg:grid-cols-2 gap-x-4 gap-y-5 lg:gap-y-10 grid-cols-1'>
                        {cards && cards.map((card)=>(
                          // <Card key={card.id} card={card}/>
                          <div className='text-white md:p-8 p-4 rounded-2xl relative bg-slate-900'>
                              <div className='flex flex-col-reverse  lg:flex-row w-full items-center justify-between mb-5'>
                                   <p className='lg:text-[24px] text-[18px] font-bold w-full lg:w-[60%] lg:text-start text-center mt-4 lg:mt-0'>{card.title}</p>
                                   {card.img && <img src={card.img} alt="" />}
                                   {card.bigImg && <img className='w-20 h-20 lg:w-40 lg:h-40 lg:absolute lg:-top-10 lg:right-0' src={card.bigImg} alt="" />}
                              </div>
                              <p className='md:text-[18px] text-[#9B96AE] text-sm text-center lg:text-start'>{card.subtitle}</p>
                          </div>
                        ))}
                  </div>
             </div>
              <div className='container'>
                 <div className='flex items-center justify-center gap-x-10'>
                      <img className="tn-atom__img t-img loaded w-[114px]" data-original="https://web.archive.org/web/20241007013022/https://static.tildacdn.net/tild3533-6664-4539-b931-613135386434/Group_237825.png" alt="" imgfield="tn_img_1720395273030" src="https://web.archive.org/web/20241007013022im_/https://optim.tildacdn.net/tild3533-6664-4539-b931-613135386434/-/resize/135x/-/format/webp/Group_237825.png"></img>
                    <p className='text-white uppercase text-md md:text-[22px] font-semibold'>как начать</p>
                 <img className="tn-atom__img t-img loaded w-[114px]" data-original="https://web.archive.org/web/20241007013022/https://static.tildacdn.net/tild6131-6437-4061-b563-376666303265/Group_237843.png" alt="" imgfield="tn_img_1720395213049" src="https://web.archive.org/web/20241007013022im_/https://optim.tildacdn.net/tild6131-6437-4061-b563-376666303265/-/resize/136x/-/format/webp/Group_237843.png"></img>
                 <div className="light-bg top-64"></div>
                 </div>
                 <p className='text-white mb-8 text-[24px] md:text-[36px] font-extrabold mt-5'>Как зарабатывать с нами?</p>
                 <div className='lg:flex items-center justify-between'>
                    <img  className='lg:block hidden' src="./chess.jpg" alt="" />
                    <div>
                        {titles.map((title)=>(
                          <div className='max-w-[500px] mb-7' key={title.id}>
                               <p className='flex text-white items-center gap-x-2 mb-8'>
                                  <span className='text-[22px] text-center font-semibold'>{title.number}</span>
                                  <RxDoubleArrowLeft className='text-cyan-400 hidden lg:block text-2xl'/>
                               </p>
                               <p className='md:text-[22px] text-[16px] text-center lg:text-start font-medium text-white'>{title.title}</p>
                          </div>
                        ))}
                    </div>
                 </div>
             </div>
       </section>

       
       {/* Home */}
    </div>
  )
}

export default Home
