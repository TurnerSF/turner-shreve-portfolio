import './index.scss'
import { useEffect, useState } from 'react'
import { format } from 'date-fns'
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
      title: 'Recipe-Tracker',
      description:
        'This app allows a user to add new recipes, display a list of recipes and delete a recipe from the list by clicking a delete button. It Uses multiple components that play well together. Recipe data is contained in the state.',
    },
    {
      title: 'Animation Station',
      description:
        'Animation API for reviews and information on Animes to cartoons. Allows Users to upload their own information about shows they have watched to be able to build a website that holds all information on anyones favorite shows',
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

  const scrollLeft = () => {
    const left = document.querySelector('.presentation')
    left.scrollBy(50, 0)
  }

  const scrollRight = () => {
    const right = document.querySelector('.presentation')
    right.scrollBy(-50, 0)
  }

  let scrollInterval

  const handleMouseDownLeft = () => {
    scrollInterval = setInterval(scrollLeft, 100)
  }

  const handleMouseUp = () => {
    clearInterval(scrollInterval)
  }

  const handleMouseDownRight = () => {
    scrollInterval = setInterval(scrollRight, 100)
  }

  const formattedDate = format(new Date(), 'yyyy-MM-dd');

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
          <div className="presentation p-3">
            <div className="project-details">
              <div className="card">
                <a href={`https://restaurant-reservations-client-pwym.onrender.com/dashboard?date=${formattedDate}`} alt="Restaurant-Reservations Site">
                  <h5 className="card-title card-font-title">
                    {details[0].title}
                  </h5>
                </a>
                <h6 className="card-font-description">
                  <details>{details[0].description} </details>
                </h6>
              </div>
              <div className="card">
                <a href="https://blackjack-j6y5.onrender.com/" alt="BlackJack App">
                  <h5 className="card-title card-font-title">
                    {details[1].title}
                  </h5>
                </a>
                <h6 className="card-font-description">
                  <details>{details[1].description} </details>
                </h6>
              </div>
              <div className="card">
                <a href="https://welovemovies-client-lswy.onrender.com/" alt="We Love Movies App">
                  <h5 className="card-title card-font-title">
                    {details[2].title}
                  </h5>
                </a>
                <h6 className="card-font-description">
                  <details>{details[2].description} </details>
                </h6>
              </div>
              <div className="card">
                <a href="https://warrior-fighting-game-5rc70iewm-turnersf.vercel.app/" alt="Warrior Fighting Game">
                  <h5 className="card-title card-font-title">
                    {details[3].title}
                  </h5>
                </a>
                <h6 className="card-font-description">
                  <details>{details[3].description} </details>
                </h6>
              </div>
              <div className="card">
                <a href="https://recipe-track-and-create.onrender.com" alt="Recipe Tracker App">
                <h5 className="card-title card-font-title">
                  {details[4].title}
                </h5></a>
                <h6 className="card-font-description">
                  <details>{details[4].description} </details>
                </h6>
              </div>
              <div className="card">
                <a href="https://github.com/TurnerSF/Animation-Station" alt="Animation Station Github Page">
                <h5 className="card-title card-font-title">
                  {details[5].title}
                </h5></a>
                <h6 className="card-font-description">
                  <details>{details[5].description} </details>
                </h6>
              </div>
              <div className="card">
                <a href="https://github.com/TurnerSF/flashcard-o-matic" alt="Flashcard Github Page">
                <h5 className="card-title card-font-title">
                  {details[6].title}
                </h5></a>
                <h6 className="card-font-description">
                  <details>{details[6].description} </details>
                </h6>
              </div>
            </div>
          </div>
          <div className="arrows">
            <FontAwesomeIcon
              icon={faArrowCircleLeft}
              className="back-arrow"
              onMouseDown={handleMouseDownRight}
              onMouseUp={handleMouseUp}
            />
            <FontAwesomeIcon
              icon={faArrowCircleRight}
              className="forward-arrow"
              onMouseDown={handleMouseDownLeft}
              onMouseUp={handleMouseUp}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
