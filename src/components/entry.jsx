"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Entry({ href, title, date, subtitle, description }) {
	const isExternal = href && href.startsWith("http");

	return (
		<div className="group">
			<Link
				href={href}
				draggable={false}
				className="block p-4 -mx-4 rounded-xl ease-out duration-450 transition-all hover:scale-[1.03] hover:bg-muted/90 dark:hover:bg-muted/50 select-text"
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
