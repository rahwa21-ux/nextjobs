"use client";
import { useState } from "react";
import { Filter, X } from "lucide-react";

export default function FilterSidebar({ onFilterChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    jobType: [],
    experience: [],
    salaryRange: [0, 300000],
    remote: false,
  });

  const jobTypes = [
    { value: "full-time", label: "Full-time" },
    { value: "part-time", label: "Part-time" },
    { value: "contract", label: "Contract" },
    { value: "internship", label: "Internship" },
    { value: "freelance", label: "Freelance" },
  ];

  const experienceLevels = [
    { value: "entry", label: "Entry Level" },
    { value: "mid", label: "Mid Level" },
    { value: "senior", label: "Senior" },
    { value: "lead", label: "Lead" },
    { value: "executive", label: "Executive" },
  ];

  const handleCheckboxChange = (category, value) => {
    const newFilters = { ...filters };
    if (newFilters[category].includes(value)) {
      newFilters[category] = newFilters[category].filter(
        (item) => item !== value,
      );
    } else {
      newFilters[category].push(value);
    }
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <>
      {/* Mobile filter button */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed bottom-6 right-6 z-40 bg-primary-600 text-white p-3 rounded-full shadow-lg"
      >
        <Filter className="h-6 w-6" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-50 md:relative md:z-auto md:block ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Sidebar content */}
        <div className="fixed top-0 left-0 h-full w-80 bg-white shadow-xl md:relative md:shadow-none md:w-64 md:block">
          <div className="p-6 h-full overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-lg flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </h3>
              <button onClick={() => setIsOpen(false)} className="md:hidden">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Job Type */}
            <div className="mb-8">
              <h4 className="font-medium text-gray-900 mb-4">Job Type</h4>
              <div className="space-y-2">
                {jobTypes.map((type) => (
                  <label key={type.value} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.jobType.includes(type.value)}
                      onChange={() =>
                        handleCheckboxChange("jobType", type.value)
                      }
                      className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="ml-3 text-gray-700">{type.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Experience Level */}
            <div className="mb-8">
              <h4 className="font-medium text-gray-900 mb-4">
                Experience Level
              </h4>
              <div className="space-y-2">
                {experienceLevels.map((level) => (
                  <label key={level.value} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.experience.includes(level.value)}
                      onChange={() =>
                        handleCheckboxChange("experience", level.value)
                      }
                      className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="ml-3 text-gray-700">{level.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Remote Only */}
            <div className="mb-8">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.remote}
                  onChange={(e) => {
                    const newFilters = { ...filters, remote: e.target.checked };
                    setFilters(newFilters);
                    onFilterChange(newFilters);
                  }}
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="ml-3 font-medium text-gray-900">
                  Remote Only
                </span>
              </label>
            </div>

            {/* Salary Range */}
            <div className="mb-8">
              <h4 className="font-medium text-gray-900 mb-4">Salary Range</h4>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">
                    ${filters.salaryRange[0].toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-600">
                    ${filters.salaryRange[1].toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="300000"
                  step="10000"
                  value={filters.salaryRange[1]}
                  onChange={(e) => {
                    const newFilters = {
                      ...filters,
                      salaryRange: [
                        filters.salaryRange[0],
                        parseInt(e.target.value),
                      ],
                    };
                    setFilters(newFilters);
                    onFilterChange(newFilters);
                  }}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            {/* Reset Filters */}
            <button
              onClick={() => {
                const resetFilters = {
                  jobType: [],
                  experience: [],
                  salaryRange: [0, 300000],
                  remote: false,
                };
                setFilters(resetFilters);
                onFilterChange(resetFilters);
              }}
              className="w-full btn-secondary"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
