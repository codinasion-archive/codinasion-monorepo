import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    message: "Welcome to the Codinasion API 🤗",
    routes: [
      {
        path: "/",
        description: "Codinasion API home",
      },
      //
      // Github data routes
      {
        path: "/github/contributors",
        description: "List of Codinasion contributors",
      },
      {
        path: "/github/members",
        description: "List of Codinasion members",
      },
      {
        path: "/github/repos",
        description: "List of Codinasion repositories",
      },
    ],
  };

  return NextResponse.json({ data });
}
