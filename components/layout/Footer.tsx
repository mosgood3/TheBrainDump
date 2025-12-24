'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-transparent mt-auto relative overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold">
                <span className="text-blue-400">The</span>
                <span className="text-orange-400">Brain</span>
                <span className="text-blue-400">Dump</span>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Master full-stack development through hands-on tutorials and real-world projects. Build production-ready applications while learning modern web technologies.
            </p>
            <p className="text-xs text-gray-400">
              Developed by theBrainDump LLC
            </p>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Legal
            </h3>
            <div className="space-y-3 text-sm">
              <Link href="/legal/privacy" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal/terms" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/legal/disclaimer" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Educational Disclaimer
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Contact
            </h3>
            <div className="space-y-3 text-sm">
              <Link href="/faq" className="block text-gray-300 hover:text-blue-400 transition-colors">
                FAQ
              </Link>
              <a href="mailto:thebraindumpllc@gmail.com" className="block text-gray-300 hover:text-blue-400 transition-colors">
                thebraindumpllc@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 mt-12">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} theBrainDump LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}