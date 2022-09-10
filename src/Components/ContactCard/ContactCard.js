const ContactCard = () => {
    return(
        <div className="theme-bg-alt shadow-lg rounded-2xl h-max-content py-4 mt-6">
            <p className="font-bold text-md p-4 ml-2"> Contact </p>
            <div className="my-2 grid grid-cols-2 content-center mt-2 gap-6">
                <div className="m-auto">
                    <a href="https://www.linkedin.com/in/agustin-dell-aquila-a5b2451b2/" target="blank">
                        <img className="w-12" src="https://img.icons8.com/nolan/344/linkedin-circled.png" alt="LinkedIn icon"/>
                    </a>
                </div>
                <div className="m-auto">
                    <a href="https://github.com/agusdellaquila?tab=repositories" target="blank">
                        <img className="w-12" src="https://img.icons8.com/nolan/452/github.png" alt="Github icon" />
                    </a>
                </div>
                <div className="m-auto">
                    <img className="w-12" src="https://img.icons8.com/nolan/452/gmail-new.png" alt="email icon" />
                </div>
                <div className="m-auto">
                    <img className="w-12" src="https://img.icons8.com/nolan/344/phone.png" alt="phone icon" />
                </div>
            </div>
        </div>
    )
}

export default ContactCard