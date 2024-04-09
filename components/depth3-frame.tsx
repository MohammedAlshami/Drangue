import type { NextPage } from "next";

const Depth3Frame: NextPage = () => {
  return (
    <section className="w-[559px] rounded-xl bg-white box-border flex flex-col items-start justify-start pt-9 pb-[369.5px] pr-[22px] pl-[23px] gap-[11px] max-w-full text-left text-base text-black font-helvetica border-[1px] border-solid border-gainsboro-1000 mq750:pt-[23px] mq750:pb-60 mq750:box-border">
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[12px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[396px] pl-0 gap-[20px] mq750:pr-[198px] mq750:box-border">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start py-0 pr-1.5 pl-0">
                <div className="relative leading-[24px] inline-block min-w-[78px]">
                  Step 1 of 4
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[13px] relative rounded-[24.83px] bg-gainsboro-500">
            <div className="absolute top-[0px] left-[0px] rounded-[24.83px] bg-gainsboro-500 w-full h-full hidden" />
            <div className="absolute top-[0px] left-[0px] rounded-[24.83px] bg-blueviolet-100 w-[91px] h-[13px] z-[1]" />
          </div>
          <div className="relative text-sm leading-[21px] text-lightslategray inline-block min-w-[109px]">
            Basic Information
          </div>
        </div>
      </div>
      <div className="w-[371px] flex flex-row items-start justify-start pt-0 px-0 pb-[29px] box-border max-w-full text-13xl">
        <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.8px] leading-[40px] font-normal font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[24px] mq750:text-7xl mq750:leading-[32px]">
          Setup The smart Contract
        </h1>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[17px] text-lg">
        <div className="self-stretch flex flex-row items-start justify-start pt-4 px-4 pb-2">
          <div className="h-[22.5px] w-[94.7px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
            <div className="self-stretch flex flex-col items-start justify-start py-0 px-0">
              <div className="w-[181px] relative tracking-[-0.27px] leading-[23px] inline-block">
                Setup Smart Contract
              </div>
            </div>
          </div>
        </div>
        <button className="cursor-pointer pt-[13.8px] px-5 pb-[13.7px] bg-white self-stretch rounded-6xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-center border-[3px] border-solid border-gainsboro-700">
          <img
            className="h-[25.5px] w-[25.5px] relative"
            alt=""
            src="/vector.svg"
          />
        </button>
      </div>
      <div className="w-[480px] h-20 hidden max-w-full" />
    </section>
  );
};

export default Depth3Frame;
