import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    telegram: '',
    comment: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
    setFormData({
        fullname: '',
        email: '',
        telegram: '',
        comment: ''
    })
  };
  return (
    <div className='bg-black h-auto mt-[71px] lg:mt-20 w-full'>
      <div className='container relative p-20'>
           <div className="flex items-center lg:mt-10 justify-center gap-x-10">
            <img
              className="tn-atom__img t-img loaded w-[114px]"
              data-original="https://web.archive.org/web/20241007013022/https://static.tildacdn.net/tild3533-6664-4539-b931-613135386434/Group_237825.png"
              alt=""
              imgfield="tn_img_1720395273030"
              src="https://web.archive.org/web/20241007013022im_/https://optim.tildacdn.net/tild3533-6664-4539-b931-613135386434/-/resize/135x/-/format/webp/Group_237825.png"
            ></img>
            <p className="text-white uppercase text-md md:text-[22px] font-semibold">
              контакты
            </p>
            <div className='light-bg left-0 opacity-65'></div>
            <img
              className="tn-atom__img t-img loaded w-[114px]"
              data-original="https://web.archive.org/web/20241007013022/https://static.tildacdn.net/tild6131-6437-4061-b563-376666303265/Group_237843.png"
              alt=""
              imgfield="tn_img_1720395213049"
              src="https://web.archive.org/web/20241007013022im_/https://optim.tildacdn.net/tild6131-6437-4061-b563-376666303265/-/resize/136x/-/format/webp/Group_237843.png"
            ></img>
          </div>
        <div className='w-full lg:flex block  justify-between  gap-x-28 mt-16'>
            <div className='flex flex-col gap-y-6 lg:mb-0 mb-10'>
                <div className='p-7 px-6 md:px-10 bg-[#090818] flex items-start w-full justify-between md:min-w-[570px] rounded-2xl'>
                      <div>
                        <p className='text-[18px] md:text-[22px] text-white font-semibold mb-3'>Поддержка</p>
                        <p className='text-[14px] md:text-[16px] text-white font-medium mb-1.5'>Контакт Trader Manager'a</p>
                        <p className='text-[#33D1FF] text-[16px] md:text-[18px] mb-5'>@Kredo_Trader</p>
                        <p className='text-[16px] text-white font-medium mb-1.5'>Поддержка</p>
                        <p className='text-[#33D1FF] text-[16px] md:text-[18px]'>[email protected]</p>
                      </div>
                      <img class="tn-atom__img t-img loaded" className='lg:w-auto w-[52px] h-[52px]' data-original="https://web.archive.org/web/20240910003831/https://static.tildacdn.net/tild3434-3739-4164-a137-363766323935/Group_237863.svg" alt="" imgfield="tn_img_1720442548552" src="https://web.archive.org/web/20240910003831im_/https://static.tildacdn.net/tild3434-3739-4164-a137-363766323935/Group_237863.svg"></img>
                </div>
                <div className='p-7 px-6 md:px-10 bg-[#090818] flex items-start w-full justify-between md:min-w-[570px] rounded-2xl'>
                      <div>
                        <p className='text-[18px] md:text-[22px] text-white font-semibold mb-3'>Официальные запросы</p>
                        <p className='text-[16px] text-white font-medium mb-1.5'>AML, KYC, Формальные запросы:</p>
                        <p className='text-[#33D1FF] text-[16px] md:text-[18px] mb-5'>[email protected]</p>
                      </div>
                      <img class="tn-atom__img t-img loaded" className='lg:w-auto w-[52px] h-[52px]' data-original="https://web.archive.org/web/20240910003831/https://static.tildacdn.net/tild3563-3539-4936-b961-336536643131/Group_237864.svg" alt="" imgfield="tn_img_1720442548561" src="https://web.archive.org/web/20240910003831im_/https://static.tildacdn.net/tild3563-3539-4936-b961-336536643131/Group_237864.svg"></img>
                </div>
                <div className='p-7 px-6 md:px-10 bg-[#090818] flex items-start w-full justify-between md:min-w-[570px] rounded-2xl'>
                      <div>
                        <p className='text-[18px] md:text-[22px] text-white font-semibold mb-3'>Наш Telegram</p>
                        <p className='text-[#33D1FF] text-[16px] md:text-[18px] mb-5'>@KredoP2P</p>
                      </div>
                     <img class="tn-atom__img t-img loaded" className='lg:w-auto w-[52px] h-[52px]' data-original="https://web.archive.org/web/20240910003831/https://static.tildacdn.net/tild3935-3565-4230-a463-613231626138/Group_237865.svg" alt="" imgfield="tn_img_1720442548542" src="https://web.archive.org/web/20240910003831im_/https://static.tildacdn.net/tild3935-3565-4230-a463-613231626138/Group_237865.svg"></img>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="w-full flex justify-center flex-col gap-y-6">
              <h3 className='text-[26px] lg:text-[36px] text-white text-center md:text-start font-extrabold mb-3'>Связаться с нами</h3>
              <p className='text-white text-[15px] text-center md:text-start md:text-[18px]'>Заполните форму, и мы свяжемся с вами в кратчайшие сроки!</p>
            <label className="w-full text-start mt-1">
              <span className="text-white text-[16px] md:text-[18px]">
                Как к Вам обращаться*
              </span>{" "}
              <br />
              <input
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
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
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                  name="telegram"
                  value={formData.telegram}
                  onChange={handleChange}
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
                 name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                className="bg-[#0E0f23] mt-3 min-h-32 rounded-xl placeholder:text-[#9b96ae] lg:py-4 py-2 px-3 border-none w-full md:w-[80%] text-white outline-none focus:border-blue-400 focus:ring-2"
              
                placeholder="Оставьте любое сообщение"
              ></textarea>
            </label>
            <div className="flex lg:flex-row flex-col-reverse gap-4 items-center">
              <button className="text-[#040112] text-[16px] md:text-[20px] h-14 md:h-[60px] mt-2 bg-[#33D2FF] rounded-2xl w-[200px] md:w-[250px] flex items-center justify-center gap-x-5 font-bold" type="submit">
                  Отправить заявку
                
              </button>
              
            </div>
            <div className="light-bg bottom-[50px] left-[40%]"></div>
            <p className="text-[15px] font-medium text-start text-white">
              Отправляя заявку в Kredo, Вы принимаете{" "}
              <span className="text-[#33D2FF]">Публичную оферту</span>{" "}
              <br className="lg:block hidden" />и соглашаетесь с{" "}
              <span className="text-[#33D2FF]">
                Политикой конфиденциальности
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
