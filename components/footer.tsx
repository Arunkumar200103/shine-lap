import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { businessInfo, services, productCategories } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#1a0000] to-[#0d0000] text-white">
      {/* Newsletter CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -top-8 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Need IT Solutions?</h3>
            <p className="text-white/90">Get a free consultation from our expert team today.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-xl hover:bg-secondary transition-all font-bold text-sm shadow-lg group whitespace-nowrap"
          >
            Get Free Quote
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
                  alt="Shine Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-bold text-xl text-secondary block leading-none">Shine</span>
                <span className="text-[10px] text-white/50 font-medium tracking-widest uppercase">IT Solutions</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Your trusted partner for premium computer sales, printer services, CCTV installation, and 24/7 IT support. Over 10 years of excellence.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: businessInfo.socialLinks.facebook, label: 'Facebook' },
                { icon: Instagram, href: businessInfo.socialLinks.instagram, label: 'Instagram' },
                { icon: Linkedin, href: businessInfo.socialLinks.linkedin, label: 'LinkedIn' },
                { icon: Twitter, href: businessInfo.socialLinks.twitter, label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-secondary hover:text-primary-foreground flex items-center justify-center text-white/60 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-5 text-secondary text-sm tracking-wider uppercase">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Products', href: '/products' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight size={12} className="text-secondary/50 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-5 text-secondary text-sm tracking-wider uppercase">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight size={12} className="text-secondary/50 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-5 text-secondary text-sm tracking-wider uppercase">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-secondary" />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">Call Us</p>
                  <a href={`tel:${businessInfo.phone}`} className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                    {businessInfo.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-secondary" />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">Email Us</p>
                  <a href={`mailto:${businessInfo.email}`} className="text-white/80 hover:text-white transition-colors text-sm font-medium break-all">
                    {businessInfo.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-secondary" />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">Visit Us</p>
                  <span className="text-white/80 text-sm">{businessInfo.address}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {currentYear} {businessInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <Link href="/about" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/about" className="hover:text-white/70 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
