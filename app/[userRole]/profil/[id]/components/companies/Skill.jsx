export default function Skill({ children }) {
  return (
    <span
      className={` text-black text-sm font-medium px-2 py-0.5 rounded text-center border border-black `}
    >
      {children}
    </span>
  );
}
