"use client";

import { useEffect, useState } from "react";

const QUOTE_BANK = [
	"The only way to do great work is to love what you do",
	"Stay hungry, stay foolish",
	"Simplicity is the ultimate sophistication",
	"Knowledge is power",
	"Well done is better than well said",
	"What we think, we become",
	"The journey of a thousand miles begins with one step",
	"Fortune favors the bold",
	"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
];

function generateQuotes(count) {
	return Array.from({ length: count }, () => {
		return QUOTE_BANK[Math.floor(Math.random() * QUOTE_BANK.length)];
	}).join(" ");
}

export default function ContactEasterEgg() {
	const [clicks, setClicks] = useState([]);
	const [isActive, setIsActive] = useState(false);
	const [stream, setStream] = useState(() => generateQuotes(8));
	const [cursor, setCursor] = useState(0);
	const [wordsTyped, setWordsTyped] = useState(0);

	useEffect(() => {
		if (!isActive) {
			return;
		}

		const handleKeyDown = (event) => {
			if (event.key === "Backspace") {
				event.preventDefault();
				setCursor((prev) => {
					if (prev <= 0) {
						return 0;
					}

					const removedChar = stream[prev - 1];
					if (removedChar === " ") {
						setWordsTyped((count) => Math.max(0, count - 1));
					}

					return prev - 1;
				});
				return;
			}

			if (event.key.length !== 1) {
				return;
			}

			if (event.key === " ") {
				event.preventDefault();
			}

			setCursor((prev) => {
				const expected = stream[prev];
				if (!expected) {
					return prev;
				}

				if (event.key.toLowerCase() !== expected.toLowerCase()) {
					return prev;
				}

				if (expected === " ") {
					setWordsTyped((count) => count + 1);
				}

				return prev + 1;
			});
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [isActive, stream]);

	useEffect(() => {
		if (!isActive) {
			return;
		}

		if (stream.length - cursor < 140) {
			setStream((prev) => `${prev} ${generateQuotes(4)}`);
		}
	}, [cursor, isActive, stream.length]);

	const typedText = stream.slice(0, cursor);
	const remainingText = stream.slice(cursor);
	const scrollOffset = Math.max(0, cursor * 7.5 - 48);

	const handleHeaderClick = () => {
		const now = Date.now();
		setClicks((prev) => {
			const recentClicks = prev.filter((time) => now - time < 1800);
			const updatedClicks = [...recentClicks, now];

			if (updatedClicks.length >= 3) {
				setIsActive(true);
				return [];
			}

			return updatedClicks;
		});
	};

	return (
		<>
			<h2
				className="text-lg font-semibold mb-4 select-none"
				onClick={handleHeaderClick}
			>
				Contact
			</h2>

			{isActive && (
				<div className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm">
					<div className="mx-auto max-w-3xl py-3">
						<p className="text-xs text-muted-foreground mb-1">
							words: {wordsTyped}
						</p>
						<div className="overflow-hidden whitespace-nowrap font-mono text-sm leading-6 select-none">
							<div style={{ transform: `translateX(-${scrollOffset}px)` }}>
								<span className="text-foreground">{typedText}</span>
								<span className="text-muted-foreground">{remainingText}</span>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
