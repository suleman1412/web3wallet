"use client"
import Link from "next/link";
import { Button } from "./ui/Button";
import FadeInDiv from "./ui/FadeInDiv";
import GradientCircle from "./ui/GradientCircle";

export default function CTA(){
    return(
        <FadeInDiv amount={0.5} duration={0.4} hidden={{ y:20, opacity: 0 }} visible={{ y:0, opacity: 1}}>
            <div className="mx-6 relative rounded-xl overflow-hidden  h-[20vh]">
                <div className="absolute inset-0 z-[-2]">
                    <GradientCircle />
                </div>
                <div className="absolute top-1/2 left-1/2 min-w-[80%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-5">
                    <h1 className="font-sans text-3xl font-bold text-background ">
                    Ready to Generate Your Keypairs?
                    </h1>
                    <Link href={'/SeedGen'}>
                        <Button variant={"outline"} className="font-sans">
                            Get Started
                        </Button>
                    
                    </Link>
                </div>
            </div>
        </FadeInDiv>
    )
}