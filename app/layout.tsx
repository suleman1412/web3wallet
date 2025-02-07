import type { Metadata } from "next";
import { Geist, Geist_Mono, Neuton } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const neuton = Neuton({
  weight: ['200','300', '400', '700', '800'],
  subsets: ['latin'],
  variable: "--font-neuton",
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Web3 Wallet",
  description: "Web3 Wallet for generating keypairs for crypto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${neuton.variable}  bg-radial text-foreground font-neuton  bg-dots transition-all duration-300 ease-in-out antialiased`}
      >
        <ThemeProvider>
          <div 
            className="flex flex-col z-[-2]  h-screen max-w-7xl mx-auto ">
                <NavBar />
                <div className="flex-1 backdrop-blur-[1px] ">
                  {children}
                </div>
                <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
