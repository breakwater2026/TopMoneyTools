import { Helmet } from "react-helmet";

export default function SEO({ title, description, seoMeta = {}, structuredData = [] }) {
  const {
    title: ogTitle = title,
    description: ogDescription = description,
    url: ogUrl = "",
    image: ogImage = "",
    type: ogType = "article",
  } = seoMeta || {};

  return (
    <Helmet>
      {/* Primary Meta */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}

      {/* Canonical */}
      {ogUrl && <link rel="canonical" href={ogUrl} />}

      {/* OpenGraph */}
      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogDescription && <meta property="og:description" content={ogDescription} />}
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:type" content={ogType} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      {ogTitle && <meta name="twitter:title" content={ogTitle} />}
      {ogDescription && <meta name="twitter:description" content={ogDescription} />}
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* JSON-LD Structured Data */}
      {Array.isArray(structuredData) &&
        structuredData.map((obj, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(obj)}
          </script>
        ))}
    </Helmet>
  );
}
