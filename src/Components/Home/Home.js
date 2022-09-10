import "./Home.css"
import Activity from "../Activity/Activity"
import Sidetasks from "../Sidetasks/Sidetasks"

const Home = () => {
  return (
    <div className="home">
      <Activity/>
      <Sidetasks/>
    </div>
  )
}

export default Home