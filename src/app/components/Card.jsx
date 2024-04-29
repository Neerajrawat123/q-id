import React from "react";

function Card() {
  return (
    <div className=" border rounded-[30px] border-card-bord ">
      <div className="p-[36px] flex flex-col gap-10">
        <div>
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
            <img src="/images/Dhruv.jpg" alt="" />
          </div>
        </div>

        <div className="font-semibold text-[21px]">
          Best bheed management software for your property's front desk. ID
          collection has never been this fast.
        </div>
        <div className="text-main-text flex flex-col">
          <span className="font-bold text-[20px]">Dhruv Arora</span>
          <span className="font-medium">Founder & Ceo , THe Nomad</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
