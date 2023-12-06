import { GetMemeData } from "@/data";

export async function GET() {
  // Source: https://github.com/deep5050/programming-memes
  const meme = await GetMemeData();

  return Response.json(meme);
}
