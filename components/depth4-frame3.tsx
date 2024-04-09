import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Depth4Frame3Type = {
  walletAddress?: string;
  depth9Frame0Placeholder?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const Depth4Frame3: NextPage<Depth4Frame3Type> = ({
  walletAddress,
  depth9Frame0Placeholder,
  propWidth,
}) => {
  const depth9Frame0Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="self-stretch flex flex-row items-center justify-start py-3 px-4 box-border max-w-full text-left text-base text-black font-work-sans">
      <div className="flex-1 flex flex-row items-end justify-start max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2">
            <div className="self-stretch relative leading-[24px] font-medium">
              {walletAddress}
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start max-w-full">
            <div className="flex-1 rounded-xl bg-white box-border overflow-hidden flex flex-row items-start justify-start py-4 pr-[261px] pl-4 max-w-full gap-[0px] [row-gap:20px] border-[1px] border-solid border-gainsboro-1000 mq750:pr-[130px] mq750:box-border">
              <input
                className="w-[202.5px] [border:none] [outline:none] bg-[transparent] h-6 overflow-hidden flex flex-col items-start justify-start font-helvetica text-base text-black"
                placeholder={depth9Frame0Placeholder}
                type="text"
                style={depth9Frame0Style}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depth4Frame3;
