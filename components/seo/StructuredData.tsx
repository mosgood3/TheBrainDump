export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "The Brain Dump",
    "alternateName": "TheBrainDump",
    "url": "https://thebraindump.com",
    "logo": "https://thebraindump.com/logo.png",
    "description": "The Brain Dump - Interactive platform helping you overcome anxiety and achieve lasting relief through evidence-based techniques including CBT, mindfulness, and exposure therapy",
    "sameAs": [
      // Add social media profiles when available
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "The Brain Dump",
    "alternateName": "TheBrainDump",
    "url": "https://thebraindump.com",
    "description": "The Brain Dump - Your path to anxiety relief and freedom through evidence-based interactive lessons, CBT techniques, mindfulness practices, and exposure therapy",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://thebraindump.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "The Brain Dump - Anxiety Relief & Freedom Course",
    "alternateName": "Break Free From Anxiety - Interactive Freedom Course",
    "description": "The Brain Dump is a comprehensive anxiety relief course teaching proven techniques to overcome anxiety, panic attacks, and worry. Learn CBT therapy, mindfulness practices, and exposure therapy for lasting anxiety freedom and mental health improvement.",
    "provider": {
      "@type": "Organization",
      "name": "The Brain Dump",
      "url": "https://thebraindump.com"
    },
    "educationalLevel": "Beginner to Intermediate",
    "teaches": "Anxiety relief, overcoming anxiety, CBT techniques, mindfulness, exposure therapy, cognitive restructuring, panic attack management, anxiety symptoms treatment",
    "coursePrerequisites": "None - suitable for anyone experiencing anxiety",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseWorkload": "Self-paced"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is The Brain Dump?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Brain Dump is an evidence-based online platform providing anxiety relief through interactive lessons. It helps you overcome anxiety, panic attacks, and worry using proven techniques including CBT therapy, mindfulness practices, and exposure therapy."
        }
      },
      {
        "@type": "Question",
        "name": "How does The Brain Dump help with anxiety relief?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Brain Dump uses a comprehensive anxiety relief course with interactive lessons teaching proven techniques to overcome anxiety. The course includes cognitive behavioral therapy (CBT), mindfulness practices, and gradual exposure therapy. You work through the lessons at your own pace on your journey to anxiety freedom and lasting mental health improvement."
        }
      },
      {
        "@type": "Question",
        "name": "Is The Brain Dump evidence-based for anxiety treatment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all anxiety relief techniques taught in The Brain Dump are based on scientific research and proven therapeutic approaches for anxiety treatment including CBT (Cognitive Behavioral Therapy), mindfulness-based stress reduction, and exposure therapy for lasting anxiety freedom."
        }
      },
      {
        "@type": "Question",
        "name": "Can The Brain Dump help with panic attacks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, The Brain Dump includes specific techniques and lessons for managing and overcoming panic attacks. The course teaches you how to understand anxiety symptoms, reduce panic attack frequency, and build long-term anxiety relief through evidence-based methods."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
