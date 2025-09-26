import { designTokens } from "@/lib/theme";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";

export function Hero() {
  return (
    <section className="pt-24" style={{ background: `linear-gradient(180deg, ${designTokens.colors.dark[900]} 0%, ${designTokens.colors.dark[800]} 100%)` }}>
      <div className="mx-auto max-w-[1200px] px-8 py-24">
        <div className="text-center">
          <Heading className="tracking-tight" level={1} style={{ color: designTokens.colors.white, fontSize: 60 }}>
            The marketplace where AI prompts earn real money
          </Heading>
          <Text className="mt-4 text-lg md:text-xl" muted style={{ color: "#D1D5DB" }}>
            Live output previews. 15% commission. Hidden prompts until purchase.
          </Text>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button size="lg">Start Earning Today</Button>
            <Button variant="outline" size="lg">Join Community</Button>
          </div>

          <Text className="mt-6 text-sm" muted>
            Join 2,847+ creators • $127K paid this month • 15,000+ community members
          </Text>
        </div>
      </div>
    </section>
  );
}
