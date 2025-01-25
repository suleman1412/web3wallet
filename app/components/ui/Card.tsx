import { ReactNode } from "react";
import { cn } from "@/lib/utils";


interface CardProps {
    children: ReactNode;
    className?: string; 
}

const Card: React.FC<CardProps> = ({ children, className }) => {
    const baseStyles = "mx-6 bg-background border-[1px] shadow-sm shadow-ring"

    return (
        <div className={cn(baseStyles, className)}>
            {children}
        </div>
    )
}

export default Card