'use client';

import Link from 'next/link';
import Image from 'next/image';

import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { PiPinterestLogoFill } from 'react-icons/pi';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      {/* Background Glow/Grid */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo + Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Programming Hero"
                width={160}
                height={50}
                className="object-contain"
              />
            </Link>

            <p className="mt-6 text-gray-400 leading-8 max-w-sm">
              The AI-native career platform. Built for people who take
              their work seriously.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-10">
              <Link
                href="#"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:bg-violet-600 transition-all duration-300"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="#"
                className="w-12 h-12 rounded-xl bg-violet-600 flex items-center justify-center text-xl hover:scale-105 transition-all duration-300"
              >
                <PiPinterestLogoFill />
              </Link>

              <Link
                href="#"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:bg-violet-600 transition-all duration-300"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-violet-400 font-semibold mb-6">
              Product
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition"
                >
                  Job discovery
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="hover:text-white transition"
                >
                  Worker AI
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="hover:text-white transition"
                >
                  Companies
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="hover:text-white transition"
                >
                  Salary data
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigations */}
          <div>
            <h3 className="text-violet-400 font-semibold mb-6">
              Navigations
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition"
                >
                  Help center
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="hover:text-white transition"
                >
                  Career library
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-violet-400 font-semibold mb-6">
              Resources
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition"
                >
                  Brand Guideline
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="hover:text-white transition"
                >
                  Newsroom
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
          <p>
            Copyright 2024 — Programming Hero
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="hover:text-white transition"
            >
              Terms & Policy
            </Link>

            <Link
              href="#"
              className="hover:text-white transition"
            >
              Privacy Guideline
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}