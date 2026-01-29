import './globals.css';
import { ThemeProvider } from 'next-themes';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vineetha Wilson | Senior QA Automation Engineer',
  description:
    'Senior QA Automation Engineer & QA Team Lead specializing in Playwright, Selenium, WebDriverIO, API automation, and CI/CD.',
  keywords: [
    'QA Automation Engineer UAE',
    'Playwright Automation',
    'Selenium Automation',
    'WebDriverIO',
    'QA Team Lead',
    'SDET Portfolio',
    'Dubai QA Engineer'
  ],
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
  alternates: {
    canonical: 'https://vineetha-sdet-portfolio.vercel.app',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
