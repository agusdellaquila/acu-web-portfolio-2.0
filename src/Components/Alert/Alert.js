import "./Alert.css"

const Alert = ({image, imageAlt, description, link, setDetails }) => {
  return (  
        <div className="alert theme-container flex-col justify-center text-center m-auto rounded-lg p-6">
            <button className='btn btnSecondary alertClose' onClick={() => {setDetails(false)}}>
                <img src="https://img.icons8.com/nolan/344/delete-sign.png" width="32px" height="32px" alt="Close icon" />
            </button>
            <div className="w-32 mx-auto">
                <img src={image} alt={imageAlt} />
            </div>
            <div className="w-full text-md mt-8 mb-3">
                <p className="fs5 w-full mt3 theme-text-primary">{description}</p>
            </div>
            <div className='justify-center m-auto w-max-content mt-8'>
                <a className='theme-bg-accent text-white p-2 averta rounded' href={link} target="_blank" rel="noreferrer"> Visit deploy </a>
            </div>
        </div>
  )
}

export default Alert