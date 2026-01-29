import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vineetha Wilson | Senior QA Automation Engineer',
  description:
    'Senior QA Automation Engineer & QA Team Lead with 6+ years of experience in Playwright, Selenium, WebDriverIO, API automation, and CI/CD.',
  openGraph: {
    title: 'Vineetha Wilson | Senior QA Automation Engineer',
    description:
      'Senior QA Automation Engineer & QA Team Lead specializing in Playwright, Selenium, WebDriverIO, and CI/CD.',
    url: 'https://vineetha-sdet-portfolio.vercel.app',
    siteName: 'Vineetha Wilson Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vineetha Wilson Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vineetha Wilson | Senior QA Automation Engineer',
    description:
      'QA Automation Lead | Playwright | Selenium | WebDriverIO | CI/CD',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
