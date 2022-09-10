import PostHeader from "./PostHeader"
import PostFooter from "./PostFooter"

const PostSkills = () => {
    return (
        <div className="theme-bg-alt shadow rounded-lg mb-6">
            <PostHeader />
            {/* Body Post */}
            <div className="border-b border-gray-100"></div>
            <div className="font-medium text-sm mb-7 mt-6 mx-3 px-2">
                <p className="my-6 ml-2 text-xl text-center"> My skill & tool box </p>
                <section className="servicesContainer">
                    <section className="serviceCard">
                        <a href="https://drive.google.com/file/d/1V66PoG_dijl9CSiG-rAlyjNzNUJYtj0A/view?usp=sharing" target="_blank">
                            <div className="serviceId">
                                <img src="https://img.icons8.com/color/344/react-native.png" width="48px" height="48px" />
                                <p className="pt2">React</p>
                            </div>
                            <div className="mt-2 p-1">
                                <p className="seeCert">certification</p>
                            </div>
                        </a>
                    </section>
                    <section className="serviceCard">
                        <a href="https://drive.google.com/file/d/1rwKtCNctxo6v3E_DxuvXH9UCYxQ0Za4L/view?usp=sharing" target="_blank">
                            <div className="serviceId">
                                <img src="https://img.icons8.com/color/344/javascript--v1.png" width="48px" height="48px" />
                                <p className="pt2">Javascript</p>
                            </div>
                            <div className="mt-2 p-1">
                                <p className="seeCert">certification</p>
                            </div>
                        </a>
                    </section>
                    <section className="serviceCard">
                        <div className="serviceId">
                            <img src="https://img.icons8.com/fluency/344/node-js.png" width="48px" height="48px" />
                            <p className="pt2">Node.js</p>
                        </div>
                    </section>
                    <section className="serviceCard">
                        <div className="serviceId">
                            <img src="https://eowm.github.io/Portfolio/images_test/express.png" width="48px" height="48px" />
                            <p className="pt2">Express</p>
                        </div>
                    </section>
                    <section className="serviceCard">
                        <div className="serviceId">
                            <img src="https://img.icons8.com/color/344/mongodb.png" width="48px" height="48px" />
                            <p className="pt2">MongoDb</p>
                        </div>
                    </section>
                    <section className="serviceCard">
                        <div className="serviceId">
                            <img src="https://img.icons8.com/color/344/java-coffee-cup-logo--v1.png" width="48px" height="48px" />
                            <p className="pt2">Java</p>
                        </div>
                    </section>
                    <section className="serviceCard">
                        <div className="serviceId">
                            <img src="https://img.icons8.com/color/48/000000/sql.png" width="48px" height="48px" />
                            <p className="pt2">SQL</p>
                        </div>
                    </section>
                    <section className="serviceCard">
                        <div className="serviceId">
                            <img src="https://img.icons8.com/color/344/git.png" width="48px" height="48px" />
                            <p className="pt2">Git</p>
                        </div>
                    </section>
                    <section className="serviceCard">
                        <a href="https://drive.google.com/file/d/11w3Dl14stMFMjyOkGutUB1nMs6ZbhIDn/view?usp=sharing" target="_blank">
                            <div className="serviceId">
                                <img src="https://img.icons8.com/color/344/html-5.png" width="48px" height="48px" />
                                <p className="pt2">Html</p>
                            </div>
                            <div className="mt-2 p-1">
                                <p className="seeCert">certification</p>
                            </div>
                        </a>
                    </section>
                    <section className="serviceCard">
                        <a href="https://drive.google.com/file/d/11w3Dl14stMFMjyOkGutUB1nMs6ZbhIDn/view?usp=sharing" target="_blank">
                            <div className="serviceId">
                                <img src="https://img.icons8.com/color/344/css3.png" width="48px" height="48px" />
                                <p className="pt2">Css</p>
                            </div>
                            <div className="mt-2 p-1">
                                <p className="seeCert">certification</p>
                            </div>
                        </a>
                    </section>
                    <section className="serviceCard">
                        <a href="https://drive.google.com/file/d/11w3Dl14stMFMjyOkGutUB1nMs6ZbhIDn/view?usp=sharing" target="_blank">
                            <div className="serviceId">
                                <img src="https://img.icons8.com/color/344/sass.png" width="48px" height="48px" />
                                <p className="pt2">Scss</p>
                            </div>
                            <div className="mt-2 p-1">
                                <p className="seeCert">certification</p>
                            </div>
                        </a>
                    </section>
                    <section className="serviceCard">
                        <div className="serviceId">
                            <img src="https://img.icons8.com/color/344/figma--v1.png" width="48px" height="48px" />
                            <p className="pt2">Figma</p>
                        </div>
                    </section>
                    <section className="serviceCard">
                        <div className="serviceId">
                            <img src="https://img.icons8.com/color/48/000000/adobe-illustrator--v1.png" width="48px" height="48px" />
                            <p className="pt2">Illustrator</p>
                        </div>
                    </section>
                    <section className="serviceCard">
                        <div className="serviceId">
                            <img src="https://img.icons8.com/fluency/344/tailwind_css.png" width="48px" height="48px" />
                            <p className="pt2">Tailwind</p>
                        </div>
                    </section>
                    <section className="serviceCard">
                        <div className="serviceId">
                            <img src="https://img.icons8.com/color/48/000000/google-firebase-console.png" width="48px" height="48px" />
                            <p className="pt2">Firestore</p>
                        </div>
                    </section>
                    <section className="serviceCard">
                        <div className="serviceId">
                            <img src="https://img.icons8.com/color/48/000000/webflow.png" width="48px" height="48px" />
                            <p className="pt2">WebFlow</p>
                        </div>
                    </section>
                </section>
            </div>
            <PostFooter />
        </div>
    )
}

export default PostSkills