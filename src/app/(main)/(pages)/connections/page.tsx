"use client";
import React from 'react';
import { usePathname } from 'next/navigation';

const Page = () => {
  const pathname = usePathname();
  const path = pathname.split('/').pop();
  const formattedPath = path
    ? path.charAt(0).toUpperCase() + path.slice(1).toLowerCase()
    : '';

  return (
    <div className="flex flex-col gap-4 relative">
      <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b rounded-3xl">
        {formattedPath}
      </h1>
    </div>
  );
};

export default Page;