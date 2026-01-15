"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const menuItems = [
    "HOME",
    "RECRUITERS",
    "PLACEMENTS",
    "ALUMNI",
    "STATS",
    "CONTACT US",
    "LOG OUT",
  ];

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // clear login state
    router.replace("/"); // redirect to main page
  };

  return (
    <header className="w-full shadow-sm bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="CUSAT Logo" width={55} height={55} />
          <div className="leading-tight">
            <h1 className="text-lg font-bold text-red-700">DCA Placement Portal</h1>
            <p className="text-sm text-blue-600">Cochin University of Science and Technology</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          {menuItems.map((item) => (
            <NavItem
              key={item}
              title={item}
              onClick={item === "LOG OUT" ? handleLogout : undefined}
              isLogout={item === "LOG OUT"}
            />
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <span className="text-2xl">{menuOpen ? "✖" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="flex flex-col gap-4 px-6 py-4 bg-white shadow-md md:hidden">
          {menuItems.map((item) => (
            <NavItem
              key={item}
              title={item}
              onClick={item === "LOG OUT" ? handleLogout : undefined}
              isLogout={item === "LOG OUT"}
            />
          ))}
        </nav>
      )}
    </header>
  );
}

function NavItem({ title, onClick, isLogout }: { title: string; onClick?: () => void; isLogout?: boolean }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-1 cursor-pointer ${
        isLogout ? "text-red-600 hover:text-red-800" : "hover:text-black"
      }`}
    >
      <span>{title}</span>
      {!isLogout && <span className="text-xs">▾</span>}
    </div>
  );
}
