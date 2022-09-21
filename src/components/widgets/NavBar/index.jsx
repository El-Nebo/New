import UdemyLogo from "../../../../public/icons/UdemyLogo";
import ShoppingCart from "../../../../public/icons/ShoppingCart";
import Image from "next/image";
import WorldIcon from "../../../../public/world-svgrepo-com.svg";
import NavBarIcon from "../../atoms/NavBarButton";
import LogInSignUpButton from "../../atoms/LogInSignUpButton";
import Link from "next/link";
import SearchForm from "../../forms/SearchForm";

const NavBar = () => {
  return (
    <div
      className="px-6 flex flex-row items-center justify-center h-[73px] border bg-white
        shadow-[0_2px_4px_rgb(0_0_0/8%),0_4px_12px_rgb(0_0_0/8%)] z-50 relative"
    >
      <Link href="/">
        <div className="hover:cursor-pointer pr-2">
          <UdemyLogo />
        </div>
      </Link>
      <NavBarIcon>Categories</NavBarIcon>
      <SearchForm />
      <NavBarIcon>Udemy Business</NavBarIcon>
      <NavBarIcon>Teach on Udemy</NavBarIcon>
      <span className="hover:cursor-pointer hover:text-[#ffffff]">
        <ShoppingCart />
      </span>
      <LogInSignUpButton>Log in</LogInSignUpButton>
      <LogInSignUpButton theme={"dark"}>Sign up</LogInSignUpButton>
      <LogInSignUpButton>
        <Image alt="world Icon" width={17} height={17} src={WorldIcon} />
      </LogInSignUpButton>
    </div>
  );
};
export default NavBar;
