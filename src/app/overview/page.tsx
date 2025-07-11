import { DocsLayout } from "@/components/layout/DocsLayout";
import { PageNavigation } from "@/components/layout/PageNavigation";

export default function OverviewPage() {
  return (
    <DocsLayout>
      <div className="flex items-center space-x-2 mb-8">
        <span className="text-green-500 text-xl">!</span>
        <h1 className="text-3xl font-bold m-0">Overview</h1>
      </div>

      <section className="mb-12">
        <p className="leading-relaxed mb-6">
          <strong>Solana Computer</strong> is a comprehensive, open-source
          multi-wallet trading platform designed for the Solana blockchain. It
          provides users with a seamless graphical interface to connect various
          Solana wallets, execute trades, and manage token operations
          efficiently.
        </p>
        <p className="leading-relaxed mb-6">
          The platform is a collaborative effort between{" "}
          <a
            href="https://cc.bonk.computer/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500"
          >
            Bonk Computer
          </a>{" "}
          and{" "}
          <a
            href="https://raze.bot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500"
          >
            Raze.bot
          </a>
          . It leverages the open-source{" "}
          <a
            href="https://github.com/furydotbot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500"
          >
            Fury SDKs
          </a>{" "}
          for backend and blockchain interactions, and the{" "}
          <a
            href="https://github.com/bonkcomputer/framework"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500"
          >
            Bonk Computer Framework
          </a>{" "}
          for AI operations, automations, and enhanced privacy features.
        </p>
        <p className="leading-relaxed">
          Whether you're a trader managing hundreds of wallets or a developer
          exploring multi-wallet capabilities on Solana, this platform offers a
          robust, high-performance toolkit for efficient and scalable on-chain
          activity.
        </p>
      </section>

      <PageNavigation />
    </DocsLayout>
  );
} 