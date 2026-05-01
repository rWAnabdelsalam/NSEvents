export default function SEOJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Najmat AlSafa',
    alternateName: 'Najmat AlSafa Events',
    url: 'https://www.najmatalsafa.com/',
    image: 'https://www.najmatalsafa.com/assets/og-image.jpg',
    description: 'UAE based luxury hospitality and catering service for weddings, majlis gatherings, corporate celebrations, sweets, drinks, perfumes, abayas, photo booths, and servicing carts.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AE'
    },
    areaServed: ['Dubai', 'Abu Dhabi', 'Sharjah', 'United Arab Emirates'],
    serviceType: [
      'Luxury hospitality UAE',
      'Wedding catering UAE',
      'Majlis hospitality UAE',
      'Arabic coffee service',
      'Luxury servicing carts',
      'Perfume bar',
      'Event sweets and drinks'
    ],
    priceRange: 'AED 25,000+'
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
}
