import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import UserDropdown from "./UserDropdown";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full h-[70px] bg-gray-800">
        <div className="container header-wrapper">
            <Link href="/">
                <Image 
                    src="/assets/images/logo.png"
                    alt="Stocky logo"
                    width={140}
                    height={32}
                    className="h-8 w-auto cursor-pointer"
                    priority
                 />
            </Link>
            <nav className="hidden sm:block">
                <NavItems />
            </nav>
            <UserDropdown />
        </div>
     
    </header>
  );
};

export default Header;