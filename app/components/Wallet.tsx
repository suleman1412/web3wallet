"use client"
import { useTheme } from "../context/ThemeContext";
import { Button } from "./ui/Button";
import { mnemonicToSeedSync } from "bip39";
import { CryptoOption } from "./WalletGen";
import nacl from 'tweetnacl';
import { derivePath } from 'ed25519-hd-key'
import { Keypair } from '@solana/web3.js'
import * as ethers from 'ethers';
import { useState } from "react";
import WalletUI from "./ui/WalletUI";


interface WalletCoinProps {
    option: CryptoOption;
}

interface WalletData {
    publicKey: string;
    secretKey: string;
    path: string;
    index: number;
}

interface WalletState {
    SOL: WalletData[];
    ETH: WalletData[];
}

const Wallet: React.FC<WalletCoinProps> = ({ option }) => {
    const { mnemonics } = useTheme();

    const seedPhrase = mnemonicToSeedSync(mnemonics || '')
    
    const [walletState, setWalletState] = useState<WalletState>({
        SOL: [],
        ETH: [],
    });

    const generateWallet = (index: number): WalletData => {
        const path = `m/44'/${option.path}'/${index}'`
  
        switch (option.name) {
            case "SOL":
                const derivedSeed = derivePath(path, seedPhrase.toString('hex')).key
                const keypair = Keypair.fromSecretKey(nacl.sign.keyPair.fromSeed(derivedSeed).secretKey)
                return {
                    publicKey: keypair.publicKey.toBase58(),
                    secretKey: Buffer.from(keypair.secretKey).toString('hex'),
                    path,
                    index
                }
    
            case "ETH":
                const hdNode = ethers.HDNodeWallet.fromSeed(seedPhrase);
                const ethWallet = hdNode.derivePath(`m/44'/60'/${index}'/0/0`);
                return {
                    publicKey: ethWallet.address,
                    secretKey: ethWallet.privateKey,
                    path: `m/44'/60'/${index}'/0/0`,
                    index
                }
            }
        }
        
    const handleAddWallet = () => {
        const currentWallets = walletState[option.name];
        const newWallet = generateWallet(currentWallets.length);
        
        setWalletState(prev => ({
            ...prev,
            [option.name]: [...prev[option.name], newWallet]
        }));
    }

    const handleDeleteWallet = (indexToDelete: number) => {
        setWalletState(prev => ({
            ...prev,
            [option.name]: prev[option.name].filter((_, index) => index !== indexToDelete)
        }));
    }

    const handleClearAll = () => {
        setWalletState(prev => ({
            ...prev,
            [option.name]: []
        }));
    }

    const currentWallets = walletState[option.name];

    return (
        <div className="space-y-4 mx-6 w-full">
            <div className="flex justify-between">
                <h1 className="text-4xl font-sans">{option.label} Wallet</h1>
                <div className="flex gap-2">
                    <Button
                        variant={"default"}
                        className="font-normal"
                        onClick={handleAddWallet}
                    >
                        Add Wallet
                    </Button>
                    <Button
                        variant={"destructive"}
                        className="font-normal"
                        onClick={handleClearAll}
                    >
                        Clear All
                    </Button>
                </div>
            </div>

            <div className="space-y-4">
                {currentWallets.map((wallet, index) => (
                    <WalletUI
                        key={`${option.name}-${index}`}
                        wallet={wallet}  
                        index={index}
                        onDelete={handleDeleteWallet}
                    />
                ))}
            </div>
        </div>
    );
};

export default Wallet;