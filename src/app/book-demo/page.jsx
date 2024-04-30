"use client";
import React, { useState } from "react";
import Navigation from "../components/navigation";
import Footer from "../components/Footer";

function BookDemo() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [industry, setIndustry] = useState("Hospital");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // handle api to submit form
  };

  return (
    <>
      <Navigation />
      <main className="bg-secondary-pattern text-white bg-[length:100%] font-primary-font bg-blend-overlay bg-grid-col mt-20 px-[10px]">
        <div className="max-w-[1140px] pb-20 md:h-screen w-full  mx-auto flex flex-wrap items-center">
          <div className="md:flex flex-wrap  px-5  gap-2 mt-5">
            <div className="flex flex-col gap-3 md:w-[51%] py-5 w-full  pt-4">
              <div>
                <h2 className="font-semibold text-[50px] md:text-[80px] leading-tight">
                  Book a Demo
                </h2>
              </div>
              <div>
                <h2 className="text-[25px] leading-tight font-semibold text-col-contact">
                  Discover Qid – Your Partner in Secure Identity Management
                </h2>
              </div>

              <div className="flex gap-4 items-center flex-wrap ">
                <div className="p-[10px] bg-black rounded-[10px] border border-card-bord">
                  <h2 className="font-semibold">Quick Guest Check-In</h2>
                </div>

                <div className="p-[10px] bg-black rounded-[10px] border border-card-bord">
                  <h2 className="font-semibold">C-Form Automation</h2>
                </div>

                <div className="p-[10px] bg-black rounded-[10px] border border-card-bord">
                  <h2 className="font-semibold">Business Analytics</h2>
                </div>

                <div className="p-[10px] bg-black rounded-[10px] border border-card-bord">
                  <h2 className="font-semibold">
                    QR Based Customer Onboarding
                  </h2>
                </div>
              </div>
              <hr className="mt-5  w-2/3" />

              <div className="mt-3 text-blue">
                <h2 className="font-semibold text-[32px]">
                  Trusted by 25,000+ Users
                </h2>
              </div>
            </div>

            <div className="border-[1px] w-full border-form-bord text-[15px] bg-black text-form-bord  md:w-[45%] sm:w-[80%] rounded-[20px] p-[30px] md:p-[50px]">
              <form
                className="flex flex-col gap-6"
                onSubmit={handleSubmit}
                method="post"
              >
                <div className="flex flex-col gap-1">
                  <label className="text-form " htmlFor="name">
                    Name
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
                      Phone no
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
                      Email
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
                    Company Name
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

                <div className="flex flex-col gap-1">
                  <label className="text-form" htmlFor="name">
                    Industry
                  </label>
                  <div>
                    <div className="border-b-[1px] text-white bg-black text-card-bord   bg-transparent text-[20px] border-form-bord">
                      <select
                        name="form_fields[message]"
                        id="form-field-message  "
                        className="bg-transparent w-[100%] "
                        required="required"
                        aria-required="true"
                      >
                        <option className="text-black"  value="Hospitality" selected="selected">
                          Hospitality
                        </option>
                        <option className="text-black" value="Software Development">
                          Software Development
                        </option>
                        <option className="text-black" value="Education">Education</option>
                        <option className="text-black" value="Legal">Legal</option>
                        <option className="text-black" value="Finance">Finance</option>
                        <option className="text-black" value="Retail">Retail</option>
                        <option className="text-black" value="E-Commerce">E-Commerce</option>
                        <option className="text-black" value="Fintech">Fintech</option>
                        <option className="text-black" value="Other">Other</option>
                      </select>
                    </div>
                  </div>
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
      <Footer />
    </>
  );
}

export default BookDemo;
