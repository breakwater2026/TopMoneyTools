import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";
import CookieBanner from "@/components/CookieBanner";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <SkipLink />
      <Header />
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        {children}
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}