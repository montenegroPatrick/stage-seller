import CardProfile from "@/app/[userRole]/lists/components/CardProfile";

import NavBarMarginContainer from "@/app/components/NavBarMarginContainer";
import Slider from "./components/slider";
import { cookies } from "next/headers";
import getSuggest from "@/lib/suggests/getSuggests";
import getUserMatches from "@/lib/users/getUserMatches";

export default async function Suggests() {
  //todo fetch user qui a le plus de point commun entre eux
  const cookieStore = cookies();
  const token = cookieStore.get("jwt")?.value;

  const usersToDisplay = await getSuggest(token).then((res) => {
    if (res.data.error) {
      return undefined;
    } else {
      return res.data;
    }
  });

  return (
    <NavBarMarginContainer>
      <Slider usersToDisplay={usersToDisplay} />
    </NavBarMarginContainer>
  );
}
