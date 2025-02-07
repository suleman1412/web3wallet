import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "./ui/Button";
import Card from "./ui/Card";
import { Dispatch, SetStateAction } from "react";

export default function SecretPhrase({ words, isOpen, setIsOpen } : { 
    words: string[], 
    isOpen: boolean, 
    setIsOpen:  Dispatch<SetStateAction<boolean>>
}){
    
    return(
        <Card className="px-4 mx-6 py-3 rounded-md">
        <div className="flex justify-between items-center">
            <h1 className="font-bold text-md md:text-md">
                Your Secret Phrase
            </h1>
            <Button
                variant={'outline'}
                size={'icon'}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                {isOpen ? <ChevronUp /> : <ChevronDown />}

            </Button>
        </div>
        <div
            className={`overflow-hidden font-sans transition-all duration-300 ease-in-out ${isOpen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}
        >
            <p className="text-sm text-secondary">
                This is your secret recovery phrase. Store it securely and never share it with anyone.
            </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-4 ">
                {words.map((word, index) => (
                    <div 
                        key={index} 
                        className="bg-card px-4 py-2 rounded-md hover:bg-card-hover  transition-all duration-300 ease-in-out"
                    >
                        <span>{word}</span>
                    </div>
                ))}
            </div>
        </div>
    </Card>
    )
}