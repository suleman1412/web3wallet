"use client"
import React from 'react';
import Card from './ui/Card';
import { Bitcoin, EclipseIcon as Ethereum, Gem } from 'lucide-react';
import { LineShadowText } from './ui/line-shadow-text';
import { easeInOut, motion } from 'framer-motion';
import FadeInDiv from './ui/FadeInDiv';

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
    ];

    return (
        <div className='my-[10vh] flex flex-col gap-6'>
            <FadeInDiv hidden={{ x: 20, opacity: 0 }} visible={{ x: 0, opacity: 1 }} duration={0.4} amount={1}>
                <LineShadowText className='md:text-4xl w-full text-4xl text-left mx-6 tracking-wider font-bold'>
                    Supported Currencies
                </LineShadowText>
            </FadeInDiv>
            <motion.div
                className='flex md:flex-row flex-col mx-6 gap-4 justify-center'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.2, 
                            delayChildren: 0.3, 
                        },
                    },
                    hidden: { opacity: 0 },
                }}
            >
                {defaultOptions.map((option, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            visible: { y: 0, opacity: 1 },
                            hidden: { y: 20, opacity: 0 },
                        }}
                        transition={{ duration: 0.4, ease: easeInOut }}
                    >
                        <Card className='flex flex-col rounded-md p-4 font-sans'>
                            <div className='flex flex-col gap-2'>
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
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default SupportedCurrencies;