import { Helmet } from "react-helmet";
import { SITE } from "@/config/site.config";

// Canonical host is always SITE.baseUrl (apex). Prefer explicit seoMeta.url, else path.
export default function SEO({ title, description, path = "", seoMeta = {}, structuredData = [] }) {
  const {
    title: ogTitle = title,
    description: ogDescription = description,
    url: metaUrl = "",
    image: ogImage = "",
    type: ogType = "website",
  } = seoMeta || {};

  const normalizedPath = path
    ? path.startsWith("/")
      ? path
      : `/${path}`
    : "";
  const ogUrl =
    metaUrl ||
    (normalizedPath ? `${SITE.baseUrl.replace(/\/$/, "")}${normalizedPath}` : SITE.baseUrl);

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}

      {ogUrl && <link rel="canonical" href={ogUrl} />}

      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogDescription && <meta property="og:description" content={ogDescription} />}
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE.name} />

      <meta name="twitter:card" content="summary_large_image" />
      {ogTitle && <meta name="twitter:title" content={ogTitle} />}
      {ogDescription && <meta name="twitter:description" content={ogDescription} />}
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {Array.isArray(structuredData) &&
        structuredData.map((obj, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(obj)}
          </script>
        ))}
    </Helmet>
  );
}
