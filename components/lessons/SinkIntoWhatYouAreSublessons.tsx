'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useAuth } from '../../context/AuthContext';
// Backend removed - Supabase import removed
import { lessonStyles, SimpleInfoCard, LessonCompleteButton } from './shared/LessonStyleHelpers';

// Overview Sublesson Component for Sink Into What You Are
export function SinkIntoWhatYouAreOverviewSublesson({ onComplete: _onComplete, isCompleted: _isCompleted }: { onComplete: () => void; isCompleted: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div className="w-full mx-auto px-4">
      <div className="aspect-video bg-gradient-to-br from-blue-500 to-orange-500 rounded-lg overflow-hidden">
        {!isPlaying ? (
          <div className="w-full h-full bg-gradient-to-br from-blue-600 to-orange-600 flex items-center justify-center cursor-pointer" onClick={handlePlayVideo}>
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
              <svg className="w-6 h-6 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        ) : (
          <video
            className="w-full h-full object-cover"
            controls
            autoPlay
            muted
            playsInline
          >
            <source src="/videos/chapter7.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
}

// Course Review Sublesson Component
export function CourseReviewSublesson({ onComplete, isCompleted: _isCompleted }: { onComplete: () => void; isCompleted: boolean }) {
  const { user } = useAuth();
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [existingReview, setExistingReview] = useState<{ rating: number; feedback: string; created_at: string } | null>(null);

  const handleStarClick = (starRating: number) => {
    setRating(starRating);
  };

  const handleStarHover = (starRating: number) => {
    setHoveredRating(starRating);
  };

  const handleStarLeave = () => {
    setHoveredRating(0);
  };

  // Load existing review on component mount
  useEffect(() => {
    const loadExistingReview = async () => {
      if (!user) return;

      try {
        const { data, error } = // Backend removed - database call
          .from('course_reviews')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (error && error.code !== 'PGRST116') {
          // PGRST116 = no rows returned, which is fine
          console.error('Error loading existing review:', error);
          return;
        }

        if (data) {
          setExistingReview(data);
          setRating(data.rating);
          setFeedback(data.feedback || '');
          setSubmitted(true);
        }
      } catch (error) {
        console.error('Error loading existing review:', error);
      }
    };

    loadExistingReview();
  }, [user]);

  const handleSubmit = async () => {
    if (rating === 0) {
      alert('Please select a star rating before submitting.');
      return;
    }

    if (!user) {
      alert('You must be logged in to submit a review.');
      return;
    }

    // Prevent submission if they already have a review
    if (existingReview) {
      alert('You have already submitted a review. Thank you for your feedback!');
      return;
    }

    setLoading(true);

    try {
      const reviewData = {
        user_id: user.id,
        rating,
        feedback: feedback.trim() || null,
      };

      // Only allow inserting new review, no updates
      const result = // Backend removed - database call
        .from('course_reviews')
        .insert([reviewData]);

      if (result.error) {
        throw result.error;
      }

      setSubmitted(true);
      onComplete();
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('There was an error submitting your review. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Show thank you message if they've already submitted or just submitted
  if (submitted || existingReview) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Your feedback has been submitted successfully. We truly appreciate you taking the time to share your experience with the course.
          </p>
          {existingReview && (
            <div className="mt-6 max-w-xl mx-auto">
              <p className="text-base text-gray-700 mb-3">
                <strong>Your Review:</strong>
              </p>
              <div className="flex items-center justify-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-6 h-6 ${
                      star <= existingReview.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                ))}
              </div>
              {existingReview.feedback && (
                <p className="text-gray-700 italic mb-3">"{existingReview.feedback}"</p>
              )}
              <p className="text-sm text-gray-500">
                Submitted on {new Date(existingReview.created_at).toLocaleDateString()}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Review</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We'd love to hear about your experience with the course. Your feedback helps us improve and helps others on their anxiety recovery journey.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8">
        {/* Star Rating */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">How would you rate this course?</h3>
          <div className="flex items-center justify-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleStarClick(star)}
                onMouseEnter={() => handleStarHover(star)}
                onMouseLeave={handleStarLeave}
                className="transition-all duration-200 transform hover:scale-110"
              >
                <svg
                  className={`w-10 h-10 ${
                    star <= (hoveredRating || rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </button>
            ))}
          </div>
          {rating > 0 && (
            <p className="text-center text-gray-600 mt-2">
              {rating === 1 && "We're sorry the course didn't meet your expectations"}
              {rating === 2 && "Thank you for your feedback - we'll work to improve"}
              {rating === 3 && "Thank you for your honest feedback"}
              {rating === 4 && "Great! We're glad you found the course helpful"}
              {rating === 5 && "Wonderful! We're thrilled you loved the course"}
            </p>
          )}
        </div>

        {/* Feedback Text Area */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Share your thoughts (optional)</h3>
          <p className="text-sm text-gray-600 mb-4">
            What did you find most helpful? What could we improve? Your insights are valuable to us and future students.
          </p>
          <textarea
            value={feedback}
            onChange={(e) => {
              if (e.target.value.length <= 1000) {
                setFeedback(e.target.value);
              }
            }}
            placeholder="The mindset lessons really helped me understand that recovery isn't linear. I wish there were more practical exercises in the exposure section..."
            className="w-full h-64 md:h-48 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-sm text-gray-900 placeholder:text-gray-500"
          />
          <div className="flex justify-end items-center mt-2">
            <p className={`text-xs font-medium ${
              feedback.length >= 1000
                ? 'text-red-500'
                : 'text-gray-500'
            }`}>
              {feedback.length} / 1000 characters
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            onClick={handleSubmit}
            disabled={rating === 0 || loading}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
              rating === 0 || loading
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 shadow-lg hover:shadow-xl'
            }`}
          >
            {loading ? (
              <div className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {existingReview ? 'Updating...' : 'Submitting...'}
              </div>
            ) : (
              existingReview ? 'Update Review' : 'Submit Review'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// Quotes to Live By Sublesson
export function QuotesToLiveBySublesson({ onComplete: _onComplete }: { onComplete: () => void }) {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const toggleFlip = (cardId: string) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  const quotesByChapter = [
    {
      chapter: "Mindsets for Recovery",
      quotes: [
        {
          text: "Life isn't about waiting for the storm to pass, it's about learning to dance in the rain.",
          author: "Vivian Greene",
          image: "/images/7_Beyond/Vivian.png",
          application: "Recovery isn't about waiting until you feel 100% ready or until anxiety completely disappears. It's about developing the mindset that you can move forward right now, even with discomfort present. The tenacity to keep going when it's hard, to practice your techniques when you don't feel like it, to get back up after setbacks—that's what creates lasting change. You don't need perfect conditions to start. You just need the willingness to dance in the rain."
        },
        {
          text: "It's not what we do once in a while that shapes our lives. It's what we do consistently.",
          author: "Tony Robbins",
          image: "/images/7_Beyond/Robbins.png",
          application: "Your brain rewires itself through repetition—this is neuroplasticity. One good day of using your anxiety tools won't cure you, but consistently practicing the Master Observer, acceptance techniques, and gradual exposure will literally change your brain's wiring. Every time you choose not to engage with an anxious thought, every time you lean into discomfort instead of avoiding it, you're strengthening new neural pathways. Recovery isn't built on occasional heroic efforts. It's built on small, consistent actions repeated over time. That's how you rewire anxiety."
        }
      ]
    },
    {
      chapter: "Understanding Anxiety",
      quotes: [
        {
          text: "What we resist persists.",
          author: "Carl Jung",
          image: "/images/7_Beyond/Jung.png",
          application: "When you fight against anxiety, you're giving it more power. The more you try to push it away, the stronger it becomes. This quote reminds us that acceptance, not resistance, is the path forward. By acknowledging anxiety without fighting it, we begin to reduce its hold on us."
        },
        {
          text: "Feelings are just visitors, let them come and go.",
          author: "Mooji",
          image: "/images/7_Beyond/Mooji.png",
          application: "Anxiety is not who you are—it's just a feeling passing through. Too often we identify with our anxiety, thinking 'I am anxious' instead of 'I am experiencing anxiety.' There's a huge difference. You are not your anxiety any more than you are a headache or a sneeze. These feelings are temporary visitors. They arrive, they stay for a while, and they leave. Your job isn't to slam the door on them or beg them to stay away. Just let them visit, acknowledge they're here, and watch them go. You remain you, unchanged at your core."
        }
      ]
    },
    {
      chapter: "Conquering Thoughts",
      quotes: [
        {
          text: "Between stimulus and response there is a space. In that space is our power to choose our response.",
          author: "Viktor Frankl",
          image: "/images/4_Thoughts/frankl.png",
          application: "When Scout sends you an anxious thought, you don't have to immediately react to it. There's a moment—however brief—where you can pause and choose how to respond. This is where the Master Observer comes in. You can notice the thought without believing it, observe it without engaging with it. Your power lies in this space of choice."
        },
        {
          text: "You don't have to control your thoughts. You just have to stop letting them control you.",
          author: "Dan Millman",
          image: "/images/7_Beyond/Millman.png",
          application: "This is the essence of the Master Observer. Scout will send you anxious thoughts—that's his job. But you don't need to engage with every thought, argue with it, or try to suppress it. The goal isn't thought control; it's breaking the pattern where thoughts control you. When Scout says 'What if something terrible happens?' you don't need to convince him otherwise. You just observe the thought, acknowledge it's there, and choose not to let it dictate your actions. That's true freedom."
        }
      ]
    },
    {
      chapter: "Accepting Sensations",
      quotes: [
        {
          text: "You can't stop the waves, but you can learn to surf.",
          author: "Jon Kabat-Zinn",
          image: "/images/7_Beyond/John.jpg",
          application: "Physical sensations of anxiety—racing heart, tight chest, trembling—are like waves in the ocean. You can't stop them from coming, and fighting against them only exhausts you. But you can learn to surf them. Use your acceptance techniques: be curious about the sensations, allow them to be there, float through them without resistance. The wave will pass whether you fight it or ride it, but riding it is so much easier. That's what this chapter teaches you—how to surf."
        },
        {
          text: "Feel the fear and do it anyway.",
          author: "Susan Jeffers",
          image: "/images/7_Beyond/susanJ.png",
          application: "You don't need to wait until the physical sensations of anxiety disappear before you engage with life. You can have a racing heart AND go to the party. You can feel trembling AND give the presentation. The sensations don't need to control your actions. Acceptance means moving forward with the sensations present, not waiting for them to leave."
        }
      ]
    },
    {
      chapter: "Gradual Exposure",
      quotes: [
        {
          text: "The only way out is through.",
          author: "Robert Frost",
          image: "/images/7_Beyond/Frost.png",
          application: "Avoidance keeps you stuck in the anxiety cycle. The only path to freedom is facing the situations that trigger your anxiety—not to prove they're safe, but to practice a new response to the anxiety itself. Gradual exposure isn't about eliminating fear; it's about going through it with your new tools and discovering you can handle it."
        },
        {
          text: "How fast would you fail if you knew the other version of you was 30 failures away?",
          author: "Sam",
          image: "/images/7_Beyond/Sam.png",
          application: "Every failed exposure, every panic attack you survived, every uncomfortable situation you faced—these aren't setbacks, they're steps forward. Somewhere out there is a version of you who's 30 failures ahead, and that version is free. They're not free because they stopped failing—they're free because they failed faster. Stop treating each difficult exposure like a catastrophe and start seeing it as one more rep completed. The only way to get to that freer version of yourself is through the failures, not around them. So how fast can you fail?"
        }
      ]
    },
    {
      chapter: "Your Continued Journey",
      quotes: [
        {
          text: "Sink into what you are.",
          author: "Duncan Trussell",
          image: "/images/7_Beyond/Duncan.png",
          application: "So much of anxiety comes from trying to be someone you're not—living up to others' expectations, forcing yourself into roles that don't fit, hiding your true nature. When you constantly resist who you really are, that internal conflict manifests as anxiety. Recovery isn't just about managing symptoms; it's about the courage to sink into your authentic self. When you stop fighting against your true nature and start living in alignment with who you actually are, anxiety loses much of its grip. Be you, unapologetically."
        },
        {
          text: "Keep going because you deserve to see what happens when all your hard work pays off.",
          author: "Writer's Cramp",
          image: "/images/7_Beyond/Cramp.jpg",
          application: "You've put in the work. You've learned the techniques, practiced the tools, faced your fears. Now comes the part where you get to see the results of all that effort. Don't give up before you experience what it's like to live with less anxiety, more freedom, and genuine peace. You've earned the right to witness your own transformation. The best part of your journey is still ahead—you just have to keep going long enough to see it unfold. You deserve that."
        }
      ]
    }
  ];

  return (
    <div className={lessonStyles.container}>
      <div className={lessonStyles.header}>
        <h2 className={lessonStyles.title}>Quotes to Live By</h2>
        <p className={lessonStyles.subtitle}>Words of wisdom organized by what you've learned</p>
      </div>

      <div className="max-w-5xl mx-auto">
        <SimpleInfoCard title="" variant="noBorder">
          <div className="space-y-4 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              These quotes connect directly to the principles you've learned in each chapter.
              <strong> Click any card to see how it applies to your recovery journey.</strong>
            </p>
          </div>

          {/* Quotes by Chapter */}
          {quotesByChapter.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{section.chapter}</h3>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {section.quotes.map((quote, quoteIndex) => {
                  const cardId = `${sectionIndex}-${quoteIndex}`;
                  const isFlipped = flippedCards.has(cardId);

                  return (
                    <div key={quoteIndex} className="bg-white rounded-xl overflow-hidden border-2 border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                      {/* Quote Image */}
                      <div className="relative w-full h-80">
                        <Image
                          src={quote.image}
                          alt={`${quote.author} quote`}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Quote Content */}
                      <div className="p-4 flex-grow flex flex-col">
                        <div className="text-blue-200 text-4xl font-serif leading-none mb-2">"</div>
                        <blockquote className="text-gray-800 text-lg font-medium leading-relaxed mb-3 italic">
                          {quote.text}
                        </blockquote>
                        <p className="text-blue-600 font-semibold mb-3">— {quote.author}</p>

                        {/* Expandable Application - pushed to bottom */}
                        <button
                          onClick={() => toggleFlip(cardId)}
                          className="w-full text-left mt-auto"
                        >
                          <div className={`border-t pt-4 ${isFlipped ? 'border-blue-300' : 'border-gray-200'}`}>
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-bold text-gray-900 text-sm">How This Applies</h4>
                              <span className="text-gray-400 text-xl">{isFlipped ? '−' : '+'}</span>
                            </div>
                            {isFlipped && (
                              <p className="text-gray-700 text-sm leading-relaxed mt-3">
                                {quote.application}
                              </p>
                            )}
                          </div>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Bottom Message */}
          <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
            <p className="text-center text-gray-700 text-lg leading-relaxed">
              <strong className="text-blue-700">Remember:</strong> These aren't just nice words—
              they're truths you've proven to yourself through this course. Carry them with you.
            </p>
          </div>

        </SimpleInfoCard>
      </div>
    </div>
  );
}

// Personal Letter from Creator - Final Message
export function FinalMessageSublesson({ onComplete }: { onComplete: () => void }) {
  return (
    <div className={lessonStyles.container}>
      <div className={lessonStyles.header}>
        <h2 className={lessonStyles.title}>A Personal Letter to You</h2>
        <p className={lessonStyles.subtitle}>From the creator of this course</p>
      </div>

      <div className="max-w-3xl mx-auto">
        <SimpleInfoCard title="" variant="noBorder">
          <div className="space-y-6 text-gray-700 leading-relaxed">

            {/* Opening */}
            <div className="text-center mb-8">
              <p className="text-lg italic text-gray-600">Dear Friend,</p>
            </div>

            {/* Main letter content */}
            <div className="space-y-5 text-base">
              <p>
                As you reach the end of this course, I want you to know something that might sound simple
                but is profoundly true: <strong>you are a completely unique combination of DNA, experiences,
                thoughts, and dreams that has never existed before in the history of the universe, and will
                never exist again.</strong>
              </p>

              <p>
                Think about that for a moment. Out of the billions of people who have lived, are living,
                and will live on this planet, there is only one you. Your particular way of seeing the world,
                your specific combination of strengths and challenges, your unique perspective on life -
                all of this makes you irreplaceable.
              </p>

              <p>
                The anxiety you have been carrying doesn't define you - it's just been along for the ride.
                Now that you have these tools to work with it, <strong>you get to decide what comes next.</strong>
                What brings you meaning? What makes you come alive? What would you pursue if anxiety wasn't
                holding you back?
              </p>

              <p>
                I'll be honest with you - I'm still figuring that out myself. Building this course has
                been part of my own journey of discovery. Some days I know exactly why I'm here and what
                I'm meant to contribute. Other days, I'm just as confused as anyone else about what it all means.
              </p>

              <p>
                But here's what I've learned: <strong>the figuring-it-out part is actually the point.</strong>
                The searching, the experimenting, the trying new things and sometimes failing - that's not
                a detour from your real life, that IS your real life. And it's beautiful, even when it's messy.
              </p>

              <p>
                You have put in the hard work to understand your anxiety and develop new ways of relating
                to it. That takes incredible courage and persistence. But this is just the beginning.
                <strong>You deserve to see what happens when you take all that strength and apply it to
                building a life that truly excites you.</strong>
              </p>

              <p>
                Maybe you don't know what that looks like yet - that's okay. Maybe you have some ideas
                but they feel scary to pursue - that's normal. The anxiety might try to talk you out of
                taking risks or following your curiosity. When it does, remember everything you've learned
                here. You know how to listen to that voice without being controlled by it.
              </p>

              <p>
                <strong>Keep going.</strong> Not just with managing your anxiety, but with discovering
                who you are and what you're here to contribute to the world. Follow the things that spark
                something in you, even if they seem impractical or impossible. Trust that the same strength
                that got you through this course will carry you through whatever comes next.
              </p>

              <p>
                The world needs what you have to offer. Not what someone else has to offer, but specifically
                what YOU bring to the table. Your unique combination of experiences, including your struggle
                with anxiety, has given you insights and compassion that others need.
              </p>

              <p>
                Here's something that might surprise you: <strong>my deepest hope is that you completely forget
                about this course.</strong> I want you to become so wrapped up and thrilled in your own life,
                so absorbed in pursuing your passions and interests, that anxiety management becomes just
                background noise. I want you to find your flow state with life - that place where you're
                so engaged in what you're doing that time disappears and you feel completely alive.
              </p>

              <p>
                I want you to pursue what lights you up regardless of what anyone else has to say about it.
                Your parents, your friends, society's expectations - none of that matters as much as what
                makes YOU come alive. When you find that thing (or those things) that put you in flow,
                chase them with everything you've got. That's where you'll find not just healing, but joy.
              </p>

              <p>
                I believe in you. I believe in your ability to not just survive, but to thrive. I believe
                you will look back on this time as a turning point - not just the time you learned to manage
                anxiety, but the time you started becoming who you were always meant to be.
              </p>

              <p className="text-lg font-medium text-gray-900 mt-8">
                You deserve to see the outcome of all your hard work. Please don't give up before you do.
              </p>
            </div>

            {/* Closing signature */}
            <div className="text-center mt-10 pt-8 border-t border-gray-200">
              <p className="text-lg italic text-gray-600 mb-2">With gratitude and hope,</p>
              <p className="text-xl font-semibold text-gray-900">The TheBrainDump Team</p>
              <p className="text-sm text-gray-500 mt-2">
                Created with care for your journey to freedom
              </p>
            </div>

          </div>
        </SimpleInfoCard>

        {/* Beautiful closing visual */}
        <div className="text-center mt-12 mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full mb-4">
            <span className="text-3xl">🌟</span>
          </div>
          <p className="text-sm text-gray-500 italic">
            Your journey continues...
          </p>
        </div>

        <LessonCompleteButton
          chapterId={7}
          chapterTitle="Chapter 7"
          onComplete={onComplete}
        />

      </div>
    </div>
  );
}