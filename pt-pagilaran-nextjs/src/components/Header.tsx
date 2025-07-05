'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { CONTACT_INFO, SCROLL_THRESHOLD } from '@/constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Heritage', path: '/heritage' },
    { name: 'Products', path: '/products' },
    { name: 'Global Presence', path: '/global-presence' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Top Bar with batik pattern */}
      <div className="bg-gradient-to-r from-primary-800 to-primary-700 text-white py-3 text-sm relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 bg-fixed"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23eab308' fill-opacity='1'%3E%3Cpath d='M30 15c8.284 0 15 6.716 15 15s-6.716 15-15 15-15-6.716-15-15 6.716-15 15-15zm0 2c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: 'responsive'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 group">
              <Phone className="w-4 h-4 group-hover:animate-pulse" />
              <span className="hover:text-accent-300 transition-colors" style={{ fontWeight: '400' }}>{CONTACT_INFO.phone}</span>
            </div>
            <div className="flex items-center space-x-2 group">
              <Mail className="w-4 h-4 group-hover:animate-pulse" />
              <span className="hover:text-accent-300 transition-colors" style={{ fontWeight: '400' }}>{CONTACT_INFO.email}</span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 backdrop-blur-lg shadow-lg border-b border-accent-500/50' 
           : pathname !== '/' ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 backdrop-blur-lg shadow-lg border-b border-accent-500/50' : 'bg-transparent'
      }`} >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start h-20 gap-x-8">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-1 group items-center">
              <img src="/images/pagilaran-logo.png" alt="PT Pagilaran Logo" className="w-16 h-16 floating-logo" />
              <div className="flex flex-col justify-center">
                <div className={`font-heading transition-colors text-xl 3xl:text-2xl ${isScrolled ? 'text-primary-800' : 'text-white'} whitespace-nowrap`} style={{ fontWeight: '700' }}>
                  <span className="text-shine">PT Pagilaran</span>
                </div>
                <div className={`text-xs 3xl:text-sm transition-colors leading-tight ${isScrolled ? 'text-primary-600' : 'text-neutral-200'} whitespace-nowrap`} style={{ fontWeight: '600' }}>
                  <span className="text-shine">Premium Tea Exports</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2 ml-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`relative px-2 py-2 rounded-xl transition-all duration-300 group ${
                    isActive(item.path)
                      ? isScrolled
                        ? 'text-primary-800 bg-primary-100 shadow-soft'
                        : 'text-white bg-white/20 shadow-soft'
                      : isScrolled
                        ? 'text-primary-700 hover:text-primary-800 hover:bg-primary-50'
                        : 'text-white hover:text-accent-300 hover:bg-white/10'
                  }`}
                  style={{ fontWeight: '600' }}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent-500 rounded-full" />
                  )}
                </Link>
              ))}

              {/* CTA Button */}
              <Link
                href="/#footer"
                className="px-4 py-2 rounded-full font-semibold bg-gradient-to-r from-yellow-400 to-green-600 text-white shadow-md hover:from-yellow-500 hover:to-green-700 transition-colors duration-200 flex items-center gap-2"
              >
                <span className="text-sm whitespace-nowrap">Partner With Us</span>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-3 rounded-xl transition-all duration-300 ml-auto ${
                isScrolled ? 'text-primary-700 hover:bg-primary-100' : 'text-white hover:bg-white/20'
              }`} 
              aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-neutral-100/20"
            style={{ boxShadow: 'rgba(0,0,0,0.15) 0px 4px 12px' }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`block px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-primary-800 bg-primary-100 shadow-soft'
                      : 'text-primary-700 hover:text-primary-800 hover:bg-primary-50'
                  }`}
                  style={{ fontWeight: '600' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/#footer"
                className="block w-full px-4 py-2 rounded-xl text-center mt-4 text-white transition-all duration-300"
                style={{
                  background: 'linear-gradient(90deg, #eab308, #ca8a04, #2d7738)',
                  fontWeight: '700'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Partner With Us
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};