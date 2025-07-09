import { Header } from "@/components/header";
import { Contact } from "@/components/sections/contact";
import { Events } from "@/components/sections/events";
import { Hero } from "@/components/sections/hero";
import { Members } from "@/components/sections/members";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 flex flex-col gap-16 my-16 ">
        <Hero />
        <Events />
        <Members />
        <Contact />
      </main>
    </div>
  );
}
