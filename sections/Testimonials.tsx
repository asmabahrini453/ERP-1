import avatar1 from "@/assets/images/avatar-1.png";
import avatar2 from "@/assets/images/avatar-2.png";
import avatar3 from "@/assets/images/avatar-3.png";
import avatar4 from "@/assets/images/avatar-4.png";
import avatar5 from "@/assets/images/avatar-5.png";
import avatar6 from "@/assets/images/avatar-6.png";
import avatar7 from "@/assets/images/avatar-7.png";
import avatar8 from "@/assets/images/avatar-8.png";
import avatar9 from "@/assets/images/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const testimonials = [
  {
    text: "Depuis que nous utilisons cette plateforme ERP, notre gestion des stocks est beaucoup plus fluide et précise.",
    imageSrc: avatar1.src,
    name: "Amina Ben Youssef",
    username: "@amineby",
  },
  {
    text: "La planification des ressources est devenue un jeu d'enfant. L'automatisation des processus nous fait gagner un temps précieux.",
    imageSrc: avatar2.src,
    name: "Ali Gharbi",
    username: "@sofia.gharbi",
  },
  {
    text: "Grâce aux fonctionnalités analytiques de l'ERP, nous avons optimisé notre prise de décision stratégique.",
    imageSrc: avatar3.src,
    name: "Karim Trabelsi",
    username: "@karim_tr",
  },
  {
    text: "Notre comptabilité est désormais centralisée, et nous avons une visibilité en temps réel sur nos finances.",
    imageSrc: avatar4.src,
    name: "Yasine Kacem",
    username: "@yasminek",
  },
  {
    text: "L'intégration de cette solution ERP nous a permis d'éliminer les erreurs humaines et de mieux coordonner nos équipes.",
    imageSrc: avatar5.src,
    name: "Mouna Jaziri",
    username: "@mehdij",
  },
  {
    text: "Avec cette plateforme, la gestion des ressources humaines est beaucoup plus intuitive et efficace.",
    imageSrc: avatar6.src,
    name: "Hajar Messaoud",
    username: "@hajarm",
  },
  {
    text: "Nous avons réduit nos coûts opérationnels de 30% grâce à la digitalisation complète de nos processus.",
    imageSrc: avatar7.src,
    name: "Oussama Chaabane",
    username: "@oussamac",
  },
  {
    text: "L'interface utilisateur est ergonomique et facile à prendre en main, même pour les non-initiés.",
    imageSrc: avatar8.src,
    name: "Mouna Ferjani",
    username: "@mouna_ferjani",
  },
  {
    text: "La gestion de la relation client s'est nettement améliorée grâce aux outils intégrés de notre ERP.",
    imageSrc: avatar9.src,
    name: "Walid Rekik",
    username: "@walidrek",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: { className?: string; testimonials: typeof testimonials }) => (
  <div className={twMerge(
    "flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]",
    props.className
  )}>
    {props.testimonials.map(({ text, imageSrc, name, username }, index) => (
      <div key={index} className="card">
        <div>{text}</div>
        <div className="flex items-center gap-2 mt-5">
          <Image src={imageSrc} width={40} height={40} alt={name} className="h-10 w-10 rounded-full" />
          <div className="flex flex-col">
            <div className="font-medium tracking-tight leading-5">{name}</div>
            <div className="tracking-tight leading-5">{username}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Témoignages</div>
          </div>
          <h2 className="mt-5 section-title">Ce que disent nos utilisateurs</h2>
          <p className="mt-5 section-description text-muted-foreground">
            De la gestion des stocks à l'automatisation des processus, notre ERP transforme le quotidien des entreprises.
          </p>
        </div>
        <div className="flex justify-center gap-6">
          <TestimonialsColumn testimonials={firstColumn} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:flex" />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:flex" />
        </div>
      </div>
    </section>
  );
};
