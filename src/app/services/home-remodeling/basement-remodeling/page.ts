import { Metadata } from 'next';
import BasementRemodeling from '@/features/BasementRemodeling'

export const metadata: Metadata = {
  title: 'Basement Remodeling | Shearer Carpentry | Plymouth, MN',
  description: 'Professional basement remodeling services in Plymouth, MN. Transform your basement into functional living space with Shearer Carpentry. Expert craftsmanship, free estimates. Call (763) 245-3755.',
  keywords: [
    'basement remodeling',
    'basement renovation',
    'basement finishing',
    'basement contractor',
    'Plymouth MN basement',
    'basement conversion',
    'basement design',
    'basement construction',
    'finished basement',
    'basement remodeling contractor',
    'basement renovation services',
    'basement finishing contractor',
  ],
  alternates: {
    canonical: 'https://www.shearercarpentryinc.com/services/home-remodeling/basement-remodeling',
  },
  openGraph: {
    title: 'Basement Remodeling | Shearer Carpentry | Plymouth, MN',
    description: 'Professional basement remodeling services in Plymouth, MN. Transform your basement into functional living space with Shearer Carpentry.',
    url: 'https://www.shearercarpentryinc.com/services/home-remodeling/basement-remodeling',
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
    title: 'Basement Remodeling | Shearer Carpentry | Plymouth, MN',
    description: 'Professional basement remodeling services in Plymouth, MN. Transform your basement into functional living space with Shearer Carpentry.',
    images: ['/images/shearer-carpentry-logo.png'],
  },
};

export default BasementRemodeling