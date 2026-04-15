export const businessInfo = {
  name: 'Shine Computer Printer CCTV',
  tagline: 'Premium IT Solutions & Services',
  phone: '09842657658',
  whatsapp: '09842657658',
  email: 'info@shinecomputer.com',
  address: '18A, Dr.Venkatraman St, opp. Gobi Medicals, Gobichettipalayam, Tamil Nadu 638452',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8613.12544808498!2d77.42409987899768!3d11.455087929438202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba93da2065a59fd%3A0xe6386c7d4ed023b9!2sShine%20Computer%20Printer%20CCTV!5e0!3m2!1sen!2sin!4v1776164271655!5m2!1sen!2sin',
  mapLink: 'https://maps.google.com/?q=Shine+Computer+Printer+CCTV+Gobichettipalayam',
  socialLinks: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
    twitter: '#',
  },
};

export const services = [
  {
    id: 1,
    slug: 'computer-sales',
    title: 'Computer Sales',
    shortDescription: 'Latest desktops and laptops from top brands',
    description: 'We offer a wide range of computers including desktops, laptops, workstations, and mini PCs from top global brands. Whether you need a system for office work, gaming, or professional use, our experts will help you choose the perfect machine.',
    icon: 'Monitor',
    color: 'from-blue-500 to-indigo-600',
    features: [
      'Brand new desktops & laptops',
      'Custom PC builds to your specifications',
      'Business workstations & servers',
      'Gaming PCs & high-performance rigs',
      'All-in-one systems for offices',
      'Refurbished & certified pre-owned options',
    ],
    process: [
      { step: 'Consultation', desc: 'Understand your requirements and budget' },
      { step: 'Recommendation', desc: 'Suggest the best options for your needs' },
      { step: 'Configuration', desc: 'Customize specs to your exact needs' },
      { step: 'Setup & Delivery', desc: 'Complete setup with software installation' },
    ],
    faq: [
      { q: 'Do you offer warranty on computers?', a: 'Yes, all new systems come with manufacturer warranty plus our additional service guarantee.' },
      { q: 'Can you build a custom PC?', a: 'Absolutely! We specialize in custom builds for gaming, workstations, and specific business needs.' },
      { q: 'Do you offer EMI options?', a: 'Yes, we offer flexible EMI plans through our banking partners.' },
    ],
  },
  {
    id: 2,
    slug: 'printer-services',
    title: 'Printer Services',
    shortDescription: 'Installation, maintenance, and repairs',
    description: 'From inkjet to laser, single-function to multifunction printers — we handle sales, installation, maintenance, and repairs for all major printer brands. Get seamless printing solutions for your home or business.',
    icon: 'Printer',
    color: 'from-emerald-500 to-teal-600',
    features: [
      'Printer sales — inkjet, laser, thermal',
      'Multifunction printer installation',
      'Toner & cartridge refilling',
      'Printer repair & maintenance',
      'Network printer setup',
      'Print server configuration',
    ],
    process: [
      { step: 'Assessment', desc: 'Evaluate your printing volume and requirements' },
      { step: 'Selection', desc: 'Choose the right printer model and type' },
      { step: 'Installation', desc: 'Professional setup with network integration' },
      { step: 'Training', desc: 'Brief training on usage and basic maintenance' },
    ],
    faq: [
      { q: 'Which printer brands do you support?', a: 'We support HP, Canon, Epson, Brother, Samsung, and many more.' },
      { q: 'Do you refill toner cartridges?', a: 'Yes, we offer high-quality toner and cartridge refilling services.' },
      { q: 'Can you set up network printers?', a: 'Yes, we configure printers for wired and wireless network access.' },
    ],
  },
  {
    id: 3,
    slug: 'cctv-installation',
    title: 'CCTV Installation',
    shortDescription: 'Professional surveillance system setup',
    description: 'Protect your property with our professional CCTV installation services. We offer HD, IP, and wireless camera systems with remote viewing capabilities. Complete solutions from site survey to installation and maintenance.',
    icon: 'Camera',
    color: 'from-amber-500 to-orange-600',
    features: [
      'HD & IP camera systems',
      'DVR/NVR setup & configuration',
      'Remote viewing on mobile & PC',
      'Night vision & motion detection',
      'Wireless & PoE camera options',
      'Cloud storage integration',
    ],
    process: [
      { step: 'Site Survey', desc: 'Assess your property and identify key areas' },
      { step: 'System Design', desc: 'Design the optimal camera placement plan' },
      { step: 'Installation', desc: 'Professional mounting and wiring' },
      { step: 'Configuration', desc: 'Setup remote access and recording' },
    ],
    faq: [
      { q: 'How many cameras do I need?', a: 'It depends on your property size. We offer free site surveys to determine the optimal number.' },
      { q: 'Can I view cameras from my phone?', a: 'Yes, all our CCTV systems support remote viewing on mobile and desktop.' },
      { q: 'Do you provide maintenance?', a: 'Yes, we offer annual maintenance contracts for all CCTV installations.' },
    ],
  },
  {
    id: 4,
    slug: 'it-support',
    title: 'IT Support',
    shortDescription: '24/7 technical assistance and troubleshooting',
    description: 'Get reliable IT support for your business or home. From virus removal to network troubleshooting, software installation to data recovery — our certified technicians are available 24/7 to solve your tech problems.',
    icon: 'Headset',
    color: 'from-violet-500 to-purple-600',
    features: [
      'Virus & malware removal',
      'Operating system installation',
      'Data backup & recovery',
      'Network troubleshooting',
      'Software installation & updates',
      'Hardware diagnostics & repair',
    ],
    process: [
      { step: 'Report Issue', desc: 'Call or WhatsApp us with your problem' },
      { step: 'Diagnosis', desc: 'Quick remote or on-site diagnosis' },
      { step: 'Resolution', desc: 'Fix the issue efficiently' },
      { step: 'Follow-up', desc: 'Ensure everything is working perfectly' },
    ],
    faq: [
      { q: 'Do you offer remote support?', a: 'Yes, many issues can be resolved remotely. We also offer on-site visits when needed.' },
      { q: 'What are your support hours?', a: 'We provide 24/7 support for emergency issues. Regular support is available during business hours.' },
      { q: 'Do you offer AMC plans?', a: 'Yes, we offer Annual Maintenance Contracts for businesses of all sizes.' },
    ],
  },
];

