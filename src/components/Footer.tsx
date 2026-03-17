/**
 * Footer Component
 * Display social links and copyright information
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700 transition-theme mt-20">
      <div className="container-custom py-12">
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="mailto:simon68562776@outlook.com"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-accent-400 transition-colors"
              title="Email"
            >
              <span className="sr-only">Email</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>

            <a
              href="tel:+6580385655"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-accent-400 transition-colors"
              title="Phone"
            >
              <span className="sr-only">Phone</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.418 1.265 1.215 2.541 2.332 3.658 1.117 1.117 2.393 1.914 3.658 2.332l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2.57C6.75 18 3 14.25 3 9.57V5a1 1 0 011-1h2.153z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/诺臻-雷-4aa88039b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-accent-400 transition-colors"
              title="LinkedIn"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.292-1.194-2.292-1.195 0-1.377.932-1.377 1.892v4.578h-2.668V9.896h2.559v.955h.035c.377-.715 1.285-1.565 2.641-1.565 2.826 0 3.357 1.855 3.357 4.659v5.393zM5.337 8.575a1.545 1.545 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.297 7.763H4.04V9.896h2.594v6.442zM17.88 0H.12C.053 0 0 .046 0 .12v17.76c0 .074.053.12.12.12h17.76c.067 0 .12-.046.12-.12V.12C18 .046 17.933 0 17.88 0z" />
              </svg>
            </a>

            <a
              href="https://github.com/Lei-Nuozhen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-accent-400 transition-colors"
              title="GitHub"
            >
              <span className="sr-only">GitHub</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.19.092-.926.35-1.557.636-1.914-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817a9.54 9.54 0 012.502.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.192 20 14.437 20 10.017 20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Lei Nuozhen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
