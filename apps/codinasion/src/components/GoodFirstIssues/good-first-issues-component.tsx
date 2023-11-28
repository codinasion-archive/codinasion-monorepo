"use client";

import React from "react";
import moment from "moment";
import { FaClock } from "react-icons/fa";
import { RiGitRepositoryFill } from "react-icons/ri";
import Link from "@/components/Link";
import { MarkdownToText, ScrollToTop } from "@/utils";
import type { GoodFirstIssueType, GoodFirstIssueLabelDataType } from "@/types";

type Props = {
  goodFirstIssues: GoodFirstIssueType[];
  goodFirstIssueLabelsData: GoodFirstIssueLabelDataType[];
  goodFirstIssuesPerPage: number;
};

export default function GoodFirstIssuesComponent({
  goodFirstIssues,
  goodFirstIssueLabelsData,
  goodFirstIssuesPerPage,
}: Props): JSX.Element {
  const [displayGoodFirstIssues, setDisplayGoodFirstIssues] = React.useState<
    GoodFirstIssueType[]
  >([]);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [selectedLabel, setSelectedLabel] = React.useState<string>("");

  React.useEffect(() => {
    setDisplayGoodFirstIssues(goodFirstIssues.slice(0, goodFirstIssuesPerPage));
  }, [goodFirstIssues, goodFirstIssuesPerPage]);

  const handleLoadMore = () => {
    const nextPageNumber = pageNumber + 1;
    const nextPageStartIndex = (nextPageNumber - 1) * goodFirstIssuesPerPage;
    const nextPageEndIndex = nextPageNumber * goodFirstIssuesPerPage;
    const nextPageGoodFirstIssues = goodFirstIssues.slice(
      nextPageStartIndex,
      nextPageEndIndex,
    );
    setDisplayGoodFirstIssues([
      ...displayGoodFirstIssues,
      ...nextPageGoodFirstIssues,
    ]);
    setPageNumber(nextPageNumber);
  };

  const handleLabelClick = (label: string) => {
    setSelectedLabel(label);
    const filteredGoodFirstIssues = goodFirstIssues.filter(
      (goodFirstIssue) =>
        goodFirstIssue.labels?.some((labelData) => labelData.name === label),
    );
    setDisplayGoodFirstIssues(
      filteredGoodFirstIssues.slice(0, goodFirstIssuesPerPage),
    );
    setPageNumber(1);
    ScrollToTop();
  };

  return (
    <div className="flex flex-col md:flex-row sm:space-x-10">
      <div>
        <ul>
          {displayGoodFirstIssues.map((goodFirstIssue) => (
            <li key={goodFirstIssue.id} className="pb-5">
              <article className="flex flex-col space-y-2 xl:space-y-0 border border-gray-200 dark:border-gray-700 rounded p-4 shadow hover:shadow-xl dark:shadow-slate-800">
                <div className="space-y-3">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold leading-8 tracking-tight">
                      <Link
                        href={goodFirstIssue.html_url}
                        className="text-gray-900 dark:text-gray-100"
                      >
                        {goodFirstIssue.title}
                      </Link>
                    </h2>
                    <p className="mt-2  text-gray-600 dark:text-gray-400">
                      <RiGitRepositoryFill className="mr-2 mb-1 inline" />
                      <span className="font-bold inline">
                        {goodFirstIssue.repository_url.replace(
                          "https://api.github.com/repos/",
                          "",
                        )}
                      </span>
                      <FaClock className="ml-5 mr-2 mb-1 inline" /> Created{" "}
                      <span className="font-bold inline">
                        {moment(goodFirstIssue.created_at).fromNow()}
                      </span>
                    </p>
                    {goodFirstIssue.body && (
                      <div className="prose max-w-none break-all text-gray-500 dark:text-gray-400">
                        {MarkdownToText(goodFirstIssue.body.substring(0, 120))}
                      </div>
                    )}
                    <div className="flex flex-wrap">
                      {goodFirstIssue.labels?.map((label) => (
                        <span
                          key={label.name}
                          className="mr-3 my-2 py-0.5 px-1.5 text-sm font-medium uppercase text-gray-500 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500 bg-gray-200 dark:bg-gray-700 rounded-lg"
                        >
                          {label.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        {selectedLabel === "" &&
        displayGoodFirstIssues.length !== goodFirstIssues.length ? (
          <button className="w-full pb-5" onClick={handleLoadMore}>
            Load more
          </button>
        ) : null}
      </div>

      <div>
        <div className="h-auto min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
          <div className="px-6 py-4">
            <h3 className="font-bold uppercase text-gray-700 dark:text-gray-300">
              Filter by Label
            </h3>

            <ul className="flex flex-col">
              {goodFirstIssueLabelsData.map((goodFirstIssueLabelData) => (
                <li
                  onClick={() =>
                    handleLabelClick(goodFirstIssueLabelData.label)
                  }
                  key={goodFirstIssueLabelData.label}
                  className="my-3 cursor-pointer"
                >
                  {selectedLabel === goodFirstIssueLabelData.label ? (
                    <h3 className="inline px-3 py-2 text-sm font-bold uppercase text-primary-500">
                      {`${goodFirstIssueLabelData.label} (${goodFirstIssueLabelData.count})`}
                    </h3>
                  ) : (
                    <h3 className="inline px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500 border border-gray-200 dark:border-gray-700 rounded">
                      {`${goodFirstIssueLabelData.label} (${goodFirstIssueLabelData.count})`}
                    </h3>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
