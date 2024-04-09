import type { NextPage } from "next";
import Depth2Frame4 from "../components/depth2-frame4";
import Depth3Frame1 from "../components/depth3-frame1";

const PaymentConfirmation: NextPage = () => {
  return (
    <div className="w-full relative bg-whitesmoke-200 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[206.5px] box-border leading-[normal] tracking-[normal]">
      <main className="self-stretch h-[882.5px] flex flex-col items-center justify-start pt-0 px-0 pb-0 box-border gap-[73px] max-w-full mq750:gap-[36px] mq450:h-auto mq450:gap-[18px]">
        <Depth2Frame4 />
        <Depth3Frame1 />
      </main>
    </div>
  );
};

export default PaymentConfirmation;
