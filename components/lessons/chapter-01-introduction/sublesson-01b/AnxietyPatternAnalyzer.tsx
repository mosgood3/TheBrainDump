'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
// Backend removed - Supabase import removed

const MAX_CHARS = 500; // Character limit per response

const QUESTIONS = [
  {
    id: 1,
    question: "What brings you to this anxiety recovery course today?",
    placeholder: "Type your answer here...",
    intro: "Welcome! 👋 I'm here to help you understand your unique anxiety patterns.",
    followUp: "Thank you for sharing that. It takes courage to start this journey."
  },
  {
    id: 2,
    question: "What physical symptoms do you experience when anxious?",
    placeholder: "Describe what you feel in your body...",
    intro: "Let's talk about how anxiety shows up in your body.",
    followUp: "I hear you. Those physical sensations can be really uncomfortable."
  },
  {
    id: 3,
    question: "What mental or emotional symptoms do you notice?",
    placeholder: "Share what goes through your mind...",
    intro: "Now, let's explore what happens in your mind when anxiety strikes.",
    followUp: "That's really insightful. Recognizing these patterns is powerful."
  },
  {
    id: 4,
    question: "What situations or thoughts tend to trigger your anxiety?",
    placeholder: "Tell me about your triggers...",
    intro: "Understanding your triggers is key to breaking the anxiety cycle.",
    followUp: "Thank you for being so open. Knowing your triggers is the first step to freedom."
  },
  {
    id: 5,
    question: "How does anxiety impact your daily life?",
    placeholder: "Describe how it affects you day-to-day...",
    intro: "Finally, let's talk about how anxiety affects your everyday life.",
    followUp: "I appreciate you sharing all of this. You've given me a clear picture of your experience."
  }
];

// Helper function to parse legacy text insights into structured format
function parseLegacyInsight(text: string): InsightData {
  const sections: InsightSection[] = [];

  if (text.includes('**')) {
    const regex = /\*\*(.*?)\*\*/g;
    const matches: Array<{ title: string; startIndex: number }> = [];
    let match;

    while ((match = regex.exec(text)) !== null) {
      matches.push({
        title: match[1],
        startIndex: match.index + match[0].length
      });
    }

    matches.forEach((m, idx) => {
      const nextIndex = idx < matches.length - 1 ? matches[idx + 1].startIndex - matches[idx + 1].title.length - 4 : text.length;
      let content = text.substring(m.startIndex, nextIndex).trim();

      if (content.startsWith(':')) {
        content = content.substring(1).trim();
      }

      if (content.length > 0) {
        const titleLower = m.title.toLowerCase();
        let type = 'insight';
        let icon = '💡';

        if (titleLower.includes('recognition') || titleLower.includes('part 1')) {
          type = 'recognition';
          icon = '👁️';
        } else if (titleLower.includes('pattern') || titleLower.includes('part 2')) {
          type = 'pattern';
          icon = '🔄';
        } else if (titleLower.includes('forward') || titleLower.includes('path') || titleLower.includes('part 3')) {
          type = 'path_forward';
          icon = '🌟';
        }

        sections.push({
          type,
          title: m.title.replace(/:/g, '').trim(),
          content,
          icon
        });
      }
    });
  } else {
    sections.push({
      type: 'insight',
      title: 'Your Insight',
      content: text,
      icon: '💡'
    });
  }

  return { sections };
}

interface Message {
  type: 'assistant' | 'user';
  content: string;
  timestamp: Date;
}

interface InsightSection {
  type: string;
  title: string;
  content: string;
  icon: string;
}

interface InsightData {
  sections: InsightSection[];
  generated_at?: string;
  model?: string;
}

