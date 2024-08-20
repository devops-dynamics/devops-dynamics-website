import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "DevOps Dynamics",
    description: "Devops Dynamics",
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "min-h-screen bg-foreground font-sans antialiased",
                    fontSans.variable,
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <main className="rounded-t-[72px] bg-background p-4">
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
