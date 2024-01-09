import './contact.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      // This cleanup function will clear the timeout when the component unmounts.
      clearTimeout(timeoutId)
    }
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'Yahoo',
        'template_b394udp',
        refForm.current,
        'SCqzTtKEiFiPgD7eA'
      )
      .then(() => {
        alert('Message successfully sent!')
        window.location.reload(false)
      }, () => {
        alert('Failed to send the message, please try again')
      })
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am enthusiastic about web development, with a keen interest in
            both front-end and back-end technologies. The idea of creating
            seamless user experiences and tackling complex server-side
            challenges excites me. I am drawn to the dynamism of startups but
            also open to contributing my skills in a more established company.
            Balancing innovation with structure, I am eager to be part of a
            collaborative team and contribute to impactful projects.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    id="message"
                  ></textarea>
                </li>
                <li>
                <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
          Turner Shreve
          <br />
          United States,
          <br />
          3679 Pumalo St
          <br />
          Highland, CA
          <span>turner_shreve@yahoo.com</span>
        </div>
        <div className='map-wrap'>
          <MapContainer center={[34.138853284370704, -117.20695414971352]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[34.138853284370704, -117.20695414971352]}>
              <Popup>
                This is where I reside
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="ball-scale-ripple" />
    </>
  )
}

export default Contact
