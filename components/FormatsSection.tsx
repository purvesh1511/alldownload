export function FormatsSection() {
  const formats = [
    {
      name: "MP4 HD",
      quality: "1080p",
      description: "High Definition video with crisp visuals",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 10v4a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: ["Full HD (1920x1080)", "60 FPS Support", "AAC Audio"]
    },
    {
      name: "MP4 4K",
      quality: "Ultra HD",
      description: "Ultra High Definition for premium viewing",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      features: ["4K Resolution (3840x2160)", "HDR Support", "Surround Sound"]
    },
    {
      name: "MP3 Audio",
      quality: "High Quality",
      description: "Extract audio in crystal clear quality",
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-gradient-to-br from-emerald-50 to-green-50",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
      ),
      features: ["320kbps Bitrate", "ID3 Tags", "Cover Art"]
    },
    {
      name: "WebM/VP9",
      quality: "Modern Format",
      description: "Next-gen format with better compression",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      features: ["VP9 Codec", "Opus Audio", "Smaller File Size"]
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden" id="formats">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full border border-blue-200">
            <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-gradient bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
              Multiple Formats
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text">
              Supported Formats &
            </span>
            <br />
            <span className="text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text">
              Quality Options
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Download videos in various formats and resolutions to suit your needs
          </p>
        </div>

        {/* Formats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {formats.map((format, index) => (
            <div
              key={format.name}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-blue-100 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500 group-hover:duration-200"></div>
              
              {/* Format Card */}
              <div className="relative h-full bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${format.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`text-gradient bg-gradient-to-r ${format.color} bg-clip-text`}>
                    {format.icon}
                  </div>
                </div>

                {/* Format Name & Quality */}
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{format.name}</h3>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${format.color} text-white`}>
                    {format.quality}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6">{format.description}</p>

                {/* Features List */}
                <ul className="space-y-3">
                  {format.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${format.color}`}></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Decorative bottom border */}
                <div className={`mt-6 pt-6 border-t border-gray-100 relative overflow-hidden`}>
                  <div className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r ${format.color} group-hover:w-full transition-all duration-500`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 md:p-8 border border-gray-200 max-w-3xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">No Quality Loss</p>
                <p className="text-sm text-gray-600">Original quality preserved</p>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-8 bg-gray-200"></div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Secure Processing</p>
                <p className="text-sm text-gray-600">SSL encrypted downloads</p>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-8 bg-gray-200"></div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Fast Downloads</p>
                <p className="text-sm text-gray-600">High-speed servers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Comparison */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Quality Comparison
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="pb-4 text-left font-semibold text-gray-700">Format</th>
                    <th className="pb-4 text-left font-semibold text-gray-700">Resolution</th>
                    <th className="pb-4 text-left font-semibold text-gray-700">Best For</th>
                    <th className="pb-4 text-left font-semibold text-gray-700">File Size</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors">
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="font-medium">MP4 HD</span>
                      </div>
                    </td>
                    <td className="py-4 text-gray-700">1920×1080</td>
                    <td className="py-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        Streaming & Sharing
                      </span>
                    </td>
                    <td className="py-4 text-gray-700">~50-100 MB</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-purple-50/50 transition-colors">
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="font-medium">MP4 4K</span>
                      </div>
                    </td>
                    <td className="py-4 text-gray-700">3840×2160</td>
                    <td className="py-4">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                        Premium Viewing
                      </span>
                    </td>
                    <td className="py-4 text-gray-700">~200-500 MB</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-emerald-50/50 transition-colors">
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                        <span className="font-medium">MP3 Audio</span>
                      </div>
                    </td>
                    <td className="py-4 text-gray-700">Audio Only</td>
                    <td className="py-4">
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                        Music & Podcasts
                      </span>
                    </td>
                    <td className="py-4 text-gray-700">~5-10 MB</td>
                  </tr>
                  <tr className="hover:bg-amber-50/50 transition-colors">
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                        <span className="font-medium">WebM/VP9</span>
                      </div>
                    </td>
                    <td className="py-4 text-gray-700">Adaptive</td>
                    <td className="py-4">
                      <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">
                        Web & Mobile
                      </span>
                    </td>
                    <td className="py-4 text-gray-700">~30-70 MB</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}