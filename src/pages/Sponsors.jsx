import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import styles from './Sponsors.module.css'

const sponsorsData = [
  {
    name: 'TechWhiz',
    college: 'PGDAV',
    image: '/media/sponsors_25/techwhiz.jpeg',
    link: 'https://www.instagram.com/techwhizpgdav'
  },
  {
    name: 'Sattva',
    college: 'Kalindi College',
    image: '/media/sponsors_26/sattva.jpg',
    link: 'https://www.instagram.com/cs_sattva'
  },
  {
    name: 'Sanganika',
    college: 'DDUC',
    image: '/media/sponsors_26/sangnika.png',
    link: 'https://www.instagram.com/sanganika_dduc'
  },
  {
    name: 'Ramanugen',
    college: '',
    image: '/media/sponsors_26/ramanu.jpg',
    link: 'https://www.instagram.com/ramanugen'
  },
  {
    name: 'Modulus',
    college: 'Keshav Mahavidyalaya',
    image: '/media/sponsors_26/modulus.jpg',
    link: 'https://www.instagram.com/mathsoc_kmv'
  },
]

const mediaPartners = [
  {
    name: 'Elixir Tech Community',
    role: 'Media Partner',
    image: '/media/sponsors_26/elixir.jpg',
    link: 'https://www.instagram.com/elixirtechcommunity'
  },
  {
    name: 'Final Revise',
    role: 'Media Partner',
    image: '/media/sponsors_26/finalrevise.png',
    link: 'https://www.instagram.com/finalrevise/'
  },
]

const SponsorCard = ({ sponsor, index }) => (
  <a
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
      {sponsor.role && <span className={styles.sponsorRole}>{sponsor.role}</span>}
      <h3 className={styles.sponsorName}>{sponsor.name}</h3>
      {sponsor.college && <p className={styles.sponsorCollege}>{sponsor.college}</p>}
    </div>
    <div className={styles.cardBorder} />
    <div className={styles.visitLink}>
      <span>Visit Portal</span>
      <FontAwesomeIcon icon={faArrowRight} className={styles.linkArrow} />
    </div>
  </a>
)

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
        <div className={styles.sectionLabel}>
          <span className={styles.sectionTag}>Sponsors</span>
        </div>
        <div className={styles.sponsorsGrid}>
          {sponsorsData.map((sponsor, index) => (
            <SponsorCard key={index} sponsor={sponsor} index={index} />
          ))}
        </div>
      </section>

      {/* Media Partners */}
      <section className={styles.sponsorsSection}>
        <div className={styles.sectionLabel}>
          <span className={styles.sectionTag}>Media Partners</span>
        </div>
        <div className={styles.mediaGrid}>
          {mediaPartners.map((partner, index) => (
            <SponsorCard key={index} sponsor={partner} index={index} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Sponsors
