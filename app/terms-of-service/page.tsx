export const metadata = {
  title: 'Terms of Service | Clarusto Logistics',
  description: 'Clarusto Logistics terms of service governing the use of our website and logistics services.',
};

export default function TermsOfServicePage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      <div className="space-y-6 text-sm leading-relaxed opacity-90">
        <p>
          These Terms of Service govern your use of the Clarusto Logistics website and services.
          By accessing or using our services, you agree to be bound by these Terms.
        </p>
        <h2 className="text-xl font-semibold mt-6">Use of Services</h2>
        <p>
          Our logistics services are provided subject to these Terms. You agree to use our services
          only for lawful purposes and in accordance with all applicable laws and regulations.
        </p>
        <h2 className="text-xl font-semibold mt-6">Limitation of Liability</h2>
        <p>
          Clarusto Logistics shall not be liable for any indirect, incidental, special, or consequential
          damages arising out of or in connection with the use of our services.
        </p>
        <h2 className="text-xl font-semibold mt-6">Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at legal@clarustologistics.com.
        </p>
        <p className="mt-8 text-xs opacity-60">Last updated: April 2025</p>
      </div>
    </div>
  );
}