export const productCategories = [
  {
    id: 'laptops',
    name: 'Laptops',
    icon: 'Laptop',
    description: 'High-performance laptops for work, gaming, and everyday use',
    image: '/product-laptop.png',
  },
  {
    id: 'desktops',
    name: 'Desktops',
    icon: 'Monitor',
    description: 'Powerful desktop computers and workstations',
    image: '/product-desktop.png',
  },
  {
    id: 'printers',
    name: 'Printers',
    icon: 'Printer',
    description: 'Inkjet, laser, and multifunction printers',
    image: '/product-printer.png',
  },
  {
    id: 'cctv',
    name: 'CCTV Systems',
    icon: 'Camera',
    description: 'Complete surveillance and security camera solutions',
    image: '/gallery-4.jpg',
  },
  {
    id: 'networking',
    name: 'Networking',
    icon: 'Wifi',
    description: 'Routers, switches, and networking equipment',
    image: '/gallery-5.jpg',
  },
  {
    id: 'accessories',
    name: 'Accessories',
    icon: 'Keyboard',
    description: 'Keyboards, mice, cables, and peripherals',
    image: '/gallery-6.jpg',
  },
];

export const products = [
  // Laptops
  { id: 1, category: 'laptops', name: 'HP Pavilion 15', price: '₹45,999', specs: 'Intel i5, 8GB RAM, 512GB SSD', image: '/product-laptop.png', badge: 'Best Seller' },
  { id: 2, category: 'laptops', name: 'Dell Inspiron 14', price: '₹52,499', specs: 'Intel i7, 16GB RAM, 512GB SSD', image: '/product-laptop.png', badge: '' },
  { id: 3, category: 'laptops', name: 'Lenovo IdeaPad 3', price: '₹38,999', specs: 'AMD Ryzen 5, 8GB RAM, 256GB SSD', image: '/product-laptop.png', badge: 'Budget Pick' },
  { id: 4, category: 'laptops', name: 'ASUS VivoBook 15', price: '₹48,999', specs: 'Intel i5, 8GB RAM, 1TB HDD', image: '/product-laptop.png', badge: '' },
  // Desktops
  { id: 5, category: 'desktops', name: 'HP ProDesk 400', price: '₹35,999', specs: 'Intel i5, 8GB RAM, 256GB SSD', image: '/product-desktop.png', badge: 'Office Pick' },
  { id: 6, category: 'desktops', name: 'Dell OptiPlex 3080', price: '₹42,999', specs: 'Intel i7, 16GB RAM, 512GB SSD', image: '/product-desktop.png', badge: '' },
  { id: 7, category: 'desktops', name: 'Custom Gaming PC', price: '₹75,999', specs: 'Ryzen 7, RTX 4060, 32GB RAM', image: '/product-desktop.png', badge: 'Gaming' },
  { id: 8, category: 'desktops', name: 'Lenovo ThinkCentre', price: '₹38,499', specs: 'Intel i5, 8GB RAM, 512GB SSD', image: '/product-desktop.png', badge: '' },
  // Printers
  { id: 9, category: 'printers', name: 'HP LaserJet Pro M404', price: '₹18,999', specs: 'Mono Laser, 40 ppm, WiFi', image: '/product-printer.png', badge: 'Top Rated' },
  { id: 10, category: 'printers', name: 'Canon PIXMA G3010', price: '₹12,499', specs: 'Inkjet, Ink Tank, WiFi', image: '/product-printer.png', badge: '' },
  { id: 11, category: 'printers', name: 'Epson L3210', price: '₹10,999', specs: 'Ink Tank, All-in-One, USB', image: '/product-printer.png', badge: 'Budget Pick' },
  { id: 12, category: 'printers', name: 'Brother DCP-T820DW', price: '₹19,999', specs: 'Inkjet, Duplex, ADF, WiFi', image: '/product-printer.png', badge: '' },
  // CCTV
  { id: 13, category: 'cctv', name: 'Hikvision 4-Camera Kit', price: '₹15,999', specs: '2MP, Night Vision, DVR', image: '/gallery-4.jpg', badge: 'Popular' },
  { id: 14, category: 'cctv', name: 'CP Plus 8-Ch System', price: '₹28,999', specs: '4MP, PoE NVR, 2TB HDD', image: '/gallery-4.jpg', badge: '' },
  { id: 15, category: 'cctv', name: 'Dahua 4-Ch Wireless Kit', price: '₹22,499', specs: '3MP, WiFi, Cloud Storage', image: '/gallery-4.jpg', badge: 'Wireless' },
  { id: 16, category: 'cctv', name: 'Hikvision 16-Ch Pro', price: '₹55,999', specs: '4MP IP, PoE, 4TB HDD', image: '/gallery-4.jpg', badge: 'Enterprise' },
  // Networking
  { id: 17, category: 'networking', name: 'TP-Link Archer AX73', price: '₹8,999', specs: 'WiFi 6, Dual Band, Gigabit', image: '/gallery-5.jpg', badge: 'Best WiFi' },
  { id: 18, category: 'networking', name: 'Netgear 24-Port Switch', price: '₹12,499', specs: 'Gigabit, Managed, Rack Mount', image: '/gallery-5.jpg', badge: '' },
  { id: 19, category: 'networking', name: 'D-Link Access Point', price: '₹4,999', specs: 'AC1200, PoE, Ceiling Mount', image: '/gallery-5.jpg', badge: '' },
  { id: 20, category: 'networking', name: 'Ubiquiti UniFi 6 Lite', price: '₹9,999', specs: 'WiFi 6, PoE, Ceiling Mount', image: '/gallery-5.jpg', badge: 'Pro Grade' },
  // Accessories
  { id: 21, category: 'accessories', name: 'Logitech MK270 Combo', price: '₹1,499', specs: 'Wireless Keyboard & Mouse', image: '/gallery-6.jpg', badge: '' },
  { id: 22, category: 'accessories', name: 'APC 1100VA UPS', price: '₹5,999', specs: '1100VA, 6 Outlets, AVR', image: '/gallery-6.jpg', badge: 'Essential' },
  { id: 23, category: 'accessories', name: 'Samsung 24" Monitor', price: '₹11,999', specs: 'FHD IPS, 75Hz, HDMI', image: '/gallery-6.jpg', badge: '' },
  { id: 24, category: 'accessories', name: 'WD 1TB External HDD', price: '₹3,999', specs: 'USB 3.0, Portable, Backup', image: '/gallery-6.jpg', badge: '' },
];

