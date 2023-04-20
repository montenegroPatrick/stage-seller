export default function Skill({ children, bgColor }) {
  //   return(<div className="py-1 p-2 text-center text-md sm:text-lg bg-yellow-400 rounded-full mx-1 my-2 w-[40%] ">
  // {children}
  //   </div>);
  return (

    <span className={` text-black text-sm font-medium px-2 py-0.5 rounded text-center border border-black `}>
      {children}
    </span>
  );
}
