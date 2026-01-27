import { useState } from 'react'
import styles from './Events.module.css'

const eventsData = [
  {
    id: 'frameItRight',
    name: 'Frame It Right',
    image: '/media/events 25/Frame It Right.png',
    title: 'Frame It Right – The Ultimate Website Prototype Challenge! 🎨💻',
    description: 'Are you ready to think fast, design faster? BLITZKRIEG\'25 presents Frame It Right, a high-speed web design challenge where creativity meets strategy!',
    teamSize: '2 members per team',
    platform: 'HTML & CSS (No external design assets allowed)',
    date: '2nd April 2025',
    time: '11:30 AM',
    venue: 'Keshav Mahavidyalaya, University of Delhi',
    format: [
      'Theme Reveal (First 5 min): Each team draws a random design theme.',
      'Midway Twist (After 45 min): A surprise challenge will shake up your design!',
      'Final Pitch (Last 15 min): A 2-minute presentation showcasing creativity & execution.'
    ],
    contacts: ['Priyanshi Jain - 96253 17445', 'Nancy Gupta - 92609 38565'],
    registerLink: 'https://forms.gle/KjHkFpqESWGWha5N8'
  },
  {
    id: 'codeOfDuty',
    name: 'Code of Duty',
    image: '/media/events 25/COD.png',
    title: 'Code of Duty – The Ultimate Algorithmic Battle 🎯🔥',
    description: 'Prepare for the ultimate DSA showdown at BLITZKRIEG\'25! Crack complex coding challenges, optimize your solutions, and climb the leaderboard in this high-stakes competition.',
    teamSize: 'Individual or Team of 2',
    date: '2nd April 2025',
    time: '11:30 AM – 1:00 PM',
    venue: 'Keshav Mahavidyalaya, University of Delhi',
    format: [
      'Platform: HackerRank (Ensure you have an active account)',
      'Duration: 90 minutes',
      'Questions: 6 (2 Easy | 2 Medium | 2 Hard)',
      'Scoring: Full points for passing all test cases, no negative marking',
      'Tiebreaker: Based on submission time & problem-solving sequence'
    ],
    contacts: ['Sourabh Pal - 95820 56853', 'Kanishka Rai - 70175 84908'],
    registerLink: 'https://forms.gle/n4Lx6PY6hWfVmpgi6'
  },
  {
    id: 'finalArgument',
    name: 'The Final Argument',
    image: '/media/events 25/The Final Argument.png',
    title: 'The Final Argument – The Ultimate Debate Arena 🎯🎤',
    description: 'Step into the verbal battlefield where tech, ethics, and innovation collide! BLITZKRIEG\'25 presents The Final Argument, a high-intensity debate competition where logic reigns supreme.',
    date: '2nd April 2025',
    time: '11:30 AM',
    venue: 'Keshav Mahavidyalaya, University of Delhi',
    format: [
      'Round 1 – Group Discussion: Present strong arguments on a tech-related topic (1.5 min/speaker).',
      'Round 2 – Extempore: Get a random topic, prepare for 3 minutes, and deliver a 2-minute speech.'
    ],
    contacts: ['Sundaram Yadav - 98197 68005', 'Aleesha Singh - 88260 46055'],
    registerLink: 'https://forms.gle/6SkVYRkURAmxpxyP7'
  },
  {
    id: 'geekLeague',
    name: 'Geek League',
    image: '/media/events 25/Geek League.png',
    title: 'Geek League – The Ultimate Tech Quiz 🧠⚡',
    description: 'Think you have what it takes to outsmart the competition? BLITZKRIEG\'25 presents Geek League, a high-stakes Tech Quiz Competition designed to test your knowledge, logic, and problem-solving skills!',
    teamSize: '2 members',
    date: '2nd April 2025',
    time: '1:30 PM',
    venue: 'Keshav Mahavidyalaya, University of Delhi',
    format: [
      'Phase 1 – Pen & Paper Round: MCQs, logic puzzles & tech-based questions (Elimination Round)',
      'Phase 2 – Rapid Fire Round: Quick thinking, fast answers, and no second chances!'
    ],
    contacts: ['Priyanshi Jain - 96253 17445', 'Anjali - 93342 86212'],
    registerLink: 'https://forms.gle/v9UUCWmFNidZvpYT6'
  },
  {
    id: 'bgmi',
    name: 'BGMI Battle Royale',
    image: '/media/events 25/BGMI.png',
    title: 'BGMI Battle Royale – The Ultimate Showdown! 🎮🔥',
    description: 'Get ready to fight, survive, and dominate in the BGMI Battle Royale, hosted by BLITZ – The Computer Science Society of Keshav Mahavidyalaya!',
    teamSize: 'Squad (4 players)',
    date: '2nd April 2025',
    time: '11:30 AM',
    venue: 'Keshav Mahavidyalaya, University of Delhi',
    format: [
      'Maps: Erangel, Miramar, Sanhok (Two maps will be selected)',
      'Rounds: Two intense matches',
      'Scoring: Kill points + Rank-based team points',
      'Tiebreaker: TDM Arena Match if needed'
    ],
    contacts: ['Sundaram Yadav - 98197 68005', 'Kanishka Rai - 70175 84908'],
    registerLink: 'https://forms.gle/5oVLDf4B2QZW7skG9'
  },
  {
    id: 'beyondAbstract',
    name: 'Beyond the Abstract',
    image: '/media/events 25/Beyond The Abstract.png',
    title: 'Beyond the Abstract – Research Paper Competition',
    description: 'Are you ready to challenge your research skills? BLITZKRIEG\'25 presents Beyond the Abstract, a two-round hybrid competition where you analyze, present, and defend research findings.',
    participation: 'Individual',
    format: [
      'Round 1 (Online): Abstract Hunt & Submission (Deadline: 30th March 2025, 5:00 PM)',
      'Round 2 (Offline): Research Defense & Real-World Application (2nd April 2025)'
    ],
    contacts: ['Nancy Gupta - 92609 38565', 'Isha Sharma - 93546 45681'],
    registerLink: 'https://forms.gle/QZ2P29HLCvNBFkP1A'
  },
  {
    id: 'treasureHunt',
    name: 'The Dalgona Quest',
    image: '/media/events 25/The Dalgona Quest.png',
    title: 'The Dalgona Quest – The Ultimate Treasure Hunt 🔍💀',
    description: '"You have one mission: Find the treasure or face elimination. Every second counts. Every choice matters. Will you make it out… or be left behind?"',
    teamSize: '3 members',
    date: '2nd April 2025',
    time: '3:30 PM',
    venue: 'Keshav Mahavidyalaya, University of Delhi',
    format: [
      'Round 1 – Red Light, Green Light: Solve riddles strategically while avoiding elimination.',
      'Round 2 – Symbol Cipher: Crack the hidden code to unlock the next clue.',
      'Round 3 – Stepping Stones: Answer correctly to find the right path—or risk falling behind!'
    ],
    contacts: ['Kanishka Rai - 70175 84908', 'Anjali - 93342 86212'],
    registerLink: 'https://forms.gle/Eo6vjfirnFxumK5D9'
  }
]

