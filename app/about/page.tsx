/**
 * About Page
 * Display education, experience, skills, and achievements
 */
export default function About() {
  return (
    <div className="container-custom py-16 space-y-16">
      {/* Page Header */}
      <section>
        <h1 className="text-4xl md:text-5xl font-bold text-light-text dark:text-dark-text mb-4">
          About Me
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
          Aspiring Systems Analyst and Data Science practitioner with a strong technical foundation
          in full-stack development, system design, and data analysis.
        </p>
      </section>

      {/* Professional Profile */}
      <section className="card p-8 space-y-4">
        <h2 className="text-2xl font-bold text-light-text dark:text-dark-text">Professional Profile</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Currently pursuing a Graduate Diploma in Systems Analysis (GDI-PSA) at NUS-ISS,
          backed by a Computer Science degree from Macau University of Science and Technology.
          Combines robust technical foundation in Full-Stack Development, Object-Oriented Design,
          and Android/Java programming with practical Data Science experience gained at IBM and Ipsos.
          Proficient in Python, C++, and SQL, with a passion for bridging the gap between software
          engineering and data insights.
        </p>
      </section>

      {/* Education */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-light-text dark:text-dark-text">Education</h2>

        <div className="card p-6 space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-bold text-light-text dark:text-dark-text">
                Graduate Diploma in Systems Analysis (GDI-PSA)
              </h3>
              <p className="text-primary-600 dark:text-accent-400 font-semibold">
                National University of Singapore - Institute of Systems Science
              </p>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
              Aug 2025 – Present
            </p>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            Advanced graduate diploma focusing on systems analysis, business process management,
            and enterprise solutions architecture.
          </p>
        </div>

        <div className="card p-6 space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-bold text-light-text dark:text-dark-text">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-primary-600 dark:text-accent-400 font-semibold">
                Macau University of Science and Technology - Faculty of Innovation Engineering
              </p>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
              Sep 2021 – Jun 2025
            </p>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            Comprehensive computer science education with focus on software development,
            data structures, and algorithm design.
          </p>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-light-text dark:text-dark-text">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Programming Languages */}
          <div className="card p-6 space-y-3">
            <h3 className="font-bold text-light-text dark:text-dark-text">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              {['Java', 'Python', 'C++', 'C#', 'Kotlin', 'JavaScript'].map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1 bg-primary-100 dark:bg-slate-700 text-primary-700 dark:text-accent-400 text-sm font-medium rounded-full"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Web Development */}
          <div className="card p-6 space-y-3">
            <h3 className="font-bold text-light-text dark:text-dark-text">Web Development</h3>
            <div className="flex flex-wrap gap-2">
              {['HTML/CSS', 'React.js', 'Spring Boot', 'Next.js', 'JavaScript/TypeScript'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary-100 dark:bg-slate-700 text-primary-700 dark:text-accent-400 text-sm font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Databases & Data */}
          <div className="card p-6 space-y-3">
            <h3 className="font-bold text-light-text dark:text-dark-text">Databases & Data</h3>
            <div className="flex flex-wrap gap-2">
              {['MySQL', 'SQL Server', 'Pandas', 'KNN', 'NLP', 'Machine Learning'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary-100 dark:bg-slate-700 text-primary-700 dark:text-accent-400 text-sm font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & IDE */}
          <div className="card p-6 space-y-3">
            <h3 className="font-bold text-light-text dark:text-dark-text">Tools & IDE</h3>
            <div className="flex flex-wrap gap-2">
              {['Android Studio', 'Git', 'VS Code', 'Jupyter Notebook', 'Docker'].map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-primary-100 dark:bg-slate-700 text-primary-700 dark:text-accent-400 text-sm font-medium rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-light-text dark:text-dark-text">Work Experience</h2>

        <div className="card p-6 space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-bold text-light-text dark:text-dark-text">
                Data Science Assistant
              </h3>
              <p className="text-primary-600 dark:text-accent-400 font-semibold">
                Ipsos Shanghai
              </p>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
              Jul 2024 – Aug 2024
            </p>
          </div>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex gap-2">
              <span className="text-primary-600 dark:text-accent-400">•</span>
              <span>Performed analysis on Natural Language Processing (NLP) models for customer feedback to extract actionable insights</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary-600 dark:text-accent-400">•</span>
              <span>Programmed Python automation tools to streamline internal data management processes, improving operational efficiency</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary-600 dark:text-accent-400">•</span>
              <span>Established data integration systems for large-scale housing data project</span>
            </li>
          </ul>
        </div>

        <div className="card p-6 space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-bold text-light-text dark:text-dark-text">
                Data Science Assistant
              </h3>
              <p className="text-primary-600 dark:text-accent-400 font-semibold">
                IBM Shanghai
              </p>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
              Jul 2023 – Aug 2023
            </p>
          </div>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex gap-2">
              <span className="text-primary-600 dark:text-accent-400">•</span>
              <span>Implemented data analysis models under mentor supervision, applying K-Nearest Neighbors (KNN) algorithms for data classification tasks</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary-600 dark:text-accent-400">•</span>
              <span>Collaborated with business teams to deliver quantitative insights, earning commendation for high-quality performance</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary-600 dark:text-accent-400">•</span>
              <span>Accelerated data processing workflows by automating Python-based analysis tools</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Achievements & Awards */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-light-text dark:text-dark-text">Achievements & Awards</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6 space-y-2">
            <h3 className="font-bold text-light-text dark:text-dark-text">Graduate Certificate</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Digital Solutions Development - Web Applications (Competence)
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">Nov 2025</p>
          </div>

          <div className="card p-6 space-y-2">
            <h3 className="font-bold text-light-text dark:text-dark-text">Huawei ICT Competition</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Participant - Cloud & Network Technologies
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">Sep 2022 – Oct 2024</p>
          </div>

          <div className="card p-6 space-y-2">
            <h3 className="font-bold text-light-text dark:text-dark-text">Formula Edge Competition</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Staff Certification
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">Sep 2023</p>
          </div>

          <div className="card p-6 space-y-2">
            <h3 className="font-bold text-light-text dark:text-dark-text">GSE-NUS Leadership Program</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Global Young Business Leader Program
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">Jul 2023</p>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="card p-8 space-y-4">
        <h2 className="text-2xl font-bold text-light-text dark:text-dark-text">Languages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-light-text dark:text-dark-text">English</p>
            <p className="text-gray-600 dark:text-gray-400">Professional</p>
          </div>
          <div>
            <p className="font-semibold text-light-text dark:text-dark-text">Chinese (Mandarin)</p>
            <p className="text-gray-600 dark:text-gray-400">Native</p>
          </div>
        </div>
      </section>
    </div>
  );
}
