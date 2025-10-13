import { Metadata } from 'next';
import Privacy from '@/features/Privacy'

export const metadata: Metadata = {
  title: 'Privacy Policy | Shearer Carpentry | Plymouth, MN',
  description: 'Privacy Policy for Shearer Carpentry. Learn how we collect, use, and protect your personal information. Professional carpentry and remodeling services in Plymouth, MN.',
  keywords: [
    'privacy policy',
    'Shearer Carpentry privacy',
    'data protection',
    'privacy information',
    'personal data',
    'data security',
    'privacy rights',
    'information collection',
    'Plymouth MN privacy',
    'contractor privacy',
  ],
  alternates: {
    canonical: 'https://www.shearercarpentryinc.com/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Shearer Carpentry | Plymouth, MN',
    description: 'Privacy Policy for Shearer Carpentry. Learn how we collect, use, and protect your personal information.',
    url: 'https://www.shearercarpentryinc.com/privacy',
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
    title: 'Privacy Policy | Shearer Carpentry | Plymouth, MN',
    description: 'Privacy Policy for Shearer Carpentry. Learn how we collect, use, and protect your personal information.',
    images: ['/images/shearer-carpentry-logo.png'],
  },
};

export default Privacy