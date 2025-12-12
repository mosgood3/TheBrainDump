'use client';

import Layout from '../../../components/layout/Layout';

export default function MedicalDisclaimerPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Medical Disclaimer</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-600 mb-8">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-red-800 mb-4">IMPORTANT MEDICAL DISCLAIMER</h2>
              <p className="text-red-700 text-lg font-medium mb-4">
                TheBrainDump is NOT a substitute for professional medical advice, diagnosis, or treatment.
              </p>
              <p className="text-red-700">
                The information and tools provided through this platform are for educational and self-help purposes only.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Not Medical Treatment</h2>
              <p className="text-gray-700 mb-4">
                TheBrainDump and its LLM interactive content, assessments, lessons, and resources are designed 
                to provide general information and self-help tools related to anxiety management. They are:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>NOT</strong> a replacement for professional mental health treatment</li>
                <li><strong>NOT</strong> intended to diagnose any medical or mental health condition</li>
                <li><strong>NOT</strong> a substitute for therapy, counseling, or psychiatric care</li>
                <li><strong>NOT</strong> meant to replace medication prescribed by healthcare professionals</li>
                <li><strong>NOT</strong> emergency mental health services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Always Consult Healthcare Professionals</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
                <p className="text-blue-800 font-semibold mb-2">Professional Consultation Required:</p>
                <p className="text-blue-700">
                  Always seek the advice of your physician, psychiatrist, psychologist, or other qualified 
                  health provider with any questions regarding anxiety, mental health conditions, or treatment options.
                </p>
              </div>
              
              <p className="text-gray-700 mb-4">You should consult with healthcare professionals before:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Starting any new anxiety management program</li>
                <li>Making changes to existing treatment plans</li>
                <li>Stopping or altering prescribed medications</li>
                <li>If you experience worsening symptoms</li>
                <li>If you have concerns about your mental health</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Do Not Ignore Professional Advice</h2>
              <p className="text-gray-700 mb-4">
                <strong>Never disregard professional medical advice or delay in seeking it because of something 
                you have read or learned through TheBrainDump.</strong>
              </p>
              <p className="text-gray-700">
                If you think you may have a medical emergency or mental health crisis, call your doctor, 
                911, or the 988 Suicide & Crisis Lifeline immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Individual Results May Vary</h2>
              <p className="text-gray-700 mb-4">
                Self-help tools and anxiety management techniques affect individuals differently. 
                What works for one person may not work for another. The effectiveness of our tools depends on many factors including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Severity and type of anxiety symptoms</li>
                <li>Individual circumstances and health conditions</li>
                <li>Consistency of use and personal commitment</li>
                <li>Concurrent professional treatment</li>
                <li>Environmental and lifestyle factors</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. LLM Interactive Content Limitations</h2>
              <p className="text-gray-700 mb-4">
                Our LLM interactive lessons and recommendations are based on general anxiety management principles 
                and your self-reported information. They are:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Generated by artificial intelligence, not healthcare professionals</li>
                <li>Based on general principles, not personalized medical assessment</li>
                <li>Subject to LLM limitations and potential inaccuracies</li>
                <li>Not reviewed by medical professionals before delivery</li>
                <li>Provided for educational and self-help purposes only</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. When to Seek Immediate Help</h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-4">
                <p className="text-red-800 font-semibold mb-2">SEEK IMMEDIATE PROFESSIONAL HELP IF YOU EXPERIENCE:</p>
                <ul className="list-disc list-inside text-red-700 space-y-1">
                  <li>Thoughts of self-harm or suicide</li>
                  <li>Severe panic attacks or anxiety that interferes with daily life</li>
                  <li>Symptoms that worsen despite self-help efforts</li>
                  <li>Inability to function in work, relationships, or daily activities</li>
                  <li>Substance abuse as a way to cope with anxiety</li>
                  <li>Any mental health crisis or emergency situation</li>
                </ul>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="font-semibold text-gray-800 mb-2">Emergency Resources:</p>
                <p className="text-gray-700"><strong>988</strong> - Suicide & Crisis Lifeline (24/7)</p>
                <p className="text-gray-700"><strong>911</strong> - Emergency Services</p>
                <p className="text-gray-700">Visit your nearest emergency room</p>
                <p className="text-gray-700">Contact your mental health provider immediately</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. No Doctor-Patient Relationship</h2>
              <p className="text-gray-700">
                Use of TheBrainDump does not create a doctor-patient relationship between you and theBrainDump LLC, 
                its employees, or any healthcare professionals. We do not provide medical advice, diagnosis, or treatment 
                through our platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-700">
                To the fullest extent permitted by law, theBrainDump LLC disclaims any responsibility for 
                adverse outcomes resulting from your use of the information or tools provided through TheBrainDump. 
                You assume full responsibility for your health and well-being.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about this Medical Disclaimer, contact:
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 font-medium">theBrainDump LLC</p>
                <p className="text-gray-700">Email: thebraindumpllc@gmail.com</p>
                <p className="text-gray-700">Subject: Medical Disclaimer Inquiry</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}