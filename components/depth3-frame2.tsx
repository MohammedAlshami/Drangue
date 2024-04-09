import type { NextPage } from "next";
import Depth4Frame3 from "./depth4-frame3";

const Depth3Frame2: NextPage = () => {
  return (
    <form className="m-0 w-[543px] rounded-xl bg-white box-border flex flex-col items-start justify-start pt-10 px-3.5 pb-[81.5px] gap-[11.5px] max-w-full border-[1px] border-solid border-gainsboro-1000 mq750:pt-[26px] mq750:pb-[53px] mq750:box-border">
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <div className="w-[79px] relative text-3xl tracking-[-0.33px] leading-[28px] font-helvetica text-black text-center inline-block min-w-[79px] mq450:text-lg mq450:leading-[22px]">
          Pay $50
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[4.5px] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start pt-4 px-4 pb-2 box-border max-w-full">
          <div className="h-[22.5px] w-[216px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-1 pl-0">
              <div className="self-stretch relative text-lg tracking-[-0.27px] leading-[23px] font-helvetica text-black text-left">
                Choose a cryptocurrency
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
        <div className="w-[499.6px] flex flex-row items-start justify-start py-0 pr-4 pl-[16.5px] box-border max-w-full">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[11.9px] max-w-full">
            <button className="cursor-pointer pt-[11px] pb-[13px] pr-4 pl-3.5 bg-[transparent] flex-1 rounded-xl box-border flex flex-row items-start justify-start min-w-[64px] border-[1px] border-solid border-darkslategray-200">
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-col items-start justify-start py-0 pr-1.5 pl-0">
                  <div className="relative text-sm leading-[21px] font-helvetica text-black text-left inline-block min-w-[61px]">
                    Ethereum
                  </div>
                </div>
              </div>
            </button>
            <button className="cursor-pointer pt-[11px] px-[15px] pb-[13px] bg-[transparent] w-[79.9px] rounded-xl box-border flex flex-row items-start justify-start border-[1px] border-solid border-darkslategray-200">
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-col items-start justify-start py-0 pr-[5px] pl-0">
                  <div className="relative text-sm leading-[21px] font-helvetica text-black text-left inline-block min-w-[43px]">
                    Bitcoin
                  </div>
                </div>
              </div>
            </button>
            <button className="cursor-pointer pt-[11px] px-[15px] pb-[13px] bg-[transparent] w-[87.1px] rounded-xl box-border flex flex-row items-start justify-start border-[1px] border-solid border-darkslategray-200">
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-col items-start justify-start py-0 pr-1.5 pl-0">
                  <div className="relative text-sm leading-[21px] font-helvetica text-black text-left inline-block min-w-[49px]">
                    Litecoin
                  </div>
                </div>
              </div>
            </button>
            <button className="cursor-pointer pt-[11px] pb-[13px] pr-4 pl-3.5 bg-[transparent] w-[75.2px] rounded-xl box-border flex flex-row items-start justify-start border-[1px] border-solid border-darkslategray-200">
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-col items-start justify-start py-0 pr-[3.2px] pl-0">
                  <div className="relative text-sm leading-[21px] font-helvetica text-black text-left inline-block min-w-[40px]">
                    Ripple
                  </div>
                </div>
              </div>
            </button>
            <button className="cursor-pointer pt-[11px] px-[15px] pb-[13px] bg-[transparent] w-[77.6px] rounded-xl box-border flex flex-row items-start justify-start border-[1px] border-solid border-darkslategray-200">
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-col items-start justify-start py-0 pr-1.5 pl-0">
                  <div className="relative text-sm leading-[21px] font-helvetica text-black text-left inline-block min-w-[40px] whitespace-nowrap">
                    Stellar
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start pt-4 px-4 pb-2">
              <div className="h-[22.5px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
                <div className="flex flex-col items-start justify-start py-0 pr-[5.7px] pl-0">
                  <div className="relative text-lg tracking-[-0.27px] leading-[23px] font-helvetica text-black text-left">
                    Enter an amount
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-3 px-4 box-border max-w-full">
              <div className="flex-1 flex flex-row items-end justify-start max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start max-w-full">
                  <div className="self-stretch flex flex-row items-center justify-start max-w-full">
                    <div className="flex-1 rounded-xl bg-white box-border overflow-hidden flex flex-row items-start justify-start py-4 pr-[431px] pl-4 max-w-full gap-[0px] [row-gap:20px] border-[1px] border-solid border-gainsboro-1000 mq750:pr-[215px] mq750:box-border">
                      <div className="overflow-hidden flex flex-col items-start justify-start">
                        <div className="flex flex-col items-start justify-start py-0 pr-[1.4px] pl-0">
                          <div className="relative text-base leading-[24px] font-helvetica text-black text-left inline-block min-w-[32px]">
                            0.00
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Depth4Frame3
              walletAddress="Wallet Address"
              depth9Frame0Placeholder="Enter your wallet address"
            />
          </div>
          <Depth4Frame3
            walletAddress="Private Key"
            depth9Frame0Placeholder="Enter your private key"
            propWidth="172.8px"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[17px] pl-4 box-border max-w-full">
        <button className="cursor-pointer [border:none] py-3 px-5 bg-mediumblue flex-1 rounded-xl overflow-hidden flex flex-row items-start justify-center box-border max-w-full hover:bg-blueviolet-200">
          <b className="w-[30px] relative text-base tracking-[0.24px] leading-[24px] inline-block font-work-sans text-white text-center min-w-[30px]">
            Pay
          </b>
        </button>
      </div>
    </form>
  );
};

export default Depth3Frame2;
