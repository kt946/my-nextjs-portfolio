import { FaGithub, FaLinkedinIn, FaRegSmileWink } from 'react-icons/fa';
import { HiOutlineMail, HiCode, HiDatabase, HiOutlineDocumentDownload } from 'react-icons/hi';

// Logo Image
export const LogoImage = 'logo.svg';

// Profile Image
export const profileImage = 'profile.png';

// Name, will display in title, hero section, and footer
export const devName = 'Kyle Tang';

// Roles array for typewriter effect in hero
export const roles = ['Full Stack Developer', 'Data Analyst', 'Designer', 'Traveler', 'Coffee Lover'];

// Social URL Links
export const socialLinks = [
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
export const resumeLink = 'https://drive.google.com/file/d/1aUiFaAlnXzcr3Nrz8uu4RTZr9klqImxv/view?usp=sharing';

// Bio paragraphs for About section
export const bioParagraphs = [
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
export const contactCTA = {
  message: `Don't be a stranger. Feel free to reach out and connect with me!`,
  buttonMessage: 'Get in touch',
  buttonIcon: <FaRegSmileWink />,
  linkURL: '#contact',
};

export const resumeCTA = {
  message: `Want to see more of what I can do? Check out my resume.`,
  buttonMessage: 'Download resume',
  buttonIcon: <HiOutlineDocumentDownload />,
  linkURL: resumeLink,
};

// icon, title, summary, and skills list for Skill Cards
export const skillCardData = [
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
export const projectList = [
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
    title: 'Sakura Flashcards',
    image: 'sakura-flashcards.jpg',
    description: `Sakura Flashcards is a Japanese language flashcard app inspired by Quizlet. Users can study hiragana, katakana, kanji and vocabulary with a variety of interactive flashcard sets.`,
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    projectLink: 'https://sakura-flashcards.vercel.app/',
    githubLink: 'https://github.com/kt946/sakura-flashcards',
  },
  {
    title: 'BlinkReader',
    image: 'blinkreader.jpg',
    description: 'BlinkReader is a simple speed reading web application designed to enhance reading speed through streamlined functionality. Users can easily paste text into the app and practice speed reading with an optimized display and customizable controls.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Google Fonts', 'Vite'],
    projectLink: 'https://blinkreader.netlify.app/',
    githubLink: 'https://github.com/kt946/blink-reader',
  },
  {
    title: 'Movie TV Watchlist',
    image: 'movie-tv-watchlist.png',
    description: `Movie TV Watchlist is a web application that allows users to search for movies and TV shows through TMDB's API. Users can easily add their favorite content to a personal watchlist, which is conveniently saved in the browser's local storage for easy access.`,
    tech: ['HTML', 'CSS', 'JavaScript', 'Bulma', 'TMDB API'],
    projectLink: 'https://cnohilly.github.io/movie-tv-watchlist/',
    githubLink: 'https://github.com/cnohilly/movie-tv-watchlist',
  },
];
