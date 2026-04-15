'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, MessageCircle } from 'lucide-react';
import { PageHeader } from '@/components/page-header';
import { businessInfo } from '@/lib/constants';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main>
      <PageHeader
        title="Contact Us"
        subtitle="Have questions? We'd love to hear from you. Get in touch with our team."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact' },
        ]}
      />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {[
              {
                icon: <Phone size={22} />,
                title: 'Call Us',
                info: businessInfo.phone,
                sub: 'Available 24/7',
                href: `tel:${businessInfo.phone}`,
                color: 'bg-blue-50 text-blue-600',
              },
              {
                icon: <Mail size={22} />,
                title: 'Email Us',
                info: businessInfo.email,
                sub: 'Reply within 24 hours',
                href: `mailto:${businessInfo.email}`,
                color: 'bg-emerald-50 text-emerald-600',
              },
              {
                icon: <MapPin size={22} />,
                title: 'Visit Us',
                info: businessInfo.address,
                sub: 'Mon-Sat: 9AM - 9PM',
                href: businessInfo.mapLink,
                color: 'bg-amber-50 text-amber-600',
              },
              {
                icon: <MessageCircle size={22} />,
                title: 'WhatsApp',
                info: businessInfo.whatsapp,
                sub: 'Quick response',
                href: `https://wa.me/${businessInfo.whatsapp.replace(/\D/g, '')}`,
                color: 'bg-green-50 text-green-600',
              },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 card-hover border border-transparent hover:border-primary/10 group"
              >
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-foreground/70 text-sm font-medium break-all">{item.info}</p>
                <p className="text-muted-foreground text-xs mt-1 flex items-center gap-1">
                  <Clock size={12} />
                  {item.sub}
                </p>
              </a>
            ))}
          </div>

          {/* Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md border border-muted/50">
                <h2 className="text-2xl font-bold text-foreground mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground text-sm mb-8">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-1.5">Full Name *</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-muted rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-1.5">Email Address *</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-muted rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-1.5">Phone Number</label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-muted rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-foreground mb-1.5">Service Required</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-muted rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm bg-white"
                      >
                        <option value="">Select a service</option>
                        <option value="computer-sales">Computer Sales</option>
                        <option value="printer-services">Printer Services</option>
                        <option value="cctv-installation">CCTV Installation</option>
                        <option value="it-support">IT Support</option>
                        <option value="products">Product Enquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-1.5">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-muted rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all font-bold shadow-lg shadow-primary/20 text-sm"
                  >
                    <Send size={18} />
                    Send Message
                  </button>

                  {submitted && (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-5 py-4 rounded-xl flex items-center gap-2">
                      <span className="text-lg">✅</span>
                      <span className="font-medium text-sm">Thank you! We&apos;ll be in touch soon.</span>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Map & Hours */}
            <div className="lg:col-span-2 space-y-6">
              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-md h-80 lg:h-[360px]">
                <iframe
                  src={businessInfo.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Business Location Map"
                />
              </div>

              {/* Business Hours */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-muted/50">
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <Clock size={18} className="text-primary" />
                  Business Hours
                </h3>
                <div className="space-y-2.5">
                  {[
                    { day: 'Monday - Friday', hours: '9:00 AM - 9:00 PM' },
                    { day: 'Saturday', hours: '9:00 AM - 8:00 PM' },
                    { day: 'Sunday', hours: '10:00 AM - 5:00 PM' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-muted/30 last:border-0">
                      <span className="text-foreground/70 text-sm font-medium">{item.day}</span>
                      <span className="text-foreground font-semibold text-sm">{item.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-xl">
                  <p className="text-green-700 text-xs font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    24/7 Emergency IT Support Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
