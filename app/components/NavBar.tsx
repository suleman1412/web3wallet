"use client"
import { WalletCards } from "lucide-react";
import ThemeToggle from "./ui/ThemeToggle";
import Card from "./ui/Card";

export default function NavBar() {
    return (
        <Card className="my-8 text-[1.5rem] px-6 py-4 flex justify-between items-center rounded-full ">
            <div className="font-neuton font-semibold flex gap-2 items-center">
                Wallet
            </div>
            <div className="flex gap-6 items-center">
                <WalletCards className="w-7 h-7"/>
                <ThemeToggle />
            </div>
        </Card>
    )
}
