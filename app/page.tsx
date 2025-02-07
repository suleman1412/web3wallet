import CTA from "./components/CTA";
import Landing from "./components/Hero";
import SupportedCurrencies from "./components/SupportedCurrencies";

export default function Home() {
  return (
    <div>
      <Landing />
      <SupportedCurrencies />
      <CTA />
    </div>
  );
}
