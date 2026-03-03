import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import styles from './Home.module.css'

function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`${styles.homePage} ${isLoaded ? styles.loaded : ''}`}>
      {/* Upside Down Particles */}
      <div className={styles.particles} aria-hidden="true">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={styles.particle} style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 10}s`
          }} />
        ))}
      </div>

      {/* Hero Section - The Gate Opens */}
      <section className={styles.heroSection}>
        <div className={styles.heroVignette} />
        <div className={styles.heroContent}>
          <div className={styles.titleWrapper}>
            <span className={styles.preTitle}>Enter the</span>
            <div className={styles.titleRow}>
              <h1 className={styles.mainTitle}>BLITZKRIEG</h1>
              <span className={styles.yearText}>'26</span>
            </div>
          </div>
          
          <div className={styles.themeTag}>
            <span>STRANGER THINGS: THE FINAL BATTLE</span>
          </div>

          <div className={styles.eventInfo}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>DATE</span>
              <span className={styles.infoValue}>12TH MARCH 2026</span>
            </div>
            <div className={styles.infoDivider} />
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>TIME</span>
              <span className={styles.infoValue}>10:00 AM ONWARDS</span>
            </div>
          </div>

          <p className={styles.tagline}>
            The Gate has opened. The Upside Down awaits.<br />
            <strong>Are you ready for the final battle?</strong>
          </p>

          <div className={styles.heroButtons}>
            <Link to="/events" className="register-button">Explore Events</Link>
          </div>
        </div>
      </section>

      {/* Lore Section - Welcome to Hawkins */}
      <section className={styles.loreSection}>
        <div className={styles.sectionDivider}>
          <div className={styles.dividerLine} />
          <span className={styles.dividerText}>CLASSIFIED</span>
          <div className={styles.dividerLine} />
        </div>

        <div className={styles.loreContent}>
          <div className={styles.loreLeft}>
            <span className={styles.chapterNumber}>CHAPTER 01</span>
            <h2 className={styles.sectionTitle}>
              Welcome to<br />
              <span className={styles.titleAccent}>Hawkins Lab</span>
            </h2>
            <div className={styles.titleUnderline} />
          </div>
          
          <div className={styles.loreRight}>
            <p className={styles.loreText}>
              <strong>BLITZKRIEG</strong> at Keshav Mahavidyalaya is more than just a tech fest—it's a 
              portal to innovation. Like the brave heroes of Hawkins, we're dedicated to 
              pushing boundaries and creating solutions for tomorrow's challenges.
            </p>
            <p className={styles.loreText}>
              In the realm where technology meets imagination, we've witnessed legendary battles: 
              <em> Code Duel 2.0</em>, <em>Web Bugs</em>, <em>Job Wars</em>, <em>BGMI Showdown</em>, 
              and the mysterious <em>Finding Meme-O</em>. Each challenge, like facing the Demogorgon, 
              tests your courage, wit, and determination.
            </p>
            <p className={styles.warningText}>
              WARNING: This year, the stakes are higher. The Upside Down has merged with our reality.
            </p>
            <Link to="/team" className="register-button">Meet The Crew</Link>
          </div>
        </div>
      </section>

      {/* Mission Section - The Final Battle */}
      <section className={styles.missionSection}>
        <div className={styles.missionVines} aria-hidden="true" />
        
        <div className={styles.missionContent}>
          <div className={styles.missionText}>
            <span className={styles.chapterNumber}>CHAPTER 02</span>
            <h2 className={styles.sectionTitle}>
              The Final Battle<br />
              <span className={styles.titleAccent}>Begins Here</span>
            </h2>
            <div className={styles.titleUnderline} />
            
            <p className={styles.missionParagraph}>
              Hello Tech Enthusiasts!
            </p>
            <p className={styles.missionParagraph}>
              Gear up for a journey into the unknown! Like Eleven and her friends, 
              you'll need courage, intelligence, and teamwork to survive what's coming.
            </p>
            <p className={styles.missionParagraph}>
              Calling all programmers, gamers, and tech warriors—the Upside Down has challenges 
              waiting for you. Grab your flashlights, power up your devices, and prepare to 
              face the Mind Flayer's ultimate test!
            </p>
            <p className={styles.missionParagraph}>
              Through seminars on <em>"Transforming Tech Landscape"</em>, <em>"Gen AI"</em>, 
              <em>"Power BI"</em>, and <em>"Cybersecurity"</em>, we've trained the next generation 
              of heroes. Now it's time to prove your worth.
            </p>
            
            <div className={styles.missionQuote}>
              <p>"Friends don't lie. And neither does code."</p>
            </div>
          </div>

          {/* <div className={styles.missionVisual}>
            <div className={styles.portalFrame}>
              <div className={styles.portalGlow} />
              <img src="/media/door.png" alt="The Gate" className={styles.portalDoorImage} />
            </div>
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Enter?</h2>
          <p className={styles.ctaText}>
            The gate closes on March 12th, 2026. Don't miss your chance to be part of the final battle.
          </p>
          <Link to="/events" className="register-button">View All Events</Link>
        </div>
      </section>
    </div>
  )
}

export default Home
