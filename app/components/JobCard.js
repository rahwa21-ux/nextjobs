import {
  MapPin,
  Briefcase,
  DollarSign,
  Clock,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

export default function JobCard({ job }) {
  return (
    <div className="card p-6 hover:border-primary-300 transition-all duration-200">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              {job.companyLogo ? (
                <img
                  src={job.companyLogo}
                  alt={job.company}
                  className="w-10 h-10 object-contain"
                />
              ) : (
                <Briefcase className="h-6 w-6 text-gray-400" />
              )}
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 hover:text-primary-600 transition-colors">
                <Link href={`/job/${job.id}`}>{job.title}</Link>
              </h3>
              <p className="text-gray-600">{job.company}</p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Briefcase className="h-4 w-4 mr-2" />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <DollarSign className="h-4 w-4 mr-2" />
              <span>{job.salary || "Competitive"}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="h-4 w-4 mr-2" />
              <span>
                {formatDistanceToNow(new Date(job.postedAt), {
                  addSuffix: true,
                })}
              </span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {job.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
            {job.tags.length > 3 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                +{job.tags.length - 3} more
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col items-end space-y-3 ml-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              job.source === "LinkedIn"
                ? "bg-blue-100 text-blue-800"
                : job.source === "Indeed"
                  ? "bg-purple-100 text-purple-800"
                  : job.source === "Glassdoor"
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-100 text-gray-800"
            }`}
          >
            {job.source}
          </span>
          <a
            href={job.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm flex items-center"
          >
            Apply <ExternalLink className="h-3 w-3 ml-1" />
          </a>
          <Link
            href={`/job/${job.id}`}
            className="text-sm text-primary-600 hover:text-primary-700"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
