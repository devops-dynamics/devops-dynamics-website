import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

interface User {
    id: string;
    email: string;
    role: string;
}

function decodeToken(token: string): User | null {
    try {
        const user = jwt.verify(token, process.env.TOKEN_SECRET!);
        if (user) {
            return user as User;
        }
        return null;
    } catch (error) {
        console.error("Invalid token:", error);
        return null;
    }
}

export const getUser = () => {
    const cookie = cookies();
    const token = cookie.get("token")?.value;
    let user;
    if (token) {
        user = decodeToken(token);
    }
    return user;
};
