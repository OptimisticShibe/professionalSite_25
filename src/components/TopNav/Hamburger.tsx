import { Fragment, useState, type ReactNode } from "react";
import { navLinks } from "./NavLinks";

const Hamburger = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const handleClick = () => setHamburgerOpen(!hamburgerOpen);

  return (
    <div className="flex flex-col">
      <button
        tabIndex={0}
        aria-label="navigation menu"
        role="button"
        aria-expanded={hamburgerOpen}
        onClick={handleClick}
        className="hover:cursor-pointer justify-self-end border-r-2 border-t-2 border-gold p-2 mx-2"
      >
        <span
          className={`bg-zinc-800 dark:bg-zinc-200 block transition-all duration-300 ease-out
                          h-0.5 w-6 rounded-sm ${hamburgerOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
        ></span>
        <span
          className={`bg-zinc-800 dark:bg-zinc-200 block transition-all duration-300 ease-out
                          h-0.5 w-6 rounded-sm my-0.5 ${hamburgerOpen ? "opacity-0" : "opacity-100"}`}
        ></span>
        <span
          className={`bg-zinc-800 dark:bg-zinc-200 block transition-all duration-300 ease-out
                          h-0.5 w-6 rounded-sm ${hamburgerOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
        ></span>
      </button>
      <section className={` duration-300 ease-in-out w-full overflow-y-hidden flex justify-around mt-4 px-4  ${hamburgerOpen ? "max-h-20 pb-2" : "max-h-0"}`}>
        {navLinks.map((link, i) => {
          return (
            <Fragment key={i}>
              <a className="hover:scale-[1.15] transition duration-300 p-2 font-bold grow text-center" href={link.url} target={link.target ? link.target : ""}>
                {link.label}
              </a>
              <span className="not-last:border-r-2 border-gold" />
            </Fragment>
          );
        })}
      </section>
    </div>
  );
};

export default Hamburger;
