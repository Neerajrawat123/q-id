'use client'
import React, { useState } from "react";
import Navigation from "../components/navigation";
import Footer from "../components/Footer";

function Contact() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState('')
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();


    // handle api to submit form

  }

  return (
    <>
      <Navigation />
      <main className="bg-secondary-pattern text-white bg-[length:100%] font-primary-font bg-blend-overlay bg-grid-col mt-20 px-[10px]">
        <div className="max-w-[1140px] pb-20 md:h-screen w-full  mx-auto flex flex-wrap items-center">
          <div className="md:flex flex-wrap  px-5  gap-2 mt-5">
            <div className="flex flex-col gap-3 md:w-[51%] py-5 w-full  pt-4">
              <div>
                <h2 className="font-semibold text-[50px] md:text-[80px] leading-tight">
                  Contact us
                </h2>
              </div>
              <div>
                <h2 className="text-[25px] leading-tight font-semibold text-col-contact">
                  Discover Qid – Your Partner in Secure Identity Management
                </h2>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-5 h-5 fill-white">
                  <svg
                    aria-hidden="true"
                    class="e-font-icon-svg e-far-envelope"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                  </svg>
                </div>

                <h2 className="font-semibold text-[18px]">
                  contact@oneqid.com
                </h2>
              </div>

              <div className="flex gap-2 items-center">
                <div className="w-5 h-5 fill-white">
                  <svg
                    aria-hidden="true"
                    class="e-font-icon-svg e-fas-phone-alt"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                  </svg>
                </div>

                <h2 className="font-semibold text-[18px]">+91 960 640 640 6</h2>
              </div>
              <hr className="mt-5  w-2/3" />

              <div className="mt-3 text-blue">
                <h2 className="font-semibold text-[32px]">Trusted by 25,000+ Users</h2>
              </div>
            </div>

            <div className="border-[1px] w-full border-form-bord text-[15px] bg-black text-form-bord  md:w-[45%] sm:w-[80%] rounded-[20px] p-[30px] md:p-[50px]">
              <form className="flex flex-col gap-6" onSubmit={handleSubmit} method="post">
                <div className="flex flex-col gap-1">
                  <label className="text-form " htmlFor="name">
                    Name <span className="text-red-900">*</span>
                  </label>
                  <input
                    className="border-b-[1px] focus:outline-none px-4 text-white border-form-bord bg-transparent text-[20px]"
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={() => setName(e.target.value)}
                  />
                </div>
                <div className="flex gap-4 w-full ">
                  <div className="flex flex-col flex-row">
                    <label className="text-form" htmlFor="phone">
                      Phone no <span className="text-red-900">*</span>
                    </label>
                    <input
                      className="border-b-[1px] focus:outline-none text-white px-4 w-full border-form-bord bg-transparent text-[20px]"
                      type="text"
                      name="phone"
                      id="phone"
                      inputMode="numeric"
                      value={phone}
                      onChange={() => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label className="text-form" htmlFor="email">
                      Email <span className="text-red-900">*</span>
                    </label>
                    <input
                      className="border-b-[1px] text-white focus:outline-none px-4 w-full bg-transparent border-form-bord text-[20px]"
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={() => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-form" htmlFor="name">
                    message <span className="text-red-900">*</span>
                  </label>
                  <input
                    className="border-b-[1px] text-white focus:outline-none px-4 bg-transparent text-[20px] border-form-bord"
                    type="text"
                    name="message"
                    id="message"
                    value={message}
                    onChange={() => setMessage(e.target.value)}
                  />
                </div>
                <div className="w-full flex justify-end ">
                  <button className="px-10 py-5 bg-white hover:bg-blue hover:text-white text-black rounded-[40px] leading-4 text-[14px]">
                    <span className="font-semibold">Submit</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div></div>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default Contact;
