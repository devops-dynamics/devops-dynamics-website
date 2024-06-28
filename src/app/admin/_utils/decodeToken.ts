import jwt from "jsonwebtoken";

// interface User {
//   id: string;
//   email: string;
//   role: string;
// }

export function decodeToken(token: string) {
    try {
        const user = jwt.verify(token, process.env.TOKEN_SECRET!);
        return user;
    } catch (error) {
        console.error("Invalid token:", error);
        return null;
    }
}
