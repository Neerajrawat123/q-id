import React from "react";
import Navigation from "../../components/navigation";
import Link from "next/link";

function CForm() {
  return (
    <>
      <Navigation />

      <main className=" bg-secondary-pattern text-white bg-[length:100%] pb-20 bg-blend-overlay bg-grid-col mt-20 font-primary-font">
        <div>
          <div className="  pr-1   pl-8 md:w-[1140px] md:p-0   mx-auto flex flex-col ">
            <div className="flex gap-3 flex-col mt-10">
              <h2 className="font-bold text-[51px] leading-tight">
                <span>C-Form </span>Automation{" "}
              </h2>
              <h3 className="font-semibold text-[29px]">
                Say Goodbye to Manual C-Forms
              </h3>
            </div>
            <div className="flex gap-5">
              <Link
                className="font-semibold text-lg leading-tight px-6 max-w-fit py-5 rounded-[50px] bg-white flex gap-2 items-center mt-6 text-black"
                href={"/"}
              >
                <span>Book a demo</span>
              </Link>

              <Link
                className="font-semibold border border-card-bord text-lg leading-tight px-6 max-w-fit py-5 rounded-[50px] bg-black flex gap-2 items-center mt-6 text-white"
                href={"/"}
              >
                <span className=" h-5 w-5 text-white fill-white">
                <svg aria-hidden="true" class="e-font-icon-svg e-fab-chrome" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg"><path d="M131.5 217.5L55.1 100.1c47.6-59.2 119-91.8 192-92.1 42.3-.3 85.5 10.5 124.8 33.2 43.4 25.2 76.4 61.4 97.4 103L264 133.4c-58.1-3.4-113.4 29.3-132.5 84.1zm32.9 38.5c0 46.2 37.4 83.6 83.6 83.6s83.6-37.4 83.6-83.6-37.4-83.6-83.6-83.6-83.6 37.3-83.6 83.6zm314.9-89.2L339.6 174c37.9 44.3 38.5 108.2 6.6 157.2L234.1 503.6c46.5 2.5 94.4-7.7 137.8-32.9 107.4-62 150.9-192 107.4-303.9zM133.7 303.6L40.4 120.1C14.9 159.1 0 205.9 0 256c0 124 90.8 226.7 209.5 244.9l63.7-124.8c-57.6 10.8-113.2-20.8-139.5-72.5z"></path></svg>                </span>
                <span>Get Chrome Extension</span>
              </Link>
            </div>
          </div>
          <div>
            <div className="mt-14 px-5 md:hidden">
                <img src="/images/c-form-long-1222x2048.png" alt="" />

            </div>

            <div className="mt-[-30px] pl-12 hidden md:block">
                <img src="/images/Asset-4-2048x1082.png" alt="" />

            </div>


          </div>
        </div>
      </main>
    </>
  );
}

export default CForm;
