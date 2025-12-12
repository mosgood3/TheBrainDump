'use client';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  title?: string;
  className?: string;
  color?: 'blue' | 'orange' | 'green' | 'purple';
}

export default function ProgressIndicator({ 
  currentStep, 
  totalSteps, 
  title,
  className = '',
  color = 'blue'
}: ProgressIndicatorProps) {
  const percentage = Math.round((currentStep / totalSteps) * 100);
  
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    orange: 'from-orange-500 to-orange-600', 
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600'
  };
  
  return (
    <div className={`mb-8 ${className}`}>
      {title && (
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">{title}</h1>
          <span className="text-sm text-gray-500">Step {currentStep} of {totalSteps}</span>
        </div>
      )}
      
      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
        <div 
          className={`bg-gradient-to-r ${colorClasses[color]} h-2 rounded-full transition-all duration-300`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      <p className="text-sm text-gray-600">
        {title ? `Step ${currentStep} of ${totalSteps} • ` : `${currentStep} of ${totalSteps} • `}
        {percentage}% Complete
      </p>
    </div>
  );
}