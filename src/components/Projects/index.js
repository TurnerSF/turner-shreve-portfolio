import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [details, setDetails] = useState([
    {
      title: 'Restaurant Reservations',
      description:
        'Discover the Restaurant Reservation System, a versatile full-stack web application designed for restaurant managers. Seamlessly handle reservations, from creation to modification and deletion, while ensuring a delightful user experience. Developed as part of the Thinkful Engineering Immersion program, this system empowers you to efficiently manage reservations and tables.',
    },
    {
      title: 'BlackJack',
      description:
        'This is a simple Blackjack application that utilizes the "Deck of Cards" API to manage the deck of cards used in the game.',
    },
    {
      title: 'WeLoveMovies',
      description:
        'The aim of this web application is to provide the user with a movie review and information site, similar to IMDB.',
    },
    {
      title: 'Warrior-Fighting-Game',
      description:
        'This 2D fighting game is crafted using JavaScript classes, HTML5 canvas, and inline styling, seamlessly blending sprite animations, collision detection, and player input to deliver an engaging and visually appealing gaming experience. Leveraging the power of these web technologies, the game features responsive design, interactive controls, and a dynamic game loop for an immersive and enjoyable playthrough.',
    },
    {
      title: 'Flashcard-O-Matic',
      description:
        'A sleek kick and punch fighting game, crafted with HTML and inline styling, showcases a minimalist design. JavaScript powers the Fighter classes, enabling smooth actions and dynamic health updates.',
    },
  ])

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
      <div className="container projects-page">
        <div className="project-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={13}
            />
          </h1>
          <div className="row p-4 mt-4">
            {details.map((detail, index) => (
              <div className="col-3 mb-5" key={index}>
                <div className="card border-0">
                  <h5 className="card-title card-font-title">{detail.title}</h5>
                  <h6 className="card-font-description">
                    {detail.description}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
