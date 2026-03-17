import SocialLinks from '@/src/components/SocialLinks';

/**
 * Contact Page
 * Display contact information with clickable links and social profiles
 */
export default function Contact() {
  return (
    <div className="container-custom py-16 space-y-16">
      {/* Page Header */}
      <section>
        <h1 className="text-4xl md:text-5xl font-bold text-light-text dark:text-dark-text mb-4">
          Get In Touch
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
          I'm open to new opportunities, collaborations, and interesting conversations.
          Feel free to reach out through any of the channels below.
        </p>
      </section>

      {/* Contact Information */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Social Links - Main Column */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-light-text dark:text-dark-text mb-6">
            Contact Information
          </h2>
          <SocialLinks />
        </div>

        {/* Quick Info Sidebar */}
        <div className="space-y-6">
          <div className="card p-6 space-y-4">
            <h3 className="text-lg font-bold text-light-text dark:text-dark-text">
              Availability
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Ready for internship from Mar 2026 and full-time from Aug 2026.
            </p>
          </div>

          <div className="card p-6 space-y-4">
            <h3 className="text-lg font-bold text-light-text dark:text-dark-text">
              Location
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Singapore
            </p>
          </div>

          <div className="card p-6 space-y-4">
            <h3 className="text-lg font-bold text-light-text dark:text-dark-text">
              Expertise
            </h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• Full-Stack Development</li>
              <li>• System Analysis & Design</li>
              <li>• Data Science & Analytics</li>
              <li>• Business Process Design</li>
              <li>• Technical Leadership</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="card p-8 bg-accent-50 dark:bg-slate-700 space-y-4">
        <h2 className="text-2xl font-bold text-light-text dark:text-dark-text">
          Response Time
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          I typically respond to emails within 24 hours. For urgent matters, please include that in your subject line.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-light-text dark:text-dark-text">
          Let's Connect!
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Whether you have a project idea, want to discuss technology, or just want to say hello,
          feel free to reach out. I look forward to hearing from you!
        </p>
        <a
          href="mailto:simon68562776@outlook.com"
          className="btn-primary inline-block"
        >
          Send Me an Email
        </a>
      </section>
    </div>
  );
}
