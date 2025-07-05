"use client";

import { signIn } from "next-auth/react";

export default function LoginButton() {
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
