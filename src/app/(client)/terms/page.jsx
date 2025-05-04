import Head from "next/head";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-200">
      <Head>
        <title>Terms & Conditions - JMC Tours and Travels Limited</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8 pt-12">
        <h2 className="text-4xl font-bold mb-6">Terms & Conditions</h2>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <p className="mb-4">
            Welcome to JMC Tours and Travels Limited! We empower businesses of
            all sizes with innovative software solutions and customized
            technology services. By accessing our website or engaging with our
            products and services, you agree to these Terms & Conditions. Please
            read them carefully before proceeding.
          </p>
        </div>

        {[
          {
            title: "Intellectual Property",
            content:
              "All content, including code, trademarks, logos, designs, and materials, are the exclusive property of JMC Tours and Travels Limited. We grant you a non-exclusive, non-transferable license to use our products and services under these terms. Any unauthorized use, modification, reproduction, or distribution is strictly prohibited.",
          },
          {
            title: "Products & Services",
            content:
              "We offer a range of ready-made software solutions and tailor-made technology services. Customized projects require a signed agreement outlining the project scope, timeline, and fees.",
          },
          {
            title: "Content & Community",
            content:
              "Our website may feature a blog or resources with various articles and opinions. Respectful contributions are welcome, but inappropriate content is prohibited. Uploading viruses, malware, or promoting prohibited goods/services is strictly prohibited. Respect the copyright and intellectual property rights of others.",
          },
          {
            title: "Payment & Fees",
            content:
              "We accept various payment methods like credit cards, bank transfers, and checks. Advance payments may be required for customized projects. Late payments may incur additional fees and potential termination of services.",
          },
          {
            title: "Cancellation & Refunds",
            content:
              "Refunds for ready-made software follow the terms of the respective marketplaces. Customized projects typically do not offer refunds after 30 days of project initiation unless under exceptional circumstances and agreed upon by both parties. Modifications to our code or scripts may void your refund eligibility. We reserve the right to cancel your account for breach of terms.",
          },
          {
            title: "Privacy Policy",
            content:
              "We prioritize your privacy and safeguard your personal information. Refer to our separate Privacy Policy for detailed information on data collection and usage.",
          },
          {
            title: "Disclaimers & Warranties",
            content:
              "We strive to provide reliable products and services but cannot guarantee complete error-free performance. We disclaim any warranties regarding suitability, safety, or uninterrupted service. Information on this website might contain inaccuracies or be outdated. We reserve the right to update it at any time.",
          },
          {
            title: "Limitations & Liabilities",
            content:
              "JMC Tours and Travels Limited will not be liable for any direct, indirect, consequential, or incidental damages arising from the use of our products or services. This includes lost profits, business interruptions, or data loss. Your use of this website and its content is at your own risk.",
          },
          {
            title: "Contact Us",
            content:
              "For any questions about these Terms & Conditions, please contact us at hello@jmc.technology.",
          },
        ].map((section, index) => (
          <section
            key={index}
            className="bg-white shadow-md rounded-lg p-6 mb-8"
          >
            <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
            <p>{section.content}</p>
          </section>
        ))}
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-6 text-center">
          <p>&copy; 2024 JMC Tours and Travels Limited. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
