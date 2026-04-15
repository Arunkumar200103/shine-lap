import { Hero } from '@/components/hero';
import { HomeServices } from '@/components/home-services';
import { FeaturedProducts } from '@/components/featured-products';
import { Brands } from '@/components/brands';
import { Testimonials } from '@/components/testimonials';
import { CTABanner } from '@/components/cta-banner';

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeServices />
      <FeaturedProducts />
      <Brands />
      <Testimonials />
      <CTABanner
        title="Let's Build Something Great Together"
        subtitle="From a single laptop to a complete office IT setup — we've got you covered. Get in touch for a personalized consultation."
      />
    </main>
  );
}
