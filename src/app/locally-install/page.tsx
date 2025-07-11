import { DocsLayout } from "@/components/layout/DocsLayout";
import { PageNavigation } from "@/components/layout/PageNavigation";

export default function LocallyInstallPage() {
  return (
    <DocsLayout>
      <div className="flex items-center space-x-2 mb-8">
        <span className="text-green-500 text-xl">!</span>
        <h1 className="text-3xl font-bold m-0">Locally install</h1>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
        <h3 className="text-xl font-semibold mt-6 mb-2">Prerequisites</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-2">
          <li>Node.js (v14 or later)</li>
          <li>npm (comes with Node.js)</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Installation</h3>
        <pre className="bg-gray-800 text-white p-4 rounded-lg">
          <code>
            git clone https://github.com/bonkcomputer/solana-ui.git
            <br />
            cd solana-ui
            <br />
            npm install
            <br />
            npm run dev
          </code>
        </pre>
        <p className="leading-relaxed mt-4">Visit: http://localhost:5173</p>
      </section>

      <PageNavigation />
    </DocsLayout>
  );
} 