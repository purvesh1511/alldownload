"use client";

import { useState } from "react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const faqs = [
    {
      question: "Is this video downloader completely free to use?",
      answer: "Yes! Our video downloader is 100% free with no hidden costs. There are no download limits, no watermarks added, and no registration required. You can download as many videos as you want without any restrictions. We believe in providing premium service without charging our users.",
      icon: "💰",
      category: "pricing",
      tags: ["Free", "No Limits", "No Registration"]
    },
    {
      question: "Which platforms and websites are supported?",
      answer: "We support all major social media and video platforms including YouTube, Instagram, TikTok, Facebook, Twitter, LinkedIn, Vimeo, Dailymotion, Twitch clips, Reddit videos, and many more. Our tool is regularly updated to support new platforms as they emerge. If there's a platform we don't support yet, let us know!",
      icon: "🌐",
      category: "platforms",
      tags: ["YouTube", "Instagram", "TikTok", "Facebook"]
    },
    {
      question: "What video formats and qualities are available?",
      answer: "You can download videos in MP4 (HD, Full HD, 4K), WebM, and MP3 audio formats. We support resolutions from 144p up to 4K (3840×2160), depending on the source video quality. Audio extraction is available in 128kbps, 192kbps, and 320kbps MP3 quality. All formats maintain original quality without compression.",
      icon: "🎬",
      category: "formats",
      tags: ["MP4", "4K", "MP3", "WebM"]
    },
    {
      question: "Can I download YouTube Shorts, Reels, and TikTok videos?",
      answer: "Absolutely! Our downloader supports all short-form video content including YouTube Shorts, Instagram Reels, TikTok videos, and Facebook Shorts. They download in their original quality without watermarks. The process is exactly the same - just paste the link and download!",
      icon: "⏱️",
      category: "shorts",
      tags: ["Shorts", "Reels", "TikTok", "Short-form"]
    },
    {
      question: "Is it legal to download videos using this tool?",
      answer: "Our tool is designed for personal use and downloading content you have the right to download. We encourage users to respect copyright laws and only download videos for personal, non-commercial use. Always check the platform's terms of service. We don't condone copyright infringement.",
      icon: "⚖️",
      category: "legal",
      tags: ["Legal", "Copyright", "Personal Use"]
    },
    {
      question: "How fast are the downloads?",
      answer: "Downloads are typically very fast, limited only by your internet connection speed. We use optimized servers that can handle high-speed downloads even for large 4K video files. Most HD videos download in under a minute, while 4K videos may take 2-3 minutes depending on size.",
      icon: "⚡",
      category: "speed",
      tags: ["Fast", "No Limits", "High-speed"]
    },
    {
      question: "Do you support batch downloads or playlists?",
      answer: "Currently, we support downloading individual videos. Playlist and batch downloading features are in development and will be available soon. You can download each video from a playlist separately for now. Stay tuned for updates!",
      icon: "📦",
      category: "features",
      tags: ["Individual", "Coming Soon", "Playlists"]
    },
    {
      question: "Is my data and privacy protected?",
      answer: "Yes! We never store your downloaded videos on our servers. All processing happens in real-time and videos are deleted immediately after download. We don't collect personal information and use SSL encryption for all transfers. Your privacy is our top priority.",
      icon: "🔒",
      category: "privacy",
      tags: ["Secure", "Private", "No Tracking"]
    },
    {
      question: "Do downloaded videos have watermarks?",
      answer: "No watermarks are added to your downloaded videos. Videos are downloaded in their original quality exactly as they appear on the source platform. If the original video has a platform watermark, it will remain as-is. We never add our own branding.",
      icon: "✨",
      category: "quality",
      tags: ["No Watermarks", "Original Quality", "Clean"]
    },
    {
      question: "Can I use this on mobile devices?",
      answer: "Yes! Our website is fully responsive and works perfectly on all devices including smartphones and tablets. You can download videos directly to your mobile device without needing to install any apps. The interface automatically adapts to your screen size.",
      icon: "📱",
      category: "mobile",
      tags: ["Mobile", "Responsive", "No App Needed"]
    },
    {
      question: "What's the maximum video size I can download?",
      answer: "There's no maximum size limit! You can download videos of any length and size. However, very large files (over 2GB) might take longer to process depending on your internet speed. We support videos of all durations from short clips to full movies.",
      icon: "📏",
      category: "limitations",
      tags: ["No Limits", "Any Size", "All Durations"]
    },
    {
      question: "Do I need to create an account?",
      answer: "No account creation is required! You can start downloading immediately without any registration. We don't ask for email addresses or personal information. Just paste the link and download - it's that simple!",
      icon: "👤",
      category: "account",
      tags: ["No Account", "Instant", "No Login"]
    }
  ];

  const categories = [
    { id: "all", label: "All Questions", count: faqs.length },
    { id: "pricing", label: "Pricing", count: faqs.filter(f => f.category === "pricing").length },
    { id: "platforms", label: "Platforms", count: faqs.filter(f => f.category === "platforms").length },
    { id: "formats", label: "Formats", count: faqs.filter(f => f.category === "formats").length },
    { id: "legal", label: "Legal", count: faqs.filter(f => f.category === "legal").length },
    { id: "privacy", label: "Privacy", count: faqs.filter(f => f.category === "privacy").length },
  ];

  const filteredFaqs = activeCategory === "all" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case "pricing": return "from-green-500 to-emerald-500";
      case "platforms": return "from-blue-500 to-cyan-500";
      case "formats": return "from-purple-500 to-pink-500";
      case "legal": return "from-amber-500 to-orange-500";
      case "privacy": return "from-indigo-500 to-blue-500";
      case "shorts": return "from-rose-500 to-pink-500";
      case "speed": return "from-cyan-500 to-blue-500";
      case "features": return "from-violet-500 to-purple-500";
      case "quality": return "from-emerald-500 to-green-500";
      case "mobile": return "from-orange-500 to-amber-500";
      case "limitations": return "from-gray-500 to-slate-500";
      case "account": return "from-sky-500 to-blue-500";
      default: return "from-gray-500 to-slate-500";
    }
  };

  const getCategoryBg = (category: string) => {
    switch(category) {
      case "pricing": return "bg-gradient-to-br from-green-50 to-emerald-50";
      case "platforms": return "bg-gradient-to-br from-blue-50 to-cyan-50";
      case "formats": return "bg-gradient-to-br from-purple-50 to-pink-50";
      case "legal": return "bg-gradient-to-br from-amber-50 to-orange-50";
      case "privacy": return "bg-gradient-to-br from-indigo-50 to-blue-50";
      case "shorts": return "bg-gradient-to-br from-rose-50 to-pink-50";
      case "speed": return "bg-gradient-to-br from-cyan-50 to-blue-50";
      case "features": return "bg-gradient-to-br from-violet-50 to-purple-50";
      case "quality": return "bg-gradient-to-br from-emerald-50 to-green-50";
      case "mobile": return "bg-gradient-to-br from-orange-50 to-amber-50";
      case "limitations": return "bg-gradient-to-br from-gray-50 to-slate-50";
      case "account": return "bg-gradient-to-br from-sky-50 to-blue-50";
      default: return "bg-gradient-to-br from-gray-50 to-slate-50";
    }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full border border-blue-200">
            <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-gradient bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
              Need Help?
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
              Frequently Asked
            </span>
            <br />
            <span className="text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text animate-gradient">
              Questions
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find quick answers to common questions about our video downloader service
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setOpenIndex(0);
                }}
                className={`group relative px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "text-white shadow-lg"
                    : "bg-white border border-gray-200 text-gray-700 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {activeCategory === category.id && (
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${getCategoryColor(category.id)} opacity-100`}></div>
                )}
                <div className="relative flex items-center gap-2">
                  <span>{category.label}</span>
                  <span className={`px-2 py-0.5 text-xs rounded-full ${
                    activeCategory === category.id 
                      ? "bg-white/20" 
                      : "bg-gray-100 text-gray-600"
                  }`}>
                    {category.count}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div
                  className={`bg-white rounded-2xl border transition-all duration-500 overflow-hidden ${
                    openIndex === index
                      ? `border-gradient shadow-2xl`
                      : "border-gray-200 shadow-lg hover:shadow-xl hover:border-gray-300"
                  }`}
                >
                  {/* FAQ Header */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-4 hover:bg-gray-50/50 transition-colors duration-300 group/button"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${getCategoryBg(faq.category)} flex items-center justify-center text-2xl group-hover/button:scale-110 transition-transform duration-300`}>
                        {faq.icon}
                      </div>

                      {/* Question */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(faq.category)} text-white`}>
                            {faq.category.charAt(0).toUpperCase() + faq.category.slice(1)}
                          </span>
                          {faq.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    {/* Toggle Button */}
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${
                      openIndex === index 
                        ? `bg-gradient-to-r ${getCategoryColor(faq.category)} border-transparent text-white` 
                        : "border-gray-200 text-gray-500 group-hover/button:border-blue-300"
                    }`}>
                      <svg
                        className={`w-5 h-5 transition-transform duration-500 ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* FAQ Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      openIndex === index
                        ? "max-h-[1000px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8">
                      <div className="pl-16 border-l-2 border-gradient">
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {faq.answer}
                        </p>
                        
                        {/* Additional info based on category */}
                        {faq.category === "platforms" && (
                          <div className="mt-6">
                            <p className="text-sm font-medium text-gray-700 mb-3">Fully Supported Platforms:</p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                              {["YouTube", "Instagram", "TikTok", "Facebook", "Twitter/X", "LinkedIn", "Vimeo", "Dailymotion"].map((platform) => (
                                <div
                                  key={platform}
                                  className="p-2 bg-blue-50 rounded-lg text-center group-hover:bg-blue-100 transition-colors"
                                >
                                  <span className="text-sm font-medium text-blue-700">{platform}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {faq.category === "formats" && (
                          <div className="mt-6">
                            <p className="text-sm font-medium text-gray-700 mb-3">Available Quality Options:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl">
                                <div className="font-semibold text-blue-700 mb-1">Video Formats</div>
                                <div className="text-sm text-gray-600">MP4, WebM, AVI, MOV</div>
                              </div>
                              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl">
                                <div className="font-semibold text-purple-700 mb-1">Audio Formats</div>
                                <div className="text-sm text-gray-600">MP3, M4A, WAV, OGG</div>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {faq.category === "pricing" && (
                          <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                                <span className="text-green-600">✓</span>
                              </div>
                              <div>
                                <p className="font-semibold text-green-700">100% Free Forever</p>
                                <p className="text-sm text-gray-600">No hidden fees, no premium plans</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Still have questions? */}
        <div className="mt-20 text-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000 animate-pulse"></div>
            <div className="relative bg-white rounded-3xl border border-gray-200 p-8 md:p-12 shadow-2xl">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6 flex items-center justify-center animate-bounce-subtle">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Can't find the answer you're looking for? Our support team is here to help you 24/7.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@videodownloader.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 group/email"
                >
                  <svg className="w-5 h-5 group-hover/email:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Support
                  <svg className="w-4 h-4 opacity-0 group-hover/email:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-blue-300 hover:text-blue-600 hover:shadow-lg transition-all duration-300 group/docs"
                >
                  <svg className="w-5 h-5 group-hover/docs:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Read Documentation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl border border-gray-200 p-8 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900">
              Quick Tips for Best Experience
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  tip: "Use High-Speed Internet",
                  description: "For faster 4K video downloads and smoother experience",
                  icon: "⚡",
                  color: "from-yellow-500 to-amber-500"
                },
                {
                  tip: "Copy Original URL",
                  description: "Always copy the exact video URL from address bar",
                  icon: "📋",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  tip: "Check Video Quality",
                  description: "Select the highest available quality for best results",
                  icon: "🔍",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  tip: "Use Latest Browser",
                  description: "Update browser for optimal performance and security",
                  icon: "🌐",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  tip: "Save Storage Space",
                  description: "Choose appropriate quality to manage device storage",
                  icon: "💾",
                  color: "from-indigo-500 to-blue-500"
                },
                {
                  tip: "Keep Page Open",
                  description: "Don't close browser tab during download process",
                  icon: "📱",
                  color: "from-rose-500 to-pink-500"
                }
              ].map((tip, index) => (
                <div
                  key={index}
                  className="group/tip bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${tip.color} bg-opacity-10 group-hover/tip:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{tip.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 group-hover/tip:text-blue-600 transition-colors">
                        {tip.tip}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {tip.description}
                      </p>
                    </div>
                  </div>
                  <div className={`mt-4 h-1 w-0 bg-gradient-to-r ${tip.color} group-hover/tip:w-full transition-all duration-500 rounded-full`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Stats */}
        <div className="mt-16 text-center">
          <div className="inline-grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text mb-2">
                {faqs.length}+
              </div>
              <div className="text-sm text-gray-600">Questions Answered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-2">
                24/7
              </div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text mb-2">
                99%
              </div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text mb-2">
                5 min
              </div>
              <div className="text-sm text-gray-600">Avg. Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}