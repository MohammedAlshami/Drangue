import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Depth4Frame2Type = {
  copyTransactionDetails?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propWidth?: CSSProperties["width"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
};

const Depth4Frame2: NextPage<Depth4Frame2Type> = ({
  copyTransactionDetails,
  propBackgroundColor,
  propWidth,
  propBackgroundColor1,
}) => {
  const depth5Frame0Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const depth6Frame0Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      backgroundColor: propBackgroundColor1,
    };
  }, [propWidth, propBackgroundColor1]);

  return (
    <div className="self-stretch flex flex-row items-start justify-start py-3 px-4 box-border max-w-full">
      <button
        className="cursor-pointer [border:none] py-[9.5px] px-5 bg-gray-200 flex-1 rounded-xl overflow-hidden flex flex-row items-center justify-center box-border max-w-full"
        style={depth5Frame0Style}
      >
        <div
          className="w-[174.2px] bg-gray-200 overflow-hidden shrink-0 flex flex-col items-start justify-start"
          style={depth6Frame0Style}
        >
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-1.5 pl-0">
            <div className="self-stretch relative text-sm tracking-[0.21px] leading-[21px] font-helvetica text-white text-left">
              {copyTransactionDetails}
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Depth4Frame2;
