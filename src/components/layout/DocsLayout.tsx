import { SideBar } from "./SideBar";
import { Header } from "./Header";

export function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-950 flex">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8 max-w-4xl">
          <div className="prose prose-lg max-w-none prose-invert">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
} 