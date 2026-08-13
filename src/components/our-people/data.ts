export interface TeamMember {
  name: string;
  designation: string;
  department: "CEO" | "Consultant" | "Developer" | "UI/UX Designer" | "Digital Marketing";
  experience: string;
  skills: string[];
  bio: string;
  linkedin: string;
  email: string;
  imageSrc: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Prakash Raja",
    designation: "Founder & CEO",
    department: "CEO",
    experience: "15+ Years",
    skills: ["Strategic Leadership", "Enterprise Architecture", "Consulting"],
    bio: "Visionary leader driving digital transformation and software excellence at Valari Technologies.",
    linkedin: "https://linkedin.com",
    email: "senthil@valari.co.in",
    imageSrc: "/images/prakash-photo.jpg",
  },
  // {
  //   name: "Logesh",
  //   designation: "Developer Consultant",
  //   department: "Consultant",
  //   experience: "12+ Years",
  //   skills: ["Cloud Architecture", "System Design", "DevOps Strategy"],
  //   bio: "Oversees core software architectures, database logs, and server deployment strategies.",
  //   linkedin: "https://linkedin.com",
  //   email: "anand@valari.co.in",
  //   imageSrc: "/images/thoufiq-photo.jpg",
  // },
  {
    name: "Ajay",
    designation: "Digital Marketing Consultant",
    department: "Consultant",
    experience: "10+ Years",
    skills: ["IT Consulting", "Business Analysis", "Client Relations"],
    bio: "Bridges corporate business requirements with agile software execution roadmaps.",
    linkedin: "https://linkedin.com",
    email: "karthik@valari.co.in",
    imageSrc: "/images/ajay-photo.jpg",
  },
  {
    name: "Mayura Kannan",
    designation: "Senior Full-Stack Developer",
    department: "Developer",
    experience: "3+ Years",
    skills: ["Next.js", "Node.js", "GraphQL", "PostgreSQL"],
    bio: "Specializes in building robust, server-side optimized applications and serverless systems.",
    linkedin: "https://linkedin.com",
    email: "vikram@valari.co.in",
    imageSrc: "/images/kannan-photo.jpg",
  },
  {
    name: "Mohamed Abuthahir",
    designation: "Frontend Developer",
    department: "Developer",
    experience: "1+ Years",
    skills: ["React", "TypeScript", "Tailwind CSS", "Animations"],
    bio: "Pioneers premium, highly interactive client-side design implementations and component modularity.",
    linkedin: "https://linkedin.com",
    email: "divya@valari.co.in",
    imageSrc: "/images/abu-photo.jpg",
  },
   {
    name: "Mohammed Dhanais M S",
    designation: "Frontend Developer",
    department: "Developer",
    experience: "1+ Years",
    skills: ["React", "TypeScript", "Tailwind CSS", "Animations"],
    bio: "Pioneers premium, highly interactive client-side design implementations and component modularity.",
    linkedin: "https://linkedin.com",
    email: "divya@valari.co.in",
    imageSrc: "/images/dhanais-photo.jpg",
  },
   {
    name: "Muthu Subash",
    designation: "Backend Developer",
    department: "Developer",
    experience: "2+ Years",
    skills: ["Node.js", "Express", "MongoDB", "Django"],
    bio: "Pioneers premium, highly interactive client-side design implementations and component modularity.",
    linkedin: "https://linkedin.com",
    email: "divya@valari.co.in",
    imageSrc: "/images/muthu-subash-photo.jpg",
  },
   {
    name: "Mohamed Thoufiq A",
    designation: "Backend Developer",
    department: "Developer",
    experience: "1+ Years",
    skills: ["Node.js", "Express", "MongoDB", "Django"],
    bio: "Pioneers premium, highly interactive client-side design implementations and component modularity.",
    linkedin: "https://linkedin.com",
    email: "divya@valari.co.in",
    imageSrc: "/images/thoufiq-photo.jpg",
  },
  {
    name: "Harish Babu",
    designation: "Digital Marketer",
    department: "Digital Marketing",
    experience: "2+ Years",
    skills: ["Growth Marketing", "Google Analytics", "SaaS Funnels"],
    bio: "Architects scalable traffic acquisition metrics and high-converting client conversion pipelines.",
    linkedin: "https://linkedin.com",
    email: "arjun@valari.co.in",
    imageSrc: "/images/harish-photo.jpg",
  },
];
