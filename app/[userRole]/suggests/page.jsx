import CardProfile from "@/app/[userRole]/lists/components/CardProfile";
import Caroussel from "@/app/utilsComponents/Carousel";
import NavBarMarginContainer from "@/app/components/NavBarMarginContainer";

export default function Suggests() {
  //todo fetch user qui a le plus de point commun entre eux

  return (
    <NavBarMarginContainer className="">
      <Caroussel />
    </NavBarMarginContainer>
  );
}
