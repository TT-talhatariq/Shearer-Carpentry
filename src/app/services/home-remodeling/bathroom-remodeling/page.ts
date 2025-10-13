import { Metadata } from 'next';
import BathroomRemodeling from '@/features/BathroomRemodeling'

export const metadata: Metadata = {
  title: 'Bathroom Remodeling | Shearer Carpentry | Plymouth, MN',
  description: 'Professional bathroom remodeling services in Plymouth, MN. Modern fixtures, stylish designs, and efficient layouts. Shearer Carpentry handles everything from minor updates to complete overhauls. Call (763) 245-3755.',
  keywords: [
    'bathroom remodeling',
    'bathroom renovation',
    'bathroom contractor',
    'Plymouth MN bathroom',
    'bathroom design',
    'bathroom fixtures',
    'bathroom renovation contractor',
    'bathroom remodeling services',
    'modern bathroom',
    'bathroom upgrade',
    'bathroom construction',
    'bathroom renovation services',
  ],
  alternates: {
    canonical: 'https://www.shearercarpentryinc.com/services/home-remodeling/bathroom-remodeling',
  },
  openGraph: {
    title: 'Bathroom Remodeling | Shearer Carpentry | Plymouth, MN',
    description: 'Professional bathroom remodeling services in Plymouth, MN. Modern fixtures, stylish designs, and efficient layouts. Shearer Carpentry handles everything from minor updates to complete overhauls.',
    url: 'https://www.shearercarpentryinc.com/services/home-remodeling/bathroom-remodeling',
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
    title: 'Bathroom Remodeling | Shearer Carpentry | Plymouth, MN',
    description: 'Professional bathroom remodeling services in Plymouth, MN. Modern fixtures, stylish designs, and efficient layouts. Shearer Carpentry handles everything from minor updates to complete overhauls.',
    images: ['/images/shearer-carpentry-logo.png'],
  },
};

export default BathroomRemodeling