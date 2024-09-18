"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { UserIcon } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

const InfoBar = () => {
  const pathname = usePathname();
  const path = pathname.split("/").pop();
  const formattedPath = path
    ? path.charAt(0).toUpperCase() + path.slice(1).toLowerCase()
    : "";
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4 relative">
      <div className="flex justify-between text-4xl sticky top-0 z-[10] p-4 bg-background/50 backdrop-blur-lg  items-center border-b rounded-3xl">
        <h1 className="">
          {formattedPath}
        </h1>
        <div className="pr-4 pl-4 cursor-pointer "  onClick={()=>router.push("/settings")}>
          {/* <UserIcon></UserIcon> */}
          <UserButton></UserButton>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
