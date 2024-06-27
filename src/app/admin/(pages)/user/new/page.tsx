import { useRouter } from "next/router";
import React, { useState } from "react";

const page = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
        role: "MEMBER",
    });
    const router = useRouter();

    return <div>page</div>;
};

export default page;
