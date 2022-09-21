import Link from "next/link";
const NavBarIcon = ({children,to}) =>{
  const spn = (
    <span className="px-3 my-3 font-sans text-sm text-[#1c1d1f] hover:text-[#5624d0] hover:cursor-pointer">
      {children}
    </span>
  );
    if(to)
      return <Link href={to}>{spn}</Link>;
    else return <>{spn}</>;
}
export default NavBarIcon;