import db from "@/db/db";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json();
        const { email, password } = reqBody;
        console.log(reqBody);

        const user = await db.user.findUnique({ where: { email } });
        if (!user) {
            return NextResponse.json({
                error: "USER NOT FOUND.",
            });
        }

        const validPassword = await bcryptjs.compare(password, user.password);

        if (!validPassword) {
            return NextResponse.json({ error: "Invalid Password" });
        }

        // create token data
        const tokenData = {
            id: user.id,
            role: user.role,
            email: user.email,
            isValid: true,
        };
        console.log("tokenData:", tokenData);

        //  create data
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
            expiresIn: "1h",
        });
        // save in user's cookie

        const res = NextResponse.json({
            message: "Log in Successful",
            success: true,
        });

        res.cookies.set("token", token, {
            httpOnly: true,
        });

        return res;
    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    }
}
