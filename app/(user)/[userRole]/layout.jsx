export default function LayoutUserRole({ params, children }) {
  console.log(params.userRole);
  // await fetch (user)

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
