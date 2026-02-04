"use client";

import { useState } from "react";
import Link from "next/link";

export function About() {  
  const [activeMilestone, setActiveMilestone] = useState<number>(0);

  const milestones = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Founded with a simple goal: make video downloading accessible to everyone. Started as a side project helping friends download YouTube videos.",
      icon: "🚀",
      stats: "100+ users"
    },
    {
      year: "2021",
      title: "Platform Expansion",
      description: "Added support for Instagram, TikTok, and Facebook. Grew to serve thousands of users monthly with improved download speeds.",
      icon: "📈",
      stats: "10K+ users"
    },
    {
      year: "2022",
      title: "Mobile Optimization",
      description: "Completely redesigned for mobile devices. Introduced 4K video support and MP3 audio extraction features.",
      icon: "📱",
      stats: "100K+ users"
    },
    {
      year: "2023",
      title: "Global Reach",
      description: "Expanded to support 50+ platforms. Implemented enterprise-grade security and privacy features for all users.",
      icon: "🌎",
      stats: "1M+ users"
    },
    {
      year: "2024",
      title: "The Future",
      description: "Working on AI-powered features, batch downloads, and advanced video editing tools for the next generation of users.",
      icon: "✨",
      stats: "Coming Soon"
    }
  ];

  const values = [
    {
      title: "Simplicity First",
      description: "We believe technology should be accessible to everyone. Our tools are designed to be intuitive and easy to use, no technical knowledge required.",
      icon: "🎯",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "User Privacy",
      description: "We never store your downloaded videos or personal information. Your privacy is our top priority, and we use industry-leading security practices.",
      icon: "🔒",
      color: "from-emerald-500 to-green-500"
    },
    {
      title: "Free Forever",
      description: "We're committed to keeping our core services completely free. No hidden fees, no premium walls - just reliable video downloading for everyone.",
      icon: "💙",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Continuous Innovation",
      description: "We're constantly improving our platform, adding new features, and expanding support to keep up with the evolving digital landscape.",
      icon: "⚡",
      color: "from-amber-500 to-orange-500"
    }
  ];

  const stats = [
    { label: "Downloads Served", value: "1M+", description: "Videos downloaded by our users" },
    { label: "Platforms Supported", value: "50+", description: "Social media and video platforms" },
    { label: "Countries", value: "150+", description: "Users from around the world" },
    { label: "Uptime", value: "99.9%", description: "Service reliability" },
    { label: "Support Response", value: "<2h", description: "Average response time" },
    { label: "User Satisfaction", value: "98%", description: "Positive user feedback" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full border border-blue-200">
              <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-gradient bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
                Our Story
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
                More Than Just a
              </span>
              <br />
              <span className="text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text animate-gradient">
                Video Downloader
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to make video content accessible to everyone, everywhere. 
              What started as a simple tool has grown into a platform serving millions of users worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section id="our-mission" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-gradient-to-br from-white to-blue-50 rounded-3xl border border-gray-200 p-8 md:p-16 shadow-2xl">
              <div className="text-center max-w-4xl mx-auto">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8 flex items-center justify-center">
                  <span className="text-3xl">🎯</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Our Mission
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                  To democratize access to video content by providing a fast, secure, and completely free 
                  platform for downloading videos from any source. We believe that everyone should have 
                  control over the content they want to save and watch offline.
                </p>
                <div className="mt-12 pt-12 border-t border-gray-200">
                  <p className="text-lg text-gray-600 italic">
                    "We don't just download videos; we empower creators, educators, students, and 
                    everyday users to access content on their own terms."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            By The Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500">
                  {stat.description}
                </div>
                <div className="mt-4 h-1 w-0 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a simple idea to serving millions of users worldwide
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-cyan-200 transform -translate-x-1/2">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent animate-shimmer"></div>
            </div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative group ${
                    index % 2 === 0 ? 'md:pr-1/2 md:pl-0 md:text-right' : 'md:pl-1/2 md:pr-0 md:text-left'
                  }`}
                >
                  {/* Milestone Card */}
                  <div
                    onClick={() => setActiveMilestone(index)}
                    className={`relative bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-500 hover:-translate-y-1 ${
                      activeMilestone === index ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                    }`}
                  >
                    {/* Year Badge */}
                    <div className={`absolute -top-4 ${
                      index % 2 === 0 ? 'md:right-6' : 'md:left-6'
                    } left-6 md:left-auto`}>
                      <div className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-semibold rounded-full">
                        {milestone.year}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center text-3xl mb-6 mx-auto md:mx-0">
                      {milestone.icon}
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {milestone.description}
                      </p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                        {milestone.stats}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className={`absolute top-8 ${
                    index % 2 === 0 ? 'md:right-0 md:left-auto' : 'md:left-0 md:right-auto'
                  } left-6 md:left-1/2 transform -translate-x-1/2 md:translate-x-0`}>
                    <div className={`w-6 h-6 rounded-full border-4 border-white bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg transition-transform duration-300 ${
                      activeMilestone === index ? 'scale-125' : 'group-hover:scale-110'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${value.color} rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500`}></div>
                
                <div className="relative bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 h-full">
                  <div className="text-4xl mb-6">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                  <div className={`mt-6 h-1 w-0 bg-gradient-to-r ${value.color} group-hover:w-full transition-all duration-500 rounded-full`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-1">
              <div className="bg-white rounded-2xl p-8 md:p-12">
                <div className="text-center max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Join Our Community
                  </h2>
                  <p className="text-xl text-gray-600 mb-10">
                    Be part of our journey as we continue to improve and expand our services. 
                    Your feedback helps shape the future of video downloading.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Share Your Feedback
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-blue-300 hover:text-blue-600 hover:shadow-lg transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Join Community Forum
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}