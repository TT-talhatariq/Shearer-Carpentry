'use client';
import React, { useEffect, useState, useRef } from 'react';
import menuData from '@/utils/menu.json';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import TopInfoHeader from '@/components/topInfoHeader';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [hoveredSubMenu, setHoveredSubMenu] = useState<string | null>(null);

  const isCarDetailPage =
    pathname &&
    pathname.startsWith('/inventory/') &&
    pathname.split('/').length === 3 &&
    pathname !== '/inventory';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setOpenDropdown(null);
      setOpenSubDropdown(null);
    }
  };

  const isActive = (link: string) => {
    if (link === '/' && pathname === '/') return true;
    if (link !== '/' && pathname?.includes(link)) return true;
    return false;
  };

  return (
    <>
      {/* Mobile Top Banner */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-brand py-1.5 px-4 z-[60] flex justify-center items-center">
        <Link
          href="tel:+17632453755"
          className="flex items-center justify-center gap-2 text-white text-sm font-medium"
        >
          <Phone size={14} />
          Call Us: (763) 245-3755
        </Link>
      </div>

      {/* Desktop Top Banner */}
      <TopInfoHeader />

      <nav
        className={`fixed z-50 w-full h-[100px] py-7 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        } ${!isScrolled && !isCarDetailPage ? 'md:top-6 top-[28px]' : 'md:top-6 top-[16px]'}`}
      >
        <div className="max-w-[1440px] mx-auto flex justify-between items-center h-[50px] px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/shearer-carpentry-logo.png"
              alt="Shearer Carpentry Logo"
              width={200}
              height={50}
              quality={100}
              priority
              className="h-[100px] w-auto object-contain transition-all duration-300 brightness-0 pt-2"
            />
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#050B20"
                className="w-8 h-8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-[#050B20] w-[90%] justify-end items-center h-full">
            <ul className="flex space-x-6">
              {menuData.map((item) => (
                <li key={item.name} className="relative flex items-center">
                  {item.type === 'dropdown' && item.children ? (
                    <div 
                      className="inline-block relative"
                      onMouseEnter={() => setHoveredMenu(item.name)}
                      onMouseLeave={() => setHoveredMenu(null)}
                    >
                      <button
                        className={`${inter.className} flex items-center gap-1 px-3 sm:text-base text-[14px] font-[400] transition-colors duration-200 text-[#050B20] hover:text-brand`}
                        type="button"
                      >
                        {item.name}
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`transition-transform duration-200 ml-1 text-[#050B20] hover:text-brand ${
                            hoveredMenu === item.name ? 'rotate-180 text-brand' : ''
                          }`}
                        >
                          <path
                            d="M4 6L8 10L12 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      <div className={`absolute top-full left-0 w-52 mt-2 bg-white shadow-lg rounded-md z-50 transition-all duration-200 border border-brand/10 ${
                        hoveredMenu === item.name ? 'opacity-100 visible' : 'opacity-0 invisible'
                      }`}>
                        <ul className="py-2">
                          {item.children.map((child) => (
                            <li key={child.name} className="relative">
                              {child.type === 'dropdown' && child.children ? (
                                <div 
                                  className="inline-block relative w-full"
                                  onMouseEnter={() => setHoveredSubMenu(child.name)}
                                  onMouseLeave={() => setHoveredSubMenu(null)}
                                >
                                  <button
                                    className="w-full text-left flex items-center justify-between px-4 py-2 text-sm text-[#050B20] hover:text-brand hover:bg-brand/5"
                                    type="button"
                                  >
                                    {child.name}
                                    <svg
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className={`transition-transform duration-200 ${
                                        hoveredSubMenu === child.name ? 'rotate-90' : ''
                                      }`}
                                    >
                                      <path
                                        d="M4.5 3L7.5 6L4.5 9"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </button>
                                  <div className={`absolute top-0 left-full w-52 mt-0 bg-white shadow-lg rounded-md z-50 transition-all duration-200 border border-brand/10 ${
                                    hoveredSubMenu === child.name ? 'opacity-100 visible' : 'opacity-0 invisible'
                                  }`}>
                                    <ul className="py-2">
                                      {child.children.map((subChild) => (
                                        <li key={subChild.name}>
                                          <Link
                                            href={subChild.link}
                                            className="block px-4 py-2 text-sm text-[#050B20] hover:text-brand hover:bg-brand/5"
                                          >
                                            {subChild.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              ) : (
                                <Link
                                  href={child.link || '#'}
                                  className="block px-4 py-2 text-sm text-[#050B20] hover:text-brand hover:bg-brand/5"
                                >
                                  {child.name}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : item.link ? (
                    <Link
                      href={item.link}
                      className={`${inter.className} px-3 sm:text-base font-[400] text-[14px] transition-colors duration-200 text-[#050B20] hover:text-brand ${isActive(item.link) ? 'font-semibold text-brand' : ''}`}
                    >
                      {item.name}
                    </Link>
                  ) : null}
                </li>
              ))}
            </ul>

            {/* Call Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="tel:+17632453755"
                className="flex items-center gap-2 bg-brand hover:bg-brand-hover text-white px-4 py-2 rounded-full transition-colors duration-200 font-medium ml-4"
              >
                <Phone size={16} />
                <span>Call Now</span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden fixed top-0 right-0 w-full h-screen bg-[#EEF1FB] transition-transform duration-300 ease-in-out z-40 flex flex-col justify-center items-center space-y-6`}
        >
          <div className="absolute top-10 right-4">
            <button onClick={toggleMobileMenu} className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#050B20"
                className="w-8 h-8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {menuData.map((item) => {
            if (item.type === 'dropdown' && item.children) {
              const isOpen = openDropdown === item.name;
              return (
                <li key={item.name} className="w-full text-center">
                  <button
                    onClick={() => {
                      setOpenDropdown(isOpen ? null : item.name);
                      setOpenSubDropdown(null); // Reset sub-dropdown when main dropdown changes
                    }}
                    className={`${inter.className} w-full flex items-center justify-center gap-2 px-4 py-2 text-xl font-[400] text-[#050B20]`}
                  >
                    {item.name}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {isOpen &&
                    item.children.map((child) => {
                      if (child.type === 'dropdown' && child.children) {
                        const isChildOpen = openSubDropdown === child.name;
                        return (
                          <li key={child.name} className="w-full text-center">
                            <button
                              onClick={() => setOpenSubDropdown(isChildOpen ? null : child.name)}
                              className={`${inter.className} w-full flex items-center justify-center gap-2 px-4 py-2 text-lg font-[400] text-[#050B20]`}
                            >
                              {child.name}
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className={`transition-transform duration-200 ${isChildOpen ? 'rotate-180' : ''}`}
                              >
                                <path
                                  d="M3.5 5L7 8.5L10.5 5"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>

                            {isChildOpen && (
                              <ul className="w-full">
                                {child.children.map((subChild) => (
                                  <li key={subChild.name} className="w-full text-center">
                                    <Link
                                      href={subChild.link}
                                      className={`${inter.className} block text-[#050B20] px-8 py-2 text-base font-[400] hover:bg-brand/10 ${
                                        isActive(subChild.link) ? 'text-[#EC0100] font-semibold' : ''
                                      }`}
                                      onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        setOpenDropdown(null);
                                        setOpenSubDropdown(null);
                                      }}
                                    >
                                      {subChild.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        );
                      }
                      return child.link ? (
                        <li key={child.name} className="w-full text-center">
                          <Link
                            href={child.link || '#'}
                                    className={`${inter.className} block text-[#050B20] px-4 py-2 text-lg font-[400] ${
                                      isActive(child.link) ? 'text-brand font-semibold' : ''
                                    }`}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setOpenDropdown(null);
                            }}
                          >
                            {child.name}
                          </Link>
                        </li>
                      ) : null;
                    })}
                </li>
              );
            }
            if (item.link) {
              return (
                <li key={item.name} className="w-full text-center">
                  <Link
                    href={item.link}
                    className={`${inter.className} block text-[#050B20] px-4 py-2 text-xl font-[400] ${
                      isActive(item.link) ? 'text-brand font-semibold' : ''
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            }
            return null;
          })}

          <li className="w-full px-8 mt-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="tel:+17632453755"
                className="flex items-center justify-center gap-2 bg-brand hover:bg-brand-hover text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium text-lg w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone size={20} />
                <span>Call Now</span>
              </Link>
            </motion.div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
