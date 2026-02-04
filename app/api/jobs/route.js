import { NextResponse } from "next/server";
import { mockJobs } from "@/data/mockData";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");
  const search = searchParams.get("search") || "";
  const location = searchParams.get("location") || "";
  const remote = searchParams.get("remote") === "true";

  let filteredJobs = [...mockJobs];

  // Apply filters
  if (search) {
    const query = search.toLowerCase();
    filteredJobs = filteredJobs.filter(
      (job) =>
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.tags.some((tag) => tag.toLowerCase().includes(query)),
    );
  }

  if (location) {
    filteredJobs = filteredJobs.filter((job) =>
      job.location.toLowerCase().includes(location.toLowerCase()),
    );
  }

  if (remote) {
    filteredJobs = filteredJobs.filter((job) => job.remote);
  }

  // Pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedJobs = filteredJobs.slice(startIndex, endIndex);

  return NextResponse.json({
    jobs: paginatedJobs,
    total: filteredJobs.length,
    page,
    totalPages: Math.ceil(filteredJobs.length / limit),
    hasMore: endIndex < filteredJobs.length,
  });
}
