import Link from "next/link";
import Card from "./ui/Card";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <Card className="rounded-[10px_10px_0px_0px] p-4 font-sans text-[0.8rem] mt-8 mx-6 flex justify-between items-center">
            <div>
                Designed and Developed by <Link href={'https://github.com/suleman1412'}><span className="font-semibold">Suleman</span></Link>
            </div>
            <div className="flex gap-4 ">
                <Link href={'https://github.com/suleman1412'}>
                    <Github />
                </Link>
                <Link href={'https://www.linkedin.com/in/sulemankarigar/'}>
                    <Linkedin />
                </Link>
            </div>
        </Card>
    )
}