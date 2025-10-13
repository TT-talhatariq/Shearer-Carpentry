import { Metadata } from 'next';
import Gallery from "@/features/gallery";

export const metadata: Metadata = {
  title: 'Gallery | Shearer Carpentry Project Portfolio | Plymouth, MN',
  description: 'View our gallery of completed carpentry and remodeling projects in Plymouth, MN. See our expertise in basement remodeling, bathroom renovation, kitchen remodeling, and custom home construction. Quality craftsmanship showcased.',
  keywords: [
    'Shearer Carpentry gallery',
    'carpentry projects',
    'remodeling portfolio',
    'basement remodeling gallery',
    'bathroom remodeling projects',
    'kitchen remodeling examples',
    'custom home construction',
    'Plymouth MN projects',
    'before and after',
    'construction portfolio',
    'home renovation gallery',
    'carpentry work examples',
  ],
  alternates: {
    canonical: 'https://www.shearercarpentryinc.com/gallery',
  },
  openGraph: {
    title: 'Gallery | Shearer Carpentry Project Portfolio | Plymouth, MN',
    description: 'View our gallery of completed carpentry and remodeling projects in Plymouth, MN. See our expertise in basement remodeling, bathroom renovation, kitchen remodeling, and custom home construction.',
    url: 'https://www.shearercarpentryinc.com/gallery',
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
    title: 'Gallery | Shearer Carpentry Project Portfolio | Plymouth, MN',
    description: 'View our gallery of completed carpentry and remodeling projects in Plymouth, MN. See our expertise in basement remodeling, bathroom renovation, kitchen remodeling, and custom home construction.',
    images: ['/images/shearer-carpentry-logo.png'],
  },
};

export default function GalleryPage() {
  return <Gallery />;
}
