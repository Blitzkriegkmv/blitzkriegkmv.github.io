import styles from './Sponsors.module.css'

const sponsorsData = [
  {
    name: 'Modulus',
    college: 'Keshav Mahavidyalaya',
    image: '/media/sponsors_25/modulus.jpg',
    link: 'https://www.instagram.com/mathsoc_kmv/'
  },
  {
    name: 'TechWhiz',
    college: 'PGDAV',
    image: '/media/sponsors_25/techwhiz.jpeg',
    link: 'https://www.instagram.com/techwhizpgdav/'
  },
  {
    name: 'Turing',
    college: 'ANDC',
    image: '/media/sponsors_25/turing.jpg',
    link: 'https://www.instagram.com/turing.andc/'
  },
  {
    name: 'Quicksort',
    college: 'Ramanujan College',
    image: '/media/sponsors_25/quicksort.jpeg',
    link: 'https://www.instagram.com/quiksort.rcdu/'
  },
  {
    name: 'Sanganika',
    college: 'DDUC',
    image: '/media/sponsors_25/sanganika.jpeg',
    link: 'https://www.instagram.com/sanganika_dduc/'
  },
  {
    name: 'Sattva',
    college: 'Kalindi College',
    image: '/media/sponsors_25/sattva.jpeg',
    link: 'https://www.instagram.com/cs_sattva/'
  }
]

function Sponsors() {
  return (
    <section className={styles.sponsorsSection}>
      <h1 className={styles.sponsorsTitle}>Our Sponsors</h1>
      <div className={styles.sponsorsContainer}>
        {sponsorsData.map((sponsor, index) => (
          <a
            key={index}
            href={sponsor.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.sponsorCard}
          >
            <img src={sponsor.image} alt={`${sponsor.name} Sponsor`} />
            <h3>{sponsor.name}</h3>
            <p>{sponsor.college}</p>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Sponsors
