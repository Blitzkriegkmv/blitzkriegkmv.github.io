import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import styles from './Team.module.css'

const teamMembers = [
  { name: 'Riya Arora', role: 'Executive', codename: 'The Planner', image: '/media/team_25/riya.png' },
  { name: 'Soumya Ranjan', role: 'Executive', codename: 'The Analyst', image: '/media/team_25/soumya.png' },
  { name: 'Priyanshi Jain', role: 'President', codename: 'The Commander', image: '/media/team_25/priyanshi.png' },
  { name: 'Nancy Gupta', role: 'Treasurer', codename: 'The Keeper', image: '/media/team_25/nancy.png' },
  { name: 'Kanishka Rai', role: 'Secretary', codename: 'The Strategist', image: '/media/team_25/kanishka.png' },
  { name: 'Sourabh Pal', role: 'Senior Executive', codename: 'The Coder', image: '/media/team_25/Sourabh.png' },
  { name: 'Sundarm Yadav', role: 'Senior Executive', codename: 'The Voice', image: '/media/team_25/Sundarm.png' },
  { name: 'Aleesha Singh', role: 'Senior Executive', codename: 'The Wordsmith', image: '/media/team_25/aleesha.png' },
  { name: 'Anjali', role: 'Senior Executive', codename: 'The Artist', image: '/media/team_25/anjali.png' },
  { name: 'Isha Sharma', role: 'Executive', codename: 'The Connector', image: '/media/team_25/Isha.png' },
  { name: 'Natya', role: 'Executive', codename: 'The Builder', image: '/media/team_25/Natya.png' },
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
      {/* Header */}
      <header className={styles.pageHeader}>
        <span className={styles.chapterTag}>CHAPTER 04</span>
        <h1 className={styles.pageTitle}>The Hawkins Crew</h1>
        <p className={styles.pageSubtitle}>
          Meet the heroes who make the impossible possible.<br />
          <span className={styles.subtitleAccent}>Friends don't lie. Neither do we.</span>
        </p>
        <div className={styles.headerDecor}>
          <div className={styles.decorLine} />
          <div className={styles.decorLine} />
        </div>
      </header>

      {/* Team Carousel */}
      <section className={styles.teamCarousel}>
        <h2 className={styles.sectionTitle}>
          The Party
        </h2>
        <Swiper
          modules={[Navigation, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={5}
          spaceBetween={0}
          speed={600}
          initialSlide={2}
          coverflowEffect={{
            rotate: 0,
            stretch: 80,
            depth: 150,
            modifier: 1,
            slideShadows: false,
          }}
          navigation
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1, coverflowEffect: { stretch: 0, depth: 100 } },
            480: { slidesPerView: 2, coverflowEffect: { stretch: 40, depth: 120 } },
            768: { slidesPerView: 3, coverflowEffect: { stretch: 60, depth: 130 } },
            1024: { slidesPerView: 4, coverflowEffect: { stretch: 70, depth: 140 } },
            1280: { slidesPerView: 5, coverflowEffect: { stretch: 80, depth: 150 } },
          }}
          className={styles.swiperContainer}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <article className={styles.memberCard}>
                <div className={styles.cardGlow} />
                <div className={styles.memberImageWrapper}>
                  <img src={member.image} alt={member.name} loading="lazy" />
                  <div className={styles.imageOverlay} />
                </div>
                <div className={styles.memberInfo}>
                  <span className={styles.memberCodename}>{member.codename}</span>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberRole}>{member.role}</p>
                </div>
                <div className={styles.cardBorderEffect} />
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Squad Details */}
      <section className={styles.squadSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionDecor}>
            <div className={styles.decorLine} />
            <span className={styles.decorDot} />
            <div className={styles.decorLine} />
          </div>
          <h2 className={styles.sectionTitle}>Squad Divisions</h2>
          <p className={styles.sectionSubtitle}>Specialized units. Strategic formation.</p>
        </div>
        <div className={styles.squadGrid}>
          {teamDetails.map((item, index) => (
            <div 
              key={index} 
              className={styles.squadCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.squadCardGlow} />
              <div className={styles.squadCardBorder} />
              <div className={styles.squadHeader}>
                <span className={styles.squadNumber}>{String(index + 1).padStart(2, '0')}</span>
                <h3 className={styles.squadName}>{item.team}</h3>
              </div>
              <ul className={styles.squadMembers}>
                {item.members.map((member, idx) => (
                  <li key={idx} className={styles.squadMember}>
                    {member}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Leaders */}
      <section className={styles.missionSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionDecor}>
            <div className={styles.decorLine} />
            <span className={styles.decorDot} />
            <div className={styles.decorLine} />
          </div>
          <h2 className={styles.sectionTitle}>Mission Leaders</h2>
          <p className={styles.sectionSubtitle}>Event commanders. Battle strategists.</p>
        </div>
        <div className={styles.missionGrid}>
          {eventDetails.map((item, index) => (
            <div 
              key={index} 
              className={styles.missionCard}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className={styles.missionCardGlow} />
              <div className={styles.missionAccent} />
              <div className={styles.missionContent}>
                <span className={styles.missionTag}>EVENT {String(index + 1).padStart(2, '0')}</span>
                <h3 className={styles.missionName}>{item.event}</h3>
                <div className={styles.missionDivider} />
                <div className={styles.missionHeads}>
                  {item.heads.map((head, idx) => (
                    <div key={idx} className={styles.headBadge}>
                      <span className={styles.headLabel}>Lead {idx + 1}</span>
                      <span className={styles.headName}>{head}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Team
