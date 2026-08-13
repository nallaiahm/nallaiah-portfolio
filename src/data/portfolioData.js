// ─────────────────────────────────────────────────────────────
// All editable portfolio content lives here.
// Update this file to change text, links, projects, etc.
// Replace src/assets/profile.jpg and src/assets/resume.pdf directly.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Nallaiah M',
  title: 'Software Engineer | C Programmer | Problem Solver | Full Stack Developer',
  tagline:
    'Computer Science student building efficient, scalable software and sharpening problem-solving skills one project at a time.',
  email: 'nallaiahmari4@gmail.com',
  phone: '+91 6369098239',
  location: 'Tirunelveli, Tamil Nadu, India',
  // Replace these placeholders with your real profile links
  linkedin: 'https://www.linkedin.com/in/nallaiah-m-9571842b5/',
  github: 'https://github.com/nallaiahm',
  leetcode: 'https://leetcode.com/u/NALLAIAH_001/',
}

export const about = {
  paragraphs: [
    "I'm a motivated Computer Science student with strong problem-solving skills and proficiency in C Programming, React.js, Node.js and MySQL.",
    "I'm passionate about software engineering and building efficient, scalable software solutions.",
    "I'm eager to contribute to real-world software development while continuously learning new technologies.",
  ],
  stats: [
    { label: 'CGPA', value: '9.087' },
    { label: 'Internships', value: '4' },
    { label: 'Projects Built', value: '4' },
    { label: 'Certifications', value: '6' },
  ],
}

export const skillCategories = [
  {
    title: 'Problem Solving',
    skills: ['Logical Reasoning', 'Analytical Thinking', 'Quantitative Aptitude', 'Mathematical Problem Solving'],
  },
  {
    title: 'Programming',
    skills: ['C', 'C++', 'Java', 'Python', 'SQL'],
  },
  {
    title: 'Software Development',
    skills: ['Data Structures — Basics', 'Algorithms — Basics', 'Object-Oriented Programming'],
  },
  {
    title: 'Full Stack',
    skills: ['React.js', 'Node.js', 'HTML5', 'CSS3', 'JavaScript ES6+', 'Bootstrap'],
  },
  {
    title: 'Backend',
    skills: ['Database Query Optimization', 'Server-side Scripting', 'MVC', 'REST API Integration'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'MongoDB Basics'],
  },
  {
    title: 'Tools & Technologies',
    skills: ['Git', 'GitHub', 'Linux Administration', 'Visual Studio Code', 'Power BI'],
  },
  {
    title: 'CS Fundamentals',
    skills: ['Operating Systems — Basics', 'DBMS', 'Computer Networks — Basics'],
  },
  {
    title: 'Soft Skills',
    skills: ['Problem Solving', 'Technical Communication', 'Adaptability'],
  },
]

export const experience = [
  {
    company: 'Cognifyz',
    role: 'Full Stack Developer Intern',
    period: 'Aug 2025 - Sep 2025',
    points: [
  'Developed responsive and user-friendly frontend interfaces using React.js, HTML, CSS, and JavaScript.',
  'Integrated REST APIs to connect frontend applications with backend services.',
  'Implemented full stack features involving data handling, application logic, and user interactions.',
  'Collaborated with the development team to enhance application performance, functionality, and user experience.',
],
  },
  {
    company: 'Bluetstock Fintech',
    role: 'Data Analyst Intern',
    period: 'Nov 2025 - Dec 2025',
    points: [
      'Worked on financial dataset analysis to identify patterns and insights.',
      'Performed data preprocessing and visualization using Python tools.',
      'Assisted in building reports and dashboards for analytical tasks.',
      'Supported data-driven decision making within fintech analytics workflows.',
    ],
  },
  
  {
    company: 'Deloitte',
    role: 'Data Analyst Job Simulation',
    period: '',
    points: [
      'Applied data analytics techniques to clean and interpret complex business datasets.',
      'Generated actionable insights to support data-driven decision-making processes.',
    ],
  },
  {
    company: 'Tata Global Business',
    role: 'Data Analysis with Gen AI Job Simulation',
    period: '',
    points: [
      'Leveraged Generative AI tools to automate data processing and analysis.',
      'Developed visualization workflows to transform raw data into strategic reports.',
      'Assisted in developing responsive frontend interfaces using modern web technologies.',
      'Worked on backend integration and REST API connectivity for web applications.',
      'Implemented full stack features including data handling and application logic.',
      'Collaborated with development teams to improve performance and functionality.',
    ],
  },

]

