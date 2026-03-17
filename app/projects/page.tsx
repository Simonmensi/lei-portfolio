import ProjectCard from '@/src/components/ProjectCard';

/**
 * Projects Page
 * Showcase of completed projects with descriptions and tech stacks
 */
export default function Projects() {
  const projects = [
    {
      title: 'AORI - Full-Stack E-Commerce Web Application',
      date: 'Oct 2025',
      description:
        'Constructed a responsive fashion retail platform using Java Spring Boot and React.js, earning commendation from faculty for exceptional UI/UX design. Engineered a Smart Recommendation Engine that dynamically personalizes product suggestions by analyzing user browsing history, wish list data, and cart interactions. Implemented comprehensive Shopping Cart & Checkout modules with complex backend logic for inventory validation and order processing using MySQL and JPA.',
      technologies: ['Java Spring Boot', 'React.js', 'MySQL', 'JPA', 'REST API', 'Machine Learning'],
    },
    {
      title: 'GetFreshFood - Digital Transformation Consulting',
      date: 'Sep - Oct 2025',
      description:
        'Spearheaded requirement specification for digital transformation of a brick-and-mortar supermarket to an omni-channel retailer. Designed User Journey Maps and User Stories to align technical solutions with operational pain points. Proposed Smart Retail Solution incorporating RFID for inventory accuracy and Electronic Shelf Labels (ESL) for real-time pricing updates.',
      technologies: ['System Analysis', 'UML', 'Business Process Mapping', 'RFID Technology', 'User Research'],
    },
    {
      title: 'FSTA - Tour Reservation System Analysis & Design',
      date: 'Aug - Sep 2025',
      description:
        'Designed analysis and design models for a B2B2C tour reservation web application using UML standards. Formulated complex business logic for Cost Calculation Modules, utilizing Object-Oriented Design principles (Polymorphism) to handle dynamic guide rates based on rank and experience. Mapped Object Models to relational database schema (ORM) ensuring data consistency and system integrity.',
      technologies: ['OOP Design', 'UML', 'Polymorphism', 'ORM', 'Database Design', 'System Analysis'],
    },
  ];

  return (
    <div className="container-custom py-16 space-y-16">
      {/* Page Header */}
      <section>
        <h1 className="text-4xl md:text-5xl font-bold text-light-text dark:text-dark-text mb-4">
          My Projects
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
          Showcase of full-stack applications, system designs, and consulting projects demonstrating
          expertise in software engineering, system analysis, and technical leadership.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="space-y-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            date={project.date}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </section>

      {/* Additional Context */}
      <section className="card p-8 space-y-4 bg-primary-50 dark:bg-slate-700">
        <h2 className="text-2xl font-bold text-light-text dark:text-dark-text">
          Project Highlights
        </h2>
        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
          <li className="flex gap-3">
            <span className="text-primary-600 dark:text-accent-400 font-bold text-xl">→</span>
            <span>
              <strong>Leadership:</strong> Selected as Lead Presenter for AORI project to demonstrate system integration and business value to stakeholders
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary-600 dark:text-accent-400 font-bold text-xl">→</span>
            <span>
              <strong>Technical Excellence:</strong> Implemented complex algorithms (recommendation engines, dynamic calculations) using best practices
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary-600 dark:text-accent-400 font-bold text-xl">→</span>
            <span>
              <strong>Full-Stack Capability:</strong> From database design (ORM, MySQL) to frontend development (React, UI/UX), covering entire application stack
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary-600 dark:text-accent-400 font-bold text-xl">→</span>
            <span>
              <strong>Business Analysis:</strong> Strong emphasis on understanding user needs, business processes, and translating requirements into technical solutions
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}
