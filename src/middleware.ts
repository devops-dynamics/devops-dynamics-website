import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;

    const isAdmin = path.startsWith("/admin") && path !== "/admin"; // starts with admin but not /admin -> /admin/<any path>
    const token = req.cookies.get("token")?.value || "";
    if (isAdmin && !token) {
        return NextResponse.redirect(new URL("/admin", req.nextUrl));
    }
}

export const config = {
    matcher: ["/admin", "/admin/:path*"],
};
