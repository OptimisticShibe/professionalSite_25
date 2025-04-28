interface workEduItem {
  name: string;
  detail: string;
  startDate: Date;
  endDate?: Date;
  logo: {
    img: string;
    bgColor?: string;
  };
  info?: string[];
}

const education: workEduItem[] = [
  {
    name: "ICAgile",
    detail: "Agile Fundamentals Certification",
    startDate: new Date("2019-05-01T00:00:00"),
    logo: { img: "/logos/ICAgile.png", bgColor: "bg-white" },
  },
  {
    name: "University of Washington",
    detail: "C# Certification",
    startDate: new Date("2017-05-01T00:00:00"),
    endDate: new Date("2017-09-01T00:00:00"),
    logo: { img: "/logos/UniversityWashington.jpg", bgColor: "bg-[#2a1c4f]" },
  },
  {
    name: "University of Missouri",
    detail: "BS Biology & BA Religious Studies",
    startDate: new Date("2010-08-01T00:00:00"),
    endDate: new Date("2013-12-01T00:00:00"),
    logo: { img: "/logos/UniversityMissouri.jpg", bgColor: "bg-[#c7910b]" },
  },
];

const workExperience: workEduItem[] = [
  {
    name: "Deloitte",
    detail: "Senior Consultant - Frontend Engineer",
    startDate: new Date("2022-03-01T00:00:00"),
    logo: { img: "/logos/Deloitte.png" },
    info: [
      "Code owner of embedded forms functional UI suite, part of broader application serving 23M unique users between 2023-25",
      "Revitalized legacy AngularJS application with migration to React",
      "Simplified end-to-end API with improved SQL and Hibernate persistence wrappers",
    ],
  },
  {
    name: "Accenture Federal Services",
    detail: "Systems Developer - Full Stack Engineer",
    startDate: new Date("2017-06-01T00:00:00"),
    endDate: new Date("2022-03-01T00:00:00"),
    logo: { img: "/logos/Accenture.png" },
    info: [
      "Orchestrated section 508-compliance overhaul for agile team",
      "Spearheaded TypeScript modernization effort, demonstrating efficiency of component-driven design architecture",
      "Configured Hibernate criterion and API response body structures",
    ],
  },
];

export const eduWorkData = [
  {
    name: "Work Experience",
    data: workExperience,
  },
  {
    name: "Education",
    data: education,
  },
];
