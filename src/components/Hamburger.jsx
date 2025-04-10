import { useState } from "react";

const Hamburger = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const handleClick = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <nav class="md:hidden py-2 bg-zinc-900 w-full flex flex-col justify-between not-prose items-center">
      <div className="flex justify-between w-full px-5">
        <h2 class="text-2xl">Rafiq Ramadan</h2>
        <button onClick={handleClick} class="hover:cursor-pointer justify-self-end">
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
      <section className={` duration-300 ease-in-out w-full overflow-y-hidden ${hamburgerOpen ? "max-h-20" : "max-h-0"}`}>
        <ul className="flex justify-around w-full py-2">
          <li>Test</li>
          <li>Hello</li>
          <li>3rd one</li>
        </ul>
      </section>
    </nav>
  );
};

export default Hamburger;
