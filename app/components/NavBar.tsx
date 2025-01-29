"use client"
import ThemeToggle from "./ui/ThemeToggle";
import Card from "./ui/Card";
import Link from "next/link";
import { Coins } from "lucide-react";

export default function NavBar() {
    return (
        <div className="backdrop-blur-[1px]">
            <Card className="mx-6 my-8 text-[1.5rem] px-6 py-4 flex justify-between items-center rounded-full  ">
                <Link href={'/'}>
                    <div className="font-neuton font-semibold flex gap-2 items-center">
                        <Coins/>
                        Wallet
                    </div>
                </Link>
                <div className="flex gap-6 items-center">
                    <ThemeToggle />

                </div>
            </Card>
        </div>
    )
}
