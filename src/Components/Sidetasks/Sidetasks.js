import "./Sidetasks.css"
import ContactCard from "../ContactCard/ContactCard"
import Curriculum from "../Curriculum/Curriculum"

const Sidetasks = () => {
    return (
        <div className="sidetasks">
            <div className="sticky top-16">
                <div className="theme-bg-alt shadow-lg rounded-2xl h-max-content pb-6">
                    <p className="font-bold text-md p-4">
                        My personal growth to-do's
                    </p>
                    <ul>
                        <li className="flex items-center justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                            <div className="flex items-center justify-start text-sm completed">
                                <span className="mx-4">
                                    01
                                </span>
                                <span className="">
                                    Complete web design course
                                </span>
                            </div>
                            {/* checked */}
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 1024 1024" className="text-green-500 mx-4">
                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" fill="currentColor">
                                </path>
                            </svg>
                        </li>

                        <li className="flex items-center justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                            <div className="flex items-center justify-start text-sm completed">
                                <span className="mx-4">
                                    02
                                </span>
                                <span>
                                    Complete javascript
                                </span>
                            </div>
                            {/* checked */}
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 1024 1024" className="text-green-500 mx-4">
                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" fill="currentColor">
                                </path>
                            </svg>
                        </li>

                        <li className="flex items-center justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                            <div className="flex items-center justify-start text-sm completed">
                                <span className="mx-4">
                                    03
                                </span>
                                <span>
                                    Complete React.js course
                                </span>
                            </div>
                            {/* checked */}
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 1024 1024" className="text-green-500 mx-4">
                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" fill="currentColor">
                                </path>
                            </svg>
                        </li>

                        <li className="flex items-center justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                            <div className="flex items-center justify-start text-sm">
                                <span className="mx-4">
                                    04
                                </span>
                                <span>
                                    Complete Backend course
                                </span>
                            </div>
                            {/* Not checked */}
                            <svg width="20" height="20" fill="currentColor" className="mx-4 dark:text-gray-300" viewBox="0 0 1024 1024">
                                <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" fill="currentColor">
                                </path>
                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z" fill="currentColor">
                                </path>
                            </svg>
                        </li>

                        <li className="flex items-center justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                            <div className="flex items-center justify-start text-sm completed">
                                <span className="mx-4">
                                    05
                                </span>
                                <span>
                                    Complete SQL course
                                </span>
                            </div>
                            {/* checked */}
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 1024 1024" className="text-green-500 mx-4">
                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" fill="currentColor">
                                </path>
                            </svg>
                        </li>

                        <li className="flex items-center justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                            <div className="flex items-center justify-start text-sm">
                                <span className="mx-4">
                                    06
                                </span>
                                <span>
                                    Graduate from University
                                </span>
                            </div>
                            {/* Not checked */}
                            <svg width="20" height="20" fill="currentColor" className="mx-4 dark:text-gray-300" viewBox="0 0 1024 1024">
                                <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" fill="currentColor">
                                </path>
                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z" fill="currentColor">
                                </path>
                            </svg>
                        </li>

                        <li className="flex items-center justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                            <div className="flex items-center justify-start text-sm completed">
                                <span className="mx-4">
                                    07
                                </span>
                                <span>
                                    Build my personal portflio
                                </span>
                            </div>
                            {/* checked */}
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 1024 1024" className="text-green-500 mx-4">
                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" fill="currentColor">
                                </path>
                            </svg>
                        </li>

                        <li className="flex items-center justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                            <a href="https://www.solutions-hexa.com/" target="_blank">
                                <div className="flex items-center justify-start text-sm completed">
                                    <span className="mx-4">
                                        08
                                    </span>
                                    <span>
                                        Create my personal web development studio
                                    </span>
                                </div>
                            </a>
                            {/* checked */}
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 1024 1024" className="text-green-500 mx-4">
                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" fill="currentColor">
                                </path>
                            </svg>
                        </li>

                        <li className="flex items-center justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                            <div className="flex items-center justify-start text-sm">
                                <span className="mx-4">
                                    09
                                </span>
                                <span>
                                    Get a job as a developer
                                </span>
                            </div>
                            {/* Not checked */}
                            <svg width="20" height="20" fill="currentColor" className="mx-4 dark:text-gray-300" viewBox="0 0 1024 1024">
                                <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" fill="currentColor">
                                </path>
                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z" fill="currentColor">
                                </path>
                            </svg>
                        </li>
                    </ul>
                </div>
                <ContactCard/>
                <Curriculum/>
            </div>
        </div>
    )
}

export default Sidetasks