export const brands = [
  'HP', 'Dell', 'Lenovo', 'ASUS', 'Canon', 'Epson',
  'Hikvision', 'TP-Link', 'Samsung', 'Brother', 'Logitech', 'Microsoft',
];

export const stats = [
  { number: '500+', label: 'Satisfied Clients' },
  { number: '10+', label: 'Years Experience' },
  { number: '24/7', label: 'Support Available' },
  { number: '100%', label: 'Satisfaction Guarantee' },
];

export const whyChooseUs = [
  {
    title: 'Expert Team',
    description: 'Highly trained professionals with industry certifications and years of hands-on experience.',
    icon: 'Users',
  },
  {
    title: 'Quality Products',
    description: 'Only genuine products from authorized distributors with full manufacturer warranty.',
    icon: 'Award',
  },
  {
    title: 'Fast Service',
    description: 'Quick response times with same-day service for urgent issues.',
    icon: 'Zap',
  },
  {
    title: 'Competitive Pricing',
    description: 'Best value for premium services — transparent pricing with no hidden costs.',
    icon: 'IndianRupee',
  },
  {
    title: 'Warranty Support',
    description: 'Comprehensive warranties on all products with hassle-free claim process.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored IT solutions designed specifically for your business requirements.',
    icon: 'Settings',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Ahmed Hassan',
    company: 'Tech Solutions Ltd',
    quote: 'Excellent service and professional installation. The team at Shine went above and beyond to set up our entire office network. Highly recommended!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Fatima Al-Mansouri',
    company: 'Business Hub',
    quote: 'Best IT support team in town. They solved our server issues in minutes and have been our trusted partner for 3 years now.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Mohammed Ali',
    company: 'Digital Enterprise',
    quote: 'Premium quality products and outstanding customer service. The CCTV system they installed works flawlessly with crystal-clear footage.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sara Khan',
    company: 'Creative Studio',
    quote: 'Got our custom workstations built by Shine. Perfect specs, great price, and the after-sales support is exceptional.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Raj Mehta',
    company: 'MedTech Clinic',
    quote: 'Shine handles all our IT infrastructure — from printers to networking. Reliable, professional, and always available when we need them.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Aisha Begum',
    company: 'EduLearn Academy',
    quote: 'We equipped our entire school with computers from Shine. The team provided excellent post-installation training and support.',
    rating: 5,
  },
];

export const galleryImages = [
  { id: 1, title: 'Computer Showroom', category: 'showroom', src: '/gallery-1.jpg' },
  { id: 2, title: 'Printer Installation', category: 'printer', src: '/gallery-2.jpg' },
  { id: 3, title: 'CCTV Setup', category: 'cctv', src: '/gallery-3.jpg' },
  { id: 4, title: 'IT Support Team', category: 'support', src: '/gallery-4.jpg' },
  { id: 5, title: 'Network Setup', category: 'network', src: '/gallery-5.jpg' },
  { id: 6, title: 'Customer Service', category: 'service', src: '/gallery-6.jpg' },
];
