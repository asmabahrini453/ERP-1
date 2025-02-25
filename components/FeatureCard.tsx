import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
export const FeatureCard=(props:{
    title: string;
    description: string;
    children?:React.ReactNode;
    className?:string
})=>{
    const{title,description,children,className}=props;
    return(
        <motion.div   
         whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.3 }} 
        className={twMerge("bg-white border_white/10 shadow-xl p-6 rounded-3xl w-[400px] ",className)}>
            <div className="aspect-video">{children}</div>
            <div>
                <h3 className="text-3xl font-medium mt-6 section-title text-left">{title}</h3>
                <p className="text-muted-foreground mt-2 section-description text-left text-lg">{description}</p>
            </div>
    </motion.div>
    )
}