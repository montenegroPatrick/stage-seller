
import NavBarMarginContainer from "../NavBarMarginContainer";
import CompanyNameAvatar from "./CompanyNameAvatar";
import CompanySkills from "./CompanySkills";

export default function () {
  return (
    <section className="flex flex-col md:flex-row min-h-[calc(100vh-4rem)] font-chivo">
      <div className="w-[100%] md:w-[50%] mx-auto my-5">
        <CompanyNameAvatar />
        <CompanySkills />
      </div>
      <div className="w-[100%] sm:w-[50%] "></div>
    </section>
  );
}
