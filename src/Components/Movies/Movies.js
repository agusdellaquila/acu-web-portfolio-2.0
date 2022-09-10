const Movies = () => {
    return (
        <div className="theme-container">
            <div className="mx-auto max-w-2xl items-center gap-x-8 px-4 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div id="movies-fav">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My favourite Movies of all time</h2>
                    <p className="mt-4">
                        ...
                    </p>
    
                    {/* <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {achievements.map((achievement) => (
                        <div key={achievement.name} className="border-t border-gray-200 pt-4">
                            <img src={achievement.image} alt={achievement.alt} width='64px' height='64px'/>
                            <dt className="font-medium mt-4">{achievement.name}</dt>
                            <dd className="mt-2 text-smb theme-color-accent font-semibold">{achievement.description}</dd>
                            <dd className="mt-2 text-sm">{achievement.comment}</dd>
                        </div>
                        ))}
                    </dl> */}
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