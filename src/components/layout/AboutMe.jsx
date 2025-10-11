import '../shared/Shapes.css';
import {
  HTML,
  CSS,
  TailwindCSS,
  JS,
  TypeScript,
  CSHARP,
  Git,
  React,
  NextJS,
  NodeJS,
  Hono,
  Vite,
  Cloudflare,
} from '../../../public/skills.jsx';

export default function AboutMe() {
  return (
    <section
      role="Sobre Mi"
      id="Sobre Mi"
      className="w-full min-h-screen flex flex-col items-center justify-center p-10"
    >
      <h2
        className="text-center text-red-600 text-4xl font-montserrat-alt tracking-widest mt-20 mb-10 
                md:mt-0 md:text-5xl"
      >
        SOBRE MÍ
      </h2>

      <article className="mx-auto max-w-6xl">
        <p className="text-blue-200 text-lg md:text-2xl font-league-spartan mb-6">
          Nací en el 99. Conocí la programación gracias a la universidad.
          Estando en ella he hecho varios proyectos, algunos en C, y la mayoría
          en C#. <br />
          Sin embargo, conocí la progamación web en mis estudios autodidactas,
          investigando por mi cuenta, al cual ahora le dedico la mayoria de mi
          tiempo libre.
        </p>
        <p className="text-blue-200 text-lg md:text-2xl font-league-spartan mb-6">
          Tengo varios pasa-tiempos desde antes de la programación:
        </p>
        <p className="text-blue-200 text-lg md:text-2xl font-league-spartan mb-10">
          → <span className="text-red-300">Me gusta escribir;</span> escritos en
          verso y otros en prosa, con los que algunas personas suelen
          identificarse.
          <br />→ <span className="text-blue-300">Amo la música</span> desde muy
          pequeño, y según Nietzsche, sin ella la vida sería un error.
          <br />→ <span className="text-amber-300">Hago ejercicio</span>,
          principalmente Calistenia. Me gusta estar en forma y priorizo la
          salud.
          <br />
        </p>
      </article>

      <ul className="flex flex-wrap items-center justify-center gap-5 list-none list-inside col-span-full">
        <li className="w-8 p-2 lg:w-14 lg:p-4 skillsImg relative group rounded-full bg-amber-500/20 hover:shadow-xl hover:shadow-orange-500/50">
          <HTML></HTML>
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-violet-950 border border-orange-500 text-orange-500 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            HTML
          </span>
        </li>
        <li className="w-8 p-2 lg:w-14 lg:p-4 skillsImg relative group rounded-full bg-blue-500/20 hover:shadow-xl hover:shadow-blue-500/50">
          <CSS></CSS>
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-violet-950 border border-blue-500 text-blue-500 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            CSS
          </span>
        </li>
        <li className="w-8 p-2 lg:w-14 lg:p-4 skillsImg relative group rounded-full bg-blue-600/20 hover:shadow-xl hover:shadow-blue-600/50">
          <TailwindCSS></TailwindCSS>
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-violet-950 border border-blue-600 text-blue-600 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            TailwindCSS
          </span>
        </li>
        <li className="w-8 p-2 lg:w-14 lg:p-4 skillsImg relative group rounded-full bg-yellow-500/20 hover:shadow-xl hover:shadow-yellow-500/50">
          <JS></JS>
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-violet-950 border border-yellow-500 text-yellow-500 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            JavaScript
          </span>
        </li>
        <li className="w-8 p-2 lg:w-14 lg:p-4 skillsImg relative group rounded-full bg-blue-300/20 hover:shadow-xl hover:shadow-blue-400/50">
          <TypeScript></TypeScript>
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-violet-950 border border-blue-400 text-blue-400 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            TypeScript
          </span>
        </li>
        <li className="w-8 p-2 lg:w-14 lg:p-4 skillsImg relative group rounded-full bg-purple-500/20 hover:shadow-xl hover:shadow-purple-500/50">
          <CSHARP></CSHARP>
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-violet-950 border border-purple-500 text-purple-500 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            C#
          </span>
        </li>
        <li className="w-8 p-2 lg:w-14 lg:p-4 skillsImg relative group rounded-full bg-amber-500/20 hover:shadow-xl hover:shadow-amber-500/50">
          <Git></Git>
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-violet-950 border border-amber-500 text-amber-500 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Git
          </span>
        </li>
        <li className="w-8 p-2 lg:w-14 lg:p-4 skillsImg relative group rounded-full bg-pink-500/20 hover:shadow-xl hover:shadow-pink-500/50">
          <Vite></Vite>
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-violet-950 border border-pink-500 text-pink-500 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Vite
          </span>
        </li>
        <li className="w-8 p-2 lg:w-14 lg:p-4 skillsImg relative group rounded-full bg-amber-600/20 hover:shadow-xl hover:shadow-amber-600/50">
          <Cloudflare></Cloudflare>
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-violet-950 border border-amber-600 text-amber-600 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Cloudflare
          </span>
        </li>
        <li className="w-8 p-2 lg:w-14 lg:p-4 skillsImg relative group rounded-full bg-blue-500/20 hover:shadow-xl hover:shadow-blue-500/50">
          <React></React>
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-violet-950 border border-blue-500 text-blue-500 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            React
          </span>
        </li>
        <li className="w-8 p-2 lg:w-14 lg:p-4 skillsImg relative group rounded-full bg-black/20 hover:shadow-xl hover:shadow-white/50">
          <NextJS></NextJS>
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-violet-950 border border-white text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            NextJS
          </span>
        </li>
        <li className="w-8 p-2 lg:w-14 lg:p-4 skillsImg relative group rounded-full bg-green-500/20 hover:shadow-xl hover:shadow-green-500/50">
          <NodeJS></NodeJS>
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-violet-950 border border-green-500 text-green-500 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            NodeJS
          </span>
        </li>
        <li className="w-8 p-2 lg:w-14 lg:p-4 skillsImg relative group rounded-full bg-orange-500/20 hover:shadow-xl hover:shadow-orange-500/50">
          <Hono></Hono>
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-violet-950 border border-orange-500 text-orange-500 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Hono
          </span>
        </li>
      </ul>
    </section>
  );
}
