import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#00C1D0] to-[#363f98]">
              Hello, I&apos;m{" "}
            </span>
            Oussama
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            I am a Junior Data engineer who is passoniate about processing and
            extracting insights from data
          </p>
          <div>
            <button className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-[#00C1D0] to-[#363f98] hover:bg-slate-200 hover:cursor-pointer font-semibold text-white">
              Hire Me
            </button>
            <button className="px-6 py-3 rounded-full w-full sm:w-fit bg-gradient-to-br from-[#00C1D0] to-[#363f98] text-white hover:bg-slate-800 hover:cursor-pointer font-semibold mt-3">
              <span className="">Download CV</span>
            </button>
          </div>
        </div>
        {/* <div className="flex justify-center text-center w-300 h-300 bg-[#202020] rounded-full">
          <Image
            src="/images/portfolio-pic.png"
            alt="Hero image"
            width={300}
            height={300}
          />
        </div> */}
        <div className="col-span-5 flex justify-center items-center mt-4 lg:mt-0">
          <div className="rounded-full overflow-hidden bg-[#181818] border-black w-[150px] h-[150px] lg:w-[350px] lg:h-[350px]">
            <Image
              src="/images/portfolio-pic1.png"
              alt="Centered Image"
              className="w-full h-full object-cover"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
