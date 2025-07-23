import Polygon from '../shared/Polygon';

export default function Hero(){
    return(
        <section role="Hero"
            className="w-screen h-screen flex justify-center items-center px-15">
                <section role="Centro, Presentación"
                        className="h-screen flex flex-col justify-evenly items-center gap-10 text-center">
                    <Polygon/>
                    <div>
                    <h1 className="flex flex-col items-center justify-center gap-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400 font-fira-code
                    md:text-2xl md:flex-row
                    lg:text-base">
                        FullStack Developer
                        <svg className='w-15 h-15 shrink-0' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="#EF4444" stroke-width="1.5" stroke-linecap="round"></path> <path d="M13.9868 5L12 12.4149L10.0132 19.8297" stroke="#EF4444" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="#EF4444" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                    </h1>                                                
                    <p className="max-w-200 text-lg font-fira-code text-red-400 mt-10 md:mt-2">
                        Autodidacta y Universitario.             
                    </p>
                    <p className="max-w-200 text-lg font-fira-code text-red-400">
                        Experiencia en desarrollo web y apps de escritorio.                    
                    </p>
                    <p className='max-w-200 text-xl font-libertinus text-blue-500 mt-6'>Platón es mi amigo, pero es más amiga la verdad.</p>
                    <p className='max-w-200 text-xl font-fira-code text-blue-500 font-bold'>~Aristoteles<span className="text-pink-500 text-sm">.</span></p>
                    </div>
                    <div className='flex justify-center items-center bg-indigo-800 font-inconsolata tracking-widest h-12 w-50 text-xl text-gray-300 py-2 px-4 rounded-xl buttonHover'>Hire Me!</div>
                </section>
        </section>
    )
}