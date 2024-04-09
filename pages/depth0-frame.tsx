import type { NextPage } from "next";
import EventTrigger from "../components/event-trigger";
import SecurityManager from "../components/security-manager";
import FrameComponent from "../components/frame-component";

const Depth0Frame: NextPage = () => {
  return (
    <div className="w-full relative bg-whitesmoke-200 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[34.4px] box-border gap-[73px] leading-[normal] tracking-[normal] mq450:gap-[18px] mq750:gap-[36px]">
      <header className="self-stretch bg-white box-border flex flex-row items-center justify-between py-[12.5px] pr-0 pl-10 top-[0] z-[99] sticky max-w-full gap-[0px] [row-gap:20px] text-left text-lg text-gray-500 font-lexend border-b-[1px] border-solid border-gainsboro-100">
        <img
          className="h-[39.9px] w-[41.4px] relative min-h-[40px]"
          loading="lazy"
          alt=""
          src="/group-1671.svg"
        />
        <div className="w-[165.5px] flex flex-row items-center justify-start">
          <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
            <div className="flex flex-col items-start justify-start">
              <div className="w-4 h-4 relative overflow-hidden shrink-0">
                <div className="absolute top-[0px] left-[0px] w-[13.3px] h-[13.3px]" />
              </div>
            </div>
            <div className="h-[22.5px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
              <div className="self-stretch flex flex-col items-start justify-start">
                <b className="w-[98px] relative tracking-[-0.27px] leading-[23px] inline-block whitespace-nowrap box-border pr-5">
                  Drangue
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1034.5px] flex flex-row items-start justify-end py-0 pr-[0.1px] pl-0 box-border max-w-full mq450:gap-[16px]">
          <div className="flex flex-row items-start justify-end py-0 px-6 box-border gap-[32px] max-w-full mq450:gap-[16px]">
            <nav className="m-0 w-[305px] flex flex-row items-center justify-start py-[9.5px] px-0 box-border mq1250:hidden mq450:gap-[18px] mq750:w-[-13.600000000000025px]">
              <nav className="m-0 w-[318.6px] flex flex-row items-center justify-start py-0 px-0 box-border gap-[23px] text-left text-sm text-gray-500 font-lexend mq750:hidden">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-col items-start justify-start py-0 pr-[13.5px] pl-0">
                    <div className="relative leading-[21px] font-medium inline-block min-w-[41px]">
                      Home
                    </div>
                  </div>
                </div>
                <div className="flex-1 relative leading-[21px] font-medium inline-block min-w-[79px]">
                  Campaigns
                </div>
                <div className="relative leading-[21px] font-medium inline-block min-w-[46px]">
                  Create
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="flex flex-col items-start justify-start py-0 pr-[25.1px] pl-0">
                    <div className="relative leading-[21px] font-medium inline-block min-w-[45px]">
                      Profile
                    </div>
                  </div>
                </div>
              </nav>
            </nav>
            <img
              className="h-10 w-10 relative rounded-xl overflow-hidden shrink-0 object-cover min-h-[40px]"
              loading="lazy"
              alt=""
              src="/depth-4-frame-21@2x.png"
            />
          </div>
        </div>
      </header>
      <main className="self-stretch flex flex-row items-start justify-start py-0 pr-[66px] pl-[66.5px] box-border max-w-full mq750:pl-[33px] mq750:pr-[33px] mq750:box-border">
        <section className="flex-1 flex flex-col items-start justify-start py-0 pr-[3px] pl-0 box-border gap-[33px] max-w-full mq750:gap-[16px]">
          <EventTrigger />
          <SecurityManager />
        </section>
      </main>
      <FrameComponent />
    </div>
  );
};

export default Depth0Frame;
