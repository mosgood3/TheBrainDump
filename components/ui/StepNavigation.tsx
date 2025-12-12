'use client';

interface Step {
  id: number | string;
  title: string;
  description?: string;
}

interface StepNavigationProps {
  steps: Step[];
  currentStep: number | string;
  completedSteps: Set<number | string>;
  onStepClick: (stepId: number | string) => void;
  className?: string;
  color?: 'blue' | 'orange' | 'green' | 'purple' | 'teal' | 'indigo' | 'violet';
}

export default function StepNavigation({ 
  steps, 
  currentStep, 
  completedSteps, 
  onStepClick,
  className = '',
  color = 'blue'
}: StepNavigationProps) {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-700 border-blue-300',
    orange: 'bg-orange-100 text-orange-700 border-orange-300',
    green: 'bg-green-100 text-green-700 border-green-300', 
    purple: 'bg-purple-100 text-purple-700 border-purple-300',
    teal: 'bg-teal-100 text-teal-700 border-teal-300',
    indigo: 'bg-indigo-100 text-indigo-700 border-indigo-300',
    violet: 'bg-violet-100 text-violet-700 border-violet-300'
  };
  
  return (
    <div className={`flex gap-1 sm:gap-2 mb-6 sm:mb-8 overflow-x-auto pb-2 ${className}`}>
      {steps.map((step) => (
        <button
          key={step.id}
          onClick={() => onStepClick(step.id)}
          className={`px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap flex items-center gap-1 sm:gap-2 transition-all ${
            step.id === currentStep
              ? `${colorClasses[color]} border-2`
              : completedSteps.has(step.id)
                ? 'bg-green-100 text-green-700 border-2 border-green-300'
                : 'bg-gray-100 text-gray-600 border-2 border-gray-200 hover:bg-gray-200'
          }`}
        >
          {completedSteps.has(step.id) && (
            <span className="text-green-600">✓</span>
          )}
          {step.title}
        </button>
      ))}
    </div>
  );
}