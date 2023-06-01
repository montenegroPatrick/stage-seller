import CardProfile from "@/app/[userRole]/lists/components/CardProfile";

import NavBarMarginContainer from "@/app/components/NavBarMarginContainer";
import Slider from "./components/slider";
import { cookies } from "next/headers";
import getSuggest from "@/lib/suggests/getSuggests";
import getUserMatches from "@/lib/users/getUserMatches";

export default async function Suggests() {
  const cookieStore = cookies();
  const token = cookieStore.get("jwt")?.value;

  const usersSuggest = await getSuggest(token).then((res) => {
    if (res.data.error) {
      return undefined;
    } else {
      return res.data;
    }
  });
  if (!usersSuggest) {
    throw new Error("no users");
  }
  const userMatch = await getUserMatches(token).then((res) => res.data);

  const usersToDisplay = usersSuggest.filter(
    (user) => user.id === userMatch.id
  );
  console.log("suggest", usersToDisplay);
  return (
    <NavBarMarginContainer>
      <h2 className="bg-white text-4xl sm:text-4xl md:text-5xl text-black text-center py-6 px-8">
        Nos suggestions
      </h2>
      <Slider usersToDisplay={usersToDisplay} />
    </NavBarMarginContainer>
  );
}
