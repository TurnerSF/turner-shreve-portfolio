import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'

const About = () => {

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
    </div>
  )
}

export default About