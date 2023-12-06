import { GetQuoteData } from "@/data";

export async function GET() {
  // Source: https://github.com/lukePeavey/quotable
  const quote = await GetQuoteData();

  return Response.json(quote);
}
