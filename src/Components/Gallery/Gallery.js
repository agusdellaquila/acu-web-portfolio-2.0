

const arts = [
    {
      id: 1,
      description: 'a baby tiger wearing a suit in outer space, digital art',
      imageSrc: '/media/gallery/babyTigerWearingASuitInOuterSpaceDigitalArt.png',
      imageAlt: 'a baby tiger wearing a suit in outer space, digital art',
    }
]

const Gallery = () => {
    return (
        <div className="theme-container">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Arts</h2>
    
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {arts.map((art) => (
                <div key={art.id}>
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                        <img
                        src={art.imageSrc}
                        alt={art.imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                    </div>
                    <h3 className="mt-4 averta text-xl">"{art.description}"</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
}

export default Gallery