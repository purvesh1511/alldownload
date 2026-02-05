"use client";

import { useState } from "react";
import Link from "next/link";

export function Dmca() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    address: "",
    phone: "",
    copyrightedWork: "",
    infringingURLs: "",
    goodFaith: false,
    accuracy: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to your server
    console.log("DMCA Notice Submitted:", formData);
    setSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        address: "",
        phone: "",
        copyrightedWork: "",
        infringingURLs: "",
        goodFaith: false,
        accuracy: false
      });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const dmcaInfo = [
    {
      title: "What is DMCA?",
      content: "The Digital Millennium Copyright Act (DMCA) is a United States copyright law that implements two 1996 treaties of the World Intellectual Property Organization (WIPO). It criminalizes production and dissemination of technology, devices, or services intended to circumvent measures that control access to copyrighted works.",
      icon: "⚖️"
    },
    {
      title: "Our Policy",
      content: "VideoDownloader Pro respects the intellectual property rights of others and expects its users to do the same. We will respond expeditiously to claims of copyright infringement committed using our service.",
      icon: "🛡️"
    },
    {
      title: "Counter-Notice",
      content: "If you believe your content was removed in error, you may submit a counter-notice. The counter-notice must include specific information as required by the DMCA.",
      icon: "📝"
    }
  ];

  const steps = [
    {
      step: 1,
      title: "Submit Notice",
      description: "Complete the DMCA takedown notice form with required information",
      time: "Immediate"
    },
    {
      step: 2,
      title: "Review",
      description: "Our legal team reviews the notice for completeness and validity",
      time: "24-48 hours"
    },
    {
      step: 3,
      title: "Action",
      description: "If valid, we take appropriate action and notify affected parties",
      time: "Within 48 hours"
    },
    {
      step: 4,
      title: "Resolution",
      description: "Monitor the situation and handle any counter-notices",
      time: "10-14 days"
    }
  ];

  const faqs = [
    {
      question: "What information do I need for a DMCA notice?",
      answer: "You need: 1) Identification of copyrighted work, 2) URLs of infringing material, 3) Your contact information, 4) Good faith statement, 5) Accuracy statement, and 6) Physical or electronic signature."
    },
    {
      question: "How quickly do you respond to DMCA notices?",
      answer: "We typically respond within 24-48 hours of receiving a complete and valid DMCA takedown notice."
    },
    {
      question: "What happens after I submit a DMCA notice?",
      answer: "We review the notice, if valid, we remove or disable access to the infringing material and notify the affected user."
    },
    {
      question: "Can I submit a DMCA notice anonymously?",
      answer: "No, DMCA requires valid contact information. However, your information is kept confidential and only used for DMCA purposes."
    },
    {
      question: "What if someone falsely claims copyright infringement?",
      answer: "You can submit a counter-notice. Knowingly making false claims may result in legal consequences under the DMCA."
    },
    {
      question: "Do you terminate repeat infringers?",
      answer: "Yes, in accordance with our repeat infringer policy, we may terminate users who are repeat infringers of copyright."
    }
  ];

  const handleEmailClick = () => {
    window.location.href = "mailto:dmca@videodownloader.com?subject=DMCA%20Notice";
  };

  const sampleNotice = `SAMPLE DMCA NOTICE:

  To: VideoDownloader Pro DMCA Agent
  From: [Your Full Legal Name]
  Date: [Date]
  
  Subject: DMCA Takedown Notice
  
  1. Identification of copyrighted work:
  [Describe your copyrighted work, include URLs if available]
  
  2. Identification of infringing material:
  [Specific URLs where infringing material can be found]
  
  3. Contact information:
  Name: [Your Full Legal Name]
  Address: [Your Physical Address]
  Phone: [Your Phone Number]
  Email: [Your Email Address]
  
  4. Statements:
  - I have a good faith belief that use of the material is not authorized
  - The information in this notice is accurate
  - I am the copyright owner or authorized to act on their behalf
  
  Signature: [Your Electronic Signature]`;

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
                <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-gradient bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
                Copyright Protection
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
                DMCA & Copyright
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              We respect intellectual property rights and comply with the Digital Millennium Copyright Act (DMCA). Report copyright infringement using the form below.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => document.getElementById('dmca-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Submit DMCA Notice
              </button>
              <button
                onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-blue-300 hover:text-blue-600 hover:shadow-lg transition-all duration-300"
              >
                Learn About Process
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* DMCA Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dmcaInfo.map((info, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 h-full">
                  <div className="text-4xl mb-6">{info.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {info.title}
                  </h3>
                  <p className="text-gray-600">
                    {info.content}
                  </p>
                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section id="process" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              DMCA Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our step-by-step process for handling copyright infringement claims
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 transform -translate-y-1/2">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {step.step}
                      </div>
                    </div>

                    <div className="pt-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-center">
                        {step.description}
                      </p>
                      <div className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-medium text-gray-700">{step.time}</span>
                      </div>
                    </div>

                    {/* Timeline dot for mobile */}
                    <div className="lg:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 rounded-full border-4 border-white bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-white rounded-3xl border border-gray-200 p-8 md:p-12 shadow-2xl">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Designated DMCA Agent
                </h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  For DMCA notices and copyright-related inquiries, please contact our designated agent:
                </p>
                
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 max-w-md mx-auto mb-8">
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">info@gravideo.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">VideoDownloader Pro, 123 Tech Street, San Francisco, CA 94107</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/terms"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-blue-300 hover:text-blue-600 hover:shadow-lg transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    View Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}