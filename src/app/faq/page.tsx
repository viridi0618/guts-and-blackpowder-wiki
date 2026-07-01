import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "常见问题",
  description:
    "Guts and Blackpowder 游戏FAQ大全，涵盖游戏类型、平台信息、模式选择、武器系统等常见问题",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{ color: "#f0ece4", fontFamily: "Georgia, serif" }}
          >
            常见问题
          </h1>
          <p
            className="font-sans text-base md:text-lg mt-4 max-w-2xl mx-auto"
            style={{ color: "#8a8884", fontFamily: "Inter, sans-serif" }}
          >
            你最关心的常见问题，这里都有答案
          </p>
          <div
            className="mt-6 h-0.5 w-16 rounded-full mx-auto"
            style={{ backgroundColor: "#d4af6a" }}
          />
        </div>
      </section>

      {/* FAQ Content */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-4xl mx-auto px-4">
          <p
            className="font-sans text-sm leading-relaxed mb-10"
            style={{ color: "#8a8884", fontFamily: "Inter, sans-serif" }}
          >
            无论你是刚接触 Guts and Blackpowder 的新玩家，还是想深入了解游戏机制的老手，
            这里汇总了玩家最常问的问题。点击问题即可展开查看详细解答。
          </p>
          <div
            className="rounded-lg p-4 md:p-8"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              border: "1px solid #2a2826",
            }}
          >
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>
    </div>
  );
}
