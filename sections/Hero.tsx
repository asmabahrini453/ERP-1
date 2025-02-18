import ArrowRight from "@/assets/icons/arrow-right.svg";

export const Hero = () => {
  return (
    <section className="relative container mx-auto px-4 py-16 md:py-24 text-center">
      <div className="relative z-10">
        <div className="tag">
          Version 1.0 est ici
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-5 mb-6  bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
          Gestion des tâches simplifiée  
          <br />
          pour équipes et particuliers
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Gérez vos tâches, optimisez vos flux de travail et boostez votre productivité avec notre ERP tout-en-un.  
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-[30px]">
          <button className="btn hover:bg-[#3BCEAB]">Commencer</button>
          <button className="btn btn-text inline-flex gap-1 items-center">
            <span>En savoir plus</span>
            <ArrowRight className="h-5 w-5 " />
          </button>
        </div>
      </div>
    </section>
  );
};
