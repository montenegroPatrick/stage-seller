"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useRouter } from "next/navigation";
import Button from "@/app/utilsComponents/Buttons/Button";
import CardProfile from "../../lists/components/CardProfile";
import { useEffect, useState } from "react";
import LoaderSkeleton from "@/app/utilsComponents/Loaders/LoaderSkeleton";

export default function Slider({ usersSuggest, usersMatch, usersLiked }) {
  const [sliderRef] = useKeenSlider();
  const [usersToDisplay, setUsersToDisplay] = useState();
  const router = useRouter();

  const filter = usersSuggest.filter(
    (suggestUser) =>
      !usersMatch.find((user) => user.id === suggestUser.id) &&
      !usersLiked.find((userLiked) => userLiked.user.id === suggestUser.id)
  );

  useEffect(() => {
    setUsersToDisplay(filter);
    router.refresh();
  }, [usersSuggest, usersLiked, usersMatch]);
  if (!usersToDisplay) {
    return <LoaderSkeleton />;
  }
  if (usersToDisplay.length < 1) {
    throw new Error("no result");
  }
  return (
    <>
      <div className="h-[calc(100vh-4rem)] flex justify-center items-center">
        <div ref={sliderRef} className="keen-slider flex-row">
          {usersToDisplay.map((user, index) => (
            <CardProfile
              classes={`flex justify-center items-center  keen-slider__slide number-slide${
                index + 1
              }`}
              user={user}
            />
          ))}
        </div>
      </div>
    </>
  );
}