export const projects = [
  {
    name: 'AI-Powered Architectural Design and 3D Visualization System',
    description:
      'A system that generates building floor plans from user inputs, applying AI logic to create optimized architectural layouts with integrated 3D visualization for interactive design preview.',
    features: [
      'Generates floor plans from user-provided inputs',
      'AI logic for optimized architectural layouts',
      'Interactive 3D visualization for design preview',
    ],
    tech: ['React.js', 'REST API', 'Machine Learning', '3D Visualization'],
    github: ' https://github.com/nallaiahm/3d-architecture-diagram-generator', // add your repo link
    demo: ' https://nallaiahm.github.io/3d-architecture-diagram-generator/', // add your live demo link
    featured: true,
  },
  {
  name: 'Best Friend Challenge',
  description:
    'A real-time multiplayer quiz application designed for two friends to test how well they understand each other through personalized questions and answers.',
  features: [
    'Create and customize quizzes with personalized questions',
    'Real-time multiplayer quiz experience using a shared room code',
    'Timed questions with answer locking for fair gameplay',
    'Compares both players’ answers and calculates a match percentage',
    'Reveals the final compatibility result and winner',
  ],
  tech: ['React.js', 'Node.js', 'Express.js', 'Axios', 'CSS'],
  github: 'https://github.com/nallaiahm/best-friend-challenge',
  demo: ' https://nallaiahm.github.io/best-friend-challenge/',
  featured: true,
},
{
  name: 'SpeakEasy',
  description:
    'A multilingual speech and text conversion system that enables users to convert speech to text and text to speech, supporting interactive communication across multiple languages.',
  features: [
    'Converts spoken audio into text using speech recognition',
    'Converts written text into natural speech using text-to-speech technology',
    'Supports multiple languages for speech and text conversion',
    'Provides an interactive and user-friendly interface for communication',
    'Enables users to switch between speech-to-text and text-to-speech modes',
  ],
  tech: ['React.js', 'JavaScript', 'Web Speech API', 'HTML5', 'CSS3'],
  github: 'https://github.com/nallaiahm/speech-text-conversion-system',
  demo: ' https://nallaiahm.github.io/speech-text-conversion-system/',
  featured: false,
},
  {
    name: 'Forest Fire Risk Prediction and Autonomous Response System',
    description:
      'A system that predicts forest fire risk using environmental data and machine learning, with an automated response mechanism to trigger water sprinklers and reduce fire impact.',
    features: [
      'Predicts forest fire risk from environmental data',
      'Machine learning for early fire detection analysis',
      'Automated sprinkler response mechanism',
    ],
    tech: ['Machine Learning', 'Python', 'IoT', 'Data Analysis'],
    github: 'https://github.com/nallaiahm/ai-forest-fire-risk-prediction',
    demo: ' https://nallaiahm.github.io/ai-forest-fire-risk-prediction/',
    featured: false,
  },
]

export const education = [
  {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'Francis Xavier Engineering College',
    detail: 'CGPA: 9.087',
    period: 'Augest 2023 – March 2027',
    current: true,
  },
   {
    degree: 'Cyber Security and Essentials',
    institution: 'Francis Xavier Engineering College',
    period: 'November 2024 – March 2027',
    current: true,
  },
  {
    degree: 'HSC',
    institution: 'Government Model School',
    detail: 'Percentage: 86%',
    period: '2023',
    current: false,
  },
]

export const certifications = [
  { title: 'Minor Degree Course in Cyber Security', issuer: 'Francis Xavier Engineering College' },
    { title: 'Java Programing', issuer: 'Oracle' },
  { title: 'MongoDB', issuer: 'MongoDB Basics' },
  { title: 'CCNA – Networking Fundamentals', issuer: 'Cisco Networking Academy' },
  { title: 'Linux System Administration', issuer: 'Red Hat' },
  { title: 'Python — 93%', issuer: 'NPTEL' },
  { title: 'Introduction to IoT — 83%', issuer: 'NPTEL' },
]

export const achievements = [
  {
    title: 'AI Sustainability International Hackathon',
    org: 'Canadian University Dubai',
    points: [],
  },
  {
    title: 'Outstanding Dicipiline and Comitment Awared',
    org: 'FX Engineering College',
    points: [],
  },
  
  {
    title: '1st Prize in Code Catalyst Project Presentation ',
    org: 'FX Engineering College',
    points: [],
  },
  
  {
    title: '1st Prize in TechClash C Programming Competition ',
    org: 'FX Engineering College',
    points: [],
  },
 
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]
