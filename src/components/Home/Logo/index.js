import TSLogo from '../../../assets/images/TS.png'
import './index.scss'

const Logo = () => {

  return (
    <div className="logo-container">
      <img
        className="solid-logo"
        src={TSLogo}
        alt="JavaScript,  Developer"
      />
    </div>
  )
}

export default Logo