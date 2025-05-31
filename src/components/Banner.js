import '../styles/Banner.css'
import logo from '../assets/logo.png'
import Recommendation from './Recommendation'

function Banner() {
    const title = 'La maison jungle +'

    return (
        <div className='lmj-banner'>
            <div className='lmj-banner-row'>
                <img src={logo} className='lmj-logo' alt='La maison jungle' />
                <h1 className="lmj-title" style={{textTransform : 'uppercase'}}>{title}</h1>
            </div>
            <Recommendation />
        </div>
        )
}

export default Banner;