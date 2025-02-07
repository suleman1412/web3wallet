"use client";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import SecretPhrase from "../components/SecretPhrase";
import WalletGen from "../components/WalletGen";

export default function Dashboard() {
    const [isOpen, setIsOpen] = useState(false);
    const { mnemonics } = useTheme();

    const words = mnemonics?.split(' ') || [];

    return (
        <div className="flex flex-col gap-10">
           <SecretPhrase words={words} isOpen={isOpen} setIsOpen={setIsOpen}/>
           <WalletGen />
        </div>
    );
}