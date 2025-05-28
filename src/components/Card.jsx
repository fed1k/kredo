const Card = (card) => {
  console.log(card);
  return (
    <div className="p-8 shadow-2xl  rounded-2xl">

      <div>
         <h3 className="text-white z-10 font-bold text-3xl">{card.title}</h3> 
         {/* {img && <img src={img} alt="icon" className="w-8 h-8" />}
         {bigImg && <img src={bigImg} alt="big" className="w-20 h-20" />} */}
      </div>
      
      
      
    </div>
  );
};

export default Card;
