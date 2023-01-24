import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

// Name, will display in hero section and footer
export const devName = 'Kyle Tang';

// Roles array for typewriter effect in hero
export const roles = ['Full Stack Developer', 'Designer', 'Coder'];

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
    text: `When I'm not coding on my laptop, skimming through documentation, or searching Google for solutions to various issues, I enjoy cooking, movies, exercising, video games, playing guitar, and learning new skills and languages.`,
  },
  {
    id: 'paragraph4',
    text: `And yes, I do like blue. Blue is cool.`,
  },
];

// Summary and skills for skill cards
export const skillCardData = [
  {
    id: 'frontEndSkills',
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
  {
    id: 'backEndSkills',
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
    description: `CodeFlow is an interactive social media MERN stack SPA that gives developers a creative hub to show off their coding projects through posts, add friends, and join the discussion with other developers in threaded comments.`,
    tech: ['MERN', 'GraphQL', 'JWT', 'Tagify', 'Bootstrap'],
    projectLink: 'https://code-flow-app.herokuapp.com/',
    githubLink: 'https://github.com/cnohilly/codeflow',
  },
  {
    title: 'Watch It Later',
    image: 'watch-it-later.png',
    description: `A full-stack app allowing users to search for movies and TV shows, create accounts to add them to their personal watchlist saved in a SQL database, leave comments, and rate movies.`,
    tech: ['Node', 'MySQL', 'Sequelize', 'Handlebars', 'Bulma', 'MVC', 'TMDB API'],
    projectLink: 'https://watch-it-later.herokuapp.com/',
    githubLink: 'https://github.com/cnohilly/watch-it-later',
  },
  {
    title: 'Movie TV Watchlist',
    image: 'movie-tv-watchlist.png',
    description: `Looking for something to watch? Use this app to search for movies and TV shows through the TMDB's API as well as add them to a personal watchlist saved in the browser's local storage.`,
    tech: ['HTML', 'CSS', 'JavaScript', 'Bulma', 'TMDB API'],
    projectLink: 'https://cnohilly.github.io/movie-tv-watchlist/',
    githubLink: 'https://github.com/cnohilly/movie-tv-watchlist',
  },
  {
    title: 'Shop-Shop',
    image: 'shop-shop.png',
    description: `An e-commerce full-stack MERN application that uses Redux to manage global state. Users can create accounts to add products to their shopping cart and checkout using the Stripe API.`,
    tech: ['MERN', 'JavaScript', 'GraphQL', 'JWT', 'Stripe', 'Redux'],
    projectLink: 'https://shop-shop-75043.herokuapp.com',
    githubLink: 'https://github.com/kt946/awesome-shop-shop-redux',
  },
  {
    title: 'Pizza Hunt',
    image: 'pizza-hunt.png',
    description: `Hungry for some pizza but can't decide on your toppings? Check out Pizza Hunt, an app that uses MongoDB to store custom pizza recipies and user comments.`,
    tech: ['Node', 'Express', 'NoSQL', 'MongoDB', 'Mongoose'],
    projectLink: 'https://pizza-hunt-13648.herokuapp.com/',
    githubLink: 'https://github.com/kt946/pizza-hunt',
  },
  {
    title: 'The Epic Tech Blog',
    image: 'the-epic-tech-blog.png',
    description: `A CMS-style blog site using the MVC paradigm for discussing technology through blog posts and comments.`,
    tech: ['Node', 'Express', 'MySQL', 'Handlebars', 'Bootstrap', 'MVC'],
    projectLink: 'https://sheltered-mesa-54132.herokuapp.com',
    githubLink: 'https://github.com/kt946/epic-tech-blog-MVC',
  },
];
