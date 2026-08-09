import { createFileRoute } from "@tanstack/react-router";
import { ClientSection } from "~/components/client";
import { FAQSection } from "~/components/faq";
import { HeroSection } from "~/components/hero";
import { LetterSection } from "~/components/letter";
import { PricingSection } from "~/components/pricing";
import { TestimonialsSection } from "~/components/testimonials";
import { WorksSection } from "~/components/works";
import { generatedMetadata } from "~/libs/shared-metadata";

export const Route = createFileRoute("/")({
  component: RouteComponent,
  head: () => ({
    meta: generatedMetadata({
      description:
        "We help small business, startups, and professional grow, scale & win the game by create stunning products, ship faster & scale into millions.",
      title: "The Businesses Growth & Success Partner | Coined",
    }),
  }),
});

function RouteComponent() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <WorksSection />
      <ClientSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <LetterSection />
    </div>
  );
}
