import type { NextPage } from "next";
import Depth2Frame6 from "../components/depth2-frame6";
import Depth3Frame3 from "../components/depth3-frame3";

const ProjectLoading: NextPage = () => {
  return (
    <div className="w-full relative bg-whitesmoke-200 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[225px] box-border gap-[73px] leading-[normal] tracking-[normal] mq450:gap-[18px] mq750:gap-[36px]">
      <Depth2Frame6 />
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <Depth3Frame3 />
      </section>
    </div>
  );
};

export default ProjectLoading;
