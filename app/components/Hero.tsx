"use client"
import Card from "./ui/Card";
import Link from 'next/link'

export default function Hero () {
    return (
        <Card className="rounded-xl px-10 py-4 md:py-4 flex flex-col items-center gap-4 ">
            <div className="flex flex-col items-center md:flex-row-reverse gap-10">
                <div className="flex-1 md:py-6">
                    <h1 className="text-[1.5rem] md:text-4xl text-center md:text-left tracking-wider">
                        Generate Secure Crypto Keypairs
                    </h1>
                </div>
            </div>
            <Link href={'/seedGen'}>
                <button className="bg-card w-fit px-4 py-1 h-8 rounded-sm font-sans shadowBtn transition-all 
                active:translate-y-[4px]  ease-in-out active:shadow-none relative
                before:content-[''] before:absolute  before:w-[100%] before:h-[100%] before:top-0 before:left-0
                before:shadow-inner before:shadow-ring before:rounded-sm before:opacity-5">
                    Get Started
                </button>
            </Link>
        </Card>
    )
}