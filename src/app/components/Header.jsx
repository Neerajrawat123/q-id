import Link from "next/link";
import React from "react";
import Carousal from "./Carousal";

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
        <div className=" w-[1140px] px-1  mx-auto justify-center  ">
          <div className="flex gap-10 justify-center">
            <div className="pt-64 ">
              <h2 className="text-[70px] font-bold leading-[4.5rem] text-white">
                <span>secure,</span>
                easy,
                <br />
                and always
                <br /> with you
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
              <h2 className="text-[55px] leading-tight text-white font-bold">
                Two Base elements of Identity ecosystem
              </h2>
            </div>
            <div className="flex gap-6   ">
              <div className="flex flex-col border h-[280px] w-[280px] mt-[-25px]  border-card-bord py-3 px-4 bg-card-1 rounded-3xl shadow-card-1-shad">
                <h2 className="font-semibold leading-tight text-[51px]  text-card-bord">
                  1
                </h2>
                <h2 className="font-semibold text-[41px] text-white leading-normal mb-3 mt-1 ">
                  Managing
                </h2>
                <p className="text-main-text">
                  Consolidate all your IDs securely in one place with qid,
                  making them easily accessible whenever you need them
                </p>
              </div>
              <div className="flex flex-col border w-[280px] h-[280px]   border-card-bord py-3 px-4  bg-card-2 rounded-3xl shadow-card-2-shad">
                <h2 className="font-semibold text-[51px] leading-tight  text-card-bord">
                  2
                </h2>
                <h2 className=" text-white font-semibold text-[41px] mb-3 mt-1 ">
                  Sharing
                </h2>
                <p className="text-main-text">
                  Experience lightning-fast and trackable ID sharing with qid,
                  ensuring seamless and efficient communication
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-5 font-primary-font">
            <div className="flex gap-4 flex-col justify-center items-center w-24">
              <div className="w-1 h-[179px] bg-gradient-to-b from-black from-30% to-grad-col"></div>
              <span className="h-[1px] w-12 bg-gray-600"> </span>
              <div className="w-1 h-[260px]  bg-red-500"></div>
              <span className="h-[1px] w-12 bg-gray-600"> </span>
              <div className="w-1 h-[179px]  bg-red-500"></div>
            </div>
            <div className="flex flex-col justify-between pt-32 pb-10">
              <div>
                <h2 className="text-[40px] font-bold text-p-col leading-10">
                  Your true identity,
                  <br />
                  <span className="bg-gradient-to-r text-transparent bg-clip-text from-green-200 to-green-500">
                    managed
                  </span>{" "}
                  with ease.
                </h2>
                <p className="mt-5 text-sec-text-col font-semibold text-[24px]  leading-[24px]">
                  With qid, managing your IDs has never been easier. You can
                  store and access all your IDs in one place, share them
                  securely with others, and even get them verified with just a
                  few clicks. Say goodbye to the hassle of carrying physical IDs
                  or struggling with tedious verification processes, and hello
                  to the convenience and simplicity of qid.
                </p>
              </div>

              <div>
                <h2 className="text-[40px] font-bold text-p-col leading-10">
                  <span className="bg-gradient-to-r text-transparent bg-clip-text from-orange-200 to-orange-500">
                    share
                  </span>{" "}
                  your identity with ease,
                  <br />
                  qid has got you covered!
                </h2>

                <p className="mt-5 text-sec-text-col font-semibold text-[24px]  leading-[24px]">
                  Sharing IDs with qid is simple and convenient. Just add the ID
                  to your qid profile and share it with anyone, anytime,
                  anywhere. No need to carry physical IDs or worry about losing
                  them.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[80vhvh] w-[100vw] mt-[] min-h-screen font-primary-font  bg-cover bg-tertiary-pattern bg-[length:100%] bg-center pt-[6px]">
          <div className="flex justify-center ">
            <h2 className="font-bold text-[77px] text-white ">
              qid for Bussiness
            </h2>
          </div>
          <div className="flex justify-center ">
            <h2 className="font-bold text-[30px] text-white ">
              manage all your IDs with one QR
            </h2>
          </div>
        </div>

        <div className="bg-secondary-pattern bg-[length:100%] bg-blend-overlay font-primary-font bg-grid-col w-full pt-3 pb-9  ">
          <div className=" w-[1140px]   mx-auto justify-center  ">
            <div className="">
              <div className="w-full flex  gap-5">
                <div className="flex flex-col border w-[31.5%] h-full bg-black  border-card-bord  p-[25px] gap-[20px]  rounded-[30px]">
                  <div className="w-full overflow-hidden rounded-[30px]">
                    <img
                      src="/images/qr-code-12-1024x1024.png"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div className="flex flex-col text-white gap-5 ">
                    <h2 className="font-semibold text-[24px]">
                      Collect IDs with QR
                    </h2>
                    <h3 className="font-semibold text-sec-text-col mb-[14px]">
                      Easy to setup QR code stand
                    </h3>
                  </div>
                </div>

                <div className="p-[24px] flex flex-col gap-[20px] border border-card-bord rounded-[25px] bg-black w-full text-white">
                  <div className="p-[10px]">
                    {" "}
                    <h2 className="text-[25px] font-semibold  leading-none">
                      Business Analytics
                    </h2>
                  </div>
                  <div className="rounded-[25px]">
                    <img src="/images/Asset-7.png" alt="" />
                  </div>
                  <div>
                    <h3 className=" font-semibold text-sec-text-col">
                      Unlock the power of data with qid – your ultimate tool for
                      comprehensive business analytics.{" "}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex flex-col border w-[31.5%] h-full bg-black  border-card-bord  p-[25px] gap-[20px]  rounded-[30px]">
                  <div className="flex flex-col text-white gap-5 ">
                    <h2 className="font-semibold text-[24px]">
                      Customized Interface
                    </h2>
                    <h3 className="font-semibold text-sec-text-col mb-[14px">
                      Tailor qid’s interface to perfectly align with your brand,
                      creating a seamless and personalized user experience.
                    </h3>
                  </div>
                </div>
                <div className="flex gap-5 w-full mt-5">
                  <div className="flex flex-col border w-1/2 h-full bg-black  border-card-bord  p-[25px] gap-[20px]  rounded-[30px]">
                    <div className="flex flex-col text-white gap-5 ">
                      <h2 className="font-semibold text-[24px]">
                        Developer APIs
                      </h2>
                      <h3 className="font-semibold text-sec-text-col mb-[14px">
                        Supercharge your applications with qid’s robust
                        developer APIs, enabling you to effortlessly leverage
                        the full potential of our platform and create unique,
                        personalized experiences for your users.{" "}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-col border w-1/2 h-full bg-black  border-card-bord  p-[25px] gap-[20px]  rounded-[30px]">
                    <div className="flex flex-col text-white gap-5 ">
                      <h2 className="font-semibold text-[24px]">
                        One-Click C-Form{" "}
                      </h2>
                      <h3 className="font-semibold text-sec-text-col mb-[14px">
                        Simplify C-Form filling with qid’s 1-Click solution,
                        automating the process and saving you time while
                        ensuring compliance.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-2 font-primary-font justify-center">
              <Link
                className="font-semibold text-lg leading-tight px-6 max-w-fit py-5 rounded-[50px] bg-white flex gap-2 items-center mt-6 text-black"
                href={"/"}
              >
                <span>Create Bussiness account</span>
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
              </Link>              </div>
            </div>


            {/* carousal sec */}


            <div className=" text-white mt-20">
              <div className="flex flex-col justify-center items-center">
                <h2  className="font-bold text-[64px]">
                  <span>Identified </span>
                   by qid
                </h2>
                <h3 className="font-semibold text-[24px] mt-3">Let’s dive into the real stories of how our service has touched the lives of our customers.</h3>
              </div>
              <Carousal />


              <div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
