'use client';

import Layout from '../../../components/layout/Layout';

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 backdrop-blur-lg rounded-lg shadow-lg shadow-blue-500/10 border border-white/10 p-8">
          <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-400 mb-8">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <p className="text-gray-300 mb-4">
                theBrainDump LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates TheBrainDump, a web-based coding education platform.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
              </p>
              <p className="text-gray-300">
                By using TheBrainDump, you consent to the data practices described in this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-medium text-white mb-3">2.1 Personal Information</h3>
              <p className="text-gray-300 mb-4">We may collect the following personal information:</p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
                <li>Email address and account credentials</li>
                <li>Name and profile information</li>
                <li>Course progress and completion data</li>
                <li>Learning preferences and tutorial interactions</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-medium text-white mb-3">2.2 Usage Data</h3>
              <p className="text-gray-300 mb-4">We automatically collect certain information, including:</p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
                <li>Device information and browser type</li>
                <li>IP address and location data</li>
                <li>Usage patterns and feature interactions</li>
                <li>Session duration and frequency</li>
              </ul>

              <h3 className="text-xl font-medium text-white mb-3">2.3 Learning Data</h3>
              <p className="text-gray-300 mb-4">
                As a coding education platform, we collect learning-related information including:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Lesson completion and quiz results</li>
                <li>Code submissions and project work</li>
                <li>Learning goals and milestones</li>
                <li>Tutorial effectiveness and feedback</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">We use collected information to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Provide personalized coding tutorials and lessons</li>
                <li>Track your learning progress and improve recommendations</li>
                <li>Generate course content and learning paths</li>
                <li>Process payments and manage course access (via Stripe)</li>
                <li>Send important service updates and notifications</li>
                <li>Improve our platform and develop new features</li>
                <li>Ensure platform security and prevent fraud</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">4. Third-Party Services</h2>
              <p className="text-gray-300 mb-4">We use the following third-party services:</p>

              <h3 className="text-xl font-medium text-white mb-3">4.1 Data Storage</h3>
              <p className="text-gray-300 mb-4">
                Your data is stored securely on our servers with encryption at rest and in transit.
              </p>

              <h3 className="text-xl font-medium text-white mb-3">4.2 Stripe (Payment Processing)</h3>
              <p className="text-gray-300 mb-4">
                Payment information is processed securely by Stripe. We do not store your payment details.
                Review Stripe&apos;s privacy policy at: https://stripe.com/privacy
              </p>

              <h3 className="text-xl font-medium text-white mb-3">4.3 Vercel (Hosting)</h3>
              <p className="text-gray-300">
                Our application is hosted on Vercel.
                Review their privacy policy at: https://vercel.com/legal/privacy-policy
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security</h2>
              <p className="text-gray-300 mb-4">
                We implement appropriate security measures to protect your information:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Encryption in transit and at rest</li>
                <li>Secure authentication protocols</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to personal information</li>
                <li>Industry-standard data protection practices</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights</h2>
              <p className="text-gray-300 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Delete your account and associated data</li>
                <li>Export your learning progress data</li>
                <li>Opt-out of non-essential communications</li>
                <li>Withdraw consent for data processing</li>
              </ul>
              <p className="text-gray-300 mt-4">
                To exercise these rights, contact us at: thebraindumpllc@gmail.com
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">7. Data Retention</h2>
              <p className="text-gray-300">
                We retain your information only as long as necessary to provide our services and comply with legal obligations.
                Account data is typically retained for 3 years after account deletion to comply with business and legal requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">8. International Data Transfers</h2>
              <p className="text-gray-300">
                Your information may be processed and stored in the United States and other countries where our service providers operate.
                We ensure appropriate safeguards are in place for international data transfers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">9. Children&apos;s Privacy</h2>
              <p className="text-gray-300">
                Our service is intended for users 13 years and older. We do not knowingly collect personal information from children under 13.
                If we become aware that we have collected such information, we will delete it promptly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">10. Policy Updates</h2>
              <p className="text-gray-300">
                We may update this Privacy Policy periodically. We will notify you of significant changes via email or through the platform.
                Your continued use of the service constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">11. Contact Information</h2>
              <p className="text-gray-300 mb-4">
                For questions about this Privacy Policy or our data practices, contact:
              </p>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-gray-300 font-medium">theBrainDump LLC</p>
                <p className="text-gray-300">Email: thebraindumpllc@gmail.com</p>
                <p className="text-gray-300">Subject: Privacy Policy Inquiry</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}