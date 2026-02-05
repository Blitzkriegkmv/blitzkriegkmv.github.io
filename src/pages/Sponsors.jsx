import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import styles from './Sponsors.module.css'

const sponsorsData = [
  {
    name: 'Modulus',
    college: 'Keshav Mahavidyalaya',
    role: 'The Mathematicians',
    image: '/media/sponsors_25/modulus.jpg',
    link: 'https://www.instagram.com/mathsoc_kmv/'
  },
  {
    name: 'TechWhiz',
    college: 'PGDAV',
    role: 'The Wizards',
    image: '/media/sponsors_25/techwhiz.jpeg',
    link: 'https://www.instagram.com/techwhizpgdav/'
  },
  {
    name: 'Turing',
    college: 'ANDC',
    role: 'The Pioneers',
    image: '/media/sponsors_25/turing.jpg',
    link: 'https://www.instagram.com/turing.andc/'
  },
  {
    name: 'Quicksort',
    college: 'Ramanujan College',
    role: 'The Optimizers',
    image: '/media/sponsors_25/quicksort.jpeg',
    link: 'https://www.instagram.com/quiksort.rcdu/'
  },
  {
    name: 'Sanganika',
    college: 'DDUC',
    role: 'The Innovators',
    image: '/media/sponsors_25/sanganika.jpeg',
    link: 'https://www.instagram.com/sanganika_dduc/'
  },
  {
    name: 'Sattva',
    college: 'Kalindi College',
    role: 'The Essence',
    image: '/media/sponsors_25/sattva.jpeg',
    link: 'https://www.instagram.com/cs_sattva/'
  }
]

function Sponsors() {
  return (
    <main className={styles.sponsorsPage}>
      {/* Header */}
      <header className={styles.pageHeader}>
        <span className={styles.chapterTag}>CHAPTER 05</span>
        <h1 className={styles.pageTitle}>Our Allies</h1>
        <p className={styles.pageSubtitle}>
          In the battle against the Upside Down, we don't fight alone.<br />
          <span className={styles.subtitleAccent}>These are the allies who stand with us.</span>
        </p>
        <div className={styles.headerDecor}>
          <div className={styles.decorLine} />
          <div className={styles.decorLine} />
        </div>
      </header>

      {/* Sponsors Grid */}
      <section className={styles.sponsorsSection}>
        <div className={styles.sponsorsGrid}>
          {sponsorsData.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.sponsorCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardGlow} />
              <div className={styles.cardImageWrapper}>
                <img src={sponsor.image} alt={sponsor.name} loading="lazy" />
                <div className={styles.imageOverlay} />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.sponsorRole}>{sponsor.role}</span>
                <h3 className={styles.sponsorName}>{sponsor.name}</h3>
                <p className={styles.sponsorCollege}>{sponsor.college}</p>
              </div>
              <div className={styles.cardBorder} />
              <div className={styles.visitLink}>
                <span>Visit Portal</span>
                <FontAwesomeIcon icon={faArrowRight} className={styles.linkArrow} />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Want to Join the Alliance?</h2>
          <p className={styles.ctaText}>
            The Upside Down grows stronger. We need more allies to fight the darkness.
          </p>
          <a 
            href="mailto:blitz@keshav.du.ac.in" 
            className="register-button"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  )
}

export default Sponsors
