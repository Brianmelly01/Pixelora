import Link from "next/link";
import { Zap, Mail, Phone, MapPin, Globe, MessageCircle, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-[rgba(168,85,247,0.15)] bg-[#070012] overflow-hidden">
      {/* Orbs */}
      <div className="orb orb-purple w-96 h-96 -bottom-48 -left-24 opacity-30" />
      <div className="orb orb-blue w-80 h-80 -bottom-40 right-0 opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" fill="white" />
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: "Outfit, sans-serif" }}>
                <span className="gradient-text">Pixel</span>
                <span className="text-white">ora</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              From pixel to product — we craft stunning designs that bring your brand to life. 
              Custom printing, branding & creative design for modern businesses.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Globe, href: "#", label: "Instagram" },
                { icon: MessageCircle, href: "#", label: "Twitter" },
                { icon: Send, href: "#", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-purple-400 transition-all hover:scale-110"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Services", href: "/services" },
                { label: "Order / Quote", href: "/order" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:hello@pixelora.com"
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
                >
                  hello@pixelora.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+254700000000"
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
                >
                  +254 700 000 000
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[rgba(168,85,247,0.1)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Pixelora. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Crafted with{" "}
            <span className="gradient-text font-semibold">passion</span> for creative brands.
          </p>
        </div>
      </div>
    </footer>
  );
}
