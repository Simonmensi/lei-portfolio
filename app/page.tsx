/**
 * Home Page - Redesigned
 * Landing page with gradient hero section, stat cards with icons, and featured work
 */
export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section with Vertical Gradient */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-600 to-light-bg dark:from-primary-600 dark:to-dark-bg">
        <div className="container-custom flex flex-col items-center justify-center min-h-[600px] text-center">
          {/* Name - Large Typography */}
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tighter">
            Lei Nuozhen
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-white font-semibold mb-8">
            Systems Analyst & Data Science Practitioner
          </p>

          {/* Description - Simplified to 1-2 sentences */}
          <p className="text-lg md:text-xl text-white opacity-95 max-w-2xl leading-relaxed">
            Aspiring technology professional with a passion for bridging software engineering and data insights.
          </p>
        </div>
      </section>

      {/* Three Stat Cards Section - Single Column */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-bg">
        <div className="container-custom max-w-3xl mx-auto flex flex-col gap-8">
          {/* Card 1: Projects Completed */}
          <div className="card p-12 flex flex-col items-center justify-center min-h-80">
            <div className="text-6xl mb-6">💻</div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4 text-center">
              Projects Completed
            </h3>
            <p className="text-5xl font-bold text-primary-600 dark:text-accent-400 mb-6">
              5+
            </p>
            <p className="text-base text-gray-600 dark:text-gray-400 text-center leading-relaxed">
              Full-stack applications and system designs
            </p>
          </div>

          {/* Card 2: Full-Stack Experience */}
          <div className="card p-12 flex flex-col items-center justify-center min-h-80">
            <div className="text-6xl mb-6">🤖</div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-8 text-center">
              Full-Stack Application Design
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-400 text-center leading-relaxed">
              Full-stack applications and system designs
            </p>
          </div>

          {/* Card 3: Years of Experience */}
          <div className="card p-12 flex flex-col items-center justify-center min-h-80">
            <div className="text-6xl mb-6">📊</div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4 text-center">
              Data Science Experience
            </h3>
            <p className="text-5xl font-bold text-primary-600 dark:text-accent-400 mb-6">
              2
            </p>
            <p className="text-base text-gray-600 dark:text-gray-400 text-center leading-relaxed">
              Data science roles at IBM and Ipsos
            </p>
          </div>
        </div>
      </section>

      {/* Featured Work Section - Static (No Links) */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-bg">
        <div className="container-custom max-w-3xl">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Featured Work
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            I specialize in full-stack development, system analysis, and data science.
            My recent projects showcase expertise in Java Spring Boot, React.js, and complex business logic implementation.
          </p>
          <span className="inline-block text-lg font-semibold text-primary-600 dark:text-accent-400 cursor-default">
            Explore All Projects
          </span>
        </div>
      </section>
    </div>
  );
}
