import photo from '../assets/photo.png'
import mail from '../assets/mail.png'

function Info() {
    return (
        <div className='info--div'>
            <div className='info--div--img'>
                <img src={photo} alt="photo" className='info--img' />
            </div>
            <h1 className='info--name'>Cédric Bison</h1>
            <h2 className='info--job'>Frontend developper</h2>
            <h3 className='info--website'>bc_techonologies.tech</h3>
            <img src={mail} alt="mail" className='info--mail' />
        </div>
    )
}

export default Info