export function AnxietyPatternAnalyzerSublesson() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<string[]>(['', '', '', '', '']);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'assistant',
      content: QUESTIONS[0].intro,
      timestamp: new Date()
    },
    {
      type: 'assistant',
      content: QUESTIONS[0].question,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [alreadyCompleted, setAlreadyCompleted] = useState(false);
  const [aiInsight, setAiInsight] = useState<InsightData | null>(null);
  const [showReview, setShowReview] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Check if user already completed assessment
  useEffect(() => {
    const checkExistingAssessment = async () => {
      const { data: { user } } = // Backend removed - auth disabled;
      if (!user) return;

      const { data, error } = // Backend removed - database call
        .from('anxiety_assessments')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (data && !error) {
        setAlreadyCompleted(true);
        setIsComplete(true);
        // Load previous responses
        const prevResponses = [
          data.question_1_response || '',
          data.question_2_response || '',
          data.question_3_response || '',
          data.question_4_response || '',
          data.question_5_response || ''
        ];
        setResponses(prevResponses);
        // Fetch the AI insight if it exists (prefer JSON, fallback to old text format)
        if (data.ai_insight_json) {
          setAiInsight(data.ai_insight_json);
        } else if (data.ai_insight) {
          // Legacy text format - parse it
          setAiInsight(parseLegacyInsight(data.ai_insight));
        }
      }
    };

    checkExistingAssessment();
  }, []);

  const handleNext = async () => {
    if (!input.trim() || isLoading) return;

    const userResponse = input.trim();
    const newResponses = [...responses];
    newResponses[currentQuestion] = userResponse;
    setResponses(newResponses);

    // Add user message to chat
    setMessages(prev => [...prev, {
      type: 'user',
      content: userResponse,
      timestamp: new Date()
    }]);

    setInput('');
    setIsLoading(true);

    // Simulate typing delay for more natural feel
    await new Promise(resolve => setTimeout(resolve, 800));

    // Add follow-up message
    setMessages(prev => [...prev, {
      type: 'assistant',
      content: QUESTIONS[currentQuestion].followUp,
      timestamp: new Date()
    }]);

    await new Promise(resolve => setTimeout(resolve, 600));

    // If this is the last question, get AI insight then save everything to database
    if (currentQuestion === QUESTIONS.length - 1) {
      setMessages(prev => [...prev, {
        type: 'assistant',
        content: "Let me analyze your responses and create a personalized insight for you...",
        timestamp: new Date()
      }]);

      // Backend removed - use default insight
      const insight = {
        sections: [
          {
            type: "recognition",
            title: "Part 1 - Recognition",
            content: "You've taken an important first step in understanding your anxiety.",
            icon: "👁️"
          },
          {
            type: "pattern",
            title: "Part 2 - The Pattern",
            content: "Anxiety often creates cycles that can feel overwhelming, but these patterns are workable.",
            icon: "🔄"
          },
          {
            type: "path_forward",
            title: "Part 3 - The Path Forward",
            content: "This course will teach you proven techniques to break free from anxiety's grip and reclaim your life.",
            icon: "🌟"
          }
        ]
      };
      setAiInsight(insight);
      setIsComplete(true);
      setIsLoading(false);
    } else {
      // Move to next question
      const nextQ = currentQuestion + 1;
      setCurrentQuestion(nextQ);

      // Add next question's intro and question
      setMessages(prev => [...prev, {
        type: 'assistant',
        content: QUESTIONS[nextQ].intro,
        timestamp: new Date()
      }]);

      await new Promise(resolve => setTimeout(resolve, 400));

      setMessages(prev => [...prev, {
        type: 'assistant',
        content: QUESTIONS[nextQ].question,
        timestamp: new Date()
      }]);

      setIsLoading(false);
    }
  };

  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100;

  if (alreadyCompleted) {
    return (
      <div className="w-full max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Assessment Complete</h2>
            <p className="text-gray-600 mb-6">You've already completed your anxiety pattern assessment.</p>
          </div>

          {aiInsight && (
            <div className="mb-6">
              <h4 className="font-bold text-gray-900 mb-4 text-center text-xl">Your Personalized Insight</h4>
              <div className="space-y-4">
                {aiInsight.sections.map((section, idx) => {
                  // Determine colors based on type
                  let bgColor = 'bg-blue-50';
                  let borderColor = 'border-blue-400';

                  if (section.type === 'recognition') {
                    bgColor = 'bg-purple-50';
                    borderColor = 'border-purple-400';
                  } else if (section.type === 'pattern') {
                    bgColor = 'bg-blue-50';
                    borderColor = 'border-blue-400';
                  } else if (section.type === 'path_forward') {
                    bgColor = 'bg-green-50';
                    borderColor = 'border-green-400';
                  }

                  return (
                    <div key={idx} className={`${bgColor} ${borderColor} border-l-4 rounded-lg p-5 shadow-sm`}>
                      <div className="flex items-start gap-3">
                        <span className="text-2xl flex-shrink-0 mt-1">{section.icon}</span>
                        <div className="flex-1">
                          <h5 className="font-bold text-gray-900 mb-2 text-base">{section.title}</h5>
                          <p className="text-gray-700 leading-relaxed text-sm">{section.content}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Review Your Responses */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Your Responses:</h3>
            <div className="space-y-4">
              {QUESTIONS.map((q, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">{q.question}</p>
                  <p className="text-gray-900">{responses[idx] || 'No response provided'}</p>
                </div>
              ))}
            </div>
          </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mb-4">
          <span className="text-3xl">🧠</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Understanding Your Anxiety</h2>
        <p className="text-gray-600">
          Let's have a conversation about your anxiety patterns
        </p>
      </div>

      {/* Progress Bar */}
      {!isComplete && (
        <div className="mb-6">
          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentQuestion + 1} of {QUESTIONS.length}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Chat Interface */}
      {!isComplete ? (
        <div className="bg-white rounded-2xl overflow-hidden flex flex-col" style={{ height: '600px' }}>
          {/* Chat Messages Container */}
          <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message, idx) => (
              <div
                key={idx}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl px-4 py-3">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-4 bg-gray-50">
            <form onSubmit={(e) => { e.preventDefault(); handleNext(); }} className="flex gap-2">
              <div className="flex-1 relative">
                <textarea
                  value={input}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value.length <= MAX_CHARS) {
                      setInput(value);
                    }
                  }}
                  placeholder={QUESTIONS[currentQuestion].placeholder}
                  className="w-full px-4 py-3 pr-16 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-900 placeholder-gray-500"
                  rows={2}
                  disabled={isLoading}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleNext();
                    }
                  }}
                />
                <div className={`absolute bottom-2 right-2 text-xs ${
                  input.length >= MAX_CHARS ? 'text-red-600 font-semibold' : 'text-gray-400'
                }`}>
                  {input.length}/{MAX_CHARS}
                </div>
              </div>
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium self-end"
              >
                Send
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Press Enter to send, Shift+Enter for new line
            </p>
          </div>
        </div>
      ) : (
        <div>
          {/* Completion Message */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Assessment Complete!</h3>
          </div>

          {/* AI Insight */}
          {aiInsight && (
            <div className="mb-6">
              <h4 className="font-bold text-gray-900 mb-4 text-center text-xl">Your Personalized Insight</h4>
              <div className="space-y-4">
                {aiInsight.sections.map((section, idx) => {
                  // Determine colors based on type
                  let bgColor = 'bg-blue-50';
                  let borderColor = 'border-blue-400';

                  if (section.type === 'recognition') {
                    bgColor = 'bg-purple-50';
                    borderColor = 'border-purple-400';
                  } else if (section.type === 'pattern') {
                    bgColor = 'bg-blue-50';
                    borderColor = 'border-blue-400';
                  } else if (section.type === 'path_forward') {
                    bgColor = 'bg-green-50';
                    borderColor = 'border-green-400';
                  }

                  return (
                    <div key={idx} className={`${bgColor} ${borderColor} border-l-4 rounded-lg p-5 shadow-sm`}>
                      <div className="flex items-start gap-3">
                        <span className="text-2xl flex-shrink-0 mt-1">{section.icon}</span>
                        <div className="flex-1">
                          <h5 className="font-bold text-gray-900 mb-2 text-base">{section.title}</h5>
                          <p className="text-gray-700 leading-relaxed text-sm">{section.content}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Toggle Review Button */}
          <div className="mb-6 text-center">
            <button
              onClick={() => setShowReview(!showReview)}
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 mx-auto"
            >
              {showReview ? '▼ Hide' : '▶ Review'} Your Responses
            </button>
          </div>

          {/* Review Responses (Collapsible) */}
          {showReview && (
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-gray-900 mb-4">Your Responses:</h4>
              <div className="space-y-4">
                {QUESTIONS.map((q, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 border border-gray-200">
                    <p className="text-sm font-semibold text-blue-600 mb-2">{q.question}</p>
                    <p className="text-gray-900">{responses[idx]}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Course Introduction */}
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <h4 className="font-bold text-gray-900 mb-3">What This Course Offers:</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span><strong>Understanding Anxiety:</strong> Learn the science behind your symptoms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span><strong>Mindset Tools:</strong> Develop resilience and self-compassion</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span><strong>Thought Management:</strong> Master your relationship with anxious thoughts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span><strong>Physical Acceptance:</strong> Make peace with anxiety sensations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span><strong>Exposure Therapy:</strong> Systematically face and overcome your fears</span>
              </li>
            </ul>
          </div>
        </div>
      )}

    </div>
  );
}
