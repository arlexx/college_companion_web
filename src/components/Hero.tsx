import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Heroimg, LogoImg } from "../../public";

const Hero = () => {
  return (
    <div className="h-screen">
      <div className="h-screen overflow-hidden relative ">
        <Image
          src={Heroimg}
          style={{ objectFit: "cover" }}
          quality={60}
          fill={true}
          alt="host"
        />

        <div className="absolute top-0  left-0 w-full h-full flex items-center justify-center bg-[#000000]/70 text-white transitionui ">
          <div className="flex flex-col items-center text-center">
            <h1 className="lg:text-[70px] text-[40px] font-semibold">
              Unlock Your College Potential!
            </h1>
            <p className="text-center mx-auto text-[20px] w-[70%]">
              Welcome to Intelligent College Companion! Your ultimate guide to
              navigating college life. Unlock academic success, campus life, and
              personal growth. With ICC, you'll have the tools and resources to
              excel in your studies and make lasting connections. Let us be your
              trusted companion on your journey to success.
            </p>
            <Link
              href="/auth"
              className="bg-[#84d9e6] rounded-md text-black px-4 py-3 mt-10 font-medium "
            >
              GET STARTED
            </Link>
          </div>
        </div>
        <div className="absolute top-0 flex justify-between items-center text-center mx-auto w-[90%] text-white">
          <div className="ml-6 mt-8">
            <Image src={LogoImg} alt="" height={100} width={100} />
          </div>
          <div className="flex space-x-40 mt-8 font-medium text-lg">
            <Link href="/home">Home</Link>
            <Link href="/aboutus">About Us</Link>
            <div>
              <Link
                href="/auth"
                className="bg-[#f3d964] rounded-md text-black py-3 px-4 "
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
