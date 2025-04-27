interface navLink {
  label: string;
  url: string;
  target?: string;
}

export const navLinks: navLink[] = [
  {
    label: "Projects",
    url: "/#projects",
  },
  {
    label: "Resume",
    url: "/resume",
    target: "_blank",
  },
  {
    label: "Github",
    url: "https://github.com/OptimisticShibe/professionalSite_25",
  },
];
