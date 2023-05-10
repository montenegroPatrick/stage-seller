export default function NavBarMarginContainer({ children, classes }) {
  return (
    <div className={`mt-[3.5rem] sm:mt-[4rem] ${classes}`}>{children}</div>
  );
}
