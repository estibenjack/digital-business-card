import TwitterIcon from '../assets/Twitter Icon.svg'
import FacebookIcon from '../assets/Facebook Icon.svg'
import InstagramIcon from '../assets/Instagram Icon.svg'
import GithubIcon from '../assets/GitHub Icon.svg'

export default function Footer() {
    return (
        <footer className='footer'>
            <img src={TwitterIcon} alt="Twitter icon" className='footer-icon' />
            <img src={FacebookIcon} alt="Facebook icon" className='footer-icon' />
            <img src={InstagramIcon} alt="Instagram icon" className='footer-icon' />
            <img src={GithubIcon} alt="Github icon" className='footer-icon' />
        </footer>
    )
}