const person = {
  firstName: "John",
  lastName: "Føreland",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatars/avatar.jpg",
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
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
  {
    name: "Source",
    icon: "sourceCode",
    link: "https://github.com/johnforeland/john.fore.land",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Enigneer & Architect</>,
  subline: (
    <>
      I&apos;m John, a software engineer at Sopra Steria.
      <br />
      <br />
      My main department is Salesforce, but I&apos;m responsible for everything
      architeture, full-stack, DevOps and more, where I craft intuitive user
      experiences. After hours, I build my own projects.
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
    title: "Hey, I'm John! 👋",
    description: (
      <>
        I&apos;m as full-stack as you can get, but I&apos;m the most passionate
        for front-end (clearly). However, don&apos;t underestimate my skills in
        backend, integration, DevOps and architecture in general!
        <br />
        <br />
        You&apos;ll always find me building solutions with the end user in mind,
        whether that be customers, employees or other developers. With a
        background in software engineering and a passion for design, I&apos;m
        always looking for ways to improve the user experience (and add a bit of
        flare to it).
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Project Experience",
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
          <>
            Master&apos;s degree in Industrial Economy and Technology
            Management.
          </>
        ),
        thesis:
          "Managing Change When Implementing a New Project Management Methodology",
        thesisUrl:
          "https://uia.brage.unit.no/uia-xmlui/bitstream/handle/11250/2566847/F%C3%B8reland%20John%20Arne.pdf",
      },
      {
        name: "University of Agder",
        timeframe: "2013 - 2016",
        description: (
          <>Bachelor&apos;s degree in Computer Software Engineering.</>
        ),
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
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Tailwind.</>,
      },
    ],
  },
};

const project = {
  label: "Projects",
  title: "My projects",
  description: `Developer projects by ${person.name}`,
};

/** @type {GitHubContent} */
const github = {
  label: "GitHub",
  title: "GitHub Projects",
  description: `GitHub projects by ${person.name}`,
  repos: [
    {
      owner: "johnforeland",
      repo: "john.fore.land",
      branch: "main",
      website: "/",
      tags: ["Next.js", "TypeScript", "Tailwind"],
    },
    {
      owner: "sopra-steria-salesforce",
      repo: "ssdx-cli",
      branch: "main",
      video:
        "https://s3.eu-north-1.amazonaws.com/media.fore.land/github-projects/ssdx.mp4",
      tags: ["Salesforce", "TypeScript", "CLI"],
    },
    {
      owner: "johnforeland",
      repo: "truncate-tool",
      branch: "main",
      code: `- uses: johnforeland/truncate-tool@v0.5
    id: truncate-with-append
    with:
      text: 'my\\nstring\\nhas\multiple\\nlines'
      max_characters: '4'
      string_to_append: '...'

  - run: echo "\${{ steps.truncate-with-append.outputs.text }}" # should be 'my\\nstring\\n\\n...' (because newline and ... counts as one row)

        `,
      tags: ["GitHub Action", "TypeScript"],
    },
  ],
};

export { about, github, home, person, project, social };
