"use client"
import Lottie from "lottie-react";
import animationData from "@/assets/animations/animation.json"; 
import ArrowRight from "@/assets/icons/arrow-right.svg";
import Typewriter from 'typewriter-effect';

export const CallToAction = () => {
    return (
        <section className="py-8 flex justify-center">
            <div className="container sm:max-w-[450px] md:max-w-[1100px] bg-white shadow-xl rounded-3xl px-4 md:px-6 flex flex-col md:flex-row items-center relative overflow-hidden min-h-[90px] md:min-h-[130px]">
                
                <div className="w-full text-left space-y-3 md:space-y-4 px-4 sm:m-2 mt-8 sm:mt-5 sm:mb-5 md:mt-5">
                <h2 className="section-title md:text-left  ">Optimisez votre gestion,
               <span className="text-[#3BCEAB] section-title md:text-5xl md:text-left">
               <Typewriter
                    options={{
                        strings: [' sans contraintes '],
                        autoStart: true,
                        loop: true,
                    }}
                />
              </span>
              </h2>

                    <p className="section-description md:text-left text-muted-foreground text-sm md:text-lg mt-5">
                        Gérez vos processus métier avec efficacité grâce à une solution ERP <br /> complète et intuitive. 
                        <span className="font-semibold"> Gratuit pour vos premiers utilisateurs.</span>
                    </p>
                    
                    <div className="flex justify-center md:justify-start gap-3 mt-5">
                        <button className="bg-[#3BCEAB] hover:bg-[#023E8A] text-white font-medium px-5 py-2 md:px-6 md:py-3 rounded-lg transition-all">
                            Commencer
                        </button>
                        <button className="flex items-center gap-2 text-[#3BCEAB] font-medium px-5 py-2 md:px-6 md:py-3 border border-[#3BCEAB] rounded-lg hover:border-[#023E8A] hover:text-[#023E8A] transition-all">
                            <span>En savoir plus</span>
                            <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                        </button>
                    </div>
                </div>

                {/* Animation */}
                <div className="hidden sm:hidden md:w-1/2 md:flex md:justify-end relative">
                    <div className="relative w-[300px] md:w-[350px]">
                        <Lottie animationData={animationData} loop={true}/>
                        
                        {/* <Image 
                            src={Logo} 
                            alt="Logo ERP" 
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 md:w-28"
                        />  */}
                    </div>
                </div>
            </div>
        </section>
    );
};
