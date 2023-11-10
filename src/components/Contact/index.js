import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      // This cleanup function will clear the timeout when the component unmounts.
      clearTimeout(timeoutId)
    }
  }, [])

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
          <div className='contact-form'>
            <form>
                <ul>
                    <li className='half'>
                        <input type="text" name='name' placeholder='Name' required />
                    </li>
                    <li className='half'>
                        <input type="email" name='email' placeholder='Email' required />
                    </li>
                    <li>
                        <input type="text" name='subject' placeholder='Email' required />
                    </li>
                </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="ball-scale-ripple" />
    </>
  )
}

export default Contact
