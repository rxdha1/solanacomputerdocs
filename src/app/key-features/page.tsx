import { DocsLayout } from "@/components/layout/DocsLayout";
import { PageNavigation } from "@/components/layout/PageNavigation";

export default function KeyFeaturesPage() {
  return (
    <DocsLayout>
      <div className="flex items-center space-x-2 mb-8">
        <span className="text-green-500 text-xl">!</span>
        <h1 className="text-3xl font-bold m-0">Key Features</h1>
      </div>

      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">🔑 Multi-Wallet Support</h2>
          <p className="leading-relaxed">
            Connect and manage multiple Solana wallets effortlessly. The
            platform is designed to handle a large number of wallets, making it
            ideal for power users and developers who need to perform operations
            across a wide range of accounts.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">📈 Trading Interface</h2>
          <p className="leading-relaxed">
            An intuitive and powerful user interface for executing trades on the
            Solana network. It provides all the tools you need for seamless
            trading, including real-time price charts, order books, and trade
            history.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">✨ AI Quant Trader</h2>
          <p className="leading-relaxed">
            Harness the power of AI with quantitative trading models for
            optimized performance. This upcoming feature will provide automated
            trading strategies based on market analysis and predictive
            modeling. (Coming Soon)
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">🔒 Automatic VPN</h2>
          <p className="leading-relaxed">
            Enhanced privacy and security with a built-in VPN to protect your
            trading activity. This feature ensures that your connection is
            secure and your data remains private while you trade.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">📱 Responsive Design</h2>
          <p className="leading-relaxed">
            The platform is optimized for both desktop and mobile devices,
            allowing you to trade and manage your wallets from anywhere.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">⚡ Fast Performance</h2>
          <p className="leading-relaxed">
            Built with modern web technologies for a smooth and responsive user
            experience, ensuring that you can execute trades and manage your
            assets without delay.
          </p>
        </div>
      </section>

      <PageNavigation />
    </DocsLayout>
  );
} 