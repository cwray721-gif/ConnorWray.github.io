import React from "react";
import { 
  Shield, 
  Code, 
  Cpu, 
  ShoppingCart, 
  ChevronRight, 
  GraduationCap, 
  Briefcase,
  LucideIcon 
} from "lucide-react";

// --- Types ---
interface ExperienceItem {
  company: string;
  role: string;
  date: string;
  icon: LucideIcon;
  points: string[];
  // We store specific color classes to ensure Tailwind scans them correctly
  colors: {
    timelineBg: string; // The circle background
    roleText: string;   // The role title color
    bulletIcon: string; // The chevron color
  };
}

interface EducationItem {
  degree: string;
  school: string;
  date: string;
  borderColor: string; // e.g., "border-red-600"
}

// --- Data ---
const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: "Sherwin Williams",
    role: "Software Engineer, Contract",
    date: "May 2026 - Present",
    icon: Code,
    colors: { timelineBg: "bg-blue-600", roleText: "text-blue-600", bulletIcon: "text-blue-600" },
    points: [
      "Delivered customer-first features within an Agile team, executing consistently against two-week sprint cycles.",
      "Engineered database automation to search for and delete personally identifiable information (PII), strengthening data privacy and compliance posture.",
      "Optimized content delivery systems supporting 1,000+ sales representatives, store managers, and district sales leaders.",
      "Led application support for the entire sales planning user base, driving backlog bug levels to 0% across all environments.",
      "Pioneered software modernization initiatives using Java Spring Boot and Vue.js, collaborating cross-functionally with shared component library teams.",
      "Managed ETL pipelines by developing, running, and maintaining AWS Glue scripts to support data integration workflows."
    ]
  },
  {
    company: "Lincoln Electric",
    role: "Application Security Analyst Co-op", // Updated from Cybersecurity Analyst to match resume
    date: "May 2025 - August 2025",
    icon: Shield,
    colors: { timelineBg: "bg-red-600", roleText: "text-red-600", bulletIcon: "text-red-600" },
    points: [
      "Drove secure-by-design adoption across development teams per CISA standards, reducing security gaps and implementing policy-level procedures.",
      "Integrated SAST and SCA tools into developer workflows to speed up remediation and align security metrics with business impact.",
      "Scaled Rapid7 Insight AppSec scanning candidates by 780% (7.8x) and communicated coverage analysis directly to C-suite management.",
      "Facilitated threat modeling sessions using STRIDE and DREAD frameworks to proactively identify and mitigate product security risks.",
      "Investigated Java detection tools to migrate Oracle instances to OpenJDK, successfully reducing licensing costs.",
      "Spearheaded an AI-driven initiative to capture institutional knowledge, improving cross-team communication and productivity."
    ]
  },
  {
    company: "Schaeffler Group",
    role: "Full Stack Software Engineering Co-op",
    date: "Jan 2024 - May 2024, Aug 2024 - Dec 2024",
    icon: Code,
    colors: { timelineBg: "bg-green-700", roleText: "text-green-700", bulletIcon: "text-green-700" },
    points: [
      "Led full-stack feature creation for scalable internal applications using Angular.js, TypeScript, and C# .NET.",
      "Leveraged Microsoft Azure and Jenkins to streamline DevOps processes and ensure a robust CI/CD pipeline.", 
      "Collaborated directly with engineering teams and internal customers to gather requirements and deliver custom in-house solutions.",
      "Optimized business workflows by digitizing communication channels and developing user-centric software tools."
    ]
  },
  {
    company: "Midmark Corporation",
    role: "Full Stack Software Engineering Co-op", // Updated from Software Developer to match resume
    date: "May 2023 - August 2023",
    icon: Cpu,
    colors: { timelineBg: "bg-cyan-600", roleText: "text-cyan-600", bulletIcon: "text-cyan-600" },
    points: [
      "Engineered cloud platform solutions using React.js and C# .NET within a microfrontend architecture.",
      "Utilized Azure DevOps to implement End-to-End (E2E) testing pipelines and the Jest framework for unit testing.",
      "Collaborated within an Agile/SCRUM environment to maximize team communication and deliver value-first features to customers."
    ]
  },
  {
    company: "Midmark Corporation",
    role: "Application Security Co-op", // Updated from Cybersecurity Engineering to match resume
    date: "August 2022 - December 2022",
    icon: Shield,
    colors: { timelineBg: "bg-cyan-600", roleText: "text-cyan-600", bulletIcon: "text-cyan-600" },
    points: [
      "Implemented automated code scanning and agent-based SCA tools (Veracode, Rapid7) across four software development teams.",
      "Streamlined deployment processes using Azure DevOps pipelines to accelerate vulnerability remediation.",
      "Developed comprehensive PowerBI reports to present security metrics to management.",
      "Authored technical documentation for application security testing vendors to standardize implementation."
    ]
  },
  {
    company: "Staples Corporation",
    role: "Sales and Technology Repair Associate",
    date: "May 2022 - August 2022",
    icon: ShoppingCart,
    colors: { timelineBg: "bg-red-600", roleText: "text-red-600", bulletIcon: "text-red-600" },
    points: [
      "Led technology sales, providing expert consultation to drive high customer satisfaction and revenue.",
      "Achieved the highest sales record of the year for the location in 2022.",
      "Diagnosed and repaired a wide variety of consumer electronics at the technical support desk."
    ]
  }
];

