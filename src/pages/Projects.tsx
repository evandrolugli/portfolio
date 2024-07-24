import React from 'react';
import { FaGithub } from 'react-icons/fa';

export function Projects() {
  const projects = [
    {
      title: "Trivia Tech",
      description: "An AI-powered trivia project that generates questions based on selected difficulty and technology. Test your skills!",
      technologies: ["OpenAI", "React", "Express", "Tailwind"],
      image: "https://plus.unsplash.com/premium_photo-1679957333039-285fb913aa2b?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/evandrolugli/trivia-api",
      demo: "https://trivia-web-kohl.vercel.app/",
    },
    {
      title: "Podcast Summarizer",
      description: "Podcast Summarizer, using AI,",
      technologies: ["NodeJs", "ShadCN/UI", "Fastify", "Typescript"],
      image: "https://images.unsplash.com/photo-1482442120256-9c03866de390?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/evandrolugli",
      demo: "https://podcast-summarizer.vercel.app/",
    },
    {
      title: "Chess",
      description: "Chess game",
      technologies: ["Java", "SpringBoot"],
      image: "https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?q=80&w=3125&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/evandrolugli",
      demo: "https://github.com/evandrolugli",
    },
    {
      title: "WeatherMan",
      description: "Weather API",
      technologies: ["C#", "ReactJs", "Javascript"],
      image: "https://plus.unsplash.com/premium_photo-1677744408354-2e0d1ed700a9?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/evandrolugli",
      demo: "https://github.com/evandrolugli",
    },
    // Add more projects as needed
  ];

  return (
    <div className="container mx-auto p-4 dark:bg-gray-800 max-w-3xl">
    <h2 className="text-2xl font-bold mb-4 text-center">Projects</h2>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
      {projects.map((project) => (
        <div key={project.title} className="bg-gray-900 shadow-lg rounded-lg p-4">
          <img src={project.image} alt={project.title} className="mb-2 rounded-lg" style={{ maxHeight: '150px', objectFit: 'cover' }} />
          <h3 className="text-lg font-bold mb-2 text-white">{project.title}</h3>
          <p className="text-gray-400 mb-2">{project.description}</p>
          <div className="flex items-center flex-wrap mb-2">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="mr-2 mb-2 bg-gray-700 text-gray-300 py-1 px-2 rounded-md text-xs">{tech}</span>
            ))}
          </div>
          <div className="flex justify-between">
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Demo</a>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
              <FaGithub className="inline-block text-2xl" />
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}
