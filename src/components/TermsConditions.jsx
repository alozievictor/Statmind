import React from 'react';
import { Scale } from 'lucide-react';

const sections = [
  {
    title: 'Acceptance of Terms',
    body: [
      'By accessing and using PropAI, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
    ]
  },
  {
    title: 'Service Description',
    body: [
      'PropAI provides AI-powered sports betting predictions and analysis. Our service includes:'
    ],
    bullets: [
      'Statistical analysis and predictions',
      'Betting recommendations and grades',
      'Performance tracking and analytics',
      'Community features and discussions'
    ]
  },
  {
    title: 'Important Disclaimers',
    body: [
      'Gambling Risks: Sports betting involves risk. Never bet more than you can afford to lose. Our predictions are for informational purposes only and do not guarantee winning outcomes.',
      'Age Restriction: You must be at least 18 years old (or the legal gambling age in your jurisdiction) to use this service.',
      'Legal Compliance: You are responsible for ensuring that your use of our service complies with all applicable laws in your jurisdiction.'
    ]
  },
  {
    title: 'User Responsibilities',
    body: ['As a user of PropAI, you agree to:'],
    bullets: [
      'Provide accurate and truthful information',
      'Keep your account credentials secure',
      'Use the service responsibly and legally',
      'Respect other users and community guidelines'
    ]
  },
  {
    title: 'Prohibited Activities',
    body: ['You may not:'],
    bullets: [
      'Share your account with others',
      'Attempt to reverse engineer our algorithms',
      'Use automated tools to access our service',
      'Engage in fraudulent or illegal activities'
    ]
  },
  {
    title: 'Subscription and Payments',
    body: [
      'Subscription fees are billed in advance and are non-refundable. You may cancel your subscription at any time, but you will continue to have access until the end of your current billing period.'
    ]
  },
  {
    title: 'Limitation of Liability',
    body: [
      'PropAI shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of our service, including but not limited to gambling losses.'
    ]
  },
  {
    title: 'Termination',
    body: [
      'We reserve the right to terminate or suspend your account at any time for violation of these terms or for any other reason we deem appropriate.'
    ]
  },
  {
    title: 'Changes to Terms',
    body: [
      'We may modify these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.'
    ]
  }
];

const TermsConditions = () => {
  return (
    <div className="py-20 px-4 min-h-screen bg-brand-bg">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/3 border border-white/10 rounded-3xl p-6 md:p-10">
          <div className="text-center mb-10 md:mb-12">
            <div className="w-20 h-20 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mx-auto mb-5">
              <Scale className="w-10 h-10 text-brand-accent" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Terms Of Service</h1>
            <p className="text-gray-400 dark:text-gray-500 mt-2 text-sm">Effective : March 15, 2026</p>
          </div>

          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{section.title}</h2>

                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {section.body.map((paragraph, index) => (
                    <p key={`${section.title}-${index}`}>{paragraph}</p>
                  ))}
                </div>

                {section.bullets && (
                  <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300 leading-relaxed">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="mt-10 p-5 md:p-6 bg-white/10 border border-white/10 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
              For questions about these terms, please contact us at:
            </p>
            <a href="mailto:legal@statmind.com" className="text-emerald-400 font-semibold hover:underline">
              legal@statmind.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
