import { FaGithub, FaLinkedinIn, FaRegSmileWink } from 'react-icons/fa';
import { HiOutlineMail, HiCode, HiDatabase, HiOutlineDocumentDownload } from 'react-icons/hi';

// Logo Image
const LogoImage = 'sample-logo.svg';

// Profile Image
const profileImage = 'profile.jpg';

// Name, will display in title, hero section, and footer
const devName = 'John Doe';

// Roles array for typewriter effect in hero
const roles = ['Full Stack Developer', 'Software Engineer', 'Coffee Lover'];

// Social URL Links
const socialLinks = [
  {
    name: 'email',
    icon: <HiOutlineMail />,
    url: 'mailto:example@email.com',
  },
  {
    name: 'linkedin',
    icon: <FaLinkedinIn />,
    url: 'https://www.linkedin.com/',
  },
  {
    name: 'github',
    icon: <FaGithub />,
    url: 'https://github.com/',
  },
];

// Resume URL link
const resumeLink = '/';

// Bio paragraphs for About section
const bioParagraphs = [
  {
    id: 'paragraph1',
    text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex earum tempore vel! Esse, autem? Dolorum est, iusto numquam dicta natus minima nihil recusandae, hic, commodi officia animi totam consequatur amet!`,
  },
  {
    id: 'paragraph2',
    text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident magnam odio aut rerum! Eveniet esse, nulla repellendus, voluptatum asperiores exercitationem sunt dolorum veritatis pariatur iste, tempora officiis cupiditate magnam rem?`,
  },
  {
    id: 'paragraph3',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, praesentium? Adipisci quaerat sit, doloremque temporibus neque excepturi deserunt earum laboriosam et velit! Minima, sequi debitis? Eligendi, rem aperiam. Est, impedit!`,
  },
  {
    id: 'paragraph4',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
];

// object containing data for Call to Action sections
const contactCTA = {
  message: `A vero dolor libero molestias laborum est possimus repudiandae.`,
  buttonMessage: 'To Contact',
  buttonIcon: <FaRegSmileWink />,
  linkURL: '#contact',
};
const resumeCTA = {
  message: `Officia ratione sunt fugit voluptas deserunt odit vitae ipsa!`,
  buttonMessage: 'Download Resume',
  buttonIcon: <HiOutlineDocumentDownload />,
  linkURL: resumeLink,
};

// icon, title, summary, and skills list for Skill Cards
const skillCardData = [
  // for front-end
  {
    id: 'frontEndSkills',
    icon: <HiCode />,
    title: 'Developer',
    summary: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Java', 'Python', 'C++'],
  },
  // for back-end
  {
    id: 'backEndSkills',
    icon: <HiDatabase />,
    title: 'Engineer',
    summary: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.`,
    skills: [
      'AWS',
      'Azure',
      'JSON',
      'Google Cloud',
      'Node.js',
      'Express.js',
      'RESTful API',
      'SQL',
      'MySQL',
      'NoSQL',
      'MongoDB',
      'GraphQL',
    ],
  },
];

// Project List for Work section
const projectList = [
  {
    title: 'Project 1',
    image: 'project-1.jpg',
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi sunt pariatur quas aliquid fugit. Saepe magnam, dolores magni ipsa facilis similique quae cupiditate at non enim sunt eveniet dolorem animi.`,
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'HTML/CSS'],
    projectLink: '/',
    githubLink: '/',
  },
  {
    title: 'Project 2',
    image: 'project-2.jpg',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aut voluptatibus, aperiam quos, eos placeat nisi fugiat id temporibus minus magni dolorum necessitatibus non? Explicabo rem doloremque dolor debitis autem?`,
    tech: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'TypeScript ', 'GraphQL'],
    projectLink: '/',
    githubLink: '/',
  },
  {
    title: 'Project 3',
    image: 'project-3.jpg',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit rerum error veniam totam itaque ipsum soluta iusto, a, libero nesciunt, eum quidem consequatur modi dolore ad delectus at ducimus saepe.`,
    tech: ['Svelte', 'Django', 'Redis', 'AWS Amplify', 'Kotlin '],
    projectLink: '/',
    githubLink: '/',
  },
  {
    title: 'Project 4',
    image: 'project-4.jpg',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, rerum neque nulla optio atque voluptates expedita! Porro veritatis nemo illo ex ea saepe dignissimos, a eum dolore fuga consequatur enim.`,
    tech: ['Next.js', 'Flask', 'Elasticsearch', 'Kubernetes', 'Gatsby'],
    projectLink: '/',
    githubLink: '/',
  },
  {
    title: 'Project 5',
    image: 'project-5.jpg',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit dolore ipsum inventore ratione provident consequuntur in expedita odit, harum quod necessitatibus asperiores magni aut hic, dolorem officia saepe dignissimos.`,
    tech: ['Ember.js', 'Spring', 'Cassandra', 'Firebase', 'Swift'],
    projectLink: '/',
    githubLink: '/',
  },
  {
    title: 'Project 6',
    image: 'project-6.jpg',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, corporis illum cumque inventore, quibusdam tempora tempore, vitae cum minima similique consequatur deserunt ad molestiae esse commodi saepe. Eaque, rerum ipsa!`,
    tech: ['JavaScript', 'HTML/CSS', 'React', 'Express', 'MongoDB'],
    projectLink: '/',
    githubLink: '/',
  },
];

export {
  LogoImage,
  profileImage,
  devName,
  roles,
  socialLinks,
  resumeLink,
  bioParagraphs,
  contactCTA,
  resumeCTA,
  skillCardData,
  projectList,
};
