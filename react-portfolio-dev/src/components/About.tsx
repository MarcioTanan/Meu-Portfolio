export function About() {
  return(
    <section className="container mx-auto my-4 max-w-5xl p-4">
    <div className="relative p-4 text-center">
    <h2 className="relative text-blue-900 font-bold z-10">
      <span className="mr-2 font-headline text-3xl">Sobre</span>
      <span className="font-handwriting text-4xl">Mim</span>
    </h2>
    <p
     className="relative text-sm text-gray-600">Tenho mais de 10 projetos executados e gostaria que o proximo seja o seu.
    </p>

    <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-100/40"></div>
    </div>

    <div className=" relative mx-auto mt-20 max-w-lg">
      <div className="relative w-full rounded-lg bg-blue-100 p-4 ps-20 md:-64 md:ps-48">
        <div className="absolute -left-2 -top-4 h-24 w-20 rounded-lg bg-gray-600 bg-[url(https://i.imgur.com/40ui17P.png)] bg-cover bg-center md:-left-12 md:-top-12 md:h-72 md:w-56 "></div>

      </div>
    </div>
   </section>
  )
} 