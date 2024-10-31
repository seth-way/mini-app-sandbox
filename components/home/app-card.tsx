"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AppCard({
  title,
  description,
  img,
  redirectPath,
}: {
  title: string;
  description: string;
  img: string;
  redirectPath: string;
}) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${redirectPath}`);
  };

  return (
    <div
      className="relative col-span-1 flex h-48 w-48 flex-col items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-gray-950 shadow-md hover:cursor-pointer"
      onClick={handleClick}
    >
      <h2 className="bg-gradient-to-br from-white to-stone-500 bg-clip-text font-display text-lg font-bold text-transparent [text-wrap:balance] md:text-xl md:font-normal">
        {title}
      </h2>
      <div className="2-24 flex h-24 items-center justify-center">
        <Image
          alt={`mini-app tech logo: ${img}`}
          src={`/${img}.svg`}
          width={100}
          height={100}
        />
      </div>
      <div className="mx-auto max-w-lg text-center">
        <div className="prose-sm leading-normal text-gray-500 [text-wrap:balance]">
          {description}
        </div>
      </div>
    </div>
  );
}
