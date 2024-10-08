import type { Metadata } from "next";
// import "../../globals.css";
// import { ThemeProvider } from "@/components/Providers/ThemeProvider";
import Nav from "../_components/Navbar";

export const metadata: Metadata = {
    title: "DevOps Dynamics Admin Panel",
    description: "Generated by create next app",
};

export default function AdminRootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Nav />
            <main className="min-h-screen p-4">{children}</main>
        </>
    );
}
