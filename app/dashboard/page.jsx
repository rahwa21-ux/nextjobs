import {
  Search,
  TrendingUp,
  Users,
  Shield,
  Zap,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const featuredJobs = mockJobs.slice(0, 6);
  const popularSearches = [
    "React Developer",
    "Remote",
    "Python",
    "Product Manager",
    "Data Scientist",
    "Marketing",
    "Sales",
    "DevOps",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your Dream Job Across{" "}
              <span className="text-yellow-300">Multiple Platforms</span>
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              We aggregate jobs from LinkedIn, Indeed, Glassdoor, and more to
              simplify your search
            </p>
            <div className="bg-white rounded-lg p-2 shadow-xl">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Job title, skills, or company"
                      className="w-full pl-10 pr-4 py-3 text-gray-900 rounded-lg focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="City, state, or remote"
                      className="w-full pl-10 pr-4 py-3 text-gray-900 rounded-lg focus:outline-none"
                    />
                  </div>
                </div>
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Search Jobs
                </button>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <span className="text-primary-200">Popular:</span>
              {popularSearches.map((search, index) => (
                <Link
                  key={index}
                  href={`/jobs?q=${search}`}
                  className="bg-primary-700 hover:bg-primary-600 px-4 py-2 rounded-full text-sm transition-colors"
                >
                  {search}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                10,000+
              </div>
              <div className="text-gray-600">Jobs Posted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                500+
              </div>
              <div className="text-gray-600">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                95%
              </div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                24h
              </div>
              <div className="text-gray-600">Fast Updates</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Featured Jobs
              </h2>
              <p className="text-white">
                Curated opportunities from top companies
              </p>
            </div>
            <Link
              href="/jobs"
              className="text-primary-600 hover:text-primary-700 font-semibold flex items-center"
            >
              View All Jobs <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose NextJobs?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Real-time Updates</h3>
              <p className="text-gray-600">
                Get instant notifications for new job postings
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Smart Matching</h3>
              <p className="text-gray-600">
                AI-powered job recommendations based on your profile
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Verified Listings</h3>
              <p className="text-gray-600">
                We verify all job postings to prevent scams
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quick Apply</h3>
              <p className="text-gray-600">
                Apply to multiple jobs with one-click applications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Find Your Dream Job?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join thousands of job seekers who found their perfect match
              through our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
              >
                Get Started Free
              </Link>
              {/*<Link
                href="/jobs"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
              >
                Browse Jobs
              </Link>*/}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
