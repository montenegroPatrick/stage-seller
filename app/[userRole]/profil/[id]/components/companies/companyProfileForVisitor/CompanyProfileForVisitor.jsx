//Components
import CompanyStage from "../companyProfileForUser/CompanyStage";
import CompanySkills from "../companyProfileForUser/CompanySkills";
import CompanyNameAvatar from "../companyProfileForUser/CompanyNameAvatar";
import CompanyDescription from "../companyProfileForUser/CompanyDescription";

export default function CompanyProfileForVisitor({ otherUser }) {
  return (
    <>
      <div className="sticky flex flex-col items-center scrolling-animation">
        <h2 className="text-4xl sm:text-4xl md:text-5xl text-black text-center py-6 px-8">
          Profil
        </h2>
        <div className="w-full 2xl:w-[90vw] bg-black h-[1px]" />
      </div>
      <section className="flex flex-col md:flex-row w-full 2xl:w-[90vw] mx-auto">
        <div className="w-[100%] md:w-[50%] mx-auto my-5 h-full flex flex-col">
          <CompanyNameAvatar
            companyName={otherUser.companyName}
            picture={otherUser.profilImage}
            city={otherUser.city}
            postCode={otherUser.postCode}
            visitor={true}
          />
          <CompanySkills skills={otherUser.skills} visitor={true} />
        </div>
        <div className="w-full md:w-[50%] mx-auto my-5 border-dotted md:border-l-2 md:border-black">
          <CompanyDescription
            description={otherUser.description}
            visitor={true}
          />
          {otherUser.stages.length || !otherUser.stages ? (
            otherUser.stages.map((stage) => (
              <CompanyStage
                currentStage={stage}
                key={stage.id}
                visitor={true}
              />
            ))
          ) : (
            <CompanyStage currentStage={{}} visitor={true} />
          )}
        </div>
      </section>
    </>
  );
}
