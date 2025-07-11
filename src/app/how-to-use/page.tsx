import { DocsLayout } from "@/components/layout/DocsLayout";
import { PageNavigation } from "@/components/layout/PageNavigation";

export default function HowToUsePage() {
  return (
    <DocsLayout>
      <div className="flex items-center space-x-2 mb-8">
        <span className="text-green-500 text-xl">!</span>
        <h1 className="text-3xl font-bold m-0">How to use</h1>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Initial Setup</h2>
        <ol className="list-decimal list-inside leading-relaxed space-y-2">
          <li>
            <strong>Access the Application</strong>
            <br />
            Navigate to the live application. The interface will load with a
            dark theme and green accent colors.
          </li>
          <li>
            <strong>System Configuration</strong>
            <br />
            Click the settings icon (⚙️) in the top-right corner. Configure
            your network settings, RPC endpoint, and transaction fees. Set up
            API keys for enhanced features if needed.
          </li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Wallet Management</h2>
        <h3 className="text-xl font-semibold mb-2">Creating Wallets</h3>
        <ol className="list-decimal list-inside leading-relaxed space-y-2">
          <li>
            Access System Settings → <strong>Wallets</strong> tab.
          </li>
          <li>
            In the <strong>Create Wallets</strong> section:
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Set quantity (1-180 wallets)</li>
              <li>Click CREATE to generate new wallets</li>
            </ul>
          </li>
          <li>
            Newly created wallets will appear in your wallet list.
          </li>
        </ol>

        <h3 className="text-xl font-semibold mt-6 mb-2">Importing Wallets</h3>
        <p className="leading-relaxed">
          <strong>Single Wallet Import:</strong>
        </p>
        <ol className="list-decimal list-inside leading-relaxed space-y-2 mt-2">
          <li>
            Click <strong>IMPORT SINGLE WALLET</strong>
          </li>
          <li>Enter the private key or seed phrase</li>
          <li>Confirm the import</li>
        </ol>

        <p className="leading-relaxed mt-4">
          <strong>Bulk Import:</strong>
        </p>
        <ol className="list-decimal list-inside leading-relaxed space-y-2 mt-2">
          <li>
            Click <strong>IMPORT FROM FILE (.txt)</strong>
          </li>
          <li>
            Upload a text file containing private keys (one per line)
          </li>
          <li>The system will process and import all valid wallets</li>
        </ol>
      </section>

      <PageNavigation />
    </DocsLayout>
  );
} 