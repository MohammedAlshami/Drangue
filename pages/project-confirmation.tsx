import type { NextPage } from "next";
import Depth2Frame3 from "../components/depth2-frame3";
import FrameComponent3 from "../components/frame-component3";
import ConditionTreeStack from "../components/condition-tree-stack";
import Depth4Frame1 from "../components/depth4-frame1";
import FrameComponent2 from "../components/frame-component2";

const ProjectConfirmation: NextPage = () => {
  return (
    <div className="w-full h-[1665px] relative bg-whitesmoke-200 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[1600px] box-border gap-[73px] leading-[normal] tracking-[normal] mq450:gap-[18px] mq750:h-auto mq750:gap-[36px]">
      <Depth2Frame3 />
      <main className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0">
        <section className="w-[568px] rounded-xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border flex flex-col items-start justify-start pt-11 px-[27px] pb-7 gap-[48px] shrink-0 [debug_commit:f6aba90] text-left text-base text-black font-work-sans border-[1px] border-solid border-gainsboro-1000 mq750:gap-[24px] mq1050:pt-5 mq1050:box-border mq1250:pt-[29px] mq1250:pb-5 mq1250:box-border">
          <FrameComponent3 />
          <ConditionTreeStack />
          <div className="self-stretch flex flex-col items-start justify-start gap-[11px] max-w-full">
            <Depth4Frame1
              vector0="/vector--0-31.svg"
              targetAmount="Accepted cryptocurrencies"
              prop="BTC, ETH"
              propMinWidth="138px"
              propWidth="62.9px"
            />
            <div className="self-stretch flex flex-row items-end justify-start py-0 pr-8 pl-0 box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch flex flex-row items-center justify-start py-0 px-0 box-border max-w-full">
                  <div className="w-[512px] rounded-xl bg-white box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-4 pr-12 pl-4 max-w-[107%] gap-[0px] [row-gap:20px] border-[1px] border-solid border-gainsboro-1000 mq750:pr-6 mq750:box-border">
                    <div className="w-[448px] flex flex-col items-start justify-start pt-0 px-0 pb-16 box-border min-h-[112px] max-w-full">
                      <div className="self-stretch flex flex-col items-start justify-start py-0 px-0 box-border max-w-full">
                        <div className="w-[470px] h-12 relative leading-[24px] whitespace-pre-wrap inline-block max-w-[105%] shrink-0">
                          Tell us about your project. Why is it important? Who
                          will benefit?
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent2 />
        </section>
      </main>
    </div>
  );
};

export default ProjectConfirmation;
