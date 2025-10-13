import { Metadata } from 'next';
import HomeConstruction from '@/features/HomeConstruction'

export const metadata: Metadata = {
  title: 'Custom Home Construction | Shearer Carpentry | Plymouth, MN',
  description: 'Professional custom home construction services in Plymouth, MN. Shearer Carpentry specializes in unique staircases, chimneys, custom wall features, and wet bars. Over 18 years of experience. Call (763) 245-3755.',
  keywords: [
    'custom home construction',
    'home construction contractor',
    'custom home builder',
    'Plymouth MN construction',
    'unique staircases',
    'custom chimneys',
    'custom wall features',
    'wet bar construction',
    'home builder',
    'construction services',
    'custom home design',
    'residential construction',
  ],
  alternates: {
    canonical: 'https://www.shearercarpentryinc.com/services/home-construction',
  },
  openGraph: {
    title: 'Custom Home Construction | Shearer Carpentry | Plymouth, MN',
    description: 'Professional custom home construction services in Plymouth, MN. Shearer Carpentry specializes in unique staircases, chimneys, custom wall features, and wet bars.',
    url: 'https://www.shearercarpentryinc.com/services/home-construction',
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
    title: 'Custom Home Construction | Shearer Carpentry | Plymouth, MN',
    description: 'Professional custom home construction services in Plymouth, MN. Shearer Carpentry specializes in unique staircases, chimneys, custom wall features, and wet bars.',
    images: ['/images/shearer-carpentry-logo.png'],
  },
};

export default HomeConstruction