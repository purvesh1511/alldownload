export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Paste Video URL",
      description: "Copy and paste any video link from YouTube, Instagram, TikTok, or other social platforms",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      ),
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50"
    },
    {
      number: 2,
      title: "Choose Format & Quality",
      description: "Select your preferred video format (MP4, WebM) and quality (HD, 4K, Audio only)",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50"
    },
    {
      number: 3,
      title: "Download & Enjoy",
      description: "Click download and get your video instantly. No watermarks, no limits",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-gradient-to-br from-emerald-50 to-green-50"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden" id="how-it-works">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full border border-blue-200">
            <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-gradient bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
              Simple Process
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
              How to Download Videos in
            </span>
            <br />
            <span className="text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text">
              3 Easy Steps
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our video downloader makes it incredibly simple to get your favorite videos in seconds
          </p>
        </div>

        {/* Steps with connecting lines */}
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-emerald-200">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Step Card */}
                <div className="relative h-full bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Step Number with gradient */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                    <div className={`relative w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl ${step.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`text-gradient bg-gradient-to-r ${step.color} bg-clip-text`}>
                      {step.icon}
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>

                  {/* Step Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>

                  {/* Platform Examples for Step 1 */}
                  {step.number === 1 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["YouTube", "Instagram", "TikTok", "Facebook",'LinkedIn','Twitter','Vimeo'].map((platform) => (
                        <span
                          key={platform}
                          className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-100"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Format Options for Step 2 */}
                  {step.number === 2 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["MP4 HD", "MP4 4K", "WebM", "MP3"].map((format) => (
                        <span
                          key={format}
                          className="px-3 py-1 text-xs font-medium bg-purple-50 text-purple-700 rounded-full border border-purple-100"
                        >
                          {format}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Features for Step 3 */}
                  {step.number === 3 && (
                    <div className="mt-4 space-y-2">
                      {["No Watermarks", "No Limits", "High Speed", "Secure"].map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Animated Arrow (for desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                {/* Step indicator for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}