import Card from '../shared/Card';
import '../shared/Shapes.css';
import Nodejs from '../../assets/svg/Nodejs';

export default function Projects(){
const Projects = [
    {
      id:1,
      name: "WrittingJS",
      src: "./projects/WrittingJS.mp4",
      description: "Playground de JavaScript similar a RunJS. Menos permisivo, diseñado para preservar buenas practicas.",
      skills: ["JavaScript", "HTML", "CSS", "Monaco Editor"],
      skillUsed: "JS",
      imageWidth: "80",
      projectUrl: "https://writtingjs.pages.dev"
    },
    {
    id: 2,
    name: "Chess Game",
    src: "./projects/Chess.mp4",
    description: "Un juego de mesa clásico para dos jugadores. Proximamente con Sockets TCP.",
    skills: [".NET","C#", "WPF", "XAML"],
    skillUsed: "C#",
    imageWidth: "68",
    projectUrl: "https://github.com/RoyNadiel/Chess"
    },
    {
    id: 3,
    name: "Writer",
    src: "./projects/Writer.mp4",
    description: "Un bloc de notas basado en los documento de texto de Windows.",
    skills: [".NET","C#", "WPF", "XAML", "File System"],
    skillUsed: "C#",
    imageWidth: "80",
    projectUrl: "https://github.com/RoyNadiel/Notes"
    },
    {
    id: 4,
    name: "Ecommerce",
    src: "./projects/Ecommerce.mp4",
    description: "Un ecommerce para la venta de productos, basados en categoría.",
    skills: ["NextJS", "TypeScript","TailwindCSS", "Sqlite", "Api Rest"],
    skillUsed: "TS",
    imageWidth: "80",
    projectUrl: "https://github.com/RoyNadiel/ECommerce"    
    }
]


    return (
        <section role='Projects' id='Proyectos'
                className='w-full relative min-h-screen grid grid-cols-1 grid-rows-[auto_1fr] place-items-center  gap-15 
                md:grid-cols-2 md:px-10
                lg:grid-cols-3 lg:gap-5
                xl:px-20'>

                <h4 className='col-span-full inline-flex items-center gap-2 mt-25 text-center text-red-500 text-4xl font-montserrat-alt tracking-widest
                 md:text-5xl'>
                  PROYECTOS
                  <svg className='w-12 md:w-15 shrink-0' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M13.9868 5L12 12.4149L10.0132 19.8297" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
                </h4>

                {Projects.map((project) => (
                  <Card key={project.id} {...project} />
                ))}                                                                
        </section>
    )
}