const projects = [
    {
      id: 1,
      name: 'EnPie',
      href: 'https://en-pie-wines.vercel.app/',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      techs: ['red', 'green']
    },
    {
      id: 2,
      name: 'Rec0rder',
      href: 'https://github.com/agusdellaquila/rec0rder',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      techs: ['red', 'blue']
    },
    {
      id: 3,
      name: 'Villa Barbara',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Person using a pen to cross a task off a projectivity paper card.',
      techs: ['red']
    },
    {
      id: 4,
      name: 'Cobra Denim',
      href: 'https://cobra-denim.vercel.app/',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      techs: ['red']
    },
    {
        id: 5,
        name: 'AcuDex',
        href: 'https://acu-dex.vercel.app/',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        techs: ['red']
    }
  ]
  
const Projects = () => {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Projects</h2>
  
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {projects.map((project) => (
              <a key={project.id} href={project.href} target="blank" className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-gray-700 averta-bold text-xl">{project.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{project.price}</p>
                {project.techs.map((tech) => {
                    {console.log(tech)}
                    return <div key={tech} className={`w-2 h-2 rounded-full bg-${tech}-400`} />
                })}
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }

  export default Projects