'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { businessInfo } from '@/lib/constants';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, send to backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Phone */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Phone size={24} className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Call Us</h3>
              <a href={`tel:${businessInfo.phone}`} className="text-foreground/70 hover:text-primary transition-colors">
                {businessInfo.phone}
              </a>
              <p className="text-foreground/60 text-sm mt-1">Available 24/7</p>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Mail size={24} className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Email Us</h3>
              <a href={`mailto:${businessInfo.email}`} className="text-foreground/70 hover:text-primary transition-colors break-all">
                {businessInfo.email}
              </a>
              <p className="text-foreground/60 text-sm mt-1">We&apos;ll reply within 24 hours</p>
            </div>

            {/* Location */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <MapPin size={24} className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Visit Us</h3>
              <p className="text-foreground/70">{businessInfo.address}</p>
              <a
                href={businessInfo.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm mt-2 inline-block"
              >
                View on Google Maps
              </a>
            </div>
          </div>

          {/* Contact Form & Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Form */}
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border border-muted rounded-lg focus:outline-none focus:border-primary transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border border-muted rounded-lg focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:border-primary transition-colors"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  <Send size={18} />
                  Send Message
                </button>
                {submitted && (
                  <div className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-lg">
                    Thank you! We&apos;ll be in touch soon.
                  </div>
                )}
              </form>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-md h-96">
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
          </div>
        </div>
      </div>
    </section>
  );
}
