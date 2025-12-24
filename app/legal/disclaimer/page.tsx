'use client';

import Layout from '../../../components/layout/Layout';

export default function EducationalDisclaimerPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 backdrop-blur-lg rounded-lg shadow-lg shadow-blue-500/10 border border-white/10 p-8">
          <h1 className="text-3xl font-bold text-white mb-8">Educational Disclaimer</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-400 mb-8">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="bg-blue-500/10 border-2 border-blue-500/30 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-blue-400 mb-4">IMPORTANT EDUCATIONAL DISCLAIMER</h2>
              <p className="text-gray-300 text-lg font-medium mb-4">
                TheBrainDump provides educational content for learning programming and web development.
              </p>
              <p className="text-gray-300">
                The code examples, tutorials, and tools provided through this platform are for educational purposes only.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">1. Educational Content Only</h2>
              <p className="text-gray-300 mb-4">
                TheBrainDump and its tutorials, code examples, lessons, and resources are designed
                to provide educational content for learning programming and web development. They are:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>NOT</strong> production-ready code without proper testing and review</li>
                <li><strong>NOT</strong> intended to be deployed without security audits</li>
                <li><strong>NOT</strong> a substitute for professional software development consultation</li>
                <li><strong>NOT</strong> guaranteed to be free from bugs or vulnerabilities</li>
                <li><strong>NOT</strong> maintained or updated for security patches</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">2. Production Use Disclaimer</h2>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mb-4">
                <p className="text-blue-400 font-semibold mb-2">Code Review Required:</p>
                <p className="text-gray-300">
                  Before using any code from TheBrainDump in production environments, you should perform
                  thorough testing, security reviews, and code audits. Consider consulting with experienced
                  developers for critical applications.
                </p>
              </div>

              <p className="text-gray-300 mb-4">You should review and modify code before:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Deploying to production environments</li>
                <li>Handling sensitive user data</li>
                <li>Processing payments or financial information</li>
                <li>Building mission-critical applications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">3. No Warranty or Guarantee</h2>
              <p className="text-gray-300 mb-4">
                <strong>Code examples and tutorials are provided "as-is" without any warranties or guarantees.</strong>
              </p>
              <p className="text-gray-300">
                We make no guarantees about the accuracy, security, or suitability of code for any particular purpose.
                Always test and validate thoroughly before production use.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">4. Learning Outcomes</h2>
              <p className="text-gray-300 mb-4">
                Educational content is designed to teach concepts and techniques.
                Learning outcomes vary based on individual effort and background:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Learning outcomes depend on individual dedication and practice</li>
                <li>Examples are simplified for educational clarity</li>
                <li>Production applications require additional considerations</li>
                <li>Best practices may evolve over time</li>
                <li>Prior programming experience affects learning speed</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">5. Security Considerations</h2>
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-6 mb-4">
                <p className="text-amber-400 font-semibold mb-2">IMPORTANT SECURITY NOTICE:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Always implement proper authentication and authorization</li>
                  <li>Sanitize and validate all user inputs</li>
                  <li>Use environment variables for sensitive credentials</li>
                  <li>Keep dependencies updated and scan for vulnerabilities</li>
                  <li>Follow OWASP security guidelines</li>
                  <li>Implement rate limiting and DDoS protection</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <p className="font-semibold text-white mb-2">Best Practices:</p>
                <p className="text-gray-300">Never deploy code to production without proper testing, security audits, and performance optimization.</p>
                <p className="text-gray-300 mt-2">Always follow industry security standards and keep up with the latest security advisories.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">6. No Professional Services</h2>
              <p className="text-gray-300">
                Use of TheBrainDump does not create a professional services relationship between you and theBrainDump LLC,
                its employees, or any professional developers. We do not provide consulting, code review, or professional
                development services through this platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-300">
                To the fullest extent permitted by law, theBrainDump LLC disclaims any responsibility for
                issues, damages, or losses resulting from your use of code examples or tutorials provided through TheBrainDump.
                You assume full responsibility for testing, security, and deployment of any code you use.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">8. Contact Information</h2>
              <p className="text-gray-300 mb-4">
                For questions about this Educational Disclaimer, contact:
              </p>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-gray-300 font-medium">theBrainDump LLC</p>
                <p className="text-gray-300">Email: thebraindumpllc@gmail.com</p>
                <p className="text-gray-300">Subject: Educational Disclaimer Inquiry</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}