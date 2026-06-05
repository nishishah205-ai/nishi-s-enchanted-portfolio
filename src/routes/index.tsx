import { createFileRoute } from "@tanstack/react-router";
import { FloatingObjects } from "@/components/FloatingObjects";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Hackathons } from "@/components/sections/Hackathons";
import { Certs } from "@/components/sections/Certs";
import { Contact } from "@/components/sections/Contact";
import { MarqueeBand } from "@/components/sections/MarqueeBand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nishi Shah — Frontend Engineer, Full-Stack Developer & ML Builder" },
      { name: "description", content: "Portfolio of Nishi Shah — frontend-focused full-stack developer and social impact technologist building ML-powered products that matter." },
      { property: "og:title", content: "Nishi Shah — Portfolio" },
      { property: "og:description", content: "Frontend, full-stack, and ML projects with social impact." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <FloatingObjects />
      <CustomCursor />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <MarqueeBand items={["Design", "Build", "Ship", "Iterate", "Repeat"]} />
          <Process />
          <Projects />
          <MarqueeBand reverse bg="var(--bg-section-4)" color="var(--accent-lilac-deep)"
            items={["Frontend", "Full-Stack", "Machine Learning", "Social Impact", "Open Source"]} />
          <Skills />
          <Hackathons />
          <Certs />
          <Contact />
        </main>
      </div>
    </div>
  );
}
