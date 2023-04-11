import CardProfile from "@/src/components/Profile/cardProfile";

export default function Lists({ params }) {
  //todo si currentUser est role alors afficher seulement !role
  //todo fetch user ici pour lui passer en paramètre à la carte
  //todo map sur user pour pouvoir créer une carte pour chaque user

  return (
    <div className="flex flex-wrap justify-center">
      <CardProfile />
      <CardProfile />
      <CardProfile />
    </div>
  );
}
