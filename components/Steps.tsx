'use client';

interface StartStepsProps {
  number: string;
  text: string;
}

export const Steps: React.FC<StartStepsProps> = ({ number, text }) => (
  <div className="flex items-center flex-row">
    <div className="relative flex justify-center items-center w-16 h-16">
      <div className="absolute animate-[breath_7s_ease-in-out_3s_infinite_both]">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/5 before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
          <p className="font-bold text-[20px]   text-[#3BCEAB]">{number}</p>
        </div>
      </div>
    </div>
    <p className="flex-1 ml-6 text-muted-foreground section-description text-left font-normal text-[18px]">
      {text}
    </p>
  </div>
);
