import "./styles.css";
import Link from "next/link";
import LikeButton from "@/app/[userRole]/lists/components/LikeButton";
import { RiMailSendLine } from "react-icons/ri";
import { BsCalendar2DateFill } from "react-icons/bs";
import { imageUrl } from "@/lib/imageUrl";
import Skills from "../../profil/[id]/components/users/Skills";
import { MdLocationOn } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";

export default function CardProfile({ user, classes }) {
  const options = { day: "numeric", month: "numeric", year: "numeric" };
  const {
    lastName,
    firstName,
    companyName,
    id,
    email,
    city,
    postCode,
    profileImage,
    description,
    stages,
    skills,
  } = user;
  const role = companyName ? "companies" : "students";

  return (
    <div className={classes}>
      <div
        href={`${role}/profil/${id}`}
        className="relative flex flex-col gap-4 md:justify-around cardProfile w-50vh h-fit rounded-lg md:w-70vh p-8 overflow-hidden mx-2"
      >
        {/* <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span> */}

        <div className="sm:flex sm:gap-4 sm:justify-around">
          <div className="hidden sm:flex mr-5 ">
            {profileImage ? (
              <img
                alt={profileImage}
                src={`${imageUrl}${profileImage}`}
                className="h-20 w-20 rounded-lg object-cover shadow-sm"
              />
            ) : (
              <img
                alt="avatar"
                src="https://www.hec.ca/profs/jean-louis.dufresne.jpg"
                className="h-20 w-20 rounded-lg object-cover shadow-sm"
              />
            )}
          </div>
          <div>
            <Link href={`${role}/profil/${id}`}>
              <h3 className="text-lg grow font-semibold text-black space-x-1 sm:text-3xl ">
                {role === "students"
                  ? `${lastName.slice(0, 10)}  ${firstName.slice(0, 10)}`
                  : `${
                      companyName.length > 35
                        ? `${companyName.slice(0, 20)}...`
                        : companyName
                    }`}
              </h3>
            </Link>
            <div className="flex items-center gap-2">
              <RiMailSendLine />
              <h4>{email}</h4>
            </div>
            <div className="flex gap-2 items-center ">
              <MdLocationOn />
              <p className="mt-1 text-xs font-medium text-green-400/[0.5] italic">
                {`${city}, ${postCode}`}
              </p>
            </div>
          </div>
          <div className="">
            <LikeButton userReceivingId={id} />
          </div>
        </div>

        <div className="flex flex-col ">
          <p className="hidden md:block w-full max-h-[5rem] boxShadow-inputShadow text-sm text-gray-700  overflow-y-auto hide-scrollBar rounded-lg py-2 px-2 ">
            {description ? description : "Pas de description"}
          </p>

          <dl className="flex w-full mt-6 justify-between gap-4 sm:gap-6">
            {stages.map((stage) => (
              <div
                key={stage.id}
                className="hidden md:flex lg:flex-col gap-3 flex-wrap w-1/2"
              >
                <dt className="text-sm flex gap-2 items-center font-medium text-gray-800">
                  <FcWorkflow />
                  <p>
                    {stage.remoteFriendly
                      ? "le télétravail c'est la vie"
                      : "travailler au bureau y'a rien de mieu"}
                  </p>
                </dt>
                <dd className="text-sm flex gap-2 items-center text-red-900">
                  <BsCalendar2DateFill color="black" />
                  <p>
                    {/* {`${stage.startDate.slice(0, 10)} pour une durée de ${
                      stage.duration
                    } mois`} */}
                    {`À partir du ${new Date(
                      stage.startDate
                    ).toLocaleDateString("fr-FR", options)} pour une durée de ${
                      stage.duration
                    } mois`}
                  </p>
                </dd>
              </div>
            ))}
            <div className="flex flex-wrap-reverse">
              <Skills skills={skills} stages={false} />
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
