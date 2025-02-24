import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

export const Key=(props:HTMLAttributes<HTMLDivElement>)=>{
    const{className, children, ...otherProps}= props;

    return (
        <div className={twMerge("size-14 bg-[#747487] inline-flex justify-center items-center rounded-2xl text-xl text-white", className)} {...otherProps}>
            {children}
        </div>
    )
}