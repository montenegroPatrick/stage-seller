"use client";

//Hooks
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Logo({ additionalClasses, height, width }) {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      className={`md:block cursor-pointer bg-black/[0.2] rounded-3xl  text-black ${additionalClasses}`}
      src="/logo_transparent.png"
      height={height}
      width={width}
      alt="Logo"
      color="black"
    />
  );
}
