import type { NextPage } from "next";

const Depth3Frame3: NextPage = () => {
  return (
    <div className="w-[538px] rounded-xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border flex flex-col items-start justify-start pt-9 pb-[89px] pr-[26px] pl-[30px] gap-[14px] max-w-full text-left text-base text-black font-helvetica border-[1px] border-solid border-gainsboro-1000 mq750:pt-[23px] mq750:pb-[58px] mq750:box-border">
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[27px] box-border gap-[12px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[396px] pl-0 gap-[20px] mq750:pr-[198px] mq750:box-border">
          <div className="w-[84.3px] flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start py-0 px-0">
              <div className="w-[198px] relative leading-[24px] inline-block">
                Project setup is underway
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[13px] relative rounded-[24.83px] bg-gainsboro-500">
          <div className="absolute top-[0px] left-[0px] rounded-[24.83px] bg-gainsboro-500 w-full h-full hidden" />
          <div className="absolute top-[0px] left-[0px] rounded-[24.83px] bg-blueviolet-100 w-[91px] h-[13px] z-[1]" />
        </div>
        <div className="relative text-sm leading-[21px] text-lightslategray inline-block max-w-full">
          We're creating your project so you can start raising money for your
          charity.
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[3px] pl-0">
        <div className="h-[190px] w-[183px] relative">
          <img
            className="absolute top-[7px] left-[0px] w-[183px] h-[183px] object-cover"
            alt=""
            src="/image-67@2x.png"
          />
          <img
            className="absolute top-[0px] left-[36.5px] w-6 h-6 overflow-hidden z-[1]"
            loading="lazy"
            alt=""
            src="/mingcuteloadingfill.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-16 pl-[60px] box-border max-w-full text-center text-gray-800 mq750:pl-[30px] mq750:pr-8 mq750:box-border">
        <div className="flex-1 relative leading-[24px] inline-block max-w-full">
          This might take a few minutes. You can also check the status of your
          project in your dashboard.
        </div>
      </div>
    </div>
  );
};

export default Depth3Frame3;
