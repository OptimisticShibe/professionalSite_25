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
  link?: string;
}

const education: workEduItem[] = [
  {
    name: "AWS",
    detail: "Certified Cloud Practitioner Certification",
    startDate: new Date("2025-05-23T00:00:00"),
    logo: { img: "/logos/AwsCloudCert.png", bgColor: "bg-white" },
    link: "/aws-cloud-practitioner-cert",
  },
  {
    name: "ICAgile",
    detail: "Agile Fundamentals Certification",
    startDate: new Date("2019-05-01T00:00:00"),
    logo: { img: "/logos/ICAgile.png", bgColor: "bg-white" },
    link: "/ic-agile-cert",
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
    detail: "Senior Frontend Engineer",
    startDate: new Date("2022-03-01T00:00:00"),
    logo: { img: "/logos/Deloitte.png" },
    info: [
      "Led the design and development of a functional UI suite for embedded forms, enhancing the user experience for 23 million unique users between 2023 and 2025",
      "Rebuilt a state agency's One-Time-Password system from the ground-up with modern AWS Lambda, DynamoDB and notification services",
      "Leveraged the React Context API to maintain data state integrity across the application’s notification system",
      "Simplified end-to-end API with improved SQL and Hibernate persistence wrappers, reducing the number of necessary API calls by 50%",
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
