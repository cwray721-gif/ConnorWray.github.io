import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../models/ProjectItems";
import { colorVariants } from "../models/ColorVariants";

export default function Projects() {
  return (
    <div className="space-y-8 animate-slide-up">
      <header>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Projects</h1>
        <p className="text-gray-600">A selection of my recent work.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => {
          const theme = colorVariants[project.color];

          return (
            <div
              key={index}
              className={`
                group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden 
                transition-all duration-300 ease-in-out
                hover:shadow-xl hover:-translate-y-2 hover:border-transparent ${theme.border}
              `}
            >
              {/* Image Section */}
              <div className="h-48 bg-gray-50 relative border-b border-gray-100 overflow-hidden">
                {project.photo ? (
                  <Image 
                    src={project.photo} 
                    alt={project.title}
                    fill
                    className={`
                      ${project.fit === 'cover' ? 'object-cover' : 'object-contain'} 
                      group-hover:scale-105 transition-transform duration-500
                    `}
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-gray-400">
                    [Photo coming soon!]
                  </div>
                )}
              </div>
              
              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className={`text-xl font-bold text-gray-900 mb-2 transition-colors ${theme.title}`}>
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 text-xs font-medium rounded-full border ${theme.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-auto">
                  {project.link && (
                    <a
                      href={project.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center text-sm font-semibold text-gray-700 transition-colors ${theme.link}`}
                    >
                      <ExternalLink size={16} className="mr-1.5" /> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center text-sm font-semibold text-gray-700 transition-colors ${theme.link}`}
                    >
                      <Github size={16} className="mr-1.5" /> Source
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}