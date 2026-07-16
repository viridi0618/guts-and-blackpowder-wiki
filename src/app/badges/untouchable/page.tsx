import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Untouchable Badge Guts and Blackpowder: How to Unlock It",
  description:
    "Guide to the Untouchable badge in Guts and Blackpowder with cautious unlock tips, Catacombes de Paris advice, and related Roblox G&B badge links.",
};

const steps = [
  "Start from the badges guide and confirm the current unlock requirement in-game, because badge details can change after updates.",
  "Prepare for Catacombes de Paris with a coordinated team that can clear enemies before they reach you.",
  "Play safely behind the main line and avoid greedy melee fights, dark corners, and isolated routes.",
  "Let teammates handle close threats while you preserve the no-hit condition as carefully as possible.",
  "If the run fails, review where contact happened and retry with clearer callouts and safer positioning.",
];

const faqs = [
  {
    question: "What is the Untouchable badge in Guts and Blackpowder?",
    answer: "Untouchable is a hidden achievement commonly associated with completing Catacombes de Paris without being hit. Check the current in-game badge text because requirements can change.",
  },
  {
    question: "What is the safest way to attempt Untouchable?",
    answer: "Use a coordinated team, stay behind the frontline, avoid unnecessary melee, and move slowly through dangerous sections.",
  },
  {
    question: "Can I guarantee the Untouchable badge every run?",
    answer: "No. Enemy spawns, team mistakes, and game updates can affect attempts, so treat this as a careful strategy guide rather than a guaranteed unlock.",
  },
];

export default function UntouchableBadgePage() {
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
            Untouchable Badge Guts and Blackpowder
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#8a8884] max-w-2xl mx-auto leading-relaxed">
            The Untouchable badge is a hidden Guts and Blackpowder achievement players commonly search for when planning a careful Catacombes de Paris no-hit style run.
          </p>
          <div className="mt-8 mx-auto h-0.5 w-20 rounded-full bg-[#d4af6a]" />
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 space-y-16">
        <section>
          <SectionTitle
            tag="How to Unlock"
            title="Untouchable Badge Steps"
            subtitle="Use cautious positioning and verify the current badge requirement before committing to a long attempt."
            align="left"
          />
          <ol className="mt-8 list-decimal list-inside space-y-3 rounded-lg p-6 text-sm leading-relaxed text-[#c8c4bc]" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid #2a2826", borderLeft: "3px solid #d4af6a" }}>
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section>
          <SectionTitle tag="FAQ" title="Untouchable Badge FAQ" align="left" />
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
          <SectionTitle tag="Related Guides" title="Badge Planning Links" align="left" />
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { label: "All Badges", href: "/badges" },
              { label: "Achievements Guide", href: "/achievements" },
              { label: "Maps Guide", href: "/maps" },
              { label: "Enemies Guide", href: "/enemies" },
              { label: "Barry Guide", href: "/guides/barry" },
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
