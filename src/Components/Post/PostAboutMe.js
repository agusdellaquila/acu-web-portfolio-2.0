const PostAboutMe = () => {
    return (
        <div className="theme-bg-alt shadow rounded-lg mb-6">
            {/* Body Post */}
            {/* <div className="border-b border-gray-100"></div> */}
            <div className="font-medium text-sm mb-7 mx-3 py-8 px-2">
                <p className="mb-6 ml-2 text-3xl text-center"> About Me </p>
                <div className="aboutMe">
                    <div>
                        <p className="text-lg font-apple font-normal px-6 text-center">
                            I am a passionate <span className="theme-text-secondary  averta font-bold ">Developer </span>driven by motivation and desire to learn the field inside and out. With critical thinking I execute tasks in detail while keeping development progress aligned with project goals.
                        </p>
                        <p className="text-lg font-apple font-normal px-6 text-center mt-4">
                            I love being <span className="theme-text-secondary  averta font-bold ">organized </span> and to achieve this I make use of the Getting Things Done(GTD) method.
                        </p>
                        <p className="text-lg font-apple font-normal px-6 text-center mt-4">
                            When I am not studying, working or learning I enjoy my free time with <span className="theme-text-secondary  averta font-bold ">friends </span>and<span className="theme-text-secondary  averta font-bold "> family</span>, my 4 lovely<span className="theme-text-secondary  averta font-bold "> dogs</span> and a good<span className="theme-text-secondary  averta font-bold "> videogame</span>.
                        </p>
                    </div>
                    <img className="aboutMeImage" src="/media/me/me.png" alt="me" />
                </div>
            </div>
        </div>
    )
}

export default PostAboutMe