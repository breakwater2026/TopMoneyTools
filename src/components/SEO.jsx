import { Helmet } from "react-helmet";
import { SITE } from "@/config/site.config";

export default function SEO({ title, description, path = "", seoMeta = {}, structuredData }) {
  const {
    title: ogTitle = title,
    description: ogDescription = description,
    url: ogUrl = "",
    image: ogImage = "",
    type: ogType = "article",
    robots: ogRobots = "index,follow",
  } = seoMeta || {};

  const canonicalUrl = ogUrl || (path ? `${SITE.baseUrl}${path.startsWith("/") ? path : `/${path}`}` : SITE.baseUrl);

  return (
    <Helmet>
      {/* Primary Meta */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      <meta name="robots" content={ogRobots} />

      {/* Canonical */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* OpenGraph */}
      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogDescription && <meta property="og:description" content={ogDescription} />}
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE.name} />

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
