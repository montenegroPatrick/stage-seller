import CardProfile from "@/src/components/Profile/cardProfile";

export default function Suggests() {
  //todo fetch user qui a le plus de point commun entre eux
  return (
    <div className="flex flex-wrap justify-center">
      <CardProfile />
      <CardProfile />
      <CardProfile />
    </div>
  );
}
