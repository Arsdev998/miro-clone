"use client";
import { useOrganization } from "@clerk/nextjs";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useApiMutation } from "@/hooks/us-api-mutation";

export const EmptyBoards = () => {
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);
  const onclick = () => {
    if (!organization) return;
    mutate({
      orgId: organization.id,
      title: "untitled",
    });
  };
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/note.svg" height={140} width={140} alt="Empty" />
      <h2 className="text-2xl font-semibold mt-6">Create your first board!</h2>
      <p className="text-muted-foreground textg-sm mt-2">
        start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button disabled={pending} onClick={onclick} size="lg">
          Create board
        </Button>
      </div>
    </div>
  );
};
