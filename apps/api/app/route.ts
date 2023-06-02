import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    message: "Welcome to the Codinasion API 🤗",
    routes: [
      {
        path: "/",
        description: "Codinasion API home",
      },
    ],
  };

  return NextResponse.json({ data });
}
