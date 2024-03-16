"use client";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { MoreHorizontal } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Overlay } from "./overlay";
import { Footer } from "./footer";
import { Actions } from "@/components/actions";

interface BoardCardProps {
  id: string;
  title: string;
  orgId: string;
  authorName: string;
  authorId: string;
  createAt: number;
  imageUrl: string;
  isFavorite: boolean;
}

export const BoardCard = ({
  id,
  title,
  authorName,
  orgId,
  authorId,
  createAt,
  imageUrl,
  isFavorite,
}: BoardCardProps) => {
  const { userId } = useAuth();
  const authorLabel = userId === authorId ? "You" : authorName;
  const createAtLabel = formatDistanceToNow(createAt, {
    addSuffix: true,
  });
  return (
    <Link href={`/board/${id}`} className="">
      <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="relative flex-1 bg-amber-50">
          <Image
            src={imageUrl}
            alt={title}
            fill
            priority
            className="object-fit"
          />
          <Overlay />
          <Actions id={id} title={title} side="right">
            <button className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2 outline-none">
              <MoreHorizontal className="text-white opacity-75 hover:opacity-100 transition-opacity" />
            </button>
          </Actions>
        </div>
        <Footer
          isFavorite={isFavorite}
          title={title}
          authorLabel={authorLabel}
          createAtLabel={createAtLabel}
          onclick={() => {}}
          disabled={false}
        />
      </div>
    </Link>
  );
};

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="aspect-[100/127] border rounded-lg overflow-hidden">
      <Skeleton className="h-full w-full"/>
    </div>
  );
};
