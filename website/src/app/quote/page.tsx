import { Metadata } from "next";
import SEO from "@/components/SEO";
import QuoteComponent from "@/components/Quote/quote-component";
import { GetQuoteData } from "@/data";

export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  return SEO({
    title: "Quote",
    description: "Get a Random Quote. Quote API available at: api/quote",
    keywords: ["codinasion", "quote", "random", "api"],
  });
}

export default async function Page(): Promise<JSX.Element> {
  const QuoteData = await GetQuoteData();

  return (
    <div className="relative md:py-10 px-6 lg:px-8">
      <div className="mx-auto max-w-4xl pt-5 md:pt-10 pb-10 sm:pt-20 sm:pb-10">
        <div>
          <QuoteComponent QuoteData={QuoteData} />
        </div>
      </div>
    </div>
  );
}
