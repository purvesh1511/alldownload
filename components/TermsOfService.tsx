"use client";

import { useState } from "react";
import Link from "next/link";

export function TermsOfService() {
  const [activeSection, setActiveSection] = useState<string>("acceptance");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      content: `By accessing and using VideoDownloader Pro (the "Service"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this Service.

      **Effective Date**: ${new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })}

      These Terms of Service govern your use of our video downloading service and constitute a legally binding agreement between you and VideoDownloader Pro.`
    },
    {
      id: "service-description",
      title: "Service Description",
      content: `VideoDownloader Pro is a web-based service that allows users to download videos from various social media and video platforms. Our service:

      1. **Free Service**: Basic video downloading is completely free
      2. **Platform Support**: Supports multiple video platforms
      3. **Format Options**: Various video and audio formats available
      4. **No Registration**: No account creation required

      We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time without prior notice.`
    },
    {
      id: "user-obligations",
      title: "User Obligations",
      content: `As a user of our Service, you agree to:

      • **Legal Use**: Use the Service only for lawful purposes
      • **Copyright Compliance**: Only download content you have rights to
      • **No Abuse**: Not overload or interfere with our systems
      • **Personal Use**: Use for personal, non-commercial purposes only
      • **No Redistribution**: Not redistribute downloaded content commercially

      **Prohibited Activities:**
      - Downloading copyrighted content without permission
      - Using the Service for commercial redistribution
      - Automated mass downloads
      - Any illegal activities using our Service`
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      content: `**Our Intellectual Property:**
      The Service, including all content, features, and functionality, is owned by VideoDownloader Pro and protected by copyright, trademark, and other intellectual property laws.

      **Your Content:**
      You retain all rights to the videos you download through our Service. We do not claim any ownership rights in the content you download.

      **Third-Party Content:**
      Our Service allows access to third-party content. We do not endorse or claim ownership of such content. You are responsible for ensuring you have the right to download any third-party content.`
    },
    {
      id: "limitations",
      title: "Limitations of Liability",
      content: `**Disclaimer of Warranties:**
      The Service is provided "as is" and "as available" without warranties of any kind. We do not guarantee:
      - Continuous, uninterrupted, or secure access to our Service
      - Compatibility with all devices or browsers
      - Availability of all features at all times

      **Limitation of Liability:**
      To the maximum extent permitted by law, VideoDownloader Pro shall not be liable for:
      - Any direct, indirect, incidental, or consequential damages
      - Loss of data or profits
      - Service interruptions or delays
      - Content accuracy or availability

      **Maximum Liability:**
      Our total liability shall not exceed the amount you have paid us for the Service (which is $0, as the Service is free).`
    },
    {
      id: "privacy",
      title: "Privacy",
      content: `Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information.

      **Key Privacy Points:**
      • We do not store downloaded videos
      • We do not require personal information
      • We use minimal data for service operation
      • We employ security measures to protect data

      By using our Service, you consent to our collection and use of information as described in our Privacy Policy.

      For complete details, please review our [Privacy Policy](/privacy).`
    },
    {
      id: "termination",
      title: "Termination",
      content: `We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including:

      • Violation of these Terms
      • Suspicious or abusive activity
      • Legal requirements
      • Service maintenance or upgrades

      **User Termination:**
      You may stop using our Service at any time.

      **Effect of Termination:**
      Upon termination, your right to use the Service will immediately cease. Any provisions that by their nature should survive termination shall survive.`
    },
    {
      id: "modifications",
      title: "Modifications to Terms",
      content: `We reserve the right to modify these Terms at any time. When we do, we will:

      1. Update the "Effective Date" at the top of these Terms
      2. Post the updated Terms on this page
      3. Notify users of material changes

      **Your Continued Use:**
      Your continued use of the Service after any modifications constitutes acceptance of the updated Terms.

      **Review Responsibility:**
      You are responsible for periodically reviewing these Terms to stay informed of updates.

      We encourage you to check this page regularly for any changes.`
    },
    {
      id: "third-party",
      title: "Third-Party Services",
      content: `Our Service may contain links to third-party websites or services that are not owned or controlled by VideoDownloader Pro.

      **No Control:**
      We have no control over, and assume no responsibility for:
      • The content, privacy policies, or practices of any third-party sites
      • Any damages or losses caused by third-party services

      **Third-Party Terms:**
      You acknowledge and agree that we shall not be responsible or liable for any third-party terms or conditions.

      **Recommendation:**
      We strongly advise you to read the terms and conditions and privacy policies of any third-party services you visit.`
    },
    {
      id: "governing-law",
      title: "Governing Law",
      content: `These Terms shall be governed and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.

      **Jurisdiction:**
      Any legal suit, action, or proceeding arising out of or related to these Terms shall be instituted exclusively in the federal or state courts located in San Francisco County, California.

      **International Use:**
      If you access the Service from outside the United States, you are responsible for compliance with local laws.

      **Severability:**
      If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will remain in effect.`
    },
    {
      id: "contact",
      title: "Contact Information",
      content: `If you have any questions about these Terms, please contact us:

      **Email**: legal@videodownloader.com
      **Address**: Legal Department
      VideoDownloader Pro
      123 Tech Street
      San Francisco, CA 94107
      United States

      **Response Time:**
      We aim to respond to all legal inquiries within 5 business days.

      **Notice:**
      Official legal notices should be sent to the address above.`
    }
  ];

  const keyPoints = [
    {
      title: "Free Service",
      description: "No charges for basic downloading",
      icon: "💰",
      important: true
    },
    {
      title: "Personal Use",
      description: "Commercial redistribution prohibited",
      icon: "👤",
      important: true
    },
    {
      title: "No Warranties",
      description: "Service provided as-is",
      icon: "⚠️",
      important: false
    },
    {
      title: "Copyright Respect",
      description: "Only download content you have rights to",
      icon: "©️",
      important: true
    },
    {
      title: "No Registration",
      description: "Use without creating an account",
      icon: "🚫",
      important: false
    },
    {
      title: "Modification Rights",
      description: "Terms may be updated periodically",
      icon: "📝",
      important: false
    }
  ];

  const commonQuestions = [
    {
      question: "Is the service really free?",
      answer: "Yes, VideoDownloader Pro is completely free for personal use. We do not charge any fees for basic video downloading services."
    },
    {
      question: "Can I use downloaded videos commercially?",
      answer: "No, our Service is for personal, non-commercial use only. Commercial redistribution of downloaded content is prohibited."
    },
    {
      question: "Do I own the videos I download?",
      answer: "You retain ownership of content you have rights to. We do not claim any ownership over downloaded videos."
    },
    {
      question: "Can I download copyrighted content?",
      answer: "Only if you have permission from the copyright holder or if it falls under fair use. We do not condone copyright infringement."
    },
    {
      question: "Is my download activity tracked?",
      answer: "We process video URLs for downloading but do not store download history. See our Privacy Policy for details."
    },
    {
      question: "What happens if I violate the terms?",
      answer: "We may suspend or terminate your access to the Service if you violate these Terms."
    }
  ];

  const handleAcceptTerms = () => {
    setAcceptedTerms(true);
    // In a real app, this would store acceptance in localStorage or send to server
    alert("Thank you for accepting our Terms of Service! You can continue using our service.");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:legal@videodownloader.com";
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
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-gradient bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
                Legal Terms
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
                Terms of Service
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using our video downloading service. By using our service, you agree to be bound by these terms.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => document.getElementById('key-points')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Key Points
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section id="key-points" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Key Terms Summary
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important points from our Terms of Service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyPoints.map((point, index) => (
              <div
                key={index}
                className={`group relative ${point.important ? 'ring-2 ring-blue-200' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`relative bg-white rounded-2xl border ${
                  point.important ? 'border-blue-300' : 'border-gray-200'
                } p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}>
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${
                      point.important 
                        ? 'bg-gradient-to-r from-blue-100 to-cyan-100' 
                        : 'bg-gray-100'
                    } flex items-center justify-center text-2xl`}>
                      {point.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">
                          {point.title}
                        </h3>
                        {point.important && (
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                            Important
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm">
                        {point.description}
                      </p>
                    </div>
                  </div>
                  <div className={`mt-6 h-1 w-0 ${
                    point.important 
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500' 
                      : 'bg-gray-300'
                  } group-hover:w-full transition-all duration-500 rounded-full`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Acceptance Box */}
          <div className="mt-16">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-white rounded-2xl border border-gray-200 p-8 shadow-xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        Accept Terms of Service
                      </h3>
                      <p className="text-gray-600">
                        By clicking below, you acknowledge that you have read and agree to our Terms
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleAcceptTerms}
                    disabled={acceptedTerms}
                    className={`px-8 py-4 font-semibold rounded-xl transition-all duration-300 ${
                      acceptedTerms
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white cursor-default'
                        : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-xl hover:scale-105'
                    }`}
                  >
                    {acceptedTerms ? '✓ Terms Accepted' : 'I Accept the Terms'}
                  </button>
                </div>
                {acceptedTerms && (
                  <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-green-700">Thank you for accepting our Terms!</p>
                        <p className="text-sm text-green-600">You can continue using our service.</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
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
                <h3 className="text-lg font-bold text-gray-900 mb-4">Table of Contents</h3>
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

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Quick Links</h4>
                  <div className="space-y-2">
                    <button
                      onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Common Questions
                    </button>
                    <Link
                      href="/privacy"
                      className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Privacy Policy
                    </Link>
                    <button
                      onClick={handleEmailClick}
                      className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Legal Questions
                    </button>
                  </div>
                </div>
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
                        <div className={`w-10 h-10 rounded-xl ${
                          section.id === 'user-obligations' || section.id === 'limitations' 
                            ? 'bg-gradient-to-r from-red-100 to-pink-100' 
                            : 'bg-gradient-to-r from-blue-100 to-cyan-100'
                        } flex items-center justify-center`}>
                          <svg className={`w-5 h-5 ${
                            section.id === 'user-obligations' || section.id === 'limitations' 
                              ? 'text-red-600' 
                              : 'text-blue-600'
                          }`} fill="currentColor" viewBox="0 0 20 20">
                            {section.id === 'user-obligations' || section.id === 'limitations' ? (
                              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            ) : (
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            )}
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
                            Section {sections.findIndex(s => s.id === section.id) + 1} of {sections.length}
                          </span>
                          <div className="flex items-center gap-2">
                            {(section.id === 'user-obligations' || section.id === 'limitations') && (
                              <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
                                Important
                              </span>
                            )}
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

      

      {/* Legal Contact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-white rounded-3xl border border-gray-200 p-8 md:p-12 shadow-2xl">
              <div className="text-center max-w-3xl mx-auto">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z" clipRule="evenodd" />
                  </svg>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Legal Inquiries
                </h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  For legal questions, DMCA takedown requests, or other legal matters, please contact our legal department.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => window.print()}
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-blue-300 hover:text-blue-600 hover:shadow-lg transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    Print These Terms
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}