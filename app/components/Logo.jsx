'use client';

//Hooks
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();

  return ( 
    <Image
      onClick={() => router.push('/')}
      className="hidden md:block cursor-pointer text-blue-500" 
      src="/logo_transparent.png" 
      height={80} 
      width={80} 
      alt="Logo"
    />
   );
}
 
