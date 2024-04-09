import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Depth4Frame1Type = {
  vector0?: string;
  targetAmount?: string;
  prop?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
};

const Depth4Frame1: NextPage<Depth4Frame1Type> = ({
  vector0,
  targetAmount,
  prop,
  propMinWidth,
  propWidth,
}) => {
  const depth6Frame1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="self-stretch rounded-xl box-border flex flex-row items-start justify-start py-3 px-[15px] max-w-full text-left text-base text-black font-work-sans border-[1px] border-solid border-gainsboro-700">
      <div className="flex-1 flex flex-row flex-wrap items-center justify-start py-0 pr-[302px] pl-0 box-border gap-[16px] max-w-full mq750:pr-[151px] mq750:box-border">
        <div className="w-12 rounded-[9.67px] box-border flex flex-row items-center justify-center py-3 px-[11px] border-[1.2px] border-solid border-gainsboro-700">
          <div className="flex flex-col items-start justify-start">
            <div className="w-6 h-6 relative overflow-hidden shrink-0">
              <img
                className="absolute top-[0px] left-[0px] w-full h-full"
                alt=""
                src={vector0}
              />
              <div className="absolute top-[0px] left-[0px] w-[22.5px] h-[13.5px]" />
            </div>
          </div>
        </div>
        <div
          className="flex-1 flex flex-col items-start justify-center min-w-[74px]"
          style={depth6Frame1Style}
        >
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch h-6 relative leading-[24px] font-medium inline-block">
                {targetAmount}
              </div>
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start text-sm text-lightslategray">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div
                className="w-[54.8px] h-[21px] relative leading-[21px] inline-block whitespace-nowrap"
                style={divStyle}
              >
                {prop}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depth4Frame1;
