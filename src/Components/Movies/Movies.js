const Movies = () => {
    return (
        <div className="theme-container">
            <div className="mx-auto max-w-2xl items-center gap-x-8 px-4 sm:px-6 py-8 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div id="movies-fav">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My top 6 favourite Movies</h2>
                    
                    <div className="flex flex-wrap overflow-hidden gap-x-6 mt-10">
                        <img className="rounded w-40 h-56 mt-4" src="https://i.pinimg.com/originals/66/bd/9b/66bd9b1f8354a9aa6900dee35bc2a911.jpg" alt="top movie image" />
                        <img className="rounded w-40 h-56 mt-4" src="https://www.themoviedb.org/t/p/original/c54HpQmuwXjHq2C9wmoACjxoom3.jpg" alt="top movie image" />
                        <img className="rounded w-40 h-56 mt-4" src="https://m.media-amazon.com/images/I/71WXAx7T8-L._AC_SY679_.jpg" alt="top movie image" />
                        <img className="rounded w-40 h-56 mt-4" src="https://i.pinimg.com/originals/cf/fe/5c/cffe5c5cf6150a2104cc3a486e9be4f7.jpg" alt="top movie image" />
                        <img className="rounded w-40 h-56 mt-4" src="https://m.media-amazon.com/images/I/91VLgR0mXrL._AC_SY679_.jpg" alt="top movie image" />
                        <img className="rounded w-40 h-56 mt-4" src="https://m.media-amazon.com/images/M/MV5BMWVjYTQwZTktMjk4NS00Y2YxLTliZGQtYjQ5N2VjZjlmZGI1XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg" alt="top movie image" />
                    </div>
                </div>
    
                <div className="divider-horizontal-line mt-12"></div>
    
                <div id="series-fav" className="mt-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My top Series tierlist</h2>    
                    <img src="/media/movies/tier-series.jpg" className="mt-10" alt="games tier list"/>
                </div>
            </div>
        </div>
    )
}

export default Movies