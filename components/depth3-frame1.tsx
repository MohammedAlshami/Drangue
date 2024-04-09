import type { NextPage } from "next";
import Depth4Frame2 from "./depth4-frame2";

const Depth3Frame1: NextPage = () => {
  return (
    <div className="w-[540px] rounded-xl bg-white box-border flex flex-col items-start justify-start py-5 pr-3 pl-3.5 max-w-full shrink-0 text-left text-lg text-black font-helvetica border-[1px] border-solid border-gainsboro-1000 mq750:w-[calc(100%_-_40px)]">
      <div className="self-stretch h-[242px] rounded-8xs flex flex-col items-start justify-start">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start py-3 px-4">
          <img
            className="self-stretch flex-1 relative rounded-mid max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/depth-7-frame-0@2x.png"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start pt-5 px-4 pb-2 text-center text-5xl">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-5">
          <h2 className="m-0 w-[202px] relative text-inherit tracking-[-0.6px] leading-[30px] font-normal font-inherit inline-block mq450:text-lgi mq450:leading-[24px]">
            Payment complete
          </h2>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-4 px-4 pb-2">
        <div className="h-[22.5px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
          <div className="flex flex-col items-start justify-start py-0 pr-[4.5px] pl-0">
            <div className="relative tracking-[-0.27px] leading-[23px]">
              Confirmation ID
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start pt-1 px-4 pb-3 text-center text-sm">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-5">
          <div className="w-[263px] relative leading-[21px] inline-block">
            3cd7d0a9-1a21-4e2b-9537-8e6f1a1a0c3b
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-4 px-4 pb-2">
        <div className="h-[22.5px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
          <div className="flex flex-col items-start justify-start py-0 pr-0.5 pl-0">
            <div className="relative tracking-[-0.27px] leading-[23px] inline-block min-w-[108px]">
              Amount paid
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start pt-1 px-4 pb-3 text-center text-sm">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-5">
          <div className="w-9 relative leading-[21px] inline-block min-w-[36px] whitespace-nowrap">
            $ 100
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-4 px-4 pb-2">
        <div className="h-[22.5px] w-[134.8px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-1 pl-0">
            <div className="self-stretch relative tracking-[-0.27px] leading-[23px]">
              Cryptocurrency
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start pt-1 px-4 pb-3 text-center text-sm">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-5">
          <div className="w-[84px] relative leading-[21px] inline-block min-w-[84px]">
            Bitcoin (BTC)
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-4 px-4 pb-2">
        <div className="h-[22.5px] w-[165.9px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-2 pl-0">
            <div className="self-stretch relative tracking-[-0.27px] leading-[23px]">
              Transaction details
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start p-4 text-sm">
        <div className="self-stretch flex flex-row items-start justify-between py-2 px-0 gap-[20px] mq450:flex-wrap">
          <div className="flex flex-row items-start justify-start">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start py-0 pr-px pl-0">
                <div className="relative leading-[21px] inline-block min-w-[30px]">
                  Rate
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-end">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start py-0 pr-[5.5px] pl-0">
                <div className="relative leading-[21px]">
                  1.00 BTC = $ 50,000
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between py-2 px-0 gap-[20px] mq450:flex-wrap">
          <div className="flex flex-row items-start justify-start">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start py-0 pr-[8.7px] pl-0">
                <div className="relative leading-[21px] inline-block min-w-[75px]">
                  Network fee
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-end">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start py-0 pr-[3px] pl-0">
                <div className="relative leading-[21px] inline-block min-w-[75px] whitespace-nowrap">
                  0.0005 BTC
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between py-2 px-0 gap-[20px] mq450:flex-wrap">
          <div className="flex flex-row items-start justify-start">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start py-0 pr-[5.7px] pl-0">
                <div className="relative leading-[21px] inline-block min-w-[91px]">
                  Exchange rate
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-end">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start py-0 pr-[5.5px] pl-0">
                <div className="relative leading-[21px]">
                  1.00 BTC = $ 50,000
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Depth4Frame2 copyTransactionDetails="Copy transaction details" />
      <Depth4Frame2
        copyTransactionDetails="View on blockchain explorer"
        propBackgroundColor="#3b1ae6"
        propWidth="202.4px"
        propBackgroundColor1="#3b1ae6"
      />
    </div>
  );
};

export default Depth3Frame1;
