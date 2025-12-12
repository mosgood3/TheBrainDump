'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { lessonStyles, SimpleInfoCard, SimpleStepList, LessonCompleteButton } from './shared/LessonStyleHelpers';
import { useAuth } from '../../context/AuthContext';
import { useProgress } from '../../context/ProgressContext';
// Backend removed - Supabase import removed
import { IoMdClose, IoMdCheckmark } from 'react-icons/io';

// Reusable Interactive Lesson Container Component
interface InteractiveLessonContainerProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

function InteractiveLessonContainer({ title, description, icon, children }: InteractiveLessonContainerProps) {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg border border-purple-200 shadow-sm p-6 md:p-8">
      <div className="text-center mb-8">
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
      {children}
    </div>
  );
}

// Interactive Bias Analysis Component
function InteractiveBiasAnalysis() {
  const { user } = useAuth();
  const [userInput, setUserInput] = useState('');
  const [analysis, setAnalysis] = useState<{ biasTypes: string[]; evidence: string[]; reframe: string; analysisNumber?: number; remainingAnalyses?: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{ type: string; message: string; resources?: { name: string; title: string; url: string; phone?: string; text?: string; description?: string }[] } | null>(null);
  const [previousAnalyses, setPreviousAnalyses] = useState<{ id: string; biasTypes: string[]; evidence: string[]; reframe: string; timestamp: string; created_at: string; user_input: string; ai_response: { biasTypes: string[]; evidence: string[]; reframe: string; firstFear: string; secondFear: string; guidance: string }; metadata?: { analysis_number: number } }[]>([]);
  const [_loadingPrevious, setLoadingPrevious] = useState(true);
  const [showPrevious, setShowPrevious] = useState(false);

  // Fetch previous analyses on component mount
  useEffect(() => {
    const fetchPreviousAnalyses = async () => {
      if (!user) {
        setLoadingPrevious(false);
        return;
      }

      try {
          setLoadingPrevious(false);
          return;
        }

        const response = await fetch('/api/ai/user-analyses?lesson_type=bias_analysis', {
          headers: {
            'Authorization': `Bearer ${null.access_token}`
          }
        });

        if (response.ok) {
          const result = await response.json();
          setPreviousAnalyses(result.analyses || []);
        }
      } catch (error) {
        console.error('Error fetching previous analyses:', error);
      } finally {
        setLoadingPrevious(false);
      }
    };

    fetchPreviousAnalyses();
  }, [user]);

  const analyzeBias = async () => {
    if (!userInput.trim()) return;

    setLoading(true);
    setError(null);
    try {
        setError({ type: 'auth_required', message: 'Please log in to use this feature.' });
        setLoading(false);
        return;
      }

      const response = await fetch('/api/ai/analyze-bias', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${null.access_token}`
        },
        body: JSON.stringify({ thoughtDescription: userInput.trim() })
      });

      const result = await response.json();

      if (response.ok) {
        setAnalysis(result);
        // Refresh previous analyses list
        const updatedResponse = await fetch('/api/ai/user-analyses?lesson_type=bias_analysis', {
          headers: {
            'Authorization': `Bearer ${null.access_token}`
          }
        });
        if (updatedResponse.ok) {
          const updatedResult = await updatedResponse.json();
          setPreviousAnalyses(updatedResult.analyses || []);
        }
      } else {
        // Handle specific error types
        if (result.error === 'crisis_support' || result.error === 'inappropriate_content' || result.error === 'limit_reached') {
          setError({
            type: result.error,
            message: result.message,
            resources: result.resources || []
          });
        } else {
          console.error('Failed to analyze bias');
        }
      }
    } catch (error) {
      console.error('Error analyzing bias:', error);
    } finally {
      setLoading(false);
    }
  };

  const resetAnalysis = () => {
    setUserInput('');
    setAnalysis(null);
    setError(null);
  };

  return (
    <div className="space-y-6">
      {error ? (
        <div className="space-y-4">
          {error.type === 'crisis_support' ? (
            <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.232 15.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div className="ml-3 flex-1">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">We&apos;re Here to Help</h3>
                  <p className="text-red-700 mb-4">{error.message}</p>

                  <div className="space-y-3">
                    {error.resources?.map((resource, index) => (
                      <div key={index} className="p-3 bg-white rounded border border-red-200">
                        <h4 className="font-semibold text-red-800">{resource.name}</h4>
                        {resource.phone && (
                          <p className="text-red-700">
                            <strong>Call:</strong> <a href={`tel:${resource.phone}`} className="underline">{resource.phone}</a>
                          </p>
                        )}
                        {resource.text && (
                          <p className="text-red-700">
                            <strong>Text:</strong> {resource.text}
                          </p>
                        )}
                        {resource.url && (
                          <p className="text-red-700">
                            <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-red-600 underline hover:text-red-800">
                              Visit Website
                            </a>
                          </p>
                        )}
                        <p className="text-sm text-red-600 mt-1">{resource.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.232 15.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-yellow-800">{error.message}</p>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={resetAnalysis}
            className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200"
          >
            Try Again
          </button>
        </div>
      ) : !analysis ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Describe a negative belief or thought you have about yourself:
            </label>
            <textarea
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="For example: &apos;I&apos;m not smart enough to succeed at my job&apos; or &apos;People think I&apos;m boring and don&apos;t want to be around me&apos; or &apos;I always mess things up&apos;..."
              className="w-full h-64 sm:h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none text-sm text-gray-900 placeholder:text-gray-500"
            />
          </div>
          <button
            onClick={analyzeBias}
            disabled={!userInput.trim() || loading}
            className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
              !userInput.trim() || loading
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gray-900 text-white hover:bg-gray-800 shadow-sm hover:shadow-md'
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Analyzing...
              </div>
            ) : (
              'Analyze My Thinking'
            )}
          </button>

          {/* Previous Analyses Section */}
          {previousAnalyses.length > 0 && (
            <div className="mt-6 space-y-4">
              <button
                onClick={() => setShowPrevious(!showPrevious)}
                className="flex items-center justify-between w-full p-4 bg-white hover:bg-purple-50 rounded-lg border-2 border-purple-200 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-bold text-gray-900">Your Previous Analyses</h4>
                    <p className="text-xs text-gray-600">Review your past bias analyses</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-800">
                    {previousAnalyses.length}/5 used
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-purple-700">
                    {showPrevious ? 'Hide' : 'Show'}
                  </span>
                  <svg
                    className={`w-5 h-5 text-purple-700 transition-transform duration-200 ${showPrevious ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {showPrevious && (
                <div className="space-y-4 mt-4 animate-in slide-in-from-top-2 duration-300">
                  {previousAnalyses.map((prev, index) => (
                    <div key={prev.id} className="group bg-gradient-to-br from-white to-purple-50 border-2 border-purple-200 rounded-xl p-5 hover:shadow-xl hover:border-purple-300 transition-all duration-300">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-md">
                            #{prev.metadata?.analysis_number || index + 1}
                          </div>
                          <div className="flex items-center space-x-2 text-xs text-gray-600 bg-purple-100 px-3 py-1 rounded-full">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>{new Date(prev.created_at).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border-l-4 border-purple-400 rounded-lg p-4 mb-4 shadow-sm">
                        <p className="text-xs font-semibold text-purple-700 mb-2 uppercase tracking-wide">Your Belief</p>
                        <p className="text-sm text-gray-800 italic leading-relaxed">"{prev.user_input}"</p>
                      </div>

                      <div className="space-y-3">
                        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-4 shadow-sm">
                          <div className="flex items-center mb-2">
                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                              <span className="text-white text-xs font-bold">1</span>
                            </div>
                            <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide">Cognitive Biases Identified</p>
                          </div>
                          <ul className="text-sm text-blue-800 space-y-1 ml-8">
                            {prev.ai_response.biasTypes?.map((bias: string, i: number) => (
                              <li key={i} className="flex items-start">
                                <span className="text-blue-500 mr-2 mt-0.5">•</span>
                                <span className="font-medium">{bias}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-lg p-4 shadow-sm">
                          <div className="flex items-center mb-2">
                            <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center mr-2">
                              <span className="text-white text-xs font-bold">2</span>
                            </div>
                            <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide">Alternative Evidence</p>
                          </div>
                          <ul className="text-sm text-amber-800 space-y-1 ml-8">
                            {prev.ai_response.evidence?.map((item: string, i: number) => (
                              <li key={i} className="flex items-start">
                                <span className="text-amber-500 mr-2 mt-0.5">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-emerald-50 border-l-4 border-emerald-400 rounded-lg p-4 shadow-sm">
                          <div className="flex items-center mb-2">
                            <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mr-2">
                              <span className="text-white text-xs font-bold">3</span>
                            </div>
                            <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">Reframed Perspective</p>
                          </div>
                          <p className="text-sm text-emerald-800 leading-relaxed ml-8 font-medium">{prev.ai_response.reframe}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-6">
          <div className="space-y-6">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900">Cognitive Biases Identified</h4>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500 mb-6">
              <ul className="text-gray-700 text-sm space-y-2">
                {analysis.biasTypes.map((bias, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span className="font-medium">{bias}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900">Alternative Evidence</h4>
            </div>
            <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500 mb-6">
              <ul className="text-gray-700 text-sm space-y-2">
                {analysis.evidence.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-amber-500 mr-2 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900">Reframed Perspective</h4>
            </div>
            <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-500">
              <p className="text-gray-700 text-sm leading-relaxed font-medium">{analysis.reframe}</p>
            </div>
          </div>

          <button
            onClick={resetAnalysis}
            className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200"
          >
            Analyze Another Thought
          </button>
        </div>
      )}

      {/* Limit reached display */}
      {error?.type === 'limit_reached' && previousAnalyses.length > 0 && (
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-yellow-800 text-sm">
                You can review your previous analyses above to continue learning about your thought patterns.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Interactive Fear Analysis Component
function InteractiveFearAnalysis() {
  const { user } = useAuth();
  const [userInput, setUserInput] = useState('');
  const [analysis, setAnalysis] = useState<{ firstFear: string; secondFear: string; guidance: string; analysisNumber?: number; remainingAnalyses?: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{ type: string; message: string; resources?: { name: string; title: string; url: string; phone?: string; text?: string; description?: string }[] } | null>(null);
  const [previousAnalyses, setPreviousAnalyses] = useState<{ id: string; biasTypes: string[]; evidence: string[]; reframe: string; timestamp: string; created_at: string; user_input: string; ai_response: { biasTypes: string[]; evidence: string[]; reframe: string; firstFear: string; secondFear: string; guidance: string }; metadata?: { analysis_number: number } }[]>([]);
  const [_loadingPrevious, setLoadingPrevious] = useState(true);
  const [showPrevious, setShowPrevious] = useState(false);

  // Fetch previous analyses on component mount
  useEffect(() => {
    const fetchPreviousAnalyses = async () => {
      if (!user) {
        setLoadingPrevious(false);
        return;
      }

      try {
          setLoadingPrevious(false);
          return;
        }

        const response = await fetch('/api/ai/user-analyses?lesson_type=fear_analysis', {
          headers: {
            'Authorization': `Bearer ${null.access_token}`
          }
        });

        if (response.ok) {
          const result = await response.json();
          setPreviousAnalyses(result.analyses || []);
        }
      } catch (error) {
        console.error('Error fetching previous analyses:', error);
      } finally {
        setLoadingPrevious(false);
      }
    };

    fetchPreviousAnalyses();
  }, [user]);

  const analyzeFears = async () => {
    if (!userInput.trim()) return;

    setLoading(true);
    setError(null);
    try {
        setError({ type: 'auth_required', message: 'Please log in to use this feature.' });
        setLoading(false);
        return;
      }

      const response = await fetch('/api/ai/analyze-fears', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${null.access_token}`
        },
        body: JSON.stringify({ fearDescription: userInput.trim() })
      });

      const result = await response.json();

      if (response.ok) {
        setAnalysis(result);
        // Refresh previous analyses list
        const updatedResponse = await fetch('/api/ai/user-analyses?lesson_type=fear_analysis', {
          headers: {
            'Authorization': `Bearer ${null.access_token}`
          }
        });
        if (updatedResponse.ok) {
          const updatedResult = await updatedResponse.json();
          setPreviousAnalyses(updatedResult.analyses || []);
        }
      } else {
        // Handle specific error types
        if (result.error === 'crisis_support' || result.error === 'inappropriate_content' || result.error === 'limit_reached') {
          setError({
            type: result.error,
            message: result.message,
            resources: result.resources || []
          });
        } else {
          console.error('Failed to analyze fears');
        }
      }
    } catch (error) {
      console.error('Error analyzing fears:', error);
    } finally {
      setLoading(false);
    }
  };

  const resetAnalysis = () => {
    setUserInput('');
    setAnalysis(null);
    setError(null);
  };

  return (
    <div className="space-y-6">
      {error ? (
        <div className="space-y-4">
          {error.type === 'crisis_support' ? (
            <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.232 15.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div className="ml-3 flex-1">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">We&apos;re Here to Help</h3>
                  <p className="text-red-700 mb-4">{error.message}</p>

                  <div className="space-y-3">
                    {error.resources?.map((resource, index) => (
                      <div key={index} className="p-3 bg-white rounded border border-red-200">
                        <h4 className="font-semibold text-red-800">{resource.name}</h4>
                        {resource.phone && (
                          <p className="text-red-700">
                            <strong>Call:</strong> <a href={`tel:${resource.phone}`} className="underline">{resource.phone}</a>
                          </p>
                        )}
                        {resource.text && (
                          <p className="text-red-700">
                            <strong>Text:</strong> {resource.text}
                          </p>
                        )}
                        {resource.url && (
                          <p className="text-red-700">
                            <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-red-600 underline hover:text-red-800">
                              Visit Website
                            </a>
                          </p>
                        )}
                        <p className="text-sm text-red-600 mt-1">{resource.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.232 15.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-yellow-800">{error.message}</p>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={resetAnalysis}
            className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200"
          >
            Try Again
          </button>
        </div>
      ) : !analysis ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Describe a situation you avoid or feel anxious about:
            </label>
            <textarea
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="For example: &apos;I avoid going to the grocery store because I&apos;m afraid I&apos;ll have a panic attack and embarrass myself in front of other people...&apos;"
              className="w-full h-64 sm:h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none text-sm text-gray-900 placeholder:text-gray-500"
            />
          </div>
          <button
            onClick={analyzeFears}
            disabled={!userInput.trim() || loading}
            className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
              !userInput.trim() || loading
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 transform hover:scale-105 shadow-lg hover:shadow-xl'
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Analyzing...
              </div>
            ) : (
              'Analyze My Fears'
            )}
          </button>

          {/* Previous Analyses Section */}
          {previousAnalyses.length > 0 && (
            <div className="mt-6 space-y-4">
              <button
                onClick={() => setShowPrevious(!showPrevious)}
                className="flex items-center justify-between w-full p-4 bg-white hover:bg-purple-50 rounded-lg border-2 border-purple-200 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-bold text-gray-900">Your Previous Analyses</h4>
                    <p className="text-xs text-gray-600">Review your past fear analyses</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-800">
                    {previousAnalyses.length}/5 used
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-purple-700">
                    {showPrevious ? 'Hide' : 'Show'}
                  </span>
                  <svg
                    className={`w-5 h-5 text-purple-700 transition-transform duration-200 ${showPrevious ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {showPrevious && (
                <div className="space-y-4 mt-4 animate-in slide-in-from-top-2 duration-300">
                  {previousAnalyses.map((prev, index) => (
                    <div key={prev.id} className="group bg-gradient-to-br from-white to-purple-50 border-2 border-purple-200 rounded-xl p-5 hover:shadow-xl hover:border-purple-300 transition-all duration-300">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-md">
                            #{prev.metadata?.analysis_number || index + 1}
                          </div>
                          <div className="flex items-center space-x-2 text-xs text-gray-600 bg-purple-100 px-3 py-1 rounded-full">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>{new Date(prev.created_at).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border-l-4 border-purple-400 rounded-lg p-4 mb-4 shadow-sm">
                        <p className="text-xs font-semibold text-purple-700 mb-2 uppercase tracking-wide">Your Fear</p>
                        <p className="text-sm text-gray-800 italic leading-relaxed">"{prev.user_input}"</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-3 mb-3">
                        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-4 shadow-sm">
                          <p className="text-xs font-semibold text-blue-700 mb-2 uppercase tracking-wide">First Fear</p>
                          <p className="text-sm text-blue-800 leading-relaxed">{prev.ai_response.firstFear}</p>
                        </div>
                        <div className="bg-orange-50 border-l-4 border-orange-400 rounded-lg p-4 shadow-sm">
                          <p className="text-xs font-semibold text-orange-700 mb-2 uppercase tracking-wide">Second Fear</p>
                          <p className="text-sm text-orange-800 leading-relaxed">{prev.ai_response.secondFear}</p>
                        </div>
                      </div>

                      <div className="bg-green-50 border-l-4 border-green-400 rounded-lg p-4 shadow-sm">
                        <p className="text-xs font-semibold text-green-700 mb-2 uppercase tracking-wide">Guidance</p>
                        <p className="text-sm text-green-800 leading-relaxed">{prev.ai_response.guidance}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">Your First Fear</h4>
              <p className="text-blue-800 text-sm">{analysis.firstFear}</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-2">Your Second Fear</h4>
              <p className="text-orange-800 text-sm">{analysis.secondFear}</p>
            </div>
          </div>

          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-900 mb-2">Focus on Your Second Fear</h4>
            <p className="text-green-800 text-sm">{analysis.guidance}</p>
          </div>

          <button
            onClick={resetAnalysis}
            className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200"
          >
            Try Another Fear
          </button>
        </div>
      )}


      {/* Limit reached display */}
      {error?.type === 'limit_reached' && previousAnalyses.length > 0 && (
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-yellow-800 text-sm">
                You can review your previous analyses above to continue learning about your fear patterns.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Understanding the Basics Sublesson Component
export function UnderstandingBasicsSublesson({ onComplete: _onComplete }: { onComplete: () => void }) {
  const normalAnxietyItems = [
    "Occurs in response to specific stressors",
    "Proportionate to the actual threat level",
    "Temporary and resolves when threat passes",
    "Motivates helpful problem-solving",
    "Doesn&apos;t significantly impair daily life",
    "Manageable with basic coping strategies"
  ];

  const disorderedAnxietyItems = [
    "Occurs frequently without clear triggers",
    "Disproportionate to actual threat level",
    "Persistent and difficult to resolve",
    "Leads to avoidance and safety behaviors",
    "Significantly impacts work, relationships, activities",
    "Requires more intensive intervention strategies"
  ];

  return (
    <div className={lessonStyles.container}>
      <div className={lessonStyles.header}>
        <div className={lessonStyles.icon}>🧠</div>
        <h2 className={lessonStyles.title}>Anxiety Explained</h2>
        <p className={lessonStyles.subtitle}>Understanding normal vs. disordered anxiety</p>
      </div>

      <div className={lessonStyles.content}>
        <p>
          Anxiety exists on a spectrum. Everyone experiences anxiety - it&apos;s a normal, healthy response that helps us navigate life&apos;s challenges.
          The key distinction lies in whether anxiety helps or hinders your daily functioning.
        </p>
      </div>

      {/* Comparison Chart */}
      <div className="grid md:grid-cols-2 gap-6">
        <SimpleInfoCard title="Normal Anxiety" variant="highlight">
          <p className="text-gray-600 text-sm mb-4">
            <strong>Adaptive and helpful</strong> - serves a protective function
          </p>
          <ul className="space-y-2 text-sm">
            {normalAnxietyItems.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </SimpleInfoCard>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Disordered Anxiety</h3>
          <p className="text-gray-600 text-sm mb-4">
            <strong>Excessive and impairing</strong> - interferes with normal life
          </p>
          <ul className="space-y-2 text-sm">
            {disorderedAnxietyItems.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-orange-500 mr-2 mt-0.5">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <SimpleInfoCard title="The History of Anxiety: An Evolutionary Roadmap" variant="noBorder">
        <p className="text-gray-600 text-sm mb-6 text-center">
          Understanding why we have anxiety helps us work with it more effectively. Here&apos;s the journey from prehistoric survival to modern challenges.
        </p>

        {/* The Story of Anxiety Through Time */}
        <div className="space-y-12">

          {/* Chapter 1: The Ancient Beginning */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/3 flex justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl overflow-hidden">
                  <Image
                    src="/images/2_WhatIsAnxiety/Lion.png"
                    alt="Prehistoric lion representing ancient threats"
                    className="w-full h-full object-contain"
                    width={192}
                    height={192}
                  />
                </div>
              </div>
              <div className="lg:w-2/3 text-center lg:text-left">
                <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  200,000+ Years Ago
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">The Original Purpose</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  In the beginning, anxiety was humanity&apos;s greatest survival tool. Our ancestors faced genuine life-or-death
                  situations daily - prowling predators, natural disasters, and the constant threat of starvation.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Anxiety helped them stay alive by making them hypervigilant, quick to flee, and always prepared for danger.
                  Those who worried survived. Those who didn&apos;t... well, they didn&apos;t pass on their genes.
                </p>
              </div>
            </div>
          </div>

          {/* Transition */}
          <div className="text-center py-4">
            <div className="inline-block bg-gray-100 rounded-full px-6 py-3">
              <span className="text-gray-600 font-medium">Then everything changed...</span>
            </div>
          </div>

          {/* Chapter 2: The Social Revolution */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-2/3 text-center lg:text-left order-2 lg:order-1">
                <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  10,000 Years Ago
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">The Great Adaptation</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Agriculture changed everything. Suddenly, humans lived in larger groups with complex social hierarchies.
                  The threats were no longer just physical - they became social and psychological.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Anxiety evolved to help navigate these new challenges: Will the tribe accept me? Do I have enough status?
                  What if I&apos;m rejected? Our survival brain learned that social rejection could mean death by exile.
                </p>
              </div>
              <div className="lg:w-1/3 flex justify-center order-1 lg:order-2">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-xl overflow-hidden">
                  <Image
                    src="/images/2_WhatIsAnxiety/IceAge.png"
                    alt="Ice Age scene representing agricultural revolution era"
                    className="w-full h-full object-contain"
                    width={192}
                    height={192}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Transition */}
          <div className="text-center py-4">
            <div className="inline-block bg-gray-100 rounded-full px-6 py-3">
              <span className="text-gray-600 font-medium">Fast forward to today...</span>
            </div>
          </div>

          {/* Chapter 3: The Modern Mismatch */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/3 flex justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl overflow-hidden">
                  <Image
                    src="/images/2_WhatIsAnxiety/Modern.png"
                    alt="Modern era representing current anxiety challenges"
                    className="w-full h-full object-contain"
                    width={192}
                    height={192}
                  />
                </div>
              </div>
              <div className="lg:w-2/3 text-center lg:text-left">
                <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Today
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">The Great Mismatch</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Here&apos;s the problem: our anxiety system hasn&apos;t received the memo that we&apos;re no longer cave dwellers.
                  It still treats a work presentation like a saber-tooth tiger attack.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Social media notifications, work deadlines, and awkward conversations all trigger the same ancient alarm
                  system designed for life-or-death situations. No wonder we feel overwhelmed - we&apos;re using Stone Age
                  software to run a Space Age life.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Key Insight */}
        <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border-2 border-blue-200">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white text-lg">💡</span>
            </div>
            <h4 className="font-bold text-gray-900 text-base mb-2">The Key Insight</h4>
            <p className="text-gray-700 text-base">
              <strong>Your &quot;lizard brain&quot; is still very much active</strong> - this primitive system treats modern stressors
              as life-threatening dangers. We&apos;ve become so intelligent that we can even fear our own lizard brain reactions.
            </p>
          </div>
        </div>
      </SimpleInfoCard>


      <SimpleInfoCard title="The Anxiety Loop: Understanding the Cycle" variant="noBorder">
        <p className="text-gray-600 text-sm mb-6 text-center">
          Many people get trapped in a self-perpetuating cycle that keeps anxiety alive and growing stronger.
        </p>

        {/* Anxiety Loop Image */}
        <div className="flex justify-center mb-6">
          <div className="w-80 h-80 rounded-xl flex items-center justify-center shadow-lg">
            <Image
              src="/images/2_WhatIsAnxiety/Loop.png"
              alt="Anxiety loop diagram showing the cycle of anxiety, fear, avoidance, and reinforcement"
              className="w-80 h-80 rounded-xl object-cover"
              width={320}
              height={320}
            />
          </div>
        </div>

        {/* Loop Explanation */}
        <div className="space-y-4">
          <div className="rounded-lg p-4">
            <h4 className="font-bold text-gray-900 text-base mb-2">How the Loop Works</h4>
            <div className="space-y-2 text-gray-700 text-sm">
              <p><strong>1. Trigger:</strong> Something causes initial anxiety (thought, situation, sensation)</p>
              <p><strong>2. Fear Response:</strong> You become afraid of the anxiety itself</p>
              <p><strong>3. Avoidance:</strong> You try to escape or control the feeling</p>
              <p><strong>4. Reinforcement:</strong> Avoidance teaches your brain the anxiety was &quot;dangerous&quot;</p>
              <p><strong>5. Stronger Return:</strong> The anxiety comes back even stronger next time</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-green-900 text-lg mb-3">Breaking Free</h4>
                <p className="text-green-800 text-sm leading-relaxed">
                  <strong>Recovery happens when you exit the loop.</strong> Instead of fighting, avoiding, or trying to control anxiety,
                  you learn to experience it without resistance. This course will teach you exactly how to do that.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SimpleInfoCard>

    </div>
  );
}

// The Second Fear Sublesson Component
export function SecondFearSublesson({ onComplete: _onComplete }: { onComplete: () => void }) {
  return (
    <div className={lessonStyles.container}>
      <div className={lessonStyles.header}>
        <div className={lessonStyles.icon}>🔄</div>
        <h2 className={lessonStyles.title}>Second Fear</h2>
        <p className={lessonStyles.subtitle}>A groundbreaking discovery in anxiety recovery</p>
      </div>

      <div className={lessonStyles.content}>
        <p>
          The &quot;second fear&quot; is one of the most important concepts in anxiety recovery. It refers to developing
          a fear of the anxiety symptoms themselves - essentially, becoming afraid of being afraid.
        </p>
      </div>

      <div className="my-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">The Two Fears Explained</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">First Fear</h4>
            <p className="text-blue-800 text-sm">
              The original anxiety about a situation - fear of flying, public speaking, social situations, etc.
            </p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-orange-900 mb-2">Second Fear</h4>
            <p className="text-orange-800 text-sm">
              Fear of experiencing the anxiety symptoms again - racing heart, sweating, panic, feeling trapped.
            </p>
          </div>
        </div>
        <p className="text-gray-700">
          <strong>The crucial insight:</strong> The second fear often becomes more limiting than the original fear ever was.
        </p>
      </div>

      {/* Dr. Claire Weekes Tribute */}
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Portrait */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg border-4 border-white">
              <Image
                src="/images/2_WhatIsAnxiety/DrClaireWeeks.png"
                alt="Dr. Claire Weekes"
                className="w-full h-full object-cover"
                width={160}
                height={160}
              />
            </div>
          </div>

          {/* Biography Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-emerald-900 mb-2">Dr. Claire Weekes (1903-1990)</h3>
            <p className="text-emerald-700 font-medium mb-4">Pioneer of Anxiety Recovery</p>

            <div className="space-y-4 text-gray-700 text-sm">
              <p>
                Dr. Claire Weekes was an Australian physician who revolutionized our understanding of anxiety and panic disorders.
                Her groundbreaking work in the 1960s identified the concept of &quot;second fear&quot; - the fear of fear itself -
                which became a cornerstone of modern anxiety treatment.
              </p>

              <p>
                Working decades before brain imaging and modern neuroscience, Dr. Weekes intuitively understood what we now
                know to be true: that fighting anxiety symptoms only makes them worse. Her approach of &quot;floating&quot; through
                anxiety rather than fighting it was revolutionary for its time.
              </p>

              <p>
                Her books, including &quot;Hope and Help for Your Nerves&quot; (1962), have helped millions of people worldwide.
                Her compassionate, practical approach emphasized that anxiety sufferers weren&apos;t weak or broken -
                they simply needed to understand how their nervous system worked.
              </p>
            </div>

            {/* Legacy */}
            <div className="mt-6 p-4 bg-white/70 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Her Lasting Legacy</h4>
              <p className="text-gray-700 text-sm">
                Dr. Weekes' insights about the second fear continue to be the foundation of effective anxiety treatment today.
                Her work showed that recovery isn&apos;t about eliminating anxiety, but about losing the fear of anxiety itself.
                This principle remains as relevant now as it was 60 years ago.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Examples of First Fear vs Second Fear</h3>

        <div className="space-y-6 mb-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Public Speaking</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="p-3 bg-blue-50 rounded border border-blue-200">
                <h5 className="font-medium text-blue-900 text-sm mb-1">First Fear</h5>
                <p className="text-blue-800 text-sm">&quot;I&apos;m afraid of forgetting what to say or being judged.&quot;</p>
              </div>
              <div className="p-3 bg-orange-50 rounded border border-orange-200">
                <h5 className="font-medium text-orange-900 text-sm mb-1">Second Fear</h5>
                <p className="text-orange-800 text-sm">&quot;I&apos;m afraid my heart will race and I&apos;ll have a panic attack in front of everyone.&quot;</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-3">Driving</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="p-3 bg-blue-50 rounded border border-blue-200">
                <h5 className="font-medium text-blue-900 text-sm mb-1">First Fear</h5>
                <p className="text-blue-800 text-sm">&quot;I&apos;m afraid of getting into an accident or being stuck in traffic.&quot;</p>
              </div>
              <div className="p-3 bg-orange-50 rounded border border-orange-200">
                <h5 className="font-medium text-orange-900 text-sm mb-1">Second Fear</h5>
                <p className="text-orange-800 text-sm">&quot;I&apos;m afraid I&apos;ll feel trapped and have a panic attack while driving.&quot;</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-3">Intrusive Thoughts</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="p-3 bg-blue-50 rounded border border-blue-200">
                <h5 className="font-medium text-blue-900 text-sm mb-1">First Fear</h5>
                <p className="text-blue-800 text-sm">&quot;I&apos;m afraid these thoughts mean something is wrong with me.&quot;</p>
              </div>
              <div className="p-3 bg-orange-50 rounded border border-orange-200">
                <h5 className="font-medium text-orange-900 text-sm mb-1">Second Fear</h5>
                <p className="text-orange-800 text-sm">&quot;I&apos;m afraid I can&apos;t handle having these thoughts and they&apos;ll drive me crazy.&quot;</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 text-gray-700">
          <p>
            <strong>The crucial insight:</strong> Notice how the second fear is always about the anxiety symptoms themselves, not the original situation. This is what keeps people trapped - they&apos;re no longer just afraid of the situation, they&apos;re afraid of being afraid.
          </p>
          <p>
            <strong>True recovery</strong> means becoming comfortable and okay with our anxiety response. We don&apos;t have to focus on fixing the external situations, but rather on changing our relationship with our internal experience. When we stop fighting our anxiety and start accepting it as a normal part of life, the second fear naturally dissolves.
          </p>
        </div>
      </div>

      {/* Interactive AI Fear Analysis */}
      <InteractiveLessonContainer
        title="Identify Your Fears"
        description="Describe a situation you avoid or fear, and I'll help you identify your first and second fears"
        icon={
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        }
      >
        <InteractiveFearAnalysis />
      </InteractiveLessonContainer>

    </div>
  );
}

// What We Get Wrong About Anxiety Sublesson Component
export function WhatWeGetWrongSublesson({ onComplete: _onComplete }: { onComplete: () => void }) {
  const [_selectedSection, _setSelectedSection] = useState<string | null>(null);

  const _bodyDoingItsJob = [
    {
      title: "Threat Detection System",
      description: "Your body activates stress hormones and physical changes to prepare for danger"
    },
    {
      title: "Perfectly Designed Response",
      description: "Heart rate increases, muscles tense, breathing changes - all to help you respond quickly"
    },
    {
      title: "Working as Intended",
      description: "The problem isn&apos;t that the system is broken - it&apos;s that it&apos;s overactive for modern life"
    }
  ];

  return (
    <div className={lessonStyles.container}>
      <div className={lessonStyles.header}>
        <div className={lessonStyles.icon}>💡</div>
        <h2 className={lessonStyles.title}>Misconceptions About Anxiety</h2>
        <p className={lessonStyles.subtitle}>Anxiety as a normal response, not a &quot;disorder&quot;</p>
      </div>

      <div className={lessonStyles.content}>
        <p>
          Understanding what anxiety actually is—and what it isn&apos;t—is crucial for recovery.
          Let&apos;s clear up three common misconceptions that keep people stuck in unhelpful patterns.
        </p>
      </div>

      {/* Section 1: Your Body Doing What It Thinks Is Correct */}
      <div className={lessonStyles.content}>
        <h3 className="text-xl font-bold text-gray-900 mb-4">1. Your Body Is Doing Exactly What It Thinks Is Correct</h3>
        <p className="text-gray-700 mb-6">
          The anxiety response isn&apos;t a malfunction. Your body and mind are functioning precisely as designed—
          detecting threats and preparing you to respond. The issue isn&apos;t the response itself, but rather
          the <strong>frequency and situations</strong> in which it activates.
        </p>

        {/* Visual comparison */}
        <div className="grid gap-6 md:grid-cols-2 mb-6">

          {/* Appropriate Response */}
          <div className="bg-white rounded-xl p-6 border-2 border-gray-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl">
                ✓
              </div>
              <h4 className="font-semibold text-gray-900 text-base">Appropriate Activation</h4>
            </div>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">→</span>
                <span>Walking alone at night in an unfamiliar area</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">→</span>
                <span>Important job interview or presentation</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">→</span>
                <span>Near-miss accident while driving</span>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-4 italic">
              These situations warrant heightened alertness—your system is working correctly.
            </p>
          </div>

          {/* Overactive Response */}
          <div className="bg-white rounded-xl p-6 border-2 border-gray-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-2xl">
                ⚠
              </div>
              <h4 className="font-semibold text-gray-900 text-base">Overactive Activation</h4>
            </div>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-start gap-2">
                <span className="text-amber-600 font-bold mt-0.5">→</span>
                <span>Checking emails from your couch</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-600 font-bold mt-0.5">→</span>
                <span>Having a conversation with a friend</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-600 font-bold mt-0.5">→</span>
                <span>Going to the grocery store</span>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-4 italic">
              These situations don&apos;t warrant threat responses—the system is miscalibrated.
            </p>
          </div>

        </div>

        <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
          <p className="text-gray-800 text-sm leading-relaxed">
            <strong>The key understanding:</strong> Your anxiety system isn&apos;t broken—it&apos;s like a smoke alarm
            that&apos;s too sensitive. The alarm works perfectly when there&apos;s a real fire, but it also goes off
            when you&apos;re just making toast. The goal isn&apos;t to disable the alarm, but to recalibrate its sensitivity.
          </p>
        </div>
      </div>

      {/* Section 2: Not a Personality Flaw */}
      <div className={lessonStyles.content}>
        <h3 className="text-xl font-bold text-gray-900 mb-4">2. Anxiety Is Not a Personality Flaw—It&apos;s an Emotion</h3>
        <p className="text-gray-700 mb-6">
          Anxiety is not who you are. It&apos;s an emotion you experience, just like happiness, sadness, or anger.
          More importantly, <strong>it&apos;s trying to help you</strong>—even when it feels overwhelming or unwanted.
        </p>

        <div className="grid gap-6 md:grid-cols-2 mb-6">

          {/* Left: Common Misbelief */}
          <div className="bg-red-50 rounded-xl p-6 border border-red-200">
            <h4 className="font-semibold text-red-900 mb-4 text-base">Common Misbelief</h4>
            <div className="space-y-3 text-sm text-red-800">
              <p>&quot;I&apos;m an anxious person&quot;</p>
              <p>&quot;This is just how I am&quot;</p>
              <p>&quot;I&apos;m broken or flawed&quot;</p>
              <p>&quot;Anxiety defines me&quot;</p>
            </div>
            <div className="mt-4 pt-4 border-t border-red-300">
              <p className="text-xs text-red-700">
                This perspective creates identity fusion with anxiety and breeds shame.
              </p>
            </div>
          </div>

          {/* Right: Reality */}
          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <h4 className="font-semibold text-green-900 mb-4 text-base">Reality</h4>
            <div className="space-y-3 text-sm text-green-800">
              <p>&quot;I experience anxiety&quot;</p>
              <p>&quot;This is what I&apos;m feeling right now&quot;</p>
              <p>&quot;My system is trying to protect me&quot;</p>
              <p>&quot;I am more than this emotion&quot;</p>
            </div>
            <div className="mt-4 pt-4 border-t border-green-300">
              <p className="text-xs text-green-700">
                This perspective creates separation and allows for change.
              </p>
            </div>
          </div>

        </div>

        {/* Why it's trying to help */}
        <div className="p-6">
          <h4 className="font-semibold text-gray-900 mb-3 text-base">Understanding the Protective Intent</h4>
          <p className="text-sm text-gray-700 mb-4">
            Even when anxiety feels terrible, it&apos;s generated by a system that evolved to keep you safe.
            Think of it like an overprotective friend who sees danger everywhere:
          </p>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>It&apos;s trying to alert you to potential threats (even when none exist)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>It&apos;s trying to prepare your body to respond (even when no response is needed)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>It&apos;s trying to protect you from harm (even when you&apos;re perfectly safe)</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-5 border border-blue-200 mt-6">
          <p className="text-blue-900 text-sm leading-relaxed">
            <strong>The shift in perspective:</strong> When you stop seeing anxiety as a character flaw and start
            seeing it as a well-intentioned but overzealous protective response, you can work with it rather than
            fight against yourself.
          </p>
        </div>
      </div>

      {/* Section 3: No Biomarkers */}
      <div className={lessonStyles.content}>
        <h3 className="text-xl font-bold text-gray-900 mb-4">3. There Are No Medical Tests for Anxiety</h3>

        <div className="flex justify-center my-6">
          <Image
            src="/images/2_WhatIsAnxiety/Doctor.png"
            alt="Doctor representing clinical diagnosis process"
            className="w-64 h-64 object-contain"
            width={256}
            height={256}
          />
        </div>

        <p className="text-gray-700 mb-6">
          Unlike diabetes, broken bones, or infections, there are <strong>no blood tests, brain scans, or biomarkers</strong> that
          can diagnose anxiety. This reveals something important about the nature of anxiety itself.
        </p>

        {/* Comparison table */}
        <div className="bg-white rounded-xl border border-gray-300 overflow-hidden mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-300">
                <th className="text-left p-4 font-semibold text-gray-900">Condition</th>
                <th className="text-left p-4 font-semibold text-gray-900">Diagnostic Method</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-200">
                <td className="p-4">Diabetes</td>
                <td className="p-4">Blood glucose test</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4">Broken bone</td>
                <td className="p-4">X-ray or CT scan</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4">Bacterial infection</td>
                <td className="p-4">Culture test</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4">High cholesterol</td>
                <td className="p-4">Lipid panel blood test</td>
              </tr>
              <tr className="bg-amber-50 border-b border-amber-200">
                <td className="p-4 font-semibold">Anxiety disorders</td>
                <td className="p-4 font-semibold">Self-report and clinical interview only</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mb-6">
          <h4 className="font-semibold text-blue-900 mb-3 text-base">How Anxiety Is Actually Diagnosed</h4>
          <p className="text-sm text-blue-800 mb-3">
            Mental health professionals diagnose anxiety based entirely on:
          </p>
          <div className="space-y-2 text-sm text-blue-800 ml-4">
            <div className="flex items-start gap-2">
              <span>•</span>
              <span>What you report about your experiences and symptoms</span>
            </div>
            <div className="flex items-start gap-2">
              <span>•</span>
              <span>Clinical interviews and questionnaires</span>
            </div>
            <div className="flex items-start gap-2">
              <span>•</span>
              <span>Observable behaviors and patterns</span>
            </div>
            <div className="flex items-start gap-2">
              <span>•</span>
              <span>Duration and intensity of symptoms</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
          <p className="text-gray-800 text-sm leading-relaxed mb-3">
            <strong>What this tells us:</strong> Anxiety &quot;disorders&quot; are classifications of experiences and
            symptoms—not distinct medical diseases with biological abnormalities. The word &quot;disorder&quot; simply
            means a disruption in normal functioning, not that something is medically broken.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            This doesn&apos;t invalidate your experience—your anxiety is real and can be deeply challenging. But it
            helps explain why recovery focuses on changing your <em>relationship</em> with the experience and retraining
            your response patterns, rather than &quot;fixing&quot; something biologically wrong with you.
          </p>
        </div>
      </div>

    </div>
  );
}

// Cognitive Biases Sublesson Component
export function CognitiveBiasesSublesson({ onComplete: _onComplete }: { onComplete: () => void }) {
  const [_selectedSection, _setSelectedSection] = useState<string | null>(null);

  const anxietyThinkingEffects = [
    {
      title: "Threat-Focused Attention",
      description: "Anxiety makes us scan for and notice potential dangers while missing neutral or positive information"
    },
    {
      title: "Distorted Beliefs About Self",
      description: "We develop negative beliefs about our capabilities, worth, and safety"
    },
    {
      title: "Distorted Beliefs About Others",
      description: "We assume others are judging us harshly or don&apos;t care about us"
    },
    {
      title: "Distorted Beliefs About the World",
      description: "We see the world as more dangerous and unpredictable than it actually is"
    }
  ];

  return (
    <div className={lessonStyles.container}>
      <div className={lessonStyles.header}>
        <div className={lessonStyles.icon}>🧠</div>
        <h2 className={lessonStyles.title}>Cognitive Biases and Anxiety</h2>
        <p className={lessonStyles.subtitle}>How long-term anxiety shapes our thinking</p>
      </div>

      <div className={lessonStyles.content}>
        <p>
          Long-term anxiety doesn&apos;t just affect how we feel - it fundamentally changes how we think.
          Anxiety creates cognitive biases that distort our beliefs about ourselves, others, and the world,
          often leading us to conclusions that feel true but may be far from reality.
        </p>
      </div>

      <div className={lessonStyles.content}>
        <h3 className="text-xl font-bold text-gray-900 mb-4">How Anxiety Shapes Our Thinking</h3>

        <p className="text-gray-700 mb-6">
          Long-term anxiety creates cognitive biases—mental filters that distort how we interpret reality.
          These aren&apos;t conscious choices; they&apos;re automatic patterns that shape what we notice, remember, and believe.
        </p>

        {/* Four key biases in a grid */}
        <div className="grid gap-4 md:grid-cols-2 mb-8">
          <div className="bg-white rounded-lg p-5 border border-gray-300">
            <h4 className="font-semibold text-gray-900 mb-2">Threat-Focused Attention</h4>
            <p className="text-sm text-gray-700">
              Anxiety makes us scan for and notice potential dangers while missing neutral or positive information
            </p>
          </div>

          <div className="bg-white rounded-lg p-5 border border-gray-300">
            <h4 className="font-semibold text-gray-900 mb-2">Distorted Beliefs About Self</h4>
            <p className="text-sm text-gray-700">
              We develop negative beliefs about our capabilities, worth, and safety
            </p>
          </div>

          <div className="bg-white rounded-lg p-5 border border-gray-300">
            <h4 className="font-semibold text-gray-900 mb-2">Distorted Beliefs About Others</h4>
            <p className="text-sm text-gray-700">
              We assume others are judging us harshly or don&apos;t care about us
            </p>
          </div>

          <div className="bg-white rounded-lg p-5 border border-gray-300">
            <h4 className="font-semibold text-gray-900 mb-2">Distorted Beliefs About the World</h4>
            <p className="text-sm text-gray-700">
              We see the world as more dangerous and unpredictable than it actually is
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 border border-purple-200 mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Painting Reality with Our Minds</h4>

          <div className="flex justify-center my-4">
            <Image
              src="/images/2_WhatIsAnxiety/Painting.png"
              alt="Illustration of painting reality"
              className="w-64 h-64 object-contain"
              width={256}
              height={256}
            />
          </div>

          <p className="text-gray-700 text-sm mb-3">
            Our minds are incredibly creative and powerful—they don&apos;t just observe reality, they <strong>interpret and paint it</strong>.
            When anxiety is present, we unconsciously add layers of meaning, judgment, and narrative to neutral events.
          </p>
          <p className="text-gray-700 text-sm">
            A text message goes unanswered. That&apos;s the raw fact. But our anxious mind paints: <em>&quot;They&apos;re upset with me,&quot;</em>
            <em>&quot;I said something wrong,&quot;</em> <em>&quot;They don&apos;t value our friendship.&quot;</em> These interpretations feel
            true, but they&apos;re stories we&apos;ve created—not reality itself.
          </p>
        </div>

        <div className="bg-green-50 rounded-lg p-6 border border-green-200">
          <h4 className="font-semibold text-gray-900 mb-3">Reality Without Judgment</h4>

          <div className="flex justify-center my-4">
            <Image
              src="/images/2_WhatIsAnxiety/Tree.png"
              alt="Tree illustration representing reality without judgment"
              className="w-64 h-64 object-contain"
              width={256}
              height={256}
            />
          </div>

          <p className="text-gray-700 text-sm mb-3">
            Consider a tree: it doesn&apos;t experience reality as &quot;good&quot; or &quot;bad.&quot; Rain comes—not good or bad, just rain.
            Wind blows—not threatening or comforting, just wind. The tree exists without constantly drawing conclusions about its experience.
          </p>
          <p className="text-gray-700 text-sm mb-3">
            <strong>You don&apos;t need to find the &quot;good&quot; in everything or force positive interpretations.</strong> That&apos;s
            just replacing one story with another. Instead, recovery involves learning to let experiences exist without immediately
            painting them with meaning, judgment, or narrative.
          </p>
          <p className="text-gray-700 text-sm">
            The goal isn&apos;t to think perfectly or always be positive. It&apos;s to recognize when you&apos;re adding interpretive
            layers to reality and gently loosening your grip on those stories. This creates space for experiences to simply be what they are.
          </p>
        </div>
      </div>

      <div className={lessonStyles.content}>
        <h3 className="text-xl font-bold text-gray-900 mb-4">The Franz Kafka Example</h3>

        <p className="text-gray-700 text-sm mb-4">
          <strong>Franz Kafka (1883-1924)</strong> was a Czech writer who lived with significant anxiety throughout his life.
          Despite his profound impact on literature, his anxiety created a massive gap between how he saw himself
          and the reality of his achievements. His story powerfully illustrates how anxiety distorts our self-perception.
        </p>

        <p className="text-gray-600 text-sm mb-6 text-center italic">
          How anxiety can completely distort our perception of reality - even about our greatest achievements.
        </p>

        {/* Kafka Image */}
        <div className="flex justify-center mb-8">
          <div className="w-64 h-64 bg-gray-100 rounded-xl flex items-center justify-center shadow-lg border-2 border-gray-200">
            <Image
              src="/images/2_WhatIsAnxiety/FranzaKhafka.png"
              alt="Franz Kafka, influential writer who was deeply critical of his own work"
              className="w-60 h-60 rounded-xl object-cover"
              width={240}
              height={240}
            />
          </div>
        </div>

        {/* Contrasting Cards */}
        <div className="grid gap-6 md:grid-cols-2">

          {/* What Kafka Thought */}
          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border-2 border-red-200 relative">
            <div className="mb-4">
              <div className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                KAFKA'S BELIEF
              </div>
              <h4 className="font-bold text-red-800 text-lg mb-3">What He Thought About Himself</h4>
              <div className="space-y-3 text-red-700 text-sm">
                <p>• His writing was worthless and embarrassing</p>
                <p>• His work had no value to anyone</p>
                <p>• He was so ashamed he instructed his friend to <strong>burn all his manuscripts</strong> after his death</p>
                <p>• He saw himself as a failure as a writer</p>
              </div>
            </div>
          </div>

          {/* What the World Thinks */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200 relative">
            <div className="mb-4">
              <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                WORLD'S VIEW
              </div>
              <h4 className="font-bold text-green-800 text-lg mb-3">What the World Actually Thinks</h4>
              <div className="space-y-3 text-green-700 text-sm">
                <p>• <strong>One of the most influential writers</strong> of the 20th century</p>
                <p>• &quot;The Metamorphosis&quot; and &quot;The Trial&quot; are literary masterpieces</p>
                <p>• His works are studied in universities worldwide</p>
                <p>• Profoundly impacted modern literature and thought</p>
              </div>
            </div>
          </div>

        </div>

        {/* Key Insight */}
        <div className="mt-6 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <div className="text-center">
            <h4 className="font-bold text-blue-900 text-lg mb-2">The Profound Lesson</h4>
            <p className="text-blue-900 text-base">
              Kafka&apos;s anxiety-influenced beliefs about his work were <strong>completely wrong</strong>.
              His negative self-perception had no relationship to the actual value of his contributions.
              If one of history's greatest writers could be this wrong about himself, what might you be wrong about?
            </p>
          </div>
        </div>
      </div>


      <SimpleInfoCard title="The Key Insight">
        <p className="text-gray-600 text-sm">
          <strong>Cognitive biases aren&apos;t character flaws - they&apos;re symptoms of an overactive threat detection system.</strong>
          When we understand that anxiety literally changes how we process information, we can begin to question
          our most negative thoughts and beliefs. The goal isn&apos;t to think perfectly, but to recognize when
          anxiety might be influencing our perspective and hold our thoughts more lightly.
        </p>
      </SimpleInfoCard>

      {/* Interactive AI Bias Analysis */}
      <InteractiveLessonContainer
        title="Challenge Your Assumptions"
        description="Share a negative belief about yourself, and I'll help you identify cognitive biases and reframe your perspective"
        icon={
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        }
      >
        <InteractiveBiasAnalysis />
      </InteractiveLessonContainer>

    </div>
  );
}

// Chapter 2 Recap Sublesson Component
export function Chapter2RecapSublesson({ onComplete: _onComplete }: { onComplete: () => void }) {
  const { completeLesson: _completeLesson } = useProgress();
  return (
    <div className={lessonStyles.container}>
      <div className={lessonStyles.header}>
        <div className={lessonStyles.icon}>📚</div>
        <h2 className={lessonStyles.title}>Chapter Recap</h2>
        <p className={lessonStyles.subtitle}>Consolidating everything you&apos;ve learned about anxiety</p>
      </div>

      <SimpleInfoCard title="Chapter 2 Summary: Understanding What Anxiety Really Is" variant="noBorder">
        <div className="space-y-6 text-gray-700">

          {/* Introduction */}
          <div>
            <p className="text-base leading-relaxed">
              In this chapter, you&apos;ve explored the fundamental nature of anxiety and discovered why it affects you the way it does.
              Rather than viewing anxiety as something wrong with you, you&apos;ve learned to see it as a natural, evolved response
              that has become overactive in our modern world.
            </p>
          </div>

          {/* What You Learned Section */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">What You Learned</h4>
            <div className="space-y-4">

              <div>
                <h5 className="font-medium text-gray-900 mb-2">🧠 The Evolutionary Story of Anxiety</h5>
                <p className="text-sm leading-relaxed">
                  Anxiety evolved as humanity&apos;s greatest survival tool. For 200,000+ years, it helped our ancestors survive genuine
                  life-or-death situations by making them hypervigilant and quick to respond to threats. Those who worried, survived.
                  The problem is that our ancient alarm system hasn&apos;t updated for modern life - it still treats a work presentation
                  like a saber-tooth tiger attack.
                </p>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-2">⚖️ Normal vs. Disordered Anxiety</h5>
                <p className="text-sm leading-relaxed">
                  Everyone experiences anxiety - it&apos;s normal and healthy when proportionate to actual threats. &quot;Disordered&quot; anxiety
                  simply means the response has become excessive and impairing, occurring frequently without clear triggers and
                  significantly impacting daily life. Importantly, there are no blood tests or brain scans for anxiety disorders -
                  diagnosis is based entirely on reported symptoms and behaviors.
                </p>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-2">🔄 Dr. Claire Weekes and the "Second Fear"</h5>
                <p className="text-sm leading-relaxed">
                  Dr. Claire Weekes, a pioneering Australian physician, identified that people develop a "fear of fear itself."
                  The first fear is your original concern (flying, public speaking, social situations), while the second fear
                  is your fear of experiencing anxiety symptoms (racing heart, panic attacks, feeling trapped). Often, this
                  second fear becomes more limiting than the original fear ever was.
                </p>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-2">🧩 Your Body Doing Its Job</h5>
                <p className="text-sm leading-relaxed">
                  Anxiety isn&apos;t a broken system - it&apos;s a protection system working exactly as designed, just overactive for
                  modern challenges. Your threat detection activates, your body prepares for danger (increased heart rate,
                  muscle tension, altered breathing), and the system works as intended. The issue isn&apos;t that it&apos;s broken;
                  it just needs recalibration for contemporary life.
                </p>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-2">🧠 How Anxiety Shapes Your Thinking</h5>
                <p className="text-sm leading-relaxed">
                  Long-term anxiety creates cognitive biases that distort your beliefs about yourself, others, and the world.
                  Your threat-focused attention notices dangers while missing neutral or positive information. You develop
                  negative beliefs about your capabilities and worth, assume others judge you harshly, and see the world
                  as more dangerous than it actually is.
                </p>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-2">📚 The Franz Kafka Example</h5>
                <p className="text-sm leading-relaxed">
                  Franz Kafka, one of history&apos;s most influential writers, was so ashamed of his work that he instructed his
                  friend to burn all his manuscripts after his death. His anxiety-influenced beliefs about his writing were
                  completely wrong - his works like &quot;The Metamorphosis&quot; and &quot;The Trial&quot; are now considered literary masterpieces.
                  This shows how anxiety can make us completely wrong about ourselves and our abilities.
                </p>
              </div>

            </div>
          </div>

          {/* Key Takeaways */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">🎯 Key Takeaways</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span><strong>Anxiety isn&apos;t a disorder</strong> - it&apos;s an overactive protection system that can be retrained and recalibrated</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span><strong>Focus on your second fear</strong> - becoming comfortable with anxiety symptoms is more important than avoiding situations</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span><strong>Your negative beliefs are often wrong</strong> - anxiety creates cognitive biases that distort your perception of reality</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span><strong>Recovery is about relationship change</strong> - working with your nervous system, not against it</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span><strong>Anxiety is not a reliable narrator</strong> - it tells convincing stories, but they&apos;re often fiction presented as fact</span>
              </li>
            </ul>
          </div>

          {/* The Bigger Picture */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">🌍 The Bigger Picture</h4>
            <p className="text-base leading-relaxed">
              Understanding anxiety this way shifts everything. Instead of seeing yourself as broken or flawed, you can recognize
              that you have a highly sensitive, overprotective system that evolved to keep you safe. The goal isn&apos;t to eliminate
              anxiety entirely - that would be neither possible nor beneficial. Instead, the goal is to develop a healthier
              relationship with your anxiety response and teach your nervous system to distinguish between actual threats and
              perceived ones.
            </p>
          </div>

          {/* Moving Forward */}
          <div className="border-t border-gray-200 pt-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">🚀 Moving Forward</h4>
            <p className="text-base leading-relaxed mb-4">
              Now that you understand what anxiety really is and how it affects your thinking, you&apos;re ready to develop the
              mental framework for recovery. In Chapter 3: &quot;Mindset for Recovery,&quot; you&apos;ll learn about:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">→</span>
                <span>Why recovery is nonlinear and what to expect on your journey</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">→</span>
                <span>The importance of tenacity and persistence in anxiety recovery</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">→</span>
                <span>How neuroplasticity allows your brain to change and adapt</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">→</span>
                <span>Developing patience and self-compassion during setbacks</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">→</span>
                <span>Behavioral activation strategies to rebuild your life</span>
              </li>
            </ul>
          </div>

          {/* Final Reflection */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-900 mb-3">💭 Reflection</h4>
            <p className="text-blue-800 text-sm leading-relaxed">
              Take a moment to appreciate what you&apos;ve learned. You now have a fundamentally different understanding of anxiety -
              not as an enemy to defeat, but as a protective system to work with. This shift in perspective is the foundation
              upon which your entire recovery will be built. You&apos;re not broken, you&apos;re not flawed, and you&apos;re definitely not alone.
              You&apos;re a human being with a highly sensitive nervous system that&apos;s trying its best to keep you safe.
            </p>
          </div>

        </div>
      </SimpleInfoCard>

      <LessonCompleteButton
        chapterId={2}
        chapterTitle="Chapter 2"
        onComplete={_onComplete}
      />

    </div>
  );
}