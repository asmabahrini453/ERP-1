import Image from "next/image"
import money_receive_icon from "@/assets/icons/money-recive.png"
import trend_up from "@/assets/icons/trend-up.png"
import people from "@/assets/icons/people.png"

const EntrepriseStats = () => {
  return (
    <div className="grid grid-cols-3 gap-12 mb-6 w-full ">
      <div className="bg-[#023E8A] border rounded-[8px] text-[#EBF2FD] p-[12px] shadow-xl">
        <div className="flex justify-between items-center text-sm text-[#EBF2FD]">
          <p>Échéance de l'abonnement</p>
          <Image src={money_receive_icon} alt="Échéance de l'abonnement" width={24} height={24} />
        </div>
        <h4 className="font-bold">31-12-2025</h4>
      </div>

      <div className="bg-[#3BCEAB] border border-[#3BCEAB] rounded-[8px] text-[#EBF2FD] p-[12px] shadow-xl">
        <div className="flex justify-between items-center text-sm">
          <p>Entreprise(s) possédés</p>
          <Image src={trend_up} alt="Entreprise(s) possédés" width={24} height={24} />
        </div>
        <h4 className="font-bold">3</h4>
      </div>

      <div className="bg-[#DDDDDD] border border-[#DDDDDD] rounded-[8px] text-[#383861] p-[12px] shadow-xl">
        <div className="flex justify-between items-center text-sm">
          <p>Entreprise(s) rejointes</p>
          <Image src={people} alt="Entreprise(s) rejointes" width={24} height={24} />
        </div>
        <h4 className="font-bold">Aucun(e)</h4>
      </div>
    </div>
  )
}

export default EntrepriseStats

