import type { NextPage } from "next";

const EventTrigger: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[43px] shrink-0 [debug_commit:f6aba90] max-w-full text-left text-lgi-7 text-black font-plus-jakarta-sans mq750:gap-[21px]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[23px] max-w-full">
        <div className="self-stretch rounded-[29.59px] bg-white shadow-[0px_4.9px_4.93px_rgba(0,_0,_0,_0.25)] box-border flex flex-row flex-wrap items-center justify-start py-[14.8px] pr-[17px] pl-[19.7px] gap-[14.8px] max-w-full border-[1.2px] border-solid border-blueviolet-100">
          <div className="flex flex-col items-start justify-start">
            <div className="w-[29.6px] h-[29.6px] relative overflow-hidden shrink-0">
              <img
                className="absolute top-[0px] left-[0px] w-full h-full"
                loading="lazy"
                alt=""
                src="/vector--0.svg"
              />
              <div className="absolute top-[0px] left-[0px] w-[24.1px] h-[24.1px]" />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border min-w-[689px] max-w-full mq1050:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="relative leading-[30px]">Search Projects</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[14px] max-w-full text-base-5 text-white mq750:flex-wrap">
          <button className="cursor-pointer [border:none] pt-[6.4px] pb-[6.5px] pr-[9px] pl-[19px] bg-blueviolet-100 rounded-[18.82px] flex flex-row items-center justify-center gap-[9.4px]">
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0">
              <div className="flex flex-col items-start justify-start py-0 px-0">
                <b className="relative text-base-5 leading-[25px] inline-block font-plus-jakarta-sans text-white text-left min-w-[21px] whitespace-nowrap">
                  All
                </b>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="w-[23.5px] h-[23.5px] relative overflow-hidden shrink-0">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full"
                  alt=""
                  src="/vector--0-1.svg"
                />
                <div className="absolute top-[0px] left-[0px] w-[16.2px] h-[8.8px]" />
              </div>
            </div>
          </button>
          <div className="rounded-[18.82px] bg-blueviolet-100 flex flex-row items-center justify-center pt-[6.4px] pb-[6.5px] pr-[9px] pl-[19px] gap-[9.4px]">
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0">
              <div className="flex flex-col items-start justify-start py-0 px-0">
                <b className="relative leading-[25px] inline-block min-w-[89px] whitespace-nowrap">
                  In Progress
                </b>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="w-[23.5px] h-[23.5px] relative overflow-hidden shrink-0">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full"
                  alt=""
                  src="/vector--0-1.svg"
                />
                <div className="absolute top-[0px] left-[0px] w-[16.2px] h-[8.8px]" />
              </div>
            </div>
          </div>
          <div className="rounded-[18.82px] bg-blueviolet-100 flex flex-row items-center justify-center pt-[6.4px] pb-[6.5px] pr-[9px] pl-[19px] gap-[9.4px]">
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0">
              <div className="flex flex-col items-start justify-start py-0 px-0">
                <b className="relative leading-[25px] inline-block min-w-[68px] whitespace-nowrap">
                  Finished
                </b>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="w-[23.5px] h-[23.5px] relative overflow-hidden shrink-0">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full"
                  alt=""
                  src="/vector--0-1.svg"
                />
                <div className="absolute top-[0px] left-[0px] w-[16.2px] h-[8.8px]" />
              </div>
            </div>
          </div>
          <div className="rounded-[18.82px] bg-blueviolet-100 flex flex-row items-center justify-center pt-[6.4px] pb-[6.5px] pr-[9.4px] pl-[18.8px] gap-[9.4px]">
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0">
              <div className="flex flex-col items-start justify-start py-0 px-0">
                <b className="relative leading-[25px] inline-block min-w-[63px] whitespace-nowrap">
                  On hold
                </b>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="w-[23.5px] h-[23.5px] relative overflow-hidden shrink-0">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full"
                  alt=""
                  src="/vector--0-1.svg"
                />
                <div className="absolute top-[0px] left-[0px] w-[16.2px] h-[8.8px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="m-0 relative text-3xl tracking-[-0.8px] leading-[40px] font-normal font-helvetica text-gray-400 mq450:text-lg mq450:leading-[32px]">
        We Have 20 Projects
      </h3>
    </div>
  );
};

export default EventTrigger;
