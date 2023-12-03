import PageTitle from "@/components/PageTitle";
import ProgramComponent from "@/components/Program/program-component";
import { GetProgramLanguageProgramList, GetProgramLanguageList } from "@/data";
import { PROGRAM_LIST_PER_PAGE } from "../../page";

export default async function ProgramPage({
  params,
}: {
  params: { language: string };
}): Promise<JSX.Element> {
  const language = params.language;

  /////////////////////////////////////////////////////////////////////////////
  // https://beta.nextjs.org/docs/data-fetching/fetching#parallel-data-fetching
  // Initiate both requests in parallel
  const ProgramDataLoad = GetProgramLanguageProgramList(language);
  const ProgramLanguageDataLoad = GetProgramLanguageList();

  // Wait for the promises to resolve
  const [ProgramData, ProgramLanguageData] = await Promise.all([
    ProgramDataLoad,
    ProgramLanguageDataLoad,
  ]);
  /////////////////////////////////////////////////////////////////////////////

  const pageNumber = 1;
  const displayProgramList = ProgramData.slice(
    PROGRAM_LIST_PER_PAGE * (pageNumber - 1),
    PROGRAM_LIST_PER_PAGE * pageNumber,
  );
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(ProgramData.length / PROGRAM_LIST_PER_PAGE),
  };

  return (
    <>
      <PageTitle
        title="Program"
        description="An open-source codebase for sharing programming solutions."
      />

      <ProgramComponent
        programLanguageListData={ProgramLanguageData}
        displayProgramList={displayProgramList}
        pagination={pagination}
        basePath={`/program/languages/${language}`}
      />
    </>
  );
}
