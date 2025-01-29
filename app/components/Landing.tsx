"use client"
import Card from "./ui/Card";
import Link from 'next/link'
import React from 'react'
import { Button } from "./ui/Button";
import { LineShadowText } from "./ui/line-shadow-text";

const Landing = () => {
  return (
        <Card className="mx-6 rounded-xl md:px-10 py-10 px-2  flex flex-col gap-10 ">
            <div className="flex flex-col gap-4">
                <LineShadowText className="md:text-6xl text-5xl tracking-wider font-bold font-neuton">
                    Generate Secure Crypto Keypairs
                </LineShadowText>
                <h1 className="text-md font-sans text-secondary">
                    Create secure keypairs for Bitcoin, Ethereum, and Solana wallets with our easy-to-use generator.
                </h1>
            </div>
            <div className="flex gap-4 ">
                <Link href={'/SeedGen'}>
                    <Button variant={'keyboard'}>
                        Get Started
                    </Button>
                </Link>
                <Link href={'#'}>
                    <Button variant={'keyboardoutline'}>
                        Learn More
                    </Button>
                </Link>
            </div>
        </Card>
    )
}

export default Landing