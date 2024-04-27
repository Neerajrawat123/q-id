import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div>
      <div className=" h-screen object-contain bg-main-pattern flex justify-center items-center bg-contain border-b-[1px] border-gray-800">
        <div className="bg-transparent flex items-center flex-col gap-5 ">
          <p className="text-white text-center text-6xl font-bold">
            every person deserves to know <br />
            and be known by their true <br />
            identity
          </p>
          <Link
            className="m-auto text-lg leading-4 font-semibold px-[28px] py-5 rounded-[50px] text-black bg-white"
            href={"/download"}
          >
            Download qid
          </Link>
        </div>
      </div>
      <div className="bg-secondary-pattern bg-[length:100%] bg-blend-overlay bg-grid-col w-full pt-20  ">
        <div className=" w-[1040px] mx-auto justify-center  ">
          <div className="flex gap-10 justify-center">

          <div className="pt-64 ">
            <h2 className="text-6xl font-bold">
              <span>secure,</span>
              easy, and with you
            </h2>
            <Link
              className="font-semibold text-lg px-6 max-w-fit py-5 rounded-[50px] bg-white flex gap-1 items-center mt-6 text-black"
              href={"/"}
            >
              <span>Create free account</span>
              <span className="w-4 h-4">
                <svg
                  aria-hidden="true"
                  class="e-font-icon-svg e-fas-chevron-circle-right w-4 h-4"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"></path>
                </svg>
              </span>
            </Link>
          </div>
          <div>
            <img
              className="w-[89%]"
              src="./images/fsgdh43_2-e1684067541108.png"
              alt=""
            />
          </div>
        </div>
          <div className="flex gap-7   mt-[-35px] ">
            <div className="mb-5 ">
              <h2 className="text-[55px] leading-tight font-bold">Two Base elements of Identity ecosystem</h2>

            </div>
            <div className="flex gap-6   ">
            <div className="flex flex-col border h-[280px] w-[280px] mt-[-25px]  border-card-bord py-3 px-4 bg-card-1 rounded-3xl shadow-card-1-shad">
                <h2 className="font-semibold leading-tight text-[51px]  text-card-bord">1</h2>
                <h2 className="font-semibold text-[41px] leading-normal mb-3 mt-1 ">Managing</h2>
                <p className="text-main-text">Consolidate all your IDs securely in one place with qid, making them easily accessible whenever you need them</p>
              </div>
              <div className="flex flex-col border w-[280px] h-[280px]   border-card-bord py-3 px-4  bg-card-2 rounded-3xl shadow-card-2-shad">
                <h2 className="font-semibold text-[51px] leading-tight  text-card-bord">2</h2>
                <h2 className="font-semibold text-[41px] mb-3 mt-1 ">Sharing</h2>
                <p className="text-main-text">Experience lightning-fast and trackable ID sharing with qid, ensuring seamless and efficient communication</p>
              </div>

            </div>

            

          </div>



        <div>
          <div>
            <div className="w-4 h-[179px]"></div>
            <span></span>
            <div></div>
            <span></span>
            <div></div>
          </div>
        </div>
        </div>


       

        <div>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

