import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from './Team.module.css'

const teamMembers = [
  { name: 'Priyanshi Jain', role: 'President, BLITZ', image: '/media/team_25/priyanshi.png' },
  { name: 'Nancy Gupta', role: 'Treasurer, BLITZ', image: '/media/team_25/nancy.png' },
  { name: 'Kanishka Rai', role: 'Secretary, BLITZ', image: '/media/team_25/kanishka.png' },
  { name: 'Sourabh Pal', role: 'Senior Executive, BLITZ', image: '/media/team_25/Sourabh.png' },
  { name: 'Sundarm Yadav', role: 'Senior Executive, BLITZ', image: '/media/team_25/Sundarm.png' },
  { name: 'Aleesha Singh', role: 'Senior Executive, BLITZ', image: '/media/team_25/aleesha.png' },
  { name: 'Anjali', role: 'Senior Executive, BLITZ', image: '/media/team_25/anjali.png' },
  { name: 'Isha Sharma', role: 'Executive, BLITZ', image: '/media/team_25/Isha.png' },
  { name: 'Natya', role: 'Executive, BLITZ', image: '/media/team_25/Natya.png' },
  { name: 'Riya Arora', role: 'Executive, BLITZ', image: '/media/team_25/riya.png' },
  { name: 'Soumya Ranjan', role: 'Executive, BLITZ', image: '/media/team_25/soumya.png' },
]

const teamDetails = [
  { team: 'Design Team', members: ['Anjali', 'Kanishka Rai'] },
  { team: 'Content Team', members: ['Aleesha Singh', 'Sundarm Yadav'] },
  { team: 'Tech Team', members: ['Sourabh Pal', 'Kanishka Rai', 'Natya'] },
  { team: 'Promotional Team', members: ['Priyanshi Jain'] },
  { team: 'Decoration Team', members: ['Kanishka Rai'] },
  { team: 'Sponsorship Team', members: ['Anjali', 'Isha Sharma'] },
]

const eventDetails = [
  { event: 'Frame It Right', heads: ['Nancy Gupta', 'Priyanshi Jain'] },
  { event: 'The Dalgona Quest', heads: ['Kanishka Rai', 'Anjali'] },
  { event: 'The Final Argument', heads: ['Sundarm Yadav', 'Aleesha Singh'] },
  { event: 'Code Of Duty', heads: ['Sourabh Pal', 'Kanishka Rai'] },
  { event: 'BGMI Battle Royale', heads: ['Sundarm Yadav', 'Kanishka Rai'] },
  { event: 'Geek League', heads: ['Priyanshi Jain', 'Anjali'] },
  { event: 'Beyond The Abstract', heads: ['Nancy Gupta', 'Isha Sharma'] },
]

function Team() {
  return (
    <main className={styles.teamPage}>
      {/* Team Carousel */}
      <section className={styles.teamCarousel}>
        <h2>Meet The Team</h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            600: { slidesPerView: 2 },
            800: { slidesPerView: 3 },
            1000: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
            1400: { slidesPerView: 6 },
          }}
          className={styles.swiperContainer}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className={styles.carouselCard}>
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Team Details */}
      <section className={styles.teamDetails}>
        <h2>Team Details</h2>
        <table className={styles.teamTable}>
          <thead>
            <tr>
              <th>Team</th>
              <th>Members</th>
            </tr>
          </thead>
          <tbody>
            {teamDetails.map((item, index) => (
              <tr key={index}>
                <td>{item.team}</td>
                <td>
                  <ul>
                    {item.members.map((member, idx) => (
                      <li key={idx}>{member}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Event Details */}
      <section className={styles.eventDetails}>
        <h2>Event Details</h2>
        <table className={styles.eventTable}>
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Heads</th>
            </tr>
          </thead>
          <tbody>
            {eventDetails.map((item, index) => (
              <tr key={index}>
                <td>{item.event}</td>
                <td>
                  <ul>
                    {item.heads.map((head, idx) => (
                      <li key={idx}>{head}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  )
}

export default Team
