import { ThemeToggle } from "@/components/theme-toggle";
import Entry from "@/components/entry";
import Link from "next/link";

export default function Home() {
	return (
		<main className="min-h-screen max-w-3xl mx-auto px-6 py-12 md:py-20">
			<header className="flex justify-between items-center mb-16 md:mb-24">
				<div>
					<h1 className="text-2xl font-bold tracking-tight">Jason Zheng</h1>
					<p className="text-muted-foreground">
						Software Engineer, Studying CS @ UBC
					</p>
				</div>
				<ThemeToggle />
			</header>

			<section className="mb-12 md:mb-18">
				<h2 className="text-lg font-semibold mb-4">About</h2>
				<p className="text-muted-foreground leading-relaxed">
					My objective is to build innovative, reliable systems that can create
					real-world impact. My current interests include low-level design,
					specifically improving memory abstractions to better optimize
					performance in data centre workloads.
				</p>
			</section>

			<section className="mb-12 md:mb-18">
				<h2 className="text-lg font-semibold mb-4">Experience</h2>
				<div className="space-y-1">
					<Entry
						href="https://www.super.com/"
						title="Software Engineer Intern"
						date="May 2026 - Aug 2026"
						subtitle="Super.com • San Francisco"
						description="Product Team - Incoming Summer 2026."
					/>
					<Entry
						href="https://dfp.ubc.ca/"
						title="Research Assistant"
						date="Jan 2026 - Present"
						subtitle="UBC CS • Vancouver"
						description="Working under Professor Robert Xiao and Xincheng Huang on AI-Powered Hyper-realistic Dynamic Telepresence."
					/>
					<Entry
						href="https://github.com/UBC-LFS/Canvas-Flexible-Assessment"
						title="Project Software Developer"
						date="Sep 2025 - Present"
						subtitle="UBC LFS • Vancouver"
						description="Working on a full-stack external Canvas app, built with Django, to save over 10 hours per week for instructors."
					/>
					<Entry
						href="https://netint.com/"
						title="Firmware Engineer Intern"
						date="Jan 2025 - Aug 2025"
						subtitle="NETINT Technologies • Burnaby"
						description="Worked on developing the firmware/software stack for NETINT’s flagship Quadra chip, a custom ASIC video transcoding accelerator."
					/>
				</div>
			</section>

			<section className="mb-16 md:mb-24">
				<h2 className="text-lg font-semibold mb-4">Projects</h2>
				<div className="space-y-2">
					<Entry
						href="https://github.com/ubclaunchpad/Piazza-AI-Plugin"
						title="Threadsense AI"
						date="Sep 2025 - Present"
						description="Developing a chrome extension with UBC Launchpad to easily browse and triage Piazza forums. Using a custom RAG vector database for model context."
					/>
					<Entry
						href="https://github.com/ubctg/PortfolioBackTestFrontend"
						title="Post-Trade Dashboard"
						date="June 2025 - Present"
						description="Developing a post-trade dashboard to graph returns and visualize portfolio re-balancing based on quant views for UBC Trading Group. Black-Litterman Model on backend to optimize portfolio."
					/>
					<Entry
						href="https://github.com/artinSha/SpeakFastApp-Frontend"
						title="SpeakFast"
						date="Oct 2025"
						description="Developed an interactive English-speaking practice platform for Storm Hacks 2025. Used React + Expo to create a native Android app."
					/>
					<Entry
						href="https://devpost.com/software/clearmyfridge?_gl=1*1muvhfa*_gcl_au*MjEwOTQ5NjMuMTc2NTI1ODEwMw..*_ga*NzMyNzc0MDMyLjE3NjUyNTgxMDQ.*_ga_0YHJK3Y10M*czE3NjUyNTgxMDMkbzEkZzEkdDE3NjUyNTgxMTYkajQ3JGwwJGgw"
						title="Clear My Fridge"
						date="Jan 2025"
						description="Developed a mobile app for nwHacks 2025 to leverage fine-tuned LLMs to clear your fridge. Fine-tuned 2 ChatGPT LLMs to reject invalid ingredients and generate recipes, using curated training data."
					/>
					<Entry
						href="https://ubcenvision.com/"
						title="UBC Envision Website"
						date="2024"
						description="Updated and modernized the UBC envision website. Used AstroJS."
					/>
				</div>
			</section>

			<section>
				<h2 className="text-lg font-semibold mb-4">Contact</h2>
				<p className="text-muted-foreground mb-4">
					Feel free to reach out to me via email or social media.
				</p>
				<div className="flex gap-4 text-sm">
					<Link
						target="_blank"
						rel="noopener noreferrer"
						href="mailto:jasonzh@hotmail.ca"
						className="hover:text-foreground transition-colors text-muted-foreground"
					>
						Email
					</Link>
					<Link
						target="_blank"
						rel="noopener noreferrer"
						href="https://github.com/Jasonzh1"
						className="hover:text-foreground transition-colors text-muted-foreground"
					>
						GitHub
					</Link>
					<Link
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.linkedin.com/in/jzheng05/"
						className="hover:text-foreground transition-colors text-muted-foreground"
					>
						LinkedIn
					</Link>
					<Link
						href="/files/resume.pdf"
						className="hover:text-foreground transition-colors text-muted-foreground"
					>
						Resume
					</Link>
				</div>
			</section>
		</main>
	);
}
