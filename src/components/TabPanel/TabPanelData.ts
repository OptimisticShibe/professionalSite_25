interface educationItem {
  institution: string;
  degree: string;
  startDate: Date;
  endDate?: Date;
  logo: string;
}

interface workExperienceItem {
  companyName: string;
  jobTitle: string;
  startDate: Date;
  endDate?: Date;
  logo: string;
  details: string[];
}

export const education: educationItem[] = [
  {
    institution: "University of Missouri",
    degree: "BS Biology | BA Religious Studies",
    startDate: new Date("2010-08-01"),
    endDate: new Date("2013-12-01"),
    logo: "",
  },
];

export const workExperience: workExperienceItem[] = [
  {
    companyName: "Deloitte",
    jobTitle: "Senior Consultant - Frontend Engineer",
    startDate: new Date("2022-03-01"),
    logo: "/logos/Deloitte.png",
    details: ["Test", "Another Test", "Third Detail"],
  },
  {
    companyName: "Accenture",
    jobTitle: "Systems Developer - Full Stack Engineer",
    startDate: new Date("2017-06-01"),
    endDate: new Date("2022-03-01"),
    logo: "/logos/Accenture.png",
    details: ["Test", "Another Test", "Third Detail"],
  },
];
