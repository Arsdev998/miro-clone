"use client";

import { useOrganization } from "@clerk/nextjs";
import { EmtyOrg } from "./_components/emty-org";
import { BoardList } from "./_components/board-list";

interface DasboardPageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
}

const DasboardPage = ({ searchParams }: DasboardPageProps) => {
  const { organization } = useOrganization();
  return (
    <div className=" h-[calc(100%-80px)] p-6">
      {!organization ? (
        <EmtyOrg />
      ) : (
        <BoardList orgId={organization.id} query={searchParams} />
      )}
    </div>
  );
};

export default DasboardPage;
