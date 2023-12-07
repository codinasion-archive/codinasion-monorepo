import type { TrendingRepoType } from "@/types";

export async function GetTrandingReposData(): Promise<TrendingRepoType[]> {
  // Source: https://github.com/alisoft/github-trending-api
  const res = await fetch("https://api.gitterapp.com", {
    method: "GET",
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch trending repos data");
  }

  const data = (await res.json()) as TrendingRepoType[];

  return data;
}
