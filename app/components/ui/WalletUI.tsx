import { Eye, EyeOff, Trash2 } from "lucide-react";
import Card from "./Card";
import { useState } from "react";
import FadeInDiv from "./FadeInDiv";

interface WalletUIProps {
    wallet: {
        publicKey: string;
        secretKey: string;
        path: string;
        index: number;
    };
    index: number;
    onDelete: (index: number) => void;
}

export default function WalletUI({ wallet, index, onDelete }: WalletUIProps) {
    const [secretDisplayed, setSecretDisplayed] = useState(false)
    return (
        <FadeInDiv amount={0.5} duration={0.4} hidden={{ y:-20, opacity: 0 }} visible={{ y:0, opacity: 1}}>

            <Card className="rounded-xl bg-accent font-sans flex flex-col overflow-hidden ">
                <div className="px-4 py-2 ">
                    <div className="flex  justify-between items-center">
                        <h1 className="text-2xl">
                            Wallet {index + 1}
                        </h1>
                        <button
                            className="p-2 rounded-md bg-transparent hover:bg-background/50 text-destructive"
                            onClick={() => onDelete(index)}>
                            <Trash2 width={16} height={16}/>
                        </button>
                    </div>
                </div>
                <Card className="bg-popover  px-4 py-4 rounded-xl flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="text-md">
                            Public Key
                        </div>
                        <div className="text-xs">
                            {wallet.publicKey}
                        </div>                
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="text-md">
                            Private Key
                        </div>
                        <div className="flex justify-between text-xs items-center">
                                { secretDisplayed ? wallet.secretKey : ".".repeat(wallet.secretKey.length)}
                            <button
                                className="p-2 rounded-md bg-transparent hover:bg-accent hover:text-accent-foreground"
                                onClick={() => setSecretDisplayed(p => !p)}>
                                {secretDisplayed ? <EyeOff width={16} height={16}/> : <Eye width={16} height={16}/>}
                            </button>
                        </div>
                    </div>
                </Card>
            </Card>
        </FadeInDiv>
    );
}