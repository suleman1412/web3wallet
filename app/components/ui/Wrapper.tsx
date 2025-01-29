"use client"
import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef, useState } from "react";


interface FadeInProps{
    children: ReactNode;
    className?: string;
}

const Wrapper:React.FC<FadeInProps> = ({
    children,
    className = '',
}) => {
    const [isVisible, setIsVisible] = useState(false)
    const elementRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } 
            },
            { threshold: 0.1 } 
            );
        if(elementRef.current){
            observer.observe(elementRef.current)
        }

        return () => {
            if(elementRef.current){
                observer.unobserve(elementRef.current)
            }
        };

    } , []);

    return (
        <div
            ref={elementRef}
            className={cn(`transition-all duration-700 ease-in
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-0'}`, className)}>
                {children}
        </div>
    )
}

export default Wrapper;