'use client';

import { FormField as FormFieldType } from '../../types';

interface FormFieldProps {
  field: FormFieldType;
  value: unknown;
  onChange: (value: unknown) => void;
  error?: string;
  className?: string;
}

export default function FormField({ field, value, onChange, error, className = '' }: FormFieldProps) {
  const baseInputClasses = "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
  const errorClasses = error ? "border-red-500 focus:ring-red-500" : "";
  
  const renderInput = () => {
    switch (field.type) {
      case 'textarea':
        return (
          <textarea
            value={(value as string) || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder={field.placeholder}
            className={`${baseInputClasses} ${errorClasses} ${field.className || ''}`}
            rows={4}
          />
        );
        
      case 'select':
        return (
          <select
            value={(value as string) || ''}
            onChange={(e) => onChange(e.target.value)}
            className={`${baseInputClasses} ${errorClasses} ${field.className || ''}`}
          >
            <option value="">Select an option</option>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
        
      case 'checkbox':
        return (
          <div className="space-y-2">
            {field.options?.map((option) => (
              <label key={option.value} className="flex items-center">
                <input
                  type="checkbox"
                  checked={Array.isArray(value) && (value as string[]).includes(option.value)}
                  onChange={(e) => {
                    const currentValues = Array.isArray(value) ? (value as string[]) : [];
                    if (e.target.checked) {
                      onChange([...currentValues, option.value]);
                    } else {
                      onChange(currentValues.filter((v: string) => v !== option.value));
                    }
                  }}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mr-2"
                />
                <span className="text-sm text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        );
        
      case 'radio':
        return (
          <div className="space-y-2">
            {field.options?.map((option) => (
              <label key={option.value} className="flex items-center">
                <input
                  type="radio"
                  name={field.name}
                  value={option.value}
                  checked={(value as string) === option.value}
                  onChange={(e) => onChange(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 mr-2"
                />
                <span className="text-sm text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        );
        
      case 'range':
        return (
          <div className="space-y-2">
            <input
              type="range"
              min="1"
              max="10"
              value={(value as number) || 5}
              onChange={(e) => onChange(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>1 (Minimal)</span>
              <span className="font-medium text-blue-600">{(value as number) || 5}</span>
              <span>10 (Severe)</span>
            </div>
          </div>
        );
        
      default:
        return (
          <input
            type={field.type}
            value={(value as string) || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder={field.placeholder}
            className={`${baseInputClasses} ${errorClasses} ${field.className || ''}`}
          />
        );
    }
  };
  
  return (
    <div className={`space-y-2 ${className}`}>
      <label className="block text-sm font-medium text-gray-700">
        {field.label}
        {field.validation?.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {renderInput()}
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}