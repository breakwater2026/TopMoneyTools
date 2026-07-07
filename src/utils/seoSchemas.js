export function makeToolSchema(name, slug, description) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: name,
    url: `https://topmoneytools.com/tools/${slug}`,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    description: description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
}

export function makeBreadcrumb(sectionName, sectionSlug, pageName, pageSlug) {
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://topmoneytools.com",
    },
  ];

  if (sectionName && sectionSlug) {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: sectionName,
      item: `https://topmoneytools.com/${sectionSlug}`,
    });
  }

  if (pageName && pageSlug) {
    items.push({
      "@type": "ListItem",
      position: items.length + 1,
      name: pageName,
      item: `https://topmoneytools.com/${pageSlug}`,
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}
