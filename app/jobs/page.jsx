"use client";
import { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
import FilterSidebar from "../components/FilterSidebar";
import { mockJobs } from "../data/mockData";
import { Filter, Grid, List, ChevronDown } from "lucide-react";

export default function JobsPage() {
  const [jobs, setJobs] = useState(mockJobs);
  const [filteredJobs, setFilteredJobs] = useState(mockJobs);
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("recent");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;

  const handleFilterChange = (filters) => {
    let filtered = [...jobs];

    if (filters.jobType.length > 0) {
      filtered = filtered.filter((job) =>
        filters.jobType.includes(job.type.toLowerCase()),
      );
    }

    if (filters.experience.length > 0) {
      filtered = filtered.filter((job) =>
        filters.experience.includes(job.experience.toLowerCase()),
      );
    }

    if (filters.remote) {
      filtered = filtered.filter((job) => job.remote);
    }

    if (filters.salaryRange) {
      filtered = filtered.filter((job) => {
        const salary = parseSalary(job.salary);
        return (
          salary >= filters.salaryRange[0] && salary <= filters.salaryRange[1]
        );
      });
    }

    setFilteredJobs(filtered);
  };

  const parseSalary = (salaryString) => {
    if (!salaryString) return 0;
    const numbers = salaryString.match(/\d+/g);
    if (numbers) {
      return parseInt(numbers[0]) * 1000;
    }
    return 0;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setFilteredJobs(jobs);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.tags.some((tag) => tag.toLowerCase().includes(query)),
    );
    setFilteredJobs(results);
  };

  const sortedJobs = [...filteredJobs].sort((a, b) => {
    switch (sortBy) {
      case "recent":
        return new Date(b.postedAt) - new Date(a.postedAt);
      case "salary":
        return parseSalary(b.salary) - parseSalary(a.salary);
      case "company":
        return a.company.localeCompare(b.company);
      default:
        return 0;
    }
  });

  const totalPages = Math.ceil(sortedJobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const paginatedJobs = sortedJobs.slice(startIndex, startIndex + jobsPerPage);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Jobs</h1>
          <p className="text-gray-600">
            {filteredJobs.length} jobs found across multiple platforms
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64">
            <FilterSidebar onFilterChange={handleFilterChange} />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Controls */}
            <div className="card p-6 mb-6">
              <form onSubmit={handleSearch} className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search jobs, companies, or skills..."
                    className="input-field pl-10"
                  />
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </form>

              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded ${viewMode === "grid" ? "bg-primary-100 text-primary-600" : "text-gray-500"}`}
                  >
                    <Grid className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded ${viewMode === "list" ? "bg-primary-100 text-primary-600" : "text-gray-500"}`}
                  >
                    <List className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="text-gray-600">Sort by:</span>
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="recent">Most Recent</option>
                      <option value="salary">Highest Salary</option>
                      <option value="company">Company Name</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Job Listings */}
            <div className="space-y-4">
              {paginatedJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="px-3 py-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>

                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }

                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`w-10 h-10 rounded-lg ${
                          currentPage === pageNum
                            ? "bg-primary-600 text-white"
                            : "border border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </nav>
              </div>
            )}

            {/* No Results */}
            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Filter className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No jobs found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your filters or search terms
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
