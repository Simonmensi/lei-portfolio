import Link from 'next/link';

/**
 * Home Page
 * Landing page with hero section and quick introduction
 */
export default function Home() {
  return (
    <div className="container-custom py-20 space-y-20">
      {/* Hero Section */}
      <section className="space-y-8 pt-12">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-light-text dark:text-dark-text leading-tight">
            Lei Nuozhen
          </h1>
          <p className="text-2xl text-primary-600 dark:text-accent-400 font-semibold">
            Systems Analyst & Data Science Practitioner
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed">
            Aspiring technology professional with a passion for bridging software engineering and data insights.
            Currently pursuing a Graduate Diploma in Systems Analysis at NUS-ISS, backed by a Computer Science degree
            from Macau University of Science and Technology.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 pt-6">
          <Link
            href="/lei-portfolio/projects"
            className="btn-primary"
          >
            View My Projects
          </Link>
          <Link
            href="/lei-portfolio/about"
            className="btn-secondary"
          >
            Learn More About Me
          </Link>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6 space-y-2">
          <p className="text-3xl font-bold text-primary-600 dark:text-accent-400">5+</p>
          <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Full-stack applications and system designs
          </p>
        </div>

        <div className="card p-6 space-y-2">
          <p className="text-3xl font-bold text-primary-600 dark:text-accent-400">2</p>
          <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            IBM & Ipsos data science roles
          </p>
        </div>

        <div className="card p-6 space-y-2">
          <p className="text-3xl font-bold text-primary-600 dark:text-accent-400">8+</p>
          <p className="text-gray-600 dark:text-gray-400">Technical Skills</p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Languages, frameworks, and tools
          </p>
        </div>
      </section>

      {/* Featured Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-light-text dark:text-dark-text">
          Featured Work
        </h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl">
          I specialize in full-stack development, system analysis, and data science.
          My recent projects showcase expertise in Java Spring Boot, React.js, and complex business logic implementation.
        </p>
        <Link
          href="/lei-portfolio/projects"
          className="inline-flex items-center gap-2 text-primary-600 dark:text-accent-400 hover:text-primary-800 dark:hover:text-accent-500 font-semibold transition-colors"
        >
          Explore All Projects →
        </Link>
      </section>
    </div>
  );
}