const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Bachelor of Science in Cybersecurity",
    school: "University of Cincinnati",
    date: "August 2021 - May 2026",
    borderColor: "border-red-600"
  },
  {
    degree: "Bachelor of Science in Information Technology - Networking Systems",
    school: "University of Cincinnati",
    date: "August 2021 - May 2026",
    borderColor: "border-red-600"
  },
  {
    degree: "High School Diploma",
    school: "New Philadelphia High School",
    date: "August 2018 - May 2021",
    borderColor: "border-gray-800"
  }
];

// --- Component ---
export default function Resume() {
  return (
    <div className="space-y-12 max-w-3xl animate-slide-up p-4">
      <header>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Resume</h1>
        <p className="text-gray-600">
          My professional journey and education, starting with the most recent.
        </p>
      </header>

      {/* Experience Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-8 flex items-center gap-2">
          <Briefcase className="w-5 h-5" /> Work Experience
        </h2>
        
        {/* Timeline Container */}
        <div className="border-l-2 border-gray-200 ml-3 space-y-16 pl-8 relative pb-2">
          {EXPERIENCE_DATA.map((job, index) => (
            <div key={index} className="relative group">
              {/* Timeline Icon */}
              <div className={`absolute -left-[43px] top-0 h-8 w-8 rounded-full border-4 border-white flex items-center justify-center shadow-sm ${job.colors.timelineBg}`}>
                <job.icon className="w-3.5 h-3.5 text-white" />
              </div>
              
              <h3 className="text-lg font-bold text-gray-900">{job.company}</h3>
              <div className={`${job.colors.roleText} font-medium mb-1`}>{job.role}</div>
              <div className="text-sm text-gray-500 mb-4">{job.date}</div>
              
              <ul className="space-y-3">
                {job.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-3 text-gray-600">
                    <ChevronRight className={`w-5 h-5 shrink-0 mt-0.5 ${job.colors.bulletIcon}`} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <GraduationCap className="w-5 h-5" /> Education
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {EDUCATION_DATA.map((edu, index) => (
            <div 
              key={index}
              className={`bg-white p-6 rounded-lg border-l-4 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.01] hover:-translate-y-1 ${edu.borderColor}`}
            >
              <h3 className="text-lg font-bold text-gray-900">{edu.degree}</h3>
              <div className="text-gray-700 font-medium">{edu.school}</div>
              <div className="text-sm text-gray-400 mt-2">{edu.date}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
