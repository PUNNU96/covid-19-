import {FiInstagram} from 'react-icons/fi'
import {VscGithubAlt} from 'react-icons/vsc'
import {FaTwitter} from 'react-icons/fa'
import './index.css'

const Footer = () => (
  <div className="footer-container">
    <h1 className="main-logo">
      COVID19<span className="main-logo-span">INDIA</span>
    </h1>
    <p className="footer-content">
      We stand with everyone fighting on the front lines
    </p>
    <div className="footer-icon-container">
      <VscGithubAlt className="icon" />
      <FiInstagram className="icon" />
      <FaTwitter className="icon" />
    </div>
  </div>
)

export default Footer
