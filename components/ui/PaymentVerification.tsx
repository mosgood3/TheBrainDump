'use client';

interface PaymentVerificationProps {
  status: 'verifying' | 'success' | 'error';
  message?: string;
}

export default function PaymentVerification({ status, message }: PaymentVerificationProps) {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 z-50 flex items-center justify-center">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 p-12 max-w-md w-full mx-4">
        <div className="flex flex-col items-center text-center">
          {status === 'verifying' && (
            <>
              {/* Animated Check Circle */}
              <div className="relative mb-6">
                <div className="w-24 h-24 border-4 rounded-full border-gray-700 border-t-purple-500 border-r-blue-500 animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mb-3">
                Verifying Your Payment
              </h2>
              <p className="text-gray-300 mb-2">
                Please wait while we confirm your payment...
              </p>
              <p className="text-sm text-gray-400">
                This usually takes just a few seconds
              </p>
            </>
          )}

          {status === 'success' && (
            <>
              {/* Success Checkmark */}
              <div className="mb-6 relative">
                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50 animate-bounceIn">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mb-3">
                Payment Successful!
              </h2>
              <p className="text-gray-300 mb-2">
                Welcome to the full course!
              </p>
              <p className="text-sm text-gray-400">
                You now have lifetime access to all lessons
              </p>
            </>
          )}

          {status === 'error' && (
            <>
              {/* Error Icon */}
              <div className="mb-6">
                <div className="w-24 h-24 bg-red-500/20 border-2 border-red-500 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mb-3">
                Verification Issue
              </h2>
              <p className="text-gray-300 mb-4">
                {message || 'We encountered an issue verifying your payment.'}
              </p>
              <p className="text-sm text-gray-400 mb-6">
                Your payment may still be processing. Please refresh the page in a moment or contact support if the issue persists.
              </p>

              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-500/50"
              >
                Refresh Page
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
