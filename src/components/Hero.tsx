import React from 'react';
import { ProfileBorder, DecorativeLines, PlusIcon } from './DecorativeElements';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="flex items-start justify-between relative mt-[265px] px-[81px] py-0 max-md:flex-col max-md:items-center max-md:text-center max-md:px-10 max-md:py-0 max-sm:mt-[100px] max-sm:px-5 max-sm:py-0">
      <div className="flex-1 max-w-[606px]">
        <h1 className="text-[#03045E] text-[28px] font-medium mb-[67px] max-sm:text-2xl max-sm:mb-[30px]">
          Hello, I'm G TARUN KUMAR,
        </h1>
        <h2 className="text-[#03045E] text-[100px] font-extrabold leading-[116px] mb-[147px] max-md:text-[80px] max-md:leading-[90px] max-sm:text-6xl max-sm:leading-[70px] max-sm:mb-[30px]">
          AI Full Stack Engineer
        </h2>
        <p className="text-[#03045E] text-[28px] font-medium max-sm:text-2xl">
          based in Hyderabad.
        </p>
      </div>
      
      <div className="relative ml-10 mt-[7px] max-md:-order-1 max-md:mt-10">
        <div className="relative w-[493px] h-[493px] overflow-hidden rounded-[50%] max-sm:w-[300px] max-sm:h-[300px]">
          <img
            src="https://placehold.co/493x532/4a90e2/4a90e2"
            alt="Profile image of Tarun Kumar"
            className="w-[493px] h-[532px] object-cover absolute left-0 top-0 max-sm:w-[300px] max-sm:h-[324px]"
          />
        </div>
        
        <ProfileBorder className="top-4 left-[-13px] w-[493px] h-[493px] max-sm:w-[300px] max-sm:h-[300px] max-sm:left-0 max-sm:top-0" />
        
        <DecorativeLines className="left-[-13px] top-[239px] max-sm:hidden" />
        
        <div className="absolute top-[-135px] right-[-194px] w-[50px] h-14 max-sm:hidden">
          <PlusIcon className="absolute" />
          <PlusIcon className="absolute left-[26px] top-8" />
          <PlusIcon className="absolute left-[26px] top-0" />
        </div>
      </div>
    </section>
  );
};
