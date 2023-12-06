export async function GET() {
  const availableRoutes = [
    {
      path: "/api/quote",
      description: "Get a random quote",
      source: "https://github.com/lukePeavey/quotable",
    },
  ];

  return Response.json(availableRoutes);
}
