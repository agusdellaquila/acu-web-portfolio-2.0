const PostHeader = () => {
    return(
        <div className="flex flex-row px-2 py-3 mx-3">
            <div className="w-auto h-auto rounded-full">
                <img className="w-12 h-12 object-cover rounded-full shadow cursor-pointer" alt="User avatar" src="/media/me/me.png" />
            </div>
            <div className="flex flex-col mb-2 ml-4 mt-1">
                <div className="inline flex text-sm font-semibold">
                    <span className="mr-1">Acu</span>
                    <span className="mx-1 flex-1 flex-shrink-0">
                        <svg viewBox="0 0 24 24" style={{ width: 20 }} xmlns="http://www.w3.org/2000/svg">
                            <g data-name="21. Verified" id="_21._Verified">
                                <path d="M22.51,13.76a3,3,0,0,1,0-3.52l.76-1.05a1,1,0,0,0,.14-.9,1.018,1.018,0,0,0-.64-.64l-1.23-.4A2.987,2.987,0,0,1,19.47,4.4V3.1a1,1,0,0,0-1.31-.95l-1.24.4a3,3,0,0,1-3.35-1.09L12.81.41a1.036,1.036,0,0,0-1.62,0l-.76,1.05A3,3,0,0,1,7.08,2.55l-1.24-.4a1,1,0,0,0-1.31.95V4.4A2.987,2.987,0,0,1,2.46,7.25l-1.23.4a1.018,1.018,0,0,0-.64.64,1,1,0,0,0,.14.9l.76,1.05a3,3,0,0,1,0,3.52L.73,14.81a1,1,0,0,0-.14.9,1.018,1.018,0,0,0,.64.64l1.23.4A2.987,2.987,0,0,1,4.53,19.6v1.3a1,1,0,0,0,1.31.95l1.23-.4a2.994,2.994,0,0,1,3.36,1.09l.76,1.05a1.005,1.005,0,0,0,1.62,0l.76-1.05a3,3,0,0,1,3.36-1.09l1.23.4a1,1,0,0,0,1.31-.95V19.6a2.987,2.987,0,0,1,2.07-2.85l1.23-.4a1.018,1.018,0,0,0,.64-.64,1,1,0,0,0-.14-.9Zm-5.8-3.053-5,5a1,1,0,0,1-1.414,0l-3-3a1,1,0,1,1,1.414-1.414L11,13.586l4.293-4.293a1,1,0,0,1,1.414,1.414Z" />
                            </g>
                        </svg>
                    </span>
                </div>
                <div className="flex w-full mt-1">
                    <div className="text-indigo-600 font-medium font-base text-xs mr-1 cursor-pointer">
                        Creator
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PostHeader