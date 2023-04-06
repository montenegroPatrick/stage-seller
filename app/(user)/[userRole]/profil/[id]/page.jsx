import StudentProfile from "@/src/components/Profile/StudentProfile";

function Profile({ params }) {
  console.log(params);
  //todo fetch user with id get on params
  return <StudentProfile />;
}

export default Profile;
