import Lottie from "lottie-react";
import animationData from "@/assets/animations/loading-animation.json"; 

export default function LoadingScreen({ isVisible }: { isVisible: boolean }) {


    return (
      <div
        className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#F6F7FA] transition-opacity duration-700 ${
          isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className=" h-[100px] w-[100px] ">
        <Lottie animationData={animationData} loop={true}/>
        </div>
      </div>
    );
  }
  