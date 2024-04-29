import React from "react";
import Navigation from "../components/navigation";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <main className="mt-20 md:h-[90vh] h-full primary-font  bg-white">
        <div className="max-w-[1140px] w-full mx-auto md:px-4 ">
            <div className="flex h-full justify-center items-center">
            <div className="flex flex-wrap   md:flex-row flex-col">
              <div className="flex flex-col md:justify-center py-14 px-5 md:p-0  gap-7 md:w-1/2 w-full">
                <div>
                  <h2 className="md:text-[58px] text-[40px] font-extrabold text-black">
                    Get the qid App
                  </h2>
                </div>
                <div className="flex flex-col md:flex-row gap-2">
                  <div className="flex flex-col gap-4 px-3 md:w-3/5 w-full">
                    <div>
                      <a href="">
                        <img
                          src="/images/apple-download-2-1024x312.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <img src="/images/gplay-diwn-2-1024x312.png" alt="" />
                      </a>
                    </div>{" "}
                  </div>
                  <div className="md:w-2/5">
                      <a href="">
                        <img src="/images/qr-code-5-2-1024x1024.png" alt="" />
                      </a>
                    </div>                </div>
              </div>
              <div className="md:w-1/2 w-full md:h-[90vh] ">
                <img
                className="w-full h-full object-contain"
                src="/images/Asset-16.png"
                alt=""
              />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
