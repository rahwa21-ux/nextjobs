export const mockJobs = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    companyLogo: "/logos/techcorp.png",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "Senior",
    salary: "$140,000 - $180,000",
    postedAt: "2024-01-15T10:30:00Z",
    description:
      "We are looking for an experienced Frontend Developer to join our team...",
    requirements: [
      "5+ years React experience",
      "TypeScript",
      "Next.js",
      "GraphQL",
    ],
    benefits: [
      "Health insurance",
      "Remote work",
      "Stock options",
      "Flexible hours",
    ],
    tags: ["React", "TypeScript", "Next.js", "Frontend", "Remote"],
    source: "LinkedIn",
    applyUrl: "https://linkedin.com/jobs/view/123",
    remote: true,
  },
  {
    id: "2",
    title: "Product Manager",
    company: "StartupXYZ",
    companyLogo: "/logos/startupxyz.png",
    location: "Remote",
    type: "Full-time",
    experience: "Mid Level",
    salary: "$120,000 - $150,000",
    postedAt: "2024-01-14T14:20:00Z",
    description: "Lead product development for our flagship SaaS platform...",
    requirements: [
      "3+ years PM experience",
      "SaaS background",
      "Agile methodology",
    ],
    benefits: ["Unlimited PTO", "Learning budget", "Home office stipend"],
    tags: ["Product Management", "SaaS", "Remote", "Agile"],
    source: "Indeed",
    applyUrl: "https://indeed.com/job/abc123",
    remote: true,
  },
  {
    id: "3",
    title: "DevOps Engineer",
    company: "CloudSystems",
    location: "New York, NY",
    type: "Contract",
    experience: "Senior",
    salary: "$80 - $120/hr",
    postedAt: "2024-01-13T09:15:00Z",
    description: "Build and maintain our cloud infrastructure on AWS...",
    requirements: ["AWS", "Kubernetes", "Terraform", "Docker"],
    benefits: ["Contract to hire", "Flexible schedule"],
    tags: ["DevOps", "AWS", "Kubernetes", "Terraform"],
    source: "Glassdoor",
    applyUrl: "https://glassdoor.com/job/xyz789",
    remote: false,
  },
  // Add 10+ more jobs with different sources
];

export const mockCompanies = [
  {
    id: "1",
    name: "TechCorp Inc.",
    logo: "/logos/techcorp.png",
    description: "Leading technology company specializing in SaaS solutions.",
    location: "San Francisco, CA",
    jobs: 24,
    rating: 4.5,
  },
  // More companies...
];

export const mockCategories = [
  { name: "Software Development", count: 1240 },
  { name: "Marketing", count: 560 },
  { name: "Design", count: 320 },
  { name: "Sales", count: 890 },
  { name: "Finance", count: 450 },
  { name: "Healthcare", count: 670 },
];
