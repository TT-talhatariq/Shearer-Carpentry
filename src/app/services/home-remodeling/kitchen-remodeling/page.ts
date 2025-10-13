import { Metadata } from 'next';
import kitchenRemodeling from '@/features/kitchenRemodeling'

export const metadata: Metadata = {
  title: 'Kitchen Remodeling | Shearer Carpentry | Plymouth, MN',
  description: 'Expert kitchen remodeling services in Plymouth, MN. Create your dream kitchen with Shearer Carpentry. Maximizing space, enhancing functionality, and beautiful design elements. Call (763) 245-3755.',
  keywords: [
    'kitchen remodeling',
    'kitchen renovation',
    'kitchen contractor',
    'Plymouth MN kitchen',
    'kitchen design',
    'kitchen renovation contractor',
    'kitchen remodeling services',
    'modern kitchen',
    'kitchen upgrade',
    'kitchen construction',
    'kitchen renovation services',
    'custom kitchen',
  ],
  alternates: {
    canonical: 'https://www.shearercarpentryinc.com/services/home-remodeling/kitchen-remodeling',
  },
  openGraph: {
    title: 'Kitchen Remodeling | Shearer Carpentry | Plymouth, MN',
    description: 'Expert kitchen remodeling services in Plymouth, MN. Create your dream kitchen with Shearer Carpentry. Maximizing space, enhancing functionality, and beautiful design elements.',
    url: 'https://www.shearercarpentryinc.com/services/home-remodeling/kitchen-remodeling',
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
    title: 'Kitchen Remodeling | Shearer Carpentry | Plymouth, MN',
    description: 'Expert kitchen remodeling services in Plymouth, MN. Create your dream kitchen with Shearer Carpentry. Maximizing space, enhancing functionality, and beautiful design elements.',
    images: ['/images/shearer-carpentry-logo.png'],
  },
};

export default kitchenRemodeling