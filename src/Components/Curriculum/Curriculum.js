const Curriculum = () => {
    return (
        <div className="theme-bg-alt flex align-center shadow-lg rounded-2xl h-max-content mt-6">
            <p className="font-bold text-md p-4 ml-2 m-auto"> Download CV </p>
            <div className="mr-4">
                <a className="px-4 rounded" href="/media/cvActual_en_6.pdf" download target="blank" rel="noreferrer">
                    <img className="w-16" src="https://img.icons8.com/nolan/452/open-resume.png" alt="download cv icon" />
                </a>
            </div>
        </div>
    )
}

export default Curriculum