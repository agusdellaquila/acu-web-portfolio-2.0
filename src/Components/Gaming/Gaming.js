import "../Gaming/Gaming.css"

const achievements = [
    { name: 'Thanks for playing', description: '"Complete every C-Side." - Celeste', image: "/media/gaming/achievements/celeste.png", alt: "celeste achievement", comment: 'This achievement covers, the completition of the main game, the B sides, and all C sides. This was a nightmare, but taught me patience.'},
    { name: 'The Hollow Knight', description: '"Defeat the Hollow Knight and become the Vessel." - Hollow Knight', image: "/media/gaming/achievements/holllowknight.png", alt: "hollow knight achievement", comment: 'The sacrifice of the Knight to contain the abyss.'},
    { name: 'A Better Tomorrow', description: '"In Revelations, complete the cycle. - Call Of Duty Black ops III"', image: "/media/gaming/achievements/revelations.png", alt: "call of duty bo3 achievement", comment: "A super easter egg that requires the completition of all BlackOps III zombies easter eggs."},
    { name: 'Souls Saved', description: '"Complete the game on Normal. - Cuphead"', image: "/media/gaming/achievements/cuphead.png", alt: "cuphead achievement", comment: "Completing the entire game on normal difficulty is quite a challenge, can't imagine on Expert mode."},
    { name: 'Metamorphosis', description: '"Rescue all of the imprisoned grubs. - Hollow Knight"', image: "/media/gaming/achievements/grumps.png", alt: "hollow knight achievement", comment: "Rescuing all the grubs, made me feel like a hero. Can't get over that final twist."},
    { name: 'Archivist Toadette', description: '"Aquire all the moons. - Mario Oddyssey"', image: "/media/gaming/achievements/mario.png", alt: "mario odyssey achievement", comment: "One of the most enjoyable game experiences I've ever had."},
]

const Gaming = () => {
return (
    <div className="theme-container">
        <div className="mx-auto max-w-2xl items-center gap-x-8 px-4 sm:px-6 py-8 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div id="games-achievements">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Proudest Archievements</h2>
                <p className="mt-4">
                    These are some of the best moments I've ever had playing videogames. 
                    Some are just really hard archievements to get, and some are just there because they hold a special place in my heart
                </p>

                <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                    {achievements.map((achievement) => (
                    <div key={achievement.name} className="border-t border-gray-200 pt-4">
                        <img src={achievement.image} alt={achievement.alt} width='64px' height='64px'/>
                        <dt className="font-medium mt-4">{achievement.name}</dt>
                        <dd className="mt-2 text-smb theme-color-accent font-semibold">{achievement.description}</dd>
                        <dd className="mt-2 text-sm">{achievement.comment}</dd>
                    </div>
                    ))}
                </dl>
            </div>

            <div className="divider-horizontal-line mt-12"></div>

            <div id="games-favourites" className="mt-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Games that made me who I am</h2>
                <p className="mt-8">
                    These are some of my all time favourites. 
                    I've been playing videogames since I was 4 years old.   
                </p>

                <img src="/media/gaming/top/tier.jpeg" className="mt-10" alt="games tier list"/>
            </div>
        </div>
    </div>
)
}

export default Gaming