import { DocsLayout } from "@/components/layout/DocsLayout";
import { ExternalLink } from "lucide-react";
import { PageNavigation } from "@/components/layout/PageNavigation";

export default function Home() {
  return (
    <DocsLayout>
      {/* Page Header */}
      <div className="flex items-center space-x-2 mb-8">
        <span className="text-green-500 text-xl">!</span>
        <h1 className="text-3xl font-bold m-0">
          Introduction to Solana Computer
        </h1>
      </div>

      {/* Main Content */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Solana Computer</h2>
        <p className="leading-relaxed mb-6">
          Welcome to the documentation for <strong>Solana Computer</strong>, the
          interface for the <strong>Solana Computer</strong> project. This is a
          powerful, multi-wallet trading platform designed for the Solana
          blockchain.
        </p>
        <p className="leading-relaxed mb-8">
          This project was developed by the teams at{" "}
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
          </a>{" "}
          using the open-source{" "}
          <a
            href="https://github.com/furydotbot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500"
          >
            Fury SDKs
          </a>{" "}
          and the{" "}
          <a
            href="https://github.com/bonkcomputer/framework"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500"
          >
            Bonk Computer Framework
          </a>
          .
        </p>

        {/* Live Demo Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <span className="text-green-500 mr-2">🚀</span>
            Live Demo:{" "}
            <a
              href="https://trade.bonk.computer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-600 ml-2"
            >
              https://trade.bonk.computer
              <ExternalLink className="inline w-4 h-4 ml-1" />
            </a>
          </h3>

          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="w-full h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded border border-gray-700 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">📊</div>
                <p className="text-lg font-semibold">
                  Solana Computer Trading Interface
                </p>
                <p className="text-sm mt-1">
                  Multi-wallet Solana trading platform
                </p>
              </div>
            </div>
            <p className="text-center mt-2">
              Solana Computer UI
            </p>
          </div>
        </div>
      </section>

      {/* Why Solana Computer Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Why Solana Computer?</h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-green-500 mr-3 mt-1">•</span>
            <div>
              <strong>Multi-Wallet Power:</strong>{" "}
              <span>
                Manage up to 180 Solana wallets simultaneously, with tools for
                creation, import, export, and bulk operations.
              </span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-3 mt-1">•</span>
            <div>
              <strong>Unified Trading:</strong>{" "}
              <span>
                Buy, sell, and swap tokens across multiple DEXs like Jupiter,
                Raydium, Pump.fun, and more — all from a single interface.
              </span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-3 mt-1">•</span>
            <div>
              <strong>Advanced Token Management:</strong>{" "}
              <span>
                Distribute, mixer, consolidate, transfer, and even deploy SPL
                tokens with precision and ease.
              </span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-3 mt-1">•</span>
            <div>
              <strong>Real-Time Insights:</strong>{" "}
              <span>
                Monitor live token balances and price movements, with
                integrations like Solscan for transparency.
              </span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-3 mt-1">•</span>
            <div>
              <strong>Developer-Friendly:</strong>{" "}
              <span>
                Built with React, Next.js, Tailwind CSS, and TypeScript — and
                fully powered by Fury SDKs — Solana Computer serves as both a
                trading platform and a development reference for creating
                _scalable Web3 tools on Solana.
              </span>
            </div>
          </li>
        </ul>
      </section>

      <section>
        <p className="leading-relaxed">
          This documentation walks you through every feature from wallet
          creation to advanced atomic operations and provides everything you
          need to get started, integrate, or contribute to the project.
        </p>
      </section>

      <PageNavigation />

      <div className="mt-8 text-center text-sm">Last updated today</div>
    </DocsLayout>
  );
}
