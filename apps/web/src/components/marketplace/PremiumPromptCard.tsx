import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";

export function PremiumPromptCard() {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all">
      <div className="h-32 w-full bg-neutral-100" />
      <CardContent>
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-neutral-200" />
          <div>
            <Heading level={4}>Premium Cold Email Prompt</Heading>
            <Text muted>by @creator • Quality 4.7</Text>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-semibold">₹499</span>
          <div className="flex items-center gap-2">
            <span className="rounded bg-blue-50 px-2 py-1 text-xs text-blue-600">Live Preview</span>
            <Button size="sm">View</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
