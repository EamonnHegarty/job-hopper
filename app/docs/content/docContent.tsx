import { DocContent } from "../types";

export const docContent: DocContent = {
  overview: {
    title: "Job Hopper: Overview",
    content: [
      {
        type: "paragraph",
        text: "Job Hopper is a comprehensive job application tracking system built with Next.js, React, and Prisma. The application helps users manage their job search process efficiently.",
      },
      {
        type: "heading",
        text: "Key Features",
      },
      {
        type: "list",
        items: [
          "Create and manage job applications",
          "Track application status (pending, interview, declined)",
          "View statistics on application progress",
          "Visualize job application data with interactive charts",
        ],
      },
      {
        type: "heading",
        text: "Technology Stack",
      },
      {
        type: "list",
        items: [
          "<strong>Frontend:</strong> Next.js, React, TailwindCSS, Shadcn UI",
          "<strong>Backend:</strong> Next.js API Routes, React Server Actions",
          "<strong>Database:</strong> PostgreSQL with Prisma ORM",
          "<strong>Authentication:</strong> Clerk",
          "<strong>State Management:</strong> TanStack Query (React Query)",
          "<strong>Charts:</strong> Recharts",
        ],
      },
    ],
  },
  architecture: {
    title: "Architecture",
    content: [
      {
        type: "paragraph",
        text: "Job Hopper follows a modern architecture pattern with Next.js App Router and a blend of server and client components.",
      },
      {
        type: "heading",
        text: "Project Structure",
      },
      {
        type: "code",
        text: `job-hopper/
  ├── app/                   # Next.js App Router structure
  │   ├── (dashboard)/       # Dashboard routes (protected)
  │   │   ├── add-job/       # Add job page
  │   │   ├── jobs/          # Jobs list and detail pages
  │   │   └── stats/         # Statistics page
  │   ├── globals.css        # Global CSS
  │   ├── layout.tsx         # Root layout
  │   ├── page.tsx           # Landing page
  │   └── providers.tsx      # Client providers
  ├── assets/                # Static assets
  ├── components/            # React components
  │   ├── ui/                # Shadcn UI components
  │   └── ...                # App-specific components
  ├── lib/                   # Utility functions
  ├── prisma/                # Prisma schema and migrations
  └── utils/                 # Utility functions and types`,
      },
      {
        type: "heading",
        text: "Component Architecture",
      },
      {
        type: "paragraph",
        text: "The app uses a combination of server and client components for optimal performance:",
      },
      {
        type: "list",
        items: [
          "<strong>Server Components:</strong> Data fetching, business logic, rendering static UI",
          "<strong>Client Components:</strong> Interactivity, state management, user events",
        ],
      },
    ],
  },
  authentication: {
    title: "Authentication",
    content: [
      {
        type: "paragraph",
        text: "Authentication is handled by Clerk, a complete user management solution. The application uses a secure authentication flow.",
      },
      {
        type: "heading",
        text: "Authentication Flow",
      },
      {
        type: "orderedList",
        items: [
          "Users sign up/log in through Clerk's interface",
          "Clerk provides a JWT token that is used for authentication",
          "The middleware.tsx file protects all routes except the landing page",
          "Server actions validate the user's session using the auth() function",
        ],
      },
      {
        type: "heading",
        text: "Protected Routes",
      },
      {
        type: "paragraph",
        text: "Protected routes are wrapped in the authenticateAndRedirect utility function, which checks for a valid session and redirects unauthenticated users to the landing page.",
      },
      {
        type: "code",
        text: `// utils/auth.ts
  export function authenticateAndRedirect(): string {
    const { userId } = auth();
    if (!userId) {
      redirect("/");
    }
    return userId;
  }`,
      },
    ],
  },
  database: {
    title: "Database Schema",
    content: [
      {
        type: "paragraph",
        text: "Job Hopper uses PostgreSQL with Prisma ORM. The database schema is defined in prisma/schema.prisma.",
      },
      {
        type: "heading",
        text: "Schema Definition",
      },
      {
        type: "code",
        text: `// prisma/schema.prisma
  model Job {
    id        String   @id @default(uuid())
    clerkId   String
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    position  String
    company   String
    location  String
    status    String
    mode      String
    url       String
  }`,
      },
      {
        type: "heading",
        text: "Key Fields",
      },
      {
        type: "list",
        items: [
          "<strong>id:</strong> Unique identifier for the job (UUID)",
          "<strong>clerkId:</strong> User identifier from Clerk authentication",
          "<strong>position:</strong> Job position title",
          "<strong>company:</strong> Company name",
          "<strong>location:</strong> Job location",
          "<strong>status:</strong> Current application status (pending, interview, declined)",
          "<strong>mode:</strong> Work mode (in office, hybrid, remote)",
          "<strong>url:</strong> Job posting URL",
        ],
      },
    ],
  },
  frontend: {
    title: "Frontend Components",
    content: [
      {
        type: "paragraph",
        text: "Job Hopper is built with a collection of reusable, accessible components.",
      },
      {
        type: "heading",
        text: "Core Components",
      },
      {
        type: "list",
        items: [
          "<strong>CreateJobForm:</strong> Allows users to add new job applications",
          "<strong>EditJobForm:</strong> Enables editing of existing job applications",
          "<strong>JobsList:</strong> Displays a list of job applications with filtering and pagination",
          "<strong>JobCard:</strong> Individual job card displaying job details",
          "<strong>StatsContainer:</strong> Shows application statistics (pending, interview, declined)",
          "<strong>ChartsContainer:</strong> Visualizes job application data with Recharts",
          "<strong>SearchForm:</strong> Provides search and filtering capabilities",
          "<strong>ButtonContainer:</strong> Pagination component for the jobs list",
        ],
      },
      {
        type: "heading",
        text: "Layout Components",
      },
      {
        type: "list",
        items: [
          "<strong>Navbar:</strong> Top navigation bar with user menu and theme toggle",
          "<strong>Sidebar:</strong> Side navigation with main app links (desktop only)",
          "<strong>LinksDropdown:</strong> Mobile navigation menu",
        ],
      },
      {
        type: "heading",
        text: "UI Components",
      },
      {
        type: "paragraph",
        text: "The app uses the Shadcn UI component library, which provides accessible, customizable components based on Radix UI primitives.",
      },
    ],
  },
  backend: {
    title: "Backend Services",
    content: [
      {
        type: "paragraph",
        text: "Job Hopper uses React Server Actions for data mutations, combined with TanStack Query for client-side state management.",
      },
      {
        type: "heading",
        text: "Server Actions",
      },
      {
        type: "list",
        items: [
          "<strong>createJobAction:</strong> Creates a new job application",
          "<strong>getAllJobsAction:</strong> Retrieves job applications with filtering and pagination",
          "<strong>getSingleJobAction:</strong> Gets a specific job by ID",
          "<strong>updateJobAction:</strong> Updates an existing job",
          "<strong>deleteJobAction:</strong> Deletes a job",
          "<strong>getStatsAction:</strong> Retrieves job statistics",
          "<strong>getChartsDataAction:</strong> Gets data for the charts visualization",
        ],
      },
      {
        type: "heading",
        text: "Example Server Action",
      },
      {
        type: "code",
        text: `export async function createJobAction(
    values: CreateAndEditJobType
  ): Promise<JobType | null> {
    const userId = authenticateAndRedirect();
    try {
      createAndEditJobSchema.parse(values);
      const job: JobType = await prisma.job.create({
        data: {
          ...values,
          clerkId: userId,
        },
      });
      return job;
    } catch (error) {
      console.error(error);
      return null;
    }
  }`,
      },
      {
        type: "heading",
        text: "Data Fetching",
      },
      {
        type: "paragraph",
        text: "Data fetching is handled through TanStack Query (React Query) for client-side state management, combined with server-side prefetching for optimal performance.",
      },
    ],
  },
  api: {
    title: "API Reference",
    content: [
      {
        type: "paragraph",
        text: "All API functionality is implemented through React Server Actions. The main server actions endpoints are:",
      },
      {
        type: "table",
        headers: ["Action", "Description", "Parameters", "Return Type"],
        rows: [
          [
            "createJobAction",
            "Creates a new job",
            "values: CreateAndEditJobType",
            "Promise<JobType | null>",
          ],
          [
            "getAllJobsAction",
            "Gets all jobs with filters",
            "search?: string, jobStatus?: string, page?: number, limit?: number",
            "Promise<{ jobs, count, page, totalPages }>",
          ],
          [
            "getSingleJobAction",
            "Gets a job by ID",
            "id: string",
            "Promise<JobType | null>",
          ],
          [
            "updateJobAction",
            "Updates a job",
            "id: string, values: CreateAndEditJobType",
            "Promise<JobType | null>",
          ],
          [
            "deleteJobAction",
            "Deletes a job",
            "id: string",
            "Promise<JobType | null>",
          ],
          [
            "getStatsAction",
            "Gets job statistics",
            "None",
            "Promise<{ pending, interview, declined }>",
          ],
          [
            "getChartsDataAction",
            "Gets chart data",
            "None",
            "Promise<Array<{ status, count }>>",
          ],
        ],
      },
    ],
  },
  routing: {
    title: "Routing Structure",
    content: [
      {
        type: "paragraph",
        text: "Job Hopper uses Next.js App Router for page routing.",
      },
      {
        type: "heading",
        text: "Main Routes",
      },
      {
        type: "list",
        items: [
          "<strong>/</strong>: Landing page (public)",
          "<strong>/add-job</strong>: Add new job page (protected)",
          "<strong>/jobs</strong>: View all jobs with search and filter (protected)",
          "<strong>/jobs/[id]</strong>: Edit specific job (protected)",
          "<strong>/stats</strong>: View job application statistics (protected)",
          "<strong>/docs</strong>: Documentation (current page, manual navigation)",
        ],
      },
      {
        type: "paragraph",
        text: "Routes under /app/(dashboard)/ are protected by authentication middleware and require login.",
      },
    ],
  },
  theming: {
    title: "Theming System",
    content: [
      {
        type: "paragraph",
        text: "The application uses a theme system built with TailwindCSS, CSS Variables, and next-themes.",
      },
      {
        type: "heading",
        text: "Components",
      },
      {
        type: "list",
        items: [
          "<strong>tailwind.config.ts</strong>: TailwindCSS configuration",
          "<strong>app/globals.css</strong>: CSS variables for theme colors",
          "<strong>components/ThemeToggle.tsx</strong>: Theme toggle component",
        ],
      },
      {
        type: "heading",
        text: "CSS Variables",
      },
      {
        type: "code",
        text: `:root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --primary: 142.1 76.2% 36.3%;
    --primary-foreground: 355.7 100% 97.3%;
    /* Additional theme variables */
  }
  
  .dark {
    --background: 20 14.3% 4.1%;
    --foreground: 0 0% 95%;
    --primary: 142.1 70.6% 45.3%;
    --primary-foreground: 144.9 80.4% 10%;
    /* Dark mode overrides */
  }`,
      },
    ],
  },
  deployment: {
    title: "Deployment",
    content: [
      {
        type: "paragraph",
        text: "Job Hopper is configured for deployment on Vercel with a PostgreSQL database.",
      },
      {
        type: "heading",
        text: "Services",
      },
      {
        type: "list",
        items: [
          "<strong>Database</strong>: PostgreSQL on Render (can be migrated to any compatible provider)",
          "<strong>Authentication</strong>: Clerk authentication service",
          "<strong>Hosting</strong>: Vercel for Next.js hosting",
        ],
      },
      {
        type: "heading",
        text: "Deployment Steps",
      },
      {
        type: "orderedList",
        items: [
          "Set up a PostgreSQL database and add its connection string to DATABASE_URL in environment variables",
          "Configure Clerk authentication and add the required keys to environment variables",
          "Deploy to Vercel (or other Next.js-compatible hosting service)",
        ],
      },
      {
        type: "heading",
        text: "Environment Variables",
      },
      {
        type: "list",
        items: [
          "<strong>DATABASE_URL</strong>: PostgreSQL connection string",
          "<strong>Clerk authentication keys</strong> (multiple variables required)",
        ],
      },
    ],
  },
  development: {
    title: "Development Guide",
    content: [
      {
        type: "paragraph",
        text: "This guide helps developers get started with the Job Hopper codebase.",
      },
      {
        type: "heading",
        text: "Prerequisites",
      },
      {
        type: "list",
        items: [
          "Node.js (v14 or later)",
          "npm (v6 or later) or yarn (v1.22 or later)",
          "PostgreSQL database",
        ],
      },
      {
        type: "heading",
        text: "Setup Instructions",
      },
      {
        type: "orderedList",
        items: [
          {
            text: "<strong>Clone the repository</strong>",
            code: "git clone https://github.com/yourusername/job-hopper.git\ncd job-hopper",
          },
          {
            text: "<strong>Install dependencies</strong>",
            code: "npm install",
          },
          {
            text: "<strong>Set up environment variables</strong>",
            description: "Create a .env file in the root directory with:",
            code: 'DATABASE_URL="postgresql://username:password@localhost:5432/job-hopper"\n# Add Clerk environment variables',
          },
          {
            text: "<strong>Generate Prisma client</strong>",
            code: "npx prisma generate",
          },
          {
            text: "<strong>Run database migrations</strong>",
            code: "npx prisma migrate dev",
          },
          {
            text: "<strong>Start the development server</strong>",
            code: "npm run dev",
          },
        ],
      },
      {
        type: "heading",
        text: "Common Commands",
      },
      {
        type: "list",
        items: [
          "<code>npm run dev</code>: Start development server",
          "<code>npm run build</code>: Build for production",
          "<code>npm start</code>: Start production server",
          "<code>npx prisma studio</code>: Open Prisma database UI",
          "<code>npx prisma generate</code>: Generate Prisma client after schema changes",
          "<code>npx prisma migrate dev</code>: Apply database migrations",
        ],
      },
      {
        type: "heading",
        text: "Best Practices",
      },
      {
        type: "orderedList",
        items: [
          "Use server components for data fetching when possible",
          "Leverage server actions for data mutations",
          "Implement proper error handling in all server actions",
          "Use TypeScript types for all props and data structures",
          "Follow the component structure pattern for consistency",
          "Implement responsive design for all components",
          "Use Zod for form validation and data parsing",
        ],
      },
    ],
  },
};
