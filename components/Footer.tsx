"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const footerLinks = {
    product: [
      { name: "Features", href: "/#features" },
      { name: "How It Works", href: "/#how-it-works" },
      { name: "Supported Formats", href: "/#formats" },
      { name: "Download", href: "/#hero" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Blog", href: "#" },
      { name: "Press", href: "#" },
      { name: "Partners", href: "/contact#partner" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "DMCA", href: "/dmca" },
    ],
  };

  return (
    <footer className="relative mt-auto border-t border-gray-200 bg-gradient-to-b from-white to-gray-50">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-20 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12 md:py-16">
          {/* Top Section - Newsletter & Links */}
          <div className="grid gap-10 lg:grid-cols-12 mb-12">
            {/* Newsletter */}
            <div className="lg:col-span-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                <div className="relative bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                  <div className="rounded-full from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                    <Link
                        href="/"
                        className="group flex items-center gap-3 relative overflow-hidden"
                      >
                        <Image
                          src="/logo.png"
                          alt="Logo"
                          width={160}
                          height={90}
                        />
                      </Link>
                  </div>
                  <p className="text-gray-600 mb-6">
                    GraVideo lets you quickly download videos from popular social
                    platforms. Just paste the link and get high-quality downloads —
                    fast, simple, and reliable.
                  </p>
                </div>
              </div>
            </div>

            {/* Links Grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {Object.entries(footerLinks).map(([category, links], idx) => (
                  <div key={category} style={{ animationDelay: `${idx * 100}ms` }}>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 capitalize">
                      {category}
                    </h3>
                    <ul className="space-y-3">
                      {links.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="group flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors"></div>
                            <span>{link.name}</span>
                            <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="relative my-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-semibold py-2 rounded-full">
                GraVideo Pro
              </span>
            </div>
          </div>

          

          {/* Copyright & Legal */}
          <div className="mt-8 pt-8 border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-600">
                  © {new Date().getFullYear()} GraVideo Pro. All rights reserved.
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  This service is for personal use only. Please respect copyright laws.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Terms of Service
                </Link>
                <Link href="/dmca" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  DMCA
                </Link>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">1M+</div>
              <div className="text-sm text-gray-600">Downloads</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">50+</div>
              <div className="text-sm text-gray-600">Platforms</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-emerald-600">99.9%</div>
              <div className="text-sm text-gray-600">Uptime</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-amber-600">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 border-t border-gray-200">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-600">
                Trusted by users worldwide
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">SSL Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">No Ads</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">No Login</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}