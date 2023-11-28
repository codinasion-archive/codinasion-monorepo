import { notFound } from "next/navigation";
import PageTitle from "@/components/PageTitle";
import GoodFirstIssuesComponent from "@/components/GoodFirstIssues/good-first-issues-component";
import {
  GetGoodFirstIssue,
  GetGoodFirstIssueLabelsData,
  LanguageList,
} from "@/data";
import { DecodeURL as DecodeLanguage, ConvertToTitleCase } from "@/utils";

const GOOD_FIRST_ISSUES_PER_PAGE = 25;

export default async function GoodFirstIssuesPage({
  params,
}: {
  params: { language?: string[] };
}): Promise<JSX.Element> {
  const language = params.language?.[0] ?? null;

  if (language && !LanguageList.includes(DecodeLanguage(language))) {
    notFound();
  }

  const goodFirstIssues = await GetGoodFirstIssue({
    language: language ? DecodeLanguage(language) : null,
  });

  const goodFirstIssueLabelsData =
    await GetGoodFirstIssueLabelsData(goodFirstIssues);

  return (
    <>
      <PageTitle
        title="Good First Issues"
        description={`Find latest ${
          language ? `"${ConvertToTitleCase(DecodeLanguage(language))}" ` : ""
        }good first issues from open source projects on GitHub.`}
      />

      <GoodFirstIssuesComponent
        language={language}
        goodFirstIssues={goodFirstIssues}
        goodFirstIssueLabelsData={goodFirstIssueLabelsData}
        goodFirstIssuesPerPage={GOOD_FIRST_ISSUES_PER_PAGE}
      />
    </>
  );
}
