'use client';

import Layout from '../../../components/layout/Layout';

export default function TermsOfServicePage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 backdrop-blur-lg rounded-lg shadow-lg shadow-blue-500/10 border border-white/10 p-8">
          <h1 className="text-3xl font-bold text-white mb-8">Terms of Service</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-400 mb-8">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-300 mb-4">
                These Terms of Service (&quot;Terms&quot;) govern your use of TheBrainDump, operated by theBrainDump LLC (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
                By accessing or using our service, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-300">
                If you do not agree to these Terms, please do not use our service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Service</h2>
              <p className="text-gray-300 mb-4">
                TheBrainDump is a web-based platform that provides:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Interactive coding tutorials and lessons</li>
                <li>Full-stack development courses</li>
                <li>Progress tracking and completion monitoring</li>
                <li>Educational content about modern web technologies</li>
                <li>Code examples and project-based learning</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">3. Educational Purpose</h2>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mb-4">
                <p className="text-blue-400 font-semibold mb-2">IMPORTANT EDUCATIONAL DISCLAIMER:</p>
                <p className="text-gray-300">
                  TheBrainDump provides educational content for learning programming and web development.
                  Code examples are provided as-is for educational purposes and may require modification, testing, and security reviews before production use.
                  Always follow best practices and industry standards when deploying applications.
                </p>
              </div>
              <p className="text-gray-300">
                Never deploy code to production without proper testing, security audits, and validation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">4. User Accounts and Eligibility</h2>
              <h3 className="text-xl font-medium text-white mb-3">4.1 Age Requirement</h3>
              <p className="text-gray-300 mb-4">
                You must be at least 13 years old to use our service. Users under 18 should have parental or guardian supervision when coding and deploying applications.
              </p>

              <h3 className="text-xl font-medium text-white mb-3">4.2 Account Security</h3>
              <p className="text-gray-300 mb-4">You are responsible for:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized access</li>
                <li>Providing accurate and current information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">5. Acceptable Use</h2>
              <h3 className="text-xl font-medium text-white mb-3">5.1 Permitted Use</h3>
              <p className="text-gray-300 mb-4">You may use our service for:</p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
                <li>Learning programming and web development skills</li>
                <li>Educational purposes related to software engineering</li>
                <li>Tracking your learning progress</li>
                <li>Building projects and practicing coding</li>
              </ul>

              <h3 className="text-xl font-medium text-white mb-3">5.2 Prohibited Use</h3>
              <p className="text-gray-300 mb-4">You may NOT:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Use the service for any illegal or unauthorized purpose</li>
                <li>Share your account with others</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the service</li>
                <li>Use automated tools to scrape or download content in bulk</li>
                <li>Reverse engineer or attempt to extract source code from the platform</li>
                <li>Share or redistribute course content without permission</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">6. Payment Terms</h2>
              <h3 className="text-xl font-medium text-white mb-3">6.1 Course Fees</h3>
              <p className="text-gray-300 mb-4">
                Full access to course content requires a one-time payment. All fees are processed securely through Stripe and are non-refundable unless otherwise stated.
              </p>

              <h3 className="text-xl font-medium text-white mb-3">6.2 Billing</h3>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
                <li>One-time payment provides lifetime access to course content</li>
                <li>You&apos;re responsible for all charges incurred</li>
                <li>Price changes will not affect existing purchases</li>
                <li>Failed payments must be resolved to access paid content</li>
              </ul>

              <h3 className="text-xl font-medium text-white mb-3">6.3 Refund Policy</h3>
              <p className="text-gray-300">
                We offer a 7-day money-back guarantee. If you&apos;re not satisfied with the course, contact us within 7 days of purchase for a full refund.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">7. Intellectual Property</h2>
              <h3 className="text-xl font-medium text-white mb-3">7.1 Our Content</h3>
              <p className="text-gray-300 mb-4">
                All course content, including tutorials, videos, text, graphics, and code examples, is owned by theBrainDump LLC and protected by intellectual property laws.
              </p>

              <h3 className="text-xl font-medium text-white mb-3">7.2 Your Projects</h3>
              <p className="text-gray-300 mb-4">
                You retain full ownership of projects and code you create while learning.
                By using our service, you grant us a license to display your progress data to provide and improve our service.
              </p>

              <h3 className="text-xl font-medium text-white mb-3">7.3 Code Examples</h3>
              <p className="text-gray-300">
                Code examples provided in tutorials are for educational purposes. You may use and modify them for your own projects,
                but you may not redistribute course content or code examples as teaching material without permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">8. Privacy and Data Protection</h2>
              <p className="text-gray-300">
                Your privacy is important to us. Our collection and use of your information is governed by our
                <a href="/legal/privacy" className="text-blue-400 hover:underline ml-1">Privacy Policy</a>,
                which is incorporated into these Terms by reference.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">9. Disclaimers and Limitation of Liability</h2>
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-6 mb-4">
                <p className="text-amber-400 font-semibold mb-2">DISCLAIMER:</p>
                <p className="text-gray-300">
                  THE SERVICE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND.
                  WE DO NOT GUARANTEE THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
                  CODE EXAMPLES ARE PROVIDED FOR EDUCATIONAL PURPOSES AND MAY CONTAIN BUGS OR SECURITY VULNERABILITIES.
                </p>
              </div>

              <h3 className="text-xl font-medium text-white mb-3">9.1 Limitation of Liability</h3>
              <p className="text-gray-300">
                To the fullest extent permitted by law, theBrainDump LLC shall not be liable for any indirect, incidental,
                special, or consequential damages arising from your use of the service or deployment of code learned through our platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">10. Termination</h2>
              <p className="text-gray-300 mb-4">
                We may terminate or suspend your account at any time for violations of these Terms.
                You may terminate your account at any time by contacting us.
              </p>
              <p className="text-gray-300">
                Upon termination, your right to use the service ceases immediately,
                but certain provisions of these Terms will survive termination.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">11. Changes to Terms</h2>
              <p className="text-gray-300">
                We reserve the right to modify these Terms at any time.
                We will notify users of significant changes via email or through the platform.
                Continued use of the service after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">12. Governing Law</h2>
              <p className="text-gray-300">
                These Terms are governed by the laws of the United States and the state where theBrainDump LLC is incorporated,
                without regard to conflict of law principles.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">13. Contact Information</h2>
              <p className="text-gray-300 mb-4">
                For questions about these Terms of Service, contact:
              </p>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-gray-300 font-medium">theBrainDump LLC</p>
                <p className="text-gray-300">Email: thebraindumpllc@gmail.com</p>
                <p className="text-gray-300">Subject: Terms of Service Inquiry</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}