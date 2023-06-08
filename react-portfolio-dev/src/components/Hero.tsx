import { HiDownload } from "react-icons/hi"

export function Hero() {
  return (
    <section className="bg-gradient-to-tr from-black to-gray-900 text-white">
      <div className="container mx-auto max-w-4xl p-3 py-12 flex flex-col md:flex-row">
        <div className="basis-1/2">
          <h1 className="mb-6 text-center md:text-left">
            <span className="font-handwriting block text-4xl text-center md:text-left"> Olá, me chamo</span>
            <span className="font-headline text-5xl font-semibold">Márcio</span>
            <span className="font-headline text-5xl font-light text-blue-400"> Tanan</span>
          </h1>

          <h2 className="font-semibold flex items-center gap-4  text-center md:text-left">
            <div className="h-1 w-20 rounded-full bg-blue-800"></div>
            Desenvolvedor  Full-Stack
          </h2>

          <p className="text-gray-400 my-6 text-center md:text-left">
            Sou um desenvolvedor que ama criar experiências interativas e responsivas. Atualmente trabalho como freelancer e transformo ideias em sites e aplicações web.
          </p>

          <div className="flex items-center gap-2 justify-center md:justify-start">
            <a href="#" className="underline font-bold text-white">Fale Comigo
            </a>
            <span className="italic text-gray-500"> ou </span>
            <a
              href="#"
              className="button flex items-center gap-2 text-gray-600 hover:text-gray-900"> <HiDownload /> Baixe meu CV
            </a>
          </div>
        </div>
        <div className="basis-1/2">
          
        </div>
      </div>

    </section>
  )
} 