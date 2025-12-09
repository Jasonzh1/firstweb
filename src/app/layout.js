import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebas_neue = Bebas_Neue({ subsets: ["latin"], weight: '400', variable: "--font-bebas-neue" });

export const metadata = {
  title: "Hi I'm Jason",
  description: "Personal website built with nextjs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans ${bebas_neue.variable}`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
