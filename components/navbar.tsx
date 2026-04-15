'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MessageCircle, ChevronDown } from 'lucide-react';
import { businessInfo, services } from '@/lib/constants';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services', hasDropdown: true },
    { label: 'Products', href: '/products' },
    { label: 'About', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'glass shadow-lg border-b border-white/10'
        : 'bg-white/95 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-10 h-10 group-hover:scale-105 transition-transform">
              <Image
                src="/logo.png"
                alt="Shine Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-primary leading-none">Shine</span>
              <span className="block text-[10px] text-muted-foreground font-medium tracking-wider uppercase">IT Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`relative flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.href)
                      ? 'text-primary bg-primary/5'
                      : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                  }`}
                  onMouseEnter={() => link.hasDropdown && setServicesOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setServicesOpen(false)}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>

                {/* Services Dropdown */}
                {link.hasDropdown && (
                  <div
                    className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                      servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <div className="bg-white rounded-xl shadow-xl border border-muted/50 p-2 min-w-[240px]">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted/50 transition-colors group/item"
                        >
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                            <span className="text-sm font-bold">{service.title.charAt(0)}</span>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground">{service.title}</p>
                            <p className="text-xs text-muted-foreground">{service.shortDescription}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href={`tel:${businessInfo.phone}`}
              className="flex items-center gap-2 px-4 py-2.5 text-primary border-2 border-primary/20 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 font-semibold text-sm"
            >
              <Phone size={15} />
              Call Now
            </a>
            <a
              href={`https://wa.me/${businessInfo.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-300 font-semibold text-sm shadow-md shadow-primary/20"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 hover:bg-muted rounded-xl transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[500px] pb-6' : 'max-h-0'
        }`}>
          <div className="space-y-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl transition-all font-medium ${
                  isActive(link.href)
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-2 pt-4 mt-2 border-t border-muted">
            <a
              href={`tel:${businessInfo.phone}`}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-3 border-2 border-primary/20 text-primary rounded-xl text-sm font-semibold"
            >
              <Phone size={16} />
              Call Now
            </a>
            <a
              href={`https://wa.me/${businessInfo.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-3 py-3 bg-primary text-white rounded-xl text-sm font-semibold"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
