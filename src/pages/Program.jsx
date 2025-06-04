import React from 'react'
import { RxDoubleArrowDown } from "react-icons/rx";
import { programCards } from '../constans';
const Program = () => {
  return (
    <div className="bg-black h-auto mt-[71px] lg:mt-20 w-full">
         <div className="flex container relative pt-36 items-center lg:mt-10 justify-center gap-x-10">
          <img
            className="tn-atom__img t-img loaded w-[114px]"
            data-original="https://web.archive.org/web/20241007013022/https://static.tildacdn.net/tild3533-6664-4539-b931-613135386434/Group_237825.png"
            alt=""
            imgfield="tn_img_1720395273030"
            src="https://web.archive.org/web/20241007013022im_/https://optim.tildacdn.net/tild3533-6664-4539-b931-613135386434/-/resize/135x/-/format/webp/Group_237825.png"
          ></img>
          <p className="text-white uppercase text-md md:text-[22px] font-semibold">
            реферальная программа
          </p>
          <div className="light-bg left-0 opacity-65"></div>
          <img
            className="tn-atom__img t-img loaded w-[114px]"
            data-original="https://web.archive.org/web/20241007013022/https://static.tildacdn.net/tild6131-6437-4061-b563-376666303265/Group_237843.png"
            alt=""
            imgfield="tn_img_1720395213049"
            src="https://web.archive.org/web/20241007013022im_/https://optim.tildacdn.net/tild6131-6437-4061-b563-376666303265/-/resize/136x/-/format/webp/Group_237843.png"
          ></img>
        </div>
        <div className='container pt-8'>
             <p className='text-4xl font-bold text-center leading-[51px] text-white'>Приглашаем вас принять участие в нашей реферальной программе и получать дополнительное <span className='text-[#33D2FF]'>вознаграждение за привлечение активных трейдеров</span> на нашу платформу!</p>
             <RxDoubleArrowDown className="text-cyan-400 mx-auto mt-6 hidden lg:block text-4xl"/>
        </div>
        <div className='container'>
           <h3>Как это работает?</h3>
           <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
              {programCards && programCards.map((item)=>(
                 <div className='bg-[#090818] rounded-2xl relative mx-w-[371px] p-5'>
                     <div className=''>
                         <img className='w-[200px] h-[250px] absolute' src={item.numberImg} alt="" /> 
                         <img className='w-[150px] absolute top-4  r-10 h-[184px]' src={item.image} alt="" />
                     </div>
                 </div>
              ))}
           </div>
        </div>
    </div>
  )
}

export default Program
