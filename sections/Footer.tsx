import Logo from "@/assets/images/erplogo.png"
import Image from "next/image"
import X from "@/assets/icons/social-x.svg"
import Insta from "@/assets/icons/social-insta.svg"
import Linkedin from "@/assets/icons/social-linkedin.svg"
import Youtube from "@/assets/icons/social-youtube.svg"

export const Footer = () => {
    return (
        <footer className=" bg-[#023E8A] text-sm text-[#BCBCBC] py-10 text-center">
            <div className="container">
                <div className="relative w-full">
                    <div className="inline-flex relative "></div>
                    <div className="relative flex justify-center items-center">
                        <div className="absolute w-[60px] h-[60px] bg-white blur-xl opacity-70 rounded-lg " />
                        <Image 
                            src={Logo} 
                            alt="logo" 
                            height={60} 
                            width={60} 
                            className="relative"
                        />
                        </div>
                </div>
            </div>
            <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center" >
                <a href="#">Acceuil</a>
                <a href="#">Services</a>
                <a href="#">Nouveautés</a>
                <a href="#">Tarification</a>
                <a href="#">Aide</a>
                <a href="#">Clients</a>
            </nav>
            <div className="flex justify-center gap-6 mt-6">
                <X />
                <Insta />
                <Linkedin />
                <Youtube />
            </div>
            <p className=" mt-6">&copy; 2025, Tous droits réservés à DevPro Solutions.</p>
        </footer>
    )
}
