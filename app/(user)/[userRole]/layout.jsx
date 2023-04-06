import { headers, cookies } from "next/headers";

export default function LayoutUserRole({ params, children }) {
  console.log(params.userRole);
  // await fetch (user)
  const cook = cookies();
  console.log(cook);
  const header = headers();
  console.log(header);
  // if(!user) => redirect to (component ou page SignUp) à voir

  // if (role) => you ok to see this pages
  //example
  if (params.userRole !== "students" && params.userRole !== "companies") {
    return (
      <div>
        <p>petit malin tu n'as pas accès à cette page de cette manière</p>
      </div>
    );
  }
  return <div>{children}</div>;
}
