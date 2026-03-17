import type { Metadata } from 'next';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lei Nuozhen | Portfolio',
  description: 'Personal portfolio of Lei Nuozhen - Systems Analyst & Data Science Practitioner',
  keywords: 'portfolio, developer, systems analyst, data science',
  authors: [{ name: 'Lei Nuozhen' }],
  creator: 'Lei Nuozhen',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://leInuozhen.github.io/lei-portfolio/',
    siteName: 'Lei Nuozhen Portfolio',
    title: 'Lei Nuozhen | Portfolio',
    description: 'Personal portfolio of Lei Nuozhen - Systems Analyst & Data Science Practitioner',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'system';
                const htmlElement = document.documentElement;
                
                if (theme === 'dark') {
                  htmlElement.classList.add('dark');
                } else if (theme === 'light') {
                  htmlElement.classList.remove('dark');
                } else {
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (prefersDark) {
                    htmlElement.classList.add('dark');
                  }
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
