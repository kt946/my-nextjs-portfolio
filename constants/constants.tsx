import { FaGithub, FaLinkedinIn, FaRegSmileWink } from 'react-icons/fa';
import { HiOutlineMail, HiCode, HiDatabase, HiOutlineDocumentDownload } from 'react-icons/hi';

// Logo Image
const LogoImage = 'logo.svg';

// Profile Image
const profileImage = 'profile.png';

// Name, will display in title, hero section, and footer
const devName = 'Kyle Tang';

// Roles array for typewriter effect in hero
const roles = ['Full Stack Developer', 'Designer', 'Coder'];

// Social URL Links
const socialLinks = [
  {
    name: 'email',
    icon: <HiOutlineMail />,
    url: 'mailto:ktang1151@gmail.com',
  },
  {
    name: 'linkedin',
    icon: <FaLinkedinIn />,
    url: 'https://www.linkedin.com/in/kyle-tang-',
  },
  {
    name: 'github',
    icon: <FaGithub />,
    url: 'https://github.com/kt946',
  },
];

// Resume URL link
const resumeLink = 'https://drive.google.com/file/d/1aUiFaAlnXzcr3Nrz8uu4RTZr9klqImxv/view?usp=sharing';

// Bio paragraphs for About section
const bioParagraphs = [
  {
    id: 'paragraph1',
    text: `Hi everyone! My name is Kyle and I'm a full stack web developer with a B.A. in Psychology from Rutgers University and a passion for technology, creativity, and learning. I've completed a certificate in Full Stack Web Development from the Rutgers Coding Bootcamp.`,
  },
  {
    id: 'paragraph2',
    text: `As a quick learner and versatile problem-solver, I'm able to collaborate with teams to develop projects with simple, elegant designs and robust databases. I'm eager to demonstrate my newly acquired skills and build innovative applications that help me grow as a developer and provide users with immersive digital experiences.`,
  },
  {
    id: 'paragraph3',
    text: `When I'm not coding on my laptop, skimming through documentation, or searching Google for solutions to various issues, I enjoy cooking, movies, video games, playing guitar, and learning new skills and languages.`,
  },
  {
    id: 'paragraph4',
    text: `And yes, I do like blue. Blue is cool.`,
  },
];

// objects containing data for Call to Action sections
const contactCTA = {
  message: `Don't be a stranger. Feel free to reach out and connect with me!`,
  buttonMessage: 'Get in touch',
  buttonIcon: <FaRegSmileWink />,
  linkURL: '#contact',
};

const resumeCTA = {
  message: `Want to see more of what I can do? Check out my resume.`,
  buttonMessage: 'Download resume',
  buttonIcon: <HiOutlineDocumentDownload />,
  linkURL: resumeLink,
};

// icon, title, summary, and skills list for Skill Cards
const skillCardData = [
  // for front-end
  {
    id: 'frontEndSkills',
    icon: <HiCode />,
    title: 'Front-End Development',
    summary:
      'I am passionate about bringing ideas to life and creating visually stunning projects using a variety of modern technologies and frameworks.',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'jQuery',
      'Responsive Design',
      'Bootstrap',
      'Bulma',
      'React',
      'Redux',
      'Tailwind CSS',
      'Next.js',
      'Framer Motion',
    ],
  },
  // for back-end
  {
    id: 'backEndSkills',
    icon: <HiDatabase />,
    title: 'Back-End Development',
    summary:
      'I enjoy finding solutions to complex problems and developing powerful server-side code with a focus on efficiency and security.',
    skills: [
      'Git',
      'Github',
      'JSON',
      'AJAX',
      'Node.js',
      'NPM',
      'Express.js',
      'REST',
      'SQL',
      'MySQL',
      'Sequelize',
      'MVC',
      'Handlebars',
      'NoSQL',
      'MongoDB',
      'Mongoose',
      'GraphQL',
      'MERN',
    ],
  },
];

// Project List for Work section
const projectList = [
  {
    title: 'CodeFlow',
    image: 'codeflow.png',
    description: `CodeFlow is a social media application built on the MERN stack, offering developers a platform to showcase their coding projects through interactive posts. With features like friend requests and threaded comments, CodeFlow provides a creative space for developers to engage in discussions with other like-minded individuals.`,
    tech: ['MERN', 'GraphQL', 'JWT', 'Tagify', 'Bootstrap'],
    projectLink: 'https://code-flow-app.herokuapp.com/',
    githubLink: 'https://github.com/cnohilly/codeflow',
  },
  {
    title: 'Watch It Later',
    image: 'watch-it-later.png',
    description: `Watch It Later is a full-stack application that enables users to search for movies and TV shows, create accounts, and add their selected content to a personal watchlist, all of which is stored in a SQL database. Additionally, users can leave comments and rate the movies to share their feedback with others.`,
    tech: ['Node', 'MySQL', 'Sequelize', 'Handlebars', 'Bulma', 'MVC', 'TMDB API'],
    projectLink: 'https://watch-it-later.herokuapp.com/',
    githubLink: 'https://github.com/cnohilly/watch-it-later',
  },
  {
    title: 'Sakura Study',
    image: 'sakura-study.png',
    description: `Sakura Study is a language learning app that offers fun and interactive quizzes to help users study Japanese. Inspired by Duolingo, Sakura Study provides a convenient and engaging way to practice hiragana, katakana, kanji, and vocabulary.`,
    tech: ['MERN', 'Tailwind CSS', 'GraphQL', 'JWT', 'Redux'],
    projectLink: 'https://sakurastudy.herokuapp.com/',
    githubLink: 'https://github.com/kt946/japanese-quiz-mern-app',
  },
  {
    title: 'Movie TV Watchlist',
    image: 'movie-tv-watchlist.png',
    description: `Movie TV Watchlist is a web application that allows users to search for movies and TV shows through TMDB's API. Users can easily add their favorite content to a personal watchlist, which is conveniently saved in the browser's local storage for easy access.`,
    tech: ['HTML', 'CSS', 'JavaScript', 'Bulma', 'TMDB API'],
    projectLink: 'https://cnohilly.github.io/movie-tv-watchlist/',
    githubLink: 'https://github.com/cnohilly/movie-tv-watchlist',
  },
  {
    title: 'Shop-Shop',
    image: 'shop-shop.png',
    description: `Shop-Shop is an e-commerce application built on the MERN stack, which leverages Redux to manage global state. With the ability to create accounts, users can easily add products to their shopping cart and checkout using the secure Stripe API.`,
    tech: ['MERN', 'JavaScript', 'GraphQL', 'JWT', 'Stripe', 'Redux'],
    projectLink: 'https://shop-shop-75043.herokuapp.com',
    githubLink: 'https://github.com/kt946/awesome-shop-shop-redux',
  },
  {
    title: 'Pizza Hunt',
    image: 'pizza-hunt.png',
    description: `Pizza Hunt is an application that provides users with a platform to discover and explore custom pizza recipes. Utilizing MongoDB, Pizza Hunt stores an extensive collection of recipes, along with user comments and feedback, to help users make informed decisions when selecting toppings for their perfect pizza.`,
    tech: ['Node', 'Express', 'NoSQL', 'MongoDB', 'Mongoose'],
    projectLink: 'https://pizza-hunt-13648.herokuapp.com/',
    githubLink: 'https://github.com/kt946/pizza-hunt',
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
