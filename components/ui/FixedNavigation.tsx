'use client';

interface FixedNavigationProps {
  // Previous button
  onPrevious?: () => void;
  previousDisabled?: boolean;
  previousLabel?: string;
  
  // Next/Continue/Complete button
  onNext: () => void;
  nextDisabled?: boolean;
  nextLabel?: string;
  
  // Center content
  currentStep?: number;
  totalSteps?: number;
  
  // Additional buttons (like Cancel)
  additionalButtons?: React.ReactNode;
  
  // Validation message
  showValidationMessage?: boolean;
  validationMessage?: string;
  
  // Styling
  nextButtonStyle?: 'primary' | 'success' | 'orange';
  maxWidth?: string;
}

export default function FixedNavigation({
  onPrevious,
  previousDisabled = false,
  previousLabel = "← Previous",
  onNext,
  nextDisabled = false,
  nextLabel = "Continue →",
  currentStep,
  totalSteps,
  additionalButtons,
  showValidationMessage = false,
  validationMessage = "Please complete all required fields to continue",
  nextButtonStyle = 'primary',
  maxWidth = 'max-w-4xl'
}: FixedNavigationProps) {
  
  const getNextButtonClasses = () => {
    const baseClasses = "px-6 py-3 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium";
    
    switch (nextButtonStyle) {
      case 'success':
        return `${baseClasses} bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 transition-all`;
      case 'orange':
        return `${baseClasses} bg-orange-600 hover:bg-orange-700`;
      case 'primary':
      default:
        return `${baseClasses} bg-blue-600 hover:bg-blue-700`;
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
      <div className={`${maxWidth} mx-auto px-4 sm:px-6 py-3 sm:py-4`}>
        {/* Validation Message */}
        {showValidationMessage && (
          <div className="text-center mb-3">
            <p className="text-sm text-gray-500">
              {validationMessage}
            </p>
          </div>
        )}
        
        <div className="flex justify-between items-center">
          {/* Previous Button */}
          <div className="flex-shrink-0">
            {onPrevious ? (
              <button
                onClick={onPrevious}
                disabled={previousDisabled}
                className="px-6 py-3 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {previousLabel}
              </button>
            ) : (
              <div className="px-6 py-3"></div>
            )}
          </div>

          {/* Center Content */}
          <div className="flex items-center gap-3 min-w-0">
            {additionalButtons}
            
            {currentStep && totalSteps && (
              <div className="text-center">
                <p className="text-sm text-gray-500">
                  {currentStep} of {totalSteps}
                </p>
              </div>
            )}
          </div>

          {/* Next/Continue/Complete Button */}
          <div className="flex-shrink-0">
            <button
              onClick={onNext}
              disabled={nextDisabled}
              className={getNextButtonClasses()}
            >
              {nextLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}