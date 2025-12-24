'use client';

import { useState } from 'react';

interface DisclaimerModalProps {
  onAccept: () => Promise<void>;
  isLoading?: boolean;
}

type ViewMode = 'summary' | 'terms' | 'disclaimer' | 'privacy';

export default function DisclaimerModal({ onAccept, isLoading = false }: DisclaimerModalProps) {
  const [isChecked, setIsChecked] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('summary');

  const handleAccept = async () => {
    if (isChecked && !isLoading) {
      await onAccept();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-t-2xl flex-shrink-0">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Important Information</h2>
              <p className="text-blue-100 text-sm">Please review and accept to continue</p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        {viewMode !== 'summary' && (
          <div className="border-b border-gray-200 bg-gray-50 px-6 py-3 flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => setViewMode('summary')}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Summary
            </button>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600 text-sm">
              {viewMode === 'terms' && 'Terms of Service'}
              {viewMode === 'disclaimer' && 'Educational Disclaimer'}
              {viewMode === 'privacy' && 'Privacy Policy'}
            </span>
          </div>
        )}

        {/* Content Area - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6">
          {viewMode === 'summary' && (
            <div className="space-y-6">
              {/* Educational Disclaimer Alert */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Educational Disclaimer
                </h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                  TheBrainDump provides <strong>educational content and tutorials for learning purposes</strong>.
                  This service is designed to help you learn programming and web development skills.
                </p>
              </div>

              {/* Key Points */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">You understand that:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm pl-2">
                  <li>This platform provides <strong>educational content for learning purposes</strong> and practical coding tutorials.</li>
                  <li>Code examples and tutorials are provided <strong>as-is for educational purposes</strong> and may require adaptation for production use.</li>
                  <li>You are responsible for <strong>testing and validating any code</strong> before using it in production environments.</li>
                  <li>Always follow <strong>best practices for security, performance, and scalability</strong> when building production applications.</li>
                </ul>
              </div>

              {/* Legal Documents Links */}
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p className="text-sm text-gray-700 font-medium mb-3">Please review the following documents:</p>

                <button
                  onClick={() => setViewMode('terms')}
                  className="w-full flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all text-left"
                >
                  <span className="font-medium text-gray-900">Terms of Service</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <button
                  onClick={() => setViewMode('disclaimer')}
                  className="w-full flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all text-left"
                >
                  <span className="font-medium text-gray-900">Educational Disclaimer</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <button
                  onClick={() => setViewMode('privacy')}
                  className="w-full flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all text-left"
                >
                  <span className="font-medium text-gray-900">Privacy Policy</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {viewMode === 'terms' && (
            <div className="prose prose-sm max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Terms of Service</h2>
              <p className="text-sm text-gray-600 mb-6">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

              <div className="space-y-6 text-gray-700">
                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Agreement to Terms</h3>
                  <p>These Terms of Service ("Terms") govern your use of TheBrainDump, operated by theBrainDump LLC ("Company," "we," "our," or "us"). By accessing or using our service, you agree to be bound by these Terms.</p>
                  <p className="mt-2">If you do not agree to these Terms, please do not use our service.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Description of Service</h3>
                  <p className="mb-2">TheBrainDump is a web-based platform that provides:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Interactive coding tutorials and lessons</li>
                    <li>Full-stack development courses</li>
                    <li>Progress tracking and completion monitoring</li>
                    <li>Educational content about modern web technologies</li>
                    <li>Code examples and project-based learning</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Educational Purpose</h3>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2">IMPORTANT:</p>
                    <p>TheBrainDump provides educational content for learning programming and web development. Code examples are provided as-is for educational purposes and may require modification, testing, and security reviews before production use. Always follow best practices and industry standards when deploying applications.</p>
                  </div>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">4. User Accounts</h3>
                  <p>To access certain features, you must create an account. You agree to:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Notify us immediately of unauthorized access</li>
                    <li>Accept responsibility for all activities under your account</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Payment Terms</h3>
                  <p>Some features require payment. By subscribing, you agree to:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Pay all fees associated with your subscription</li>
                    <li>Provide accurate payment information</li>
                    <li>Automatic renewal unless cancelled</li>
                    <li>No refunds for partial months or unused content</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">6. User Conduct</h3>
                  <p>You agree not to:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Use the service for any unlawful purpose</li>
                    <li>Share account credentials with others</li>
                    <li>Attempt to reverse engineer or copy our content</li>
                    <li>Interfere with or disrupt the service</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">7. Intellectual Property</h3>
                  <p>All content, features, and functionality are owned by theBrainDump LLC and protected by copyright, trademark, and other intellectual property laws.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">8. Limitation of Liability</h3>
                  <p>To the maximum extent permitted by law, theBrainDump LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">9. Changes to Terms</h3>
                  <p>We reserve the right to modify these Terms at any time. Continued use of the service after changes constitutes acceptance of the new Terms.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">10. Contact Information</h3>
                  <p>For questions about these Terms, contact us at:</p>
                  <p className="mt-2 font-medium">Email: support@thebraindump.com</p>
                </section>
              </div>
            </div>
          )}

          {viewMode === 'disclaimer' && (
            <div className="prose prose-sm max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Educational Disclaimer</h2>
              <p className="text-sm text-gray-600 mb-6">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">IMPORTANT EDUCATIONAL DISCLAIMER</h3>
                <p className="text-gray-800 font-medium mb-3">
                  TheBrainDump provides educational content for learning programming and web development.
                </p>
                <p className="text-gray-700">
                  The code examples, tutorials, and tools provided through this platform are for educational purposes only.
                </p>
              </div>

              <div className="space-y-6 text-gray-700">
                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Educational Content Only</h3>
                  <p className="mb-2">TheBrainDump and its tutorials, code examples, lessons, and resources are designed to provide educational content for learning programming and web development. They are:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>NOT</strong> production-ready code without proper testing and review</li>
                    <li><strong>NOT</strong> intended to be deployed without security audits</li>
                    <li><strong>NOT</strong> a substitute for professional software development consultation</li>
                    <li><strong>NOT</strong> guaranteed to be free from bugs or vulnerabilities</li>
                    <li><strong>NOT</strong> maintained or updated for security patches</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Production Use Disclaimer</h3>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2">Code Review Required:</p>
                    <p>Before using any code from TheBrainDump in production environments, you should perform thorough testing, security reviews, and code audits. Consider consulting with experienced developers for critical applications.</p>
                  </div>
                  <p className="mt-3">You should review and modify code before:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Deploying to production environments</li>
                    <li>Handling sensitive user data</li>
                    <li>Processing payments or financial information</li>
                    <li>Building mission-critical applications</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">3. No Warranty or Guarantee</h3>
                  <p><strong>Code examples and tutorials are provided "as-is" without any warranties or guarantees.</strong></p>
                  <p className="mt-2">We make no guarantees about the accuracy, security, or suitability of code for any particular purpose. Always test and validate thoroughly.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Learning Outcomes</h3>
                  <p className="mb-2">Educational content is designed to teach concepts and techniques:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Learning outcomes vary based on individual effort and background</li>
                    <li>Examples are simplified for educational clarity</li>
                    <li>Production applications require additional considerations</li>
                    <li>Best practices may evolve over time</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Security Considerations</h3>
                  <div className="bg-amber-50 border border-amber-300 rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2">IMPORTANT SECURITY NOTICE:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Always implement proper authentication and authorization</li>
                      <li>Sanitize and validate all user inputs</li>
                      <li>Use environment variables for sensitive credentials</li>
                      <li>Keep dependencies updated and scan for vulnerabilities</li>
                      <li>Follow OWASP security guidelines</li>
                      <li>Implement rate limiting and DDoS protection</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">6. No Guarantees of Results</h3>
                  <p>While our content is based on modern development practices, we make no guarantees about learning outcomes or career advancement. Success depends on many factors including dedication, practice, and prior experience.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">7. No Professional Services</h3>
                  <p>Use of TheBrainDump does not create a professional services relationship. We do not provide consulting, code review, or professional development services through this platform.</p>
                </section>
              </div>
            </div>
          )}

          {viewMode === 'privacy' && (
            <div className="prose prose-sm max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policy</h2>
              <p className="text-sm text-gray-600 mb-6">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

              <div className="space-y-6 text-gray-700">
                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Introduction</h3>
                  <p>theBrainDump LLC ("we," "our," or "us") operates TheBrainDump, a web-based coding education platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.</p>
                  <p className="mt-2">By using TheBrainDump, you consent to the data practices described in this policy.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Information We Collect</h3>

                  <h4 className="text-base font-medium text-gray-900 mb-2 mt-3">2.1 Personal Information</h4>
                  <p className="mb-2">We may collect the following personal information:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Email address and account credentials</li>
                    <li>Name and profile information</li>
                    <li>Course progress and completion data</li>
                    <li>Learning preferences and tutorial interactions</li>
                    <li>Communication preferences</li>
                  </ul>

                  <h4 className="text-base font-medium text-gray-900 mb-2 mt-3">2.2 Usage Data</h4>
                  <p className="mb-2">We automatically collect certain information, including:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Device information and browser type</li>
                    <li>IP address and location data</li>
                    <li>Usage patterns and feature interactions</li>
                    <li>Session duration and frequency</li>
                  </ul>

                  <h4 className="text-base font-medium text-gray-900 mb-2 mt-3">2.3 Learning Data</h4>
                  <p>We collect information about your learning progress, including completed lessons, code submissions, and quiz results. This data is used solely to track your progress and provide personalized learning recommendations.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">3. How We Use Your Information</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Provide and personalize the learning experience</li>
                    <li>Generate tutorials and course recommendations</li>
                    <li>Track your learning progress and achievements</li>
                    <li>Send service-related communications</li>
                    <li>Improve and optimize our platform</li>
                    <li>Ensure platform security and prevent fraud</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Data Sharing and Disclosure</h3>
                  <p className="mb-2">We do not sell your personal information. We may share data with:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Service Providers:</strong> Third-party services for content delivery and analytics</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect rights and safety</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Data Security</h3>
                  <p>We implement industry-standard security measures including:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Secure authentication and access controls</li>
                    <li>Regular security audits and updates</li>
                    <li>Limited employee access to personal data</li>
                  </ul>
                  <p className="mt-2">However, no method of transmission over the Internet is 100% secure.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">6. Your Rights</h3>
                  <p className="mb-2">You have the right to:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Access your personal data</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your data</li>
                    <li>Export your data</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Withdraw consent</li>
                  </ul>
                  <p className="mt-2">To exercise these rights, contact us at support@thebraindump.com</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">7. Data Retention</h3>
                  <p>We retain your personal information for as long as your account is active or as needed to provide services. You may request account deletion at any time.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">8. Third-Party Services</h3>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="font-medium text-gray-900 mb-2">Third-Party Processors:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li><strong>Content Delivery:</strong> Third-party services for hosting and delivery</li>
                      <li><strong>Analytics:</strong> Usage tracking and performance monitoring</li>
                    </ul>
                    <p className="mt-2">These services have their own privacy policies governing their use of your information.</p>
                  </div>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">9. Cookies and Tracking</h3>
                  <p>We use cookies and similar technologies to enhance user experience, analyze usage, and maintain session security. You can control cookie preferences through your browser settings.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">10. Children's Privacy</h3>
                  <p>Our service is not intended for users under 18. We do not knowingly collect information from children. If you believe we have collected data from a child, please contact us immediately.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">11. Changes to Privacy Policy</h3>
                  <p>We may update this Privacy Policy periodically. We will notify users of material changes via email or prominent notice on the platform.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">12. Contact Us</h3>
                  <p>For privacy-related questions or requests:</p>
                  <p className="mt-2 font-medium">Email: support@thebraindump.com</p>
                  <p className="font-medium">Subject: Privacy Policy Inquiry</p>
                </section>
              </div>
            </div>
          )}
        </div>

        {/* Footer - Always visible */}
        {viewMode === 'summary' && (
          <div className="border-t border-gray-200 p-6 flex-shrink-0 bg-gray-50">
            {/* Checkbox */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 mt-0.5 cursor-pointer flex-shrink-0"
                  disabled={isLoading}
                />
                <span className="text-xs text-gray-900 leading-relaxed">
                  I have read and agree to the Terms of Service, Medical Disclaimer, and Privacy Policy.
                </span>
              </label>
            </div>

            {/* Action Button */}
            <button
              onClick={handleAccept}
              disabled={!isChecked || isLoading}
              className={`w-full px-6 py-3 rounded-xl font-semibold transition-all ${
                isChecked && !isLoading
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                'I Accept - Continue to Course'
              )}
            </button>

            {/* Note */}
            <p className="text-xs text-gray-500 text-center mt-3">
              Your acceptance will be securely recorded for legal compliance purposes.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
