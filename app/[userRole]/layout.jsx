import NavBar from "@/app/components/NavBar";
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function LayoutUserRole({ params, children }) {
  // if(!user) => redirect to (component ou page SignUp) à voir

  // if (role) => you ok to see this pages
  //example
  if (params.userRole !== "students" && params.userRole !== "companies") {
    redirect("/");
  }
  return <div className="">{children}</div>;
}
