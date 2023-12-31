const eligibilityData = [
  {
    id: 1,
    title: "Google Developer Students Club Officer",
    startYear: 2020,
    endYear: 2024,
    image: "/assets/achievements/officer.webp",
    isCompetition: false,
  },

  {
    id: 2,
    title: "President's Lister",
    startYear: 2022,
    endYear: 2023,
    image: "/assets/achievements/preslister.webp",
    isCompetition: false,
  },

  {
    id: 3,
    title: "Computer System Servicing NC II Passer",
    startYear: 2023,
    endYear: 2023,
    image: "",
    isCompetition: false,
  },

  {
    id: 4,
    title: "Philippine Civil Service Examination Passer",
    startYear: 2023,
    endYear: 2023,
    image: "",
    isCompetition: false,
  },

  {
    id: 5,
    title:
      "Qualifier for the International Conference on Information Technology Education (ICITE)",
    startYear: 2023,
    endYear: 2023,
    image: "/assets/achievements/icite.webp",
    isCompetition: true,
  },

  {
    id: 6,
    title: "Most Promising SDG Solutions Award Winner - iDeaTech 2023",
    startYear: 2023,
    endYear: 2023,
    image: "/assets/achievements/ideatech.webp",
    isCompetition: true,
  },

  {
    id: 7,
    title:
      "DICT Philippines Startup 7 - Regional Pitching Competition Finalist",
    startYear: 2022,
    endYear: 2022,
    image: "/assets/achievements/knouni.webp",
    isCompetition: true,
  },

  {
    id: 8,
    title: "Key Speaker in UI/UX Design Using Figma (GDSC Info Session) ",
    startYear: 2023,
    endYear: 2023,
    image: "/assets/achievements/speaker.webp",
    isCompetition: false,
  },
];
eligibilityData.sort((a, b) => b.endYear - a.endYear);

export default eligibilityData;
