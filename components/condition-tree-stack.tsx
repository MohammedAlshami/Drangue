import type { NextPage } from "next";
import ComparatorStackTree from "./comparator-stack-tree";
import Depth4Frame1 from "./depth4-frame1";

const ConditionTreeStack: NextPage = () => {
  return (
    <div className="self-stretch h-[504.5px] flex flex-col items-start justify-start pt-0 px-0 pb-[29px] box-border gap-[11px] max-w-full text-left text-base text-black font-work-sans mq750:h-auto">
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[7px] box-border max-w-full shrink-0 text-lg">
        <div className="self-stretch flex flex-row items-start justify-start pt-4 px-4 pb-2">
          <div className="h-[22.5px] w-[94.7px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
            <div className="self-stretch flex flex-col items-start justify-start py-0 px-0">
              <b className="relative tracking-[-0.27px] leading-[23px] whitespace-nowrap">
                Setup Smart Contract
              </b>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-[5.24px] box-border flex flex-row flex-wrap items-start justify-start py-2 pr-3.5 pl-4 gap-[15.5px] max-w-full text-base border-[1px] border-solid border-gainsboro-700">
          <div className="w-[404.5px] flex flex-row items-center justify-start py-0 px-0 box-border gap-[16px] max-w-full mq450:flex-wrap">
            <button className="cursor-pointer py-[14.5px] px-[13px] bg-[transparent] w-[58px] rounded-[9.67px] box-border flex flex-row items-center justify-center border-[1.2px] border-solid border-gainsboro-700">
              <div className="flex flex-col items-start justify-start py-0 pr-px pl-0">
                <div className="w-[29px] h-[29px] relative overflow-hidden shrink-0">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full"
                    alt=""
                    src="/vector--0-41.svg"
                  />
                  <div className="absolute top-[0px] left-[0px] w-[23.6px] h-[23.6px]" />
                </div>
              </div>
            </button>
            <div className="flex-1 flex flex-col items-start justify-center min-w-[221px] max-w-full">
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="relative leading-[24px] font-medium inline-block min-w-[88.3px]">
                    Milestone 1
                  </div>
                </div>
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[21px] text-sm text-lightslategray">
                <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[10.9px] pl-0">
                  <div className="self-stretch relative leading-[21px]">
                    For example, launching an open-source project or completing
                    a report
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[21px] px-0 pb-0">
            <div className="relative leading-[24px] inline-block min-w-[59.5px] whitespace-nowrap">
              $10,000
            </div>
          </div>
        </div>
      </div>
      <ComparatorStackTree />
      <ComparatorStackTree />
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <button className="cursor-pointer [border:none] py-[9.5px] px-5 bg-mediumblue self-stretch rounded-xl flex flex-row items-start justify-center hover:bg-blueviolet-200">
          <div className="relative text-sm tracking-[0.21px] leading-[21px] font-helvetica text-white text-left inline-block min-w-[28px]">
            Edit
          </div>
        </button>
        <div className="self-stretch rounded-xl box-border flex flex-row items-start justify-start py-3 px-[15px] max-w-full z-[1] border-[1px] border-solid border-gainsboro-700">
          <div className="flex-1 flex flex-row items-center justify-center py-0 pr-[280px] pl-0 box-border gap-[16px] max-w-full mq750:flex-wrap mq750:pr-[140px] mq750:box-border">
            <button className="cursor-pointer py-3 px-[11px] bg-[transparent] w-12 rounded-[9.67px] box-border flex flex-row items-center justify-center border-[1.2px] border-solid border-gainsboro-700">
              <div className="flex flex-col items-start justify-start">
                <div className="w-6 h-6 relative overflow-hidden shrink-0">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full"
                    alt=""
                    src="/vector--0-12.svg"
                  />
                  <div className="absolute top-[0px] left-[0px] w-[16.5px] h-[21px]" />
                </div>
              </div>
            </button>
            <div className="flex flex-col items-start justify-center">
              <div className="overflow-hidden flex flex-col items-start justify-start">
                <div className="flex flex-col items-start justify-start py-0 pr-[32.2px] pl-0">
                  <div className="relative leading-[24px] font-medium inline-block min-w-[104.2px]">
                    Project name
                  </div>
                </div>
              </div>
              <div className="overflow-hidden flex flex-col items-start justify-start text-sm text-lightslategray">
                <div className="flex flex-col items-start justify-start">
                  <div className="relative leading-[21px]">
                    Clean Water Project
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Depth4Frame1
        vector0="/vector--0-21.svg"
        targetAmount="Target amount"
        prop="$50,000"
      />
    </div>
  );
};

export default ConditionTreeStack;
