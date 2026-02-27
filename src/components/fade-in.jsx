"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export default function FadeIn({ children, className, delay = 0 }) {
	const ref = useRef(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const rect = el.getBoundingClientRect();
		const inInitialView = rect.top < window.innerHeight * 0.95;
		el.style.transitionDelay = inInitialView ? `${delay}ms` : "150ms";

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
	}, [delay]);

	return (
		<div
			ref={ref}
			className={cn(
				"opacity-0 -translate-y-4 transition-all duration-500 ease-in",
				className,
			)}
		>
			{children}
		</div>
	);
}
