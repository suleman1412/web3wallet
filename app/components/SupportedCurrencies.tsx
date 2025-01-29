"use client"
import React from 'react'
import Card from './ui/Card'
import { Bitcoin, EclipseIcon as Ethereum, Gem } from 'lucide-react'
import { LineShadowText } from './ui/line-shadow-text'

const SupportedCurrencies = () => {
    const defaultOptions = [
        {
            icon: <Bitcoin className="w-6 h-6" />, // Adjust size if needed
            header: "Bitcoin",
            subheader: "Generate secure Bitcoin keypair",
            para: "Create public and private keys for your Bitcoin wallet with industry-standard encryption."
        },
        {
            icon: <Ethereum className="w-6 h-6" />,
            header: "Ethereum",
            subheader: "Generate secure Ethereum keypair",
            para: "Create public and private keys for your Ethereum wallet, compatible with ERC-20 tokens."
        },
        {
            icon: <Gem className="w-6 h-6" />,
            header: "Solana",
            subheader: "Generate secure Solana keypair",
            para: "Create public and private keys for your Solana wallet, optimized for fast transactions."
        }
    ]

    return (
        <div className='my-[10vh] flex flex-col gap-6'>
            <LineShadowText className='md:text-4xl text-4xl text-left mx-6 tracking-wider font-bold'>
                Supported Currencies
            </LineShadowText>
            <div className='flex md:flex-row flex-col mx-6 gap-4 justify-center'>
                    {defaultOptions.map((option, index) => (
                        <Card key={index} className='flex flex-col rounded-md p-8 font-sans'>
                            <div  className='flex flex-col gap-2'>
                                {option.icon}
                                <h1 className='text-2xl font-semibold'>
                                    {option.header}
                                </h1>
                                <h2 className='text-sm'>
                                    {option.subheader}
                                </h2>
                                <p className='text-xs'>
                                    {option.para}
                                </p>
                            </div>
                        </Card>
                    ))}
            </div>
        </div>
    )
}

export default SupportedCurrencies
