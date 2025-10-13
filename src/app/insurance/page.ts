import { Metadata } from 'next';
import Insurance from '@/features/Insurance/Insurance';

export const metadata: Metadata = {
  title: 'Insurance Claims Assistance | Shearer Carpentry | Plymouth, MN',
  description: 'Expert insurance claims assistance for home remodeling and restoration projects in Plymouth, MN. Shearer Carpentry works directly with insurance companies to ensure maximum coverage. Call (763) 245-3755.',
  keywords: [
    'insurance claims assistance',
    'home insurance claims',
    'remodeling insurance',
    'restoration insurance',
    'insurance contractor',
    'Plymouth MN insurance',
    'home damage restoration',
    'insurance claim support',
    'property restoration',
    'insurance adjuster',
    'claim assistance',
    'home repair insurance',
  ],
  alternates: {
    canonical: 'https://www.shearercarpentryinc.com/insurance',
  },
  openGraph: {
    title: 'Insurance Claims Assistance | Shearer Carpentry | Plymouth, MN',
    description: 'Expert insurance claims assistance for home remodeling and restoration projects in Plymouth, MN. Shearer Carpentry works directly with insurance companies to ensure maximum coverage.',
    url: 'https://www.shearercarpentryinc.com/insurance',
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
    title: 'Insurance Claims Assistance | Shearer Carpentry | Plymouth, MN',
    description: 'Expert insurance claims assistance for home remodeling and restoration projects in Plymouth, MN. Shearer Carpentry works directly with insurance companies to ensure maximum coverage.',
    images: ['/images/shearer-carpentry-logo.png'],
  },
};

export default Insurance;