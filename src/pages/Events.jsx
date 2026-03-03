import { useState, useEffect, useCallback } from 'react'
import styles from './Events.module.css'

const eventsData = [
  {
    id: 'betweenTwoWorlds',
    name: 'Between Two Worlds',
    image: '/media/posters_26/debate.png',
    title: 'Between Two Worlds – The Ultimate Debate Showdown',
    tagline: 'When perspectives flip, only the fearless survive',
    description: 'Step Between Two Worlds, where it\'s not just a competition — it\'s a clash of realities where your skills are truly tested. Can you argue what you don\'t believe in? Can you stay sharp when the rules twist unexpectedly? This isn\'t about speaking louder. It\'s about thinking deeper, adapting faster, and striking smarter.',
    date: '12th March 2026',
    time: '11:30 AM',
    venue: 'Keshav Mahavidyalaya, University of Delhi',
    prizes: 'Cash Prizes for Winners',
    contacts: ['Kanishka Rai - 70175 84908', 'Priyal Vatsa - 95996 47971'],
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSckfLNJEkZcBuvZsP6txEQfc9N-s9MUAURf0vdi_gIvhPBOZg/viewform',
    unstopLink: 'https://unstop.com/o/w6j2tiG'
  },
  {
    id: 'upsideShowdown',
    name: 'Upside Showdown',
    image: '/media/posters_26/gaming.png',
    title: 'Upside Showdown – The Ultimate Gaming Arena',
    tagline: 'Reflex vs reflex, strategy vs strategy, mind vs mind',
    description: 'The screen flickers. The world shifts. Welcome to the Upside Down. This isn\'t casual gaming — this is survival mode. When the match begins, it\'s reflex vs reflex, strategy vs strategy, mind vs mind. One mistake and you\'re out. One perfect move and you\'re legendary. Ready to prove you\'re not just good, but the best?',
    date: '12th March 2026',
    time: '1:30 PM',
    venue: 'Keshav Mahavidyalaya, University of Delhi',
    prizes: 'Cash Prizes for Winners',
    contacts: ['Aksh Kumar - 98112 52080', 'Parth Arora - 81780 44283'],
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfA6jFewZ4VSGijYNqTMB6UF22im_WegbcG3_3LOTV3GvE0TQ/viewform',
    unstopLink: 'https://unstop.com/o/xGVEjYl'
  },
  {
    id: 'elevensLogicLab',
    name: 'Eleven\'s Logic Lab',
    image: '/media/posters_26/quiz.png',
    title: 'Eleven\'s Logic Lab – The Ultimate Tech Quiz',
    tagline: 'Are you crazy smart enough to survive Hawkins?',
    description: 'Step into a world where every question feels like a portal to the Upside Down. This isn\'t just a quiz — it\'s a test of how calmly you think when the pressure rises. If you think your brain works faster than Eleven\'s powers, this is your arena. Expect twists, intense rounds, and a battle of wits like never before.',
    date: '12th March 2026',
    time: '11:30 AM',
    venue: 'Keshav Mahavidyalaya, University of Delhi',
    prizes: 'Cash Prizes for Winners',
    contacts: ['Vrinda Goyal - 98112 01391', 'Natya Vidhan - 97184 13051'],
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSd05hjBsHA-r4bsvLs6W-TkB_0u5VQH5Pti9X5jdnacN12xqw/viewform',
    unstopLink: 'https://unstop.com/o/9OnCzqp'
  },
  {
    id: 'hawkingsHack',
    name: 'Hawkings Hack',
    image: '/media/posters_26/hackathon.png',
    title: 'Hawkings Hack – Code Meets Chaos',
    tagline: 'Mornings are for coffee... and coding',
    description: 'A hackathon where code meets chaos and creativity meets challenge. This isn\'t just about writing code — it\'s about solving under pressure, thinking beyond limits, and building something powerful from scratch. Bring your team, bring your logic, and maybe... save Hawkins.',
    date: '12th March 2026',
    time: '1:30 PM',
    venue: 'Keshav Mahavidyalaya, University of Delhi',
    prizes: 'Cash Prizes for Winners',
    contacts: ['Ayushi Jain - 95826 17263', 'Natya Vidhan - 97184 13051'],
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfIgMrxj6TzCZuBEeOrFH7n9V6Gbw2XfTMCc3YjoMKKVM3RkQ/viewform',
    unstopLink: 'https://unstop.com/o/9SUk7GE'
  },
  {
    id: 'escapeUpsideDown',
    name: 'Escape The Upside Down',
    image: '/media/posters_26/treasure.png',
    title: 'Escape The Upside Down – The Ultimate Treasure Hunt',
    tagline: 'Will you escape or get lost in it forever?',
    description: 'The Upside Down is opening its gates. Step into a world where reality twists, clues get darker, and every decision matters. Hidden hints, unexpected turns, and mind-bending puzzles await. Gather your squad and find your way out — before it\'s too late.',
    date: '12th March 2026',
    time: '3:30 PM',
    venue: 'Keshav Mahavidyalaya, University of Delhi',
    prizes: 'Cash Prizes for Winners',
    contacts: ['Kanishka Rai - 70175 84908', 'Priyal Vatsa - 95996 47971', 'Anjali - 93342 86212'],
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdI4qSixreoVUl-vJu3ksxwk_nfJ9MjyJTajT1PO2jz_oyS4A/viewform',
    unstopLink: 'https://unstop.com/o/csr5wOD'
  },
  {
    id: 'strangerScreens',
    name: 'Stranger Screens',
    image: '/media/posters_26/uiux.png',
    title: 'Stranger Screens – Design Beyond Reality',
    tagline: 'Think beyond the screen',
    description: 'What if your interface wasn\'t just a design, but an experience? Step into a world where creativity meets logic, and aesthetics meet functionality. Showcase your design thinking, problem-solving skills, and ability to craft screens that truly stand out. No ordinary layouts. No basic ideas. Only bold concepts and immersive user experiences.',
    date: '12th March 2026',
    time: '11:30 AM',
    venue: 'Keshav Mahavidyalaya, University of Delhi',
    prizes: 'Cash Prizes for Winners',
    contacts: ['Anjali - 93342 86212', 'Lavanya Sharma - 83770 11822'],
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfnfpgTnLT1zJPjxTAMy20La68Djx4t_Y2thFVyDePrPlOQ3Q/viewform',
    unstopLink: 'https://unstop.com/o/wM9vG31'
  }
]

