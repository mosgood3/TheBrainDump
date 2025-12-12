'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold">
                <span className="text-blue-600">The</span>
                <span className="text-orange-500">Brain</span>
                <span className="text-blue-600">Dump</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Evidence-based anxiety recovery support designed to help you build resilience and reclaim your life.
            </p>
            <p className="text-xs text-gray-500">
              Developed by theBrainDump LLC
            </p>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Legal
            </h3>
            <div className="space-y-3 text-sm">
              <Link href="/legal/privacy" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal/terms" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Terms of Service
              </Link>
              <Link href="/legal/disclaimer" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Medical Disclaimer
              </Link>
            </div>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Support
            </h3>
            <div className="space-y-3 text-sm">
              <Link href="/faq" className="block text-gray-600 hover:text-blue-600 transition-colors">
                FAQ
              </Link>
              <Link href="/legal/crisis-resources" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Crisis Resources
              </Link>
            </div>
          </div>
          
          {/* Crisis Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Emergency Support
            </h3>
            <div className="space-y-3 text-sm">
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="font-semibold text-red-800 mb-1">Crisis Hotlines:</p>
                <p className="text-red-700">
                  <strong>988</strong> - Suicide & Crisis Lifeline
                </p>
                <p className="text-red-700">
                  <strong>911</strong> - Emergency Services
                </p>
                <p className="text-xs text-red-600 mt-2">Available 24/7</p>
              </div>
              <Link 
                href="/legal/crisis-resources" 
                className="block text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                More Resources →
              </Link>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <div className="text-center">
            <p className="text-sm text-gray-600">
              &copy; {currentYear} theBrainDump LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}