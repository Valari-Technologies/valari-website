export interface Technology {
  name: string;
  icon: string;
  slug: string;
  description: string;
  href: string;
}

export const TECHNOLOGIES: Technology[] = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    slug: "react",
    description: "Component-based UI library.",
    href: "https://react.dev/",
  },
  {
    name: "Django",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    slug: "django",
    description: "Python web framework.",
    href: "https://www.djangoproject.com/",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    slug: "nextjs",
    description: "Production framework for React.",
    href: "https://nextjs.org/",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    slug: "nodejs",
    description: "Scalable backend JavaScript runtime.",
    href: "https://nodejs.org/",
  },
  {
    name: "Spring Boot",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    slug: "springboot",
    description: "Robust Java microservice framework.",
    href: "https://spring.io/projects/spring-boot",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    slug: "aws",
    description: "Scalable cloud hosting infrastructure.",
    href: "https://aws.amazon.com/",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    slug: "docker",
    description: "Containerized app virtualization.",
    href: "https://www.docker.com/",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    slug: "mysql",
    description: "Reliable relational database engine.",
    href: "https://www.mysql.com/",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    slug: "postgresql",
    description: "Reliable relational database engine.",
    href: "https://www.postgresql.org/",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    slug: "mongodb",
    description: "Document-oriented NoSQL database.",
    href: "https://www.mongodb.com/",
  },
  {
    name: "Azure",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    slug: "azure",
    description: "Microsoft's enterprise cloud ecosystem.",
    href: "https://azure.microsoft.com/",
  },
  {
    name: "Google Cloud",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    slug: "gcp",
    description: "High-performance serverless cloud computing.",
    href: "https://cloud.google.com/",
  },
];
