import QuoteComponent from "@/components/Quotes/quote-component";

export default function LoadingPage(): JSX.Element {
  const QuoteData = {
    _id: "undefined",
    content: "Collaborate, Create, Innovate : Together with Open Source ❤️",
    author: "Codinasion",
    authorSlug: "codinasion",
    length: 0,
    tags: [],
  };

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
