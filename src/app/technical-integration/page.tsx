import { DocsLayout } from "@/components/layout/DocsLayout";
import { PageNavigation } from "@/components/layout/PageNavigation";

export default function TechnicalIntegrationPage() {
  return (
    <DocsLayout>
      <div className="flex items-center space-x-2 mb-8">
        <span className="text-green-500 text-xl">!</span>
        <h1 className="text-3xl font-bold m-0">Technical Integration</h1>
      </div>

      <section className="mb-12">
        <p className="leading-relaxed mb-6">
          The Solana Computer platform is built on a robust technical
          foundation, combining powerful SDKs and frameworks to deliver a secure
          and efficient trading experience.
        </p>

        <h2 className="text-2xl font-bold my-4">Fury SDKs</h2>
        <p className="leading-relaxed mb-6">
          The core backend and blockchain interactions are powered by the
          open-source{" "}
          <a
            href="https://github.com/furydotbot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500"
          >
            Fury SDKs
          </a>
          . This provides:
        </p>
        <ul className="list-disc list-inside leading-relaxed space-y-2">
          <li>Real-time blockchain interaction with privacy considerations</li>
          <li>Multi-DEX aggregation with operational security</li>
          <li>Secure wallet management with enhanced privacy features</li>
          <li>
            Atomic transaction execution including complex mixing operations
          </li>
        </ul>

        <h2 className="text-2xl font-bold my-4">Bonk Computer Framework</h2>
        <p className="leading-relaxed mb-6">
          For advanced capabilities, the platform integrates the{" "}
          <a
            href="https://github.com/bonkcomputer/framework"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500"
          >
            Bonk Computer Framework
          </a>
          . This framework is responsible for:
        </p>
        <ul className="list-disc list-inside leading-relaxed space-y-2">
          <li>AI-powered operations and automations</li>
          <li>Virtual Machine (VM) integrations</li>
          <li>Extended privacy and encryption features</li>
        </ul>

        <p className="leading-relaxed mt-6">
          This combination of technologies allows the application to serve as
          both a practical trading tool and a demonstration of how to build
          sophisticated, secure, and private applications on the Solana
          blockchain.
        </p>
      </section>

      <PageNavigation />
    </DocsLayout>
  );
} 