// app/not-found.tsx
"use client";

import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-center px-6">
      {/* Error Code */}
      <h1 className="text-9xl font-extrabold  textColor">404</h1>

      {/* Message */}
      <h2 className="mt-4 text-2xl font-semibold textColor ">
        Page Not Found
      </h2>
      <p className="mt-2 textColor max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 btnColor btnText px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
      >
        <Home size={20} /> Back to Home
      </Link>
    </div>
  );
}
