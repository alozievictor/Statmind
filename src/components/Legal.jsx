import React from "react";
import {
  Shield,
  ArrowLeft,
  Lock,
  FileText,
  Eye,
  Database,
  Bell,
  UserCheck,
  Cookie,
  Globe,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Legal = () => {
  // const sections = [
  //   {
  //     icon: <Database className="w-6 h-6 text-brand-accent" />,
  //     title: "Information We Collect",
  //     content:
  //       "We collect information you provide directly to us, such as when you create an account, place bets, or contact us for support. This includes your name, email address, phone number, and betting preferences.",
  //   },
  //   {
  //     icon: <FileText className="w-6 h-6 text-brand-purple" />,
  //     title: "How We Use Data",
  //     content:
  //       "Your information helps us provide and improve our betting prediction services. We use this information to provide personalized recommendations, process bets, and improve our AI prediction algorithms.",
  //   },
  //   {
  //     icon: <Lock className="w-6 h-6 text-red-400" />,
  //     title: "Data Security",
  //     content:
  //       "We implement industry-standard security measures to protect your personal information. Your data is encrypted both in transit and at rest, and we never sell your data to third parties.",
  //   },
  // ];

  return (
    <div className="py-20 px-4 min-h-screen bg-brand-bg">
      <div className="transition-colors duration-300 py-12 px-4">
        <div className="w-[90%] md:w-[85%] mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl shadow-xl overflow-hidden border border-white/5 "
          >
            <div className="p-8 md:p-12">
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="text-blue-600 dark:text-blue-400 w-10 h-10" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Privacy Policy
                </h1>
                <h2 className="text-xl font-medium text-gray-600 dark:text-gray-300">
                  Your Privacy Matters
                </h2>
                <p className="text-gray-400 dark:text-gray-500 mt-2 text-sm">
                  Last Updated: March 15, 2026
                </p>
              </div>

              <div className="space-y-12">
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="w-6 h-6 text-blue-500" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Information We Collect
                    </h3>
                  </div>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                    <p>
                      We collect information you provide directly to us, such as
                      when you create an account, place bets, or contact us for
                      support. This includes your name, email address, phone
                      number, and betting preferences.
                    </p>
                    <p>
                      We also automatically collect certain information about
                      your device and usage patterns to improve our services and
                      provide personalized recommendations.
                    </p>
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-purple-500" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      How We Use Your Information
                    </h3>
                  </div>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                    <p>
                      Your information helps us provide and improve our betting
                      prediction services. We use this information to:
                    </p>
                    <ul className="list-none space-y-3 pl-2">
                      {[
                        "Provide personalized betting recommendations",
                        "Process and track your bets",
                        "Send important account and service updates",
                        "Improve our AI prediction algorithms",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <Lock className="w-6 h-6 text-red-500" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Data Security
                    </h3>
                  </div>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                    <p>
                      We implement industry-standard security measures to
                      protect your personal information. Your data is encrypted
                      both in transit and at rest, and we regularly audit our
                      security practices.
                    </p>
                    <p>
                      We never sell your personal information to third parties,
                      and we only share data with trusted partners who help us
                      provide our services.
                    </p>
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <UserCheck className="w-6 h-6 text-green-500" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Your Rights
                    </h3>
                  </div>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                    <p>You have the right to:</p>
                    <ul className="list-none space-y-3 pl-2">
                      {[
                        "Access and update your personal information",
                        "Delete your account and associated data",
                        "Opt out of marketing communications",
                        "Request a copy of your data",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <Cookie className="w-6 h-6 text-yellow-500" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Cookies and Tracking
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    We use cookies and similar technologies to enhance your
                    experience, analyze usage patterns, and provide personalized
                    content. You can control cookie settings through your
                    browser.
                  </p>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="w-6 h-6 text-indigo-500" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Third-Party Services
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Our app integrates with third-party services for analytics,
                    payment processing, and sports data. These services have
                    their own privacy policies, and we encourage you to review
                    them.
                  </p>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <Bell className="w-6 h-6 text-orange-500" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Changes to This Policy
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    We may update this privacy policy from time to time. We will
                    notify you of any material changes by posting the new policy
                    in the app and sending you a notification.
                  </p>
                </section>

                <div className="mt-12 p-8 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageCircle className="w-6 h-6 text-blue-500" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white underline underline-offset-8 decoration-blue-500/30">
                      Questions?
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    If you have any questions about this privacy policy, please
                    contact us at:
                  </p>
                  <a
                    href="mailto:support@statmind.ai"
                    className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                  >
                    legal@statmind.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
