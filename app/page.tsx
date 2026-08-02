import { Amazon } from "@/components/Amazon";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Marketing } from "@/components/Marketing";
import { Videos } from "@/components/Videos";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Youtube } from "@/components/Youtube";

export default function HomePage() {
  return (
    <main className="page">
      <Hero />
      <div className="page-rest">
        <Youtube />
        <Marketing />
        <Amazon />
        <Videos />
        <Footer />
      </div>
      <WhatsAppButton />
    </main>
  );
}
