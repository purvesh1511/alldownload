"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function HeroSection() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState<any>(null);
  const [error, setError] = useState("");
  const [showVideo, setShowVideo] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleDownload = async () => {
    if (!url.trim()) {
      setError("Please enter a video link");
      setShowError(true);
      return;
    }

    setLoading(true);
    setError("");
    setVideo(null);
    setShowVideo(false);
    setShowError(false);

    try {
      const res = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ videoUrl: url }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to fetch video information");
        setShowError(true);
        return;
      }

      setVideo(data);
      setTimeout(() => setShowVideo(true), 100);
    } catch (err) {
      console.error(err);
      setError("Unable to connect to server. Please try again.");
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !loading) {
      handleDownload();
    }
  };

  return (
    <section className="min-h-screen py-20 px-6 py-5 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden" id="Features">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute top-60 -left-40 w-80 h-80 bg-purple-100 rounded-full opacity-30 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 right-1/3 w-60 h-60 bg-cyan-100 rounded-full opacity-20 blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Hero Header with animation */}
        <div className="text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full border border-blue-200 animate-bounce-subtle">
            <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-gradient bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
              Free & Unlimited Downloads
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text animate-gradient">
              Social Video
            </span>
            <br />
            <span className="text-gradient bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text animate-gradient delay-500">
              Downloader
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Download high-quality videos from YouTube, Instagram, TikTok, 
            Facebook, LinkedIn, and more in just one click
          </p>
        </div>

        {/* Platform Icons */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 md:gap-4 animate-fade-in-up delay-300">
          {["YouTube", "Instagram", "TikTok", "Facebook", "LinkedIn", "Twitter", "Vimeo"].map(
            (platform, index) => (
              <div
                key={platform}
                className={`
                  px-4 py-2 rounded-lg bg-white border border-gray-200 
                  shadow-sm hover:shadow-md hover:border-blue-300 
                  transition-all duration-300 hover:scale-105
                  flex items-center gap-2 group cursor-default
                  animate-slide-up
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                  {platform}
                </span>
              </div>
            )
          )}
        </div>

        {/* URL Input Section */}
        <div className="mt-12 max-w-2xl mx-auto animate-fade-in-up delay-500">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex flex-col sm:flex-row gap-3 bg-white p-2 rounded-2xl border border-gray-200 shadow-lg">
              <div className="relative flex-1">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <Input
                  placeholder="Paste video link here (e.g., https://youtube.com/watch?v=...)"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="pl-12 pr-4 py-6 text-base md:text-lg rounded-xl border-2 border-gray-100 focus:border-blue-300 focus:ring-3 focus:ring-blue-100 transition-all duration-300 bg-gray-50/50"
                  disabled={loading}
                />
              </div>
              <Button
                onClick={handleDownload}
                disabled={loading}
                size="lg"
                className="py-6 px-6 md:px-8 rounded-xl text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Processing...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span>Download</span>
                  </div>
                )}
              </Button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className={`
              mt-6 bg-gradient-to-r from-red-50 to-pink-50 
              border-l-4 border-red-500 rounded-r-lg p-4
              transform transition-all duration-500 ease-out
              ${showError ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}
            `}>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className="text-red-700 font-medium">{error}</p>
              </div>
            </div>
          )}
        </div>

        {/* Video Preview Section */}
        {video && (
          <div className={`
            mt-12 max-w-2xl mx-auto
            transform transition-all duration-700 ease-out
            ${showVideo ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
          `}>
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-2xl border border-gray-200 overflow-hidden hover:shadow-3xl transition-shadow duration-500">
              {/* Thumbnail */}
              {video.thumbnail && (
                <div className="relative overflow-hidden group">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 md:h-64 object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full">
                      <span className="text-white text-sm font-medium">
                        {video.platform || 'Video'}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Video Info */}
              <div className="p-6 md:p-8">
                <div className="mb-6">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
                    {video.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-3">
                    {video.duration && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        {video.duration}
                      </span>
                    )}
                    {video.quality && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
                        </svg>
                        {video.quality}
                      </span>
                    )}
                  </div>
                </div>

                {/* Download Button */}
                <a
                  href={video.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full group relative overflow-hidden rounded-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 group-hover:from-green-600 group-hover:to-emerald-700 transition-all duration-500"></div>
                  <div className="relative py-4 px-6 flex items-center justify-center gap-3">
                    <svg className="w-6 h-6 text-white animate-bounce-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span className="text-white text-lg font-semibold">Download Video Now</span>
                    <svg className="w-5 h-5 text-white ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                </a>

                {/* Additional Info */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {video.size && (
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">File Size</p>
                          <p className="font-semibold text-gray-900">{video.size}</p>
                        </div>
                      </div>
                    )}
                    {video.format && (
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Format</p>
                          <p className="font-semibold text-gray-900">{video.format}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up delay-700">
          {[
            {
              title: "High Quality",
              description: "Download videos in HD & 4K quality with original audio",
              icon: (
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              ),
              color: "from-blue-50 to-cyan-50"
            },
            {
              title: "No Watermarks",
              description: "Clean downloads without any platform watermarks",
              icon: (
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.2 6.5 10.266a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
              ),
              color: "from-purple-50 to-pink-50"
            },
            {
              title: "Fast & Secure",
              description: "Quick downloads with secure SSL encryption",
              icon: (
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ),
              color: "from-green-50 to-emerald-50"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className={`
                p-6 rounded-2xl border border-gray-200 
                bg-gradient-to-br ${feature.color}
                hover:shadow-xl hover:-translate-y-1
                transition-all duration-500
                group
              `}
            >
              <div className="mb-4 transform transition-transform duration-500 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 text-center animate-fade-in-up delay-1000">
          <div className="inline-grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">1M+</div>
              <div className="text-sm text-gray-600">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">50+</div>
              <div className="text-sm text-gray-600">Platforms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600 mb-1">100%</div>
              <div className="text-sm text-gray-600">Free</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Available</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounceSubtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-bounce-subtle {
          animation: bounceSubtle 2s ease-in-out infinite;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
        
        .delay-500 {
          animation-delay: 500ms;
        }
        
        .delay-700 {
          animation-delay: 700ms;
        }
        
        .delay-1000 {
          animation-delay: 1000ms;
        }
        
        .text-gradient {
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}