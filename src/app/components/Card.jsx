import React from "react";

function Card({data}) {
   const {username, position, workplace,  testimonial, image} = data;
      return (
    <div className=" border rounded-[30px] md:h-[450px] border-card-bord ">
      <div className="p-[36px] flex flex-col gap-8">
        <div>
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
            <img src={image} alt="" />
          </div>
        </div>

        <div className="font-semibold text-[21px]">
            {testimonial}
        </div>
        <div className="text-main-text flex flex-col">
          <span className="font-bold text-[20px]">{username}</span>
          <span className="font-medium">{position}, { workplace}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
