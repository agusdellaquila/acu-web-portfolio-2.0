const PostIntro = () => {
    return (
        <div className="theme-bg-alt shadow rounded-lg">
            {/* Body Post */}
            {/* <div className="border-b border-gray-100"></div> */}
            <div className="flex-col mb-7 mx-3 py-8 px-2 intro">
                <div className="introId">
                    <h1 className="rocksalt introHeading text-3xl md:text-5xl lg:text-6xl"> <span className="theme-text-secondary"> Agustín </span> <span className="font-apple font-semibold"> Dell' Aquila </span> </h1>
                    <img className="introImage" src="/media/me/animojiPc.svg" alt="animoji pc"/>
                </div>
                <div className="mt-2">
                    <p className="text-xl font-apple font-medium text-center"> I’m a <span className="theme-text-secondary averta font-bold "> Fullstack developer </span> based in Buenos Aires.</p>
                    <p className="text-xl font-apple font-medium text-center mt-2">People call me <span className="theme-text-secondary averta font-bold "> Acu </span> </p>
                </div>
            </div>
        </div>
    )
}

export default PostIntro