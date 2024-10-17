import Head from "next/head";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Embarking on a Secure Digital Voyage",
      content:
        "At JMC Tours and Travels Limited, we believe in navigating the digital seas with transparency and trust. Your data is your anchor, and we're committed to protecting it while ensuring a smooth and secure journey on our website and throughout our collaboration. This policy outlines how we collect, use, and safeguard your information, so you can chart your course with confidence.",
    },
    {
      title: "Setting Sail with Data",
      subsections: [
        {
          title: "Charting Your Course",
          content:
            "Like gentle winds guiding your ship, we gather anonymous data such as browsing patterns and cookies to personalize your experience and optimize our services. This information stays anonymous and fuels insights to ensure a flawless sail.",
        },
        {
          title: "Sending Signals",
          content:
            "When you send us messages through forms, emails, or calls, we collect your name, email address, and relevant details. Just like raising a signal flag, this helps us respond promptly and deliver the best possible service.",
        },
        {
          title: "Mapping Your Project",
          content:
            "To meticulously craft your digital masterpiece, we collect project details and specifications during our collaboration. Think of it as plotting the course – this information remains confidential and serves as the blueprint for your success.",
        },
      ],
    },
    {
      title: "Guarding Your Treasure Map",
      subsections: [
        {
          title: "No Data Pirates Here",
          content:
            "We would never dream of selling or renting your personal information to third parties. Your data is your treasure, and we respect your privacy like a pirate respects their hidden map.",
        },
        {
          title: "Sailing with Secrecy",
          content:
            "Your name, project details, and any other confidential information will never be publicly disclosed without your explicit consent. It's like having a secret handshake with us, ensuring your information stays under your control.",
        },
      ],
    },
    {
      title: "Transparency at the Helm",
      subsections: [
        {
          title: "Controlling the Cookies",
          content:
            "You have the freedom to manage and disable cookies through your browser settings, just like adjusting the sails to navigate your way.",
        },
        {
          title: "Data on Demand",
          content:
            "Need to access, delete, or opt out of future communication? Just let us know! We believe your data belongs to you, and we're happy to respond to your requests promptly.",
        },
        {
          title: "Keeping You Informed",
          content:
            "We'll transparently notify you of any changes to our privacy policy via email or prominently displayed on our website, ensuring you have the latest navigational chart.",
        },
      ],
    },
    {
      title: "Your Trust is Our North Star",
      content:
        "At JMC Tours and Travels Limited, your trust is our guiding principle. We strive to be transparent, accountable, and always available to answer your questions and address your concerns regarding our privacy policy. Don't hesitate to reach out – we're here to ensure your digital journey is as smooth and secure as the open seas can be.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-200 pt-12">
      <Head>
        <title>Privacy Policy - JMC Tours and Travels Limited</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold mb-6 text-slate-800">
          Privacy Policy
        </h2>

        {sections.map((section, index) => (
          <section
            key={index}
            className="bg-white shadow-md rounded-lg p-6 mb-8"
          >
            <h3 className="text-2xl font-semibold mb-4 text-slate-600">
              {section.title}
            </h3>
            {section.content && <p className="mb-4">{section.content}</p>}
            {section.subsections &&
              section.subsections.map((subsection, subIndex) => (
                <div key={subIndex} className="mb-4">
                  <h4 className="text-xl font-medium mb-2 text-slate-500">
                    {subsection.title}
                  </h4>
                  <p>{subsection.content}</p>
                </div>
              ))}
          </section>
        ))}
      </main>
    </div>
  );
}
