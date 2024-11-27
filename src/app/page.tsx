import React from "react";
import Image from "next/image";

export default function IDCard() {
  return (
    <div className="flex flex-col min-h-19 bg-white">
      <div className="flex-grow flex item-center justify-center p-6">
        <div className="bg-slate-200 p-10 rounded-lg shadow-lg max-w-3xl w-full flex item-center justify-center border-4 border-sky-300">
          {/*Background Image*/}
          <div className="absolute inset-50 pt-5">
            <div className="relative w-80">
              <Image
                src="/background.jpg"
                alt="background image"
                width={300}
                height={200}
                objectFit="cover"
                className="opacity-10"
              />
            </div>
          </div>

          {/*Left Section*/}

          <div className="w-2/3 pr-4 pt-16 relative z-10">
            {/*Logo*/}
            <img
              src={"/governorsindhlogo.png"}
              alt="governor sindh logo"
              className="absolute top-[-20px] left-0 w-16 h-18 z-10"
            />
            <p className="mb-2 ">
              <span className="text-sky-500">
                {" "}
                <strong> Name:</strong>
              </span>
              <span className="text-black"> Naila Solanki </span>
            </p>

            <p className="mb-2 ">
              <span className="text-sky-500">
                {" "}
                <strong> Roll No:</strong>
              </span>
              <span className="text-black"> 00415703 </span>
            </p>

            <p className="mb-2 ">
              <span className="text-sky-500">
                {" "}
                <strong> Distance Learning:</strong>
              </span>
              <span className="text-black"> No </span>
            </p>

            <p className="mb-2 ">
              <span className="text-sky-500">
                {" "}
                <strong> City:</strong>
              </span>
              <span className="text-black"> Karachi </span>
            </p>

            <p className="mb-2 ">
              <span className="text-sky-500">
                {" "}
                <strong> Center:</strong>
              </span>
              <span className="text-black"> Governor House Karachi </span>
            </p>

            <p className="mb-2 ">
              <span className="text-sky-500">
                {" "}
                <strong> Campus:</strong>
              </span>
              <span className="text-black"> Main </span>
            </p>

            <p className="mb-2 ">
              <span className="text-sky-500">
                {" "}
                <strong> Day/Time:</strong>
              </span>
              <span className="text-black"> Wednesday-07:00pm to 10:00pm </span>
            </p>

            <p className="mb-2 ">
              <span className="text-sky-500">
                {" "}
                <strong> Batch:</strong>
              </span>
              <span className="text-black"> 1 </span>
            </p>

            {/*Lower Section*/}

            <div className="flex flex-col mt-4">
              <button className="relative w-18 p-1 rounded-lg border border-grey-300 bg-blue-900 text-white items-center justify-center flex">
                <span
                  className="absolute inset-0 bg-slate-500"
                  style={{ width: "50%" }}
                ></span>
                <span className="relative z-10"> Q1 & WMD</span>
              </button>
            </div>
          </div>

          {/*Right Section*/}

          <div className="w-1/4 text-center relative z-10">
            <Image
              src={"/2024-02-13-02-09-13-384.jpg"}
              alt="profile picture"
              width={800}
              height={800}
              className=" mb-6 w-full"
            />
            <p className="pt-10 font-bold text-sky-500 mt-24 text-1xl">
              {"------------------------ "}
              Authorized Signature
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}