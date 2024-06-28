import React from "react";
import Header from "../_components/Header";
import Link from "next/link";
import { getUser } from "../_actions/gerUser";
import { cookies } from "next/headers";
import LoginForm from "../_components/Forms/LoginForm";

type Role = "OWNER" | "MEMBER";

const page = async () => {
    const cookie = cookies();
    const token = cookie.get("token");
    console.log(token);
    return (
        <>
            <LoginForm></LoginForm>
        </>
    );
};

export default page;
