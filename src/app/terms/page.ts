import { Metadata } from 'next';
import Terms from '@/features/Terms'

export const metadata: Metadata = {
  title: 'Terms of Service | Shearer Carpentry | Plymouth, MN',
  description: 'Terms of Service for Shearer Carpentry. Professional carpentry and remodeling services in Plymouth, MN. Read our terms and conditions for estimates, pricing, warranties, and project guidelines.',
  keywords: [
    'terms of service',
    'Shearer Carpentry terms',
    'carpentry terms',
    'remodeling terms',
    'contractor terms',
    'service agreement',
    'terms and conditions',
    'legal terms',
    'Plymouth MN contractor',
    'construction terms',
  ],
  alternates: {
    canonical: 'https://www.shearercarpentryinc.com/terms',
  },
  openGraph: {
    title: 'Terms of Service | Shearer Carpentry | Plymouth, MN',
    description: 'Terms of Service for Shearer Carpentry. Professional carpentry and remodeling services in Plymouth, MN. Read our terms and conditions.',
    url: 'https://www.shearercarpentryinc.com/terms',
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
    title: 'Terms of Service | Shearer Carpentry | Plymouth, MN',
    description: 'Terms of Service for Shearer Carpentry. Professional carpentry and remodeling services in Plymouth, MN. Read our terms and conditions.',
    images: ['/images/shearer-carpentry-logo.png'],
  },
};

export default Terms