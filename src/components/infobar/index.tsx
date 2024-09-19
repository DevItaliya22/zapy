"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

const InfoBar = () => {
  const pathname = usePathname();

  const path = pathname.split("/").pop();
  let formattedPath = path
    ? path.charAt(0).toUpperCase() + path.slice(1).toLowerCase()
    : "";

  if(pathname.includes("editor")) formattedPath = "Editor";
  return (
    <div className="flex flex-col gap-4 relative">
      <div className="flex justify-between text-4xl sticky top-0 z-[10] p-4 bg-background/50 backdrop-blur-lg  items-center border-b rounded-3xl">
        <h1 className="">
          {formattedPath}
        </h1>
        <div className="pr-4 pl-4 cursor-pointer ">
          <UserButton></UserButton>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
