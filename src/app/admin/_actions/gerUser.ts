import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getUser = (req: NextRequest) => {
    try {
        const token = req.cookies.get("token")?.value || "";
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET!);
        return decodedToken;
    } catch (error: any) {
        throw new Error(error.message);
    }
};
