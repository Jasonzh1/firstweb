"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export default function Entry({
	href,
	title,
	date,
	subtitle,
	description,
	index = 0,
}) {
	const isExternal = href && href.startsWith("http");
	const ref = useRef(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		// Only stagger entries that are already near the viewport on mount.
		// Entries below the fold should animate immediately when scrolled to.
		const rect = el.getBoundingClientRect();
		const inInitialView = rect.top < window.innerHeight * 0.95;
		el.style.transitionDelay = inInitialView ? `${index * 120}ms` : "80ms";

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					el.classList.add("opacity-100", "translate-y-0");
					el.classList.remove("opacity-0", "-translate-y-4");
					observer.unobserve(el);
				}
			},
			{ threshold: 0.1 },
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, [index]);

	return (
		<div
			ref={ref}
			className="group opacity-0 -translate-y-4 transition-all duration-500 ease-in"
		>
			<Link
				href={href}
				draggable={false}
				className="block p-4 -mx-4 rounded-xl ease-out duration-450 transition-all sm:hover:scale-[1.03] sm:hover:bg-muted/90 sm:dark:hover:bg-muted/50 select-text"
				target={isExternal ? "_blank" : undefined}
				rel={isExternal ? "noopener noreferrer" : undefined}
				onClick={(e) => {
					if (window.getSelection()?.toString()) {
						e.preventDefault();
					}
				}}
			>
				<div className="flex justify-between items-baseline">
					<h3 className={cn("font-medium", subtitle && "mb-0.5")}>{title}</h3>
					<span className="text-sm text-muted-foreground">{date}</span>
				</div>
				{subtitle && (
					<div className="text-sm text-muted-foreground mb-2">{subtitle}</div>
				)}
				<p className="text-sm text-muted-foreground mt-1">{description}</p>
			</Link>
		</div>
	);
}
