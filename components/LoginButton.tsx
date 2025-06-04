"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginButton() {
    const { data: session, status } = useSession();

    if (status === "loading") return <p>Loading...</p>;

    if (session) {
        return (
            <div>
                <p>Signed in as {session.user?.name}</p>
                <button onClick={() => signOut()} className="text-red-600">Sign out</button>
            </div>
        );
    }

    return (
        <button
            onClick={() => signIn("google")}
            className="flex items-center font-semibold gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-700 rounded-md hover:shadow-md hover:bg-gray-100 transition"
        >
            <img
                src="/GoogleLogo.png"
                alt="Google logo"
                className="w-5 h-5"
            />
            <span>Sign in with Google</span>
        </button>

    );
}
