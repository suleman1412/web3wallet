import Card from "./ui/Card";
import Image from 'next/image';

export default function Hero () {
    return (
        <Card className="rounded-xl px-10 py-4 flex flex-col items-center gap-4 ">
            <div className="md:flex flex-row-reverse">
                <Image src={'/lightbtc.svg'} alt="logo" height={200} width={200}/>
                <h1 className="text-[2rem] md:text-3xl text-center md:text-left ">Generate Keypairs for your Crypto Wallets</h1>
            </div>
            <button className="bg-card w-fit px-4 py-1 h-8 rounded-sm font-sans shadow-[2px_2px_black] transition-all 
            active:translate-y-[4px]  ease-in-out active:shadow-none relative
            before:content-[''] before:absolute  before:w-[100%] before:h-[100%] before:top-0 before:left-0
            before:shadow-inner before:shadow-ring before:rounded-sm before:opacity-5
            ">
                Get Started
            </button>
        </Card>
    )
}