"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    group: "Introduction",
    items: [
      {
        href: "/",
        label: "Introduction to Solana Computer",
        icon: "📖",
      },
    ],
  },
  {
    group: "SOLANA MULTI WALLET",
    items: [
      { href: "/overview", label: "Overview", icon: "👁️" },
      { href: "/key-features", label: "Key Features", icon: "⭐" },
      { href: "/how-to-use", label: "How to use", icon: "🚀" },
      { href: "/locally-install", label: "Locally install", icon: "💾" },
      {
        href: "/technical-integration",
        label: "Technical Integration",
        icon: "🔧",
      },
      {
        href: "/privacy-and-legal",
        label: "Privacy and Legal Considerations",
        icon: "🔒",
      },
    ],
  },
];

export function SideBar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-gray-900 text-white flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <Image
            src="https://2fkyfggwlscwizn6.public.blob.vercel-storage.com/bonkcomputer/BonkComputerLogoMain-FsfKSf0HTyD3BmHlOu3ylJmAaGSeEs.png"
            alt="Solana Computer Logo"
            width={32}
            height={32}
            className="rounded"
          />
          <span className="font-semibold text-lg">Solana Computer</span>
        </div>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1">
        <nav className="p-4 space-y-2">
          {links.map((group) => (
            <div key={group.group} className="mt-4 first:mt-0">
              <div className="flex items-center space-x-2 text-gray-400 p-2">
                <span className="text-sm">{group.items[0].icon}</span>
                <span className="text-sm font-medium">{group.group}</span>
              </div>
              <div className="ml-6 space-y-1">
                {group.items.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${
                      pathname === link.href
                        ? "text-green-400 bg-green-400/10"
                        : "text-gray-300 hover:bg-gray-800"
                    }`}
                  >
                    <span className="text-sm">{link.icon}</span>
                    <span className="text-sm">{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </ScrollArea>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center space-x-2 text-gray-400">
          <span className="text-sm">⚡</span>
          <span className="text-sm">Powered By $BCT</span>
        </div>
      </div>
    </div>
  );
} 