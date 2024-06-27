// import React, { createContext, useContext, useEffect, useState } from "react";
// import jwt from "jsonwebtoken";
// import { useRouter } from "next/router";
// import Cookies from "js-cookie";
// import { cookies } from "next/headers";

// interface User {
//     id: string;
//     email: string;
//     role: string;
// }

// interface UserContextType {
//     user: User | null;
//     loading: boolean;
// }

// const UserContext = createContext<UserContextType>({
//     user: null,
//     loading: true,
// });

// export const UserProvider: React.FC = ({ children }) => {
//     const [user, setUser] = useState<User | null>(null);
//     const [loading, setLoading] = useState(true);
//     const router = useRouter();
//     const cookie = cookies()
//             const token = cookie.get("token");

//     useEffect(() => {
//         const token = cookie.get("token");

//         if (token) {
//             try {
//                 const decodedUser = jwt.verify(
//                     token,
//                     process.env.TOKEN_SECRET!,
//                 ) as User;
//                 setUser(decodedUser);
//             } catch (error) {
//                 console.error("Invalid token:", error);
//                 Cookies.remove("token");
//                 router.push("/login");
//             }
//         }

//         setLoading(false);
//     }, [router]);

//     return (
//         <UserContext.Provider value={{ user, loading }}>
//             {children}
//         </UserContext.Provider>
//     );
// };

// export const useUser = () => useContext(UserContext);
