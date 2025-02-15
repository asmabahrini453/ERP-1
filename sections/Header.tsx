import ArrowRight from "@/assets/icons/arrow-right.svg"
import MenuIcon from "@/assets/icons/menu.svg"
import Logo from "@/assets/images/logosaas.png"
import Image from "next/image";

export const Header = () => {
    return (
    <header className="sticky top-0 backdrop-blur-sm">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
        Optimisez votre flux de travail et augmentez votre productivité
        </p>
         <div className="inline-flex gap-1 items-center">
             <p>Obtenez une démo gratuite</p>
            <ArrowRight className="h-4 w-4 inline-flex justify-center items-center"/>
         </div>
      </div>
    
      <div className="py-5">
        <div className="container">
           <div className="flex items-center justify-between">
              <Image src={Logo} alt="logo" height={40} width={40}/>
              <MenuIcon className="h-5 w-5 md:hidden"/>
              <nav className="hidden md:flex gap-6 items-center text-black/60 ">
                <a href="#" > Acceuil</a>
                <a href="#" > Services</a>
                <a href="#"> Nouveautés</a>
                <a href="#"  > Aide</a>
                <a href="#" > Clients</a>
                <button className="bg-black text-white font-medium inline-flex justify-center py-2 px-4 rounded-lg tracking-tight">se connecter</button>
            </nav>
           </div>
        </div>

      </div>
    </header>
    );
  };
  