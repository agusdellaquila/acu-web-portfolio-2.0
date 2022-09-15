import "./Home.css"
import Activity from "../Activity/Activity"
import Sidetasks from "../Sidetasks/Sidetasks"
// import Notification from "../Notification/Notification"

const Home = () => {
  return (
    <div className="home">
      <Activity/>
      <Sidetasks/>
      {/* <Notification/> */}
    </div>
  )
}

export default Home