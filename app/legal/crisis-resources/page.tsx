'use client';

import Layout from '../../../components/layout/Layout';

export default function CrisisResourcesPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Crisis Resources & Emergency Support</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-red-800 mb-4">🚨 EMERGENCY SITUATIONS</h2>
              <p className="text-red-700 text-lg font-medium mb-2">
                If you are experiencing a mental health crisis, having thoughts of self-harm, or are in immediate danger:
              </p>
              <p className="text-red-700 font-bold text-xl">
                DO NOT rely on this website for emergency help.
              </p>
              <p className="text-red-700 font-medium mt-4">
                Contact emergency services immediately using the resources below.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Immediate Emergency Contacts</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-red-800 mb-3">🆘 Crisis Hotlines</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-red-700 font-bold text-xl">988</p>
                      <p className="text-red-600 font-medium">Suicide & Crisis Lifeline</p>
                      <p className="text-sm text-red-600">Free, confidential, 24/7</p>
                    </div>
                    <div>
                      <p className="text-red-700 font-bold text-xl">911</p>
                      <p className="text-red-600 font-medium">Emergency Services</p>
                      <p className="text-sm text-red-600">Police, Fire, Medical</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-blue-800 mb-3">🏥 Immediate Care</h3>
                  <div className="space-y-3 text-blue-700">
                    <p className="font-medium">Go to your nearest emergency room</p>
                    <p className="font-medium">Call your doctor or psychiatrist</p>
                    <p className="font-medium">Have someone drive you to urgent care</p>
                    <p className="text-sm text-blue-600">Do not drive yourself if in crisis</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">National Crisis Resources</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">988 Suicide & Crisis Lifeline</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Phone:</strong> 988 or 1-800-273-8255
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Chat:</strong> <a href="https://988lifeline.org/chat/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">988lifeline.org/chat</a>
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Text:</strong> Text HOME to 741741
                  </p>
                  <p className="text-sm text-gray-600">Free, confidential crisis support 24/7/365</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Crisis Text Line</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Text:</strong> HOME to 741741
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Website:</strong> <a href="https://www.crisistextline.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">crisistextline.org</a>
                  </p>
                  <p className="text-sm text-gray-600">24/7 crisis support via text message</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">SAMHSA National Helpline</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Phone:</strong> 1-800-662-HELP (4357)
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Website:</strong> <a href="https://www.samhsa.gov/find-help/national-helpline" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">samhsa.gov/find-help/national-helpline</a>
                  </p>
                  <p className="text-sm text-gray-600">Treatment referral and information service for mental health and substance abuse</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Specialized Support Lines</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">LGBTQ+ Crisis Support</h3>
                  <p className="text-gray-700 text-sm mb-1">
                    <strong>Trevor Lifeline:</strong> 1-866-488-7386
                  </p>
                  <p className="text-gray-700 text-sm">24/7 crisis support for LGBTQ+ youth</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Veterans Crisis Line</h3>
                  <p className="text-gray-700 text-sm mb-1">
                    <strong>Phone:</strong> 1-800-273-8255, Press 1
                  </p>
                  <p className="text-gray-700 text-sm">24/7 crisis support for veterans</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Trans Lifeline</h3>
                  <p className="text-gray-700 text-sm mb-1">
                    <strong>Phone:</strong> 877-565-8860
                  </p>
                  <p className="text-gray-700 text-sm">Crisis support for transgender individuals</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">NAMI HelpLine</h3>
                  <p className="text-gray-700 text-sm mb-1">
                    <strong>Phone:</strong> 1-800-950-NAMI (6264)
                  </p>
                  <p className="text-gray-700 text-sm">Information and referral services</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Online Resources & Apps</h2>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 mb-2">Crisis Chat & Text</h3>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• <a href="https://988lifeline.org/chat/" target="_blank" rel="noopener noreferrer" className="hover:underline">988 Lifeline Chat</a></li>
                    <li>• <a href="https://www.crisistextline.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">Crisis Text Line</a></li>
                    <li>• <a href="https://www.imalive.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">IMAlive Crisis Chat</a></li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-green-900 mb-2">Mental Health Apps</h3>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• <strong>MindShift:</strong> Anxiety and worry management</li>
                    <li>• <strong>Sanvello:</strong> Mood tracking and coping tools</li>
                    <li>• <strong>PTSD Coach:</strong> For trauma-related symptoms</li>
                    <li>• <strong>Crisis Text Line:</strong> Text-based crisis support</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Warning Signs of Mental Health Crisis</h2>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="font-semibold text-yellow-800 mb-3">Seek immediate help if you or someone you know experiences:</h3>
                <ul className="list-disc list-inside text-yellow-800 space-y-1">
                  <li>Thoughts of suicide or self-harm</li>
                  <li>Plans to hurt yourself or others</li>
                  <li>Feeling hopeless or trapped</li>
                  <li>Severe anxiety or panic that won&apos;t stop</li>
                  <li>Inability to function in daily activities</li>
                  <li>Hearing voices or seeing things that aren&apos;t there</li>
                  <li>Extreme mood swings</li>
                  <li>Substance abuse as a coping mechanism</li>
                  <li>Isolating from friends and family</li>
                  <li>Talking about death or dying frequently</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Help Someone in Crisis</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">🗣️ What to Say:</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• &quot;I&apos;m here for you&quot;</li>
                    <li>• &quot;You are not alone&quot;</li>
                    <li>• &quot;I care about you&quot;</li>
                    <li>• &quot;Let&apos;s get help together&quot;</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">❌ What NOT to Say:</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• &quot;Just think positive&quot;</li>
                    <li>• &quot;Others have it worse&quot;</li>
                    <li>• &quot;Snap out of it&quot;</li>
                    <li>• &quot;It&apos;s all in your head&quot;</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">🚨 Take Action:</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Stay with the person if safe to do so</li>
                    <li>• Call 988 or 911 if immediate danger</li>
                    <li>• Remove access to means of self-harm</li>
                    <li>• Help them contact a mental health professional</li>
                    <li>• Follow up regularly</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">International Resources</h2>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  If you are outside the United States, please contact your local emergency services or visit:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• <a href="https://findahelpline.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">International Association for Suicide Prevention</a></li>
                  <li>• <a href="https://www.befrienders.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Befrienders Worldwide</a></li>
                  <li>• Your local emergency number (112 in Europe, 000 in Australia, etc.)</li>
                </ul>
              </div>
            </section>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <h3 className="font-semibold text-blue-800 mb-2">Remember:</h3>
              <p className="text-blue-700">
                Seeking help is a sign of strength, not weakness. Mental health crises are medical emergencies 
                that deserve immediate professional attention. You deserve support, and help is always available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}