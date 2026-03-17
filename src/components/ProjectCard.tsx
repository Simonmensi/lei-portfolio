import { ReactNode } from 'react';

interface ProjectCardProps {
  title: string;
  date: string;
  description: string;
  technologies: string[];
  children?: ReactNode;
}

/**
 * ProjectCard Component
 * Displays a single project with title, date, description, tech stack
 * Includes a placeholder area for screenshots
 */
export default function ProjectCard({
  title,
  date,
  description,
  technologies,
  children,
}: ProjectCardProps) {
  return (
    <div className="card p-6 space-y-4">
      {/* Header */}
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-light-text dark:text-dark-text">
            {title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {date}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-primary-100 dark:bg-slate-700 text-primary-700 dark:text-accent-400 text-xs font-medium rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Screenshot Placeholder */}
      {children ? (
        children
      ) : (
        <div className="mt-6 bg-gray-100 dark:bg-slate-700 rounded-lg h-48 flex items-center justify-center">
          <p className="text-gray-400 dark:text-gray-500 text-center">
            Screenshot placeholder
          </p>
        </div>
      )}
    </div>
  );
}
