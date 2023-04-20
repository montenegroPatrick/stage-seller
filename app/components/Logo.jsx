"use client";

//Hooks
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      className="md:block cursor-pointer text-black"
      src="/logo_transparent.png"
      height={150}
      width={150}
      alt="Logo"
    />
  );
}
