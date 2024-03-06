"use client";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Star } from "lucide-react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
const OrgSidebar = () => {
  const SearchParams = useSearchParams();
  const favorites = SearchParams.get("favorite");
  return (
    <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-6">
      <Link href="/">
        <div className="flex items-center gap-x-2">
          <Image src="/logo.svg" alt="Logo" height={60} width={60} />
          <span className={cn("font-semibold text-2xl", font.className)}>
            Board
          </span>
        </div>
      </Link>
      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              padding: "0px 16px 0px 0px",
            },
            organizationSwitcherTrigger: {
              padding: "6px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #E5E7EB",
              justifyContent: "space-between",
              backgroundColor: "white",
            },
          },
        }}
      />
      <div className="space-y-1 w-full pr-[16px]">
        <Button
          variant={favorites ? "outline" : "secondary"}
          asChild
          size={"lg"}
          className="font-normal justify-start px-2 w-full"
        >
          <Link href="/">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            Team Board
          </Link>
        </Button>
        <Button
          variant={favorites ? "secondary" : "outline"}
          asChild
          size={"lg"}
          className="font-normal justify-start px-2 w-full"
        >
          <Link
            href={{
              pathname: "/",
              query: { favorite: "true" },
            }}
          >
            <Star className="h-4 w-4 mr-2" />
            Favorite Board
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default OrgSidebar;
