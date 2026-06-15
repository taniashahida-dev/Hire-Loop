"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { IoMenuSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Navlink from "./Navlink";
import { authClient, useSession } from "@/lib/auth-client";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { data, isPending } = useSession();
  // console.log(data?.user, "IsPending", isPending);
  const user = data?.user;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Browse Jobs", href: "/jobs" },
    { name: "Company", href: "/company" },
    { name: "Pricing", href: "/pricing" },
  ];
const handleLogOut = async () => {

  await authClient.signOut()

  window.location.href = "/"
}
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-xl bg-white/10 border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={"/images/logo.png"}
              alt="logo"
              width={140}
              height={40}
              priority
              className="object-contain"
            ></Image>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-2 py-2">
              {navLinks.map((link) => (
                <Navlink
                  key={link.name}
                  href={link.href}
                  className={
                    "text-sm text-gray-300 hover:text-white px-4 py-2 rounded-xl transition-all duration-200 hover:bg-white/10"
                  }
                >
                  {link.name}
                </Navlink>
              ))}

              <div className="w-px h-6 bg-white/10 mx-2" />

              {user ? (
                <>
                  <p className="text-violet-400 px-2">Hello {user?.name}</p>
                  <button onClick={handleLogOut} className="bg-white text-black  p-3 rounded-xl font-medium hover:bg-gray-200 transition">
              Log Out
              </button>
                </>
              ) : (
                <>
                <Link
                  href="/sign-in"
                  className="text-violet-400 hover:text-violet-300 text-sm px-4 py-2 transition"
                >
                  Sign In
                </Link>
                 <Link href={"/sign-up"}>
                <button className="bg-white text-black px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-200 transition-all duration-200">
                  Get Started
                </button>
              </Link></>
              )}

             
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <AiOutlineClose size={28} /> : <IoMenuSharp size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-4 space-y-3">
            {navLinks.map((link) => (
              <Navlink
                key={link.name}
                href={link.href}
                className="block text-gray-300 hover:text-white transition"
              >
                {link.name}
              </Navlink>
            ))}

            <div className="border-t border-white/10 pt-3 flex flex-col gap-3">
              {user ? (
                <>
                  <p className="text-violet-400 px-2">Hello {user?.name}</p>
                  
                 <button onClick={handleLogOut} className="bg-white text-black py-3 rounded-xl font-medium hover:bg-gray-200 transition">
              Log out
              </button>
                </>
              ) : (
               <>
                <Link
                  href={"/sign-in"}
                  className="text-violet-400 hover:text-violet-300 transition"
                >
                  Sign In
                </Link>
                 <button className="bg-white text-black py-3 rounded-xl font-medium hover:bg-gray-200 transition">
                Get Started
              </button></>
              )}
             
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
