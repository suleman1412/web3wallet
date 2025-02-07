import { useState } from "react";
import { Eclipse, Gem } from "lucide-react";
import Wallet from "./Wallet";
import { Tabs, TabsList, TabsTrigger } from "@/app/components/ui/tabs";

export const cryptoOptions = [
  {
    name: "ETH",
    icon: <Gem className="mr-2 h-4 w-4" />,
    label: "Ethereum",
    path: 60, 
  },
  {
    name: "SOL",
    icon: <Eclipse className="mr-2 h-4 w-4" />,
    label: "Solana",
    path: 501,
  },
] as const;

export type CryptoOption = (typeof cryptoOptions)[number]; 

function WalletGen() {
  const [selectedCrypto, setSelectedCrypto] = useState<string>("SOL");

  const handleValueChange = (value: string) => {
    setSelectedCrypto(value);
  };

  const selectedOption = cryptoOptions.find(
    (option) => option.name === selectedCrypto
  );

  return (
    <div className="space-y-6">
      <Tabs
        defaultValue={selectedCrypto}
        onValueChange={handleValueChange}
        className="mx-6"
      >
        <TabsList className="grid grid-cols-2 bg-invert text-background border-[1px] shadow-sm shadow-ring">
          {cryptoOptions.map((crypto) => (
            <TabsTrigger
              key={crypto.name}
              value={crypto.name}
              className="flex items-center font-sans"
            >
              {crypto.icon}
              {crypto.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="flex justify-between">
        {selectedOption && <Wallet option={selectedOption} />}
      </div>
    </div>
  );
}

export default WalletGen;