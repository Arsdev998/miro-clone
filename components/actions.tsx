"use client";

import { toast } from "sonner";
import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import { useApiMutation } from "@/hooks/us-api-mutation";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
import { Link2, Trash2 } from "lucide-react";
import { api } from "@/convex/_generated/api";

interface ActionsProps {
  children: React.ReactNode;
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
  id: string;
  title: string;
}

export const Actions = ({
  children,
  side,
  sideOffset,
  id,
  title,
}: ActionsProps) => {
  const { mutate, pending } = useApiMutation(api.board.remove);

  //   copy function
  const onCopyLink = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${id}`)
      .then(() => toast.success("Link copied"))
      .catch(() => toast.error("Filed to copy link"));
  };
  // delete funtion
  const onDelete = () => {
    mutate({ id })
      .then(() => toast.success("Board deleted"))
      .catch(() => toast.error("Failed to delete board"));
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        onClick={(e) => e.stopPropagation()}
        side={side}
        sideOffset={sideOffset}
        className="w-60 z-50 bg-white hover:bg-slate-300 border-[1px] border-slate-500"
      >
        <DropdownMenuItem
          onClick={onCopyLink}
          className="p-3 cursor-pointer flex items-center "
        >
          <Link2 className="h-4 w-4 mr-2" />
          Copy board link
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={onDelete}
          className="p-3 cursor-pointer flex items-center "
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
