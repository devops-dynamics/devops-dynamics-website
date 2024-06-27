import db from "@/db/db";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json();
        const { name, email, password, role } = reqBody;
        console.log(reqBody);

        //FIXME: validate
        if (!name || !email || !password || !role) {
            return NextResponse.json({ error: "All fields are required" });
        }

        // FIXME: check if already exists
        const user = await db.user.findUnique({ where: { email } });
        if (user) {
            return NextResponse.json({
                error: "Email Already Exists",
            });
        }

        // hash the password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        // FIXME: Create new Profile

        // create a new user

        const newUser = await db.user.create({
            data: {
                email,
                name,
                password: hashedPassword,
                role,
                profile: {
                    create: {
                        display_name: name,
                        email,
                        bio: "BIO",
                        achievements: "ACHIEVEMENTS",
                        certifications: "CERTIFICATIONS",
                        education: "",
                        position: "",
                        upwork_profile: "",
                        github_profile: "",
                        linkedin_profile: "",
                        personal_website: "",
                        profile_image: "",
                        twitter_profile: "",
                        // user_id: newUser.id,
                    },
                },
            },
        });

        return NextResponse.json({
            message: "User Created Successfully",
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    }
}

export async function GET(req: NextRequest) {
    const reqBody = await req.json();
    const { email, password } = reqBody;
    if (!password) {
    }
    console.log(reqBody);
}
