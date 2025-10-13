import { Metadata } from 'next';
import ContactUS from "@/features/ContactUs"

export const metadata: Metadata = {
  title: 'Contact Shearer Carpentry | Free Estimates in Plymouth, MN',
  description: 'Contact Shearer Carpentry for free estimates on carpentry and remodeling projects. Located in Plymouth, MN. Call (763) 245-3755 or email shearercarpentry@gmail.com. Serving Minneapolis, Edina, Minnetonka, and Bloomington.',
  keywords: [
    'contact Shearer Carpentry',
    'free estimate',
    'carpentry contractor',
    'remodeling contractor',
    'Plymouth MN',
    'Minneapolis contractor',
    'home renovation quote',
    'construction estimate',
    'carpentry services',
    'remodeling services',
    'home improvement',
  ],
  alternates: {
    canonical: 'https://www.shearercarpentryinc.com/contact',
  },
  openGraph: {
    title: 'Contact Shearer Carpentry | Free Estimates in Plymouth, MN',
    description: 'Contact Shearer Carpentry for free estimates on carpentry and remodeling projects. Located in Plymouth, MN.',
    url: 'https://www.shearercarpentryinc.com/contact',
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
    title: 'Contact Shearer Carpentry | Free Estimates in Plymouth, MN',
    description: 'Contact Shearer Carpentry for free estimates on carpentry and remodeling projects. Located in Plymouth, MN.',
    images: ['/images/shearer-carpentry-logo.png'],
  },
};

export default ContactUS