export default function NavBarMarginContainer({ children, bg, height}) {
  return (
    <div className={`mt-[3.5rem] sm:mt-[4rem] ${bg} ${height}`}>{children}</div>
  );
}
