import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

type TokenData = {
    id: string;
    role: string;
    email: string;
    iat: number;
    exp: number;
};

export const getToken = (): TokenData | null => {
    const cookie = cookies();
    const token = cookie.get("token")?.value;

    if (token) {
        try {
            const tokenData = jwt.verify(
                token,
                process.env.TOKEN_SECRET!,
            ) as TokenData;
            return tokenData;
        } catch (error) {
            console.error("Invalid token:", error);
            return null;
        }
    }
    return null;
};

export const isTokenExpired = (): boolean => {
    const tokenData = getToken();
    if (tokenData) {
        return Date.now() >= tokenData.exp * 1000;
    }
    return true; // If there's no token or it's invalid, consider it expired
};

export const getUserId = (): string | null => {
    const tokenData = getToken();
    return tokenData ? tokenData.id : null;
};

export const getUserRole = (): string | null => {
    const tokenData = getToken();
    return tokenData ? tokenData.role : null;
};
