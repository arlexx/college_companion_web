import React from "react";
import { Analytics1, Analytics2 } from "../../../../public";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-5">
      <div>
        <Image src={Analytics1} width={600} height={400} alt="/" />
      </div>
      <div>
        <Image src={Analytics2} width={600} height={300} alt="/" />
      </div>
    </div>
  );
};

export default page;
