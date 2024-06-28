import { ReactNode } from "react";

export function PageHeader({ children }: { children: ReactNode }) {
    return (
        <h1 className="mb-4 flex justify-between text-4xl font-bold">
            {children}
        </h1>
    );
}
