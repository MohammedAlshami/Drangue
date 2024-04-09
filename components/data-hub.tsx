import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type DataHubType = {
  /** Style props */
  propHeight?: CSSProperties["height"];
  propPadding?: CSSProperties["padding"];
  propDebugCommit?: CSSProperties["debugCommit"];
  propDebugCommit1?: CSSProperties["debugCommit"];
};

const DataHub: NextPage<DataHubType> = ({
  propHeight,
  propPadding,
  propDebugCommit,
  propDebugCommit1,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      padding: propPadding,
    };
  }, [propHeight, propPadding]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  return (
    <div className="self-stretch rounded-[15.77px] bg-white flex flex-row items-start justify-start py-[10.5px] pr-2 pl-[10.5px] gap-[17.9px] text-center text-2xl text-black font-public-sans border-[1.1px] border-solid border-whitesmoke-300 mq450:flex-wrap">
      <div className="w-[47.3px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
        <div className="self-stretch h-[47.3px] relative">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:linear-gradient(180deg,_#b4ffcf,_#edffdc)] w-full h-full" />
          <h3 className="m-0 absolute top-[5.2px] left-[15.8px] text-inherit tracking-[0.37px] leading-[37px] font-bold font-inherit inline-block min-w-[16px] z-[1] mq450:text-mid mq450:leading-[29px]">
            A
          </h3>
        </div>
      </div>
      <div
        className="h-[51.3px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[14.2px] box-border min-w-[133px] text-mini-7"
        style={frameDivStyle}
      >
        <div
          className="self-stretch flex flex-col items-end justify-start"
          style={frameDiv1Style}
        >
          <div className="self-stretch flex flex-row items-start justify-start">
            <b className="w-[109px] relative tracking-[0.22px] leading-[23px] inline-block min-w-[109px]">
              Oliver Jameson
            </b>
          </div>
          <div className="w-[46px] relative tracking-[0.22px] leading-[23px] font-helvetica text-dimgray-200 inline-block min-w-[46px] mt-[-8.9px]">
            10 min
          </div>
        </div>
        <div
          className="w-[134.6px] flex flex-row items-start justify-start gap-[8px] mt-[-13px] text-dimgray-100 font-helvetica"
          style={frameDiv2Style}
        >
          <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="self-stretch relative tracking-[0.22px] leading-[23px] inline-block min-w-[58px]">
              Donated
            </div>
          </div>
          <b className="h-[27.2px] w-[4.7px] relative tracking-[0.22px] leading-[22.08px] inline-block font-public-sans shrink-0 min-w-[4.7px]">
            .
          </b>
          <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-mediumseagreen-400">
            <div className="self-stretch relative tracking-[0.22px] leading-[23px] inline-block min-w-[56px]">
              0.2 ETH
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataHub;
