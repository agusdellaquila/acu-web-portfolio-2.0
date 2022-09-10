import PostHeader from "./PostHeader"
import PostFooter from "./PostFooter"

const PostIntro = () => {
    return (
        <div className="theme-bg-alt shadow rounded-lg mb-6">
            <PostHeader />
            {/* Body Post */}
            <div className="border-b border-gray-100"></div>
            <div className="flex-col mb-7 mt-6 mx-3 px-2">
                <div className="flex justify-center items-center">
                    <h1 className="rocksalt text-center text-6xl"> Agustín <span className="font-apple font-bold"> Dell' Aquila </span> </h1>
                    <img className="h-40" src="/media/me/animojiPc.svg" alt="animoji pc"/>
                </div>
                <div className="mt-2">
                    <p className="text-xl font-apple font-medium text-center"> I’m a <span className="text-indigo-600  averta font-bold "> Fullstack developer </span> based in Buenos Aires.</p>
                    <p className="text-xl font-apple font-medium text-center mt-2">People call me <span className="text-indigo-600  averta font-bold "> Acu </span> </p>
                </div>
                <div className="my-2 flex justify-center mt-8 gap-6">
                    <a href="https://www.linkedin.com/in/agustin-dell-aquila-a5b2451b2/" target="blank">
                        <img className="w-16" src="https://img.icons8.com/nolan/344/linkedin-circled.png" alt="LinkedIn icon"/>
                    </a>
                    <a href="https://github.com/agusdellaquila?tab=repositories" target="blank">
                        <img className="w-16" src="https://img.icons8.com/nolan/452/github.png" alt="Github icon" />
                    </a>
                </div>
            </div>
            <PostFooter />
        </div>
    )
}

export default PostIntro