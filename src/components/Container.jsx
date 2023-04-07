export default function Container({ children }) {
  return (
    <div
      className="
        max-w-[2520px]
        min-w-full
        mx-auto
        xl:px-20 
        md:px-10
        sm:px-2
        px-4
        mt-15vh
        h-full
      "
    >
      {children}
    </div>
  );
}
