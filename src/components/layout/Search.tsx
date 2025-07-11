"use client";

import { useState, useEffect } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"; // Assuming a command component exists in ui
import { useRouter } from "next/navigation";

const links = [
  { href: "/", label: "Introduction" },
  { href: "/overview", label: "Overview" },
  { href: "/key-features", label: "Key Features" },
  { href: "/how-to-use", label: "How to use" },
  { href: "/locally-install", label: "Locally install" },
  { href: "/technical-integration", label: "Technical Integration" },
  { href: "/privacy-and-legal", label: "Privacy and Legal Considerations" },
];

export function Search({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) {
  const router = useRouter();

  const runCommand = (command: () => unknown) => {
    setOpen(false);
    command();
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Links">
          {links.map(({ href, label }) => (
            <CommandItem
              key={href}
              onSelect={() => runCommand(() => router.push(href))}
            >
              {label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
} 