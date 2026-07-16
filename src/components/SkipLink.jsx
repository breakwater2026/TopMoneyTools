// Accessibility skip link — visible only on keyboard focus, jumps to #main-content.
export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[999] focus:rounded focus:bg-[#A3FFD6] focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest focus:text-[#081008]"
    >
      Skip to content
    </a>
  );
}