import React from "react";

const AutoScrollImage = () => {
  const imageUrl = "./group.svg";

  return (
    <div className="relative w-full overflow-hidden h-[20px]">
      <style>
        {`
          @keyframes scrollX {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      <div
        className="flex"
        style={{
          width: "200%",
          animation: "scrollX 14s linear infinite"
        }}
      >
        <img
          src={imageUrl}
          alt="scrolling"
          className="w-1/2 h-[20px] object-cover"
        />
        <img
          src={imageUrl}
          alt="scrolling-duplicate"
          className="w-1/2 h-[20px] object-cover"
        />
      </div>
    </div>
  );
};

export default AutoScrollImage;
