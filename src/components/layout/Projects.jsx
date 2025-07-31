import Card from '../shared/Card';
import '../shared/Shapes.css';

export default function Projects(){
    const Projects = [
        {
        id: 1,
        name: "Chess Game",
        image: "./projects/Chess.gif",
        description: "Un juego de mesa clásico para dos jugadores. Proximamente con Sockets TCP.",
        skills: [".NET","C#", "WPF", "XAML"],
        skillUsed: "C#",
        imageWidth: "68",
        projectUrl: "https://github.com/RoyNadiel/Chess"
        },
        {
        id: 2,
        name: "Writer",
        image: "./projects/Writer.gif",
        description: "Un bloc de notas basado en los documento de texto de Windows.",
        skills: [".NET","C#", "WPF", "XAML", "File System"],
        skillUsed: "C#",
        imageWidth: "80",
        projectUrl: "https://github.com/RoyNadiel/Notes"
        },
        {
        id: 3,
        name: "Ecommerce",
        image: "./projects/Ecommerce.gif",
        description: "Un ecommerce para la venta de productos, basados en categoría.",
        skills: ["NextJS", "TypeScript","TailwindCSS", "Sqlite", "Api Rest"],
        skillUsed: "TS",
        imageWidth: "80",
        projectUrl: "https://github.com/RoyNadiel/ECommerce"    
        }
    ]
    
    return (
        <section role='Projects' id='Proyectos'
               className='w-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-[auto_1fr] place-items-center 
               bg-violet-950 px-10 gap-20 py-20'>
               <h4 className='col-span-full text-center text-red-500 text-4xl font-montserrat-alt md:text-5xl lg:mb-0'>
                 PROYECTOS
               </h4>                
               <div className='col-span-full flex flex-wrap justify-center items-center gap-15'>
                 {Projects.map((project) => (
                   <Card key={project.id} {...project} />
                 ))}
               </div>                
        </section>
    )
}