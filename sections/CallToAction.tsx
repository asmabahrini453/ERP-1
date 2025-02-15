import ArrowRight from "@/assets/icons/arrow-right.svg";

export const CallToAction = () => {
    return (
        <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24">
            <div className="container">
                <div className="section-heading text-center">
                <h2 className="section-title">Optimisez votre gestion avec ERP Pro</h2>
                    <p className="mt-5 section-description text-muted-foreground">
                        Gérez vos processus métier avec efficacité grâce à une solution ERP complète et intuitive.
                    </p>
                </div>
                <div className="flex  gap-2 justify-center mt-10">
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
