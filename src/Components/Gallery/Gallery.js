

const arts = [
    {
      id: 1,
      description: 'samurai tiger, digital art',
      imageSrc: 'https://i.imgur.com/Zuxnmep.png',
      imageAlt: 'samurai tiger, digital art',
    },
    {
      id: 2,
      description: 'a baby tiger riding a small boat, digital art',
      imageSrc: 'https://i.imgur.com/PmJGqOl.png',
      imageAlt: 'a baby tiger riding a small boat, digital art',
    },
    {
      id: 3,
      description: 'a baby tiger riding a boat on space, digital art',
      imageSrc: 'https://i.imgur.com/UxXiGL3.png',
      imageAlt: 'a baby tiger riding a boat on space, digital art',
    },
    {
      id: 4,
      description: 'a baby tiger wearing a suit in outer space, digital art',
      imageSrc: 'https://i.imgur.com/FTV4HxT.png',
      imageAlt: 'a baby tiger wearing a suit in outer space, digital art',
    },
    {
      id: 5,
      description: 'a white baby tiger profile picture, digital art',
      imageSrc: 'https://i.imgur.com/WfmcNlI.png',
      imageAlt: 'a white baby tiger profile picture, digital art',
    },
    {
      id: 6,
      description: 'a fancy gorilla playing the piano at a concert on space, digital art',
      imageSrc: 'https://i.imgur.com/poWSkQS.png',
      imageAlt: 'a fancy gorilla playing the piano at a concert on space, digital art',
    },
    {
      id: 7,
      description: 'astronaut monkey racing on a F1 car, digital art',
      imageSrc: 'https://i.imgur.com/wxcoj0L.png',
      imageAlt: 'astronaut monkey racing on a F1 car, digital art',
    },
    {
      id: 8,
      description: 'monkey swimming on a swimming pool at night, digital art',
      imageSrc: 'https://i.imgur.com/GPoJBEK.png',
      imageAlt: 'monkey swimming on a swimming pool at night, digital art',
    },
    {
      id: 9,
      description: 'a representation of thalassophobia',
      imageSrc: 'https://i.imgur.com/RNdmgc0.png',
      imageAlt: 'a representation of thalassophobia',
    },
    {
      id: 10,
      description: 'a representation of thalassophobia',
      imageSrc: 'https://i.imgur.com/vumMbce.png',
      imageAlt: 'a representation of thalassophobia',
    },
    {
      id: 11,
      description: 'mad computer scientists, digital, logo',
      imageSrc: 'https://i.imgur.com/w1bsHiy.png',
      imageAlt: 'mad computer scientists, digital, logo',
    },
    {
      id: 12,
      description: 'pc motherboard floating in a space nebula, logo',
      imageSrc: 'https://i.imgur.com/Xi2lnlK.png',
      imageAlt: 'pc motherboard floating in a space nebula, logo',
    }
    ,
    {
      id: 13,
      description: 'an old marvel comic cover featuring a computer',
      imageSrc: 'https://i.imgur.com/D2ZWfw6.png',
      imageAlt: 'an old marvel comic cover featuring a computer',
    }
    ,
    {
      id: 14,
      description: 'a 1980 ad poster of a computer company, no text',
      imageSrc: 'https://i.imgur.com/nIiUFfW.png',
      imageAlt: 'a 1980 ad poster of a computer company, no text',
    }
    ,
    {
      id: 15,
      description: 'a Rick and Morty inspired gaming laptop',
      imageSrc: 'https://i.imgur.com/aWmqiwm.png',
      imageAlt: 'a Rick and Morty inspired gaming laptop',
    }
    ,
    {
      id: 16,
      description: 'motherboard floating on space in the style of rick and morty',
      imageSrc: 'https://i.imgur.com/OOkRrC8.png',
      imageAlt: 'motherboard floating on space in the style of rick and morty',
    }
    ,
    {
      id: 17,
      description: 'a gaming pc floating on space, ukiyo-e',
      imageSrc: 'https://i.imgur.com/T6YVPPm.png',
      imageAlt: 'a gaming pc floating on space, ukiyo-e',
    },
    {
      id: 18,
      description: 'a human tiger wearing a suit',
      imageSrc: 'https://i.imgur.com/15NxFtY.png',
      imageAlt: 'a human tiger wearing a suit',
    }
]

const Gallery = () => {
    return (
        <div className="theme-container mb-6">
          <div className="mx-auto max-w-2xl sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-center liquido-fluid text-8xl mb-8">My generated Art</h2>
    
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {arts.map((art) => (
                <div className="w-11/12 mx-auto" key={art.id}>
                    <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
                        <img
                        src={art.imageSrc}
                        alt={art.imageAlt}
                        className="h-full object-cover object-center group-hover:opacity-75"
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