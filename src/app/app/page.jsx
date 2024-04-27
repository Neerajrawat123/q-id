import React from "react";
import Navigation from "../components/navigation";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <main className="mt-20 h-screen  bg-white">
        <div className="w-[1140px] mx-auto px-10 ">
          <div className="flex h-screen justify-center items-center">
            <div className="flex">
              <div className="flex flex-col justify-center items-center gap-7 w-1/2">
                <div>
                  <h2 className="text-[58px] font-extrabold text-black">
                    Get the qid App
                  </h2>
                </div>
                <div className="flex gap-2">
                  <div className="flex flex-col gap-4 px-3 w-3/5">
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
                  <div className="w-2/5">
                      <a href="">
                        <img src="/images/qr-code-5-2-1024x1024.png" alt="" />
                      </a>
                    </div>                </div>
              </div>
              <div className="w-1/2  py-12 mt-12">
                <img
                className="w-[95%] h-[95%] object-contain"
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
