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
              {viewMode === 'disclaimer' && 'Medical Disclaimer'}
              {viewMode === 'privacy' && 'Privacy Policy'}
            </span>
          </div>
        )}

        {/* Content Area - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6">
          {viewMode === 'summary' && (
            <div className="space-y-6">
              {/* Medical Disclaimer Alert */}
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Medical Disclaimer
                </h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                  TheBrainDump is <strong>NOT a substitute for professional medical advice, diagnosis, or treatment</strong>.
                  This service provides educational and self-help resources only.
                </p>
              </div>

              {/* Key Points */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">You understand that:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm pl-2">
                  <li>This platform provides <strong>educational content only</strong> and does not replace therapy, counseling, or medical care.</li>
                  <li>You should <strong>always consult with qualified healthcare professionals</strong> before making any decisions about your mental health.</li>
                  <li><strong>Never ignore professional medical advice</strong> or delay seeking it because of content on this platform.</li>
                  <li>If you're experiencing a mental health crisis or having thoughts of self-harm, <strong>contact emergency services immediately</strong> (988 Suicide & Crisis Lifeline or 911).</li>
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
                  <span className="font-medium text-gray-900">Medical Disclaimer</span>
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
                    <li>Anxiety assessment tools and questionnaires</li>
                    <li>AI-powered personalized lessons</li>
                    <li>Progress tracking and monitoring tools</li>
                    <li>Educational content about anxiety management</li>
                    <li>Self-help resources and coping strategies</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Medical Disclaimer</h3>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2">IMPORTANT:</p>
                    <p>TheBrainDump is NOT a substitute for professional medical advice, diagnosis, or treatment. Our service provides educational and self-help resources only. Always seek the advice of your physician or other qualified health provider with any questions regarding a medical condition.</p>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Medical Disclaimer</h2>
              <p className="text-sm text-gray-600 mb-6">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

              <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">IMPORTANT MEDICAL DISCLAIMER</h3>
                <p className="text-gray-800 font-medium mb-3">
                  TheBrainDump is NOT a substitute for professional medical advice, diagnosis, or treatment.
                </p>
                <p className="text-gray-700">
                  The information and tools provided through this platform are for educational and self-help purposes only.
                </p>
              </div>

              <div className="space-y-6 text-gray-700">
                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Not Medical Treatment</h3>
                  <p className="mb-2">TheBrainDump and its AI-powered content, assessments, lessons, and resources are designed to provide general information and self-help tools related to anxiety management. They are:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>NOT</strong> a replacement for professional mental health treatment</li>
                    <li><strong>NOT</strong> intended to diagnose any medical or mental health condition</li>
                    <li><strong>NOT</strong> a substitute for therapy, counseling, or psychiatric care</li>
                    <li><strong>NOT</strong> meant to replace medication prescribed by healthcare professionals</li>
                    <li><strong>NOT</strong> emergency mental health services</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Always Consult Healthcare Professionals</h3>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2">Professional Consultation Required:</p>
                    <p>Always seek the advice of your physician, psychiatrist, psychologist, or other qualified health provider with any questions regarding anxiety, mental health conditions, or treatment options.</p>
                  </div>
                  <p className="mt-3">You should consult with healthcare professionals before:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Starting any anxiety management program</li>
                    <li>Making changes to existing treatment or medication</li>
                    <li>Using our techniques if you have severe anxiety or panic disorder</li>
                    <li>Discontinuing any prescribed treatment</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Do Not Ignore Professional Advice</h3>
                  <p><strong>Never disregard professional medical advice or delay in seeking it because of something you read on TheBrainDump.</strong></p>
                  <p className="mt-2">If you think you may have a medical emergency or mental health crisis, call your doctor, 911, or the 988 Suicide & Crisis Lifeline immediately.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">4. AI-Generated Content Limitations</h3>
                  <p className="mb-2">Our personalized lessons are:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Generated by artificial intelligence, not healthcare professionals</li>
                    <li>Based on general principles, not personalized medical assessment</li>
                    <li>Not reviewed by medical professionals before delivery</li>
                    <li>Intended to complement, not replace, professional care</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Emergency Situations</h3>
                  <div className="bg-amber-50 border border-amber-300 rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2">SEEK IMMEDIATE PROFESSIONAL HELP IF YOU EXPERIENCE:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Thoughts of self-harm or suicide</li>
                      <li>Severe panic attacks or anxiety that impairs daily functioning</li>
                      <li>Any mental health crisis or emergency situation</li>
                    </ul>
                    <div className="mt-3 pt-3 border-t border-amber-200">
                      <p className="font-semibold text-gray-900 mb-1">Emergency Resources:</p>
                      <p><strong>988</strong> - Suicide & Crisis Lifeline (24/7)</p>
                      <p><strong>911</strong> - Emergency Services</p>
                      <p>Visit your nearest emergency room</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">6. No Guarantees</h3>
                  <p>While our content is based on evidence-based practices, we make no guarantees about results. Individual outcomes vary, and success depends on many factors including severity of symptoms, consistency of practice, and concurrent professional treatment.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">7. No Doctor-Patient Relationship</h3>
                  <p>Use of TheBrainDump does not create a doctor-patient relationship between you and theBrainDump LLC, its employees, or any healthcare professionals. We do not provide medical advice, diagnosis, or treatment through this platform.</p>
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
                  <p>theBrainDump LLC ("we," "our," or "us") operates TheBrainDump, a web-based anxiety management platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.</p>
                  <p className="mt-2">By using TheBrainDump, you consent to the data practices described in this policy.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Information We Collect</h3>

                  <h4 className="text-base font-medium text-gray-900 mb-2 mt-3">2.1 Personal Information</h4>
                  <p className="mb-2">We may collect the following personal information:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Email address and account credentials</li>
                    <li>Name and profile information</li>
                    <li>Assessment responses and anxiety-related data</li>
                    <li>Recovery plan preferences and progress data</li>
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

                  <h4 className="text-base font-medium text-gray-900 mb-2 mt-3">2.3 Health-Related Information</h4>
                  <p>We collect anxiety-related information through assessments and user inputs. This data is used solely to personalize your experience and provide relevant resources.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">3. How We Use Your Information</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Provide and personalize the service</li>
                    <li>Generate AI-powered lessons and recommendations</li>
                    <li>Track your progress and improvement</li>
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
