import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

interface FooterProps {
  title: string;
  authorLabel: string;
  createAtLabel: string;
  isFavorite: boolean;
  onclick: () => void;
  disabled: boolean;
}

export const Footer = ({
  title,
  authorLabel,
  createAtLabel,
  isFavorite,
  onclick,
  disabled,
}: FooterProps) => {
  return (
    <div className="relative bg-white p-3">
      <p className="text-[13px] truncate max-w-[calc(100%-20px)]">{title}</p>
      <p className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-muted-foreground truncate">
        {authorLabel},{createAtLabel}
      </p>
      <button
        disabled={disabled}
        onClick={onclick}
        className={cn(
          "opacity-0 group-hover:opacity-100 transition-opacity top-3 right-3 text-muted-foreground absolute hover:text-blue-600",
          disabled && "cursor-not-allowed opacity-75"
        )}
      >
        <Star
          className={cn("h-4 w-4", isFavorite && "fill-blue-600 text-blue-600")}
        />
      </button>
    </div>
  );
};
