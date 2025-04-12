import { useState } from "react";
import { navLinks } from "./NavLinks";
import { name } from "src/constants";

const Hamburger = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const handleClick = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <nav className="md:hidden py-2 bg-zinc-900 w-full flex flex-col justify-between not-prose items-center">
      <div className="flex justify-between w-full px-5">
        <a href="/">
          <h2 className="text-2xl">{name}</h2>
        </a>
        <button onClick={handleClick} className="hover:cursor-pointer justify-self-end">
          <span
            className={`bg-zinc-200 block transition-all duration-300 ease-out
                        h-0.5 w-6 rounded-sm ${hamburgerOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
          ></span>
          <span
            className={`bg-zinc-200 block transition-all duration-300 ease-out
                        h-0.5 w-6 rounded-sm my-0.5 ${hamburgerOpen ? "opacity-0" : "opacity-100"}`}
          ></span>
          <span
            className={`bg-zinc-200 block transition-all duration-300 ease-out
                        h-0.5 w-6 rounded-sm ${hamburgerOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
          ></span>
        </button>
      </div>
      <section className={` duration-300 ease-in-out w-full overflow-y-hidden flex justify-around ${hamburgerOpen ? "max-h-20" : "max-h-0"}`}>
        {navLinks.map((link, i) => {
          return (
            <a className="hover:scale-[1.15] transition duration-300 p-2 font-bold" key={i} href={link.url}>
              {link.label}
            </a>
          );
        })}
      </section>
    </nav>
  );
};

export default Hamburger;
