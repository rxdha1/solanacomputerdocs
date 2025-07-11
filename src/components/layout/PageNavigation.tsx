"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Introduction" },
  { href: "/overview", label: "Overview" },
  { href: "/key-features", label: "Key Features" },
  { href: "/how-to-use", label: "How to use" },
  { href: "/locally-install", label: "Locally install" },
  { href: "/technical-integration", label: "Technical Integration" },
  {
    href: "/privacy-and-legal",
    label: "Privacy and Legal Considerations",
  },
];

export function PageNavigation() {
  const pathname = usePathname();
  const currentIndex = links.findIndex((link) => link.href === pathname);

  const prevPage = currentIndex > 0 ? links[currentIndex - 1] : null;
  const nextPage =
    currentIndex < links.length - 1 ? links[currentIndex + 1] : null;

  return (
    <div className="mt-12 grid grid-cols-2 gap-4">
      {prevPage ? (
        <Link
          href={prevPage.href}
          className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 text-left"
        >
          <p className="text-sm mb-1">Previous</p>
          <p className="text-lg font-semibold">{prevPage.label}</p>
        </Link>
      ) : (
        <div />
      )}
      {nextPage ? (
        <Link
          href={nextPage.href}
          className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 text-right"
        >
          <p className="text-sm mb-1">Next</p>
          <p className="text-lg font-semibold">{nextPage.label}</p>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
} 