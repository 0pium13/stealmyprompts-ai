import { Footer } from "@/components/ui/Footer";

export const metadata = {
  title: "StealMyPrompts.ai",
  description: "AI prompt marketplace with live previews and 15% commission",
};

function Providers({ children }: { children: React.ReactNode }) {
  return children as React.ReactElement;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>StealMyPrompts.ai</title>
      </head>
      <body className="min-h-screen bg-neutral-50 antialiased">
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
