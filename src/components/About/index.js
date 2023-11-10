import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {

  const customStyle = {
    transform: 'rotate(-90deg)'
  }

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => {
      // This cleanup function will clear the timeout when the component unmounts.
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1><p>
        I am a Full Stack Software Engineer based in Highland, CA, with a focus
        on creating seamless digital experiences. My journey into software
        engineering began with the Thinkful Online Engineering Immersion
        Program, where I mastered essential technologies such as HTML5, CSS3
        Javascript, React, Node.js, and PostgreSQL.
      </p>
      <p>
        My professional journey reflects effective collaboration and leadership.
        Engaging with senior web developers during the Thinkful program, I
        actively contributed to a collaborative learning environment, refining
        my teamwork skills. This collaborative mindset is complemented by my
        ability to lead and contribute innovative solutions to complex problems.
      </p>
      <p>
        I am equipped with the latest industry knowledge and maintain a
        commitment to continuous improvement. Eager to apply my skills in an
        entry-level full stack, front-end, or back-end position, I am prepared
        to contribute to cutting-edge projects and embrace new challenges in the
        dynamic field of software engineering. With a foundation in software
        engineering and a dedication to excellence, I am poised to make
        meaningful contributions to any forward-thinking development team.
      </p>
      
      </div>
      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face1'>
            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
          </div>
          <div className='face2'>
            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
          </div>
          <div className='face3'>
            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
          </div>
          <div className='face4'>
            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
          </div>
          <div className='face5'>
            <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
          </div>
          <div className='face6'>
            <FontAwesomeIcon icon={faNodeJs} color='#4C9F50' style={customStyle}/>
          </div>
        </div>
      </div>
    </div>
    <Loader type="ball-scale-ripple" />
    </>
  )
}

export default About