function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null)

  const openModal = (event) => {
    setSelectedEvent(event)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedEvent(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <main className={styles.eventsContainer}>
      <h1 className={styles.eventsTitle}>Our Events</h1>
      <div className={styles.eventsGrid}>
        {eventsData.map((event) => (
          <div
            key={event.id}
            className={styles.eventCard}
            onClick={() => openModal(event)}
          >
            <img src={event.image} alt={event.name} className={styles.eventImage} />
            <div className={styles.cardOverlay}>Click for Info</div>
            <h2 className={styles.eventName}>{event.name}</h2>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <span className={styles.close} onClick={closeModal}>&times;</span>
            <div className={styles.modalBody}>
              <img src={selectedEvent.image} alt={selectedEvent.name} className={styles.modalPoster} />
              <div className={styles.modalDetails}>
                <h2>{selectedEvent.title}</h2>
                <p>{selectedEvent.description}</p>
                {selectedEvent.teamSize && <p><strong>Team Size:</strong> {selectedEvent.teamSize}</p>}
                {selectedEvent.participation && <p><strong>Participation:</strong> {selectedEvent.participation}</p>}
                {selectedEvent.platform && <p><strong>Platform:</strong> {selectedEvent.platform}</p>}
                {selectedEvent.date && <p><strong>Date:</strong> {selectedEvent.date}</p>}
                {selectedEvent.time && <p><strong>Time:</strong> {selectedEvent.time}</p>}
                {selectedEvent.venue && <p><strong>Venue:</strong> {selectedEvent.venue}</p>}
                {selectedEvent.format && (
                  <>
                    <p><strong>Competition Format:</strong></p>
                    <ul>
                      {selectedEvent.format.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
                {selectedEvent.contacts && (
                  <p><strong>Contact:</strong><br />{selectedEvent.contacts.map((contact, index) => (
                    <span key={index}>{contact}<br /></span>
                  ))}</p>
                )}
                <a href={selectedEvent.registerLink} target="_blank" rel="noopener noreferrer" className="register-button">Register</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Events
