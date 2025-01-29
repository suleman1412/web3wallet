"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import * as bip39 from "bip39";
import Card from "../components/ui/Card";
import { motion, easeInOut } from "framer-motion";

export default function SeedGen() {
    const [mnemonics, setMnemonics] = useState("");
    const router = useRouter(); // Next.js router for navigation

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMnemonics(event.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const generatedMnemonic = mnemonics.trim() ? mnemonics : bip39.generateMnemonic();
        setMnemonics(generatedMnemonic);
        // console.log("Mnemonic:", generatedMnemonic);

        setTimeout(() => {
            router.push("/dashboard");
        }, 200);
    };

    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: easeInOut }}
        >
            <Card className="rounded-xl px-5 md:px-10 py-4 md:py-4 flex flex-col gap-4">
                <h1 className="text-2xl md:text-3xl font-bold">
                    Secret Recovery Phrase
                </h1>
                <h2 className="text-xs font-sans md:text-md">
                    Save these words in a safe place.
                </h2>
                <form 
                    className="flex flex-col md:flex-row gap-2"
                    onSubmit={handleSubmit}
                >
                    <input
                        value={mnemonics}
                        onChange={handleChange}
                        type="password"
                        className="w-full text-xs px-2 tracking-wide py-2 rounded-sm font-sans bg-background border-[1px] md:flex-grow"
                        placeholder="Enter your secret phrase (or leave blank to generate)"
                    />
                    <button  
                        className="text-sm font-sans min-w-fit bg-foreground rounded-sm text-background py-2 px-3 md:flex-shrink"
                        type="submit"
                    >
                        Generate Wallet
                    </button>
                </form>
            </Card>
        </motion.div>
    );
}
