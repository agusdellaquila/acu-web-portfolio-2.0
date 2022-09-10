import "./Activity.css"
import PostSkills from "../Post/PostSkills"
import PostIntro from "../Post/PostIntro"

const Activity = () => {
    return (
        <div className="activity justify-center m-auto">
            <PostIntro/>
            <PostSkills/>
        </div>
    )
}

export default Activity