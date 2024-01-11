import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const details = [
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
      title: 'We Love Movies',
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
        'Explore the dashboard to view all available decks. Create new decks to organize your flashcards. Add cards to decks effortlessly. Efficiently delete both decks and cards. Seamlessly edit decks and cards. Dive into your chosen deck and study by flipping between the question and answer sides. Technologies Utilized: HTML, CSS, Bootstrap, JavaScript, React, Node, Express, Knex, and PostgreSQL.',
    },
  ]

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
          <div className="row p-3">
            <div className="col-3">
              <div className="card">
                <h5 className="card-title card-font-title">
                  {details[0].title}
                </h5>
                <h6 className="card-font-description">
                  <details>{details[0].description} </details>
                </h6>
              </div>
              <div className="card">
                <h5 className="card-title card-font-title">
                  {details[1].title}
                </h5>
                <h6 className="card-font-description">
                  <details>{details[1].description} </details>
                </h6>
              </div>
              <div className="card">
                <h5 className="card-title card-font-title">
                  {details[2].title}
                </h5>
                <h6 className="card-font-description">
                  <details>{details[2].description} </details>
                </h6>
              </div>
              <div className="card">
                <h5 className="card-title card-font-title">
                  {details[3].title}
                </h5>
                <h6 className="card-font-description">
                  <details>{details[3].description} </details>
                </h6>
              </div>
              <div className="card">
                <h5 className="card-title card-font-title">
                  {details[4].title}
                </h5>
                <h6 className="card-font-description">
                  <details>{details[4].description} </details>
                </h6>
              </div>
            </div>
          </div>
          <div className='arrows'>
            <FontAwesomeIcon icon={faArrowCircleLeft} className="back-arrow" />
            <FontAwesomeIcon
              icon={faArrowCircleRight}
              className="forward-arrow"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
