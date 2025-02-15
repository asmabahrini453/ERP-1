import ArrowRight from "@/assets/icons/arrow-right.svg";

export const Hero = () => {
  return (
    <section className="relative container mx-auto px-4 py-16 md:py-24 text-center">
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Gestion des tâches simplifiée  
          <br />
          pour équipes et particuliers
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Gérez vos tâches, optimisez vos flux de travail et boostez votre productivité avec notre ERP tout-en-un.  
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-[30px]">
          <button className="btn">Commencer</button>
          <button className="btn btn-text inline-flex gap-1 items-center">
            <span>En savoir plus</span>
            <ArrowRight className="h-5 w-5 " />
          </button>
        </div>
      </div>
    </section>
  );
};
