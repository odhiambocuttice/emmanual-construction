import { useState, useEffect } from "react";
import Link from "next/link";

import { Avatar } from "react-lorem-ipsum";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 5) setIsScrolled(true);
      else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navstyles = {
    true: "bg-gray-800 top-0 ",
    false: "bg-transparent border-b-2",
  };

  return (
    <nav
      className={`flex uppercase items-center justify-center w-full sticky z-30 py-4 ${navstyles[isScrolled]}`}
    >
      <div className="max-w-5xl flex-col gap-x-14 ">
        <Link href="/">
          <h3 className=" text-gray-400 ">
            MiniHomes {}
            <span className="text-xs  text-gray-600">by Emmanuel Otieno</span>
          </h3>
        </Link>

        <div className="flex flex-row items-center justify-between gap-x-52">
          <div className="text-xs font-black">
            <Link href="/" className="mr-8">
              <span>projects</span>
            </Link>

            <Link href="/calculator">
              <span>construction cost calculator</span>
            </Link>
          </div>

          <Avatar className="h-8 w-8 rounded-full" />
        </div>
      </div>
    </nav>
  );
};
