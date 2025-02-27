'use client';

interface StartStepsProps {
  number: string;
  text: string;
}

export const Steps: React.FC<StartStepsProps> = ({ number, text }) => (
  <div className="flex justify-center items-center flex-row">
    <div className="flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#3BCEAB]">
      <p className="font-bold text-[20px] text-white">{number}</p>
    </div>
    <p className="flex-1 ml-[30px] text-muted-foreground section-description text-left font-normal text-[18px]">
      {text}
    </p>
  </div>
);
