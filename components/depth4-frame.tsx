import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Depth4FrameType = {
  milestone1?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
};

const Depth4Frame: NextPage<Depth4FrameType> = ({
  milestone1,
  propAlignSelf,
  propWidth,
}) => {
  const depth4Frame10Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const milestone1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className="self-stretch rounded-[5.24px] box-border flex flex-row flex-wrap items-start justify-start py-2 pr-3.5 pl-4 gap-[15.5px] max-w-full z-[1] text-left text-base text-black font-work-sans border-[1px] border-solid border-gainsboro-700"
      style={depth4Frame10Style}
    >
      <div className="w-[404.5px] flex flex-row items-center justify-start py-0 px-0 box-border gap-[16px] max-w-full mq450:flex-wrap">
        <div className="w-[58px] rounded-[9.67px] box-border flex flex-row items-center justify-center py-[14.5px] px-[13px] border-[1.2px] border-solid border-gainsboro-700">
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
        </div>
        <div className="flex-1 flex flex-col items-start justify-center min-w-[221px] max-w-full">
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div
                className="w-[88.3px] h-6 relative leading-[24px] font-medium inline-block"
                style={milestone1Style}
              >
                {milestone1}
              </div>
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[21px] text-sm text-lightslategray">
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[10.9px] pl-0">
              <div className="self-stretch h-[21px] relative leading-[21px] inline-block">
                For example, launching an open-source project or completing a
                report
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[59.5px] flex flex-col items-start justify-start pt-[21px] px-0 pb-0 box-border">
        <div className="self-stretch h-6 relative leading-[24px] inline-block whitespace-nowrap">
          $10,000
        </div>
      </div>
    </div>
  );
};

export default Depth4Frame;
