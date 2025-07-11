"use client";

import { useState, useEffect } from "react";
import {
  Search as SearchIcon,
  Twitter,
  Send,
  Users,
  CandlestickChart,
  AppWindow,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Search } from "./Search";
import { Button } from "../ui/button";
import Link from "next/link";

const navLinks = [
  {
    href: "https://x.com/bonkcomputer",
    label: "X",
    icon: <Twitter />,
  },
  {
    href: "https://t.me/bonkcomputerchat",
    label: "TG",
    icon: <Send />,
  },
  {
    href: "https://cc.bonk.computer",
    label: "Community",
    icon: <Users />,
  },
  {
    href: "https://trade.bonk.computer",
    label: "Trade",
    icon: <CandlestickChart />,
  },
  {
    href: "https://bonk.computer",
    label: "App",
    icon: <AppWindow />,
  },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <header className="bg-gray-950 border-b border-gray-800 p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {navLinks.map((link) => (
            <Button key={link.href} variant="ghost" size="sm" asChild>
              <Link href={link.href} target="_blank" rel="noopener noreferrer">
                {link.icon}
                {link.label}
              </Link>
            </Button>
          ))}
        </div>
        <div className="max-w-md w-full">
          <button
            className="relative w-full"
            onClick={() => setOpen(true)}
          >
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-100 w-4 h-4" />
            <Input
              placeholder="Search..."
              className="pl-10 pr-4 bg-gray-800 border-gray-700 w-full"
              readOnly
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <kbd className="px-2 py-1 text-xs bg-gray-700 rounded text-gray-100">
                Ctrl K
              </kbd>
            </div>
          </button>
        </div>
      </header>
      <Search open={open} setOpen={setOpen} />
    </>
  );
} 