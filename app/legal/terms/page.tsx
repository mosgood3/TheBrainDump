'use client';

import Layout from '../../../components/layout/Layout';

export default function TermsOfServicePage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-600 mb-8">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 mb-4">
                These Terms of Service (&quot;Terms&quot;) govern your use of TheBrainDump, operated by theBrainDump LLC (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). 
                By accessing or using our service, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-700">
                If you do not agree to these Terms, please do not use our service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-700 mb-4">
                TheBrainDump is a web-based platform that provides:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Anxiety assessment tools and questionnaires</li>
                <li>LLM interactive lessons</li>
                <li>Progress tracking and monitoring tools</li>
                <li>Educational content about anxiety management</li>
                <li>Self-help resources and coping strategies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Medical Disclaimer</h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-4">
                <p className="text-red-800 font-semibold mb-2">IMPORTANT MEDICAL DISCLAIMER:</p>
                <p className="text-red-700">
                  TheBrainDump is NOT a substitute for professional medical advice, diagnosis, or treatment. 
                  Our service provides educational and self-help resources only. Always seek the advice of your physician 
                  or other qualified health provider with any questions regarding a medical condition.
                </p>
              </div>
              <p className="text-gray-700">
                Never disregard professional medical advice or delay seeking it because of something you have read on our platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Accounts and Eligibility</h2>
              <h3 className="text-xl font-medium text-gray-900 mb-3">4.1 Age Requirement</h3>
              <p className="text-gray-700 mb-4">
                You must be at least 18 years old to use our service. Users under 18 require parental or guardian consent.
              </p>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">4.2 Account Security</h3>
              <p className="text-gray-700 mb-4">You are responsible for:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized access</li>
                <li>Providing accurate and current information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Acceptable Use</h2>
              <h3 className="text-xl font-medium text-gray-900 mb-3">5.1 Permitted Use</h3>
              <p className="text-gray-700 mb-4">You may use our service for:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                <li>Personal anxiety management and self-improvement</li>
                <li>Educational purposes related to mental health</li>
                <li>Tracking your recovery progress</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.2 Prohibited Use</h3>
              <p className="text-gray-700 mb-4">You may NOT:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Use the service for any illegal or unauthorized purpose</li>
                <li>Share your account with others</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the service</li>
                <li>Use automated tools to access the service</li>
                <li>Reverse engineer or attempt to extract source code</li>
                <li>Share or redistribute content without permission</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Payment Terms</h2>
              <h3 className="text-xl font-medium text-gray-900 mb-3">6.1 Subscription Fees</h3>
              <p className="text-gray-700 mb-4">
                Certain features require payment. All fees are processed securely through Stripe and are non-refundable unless otherwise stated.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">6.2 Billing</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                <li>Subscriptions automatically renew unless cancelled</li>
                <li>You&apos;re responsible for all charges incurred</li>
                <li>Price changes will be communicated in advance</li>
                <li>Failed payments may result in service suspension</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">6.3 Cancellation</h3>
              <p className="text-gray-700">
                You may cancel your subscription at any time through your account settings. 
                Cancellation takes effect at the end of your current billing period.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Intellectual Property</h2>
              <h3 className="text-xl font-medium text-gray-900 mb-3">7.1 Our Content</h3>
              <p className="text-gray-700 mb-4">
                All content, including text, graphics, logos, and software, is owned by theBrainDump LLC and protected by intellectual property laws.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">7.2 Your Content</h3>
              <p className="text-gray-700 mb-4">
                You retain ownership of content you submit (assessment responses, progress data). 
                By using our service, you grant us a license to use this content to provide and improve our service.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">7.3 LLM Interactive Content</h3>
              <p className="text-gray-700">
                Interactive lessons and recommendations generated by our LLM system are provided for informational purposes only. 
                While personalized, they are not professional medical advice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Privacy and Data Protection</h2>
              <p className="text-gray-700">
                Your privacy is important to us. Our collection and use of your information is governed by our 
                <a href="/legal/privacy" className="text-blue-600 hover:underline ml-1">Privacy Policy</a>, 
                which is incorporated into these Terms by reference.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Disclaimers and Limitation of Liability</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-4">
                <p className="text-yellow-800 font-semibold mb-2">DISCLAIMER:</p>
                <p className="text-yellow-800">
                  THE SERVICE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND. 
                  WE DO NOT GUARANTEE THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
                </p>
              </div>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">9.1 Limitation of Liability</h3>
              <p className="text-gray-700">
                To the fullest extent permitted by law, theBrainDump LLC shall not be liable for any indirect, incidental, 
                special, or consequential damages arising from your use of the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Crisis Situations</h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-4">
                <p className="text-red-800 font-semibold mb-2">EMERGENCY SITUATIONS:</p>
                <p className="text-red-700 mb-2">
                  If you are experiencing a mental health crisis or having thoughts of self-harm, 
                  DO NOT rely on this service for immediate help.
                </p>
                <p className="text-red-700">
                  <strong>Contact emergency services immediately:</strong>
                </p>
                <ul className="list-disc list-inside text-red-700 mt-2 space-y-1">
                  <li><strong>988</strong> - Suicide &amp; Crisis Lifeline</li>
                  <li><strong>911</strong> - Emergency Services</li>
                  <li>Go to your nearest emergency room</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Termination</h2>
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your account at any time for violations of these Terms. 
                You may terminate your account at any time by contacting us.
              </p>
              <p className="text-gray-700">
                Upon termination, your right to use the service ceases immediately, 
                but certain provisions of these Terms will survive termination.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these Terms at any time. 
                We will notify users of significant changes via email or through the platform. 
                Continued use of the service after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Governing Law</h2>
              <p className="text-gray-700">
                These Terms are governed by the laws of the United States and the state where theBrainDump LLC is incorporated, 
                without regard to conflict of law principles.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service, contact:
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 font-medium">theBrainDump LLC</p>
                <p className="text-gray-700">Email: thebraindumpllc@gmail.com</p>
                <p className="text-gray-700">Subject: Terms of Service Inquiry</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}