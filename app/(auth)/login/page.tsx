"use client";

import dynamic from "next/dynamic";

const LoginButton = dynamic(() => import("@/components/LoginButton"), { ssr: false });

export default function HomePage() {
  return (
      <main className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white px-4">
        <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-sm text-center space-y-6 border border-gray-200">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Welcome to Actualize</h1>
            <p className="text-sm text-gray-500">Please log in to continue</p>
          </div>
          <div className='flex justify-center'>
            <LoginButton />
          </div>
        </div>
      </main>
  );
}