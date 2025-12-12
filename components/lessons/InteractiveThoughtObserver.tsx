'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
// Backend removed - Supabase import removed

interface ObservationMethod {
  id: string;
  name: string;
  description: string;
  icon: string;
}

const observationMethods: ObservationMethod[] = [
  {
    id: 'pause_and_notice',
    name: 'Pause and Notice',
    description: 'Simply recognize the thought you are having without judgment',
    icon: '⏸️'
  },
  {
    id: 'label_experience',
    name: 'Label the Experience',
    description: 'Watch how your mind is reacting - "My mind is worrying" or "My mind is catastrophizing"',
    icon: '🏷️'
  },
  {
    id: 'visualizing_thoughts',
    name: 'Visualizing Thoughts',
    description: 'Picture thoughts as clouds drifting across the sky or leaves floating down a stream',
    icon: '☁️'
  },
  {
    id: 'cognitive_restructuring',
    name: 'Cognitive Restructuring',
    description: 'Examine and reframe the thought - Is it helpful? What evidence supports it?',
    icon: '🔄'
  }
];

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

function InteractiveThoughtAnalysis() {
  const { user } = useAuth();
  const [userInput, setUserInput] = useState('');
  const [selectedMethod, setSelectedMethod] = useState<ObservationMethod | null>(null);
  const [analysis, setAnalysis] = useState<{
    observation: string;
    insight: string;
    guidance: string;
    analysisNumber?: number;
    remainingAnalyses?: number;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{
    type: string;
    message: string;
    resources?: {
      name: string;
      title: string;
      url: string;
      phone?: string;
      text?: string;
      description?: string;
    }[];
  } | null>(null);
  const [previousAnalyses, setPreviousAnalyses] = useState<{
    id: string;
    user_input: string;
    ai_response: {
      observation: string;
      insight: string;
      guidance: string;
      method: string;
    };
    created_at: string;
    metadata?: { analysis_number: number };
  }[]>([]);
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

        const response = await fetch('/api/ai/user-analyses?lesson_type=thought_observation', {
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

  const analyzeThought = async () => {
    if (!userInput.trim() || !selectedMethod) return;

    setLoading(true);
    setError(null);

    try {
        setError({ type: 'auth_required', message: 'Please log in to use this feature.' });
        setLoading(false);
        return;
      }

      const response = await fetch('/api/ai/analyze-thought-observation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${null.access_token}`
        },
        body: JSON.stringify({
          thought: userInput.trim(),
          method: selectedMethod.id,
          methodName: selectedMethod.name,
          methodDescription: selectedMethod.description
        })
      });

      const result = await response.json();

      if (response.ok) {
        setAnalysis(result);

        // Refresh previous analyses list
        const updatedResponse = await fetch('/api/ai/user-analyses?lesson_type=thought_observation', {
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
          console.error('Failed to analyze thought');
        }
      }
    } catch (error) {
      console.error('Error analyzing thought:', error);
    } finally {
      setLoading(false);
    }
  };

  const resetAnalysis = () => {
    setUserInput('');
    setSelectedMethod(null);
    setAnalysis(null);
    setError(null);
  };

  if (!user) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h4 className="text-lg font-semibold text-gray-900 mb-2">Authentication Required</h4>
        <p className="text-gray-600 mb-4">Please log in to access the AI-powered thought observation tool.</p>
      </div>
    );
  }

  if (error && error.type === 'crisis_support') {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <div className="flex items-start">
          <svg className="w-6 h-6 text-red-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.732 15.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
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
    );
  }

  if (error && (error.type === 'inappropriate_content' || error.type === 'limit_reached')) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <div className="flex items-start">
          <svg className="w-6 h-6 text-yellow-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.732 15.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <div className="ml-3">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Unable to Process</h3>
            <p className="text-yellow-700 mb-4">{error.message}</p>
            <button
              onClick={resetAnalysis}
              className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {analysis ? (
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">{selectedMethod?.icon}</span>
              <h4 className="text-lg font-semibold text-gray-900">
                {selectedMethod?.name} Analysis
              </h4>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded border border-blue-200">
                <h5 className="font-medium text-blue-900 text-sm mb-2">Your Thought</h5>
                <p className="text-blue-800 text-sm italic">"{userInput}"</p>
              </div>

              <div className="p-4 bg-purple-50 rounded border border-purple-200">
                <h5 className="font-medium text-purple-900 text-sm mb-2">Observation</h5>
                <p className="text-purple-800 text-sm">{analysis.observation}</p>
              </div>

              <div className="p-4 bg-green-50 rounded border border-green-200">
                <h5 className="font-medium text-green-900 text-sm mb-2">Insight</h5>
                <p className="text-green-800 text-sm">{analysis.insight}</p>
              </div>

              <div className="p-4 bg-yellow-50 rounded border border-yellow-200">
                <h5 className="font-medium text-yellow-900 text-sm mb-2">Guidance</h5>
                <p className="text-yellow-800 text-sm">{analysis.guidance}</p>
              </div>
            </div>
          </div>

          {analysis.analysisNumber && analysis.remainingAnalyses !== undefined && (
            <div className="text-center text-sm text-gray-600">
              Analysis #{analysis.analysisNumber} • {analysis.remainingAnalyses} remaining today
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
        <div className="space-y-6">
          {/* Thought Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Share a thought you'd like to observe:
            </label>
            <textarea
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="For example: 'I'm not good enough', 'What if I fail?', 'Everyone is judging me', 'I can't handle this'..."
              className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none text-sm text-gray-900 placeholder:text-gray-500"
            />
          </div>

          {/* Method Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Choose your observation method:
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {observationMethods.map((method) => (
                <div
                  key={method.id}
                  onClick={() => setSelectedMethod(method)}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedMethod?.id === method.id
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-200 bg-white hover:border-indigo-300 hover:bg-indigo-25'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">{method.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{method.name}</h4>
                      <p className="text-xs text-gray-600 mt-1">{method.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={analyzeThought}
            disabled={!userInput.trim() || !selectedMethod || loading}
            className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
              !userInput.trim() || !selectedMethod || loading
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
              'Observe My Thought'
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
                    <h4 className="text-lg font-bold text-gray-900">Your Previous Observations</h4>
                    <p className="text-xs text-gray-600">Review your past thought observations</p>
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
                        <p className="text-xs font-semibold text-purple-700 mb-2 uppercase tracking-wide">Your Thought</p>
                        <p className="text-sm text-gray-800 italic leading-relaxed">"{prev.user_input}"</p>
                      </div>

                      <div className="space-y-3">
                        <div className="bg-purple-50 border-l-4 border-purple-400 rounded-lg p-4 shadow-sm">
                          <p className="text-xs font-semibold text-purple-700 mb-2 uppercase tracking-wide">Observation</p>
                          <p className="text-sm text-purple-800 leading-relaxed">{prev.ai_response.observation}</p>
                        </div>

                        <div className="bg-green-50 border-l-4 border-green-400 rounded-lg p-4 shadow-sm">
                          <p className="text-xs font-semibold text-green-700 mb-2 uppercase tracking-wide">Insight</p>
                          <p className="text-sm text-green-800 leading-relaxed">{prev.ai_response.insight}</p>
                        </div>

                        <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-4 shadow-sm">
                          <p className="text-xs font-semibold text-yellow-700 mb-2 uppercase tracking-wide">Guidance</p>
                          <p className="text-sm text-yellow-800 leading-relaxed">{prev.ai_response.guidance}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}

export function InteractiveThoughtObserver() {
  return (
    <InteractiveLessonContainer
      title="Practice Thought Observation"
      description="Share a thought you'd like to observe, choose your approach, and get personalized guidance on practicing the observer mindset"
      icon={
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      }
    >
      <InteractiveThoughtAnalysis />
    </InteractiveLessonContainer>
  );
}