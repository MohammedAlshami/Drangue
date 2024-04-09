import type { NextPage } from "next";
import Depth4Frame from "./depth4-frame";

const FrameComponent2: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[18px] max-w-full text-left text-lg text-black font-work-sans">
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start pt-4 px-4 pb-2">
          <div className="h-[22.5px] w-[94.7px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
            <div className="self-stretch flex flex-col items-start justify-start py-0 px-0">
              <b className="w-[190px] h-[23px] relative tracking-[-0.27px] leading-[22.5px] inline-block">
                Setup Smart Contract
              </b>
            </div>
          </div>
        </div>
        <Depth4Frame milestone1="Milestone 1" />
      </div>
      <Depth4Frame
        milestone1="Milestone 2"
        propAlignSelf="unset"
        propWidth="92px"
      />
      <Depth4Frame
        milestone1="Milestone 2"
        propAlignSelf="unset"
        propWidth="92px"
      />
      <div className="self-stretch h-10 rounded-xl bg-mediumblue flex flex-row items-start justify-center py-[9.5px] px-5 box-border text-sm text-white font-helvetica">
        <div className="self-stretch w-7 relative tracking-[0.21px] leading-[21px] inline-block">
          Edit
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
