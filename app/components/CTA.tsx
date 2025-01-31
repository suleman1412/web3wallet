"use client"
import Link from "next/link";
import { Button } from "./ui/Button";
import FadeInDiv from "./ui/FadeInDiv";
import GradientCircle from "./ui/GradientCircle";

export default function CTA(){
    return(
        <FadeInDiv amount={0.5} duration={0.4} hidden={{ y:20, opacity: 0 }} visible={{ y:0, opacity: 1}}>
            <div className="mx-6 relative rounded-xl overflow-hidden h-[20vh]">
                <div className="absolute inset-0 z-[-2]">
                    <GradientCircle />
                </div>
                <div className="absolute top-1/2 left-1/2  min-w-[80%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center ">
                    <div className="flex flex-col items-center ">
                        <h1 className="font-sans md:text-3xl text-2xl font-bold text-background ">
                            Ready to Generate Your Keypairs?
                        </h1>
                        <h2 className="font-sans md:text-xs fotn-bold text-accent pb-2 ">
                            Start creating secure keypairs for your crypto wallets in just a few clicks.
                        </h2>
                    </div>
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