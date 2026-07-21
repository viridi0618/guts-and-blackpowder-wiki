import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "How to Get Francs in Guts and Blackpowder",
  description:
    "Learn how to get Francs in Guts and Blackpowder with practical farming tips, mode advice, Hardcore notes, and safe spending guidance for Roblox G&B.",
  alternates: {
    canonical: "https://gutsandblackpowder.wiki/guides/how-to-get-francs",
  },
  openGraph: {
    title: "How to Get Francs in Guts and Blackpowder",
    description: "Learn how to get Francs in Guts and Blackpowder with practical farming tips, mode advice, Hardcore notes, and safe spending guidance for Roblox G&B.",
  }};

const steps = [
  "Complete Objective maps consistently before chasing risky farms.",
  "Play Endless with a coordinated team if you can survive long enough for wave rewards.",
  "Use Hardcore only when the group can handle the added difficulty, because failed runs waste time.",
  "Contribute as support when needed, since healing, building, and team play can improve run stability.",
  "Spend Francs carefully on cosmetics or map-specific needs, and re-check current in-game prices after updates.",
];

const faqs = [
  {
    question: "What is the best way to get Francs in Guts and Blackpowder?",
    answer: "The best reliable method is completing maps consistently. Endless and Hardcore can be stronger when your team is good enough to survive.",
  },
  {
    question: "Should beginners farm Francs in Hardcore?",
    answer: "Usually no. Hardcore can improve rewards, but it is only worth it when the team can clear content reliably.",
  },
  {
    question: "Can Franc rewards change?",
    answer: "Yes. Rewards, prices, and farming routes can change after updates, so verify important numbers in-game.",
  },
];

export default function HowToGetFrancsPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="relative overflow-hidden border-b border-[#2a2826]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4af6a]/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-[#f0ece4]">
            How to Get Francs in Guts and Blackpowder
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#8a8884] max-w-2xl mx-auto leading-relaxed">
            To get Francs in Guts and Blackpowder, focus on completing Objective maps, surviving Endless waves with a reliable team, and using Hardcore only when the extra difficulty is worth the risk.
          </p>
          <div className="mt-8 mx-auto h-0.5 w-20 rounded-full bg-[#d4af6a]" />
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 space-y-16">
        <section>
          <SectionTitle
            tag="Step by Step"
            title="Franc Farming Routine"
            subtitle="A practical route for players who want steady Francs without relying on risky or unverified tricks."
            align="left"
          />
          <ol className="mt-8 list-decimal list-inside space-y-3 rounded-lg p-6 text-sm leading-relaxed text-[#c8c4bc]" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid #2a2826", borderLeft: "3px solid #d4af6a" }}>
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section>
          <SectionTitle tag="FAQ" title="Francs FAQ" align="left" />
          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-lg p-5" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid #2a2826", borderLeft: "3px solid #d4af6a" }}>
                <h2 className="font-serif text-base text-[#d4af6a] mb-2">{faq.question}</h2>
                <p className="text-sm leading-relaxed text-[#8a8884]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle tag="Related Guides" title="More Progression Guides" align="left" />
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { label: "Detailed Francs Guide", href: "/guides/francs" },
              { label: "Beginner Guide", href: "/beginner-guide" },
              { label: "Commands List", href: "/commands" },
              { label: "Maps Guide", href: "/maps" },
              { label: "Achievements Guide", href: "/achievements" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[#d4af6a] transition-colors hover:bg-[#d4af6a] hover:text-[#05030c]"
                style={{ border: "1px solid #d4af6a" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
