import Link from "next/link";
import { Briefcase, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    "Job Seekers": [
      { label: "Browse Jobs", href: "/jobs" },
      { label: "Career Advice", href: "/advice" },
      { label: "Resume Builder", href: "/resume-builder" },
      { label: "Salary Calculator", href: "/salary-calculator" },
    ],
    Employers: [
      { label: "Post a Job", href: "/post-job" },
      { label: "Pricing", href: "/pricing" },
      { label: "Employer Resources", href: "/employers" },
      { label: "Hire Talent", href: "/hire" },
    ],
    Company: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "GDPR", href: "/gdpr" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Briefcase className="h-8 w-8 text-primary-400" />
              <span className="text-2xl font-bold">NextJobs</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              We aggregate jobs from multiple platforms to help you find your
              dream job faster. Search smarter, not harder.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-3" />
                <span>support@NextJobs.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-3" />
                <span>+251 (939) 098-222</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-3" />
                <span>Adiss-Ababa, Bole</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-lg mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} NextJobs. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-gray-400">Aggregated from:</span>
              <div className="flex space-x-4">
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded">
                  LinkedIn
                </span>
                <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded">
                  Indeed
                </span>
                <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded">
                  Glassdoor
                </span>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded">
                  AngelList
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
