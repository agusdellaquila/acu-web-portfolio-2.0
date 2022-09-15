import "./Projects.css"
import Alert from "../Alert/Alert"
import { useState } from "react"

const projects = [
    {
      id: 1,
      name: 'EnPie',
      href: 'https://en-pie-wines.vercel.app/',
      imageSrc: 'https://en-pie-wines.vercel.app/images/logo.png',
      imageAlt: 'EnPie project',
      description: "This was my first ever frontend project, which was carried out by only me, planning out the design and the implementation of the code. I chose react as my framework because of its great ability to create user interfaces. Also it is a technology which I feel quite comfortable with.",
      techs: ['react', 'js', 'css']
    },
    {
      id: 2,
      name: 'Villa Barbara',
      href: 'http://villabarbara.sembrandopaz.org/',
      imageSrc: 'http://villabarbara.sembrandopaz.org/media/logo.png',
      imageAlt: 'Villa Barbara project',
      description: "This project was done by a team of three. A UX/UI developer who was in charge of presenting us wireframes of the page so that me and another developer could take care of the implementation. We used react as a  framework and agreed on doing half the page each to later combine them, so we could divide the work. Before deploying the website, I took a glance at the whole project to check that there was nothing out of place.",
      techs: ['react', 'js', 'css']
    },
    {
      id: 3,
      name: 'Rec0rder',
      href: 'https://github.com/agusdellaquila/rec0rder',
      imageSrc: '/media/projects/recorder.png',
      imageAlt: 'Rec0rder project',
      description: "A chrome extension built with express js as the backend to create a server and process all the recordings, to later host them on Microsoft Azure.",
      techs: ['express', 'react', 'js', 'css']
    },
    {
      id: 4,
      name: 'Cobra Denim',
      href: 'https://cobra-denim.vercel.app/',
      imageSrc: '/media/projects/cobra.png',
      imageAlt: 'Cobra Denim project',
      description: "My first HTML/CSS page ever created, this has a special place in my heart as it is where the it all started.",
      techs: ['html', 'css']
    },
    {
        id: 5,
        name: 'AcuDex',
        href: 'https://acu-dex.vercel.app/',
        imageSrc: '/media/projects/acudex.png',
        imageAlt: 'Acu dex project',
        description: "A site I developed as part of an interview challenge to practise API fetch.",
        techs: ['react', 'js', 'css']
    },
    {
        id: 6,
        name: 'xls admin panel',
        href: 'https://acu-dex.vercel.app/',
        imageSrc: '/media/projects/xls.png',
        imageAlt: 'xls project',
        description: "A side project of mine that I built as an alternative to SQL. In my country a lot of small businesses use excel as their database, so I built this xls file system that does not need SQL. You just upload your xls file and the data will be displayed on your site. If you change your file and upload it again, the site updates itself.",
        techs: ['react', 'js', 'css']
    }
]
  
const Projects = () => {
    const [details, setDetails] = useState(false)
    const [itemDetailsRender, setItemDetailsRender] = useState()

    const showDetails = (project) => {
      setItemDetailsRender(project)
      setDetails(true)
    }

    return (
      <div className="theme-container">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Projects</h2>
  
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {projects.map((project) => (
              <div key={project.id} className="theme-bg-alt shadow-lg rounded-2xl pb-6 p-2">
                <a href={project.href} target="blank" className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full flex overflow-hidden rounded-lg h-60 xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      className="w-max-content h-max-content m-auto object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                </a>
                <div className="flex-col ml-4">
                  <h3 className="mt-4 averta-bold text-xl">{project.name}</h3>
                  <p className="mt-4 averta text-sm cursor-pointer text-gray-500" onClick={() => showDetails(project)}> More info </p>
                  <div className="flex mt-4">
                    {project.techs.map((tech) => {
                      let colors = (tech === 'html') ? 'bg-yellow-600 tech-bubble' : (tech === 'css') ? 'bg-blue-200 tech-bubble' : (tech === 'js') ? 'bg-yellow-500 tech-bubble' : (tech === 'react') ? 'bg-indigo-500 tech-bubble' : (tech === 'express') ? 'bg-gray-700 tech-bubble' : 'bg-gray-300 tech-bubble'
                      return (
                        <div key={tech} className="tooltip">
                          <div className={`${colors}`}></div>
                          <div className="tooltiptext averta-bold">{tech}</div>
                        </div>)
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {
            details ? <Alert setDetails={setDetails} image={itemDetailsRender.imageSrc} imageAlt={itemDetailsRender.imageAlt} link={itemDetailsRender.link} description={itemDetailsRender.description} /> : null
          }

        </div>
      </div>
    )
  }

  export default Projects