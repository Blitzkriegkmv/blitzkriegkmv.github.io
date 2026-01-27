import { Link } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <div className={styles.centerContent}>
        <img src="/media/SG_logo.png" alt="SG Logo" className={styles.centerLogo} />
        <h1 className={styles.mainTitle}>BLITZKRIEG</h1>
        <p className={styles.subTitle}>2025</p>
        <p className={styles.dateTitle}>2nd APRIL 2025</p>
        <p className={styles.onwardsTitle}>10:00 AM onwards</p>
        <p className={styles.taglineTitle}>Tech. Fun. Fest</p>
        <Link to="/events" className="register-button">View All Events</Link>
      </div>

      {/* Lore Section */}
      <section className={styles.loreSection}>
        <img src="/media/gaurd_1.png" alt="Guard 1" className={`${styles.loreImage} ${styles.leftImage}`} />
        <div className={styles.loreText}>
          <h2 className={styles.loreTitle}>Welcome to<br />Blitzkrieg '25</h2>
          <p>
            BLITZKRIEG at Keshav Mahavidyalaya is dedicated to cultivating the advancement of the technology industry and inspiring the creation of novel and innovative solutions for global challenges.
            These events serve as a platform for individuals and organizations to converge, exchanging expertise and knowledge with the collective aim of shaping a brighter future through transformative technology.
            <br /><br />
            We organised a number of events for BLITZKRIEG'24, including our coding competition "Code Duel 2.0", our web development competition "Web Bugs", our debating competition "Job Wars", our gaming competition "BGMI Showdown", our treasure hunt competition "Finding Meme-O" and many more. These activities would not be possible without the tireless efforts of committed volunteers and the organisational staff.
          </p>
          <Link to="/team" className="register-button">Meet Our Team</Link>
        </div>
        <img src="/media/gaurd_2.png" alt="Guard 2" className={`${styles.loreImage} ${styles.rightImage}`} />
      </section>

      {/* Unleashed Section */}
      <section className={styles.unleashedSection}>
        <div className={styles.unleashedText}>
          <h2 className={styles.unleashedTitle}>
            BRILLIANT INFORMATION<br />
            TECHNOLOGY ZEALOTS:<br />
            <strong>BLITZ</strong>
          </h2>
          <p>
            Hello Tech Enthusiasts!🚀
            <br /><br />
            Gear up for a futuristic adventure at our tech fest!
            It's set to be a byte-sized explosion of fun and laughter.
            <br /><br />
            Calling all programmers, gamers, and tech lovers—there's something special for everyone.
            Grab your nerdy glasses, power up those laptops, and let's geek out together!
            Catch you at the fest, where the only acceptable bug is the one in your code!
            In order to promote contact between students and faculty members and to raise awareness of the newest technology developments, we host competitions, seminars, and workshops.
            BLITZ held a number of events during the most recent session, such as seminars on "Transforming Tech Landscape",
            "Gen AI", "Power BI", "Cybersecurity" and "Steps to Build Career in IT".
            To further assist students in becoming experts in their chosen fields, we also held a number of coding competitions.
            <br /><br />
            In addition to these informative seminars, our yearly technical festival, BLITZKRIEG, highlights the vibrant energy
            and steadfast passion of our student body. Students from various backgrounds and interests come together to celebrate technology and innovation.
            The festival provides a broad array of programs that encourage innovation and test the sharpest minds, including both tech and non-tech ones.
          </p>
        </div>
        <img src="/media/doll.png" alt="Doll" className={styles.unleashedImage} />
      </section>
    </div>
  )
}

export default Home
