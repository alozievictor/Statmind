import React from "react";
import { Link } from "react-router-dom";
import {
  // Twitter,
  //  Instagram,
  Gpu,
  Mail,
} from "lucide-react";
import logo from "../assets/Logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
        { name: "Delete Account", path: "/delete-account" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms & Conditions", path: "/terms-conditions" },
      ],
    },
    {
      title: "Social",
      links: [
        // { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/statmind' },
        // { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/statmind' },
        { name: "Github", icon: Gpu, href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-brand-bg border-t border-white/5 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src={logo}
                alt="Statmind logo"
                className="w-44 h-10 object-contain"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm max-w-xs">
              Statmind is a premium, data-driven sports betting analytics and
              prediction mobile application. Elevate your betting game with
              AI-powered insights.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:support@statmind.app"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-brand-accent/20 transition-all text-gray-400 hover:text-brand-accent border border-white/5"
              >
                <Mail size={20} />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-brand-accent/20 transition-all text-gray-400 hover:text-brand-accent border border-white/5"
              >
                {/* <Twitter size={20} /> */}
              </a>
              <a
                href="#"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-brand-accent/20 transition-all text-gray-400 hover:text-brand-accent border border-white/5"
              >
                {/* <Instagram size={20} /> */}
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.slice(0, 2).map((section) => (
            <div key={section.title} className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-brand-accent transition-colors text-sm hover:translate-x-1 inline-block transform duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter / CTA */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Stay Ahead
            </h4>
            <p className="text-gray-400 text-sm">
              Subscribe for expert picks and platform updates.
            </p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all placeholder:text-gray-600"
              />
              <button className="absolute right-2 top-2 bottom-2 px-4 bg-brand-accent rounded-lg text-xs font-bold hover:scale-105 transition-transform active:scale-95">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {currentYear} Statmind App. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-400">
            <Link
              to="/privacy-policy"
              className="hover:text-brand-accent transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="/terms-conditions"
              className="hover:text-brand-accent transition-colors"
            >
              Terms
            </Link>
            <Link
              to="/contact"
              className="hover:text-brand-accent transition-colors"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
