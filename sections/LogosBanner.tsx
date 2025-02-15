import Logo1 from "@/assets/images/logo-echo.png";
import Logo2 from "@/assets/images/logo-pulse.png";
import Logo3 from "@/assets/images/logo-apex.png";
import Logo4 from "@/assets/images/logo-celestial.png";
import Logo5 from "@/assets/images/logo-acme.png";
import Logo6 from "@/assets/images/logo-quantum.png";
import Image from "next/image";

export const LogosBanner = () => {
  return (
    <div className="py-8 bg-white">
      <div className="container">
        <div className="flex overflow-hidden">
          {/* Apply the mask directly on the flex container */}
          <div className="flex gap-14 flex-none mask-image-gradient">
            <Image src={Logo1} alt="logo1" className="logo-banner-image" />
            <Image src={Logo2} alt="logo2" className="logo-banner-image" />
            <Image src={Logo3} alt="logo3" className="logo-banner-image" />
            <Image src={Logo4} alt="logo4" className="logo-banner-image" />
            <Image src={Logo5} alt="logo5" className="logo-banner-image" />
            <Image src={Logo6} alt="logo6" className="logo-banner-image" />
          </div>
        </div>
      </div>
    </div>
  );
};
