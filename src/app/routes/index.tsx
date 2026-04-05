import {
  HeroSection,
  LetterSection,
  TestimonialsSection,
  WorksSection,
} from "@features/landing";
import { generatedMetadata } from "@shared/libs/shared-metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: generatedMetadata({
      title: "The Businesses Growth & Success Partner | Coined",
      description:
        "We help small business, startups, and professional grow, scale & win the game by create stunning products, ship faster & scale into millions.",
    }),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-16">
      <HeroSection />
      <TestimonialsSection />
      <WorksSection />
      <LetterSection />
    </div>
  );
}
