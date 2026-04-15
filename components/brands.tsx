const brandIcons = [
  { name: 'HP', src: 'https://cdn.simpleicons.org/hp' },
  { name: 'Dell', src: 'https://api.iconify.design/simple-icons/dell.svg?color=%230076CE' },
  { name: 'Lenovo', src: 'https://cdn.simpleicons.org/lenovo' },
  { name: 'ASUS', src: 'https://api.iconify.design/simple-icons/asus.svg?color=%2300539B' },
  { name: 'Intel', src: 'https://cdn.simpleicons.org/intel' },
  { name: 'AMD', src: 'https://cdn.simpleicons.org/amd' },
  { name: 'Epson', src: 'https://api.iconify.design/simple-icons/epson.svg?color=%2300205B' },
  { name: 'Samsung', src: 'https://api.iconify.design/logos/samsung.svg' },
  { name: 'Logitech', src: 'https://api.iconify.design/simple-icons/logitech.svg?color=%23000000' },
  { name: 'Microsoft', src: 'https://api.iconify.design/logos/microsoft.svg' },
];

export function Brands() {
  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm text-muted-foreground font-semibold tracking-wider uppercase mb-2">Our Trusted Partners</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Brands We Work With</h2>
        </div>

        <div className="overflow-hidden w-full relative mask-edges py-4">
          <div className="flex w-max animate-marquee">
            {[...brandIcons, ...brandIcons, ...brandIcons, ...brandIcons].map((brand, idx) => (
              <div
                key={`${brand.name}-${idx}`}
                className="w-44 flex-shrink-0 group bg-white rounded-xl p-6 mx-4 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-primary/10 h-24"
              >
                <img src={brand.src} alt={brand.name} className="h-10 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
