interface navLink {
  label: string;
  url: string;
  target?: string;
}

export const navLinks: navLink[] = [
  {
    label: "Resume",
    url: "/resume",
    target: "_blank",
  },
  {
    label: "Projects",
    url: "/#projects",
  },
  {
    label: "GitHub",
    url: "https://github.com/OptimisticShibe/professionalSite_25",
  },
];
