import Logo from "@/assets/images/erplogo.png";
import Image from "next/image";
import X from "@/assets/icons/social-x.svg";
import Insta from "@/assets/icons/social-insta.svg";
import Linkedin from "@/assets/icons/social-linkedin.svg";
import Youtube from "@/assets/icons/social-youtube.svg";

export const Footer = () => {
    return (
        <footer className="text-sm text-[#BCBCBC] pt-24 pb-12">
            <div className="container">
                <hr className="w-full mb-6" />
                <div className="flex flex-col items-center md:flex-row justify-between mb-6">
                    <Image 
                        src={Logo} 
                        alt="logo" 
                        height={100} 
                        width={100} 
                    />
                    <nav className="flex flex-col gap-6 md:flex-row justify-center">
                        <div className="flex justify-center items-center gap-9">
                            <div className="relative group flex flex-col items-start ">
                                <a href="#">Acceuil</a>
                                <div className="flex flex-col items-start text-[#023E8A] ">
                                    <p className="hover:text-[#3BCEAB] cursor-pointer">Produit</p>
                                    <p className="hover:text-[#3BCEAB] cursor-pointer">Composant</p>
                                    <p className="hover:text-[#3BCEAB] cursor-pointer">Tarifs</p>
                                    <p className="hover:text-[#3BCEAB] cursor-pointer">Tableau de bord</p>
                                    <p className="hover:text-[#3BCEAB] cursor-pointer">Feature requests</p>
                                    <p className="hover:text-[#3BCEAB] cursor-pointer">React authentication</p>
                                </div>
                            </div>
                            <div className="relative group flex flex-col  items-start">
                                <a href="#">Services</a>
                                <div className="flex flex-col items-start text-[#023E8A] ">
                                    <p className="hover:text-[#3BCEAB] cursor-pointer">Product</p>
                                    <p className="hover:text-[#3BCEAB] cursor-pointer">Components</p>
                                    <p className="hover:text-[#3BCEAB] cursor-pointer">Pricing</p>
                                    <p className="hover:text-[#3BCEAB] cursor-pointer">Dashboard</p>
                                    <p className="hover:text-[#3BCEAB] cursor-pointer">Feature requests</p>
                                    <p className="hover:text-[#3BCEAB] cursor-pointer">React authentication</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center gap-9">
                            <div className="relative group flex flex-col  items-start">
                                <a href="#">Tarification</a>
                                <div className="flex flex-col  items-start text-[#023E8A] ">
                                    <p className="hover:text-[#3BCEAB] cursor-pointer ">Product</p>
                                    <p className="hover:text-[#3BCEAB] cursor-pointer">Components</p>
                                    <p className="hover:text-[#3BCEAB] cursor-pointer">Pricing</p>
                                    <p className="hover:text-[#3BCEAB] cursor-pointer">Dashboard</p>
                                    <p className="hover:text-[#3BCEAB] cursor-pointer">Feature requests</p>
                                    <p className="hover:text-[#3BCEAB] cursor-pointer">React authentication</p>
                                </div>
                            </div>
                            <div className="relative group flex flex-col  items-start">
                                <a href="#">Aide</a>
                                <div className="flex flex-col  items-start text-[#023E8A] ">
                                    <p className="hover:text-[#3BCEAB] cursor-pointer">Product</p>
                                    <p className="hover:text-[#3BCEAB] cursor-pointer">Components</p>
                                    <p className="hover:text-[#3BCEAB] cursor-pointer">Pricing</p>
                                    <p className="hover:text-[#3BCEAB] cursor-pointer">Dashboard</p>
                                    <p className="hover:text-[#3BCEAB] cursor-pointer">Feature requests</p>
                                    <p className="hover:text-[#3BCEAB] cursor-pointer">React authentication</p>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

                <hr className="w-full mt-6" />

                <div className="flex flex-col items-center md:flex-row justify-between mt-6 ">
                    <p className="text-center">
                        &copy; 2025, Tous droits réservés à DevPro Solutions.
                    </p>
                    <div className="flex justify-center gap-6 sm:mt-2 ">
                        <X className="text-[#3BCEAB] hover:text-[#023E8A] cursor-pointer" />
                        <Insta className="text-[#3BCEAB] hover:text-[#023E8A] cursor-pointer" />
                        <Linkedin className="text-[#3BCEAB] hover:text-[#023E8A] cursor-pointer" />
                        <Youtube className="text-[#3BCEAB] hover:text-[#023E8A] cursor-pointer" />
                    </div>
                </div>
            </div>
        </footer>
    );
};
