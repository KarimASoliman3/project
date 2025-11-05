import { ExternalLink, Github } from "lucide-react";
import linkedPost from "../assets/linked-post.png";
import skillpath from "../assets/skillpath.png";
import cruds from "../assets/cruds.png";
import weatherApi from "../assets/weather-api.png";
import kasper from "../assets/kasper.png";
import devfolio from "../assets/devfolio.png";
import bookmarker from "../assets/bookmarker.png";
import glassFiltter from "../assets/glass-filtter.png";
import daniels from "../assets/daniels.png";
import freshify from "../assets/freshify.png"

const Projects = () => {
  const projects = [
    {
      title: "Freshify - E-commerce app",
      description:
        "A modern e-commerce web app built with Next.js and TypeScript, featuring dynamic product listings, cart management, and a responsive shopping experience.",
      image: freshify,
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "CSS", "HTML"],
      github: "https://github.com/KarimASoliman3/freshify",
      demo: "https://freshify-beta.vercel.app/",
    },
    {
      title: "Linked Post - Social App",
      description:
        "A React app allowing users to create, edit, and delete posts and comments.",
      image: linkedPost,
      tech: ["React", "JavaScript", "Vite"],
      github: "https://github.com/KarimASoliman3/Social-app",
      demo: "https://social-app-flax-beta.vercel.app/",
    },
    {
      title: "Skillpath - E-Learning website",
      description:
        "A platform for skill tracking, learning paths or skill development management.",
      image: skillpath,
      tech: ["React", "JavaScript", "tailwind"],
      github: "https://github.com/KarimASoliman3/Skillpath",
      demo: "https://skillpath-k7w8-5nxaivemp-karimasoliman3s-projects.vercel.app/",
    },
    {
      title: "Weather API App",
      description:
        "A web app that fetches and displays real-time weather data (current, forecast) using a weather API like OpenWeatherMap.",
      image: weatherApi,
      tech: ["JavaScript", "HTML", "CSS", "Fetch API", "OpenWeatherMap API"],
      github: "https://github.com/KarimASoliman3/Weather-API",
      demo: "https://karimasoliman3.github.io/Weather-API/",
    },
    {
      title: "CRUDS",
      description:
        "A CRUD (Create, Read, Update, Delete) application to manage data through a user interface.",
      image: cruds,
      tech: ["JavaScript", "bootstrap", "html"],
      github: "https://github.com/KarimASoliman3/CRUDS",
      demo: "https://karimasoliman3.github.io/CRUDS/",
    },
    {
      title: "Bookmarker",
      description:
        "A web app to save, edit, and manage bookmarks (URLs), using browser storage or a simple back end.",
      image: bookmarker,
      tech: ["JavaScript", "HTML", "CSS", "LocalStorage"],
      github: "https://github.com/KarimASoliman3/Bookmarker",
      demo: "https://karimasoliman3.github.io/Bookmarker/",
    },

    {
      title: "Devfolio Template",
      description:
        "A personal portfolio / developer resume template built using HTML, CSS, and Bootstrap (or chosen frontend stack).",
      image: devfolio,
      tech: ["HTML", "CSS", "Bootstrap"],
      github: "https://github.com/KarimASoliman3/Devfolio-template-",
      demo: "https://karimasoliman3.github.io/Devfolio-template-/",
    },
    {
      title: "Daniels Template",
      description:
        "A clean, modern landing / portfolio template built with HTML, CSS (and maybe JS).",
      image: daniels,
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/KarimASoliman3/Daniels-template-",
      demo: "https://daniels-template.netlify.app/",
    },

    {
      title: "Kasper Temp HTML & CSS",
      description:
        "A static website or template built using HTML and CSS (maybe includes responsive layouts or design templates).",
      image: kasper,
      tech: ["HTML", "CSS"],
      github: "https://github.com/KarimASoliman3/temp2_html_css",
      demo: "https://peppy-khapse-95d78f.netlify.app/",
    },
    {
      title: "Glass Filter",
      description:
        "A UI component / web app implementing a glassmorphism filter (blur + translucency) effect over content or images.",
      image: glassFiltter,
      tech: ["HTML", "CSS", "JavaScript", "CSS backdrop-filter"],
      github: "https://github.com/KarimASoliman3/Glass-filter",
      demo: "https://karimasoliman3.github.io/Glass-filter/",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A selection of my recent work and personal projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-slate-50 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
                  <a
                    target="_blank"
                    href={project.github}
                    className="p-3 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    target="_blank"
                    href={project.demo}
                    className="p-3 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
