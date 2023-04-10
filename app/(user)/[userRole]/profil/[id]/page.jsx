import StudentProfile from "@/src/components/Profile/StudentProfile";
import CompanyProfile from "@/src/components/Profile/CompanyProfile";


function Profile({ params }) {
  
  //todo fetch user with id get on params
  return(
<div>{ params.userRole === 'students' ? <StudentProfile /> : <CompanyProfile />}</div>
     
  )
  
  
}

export default Profile;
