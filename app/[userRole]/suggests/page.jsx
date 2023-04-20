import CardProfile from "@/app/[userRole]/lists/components/CardProfile";

import NavBarMarginContainer from "@/app/components/NavBarMarginContainer";
import Slider from "./components/slider";

export default function Suggests() {
  //todo fetch user qui a le plus de point commun entre eux

  return (
    <NavBarMarginContainer className="">
      <Slider />
    </NavBarMarginContainer>
  );
}
