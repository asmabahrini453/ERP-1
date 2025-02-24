import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge";
// twMerge function combines the default Tailwind styles with any additional styles passed via className in the props.
export const Avatar=(props : HTMLAttributes<HTMLDivElement>)=>{
    const{className, children, ...otherProps}= props;
    return(
        <div className={twMerge("size-20 rounded-full overflow-hidden border-4 border-blue-500 p-1 bg-white", className)} {...otherProps}>
            {children}
        </div>

    )
}