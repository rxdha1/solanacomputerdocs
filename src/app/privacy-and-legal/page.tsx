import { DocsLayout } from "@/components/layout/DocsLayout";
import { PageNavigation } from "@/components/layout/PageNavigation";

export default function PrivacyAndLegalPage() {
  return (
    <DocsLayout>
      <div className="flex items-center space-x-2 mb-8">
        <span className="text-green-500 text-xl">!</span>
        <h1 className="text-3xl font-bold m-0">
          Privacy and Legal Considerations
        </h1>
      </div>

      {/* --- Privacy Section --- */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Commitment to Privacy</h2>
        <p className="leading-relaxed mb-6">
          We are deeply committed to protecting your privacy and providing a
          secure trading environment. The Solana Computer platform is designed
          with privacy at its core. As a client-side application, it minimizes
          data collection and gives you full control over your assets.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Data Collection and Usage
        </h3>
        <p className="leading-relaxed mb-6">
          The application runs locally in your browser. We do not collect or
          store any personal data, private keys, or seed phrases. Your wallet
          information is managed exclusively by you and never transmitted to our
          servers. All interactions with the Solana network are broadcast
          directly from your client, and as with any blockchain, transaction
          data is public.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Automatic VPN</h3>
        <p className="leading-relaxed mb-6">
          To enhance your privacy and security, the platform includes a
          built-in Automatic VPN. This feature encrypts your internet traffic
          and masks your IP address, making it difficult for third parties to
          monitor your online activity. This helps protect you from potential
          surveillance and targeted attacks.
        </p>
      </section>

      {/* --- Legal Section --- */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Terms of Service & Legal Disclaimer
        </h2>
        <p className="leading-relaxed mb-6">
          By using the Solana Computer platform, you agree to the following
          terms. This platform is provided on an "as-is" and "as-available"
          basis.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Acceptable Use Policy
        </h3>
        <p className="leading-relaxed mb-2">
          You agree not to use the platform for any of the following prohibited
          activities:
        </p>
        <ul className="list-disc list-inside leading-relaxed space-y-2">
          <li>
            Any activity that is illegal or violates any applicable local,
            state, national, or international law or regulation.
          </li>
          <li>
            Market manipulation, such as pump-and-dump schemes, wash trading,
            or other deceptive or manipulative trading practices.
          </li>
          <li>
            Attempting to interfere with, compromise the system integrity or
            security, or decipher any transmissions to or from the servers
            running the service.
          </li>
          <li>
            Distributing spam, chain letters, or other unsolicited-promotional
            material.
          </li>
          <li>
            Engaging in any activity that could damage, disable, overburden, or
            impair the platform.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          User Responsibilities
        </h3>
        <p className="leading-relaxed mb-2">
          You are solely responsible for:
        </p>
        <ul className="list-disc list-inside leading-relaxed space-y-2">
          <li>
            The security of your private keys, seed phrases, and any other
            credentials. Never share them with anyone, including the developers
            of this platform.
          </li>
          <li>
            Complying with all applicable laws and regulations in your
            jurisdiction, including tax obligations related to your trading
            activity.
          </li>
          <li>
            Understanding the risks associated with cryptocurrency trading and
            blockchain technology.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Limitation of Liability
        </h3>
        <p className="leading-relaxed mb-6">
          To the maximum extent permitted by law, in no event shall the
          developers, contributors, or affiliated entities be liable for any
          direct, indirect, incidental, special, consequential, or exemplary
          damages, including but not limited to, damages for loss of profits,
          goodwill, use, data, or other intangible losses (even if we have been
          advised of the possibility of such damages), resulting from your use
          of the platform.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">No Warranty</h3>
        <p className="leading-relaxed mb-6">
          The Solana Computer platform is provided "as is" and "as available"
          without any warranties of any kind, either express or implied,
          including, but not limited to, the implied warranties of
          merchantability, fitness for a particular purpose, or
          non-infringement.
        </p>
      </section>

      <PageNavigation />
    </DocsLayout>
  );
} 