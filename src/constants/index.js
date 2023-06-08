import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    grilScript,
    hacktober,
    social,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon:mobile,
    },
    {
      title: "Frontend Developer",
      icon: web ,
   },
    {
      title: "video editor",
      icon: creator,
    },
   
    {
      title: "Tech-Enthusiast",
      icon : backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Contributor",
      company_name: "Girlscript Summer of code",
      icon: grilScript,
      iconBg: "#383E56",
      date: "March 2022 - may 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with people across the world.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Open-Source Contributor",
      company_name: "Social Summer of Code",
      icon: social,
      iconBg: "#E6DEDD",
      date: "jun 2022 - oct 2022 || jun 2023",
      points: [
        "Developing and contributing to web applications using HTML , CSS, JavaScript and other related technologies.",
        "Collaborating with peole ande mergeing pull-requests.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Open-source Contributors ",
      company_name: "HactoberFest",
      icon: hacktober,
      iconBg: "#383E56",
      date: "Oct 2022 - Oct 2023",
      points: [
        "Developing and maintaining web applications using React.js, JavaScript and other related technologies.",
        "Collaborating witfellow developers to create resposive sites which are deployable on web.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Rajeev Krishna",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Crypto-Tracker",
      description:
        "Developed a web application that shows Real Time price of top 50 cryptocurrencies in the world using coinGeko api anlso used the same api for converting the currency rate in inr, gbr, dollars etc",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "APi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://621b3a8cd9ab74f32f50e342--suspicious-liskov-1ace49.netlify.app/",
      website_link: "https://621b3a8cd9ab74f32f50e342--suspicious-liskov-1ace49.netlify.app/",
    },
    {
      name: "GPT-landing page",
      description:
        "Designed and developed the captivating landing page of the GTP website using React, showcasing UI/UX skills .Leveraged React components and libraries to create an interactive and responsive user interface ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "TaildwindCSS",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
      website_link: "https://react-gpt3-beige.vercel.app/ ", 
    },
    {
      name: "News App",
      description:
        "created a news app using ReactJs . Fetcing real time news from news API .Also created custom sections according to diffrent news . Helped to leveraging the power of React components, state management, and routing to create a robust and scalable application",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "newsAPI",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Cypher1002/news-App",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };