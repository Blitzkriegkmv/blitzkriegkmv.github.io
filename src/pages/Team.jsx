import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import styles from './Team.module.css'

const teamMembers = [
  { name: 'Lavanya Sharma', role: 'Executive', codename: 'The Designer', image: '/media/team_26/lavanya.jpg' },
  { name: 'Parth', role: 'Executive', codename: 'The Gamer', image: '/media/team_26/parth.jpg' },
  { name: 'Kanishka Rai', role: 'President', codename: 'The Commander', image: '/media/team_26/kanishka.jpg' },
  { name: 'Anjali', role: 'Treasurer', codename: 'The Artist', image: '/media/team_26/anjali.jpg' },
  { name: 'Natya Vidhan Biswas', role: 'Secretary', codename: 'The Builder', image: '/media/team_26/natya.jpg' },
  { name: 'Ayushi Jain', role: 'Senior Executive', codename: 'The Architect', image: '/media/team_26/ayushi.jpg' },
  { name: 'Aksh Kumar', role: 'Senior Executive', codename: 'The Warrior', image: '/media/team_26/aksh.jpg' },
  { name: 'Vrinda Goyal', role: 'Senior Executive', codename: 'The Oracle', image: '/media/team_26/vrinda.jpg' },
  { name: 'Priyal Vatsa', role: 'Executive', codename: 'The Connector', image: '/media/team_26/priyal.jpg' },
]

const teamDetails = [
  { team: 'Content Team', members: ['Priyal Vatsa', 'Vrinda Goyal'] },
  { team: 'Design Team', members: ['Ayushi Jain', 'Lavanya Sharma', 'Anjali', 'Kanishka Rai'] },
  { team: 'Tech Team', members: ['Natya Vidhan Biswas', 'Parth'] },
  { team: 'Sponsor & PR Team', members: ['Aksh Kumar', 'Riya', 'Soumya'] },
]

const eventDetails = [
  { event: 'Between Two Worlds', heads: ['Kanishka', 'Priyal'], time: '11:30 AM – 1:30 PM', venue: 'Seminar Hall' },
  { event: 'Stranger Screens', heads: ['Anjali', 'Lavanya'], time: '11:30 AM – 1:30 PM', venue: '319 & 321' },
  { event: "Eleven's Logic Lab", heads: ['Vrinda', 'Natya'], time: '11:30 AM – 1:30 PM', venue: 'LT - 3' },
  { event: 'Hawkings Hack', heads: ['Ayushi', 'Natya'], time: '1:30 – 3:30 PM', venue: 'Seminar Hall' },
  { event: 'Upside Showdown', heads: ['Parth', 'Aksh'], time: '1:30 – 3:30 PM', venue: '301 & 302' },
  { event: 'Escape The Upside Down', heads: ['Anjali', 'Kanishka', 'Priyal'], time: '3:30 – 5:30 PM', venue: 'Canteen Lawn' },
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
                <div className={styles.missionMeta}>
                  <span className={styles.missionMetaItem}>{item.time}</span>
                  <span className={styles.missionMetaSep}>·</span>
                  <span className={styles.missionMetaItem}>{item.venue}</span>
                </div>
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
