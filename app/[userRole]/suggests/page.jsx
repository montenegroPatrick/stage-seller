import CardProfile from "@/components/StudentProfile/CardProfile";
import Caroussel from "@/components/Carousel";
import NavBarMarginContainer from "@/components/NavBarMarginContainer";

export default function Suggests() {
  //todo fetch user qui a le plus de point commun entre eux

  return (
    <NavBarMarginContainer className="">
      <Caroussel />
    </NavBarMarginContainer>
  );
}
