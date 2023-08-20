import facebook from "../assets/Facebook Icon.png"
import github from "../assets/GitHub Icon.png"
import instagram from "../assets/Instagram Icon.png"
import twitter from "../assets/Twitter Icon.png"

function Footer() {
    return (
        <div className="footer--div">
            <img src={facebook} alt="facebook" className='footer--social' />
            <img src={github} alt="photo" className='footer--social' />
            <img src={instagram} alt="photo" className='footer--social' />
            <img src={twitter} alt="photo" className='footer--social' />
        </div>
    )
}

export default Footer