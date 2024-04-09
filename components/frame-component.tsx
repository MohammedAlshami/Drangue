import type { NextPage } from "next";

const FrameComponent: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center max-w-full text-left text-sm text-gray-400 font-plus-jakarta-sans">
      <div className="w-[960px] flex flex-row items-center justify-center py-4 px-5 box-border max-w-full [row-gap:20px] mq450:flex-wrap mq450:justify-start">
        <div className="flex flex-row items-center justify-center p-[11px]">
          <div className="flex flex-col items-start justify-start">
            <div className="w-[18px] h-[18px] relative overflow-hidden shrink-0">
              <img
                className="absolute top-[0px] left-[0px] w-full h-full"
                loading="lazy"
                alt=""
                src="/vector--0-5.svg"
              />
              <div className="absolute top-[0px] left-[0px] w-[6.8px] h-[12.4px]" />
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-mediumslateblue-100 flex flex-row items-center justify-center py-[9.5px] px-[17px] text-white">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start py-0 px-0">
              <b className="relative tracking-[0.21px] leading-[21px] inline-block min-w-[6px]">
                1
              </b>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center py-[9.5px] px-[15.8px]">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[21px] inline-block min-w-[8.4px] whitespace-nowrap">
                2
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center py-[9.5px] pr-4 pl-[15px]">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[21px] inline-block min-w-[9px]">
                3
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center p-[11px]">
          <div className="flex flex-col items-start justify-start">
            <div className="w-[18px] h-[18px] relative overflow-hidden shrink-0">
              <img
                className="absolute top-[0px] left-[0px] w-full h-full"
                loading="lazy"
                alt=""
                src="/vector--0-6.svg"
              />
              <div className="absolute top-[0px] left-[0px] w-[6.8px] h-[12.4px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