function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null)

  const openModal = useCallback((event) => {
    setSelectedEvent(event)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeModal = useCallback(() => {
    setSelectedEvent(null)
    document.body.style.overflow = 'auto'
  }, [])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedEvent) {
        closeModal()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [selectedEvent, closeModal])

  return (
    <main className={styles.eventsContainer}>
      {/* Header */}
      <header className={styles.eventsHeader}>
        <div className={styles.headerContent}>
          <span className={styles.chapterTag}>CHAPTER 03</span>
          <h1 className={styles.eventsTitle}>The Challenges</h1>
          <p className={styles.eventsSubtitle}>
            Six trials await. Each more dangerous than the last.<br />
            <span className={styles.subtitleAccent}>Choose your battle wisely.</span>
          </p>
        </div>
        <div className={styles.headerDecor}>
          <div className={styles.decorLine} />
          <div className={styles.decorLine} />
        </div>
      </header>

      {/* Events Grid */}
      <div className={styles.eventsGrid}>
        {eventsData.map((event, index) => (
          <article
            key={event.id}
            className={styles.eventCard}
            onClick={() => openModal(event)}
            style={{ animationDelay: `${index * 0.1}s` }}
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && openModal(event)}
            role="button"
            aria-label={`View details for ${event.name}`}
          >
            <div className={styles.cardGlow} />
            <div className={styles.cardImageWrapper}>
              <img src={event.image} alt={event.name} className={styles.eventImage} loading="lazy" />
              <div className={styles.cardOverlay}>
                <span className={styles.overlayText}>Enter Portal</span>
              </div>
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.eventName}>{event.name}</h2>
              <p className={styles.eventTagline}>{event.tagline}</p>
            </div>
            <div className={styles.cardBorder} />
          </article>
        ))}
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div 
          className={styles.modal} 
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.closeButton} 
              onClick={closeModal}
              aria-label="Close modal"
            >
              <span className={styles.closeIcon}>×</span>
            </button>
            
            <div className={styles.modalBody}>
              <div className={styles.modalLeft}>
                <div className={styles.modalPosterWrapper}>
                  <img 
                    src={selectedEvent.image} 
                    alt={selectedEvent.name} 
                    className={styles.modalPoster} 
                  />
                  <div className={styles.posterGlow} />
                </div>
              </div>
              
              <div className={styles.modalRight}>
                <div className={styles.modalHeader}>
                  <h2 id="modal-title" className={styles.modalTitle}>{selectedEvent.title}</h2>
                </div>
                
                <p className={styles.modalDescription}>{selectedEvent.description}</p>
                
                <div className={styles.modalDetails}>
                  {selectedEvent.teamSize && (
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Squad Size</span>
                      <span className={styles.detailValue}>{selectedEvent.teamSize}</span>
                    </div>
                  )}
                  {selectedEvent.participation && (
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Participation</span>
                      <span className={styles.detailValue}>{selectedEvent.participation}</span>
                    </div>
                  )}
                  {selectedEvent.platform && (
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Platform</span>
                      <span className={styles.detailValue}>{selectedEvent.platform}</span>
                    </div>
                  )}
                  {selectedEvent.date && (
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Date</span>
                      <span className={styles.detailValue}>{selectedEvent.date}</span>
                    </div>
                  )}
                  {selectedEvent.time && (
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Time</span>
                      <span className={styles.detailValue}>{selectedEvent.time}</span>
                    </div>
                  )}
                  {selectedEvent.venue && (
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Location</span>
                      <span className={styles.detailValue}>{selectedEvent.venue}</span>
                    </div>
                  )}
                  {selectedEvent.prizes && (
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Prizes</span>
                      <span className={styles.detailValue}>{selectedEvent.prizes}</span>
                    </div>
                  )}
                </div>
                
                {selectedEvent.format && (
                  <div className={styles.formatSection}>
                    <h3 className={styles.formatTitle}>Mission Briefing</h3>
                    <ul className={styles.formatList}>
                      {selectedEvent.format.map((item, index) => (
                        <li key={index} className={styles.formatItem}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {selectedEvent.contacts && (
                  <div className={styles.contactSection}>
                    <h3 className={styles.contactTitle}>Intel Officers</h3>
                    <div className={styles.contactList}>
                      {selectedEvent.contacts.map((contact, index) => (
                        <span key={index} className={styles.contactItem}>{contact}</span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className={styles.buttonGroup}>
                  <a 
                    href={selectedEvent.registerLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="register-button"
                  >
                    Register Now
                  </a>
                  {selectedEvent.unstopLink && (
                    <a 
                      href={selectedEvent.unstopLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="register-button unstop-button"
                    >
                      Register on Unstop
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Events
