import type { NextPage } from "next";
import Depth2Frame5 from "../components/depth2-frame5";
import Depth3Frame2 from "../components/depth3-frame2";

const Depth0Frame: NextPage = () => {
  return (
    <div className="w-full relative bg-whitesmoke-200 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[30px] box-border gap-[73px] leading-[normal] tracking-[normal] mq450:gap-[18px] mq750:gap-[36px]">
      <Depth2Frame5 />
      <main className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <Depth3Frame2 />
      </main>
    </div>
  );
};

export default Depth0Frame;
