import "./Activity.css"
import PostSkills from "../Post/PostSkills"
import PostIntro from "../Post/PostIntro"
import PostAboutMe from "../Post/PostAboutMe"

const Activity = () => {
    return (
        <div className="activity justify-center m-auto">
            <PostIntro/>
            <PostAboutMe/>
            <PostSkills/>
        </div>
    )
}

export default Activity