const PostHeader = () => {
    return(
        <div className="flex flex-row px-2 py-3 mx-3">
            <div className="w-auto h-auto rounded-full">
                <img className="w-12 h-12 object-cover rounded-full shadow cursor-pointer" alt="User avatar" src="/media/me/me.png" />
            </div>
            <div className="flex flex-col mb-2 ml-4 mt-1">
                <div className="inline flex text-sm font-semibold">
                    <span className="mr-1">Acu</span>
                    <span className="flex-1 flex-shrink-0">
                        <img src="https://img.icons8.com/fluency/344/verified-badge.png" alt="verified icon" className="align-center w-5" />
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