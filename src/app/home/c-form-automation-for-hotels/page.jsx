'use client'
import React from "react";
import Navigation from "../../components/navigation";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import { usePathname} from 'next/navigation';

function CForm() {
  const path = usePathname();
  console.log(path);
  return (
    <>
      <Navigation />

      <main className=" bg-secondary-pattern text-white bg-[length:100%] pb-20 bg-blend-overlay bg-grid-col mt-20 font-primary-font">
        <div>
          <div className="  pr-1   pl-8 max-w-[1140px] w-full px-5 pt-14    mx-auto flex flex-col ">
            <div className="flex gap-4 flex-col mt-10">
              <h2 className="font-bold text-[51px] md:text-[71px] leading-none">
                <span>C-Form </span>Automation{" "}
              </h2>
              <h3 className="font-semibold leading-none text-[29px]">
                Say Goodbye to Manual C-Forms
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row">
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
                  <svg
                    aria-hidden="true"
                    class="e-font-icon-svg e-fab-chrome"
                    viewBox="0 0 496 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M131.5 217.5L55.1 100.1c47.6-59.2 119-91.8 192-92.1 42.3-.3 85.5 10.5 124.8 33.2 43.4 25.2 76.4 61.4 97.4 103L264 133.4c-58.1-3.4-113.4 29.3-132.5 84.1zm32.9 38.5c0 46.2 37.4 83.6 83.6 83.6s83.6-37.4 83.6-83.6-37.4-83.6-83.6-83.6-83.6 37.3-83.6 83.6zm314.9-89.2L339.6 174c37.9 44.3 38.5 108.2 6.6 157.2L234.1 503.6c46.5 2.5 94.4-7.7 137.8-32.9 107.4-62 150.9-192 107.4-303.9zM133.7 303.6L40.4 120.1C14.9 159.1 0 205.9 0 256c0 124 90.8 226.7 209.5 244.9l63.7-124.8c-57.6 10.8-113.2-20.8-139.5-72.5z"></path>
                  </svg>{" "}
                </span>
                <span>Get Chrome Extension</span>
              </Link>
            </div>
          </div>
          <div>
            <div className="mt-10 px-5 md:hidden">
              <img src="/images/c-form-long-1222x2048.png" alt="" />
            </div>

            <div className="mt-[-30px] pl-12 hidden md:block">
              <img src="/images/Asset-4-2048x1082.png" alt="" />
            </div>
          </div>
        </div>

        {/* card section */}
        <div className="max-w-[1140px] font-primary-font w-full  mx-auto py-2">
          <div className="flex flex-col gap-10">
            <div className="px-10 py-2">
              <h2 className="font-bold md:text-[74px] leading-tight text-[40px]">
                Trust us, its truly a matter of just <span>one click</span>.
              </h2>
              <div>
                <div className="grid md:grid-cols-3 grid-flow-row gap-5  mt-20">
                  <div className="p-[30px] border border-card-bord rounded-[30px]">
                    <div>
                      <h2 className="font-semibold leading-tight text-[32px]">
                        Your guests upload photos of their Passport and Visa.
                      </h2>
                    </div>
                  </div>

                  <div className="p-[30px] border border-card-bord rounded-[30px]">
                    <div>
                      <h2 className="ffont-semibold leading-tight text-[32px]">
                        Qids AI engine extracts details like Passport Number,
                        Visa Number, Name, Country, and Photos from the images
                      </h2>
                    </div>
                  </div>

                  <div className="p-[30px] border border-card-bord rounded-[30px]">
                    <div>
                      <h2 className="font-semibold leading-tight text-[32px]">
                        Go to the C-Form website Open the qid C-Form Pro Chrome
                        plugin. Select the guest. Done!{" "}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1140px] w-full font-primary-font flex-wrap-reverse px-8 md:px-2 text-white pr-12 pt-16  mx-auto py-2">
          <div className="flex w-full  md:flex-row flex-wrap-reverse md:flex-nowrap justify-end  gap-6">
            <div className="flex md:w-2/3  w-full justify-center flex-col pt-3">
              <div className="flex  flex-col gap-4">
                <h2 className="font-semibold leading-none md:text-[46px] text-[36px]">
                  Elevate C-Form Processing with qids State-of-the-Art Chrome
                  Extension
                </h2>
                <h3 className="font-medium text-form leading-none text-[1.27rem]">
                  Simplify C-Form management like never before with qid’s
                  revolutionary Chrome extension.{" "}
                </h3>
              </div>
              <div>
                <Link
                  className="font-semibold border  text-lg leading-tight px-6 max-w-fit py-5 rounded-[50px] bg-white flex gap-2 items-center mt-6 text-black"
                  href={"/"}
                >
                  <span className=" h-5 w-5  fill-black">
                    <svg
                      aria-hidden="true"
                      class="e-font-icon-svg e-fab-chrome"
                      viewBox="0 0 496 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M131.5 217.5L55.1 100.1c47.6-59.2 119-91.8 192-92.1 42.3-.3 85.5 10.5 124.8 33.2 43.4 25.2 76.4 61.4 97.4 103L264 133.4c-58.1-3.4-113.4 29.3-132.5 84.1zm32.9 38.5c0 46.2 37.4 83.6 83.6 83.6s83.6-37.4 83.6-83.6-37.4-83.6-83.6-83.6-83.6 37.3-83.6 83.6zm314.9-89.2L339.6 174c37.9 44.3 38.5 108.2 6.6 157.2L234.1 503.6c46.5 2.5 94.4-7.7 137.8-32.9 107.4-62 150.9-192 107.4-303.9zM133.7 303.6L40.4 120.1C14.9 159.1 0 205.9 0 256c0 124 90.8 226.7 209.5 244.9l63.7-124.8c-57.6 10.8-113.2-20.8-139.5-72.5z"></path>
                    </svg>{" "}
                  </span>
                  <span>Get Chrome Extension</span>
                </Link>
              </div>
            </div>
            <div className="flex sm:w-4/5 md:w-1/3 w-full pl-6 md:p-0 justify-end card-3d  ">
              <div className="  rounded-2xl overflow-hidden">
                <img
                  src="/images/Screenshot-2023-07-27-at-12.23.51-PM.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1140px] mx-auto w-full font-primary-font px-7 mt-5 overflow-hidden bg-black z-20  text-white">
          <div className="p-[30px] rounded-[30px] flex flex-col border gap-6 border-card-bord">
            <div>
              <h2 className="font-semibold leading-none text-[46px]">
                What is C-Form?
              </h2>
            </div>
            <div className="flex flex-col gap-5 leading-auto text-[22px]">
              <p>
                In India, a C-Form is a mandatory document required under the
                Foreigners’ Registration Act, 1946.
              </p>
              <p>
                It serves as a record of the stay of foreign nationals within
                the country.
              </p>
              <p>
                Hotels, guesthouses, and other accommodation providers are
                legally obligated to submit C-Forms to local authorities for
                every foreign guest’s stay.
              </p>
            </div>
            <div>
              <Link
                className="font-semibold border border-card-bord text-lg leading-tight px-6 max-w-fit py-5 rounded-[50px] bg-black flex gap-2 items-center mt-6 text-white"
                href={"/"}
              >
                <span>Read More</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default CForm;
