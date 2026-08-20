const portfolioData = {
  personal: {
    name: "Rehan Mulani",
    role: "Aspiring Software Developer",
    email: "rehanmulani225@gmail.com",
    location: "Navi Mumbai",
    university: "ITM Skills University",
    degree: "BTech in CSE",
    diplomaCollege: "Pillai College",
    diplomaDegree: "Diploma in Computer Science Engineering",
    github: "https://github.com/Rehan225",
    linkedin: "https://www.linkedin.com/in/rehan-mulani-502a79333/",
    bio: "Computer Science student passionate about software engineering, Machine Learning, and Generative AI, continuously expanding my technical skills."
  },

  about: {
    introduction: "I am a Computer Science Engineering student focused on modern software development, Machine Learning, and Artificial Intelligence. Currently pursuing my BTech in CSE at ITM Skills University, I hold a Diploma in Computer Science Engineering from Pillai College. I enjoy solving complex problems and exploring emerging technologies.",
    objective: "Seeking opportunities to apply my technical knowledge in Machine Learning and software development, collaborate on innovative projects, and continuously grow as an engineer.",
    currentFocus: [
      "Learning Machine Learning fundamentals and algorithms",
      "Exploring Artificial Intelligence and Generative AI (GenAI)",
      "Strengthening Data Structures and Algorithms for problem solving",
      "Building practical software applications and Git-based workflows"
    ],
    interests: [
      "AI/ML with GenAI",
      "Problem Solving & Competitive Programming"
    ]
  },

  experience: [
    {
      id: 1,
      role: "Machine Learning Intern",
      company: "Hyperstellar Technology",
      period: "Internship",
      description: "Worked on Machine Learning algorithms, dataset preparation, data preprocessing, and exploratory data analysis to build predictive models."
    },
    {
      id: 2,
      role: "Web Scraping & Data Intern",
      company: "Dezignolics Technologies",
      period: "Internship",
      description: "Performed web scraping using Python and Pandas to extract structured web data and automated database ingestion pipelines into SQL databases."
    }
  ],

  skills: {
    languages: ["Python", "JavaScript (ES6+)", "Java", "C / C++", "SQL"],
    machineLearning: ["Machine Learning Basics", "GenAI Fundamentals", "NumPy", "Pandas", "Scikit-Learn"],
    tools: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab", "npm"],
    databases: ["SQL (Basic)", "PostgreSQL", "JSON / REST APIs"]
  },

  projects: [
    {
      id: 1,
      number: "01",
      category: "DEVOPS & CLOUD",
      title: "Project Chronos",
      description: "A cloud-native DevOps platform for financial market risk intelligence. Automates infrastructure deployment, scaling, and monitoring using AWS, Terraform, Docker, Kubernetes, and Jenkins with Prometheus & Grafana observability.",
      technologies: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform", "Prometheus", "Grafana"],
      github: "https://github.com/Rehan225/project-chronos-devops",
      liveDemo: "",
      type: "Featured Project"
    },
    {
      id: 2,
      number: "02",
      category: "AI & NLP",
      title: "MeetAssist: AI Meeting Summarizer",
      description: "AI-powered meeting intelligence platform that converts audio recordings into transcripts, summaries, decisions, and action items using Whisper and LLMs to automate meeting documentation.",
      technologies: ["React", "JavaScript", "Python", "Whisper AI", "LLM APIs"],
      github: "https://github.com/Rehan225/ai-meeting-dashboard",
      liveDemo: "",
      type: "Featured Project"
    },
    {
      id: 3,
      number: "03",
      category: "WEB DEVELOPMENT",
      title: "Personal Developer Portfolio",
      description: "A modern, responsive personal portfolio website built with React and Vite. Features a custom color palette, modular component structure, centralized data system, and accessible layout.",
      technologies: ["React", "Vite", "JavaScript", "CSS3"],
      github: "https://github.com/Rehan225/personal_portfolio",
      liveDemo: "",
      type: "Featured Project"
    }
  ],

  certifications: [],

  achievements: []
};

export default portfolioData;
