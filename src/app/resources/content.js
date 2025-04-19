import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "John",
  lastName: "Føreland",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full-Stack & DevOps Developer/Architect",
  avatar: "/images/avatar.png",
  location: "Europe/Oslo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Source",
    icon: "sourceCode",
    link: "https://github.com/johnforeland/john.fore.land",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/johnforeland",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/johnforeland/",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Design engineer and builder</>,
  subline: (
    <>
      I'm Selene, a design engineer at <InlineCode>FLY</InlineCode>, where I
      craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        John is as full-stack as you can get. You'll find him building solutions
        with the end user in mind, wether that be customers or developers. With
        a background in software engineering and a passion for design, he's
        always looking for ways to improve the user experience.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Sopra Steria",
        timeframe: "2018 - Present",
        role: "Manager Software Engineer",
        achievements: [
          <>
            Salesforce development & architecture for customers like Elvia, NAV
            and Vinmonopolet.
          </>,
          <>
            DevOps architecture (GitHub, BitBucket), CI/CD, GitHub Actions
            plugin development.
          </>,
          <>Sales proposals and bids.</>,
          <>
            Interviewing graduates for the company and seniors for Salesforce
            department.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Kristiansand Dyrepark",
        timeframe: "2012 - 2018",
        role: "Seasonal Manager IT",
        achievements: [
          <>Manager for seasonal workers at the IT department.</>,
          <>Worked off-season as part-time IT support.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Agder",
        timeframe: "2016 - 2018",
        description: (
          <>Master's degree in Industrial Economy and Technology Management.</>
        ),
        thesis:
          "Managing Change When Implementing a New Project Management Methodology",
        thesisUrl:
          "https://uia.brage.unit.no/uia-xmlui/bitstream/handle/11250/2566847/F%C3%B8reland%20John%20Arne.pdf",
      },
      {
        name: "University of Agder",
        timeframe: "2013 - 2016",
        description: <>Bachelor's degree in Computer Software Engineering.</>,
        thesis: "",
        thesisUrl: "",
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, home, about, work, gallery };
