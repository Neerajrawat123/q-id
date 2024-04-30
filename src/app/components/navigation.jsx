"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname} from 'next/navigation';


export default function Navigation() {
    const path = usePathname();
  const [isExpand, setIsExpand] = useState(false);
  const handleExpand = (e) => {
    e.preventDefault();

    setIsExpand(!isExpand);
  };
  return (
    <div className="w-full   z-10 py-2 border-b-[0.2px] font-primary-font  bg-black  border-slate-900 fixed top-0">
      <div className="max-w-[1140px] w-full mx-auto  flex py-[10px] justify-between itemx-center text-main-text">
        <div className="pl-6">
          <Link
            className="text-[38px] font-semibold text-logo-col italic"
            href={"/"}
          >
            qid
          </Link>
        </div>
        <div className=" px-6 flex items-center">
          <div>
            <button className="w-5 h-5 " onClick={handleExpand}>
              {isExpand ? (
                <svg
                  aria-hidden="true"
                  role="presentation"
                  class="fill-menu-col md:hidden"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"></path>
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  role="presentation"
                  className="fill-menu-col md:hidden block e-font-icon-svg e-eicon-menu-bar"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z"></path>
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 md:flex hidden ">
            <div className="flex gap font-semibold justify-end">
              <Link className={path.includes('app') ? 'text-white px-5 hover:text-white py-3' : 'px-5 hover:text-white py-3'} href={"/app"}>
                App
              </Link>
              <Link
                className={path.includes('home') ? 'text-white px-5 hover:text-white py-3' : 'px-5 hover:text-white py-3'}
                href={"/home/c-form-automation-for-hotels"}
              >
                C-form Pro
              </Link>

              <Link className={path.includes('support') ? 'text-white px-5 hover:text-white py-3' : 'px-5 hover:text-white py-3'} href={"/support"}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
      {
        isExpand && (
            <div className="absolute w-full top-[85px] bg-menu">
            <nav className=" font-semibold w-full divide-y-2 divide-black  text-white">
              <div className="w-full px-[29px] py-[16px]">
                <Link className="px-5 w-full text-pr py-3" href={"/app"}>
                  App
                </Link>
              </div>
              <div className="w-full px-[29px] py-[16px]">
                <Link
                  className="px-5 hover:text-white py-3"
                  href={"/home/c-form-automation-for-hotels"}
                >
                  C-form Pro
                </Link>
              </div>
    
              <div className="w-full px-[29px] py-[16px]">
                <Link className="px-5 hover:text-white py-3" href={"/support"}>
                  Contact
                </Link>
              </div>
            </nav>
          </div>

        )
      }
     
    </div>
  );
}
