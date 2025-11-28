export const JsonLd = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "re-{test}",
    "url": "https://re-test.dev",
    "logo": "https://re-test.dev/logo.png",
    "description": "High-skilled engineering outsourcing services using a distributed Agile model.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@re-test.dev",
      "contactType": "sales"
    },
    "sameAs": [
      "https://twitter.com/retest_dev",
      "https://linkedin.com/company/re-test-dev"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

