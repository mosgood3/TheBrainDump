'use client';

import React from 'react';
import { lessonStyles, SimpleInfoCard, LessonCompleteButton } from '../../shared/LessonStyleHelpers';

export function Chapter1RecapSublesson({ onComplete, isCompleted: _isCompleted }: { onComplete: () => void; isCompleted: boolean }) {
  return (
    <div className={lessonStyles.container}>
      <div className={lessonStyles.header}>
        <div className={lessonStyles.icon}>📚</div>
        <h2 className={lessonStyles.title}>Chapter Recap</h2>
        <p className={lessonStyles.subtitle}>Consolidating everything you&apos;ve learned about your recovery journey</p>
      </div>

      <SimpleInfoCard title="Chapter 1 Summary: Understanding Your Path to Recovery" variant="noBorder">
        <div className="space-y-6 text-gray-700">
          {/* Introduction */}
          <div>
            <p className="text-base leading-relaxed">
              In this chapter, you&apos;ve explored the fundamental approach to anxiety recovery. You&apos;ve learned
              that true freedom comes not from eliminating anxiety, but from developing <strong>indifference</strong> to it.
              You&apos;ve discovered the science-backed methods that create lasting change, identified potential causes
              of your anxiety, and reflected on your personal journey. Let&apos;s consolidate what you&apos;ve learned.
            </p>
          </div>

          {/* What You Learned Section */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">What You Learned</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-gray-900 mb-2">🎯 Indifference: The Goal of Recovery</h5>
                <p className="text-sm leading-relaxed">
                  You learned that the goal isn&apos;t to eliminate anxiety—it&apos;s to become <strong>indifferent</strong> to it.
                  Just like the monster under the bed that once terrified you but now seems silly, anxiety can fade into the
                  background of your life when you stop fearing it. Indifference is achieved through action, not thinking—each
                  time you act indifferently toward anxiety, you rewire your brain&apos;s response patterns.
                </p>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-2">🧠 The Science Behind Recovery</h5>
                <p className="text-sm leading-relaxed">
                  Recovery is built on three elements: <strong>how you see anxiety</strong>, <strong>how you respond to it</strong>,
                  and <strong>allowing time for your brain to rewire</strong>. The mindset shift from "fighting anxiety" to "coexisting
                  with anxiety" is the most important part. You learned about <strong>tenacity</strong>—the persistent determination to
                  keep practicing new responses even when anxiety feels overwhelming. Through <strong>neuroplasticity</strong>, your brain
                  can form new neural pathways that support calm, confident responses instead of anxious reactions.
                </p>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-2">🔬 The Three Core Approaches</h5>
                <p className="text-sm leading-relaxed">
                  You discovered the three pillars of recovery: <strong>Mindfulness</strong> (observing thoughts without getting caught
                  up in them), <strong>Acceptance</strong> (allowing anxiety to be present without fighting it), and <strong>Gradual
                  Exposure</strong> (facing anxiety-provoking situations to rewire your brain). The key principle: we must activate
                  an anxious pathway to rewire it—you can&apos;t change your brain&apos;s response by avoiding anxiety.
                </p>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-2">⚕️ Physiological vs Psychological Causes</h5>
                <p className="text-sm leading-relaxed">
                  You learned to distinguish between physiological causes (medical conditions like thyroid disorders, vitamin
                  deficiencies, heart conditions) and psychological causes (traumatic experiences, chronic stress, learned fear
                  patterns). For those with health anxiety, you learned to recognize the signs: multiple normal tests, persistent
                  symptom searching, relief followed by new worries. If medical evaluation is normal, it&apos;s time to trust the
                  diagnosis and address the psychological aspect.
                </p>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-2">🔄 Addiction & Lifestyle Factors</h5>
                <p className="text-sm leading-relaxed">
                  You discovered how addiction creates a destructive cycle that raises baseline anxiety through the pleasure-pain
                  balance. Each time you use a substance or engage in addictive behavior, your brain creates an equal opposite pain
                  response, making your new "normal" a heightened state of anxiety. You also learned that lifestyle factors—while
                  not always curative—create favorable conditions for recovery. Poor sleep, sedentary lifestyle, and isolation
                  increase anxiety sensitivity, while consistent sleep, regular movement, and social connection support recovery.
                </p>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-2">💭 Your Personal Reflection</h5>
                <p className="text-sm leading-relaxed">
                  You took time to reflect on your unique anxiety experience: your symptoms, triggers, life impact, and recovery
                  goals. This reflection serves as your starting point—a baseline to return to as you progress through the course
                  and witness your relationship with anxiety transform.
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
                <span><strong>Indifference, not elimination</strong> - The goal is to become unbothered by anxiety&apos;s presence, not to make it disappear</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span><strong>Mindset is everything</strong> - How you see and respond to anxiety determines your recovery trajectory more than any technique</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span><strong>Action creates change</strong> - Understanding isn&apos;t enough; you must practice new responses to rewire your brain through neuroplasticity</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span><strong>No coping strategies needed</strong> - Traditional techniques reinforce that anxiety is dangerous; recovery means doing nothing special about anxiety</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span><strong>Tenacity is your key</strong> - Persistent determination to keep practicing recovery responses, even when anxiety feels overwhelming, carries you to freedom</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span><strong>Address the root causes</strong> - Rule out physiological causes, break addiction cycles that raise baseline anxiety, and optimize lifestyle factors</span>
              </li>
            </ul>
          </div>

          {/* The Bigger Picture */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">🌍 The Bigger Picture</h4>
            <p className="text-sm leading-relaxed mb-3">
              This chapter laid the foundation for your entire recovery journey. You now understand that anxiety recovery
              isn&apos;t about learning complex techniques or achieving perfect conditions—it&apos;s about a fundamental shift
              in how you relate to anxiety itself.
            </p>
            <p className="text-sm leading-relaxed">
              The combination of mindfulness, acceptance, and gradual exposure—all practiced with tenacity—creates permanent
              changes in your brain&apos;s neural pathways. You&apos;re not just managing symptoms; you&apos;re rewiring the
              very patterns that keep anxiety disorders alive. This is why the approach creates lasting freedom rather than
              temporary relief.
            </p>
          </div>

          {/* Moving Forward */}
          <div className="border-t border-gray-200 pt-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">🚀 Moving Forward</h4>
            <p className="text-base leading-relaxed mb-4">
              With this foundation in place, you&apos;re ready to dive deeper into the specific mechanisms of anxiety and
              how to work with them. The next chapters will build on these principles, giving you the practical tools and
              deeper understanding to transform your relationship with anxiety.
            </p>
            <p className="text-base leading-relaxed font-medium text-gray-900">
              Remember: Recovery is possible. You&apos;ve already taken the most important step by being here and understanding
              the path forward. Trust the process, practice tenacity, and allow your brain the time it needs to rewire.
              Freedom from anxiety&apos;s grip is within your reach.
            </p>
          </div>
        </div>
      </SimpleInfoCard>

      <LessonCompleteButton
        chapterId={1}
        chapterTitle="Chapter 1"
        onComplete={onComplete}
      />
    </div>
  );
}
