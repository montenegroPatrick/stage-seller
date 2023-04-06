import SignUpTabs from "@/src/components/Forms/SignUpTabs";

export default function SignUp({ params }) {
  return (
    <div className="flex justify-center items-center mt-15vh  ">
      <SignUpTabs userRole={params.userRole} />
    </div>
  );
}
