import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent1Type = {
  depth7Frame1?: string;
  depth11Frame0?: string;
  depth11Frame01?: string;
  depth11Frame02?: string;
  depth11Frame03?: string;
  depth11Frame04?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propFlex?: CSSProperties["flex"];
  propMaxHeight?: CSSProperties["maxHeight"];
  propBorder?: CSSProperties["border"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propHeight1?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propOutline?: CSSProperties["outline"];
  propBackgroundImage?: CSSProperties["backgroundImage"];
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  depth7Frame1,
  depth11Frame0,
  depth11Frame01,
  depth11Frame02,
  depth11Frame03,
  depth11Frame04,
  propHeight,
  propFlex,
  propMaxHeight,
  propBorder,
  propBackgroundColor,
  propHeight1,
  propWidth,
  propOutline,
  propBackgroundImage,
}) => {
  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const depth7Frame1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      maxHeight: propMaxHeight,
      border: propBorder,
      backgroundColor: propBackgroundColor,
      height: propHeight1,
      width: propWidth,
      outline: propOutline,
    };
  }, [
    propFlex,
    propMaxHeight,
    propBorder,
    propBackgroundColor,
    propHeight1,
    propWidth,
    propOutline,
  ]);

  const depth11Frame1Style: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div
      className="h-[333.4px] w-[262px] rounded-xl bg-white shadow-[0px_8px_6.8px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start py-5 px-[11px] box-border gap-[15.3px] text-left text-xs-9 text-darkslateblue font-helvetica"
      style={frameDiv3Style}
    >
      <img
        className="self-stretch flex-1 relative rounded-xl max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src={depth7Frame1}
        style={depth7Frame1Style}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <div className="relative leading-[18px] inline-block min-w-[95px]">{`Turkey Earthquick `}</div>
          <button className="cursor-pointer [border:none] py-1 px-[5px] bg-mediumslateblue-100 rounded-8xs flex flex-col items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-200">
            <div className="relative text-4xs leading-[15px] font-helvetica text-white text-left inline-block min-w-[46px]">
              In Progress
            </div>
          </button>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-[122px] pl-0 gap-[9px] text-3xs-4 text-slategray-100">
          <img
            className="h-[13px] w-[13px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/uiwdate.svg"
          />
          <div className="flex flex-col items-start justify-start gap-[1px]">
            <div className="relative leading-[15px] inline-block min-w-[96px]">
              <span>Created:</span>
              <span> Aug 15, 2019</span>
            </div>
            <div className="relative leading-[15px] inline-block min-w-[83px]">
              <span>Ends:</span>
              <span> Feb 10, 2020</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[78.2px] flex flex-row items-start justify-start text-8xs-7 text-lightsteelblue">
        <img
          className="h-[19.4px] w-[19.4px] relative rounded-[9.71px] overflow-hidden shrink-0 object-cover min-h-[19px] [debug_commit:f6aba90]"
          alt=""
          src={depth11Frame0}
        />
        <img
          className="h-[19.4px] w-[19.4px] relative rounded-[9.71px] overflow-hidden shrink-0 object-cover min-h-[19px] [debug_commit:f6aba90] z-[1] ml-[-7.8px]"
          alt=""
          src={depth11Frame01}
        />
        <img
          className="h-[19.4px] w-[19.4px] relative rounded-[9.71px] overflow-hidden shrink-0 object-cover min-h-[19px] [debug_commit:f6aba90] z-[2] ml-[-7.8px]"
          alt=""
          src={depth11Frame02}
        />
        <img
          className="h-[19.4px] w-[19.4px] relative rounded-[9.71px] overflow-hidden shrink-0 object-cover min-h-[19px] [debug_commit:f6aba90] z-[3] ml-[-7.8px]"
          alt=""
          src={depth11Frame03}
        />
        <img
          className="h-[19.4px] w-[19.4px] relative rounded-[9.71px] overflow-hidden shrink-0 object-cover min-h-[19px] [debug_commit:f6aba90] z-[4] ml-[-7.8px]"
          loading="lazy"
          alt=""
          src={depth11Frame04}
        />
        <div
          className="flex-1 rounded-[9.71px] overflow-hidden flex flex-row items-start justify-end py-1.5 px-[1.2px] bg-[url('/depth-11-frame-1@3x.png')] bg-cover bg-no-repeat bg-[top] shrink-0 [debug_commit:f6aba90] z-[5] ml-[-7.8px]"
          style={depth11Frame1Style}
        >
          <div className="relative leading-[7px] inline-block min-w-[11px]">
            23k+
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[1px] text-xs-4 text-slategray-100">
        <div className="self-stretch flex flex-row items-start justify-start">
          <div className="flex-1 relative leading-[15px]">
            $1.5M raised of $2.5M goal
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[7px] text-smi-7 text-slategray-200">
          <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
            <div className="self-stretch rounded-xl bg-gainsboro-500 flex flex-row items-start justify-start py-0 pr-[15px] pl-0">
              <div className="h-1.5 w-[207px] relative rounded-xl bg-gainsboro-500 hidden" />
              <div className="flex-1 rounded-xl bg-blueviolet-100 flex flex-row items-start justify-start py-0 pr-[13px] pl-0 z-[1]">
                <div className="h-1.5 w-[191.3px] relative rounded-xl bg-blueviolet-100 hidden" />
                <div className="h-1.5 flex-1 relative rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-fuchsia z-[2]">
                  <div className="absolute top-[0px] left-[0px] rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-fuchsia w-full h-full hidden z-[2]" />
                  <div className="absolute top-[0px] left-[0px] rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-mediumseagreen-100 w-[154.6px] h-1.5 z-[3]" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative leading-[20px] inline-block min-w-[26px]">
            84%
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
