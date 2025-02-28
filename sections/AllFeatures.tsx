import { Workflow } from "@/sections/Workflow"; 
import { Kanban } from "@/sections/Kanban";
import {Taskflow} from "@/sections/Taskflow";
import { Calendar } from "./Calendar";

export const AllFeatures = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div 
                className="lg:absolute lg:inset-0 lg:bg-cover lg:z-0  lg:top-10" 
                style={{ 
                    backgroundImage: "url('/blurred-shape1.png')",
                    backgroundPosition: "center top",
                    backgroundSize: "80%",
                    transform: "translateY(-5%)"
                }}
            ></div>

            <div className="text-center relative z-10">
                <div className="section-heading mb-12">
                    <h2 className="section-title font-bold">Fonctionnalités</h2>
                    <p className="section-description mt-5 text-muted-foreground">
                        Là où la puissance rencontre la simplicité
                    </p>
                </div>

                <div className="mx-auto flex flex-col items-center justify-center gap-8 max-w-full">
                    <Workflow />
                    <Taskflow />
                    <Kanban />
                    <Calendar/>
                </div>
            </div>
        </section>
    );
};
