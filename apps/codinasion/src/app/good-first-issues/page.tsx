import GoodFirstIssuesComponent from "@/components/GoodFirstIssues/good-first-issues-component";
import { GetGoodFirstIssue, GetGoodFirstIssueLabelsData } from "@/data";

const GOOD_FIRST_ISSUES_PER_PAGE = 10;

export default async function GoodFirstIssuesPage(): Promise<JSX.Element> {
  const goodFirstIssues = await GetGoodFirstIssue({});

  const goodFirstIssueLabelsData =
    await GetGoodFirstIssueLabelsData(goodFirstIssues);

  return (
    <>
      Good First Issues
      <GoodFirstIssuesComponent
        goodFirstIssues={goodFirstIssues}
        goodFirstIssueLabelsData={goodFirstIssueLabelsData}
        goodFirstIssuesPerPage={GOOD_FIRST_ISSUES_PER_PAGE}
      />
    </>
  );
}
