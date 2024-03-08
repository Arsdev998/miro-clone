"use client";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { Overlay } from "./overlay";
import { Footer } from "./footer";

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
