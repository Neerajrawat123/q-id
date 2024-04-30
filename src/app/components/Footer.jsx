import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bg-black border-t-2 border-gray-500 pb-10 w-full font-primary-font ">
      <div className="max-w-[1040px] text-white mx-auto py-[50px] ">
        <div className="flex flex-col px-[30px]  gap-2">
          <div className="flex w-full sm:flex-row flex-col border-b-[1px] border-gray-500 pb-4">
            <div className="w-3/5 items-center mt-10 mb-10">
              <h2 className="text-[4rem] text-white font-bold italic">qid</h2>
            </div>
            <div className="flex sm:w-2/5 flex-col sm:flex-row justify-between gap-4">
              <div className="p-[10px]">
                <h2 className=" text-[1.5rem] font-semibold mb-3 capitalize">
                  Download app
                </h2>
                <ul className="flex flex-col  text-footer-text leading-tight">
                  <li className="py-[13px]">
                    <Link href="https://play.google.com/store/apps/details?id=com.quickids.digilocker.qid">Android</Link>
                  </li>
                  <li className="py-[13px]">
                    <Link href="https://apps.apple.com/us/app/qid-quick-id/id1629041779">Ios</Link>
                  </li>
                  <li className="py-[13px]">
                    <Link href="https://chromewebstore.google.com/detail/afghjacdcfhoikcccemlchhmokfgobpj">C-form Pro Plugin</Link>
                  </li>
                  <li className="py-[13px]">
                    <Link href="">Book a demo</Link>
                  </li>
                </ul>
              </div>

              <div className="p-[10px]">
                <h2 className=" text-[1.5rem] font-semibold mb-3 capitalize">
                  Legal
                </h2>
                <ul className="flex flex-col  text-footer-text leading-tight">
                  <li className="py-[13px]">
                    <Link href="">Privacy Policy</Link>
                  </li>
                  <li className="py-[13px]">
                    <Link href="">Terms of Use</Link>
                  </li>
                  <li className="py-[13px]">
                    <Link href="">
                      Cancellation and Refund
                      <br /> Policy
                    </Link>
                  </li>
                  <li className="py-[13px]">
                    <Link href="">
                      Shipping and Return
                      <br /> Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex w-full mt-2 flex-wrap-reverse justify-between gap-4">
            <div>
              <h2 className="text-[20px] font-semibold">oneqid Technologies private limited</h2>
            </div>
            <div className="flex w-full md:max-w-fit justify-center text-center ">
                <span className="w-8 h-8 flex items-center justify-center bg-white rounded-full">

              <svg
              className="w-4 h-4"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
              </svg>
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
