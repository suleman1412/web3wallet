import { easeInOut, motion, Variant } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInDivProps {
    children: ReactNode;
    hidden: Variant;
    visible: Variant;
    duration: number;
    amount: number;
}


export default function FadeInDiv({ children, hidden, visible, duration, amount }: FadeInDivProps) {
    return(
        <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once:true, amount: amount }}
                transition={{ duration: duration, ease: easeInOut }}
                variants={{
                    visible: visible,
                    hidden: hidden
                }}
            >
                {children}
            </motion.div>
    )
}