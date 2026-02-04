"use client";

import { useState } from "react";
import Link from "next/link";

export function Contact() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const contactMethods = [
    {
      title: "Email Support",
      description: "Get help with any issues or questions",
      contact: "support@gravideo.com",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "from-blue-500 to-cyan-500",
      response: "Within 2 hours"
    },
    {
      title: "Live Chat",
      description: "Instant support from our team",
      contact: "Click the chat button below",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      color: "from-purple-500 to-pink-500",
      response: "Instant"
    },
    {
      title: "Community",
      description: "Join discussions with other users",
      contact: "community.gravideo.com",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "from-amber-500 to-orange-500",
      response: "Peer support"
    }
  ];

  const teamMembers = [
    {
      name: "Purvesh",
      role: "Support Lead",
      bio: "Helping users with download issues and platform support",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      expertise: ["YouTube", "Technical Support", "Quality Control"]
    },
    {
      name: "Ali Bhai",
      role: "Platform Specialist",
      bio: "Expert in social media platforms and video formats",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      expertise: ["Instagram", "TikTok", "Format Conversion"]
    },
    {
      name: "Mohmad Bhai",
      role: "Community Manager",
      bio: "Building and engaging with our user community",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      expertise: ["Community", "Documentation", "User Education"]
    }
  ];

  const faqs = [
    {
      question: "What's the best way to contact support?",
      answer: "For urgent issues, use our Live Chat feature. For detailed questions that require file attachments, email is best. Check our Documentation first for common questions.",
      category: "Contact"
    },
    {
      question: "How quickly will I get a response?",
      answer: "Live Chat responses are instant during business hours (9 AM - 6 PM UTC). Email responses typically come within 2 hours. Our community forum has responses within minutes from other users.",
      category: "Response Time"
    },
    {
      question: "Can I request new platform support?",
      answer: "Absolutely! Email our support team with the platform details. We're always expanding our supported platforms based on user requests.",
      category: "Features"
    },
    {
      question: "Do you provide technical support for download issues?",
      answer: "Yes, our technical support team can help with any download issues, format problems, or platform-specific errors you encounter.",
      category: "Support"
    }
  ];

  const handleLiveChat = () => {
    // In a real app, this would open a live chat widget
    alert("Live chat would open here! In a real implementation, this would connect to your chat service.");
  };

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    // Show a toast notification in a real app
    alert(`Copied: ${email}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full border border-blue-200">
              <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-gradient bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
                Get in Touch
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
                Contact Our
              </span>
              <br />
              <span className="text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text">
                Support Team
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-10">
              We're here to help you with any questions about video downloading. 
              Choose the contact method that works best for you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Choose Your Contact Method
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-blue-100 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                
                <div className="relative bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${method.color.replace('from-', 'from-').replace('to-', 'to-')} bg-opacity-10 mb-4`}>
                    <div className={`text-gradient bg-gradient-to-r ${method.color} bg-clip-text`}>
                      {method.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Contact:</span>
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                        {method.response}
                      </span>
                    </div>
                    <div className="mt-2 px-3 py-2 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">{method.contact}</span>
                        {method.title === "Email Support" && (
                          <button
                            onClick={() => handleCopyEmail(method.contact)}
                            className="text-blue-600 hover:text-blue-700 transition-colors"
                            title="Copy email"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={method.title === "Live Chat" ? handleLiveChat : undefined}
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                      method.title === "Live Chat"
                        ? `bg-gradient-to-r ${method.color} text-white hover:shadow-lg hover:scale-105`
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {method.title === "Live Chat" ? "Start Chat" : "Learn More"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Live Chat CTA */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-white rounded-3xl border border-gray-200 p-8 md:p-12 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Need Immediate Help?
                    </h3>
                    <p className="text-gray-600">
                      Our live chat support is available now. Get instant answers to your questions.
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleLiveChat}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Start Live Chat Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50" id="partner">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Meet Our Support Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our dedicated team is here to ensure you have the best video downloading experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="relative w-24 h-24 rounded-2xl mx-auto object-cover border-4 border-white shadow-lg"
                    />
                  </div>

                  {/* Member Info */}
                  <div className="relative text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full mb-4">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                      <span className="text-sm font-medium text-blue-700">{member.role}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{member.bio}</p>

                    {/* Expertise */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Areas of Expertise</h4>
                      <div className="flex flex-wrap justify-center gap-2">
                        {member.expertise.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white border border-gray-200 text-gray-700 text-sm rounded-full hover:border-blue-300 hover:text-blue-600 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl border border-gray-200 p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">
                  123 Tech Street<br />
                  San Francisco, CA 94107<br />
                  United States
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">
                  +1 9725366212<br />
                  Mon-Fri, 9AM-6PM PST
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 9AM - 6PM<br />
                  Saturday: 10AM - 4PM<br />
                  Sunday: Emergency only
                </p>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-gray-200 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need Help with Something Else?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Check our comprehensive documentation or visit our community forum for additional help and resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Visit Community
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}