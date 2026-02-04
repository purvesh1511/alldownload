"use client";

import { useState } from "react";
import Link from "next/link";

export function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState<string>("introduction");

  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      content: `At VideoDownloader Pro, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our video downloading service. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.`
    },
    {
      id: "information-collected",
      title: "Information We Collect",
      content: `We collect minimal information to provide and improve our service:
      
      • **Video URLs**: The video links you paste for downloading
      • **Technical Information**: Browser type, device type, IP address
      • **Usage Data**: Pages visited, features used, download preferences
      
      We do NOT collect:
      • Personal identification information (name, email, phone number)
      • Payment information (our service is completely free)
      • Downloaded video content (processed in real-time and deleted immediately)`
    },
    {
      id: "usage",
      title: "How We Use Information",
      content: `We use the collected information for the following purposes:
      
      1. **Service Delivery**: To process your video download requests
      2. **Improvement**: To analyze usage patterns and improve our service
      3. **Security**: To detect and prevent fraudulent activities
      4. **Compliance**: To comply with legal obligations
      
      All information is processed automatically and anonymously. We do not use your data for advertising or marketing purposes.`
    },
    {
      id: "data-storage",
      title: "Data Storage & Security",
      content: `**Storage Policy:**
      • Video URLs are processed in real-time and immediately discarded
      • No downloaded videos are stored on our servers
      • Temporary processing data is deleted within 24 hours
      
      **Security Measures:**
      • SSL encryption for all data transfers
      • Regular security audits and updates
      • Secure server infrastructure
      • No database storage of user information
      
      **Data Retention:**
      We retain usage statistics (anonymized) for up to 30 days for service improvement purposes, after which they are permanently deleted.`
    },
    {
      id: "third-party",
      title: "Third-Party Services",
      content: `We may use third-party services to help operate our website:
      
      • **Analytics**: Anonymous usage statistics (Google Analytics)
      • **Hosting**: Secure cloud infrastructure providers
      • **CDN**: Content delivery networks for faster service
      
      These third parties have access to your information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose. All third-party services are GDPR compliant where applicable.`
    },
    {
      id: "cookies",
      title: "Cookies & Tracking",
      content: `**Essential Cookies:**
      • Session cookies for basic functionality
      • Security cookies to prevent abuse
      
      **Analytics Cookies:**
      • Anonymous usage statistics
      • Performance monitoring
      
      **No Tracking:**
      • We do not use tracking cookies
      • No behavioral tracking
      • No advertising cookies
      
      You can control cookies through your browser settings. However, disabling essential cookies may affect service functionality.`
    },
    {
      id: "user-rights",
      title: "Your Rights",
      content: `As a user of our service, you have the following rights:
      
      • **Right to Know**: Understand what data we collect
      • **Right to Access**: Request information about your data
      • **Right to Deletion**: Request deletion of any stored data
      • **Right to Object**: Object to specific data processing
      • **Right to Portability**: Request your data in a portable format
      
      To exercise these rights, please contact us at privacy@videodownloader.com. We will respond to all legitimate requests within 30 days.`
    },
    {
      id: "children",
      title: "Children's Privacy",
      content: `Our service is not intended for children under the age of 13. We do not knowingly collect any personal information from children under 13. If you are a parent or guardian and you believe that your child has provided us with personal information, please contact us immediately.
      
      If we become aware that we have collected personal information from children under 13 without verification of parental consent, we take steps to remove that information from our servers.`
    },
    {
      id: "changes",
      title: "Changes to This Policy",
      content: `We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
      
      You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
      
      **Last Updated**: ${new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })}`
    },
    {
      id: "contact",
      title: "Contact Us",
      content: `If you have any questions about this Privacy Policy, please contact us:
      
      • **Email**: privacy@videodownloader.com
      • **Address**: Privacy Team, VideoDownloader Pro
      123 Tech Street, San Francisco, CA 94107
      
      We aim to respond to all privacy-related inquiries within 48 hours.`
    }
  ];

  const privacyPrinciples = [
    {
      principle: "Transparency",
      description: "Clear communication about data practices",
      icon: "🔍"
    },
    {
      principle: "Minimal Collection",
      description: "Only collect what's necessary for service",
      icon: "📊"
    },
    {
      principle: "No Storage",
      description: "Don't store downloaded videos",
      icon: "🗑️"
    },
    {
      principle: "Security First",
      description: "Industry-standard security measures",
      icon: "🔒"
    },
    {
      principle: "User Control",
      description: "You control your data",
      icon: "👤"
    },
    {
      principle: "Legal Compliance",
      description: "Adherence to global privacy laws",
      icon: "⚖️"
    }
  ];

  const faqs = [
    {
      question: "Do you store my downloaded videos?",
      answer: "No, we never store downloaded videos on our servers. All processing happens in real-time, and videos are deleted immediately after you download them."
    },
    {
      question: "Do I need to create an account?",
      answer: "No account creation is required. Our service is completely anonymous and doesn't require any personal information."
    },
    {
      question: "Is my download history tracked?",
      answer: "We don't track or store your download history. Each download session is treated independently and anonymously."
    },
    {
      question: "Can you see what videos I download?",
      answer: "We process video URLs for downloading but do not log or store this information beyond the immediate processing session."
    },
    {
      question: "How is my data protected?",
      answer: "All data transfers use SSL encryption, and our servers are secured with industry-standard security measures."
    },
    {
      question: "Can I request data deletion?",
      answer: "Yes, you can contact us at privacy@videodownloader.com to request deletion of any stored data."
    }
  ];

  const handleEmailClick = () => {
    window.location.href = "mailto:privacy@videodownloader.com";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full border border-blue-200">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-gradient bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
                Privacy First
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
                Privacy Policy
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              We believe in transparency and protecting your privacy. Here's how we handle your data when you use our video downloader service.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => document.getElementById('privacy-principles')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Our Privacy Principles
              </button>
              <button
                onClick={handleEmailClick}
                className="px-8 py-4 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-blue-300 hover:text-blue-600 hover:shadow-lg transition-all duration-300"
              >
                Contact Privacy Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-1xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">On This Page</h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => {
                        setActiveSection(section.id);
                        document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 font-medium border border-blue-200'
                          : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="space-y-12">
                {sections.map((section) => (
                  <div
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-24 group"
                  >
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-500">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center">
                          <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">
                          {section.title}
                        </h2>
                      </div>
                      
                      <div className="prose prose-lg max-w-none">
                        <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                          {section.content}
                        </div>
                      </div>

                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            Section: {section.id}
                          </span>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => {
                                const element = document.getElementById(section.id);
                                if (element) {
                                  element.scrollIntoView({ behavior: 'smooth' });
                                }
                              }}
                              className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
                            >
                              ↗
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section id="privacy-principles" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Our Privacy Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make about your data
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {privacyPrinciples.map((principle, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <div className="text-3xl mb-4">{principle.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {principle.principle}
                  </h3>
                  <p className="text-gray-600">
                    {principle.description}
                  </p>
                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Privacy FAQ
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about your privacy
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">Q</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-gradient-to-r from-emerald-100 to-green-100 flex items-center justify-center mt-1">
                        <span className="text-emerald-600 text-sm">A</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Practices */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl border border-gray-200 p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">What We Do</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Process video URLs</li>
                  <li>• Provide download links</li>
                  <li>• Improve service quality</li>
                  <li>• Ensure security</li>
                </ul>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-pink-500 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">What We Don't Do</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Store downloaded videos</li>
                  <li>• Track download history</li>
                  <li>• Sell user data</li>
                  <li>• Require registration</li>
                </ul>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Your Rights</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Know what data we collect</li>
                  <li>• Access your data</li>
                  <li>• Request data deletion</li>
                  <li>• Object to processing</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-gray-200 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need More Information?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                If you have any questions about our privacy practices that aren't covered here, please don't hesitate to contact our privacy team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleEmailClick}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Privacy Team
                </button>
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-blue-300 hover:text-blue-600 hover:shadow-lg transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  Print This Policy
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}