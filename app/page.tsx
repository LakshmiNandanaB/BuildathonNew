"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!studentId || !password) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentId, password }),
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        // ✅ Save login state
        localStorage.setItem("isLoggedIn", "true");

        // ✅ Navigate to dashboard
        router.push("/dashboard");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      setLoading(false);
      alert("Server error. Try again later.");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/back.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(1.2) saturate(1.3)",
        }}
      />
      <div className="absolute inset-0 bg-white/20 " />

      {/* Login Card */}
      <main className="relative z-30 w-full max-w-sm rounded-2xl bg-white/90 p-6 shadow-lg backdrop-blur-sm -mt-16">
        {/* Header */}
        <div className="flex flex-col items-center gap-2 mb-5">
          <Image src="/logo.png" alt="CUSAT" width={100} height={100} />
          <h1 className="text-2xl font-bold text-gray-800 text-center">DCA Placements</h1>
          <p className="text-xs text-gray-700 text-center">
            Career & Placement Management System
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-3">
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-400">🎓</span>
            <input
              type="text"
              placeholder="Student ID"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className="w-full rounded-lg border border-gray-300 pl-10 px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-400">🔒</span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 pl-10 px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full rounded-lg bg-indigo-600 py-2 font-semibold text-white hover:bg-indigo-700 transition disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </div>

        {/* Footer */}
        <div className="mt-4 text-center">
          <p className="text-sm text-indigo-600 hover:underline cursor-pointer">
            Forgot password?
          </p>
          <p className="mt-2 text-xs text-gray-400">
            Authorized access for CUSAT students only
          </p>
          <p className="mt-1 text-xs text-gray-400">
            © 2026 CUSAT Placement Cell
          </p>
        </div>
      </main>
    </div>
  );
}
