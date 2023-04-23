"use client";
import NavBarMarginContainer from "@/app/components/NavBarMarginContainer";
import Button from "@/app/utilsComponents/Buttons/Button";
import { imageUrl } from "@/lib/imageUrl";
import { useRouter } from "next/navigation";

export default function ResumeImage({ user }) {
  const router = useRouter();
  return (
    <NavBarMarginContainer>
      <aside className="m-5 p-10flex flex-col font-bold gap-4">
        <Button
          className="p-5"
          onClick={() => {
            router.back();
          }}
        >
          Back
        </Button>
        <div className="flex items-center justify-center h-screen w-screen">
          <img className="w-80vh h-80vh" src={`${imageUrl}${user.resume}`} />
        </div>
      </aside>
    </NavBarMarginContainer>
  );
}