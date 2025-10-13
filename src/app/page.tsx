import { Metadata } from 'next';
import HomePage from "@/features/HomePgae";

export const metadata: Metadata = {
  title: 'Shearer Carpentry | Expert Carpentry & Remodeling Services in Plymouth, MN',
  description: 'Professional carpentry and remodeling services in Plymouth, MN. Specializing in basement remodeling, bathroom renovation, kitchen remodeling, and custom home construction. Over 18 years of experience. Call (763) 245-3755 for a free estimate.',
  keywords: [
    'Shearer Carpentry',
    'carpentry services',
    'home remodeling',
    'basement remodeling',
    'bathroom remodeling',
    'kitchen remodeling',
    'custom home construction',
    'Plymouth MN',
    'Minneapolis',
    'contractor',
    'home renovation',
    'construction services',
    'remodeling contractor',
    'carpentry contractor',
    'home improvement',
  ],
  alternates: {
    canonical: 'https://www.shearercarpentryinc.com/',
  },
  openGraph: {
    title: 'Shearer Carpentry | Expert Carpentry & Remodeling Services in Plymouth, MN',
    description: 'Professional carpentry and remodeling services in Plymouth, MN. Specializing in basement remodeling, bathroom renovation, kitchen remodeling, and custom home construction.',
    url: 'https://www.shearercarpentryinc.com/',
    siteName: 'Shearer Carpentry',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/shearer-carpentry-logo.png',
        width: 512,
        height: 512,
        alt: 'Shearer Carpentry Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shearer Carpentry | Expert Carpentry & Remodeling Services in Plymouth, MN',
    description: 'Professional carpentry and remodeling services in Plymouth, MN. Specializing in basement remodeling, bathroom renovation, kitchen remodeling, and custom home construction.',
    images: ['/images/shearer-carpentry-logo.png'],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <HomePage />
    </div>
  );
}
