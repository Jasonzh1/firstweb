import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen max-w-3xl mx-auto px-6 py-12 md:py-20">
      <header className="flex justify-between items-center mb-16 md:mb-24">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Jason Zheng</h1>
          <p className="text-muted-foreground">Software Engineer, Studying CS @ UBC</p>
        </div>
        <ThemeToggle />
      </header>

      <section className="mb-12 md:mb-18">
        <h2 className="text-lg font-semibold mb-4">About</h2>
        <p className="text-muted-foreground leading-relaxed">
          My objective is to build innovative, reliable systems that can create real-world impact.
          My current interests include low-level design, specifically improving memory abstractions
          to better optimize performance in data centre workloads.
        </p>
      </section>

      <section className="mb-12 md:mb-18">
        <h2 className="text-lg font-semibold mb-6">Experience</h2>
        <div className="space-y-8">
          <div className="group">
            <Link target="_blank" rel="noopener noreferrer" href="https://github.com/UBC-LFS/Canvas-Flexible-Assessment" className="block">
              <div className="flex justify-between items-baseline">
                <h3 className="mb-0.5 font-medium relative w-fit after:absolute after:-bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-muted-foreground after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                  Project Software Developer
                </h3>
                <span className="text-sm text-muted-foreground">Sep 2025 - Present</span>
              </div>
              <div className="text-sm text-muted-foreground mb-2">
                UBC LFS • Vancouver
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Working part-time on a full-stack external Canvas app, built with Django, to save over 10 hours per week for instructors
              </p>
            </Link>
          </div>
          <div className="group">
            <Link target="_blank" rel="noopener noreferrer" href="https://netint.com/" className="block">
              <div className="flex justify-between items-baseline">
                <h3 className="mb-0.5 font-medium relative w-fit after:absolute after:-bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-muted-foreground after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                  Software Engineer Intern
                </h3>
                <span className="text-sm text-muted-foreground">Jan 2025 - Aug 2025</span>
              </div>
              <div className="text-sm text-muted-foreground mb-2">
                NETINT Technologies • Burnaby
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Worked on developing the firmware/software stack for NETINT’s flagship Quadra chip, a custom ASIC video transcoding accelerator.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-16 md:mb-24">
        <h2 className="text-lg font-semibold mb-6">Projects</h2>
        <div className="space-y-7">
          <div className="group">
            <Link target="_blank" rel="noopener noreferrer" href="https://github.com/ubclaunchpad/Piazza-AI-Plugin" className="block">
              <div className="flex justify-between items-baseline">
                <h3 className="font-medium relative w-fit after:absolute after:-bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-muted-foreground after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                  Threadsense AI
                </h3>
                <span className="text-sm text-muted-foreground">Sep 2025 - Present</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Developing a chrome extension with UBC Launchpad to easily browse and triage Piazza forums. 
                Using a custom RAG vector database for model context.
              </p>
            </Link>
          </div>
          <div className="group">
            <Link target="_blank" rel="noopener noreferrer" href="https://github.com/ubctg/PortfolioBackTestFrontend" className="block">
              <div className="flex justify-between items-baseline">
                <h3 className="font-medium relative w-fit after:absolute after:-bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-muted-foreground after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                  Post-Trade Dashboard
                </h3>
                <span className="text-sm text-muted-foreground">June 2025 - Present</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Developing a post-trade dashboard to graph returns and visualize portfolio re-balancing based 
                on quant views for UBC Trading Group. Black-Litterman Model on backend to optimize portfolio.
              </p>
            </Link>
          </div>
          <div className="group">
            <Link target="_blank" rel="noopener noreferrer" href="https://github.com/artinSha/SpeakFastApp-Frontend" className="block">
              <div className="flex justify-between items-baseline">
                <h3 className="font-medium relative w-fit after:absolute after:-bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-muted-foreground after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                   SpeakFast
                </h3>
                <span className="text-sm text-muted-foreground">Oct 2025</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Developed an interactive English-speaking practice platform for Storm Hacks 2025. Used React + Expo to create a native Android app.
              </p>
            </Link>
          </div>
          <div className="group">
            <Link target="_blank" rel="noopener noreferrer" href="https://devpost.com/software/clearmyfridge?_gl=1*1muvhfa*_gcl_au*MjEwOTQ5NjMuMTc2NTI1ODEwMw..*_ga*NzMyNzc0MDMyLjE3NjUyNTgxMDQ.*_ga_0YHJK3Y10M*czE3NjUyNTgxMDMkbzEkZzEkdDE3NjUyNTgxMTYkajQ3JGwwJGgw" className="block">
              <div className="flex justify-between items-baseline">
                <h3 className="font-medium relative w-fit after:absolute after:-bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-muted-foreground after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                   Clear My Fridge
                </h3>
                <span className="text-sm text-muted-foreground">Jan 2025</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Developed a mobile app for nwHacks 2025 to leverage fine-tuned LLMs to clear your fridge. 
                Fine-tuned 2 ChatGPT LLMs to reject invalid ingredients and generate recipes,  using curated training data.
              </p>
            </Link>
          </div>
          <div className="group">
            <Link target="_blank" rel="noopener noreferrer" href="https://github.com/Env-25/envision-site" className="block">
              <div className="flex justify-between items-baseline">
                <h3 className="font-medium relative w-fit after:absolute after:-bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-muted-foreground after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                   UBC Envision Website
                </h3>
                <span className="text-sm text-muted-foreground">2024</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Updated and modernize the UBC envision website. Used AstroJS. 
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">Contact</h2>
        <p className="text-muted-foreground mb-4">
          Feel free to reach out to me via email or social media.
        </p>
        <div className="flex gap-4 text-sm">
          <Link target="_blank" rel="noopener noreferrer" href="mailto:jasonzh@hotmail.ca" className="hover:text-foreground transition-colors text-muted-foreground">
            Email
          </Link>
          <Link target="_blank" rel="noopener noreferrer" href="https://github.com/Jasonzh1" className="hover:text-foreground transition-colors text-muted-foreground">
            GitHub
          </Link>
          <Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jzheng05/" className="hover:text-foreground transition-colors text-muted-foreground">
            LinkedIn
          </Link>
          <Link href="/files/resume.pdf" className="hover:text-foreground transition-colors text-muted-foreground">
            Resume
          </Link>
        </div>
      </section>
    </main>
  );
}
