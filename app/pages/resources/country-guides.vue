<template>
  <div class="country-guides">
    <!-- Section Header -->
    <div class="section-header">
      <h1 class="section-title">Study Abroad Country Guides</h1>
      <p class="section-subtitle">
        Explore your study destinations with comprehensive guides tailored for international students
      </p>
    </div>

    <!-- If no country selected, show overview -->
    <div v-if="!selectedCountry" class="countries-grid">
      <div
        v-for="country in countries"
        :key="country.slug"
        class="country-card"
        @click="selectCountry(country)"
      >
        <div class="country-flag">
          <span class="flag-emoji">{{ country.flag }}</span>
        </div>
        <div class="country-content">
          <h2 class="country-name">{{ country.name }}</h2>
          <p class="country-summary">{{ country.summary }}</p>
          <div class="country-stats">
            <span class="stat-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              {{ country.practical.currency }}
            </span>
            <span class="stat-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9,22 9,12 15,12 15,22"/>
              </svg>
              {{ country.studyCount }}+ Universities
            </span>
          </div>
        </div>
        <div class="country-arrow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </div>
    </div>

    <!-- If a country is selected, show details -->
    <div v-else class="country-details">
      <button class="back-button" @click="selectedCountry = null">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Back to All Countries
      </button>

      <!-- Country Header -->
      <div class="country-header">
        <div class="country-header-content">
          <div class="country-flag-large">
            <span class="flag-emoji-large">{{ selectedCountry.flag }}</span>
          </div>
          <div>
            <h1 class="country-title">{{ selectedCountry.name }}</h1>
            <p class="country-description">{{ selectedCountry.description }}</p>
          </div>
        </div>
      </div>

      <!-- Content Grid -->
      <div class="details-grid">
        <!-- Left Column -->
        <div class="details-main">
          <!-- Practical Information -->
          <section class="info-section">
            <div class="section-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
            </div>
            <h2 class="section-heading">Essential Information</h2>
            <div class="info-grid">
              <div class="info-item">
                <span class="info-label">Visa Requirements</span>
                <span class="info-value">{{ selectedCountry.practical.visa }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Currency</span>
                <span class="info-value">{{ selectedCountry.practical.currency }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Language</span>
                <span class="info-value">{{ selectedCountry.practical.language }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Best Time to Apply</span>
                <span class="info-value">{{ selectedCountry.practical.bestTime }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Transportation</span>
                <span class="info-value">{{ selectedCountry.practical.transport }}</span>
              </div>
            </div>
          </section>

          <!-- Top Universities -->
          <section class="info-section">
            <div class="section-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>
            <h2 class="section-heading">Top Study Destinations</h2>
            <div class="attractions-list">
              <div v-for="(attraction, idx) in selectedCountry.attractions" :key="idx" class="attraction-item">
                <div class="attraction-header">
                  <h3 class="attraction-name">{{ attraction.name }}</h3>
                  <div class="attraction-meta">
                    <span class="meta-item">{{ attraction.hours }}</span>
                    <span class="meta-item entry-fee">{{ attraction.entry }}</span>
                  </div>
                </div>
                <p class="attraction-description">{{ attraction.description }}</p>
              </div>
            </div>
          </section>

          <!-- Tips -->
          <section class="info-section">
            <div class="section-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/>
              </svg>
            </div>
            <h2 class="section-heading">Student Tips & Insights</h2>
            <ul class="tips-list">
              <li v-for="(tip, idx) in selectedCountry.tips" :key="idx" class="tip-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                {{ tip }}
              </li>
            </ul>
          </section>
        </div>

        <!-- Right Sidebar -->
        <div class="details-sidebar">
          <!-- Gallery -->
          <div class="sidebar-card">
            <h3 class="sidebar-title">Country Gallery</h3>
            <div class="gallery-grid">
              <img
                v-for="(src, idx) in selectedCountry.images"
                :key="idx"
                :src="src"
                alt="Country gallery image"
                class="gallery-image"
              />
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="sidebar-card">
            <h3 class="sidebar-title">Ready to Apply?</h3>
            <p class="sidebar-text">
              Get personalized guidance for studying in {{ selectedCountry.name }}
            </p>
            <div class="sidebar-actions">
              <button class="action-button secondary">
                Book Consultation
              </button>
            </div>
          </div>

          <!-- Quick Stats -->
          <div class="sidebar-card stats-card">
            <h3 class="sidebar-title">Quick Stats</h3>
            <div class="stats-grid">
              <div class="stat-box">
                <div class="stat-number">{{ selectedCountry.studyCount }}+</div>
                <div class="stat-label">Universities</div>
              </div>
              <div class="stat-box">
                <div class="stat-number">95%</div>
                <div class="stat-label">Visa Success</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const countries = [
  {
    name: 'United Kingdom',
    slug: 'uk',
    summary: 'World-class education with rich academic tradition and cultural diversity.',
    description: 'The UK offers prestigious universities, excellent research opportunities, and a gateway to European culture while studying in English.',
    flag: '🇬🇧',
    studyCount: 150,
    practical: {
      visa: 'Student visa required (Tier 4/Student Route)',
      currency: 'Pound Sterling (£)',
      language: 'English',
      bestTime: 'September-November for next year entry',
      transport: 'Buses, trains, underground (Tube)',
    },
    attractions: [
      { 
        name: 'University of Oxford', 
        description: 'One of the world\'s oldest and most prestigious universities with exceptional academic programs.',
        hours: 'Application deadlines vary', 
        entry: 'Highly competitive entry' 
      },
      { 
        name: 'Imperial College London', 
        description: 'Leading institution for science, technology, engineering and medicine with world-class research.',
        hours: 'Year-round applications', 
        entry: 'Merit-based admission' 
      },
    ],
    tips: [
      'Apply early for competitive programs and scholarships',
      'Take advantage of student discounts for travel and attractions',
      'Learn British academic writing style and referencing systems',
      'Join student societies to build networks and friendships'
    ],
    images: [
      '/img/uk.png',
      '/img/uk2.jpg',
      '/img/uk3.jpg',
      '/img/uk4.jpg',
    ],
  },
  {
    name: 'France',
    slug: 'france',
    summary: 'Academic excellence combined with rich cultural heritage and affordable education.',
    description: 'France offers high-quality education, vibrant cultural experiences, and opportunities to learn French while studying in Europe.',
    flag: '🇫🇷',
    studyCount: 120,
    practical: {
      visa: 'Student visa required (Long-stay visa)',
      currency: 'Euro (€)',
      language: 'French (some English programs available)',
      bestTime: 'January-March for September intake',
      transport: 'Metro, buses, trains, cycling',
    },
    attractions: [
      { 
        name: 'Sorbonne University', 
        description: 'Historic university in the heart of Paris offering diverse academic programs.',
        hours: 'Multiple intake periods', 
        entry: 'Competitive selection' 
      },
      { 
        name: 'Sciences Po', 
        description: 'Premier institution for political science, international relations, and public policy.',
        hours: 'Application deadlines vary', 
        entry: 'Selective admission process' 
      },
    ],
    tips: [
      'Learn basic French phrases before arrival',
      'Embrace café culture and French lifestyle',
      'Take advantage of student housing (CROUS)',
      'Explore cultural sites with student discounts'
    ],
    images: [
      '/img/france.jpg',
      '/img/france2.webp',
      '/img/france3.jpg',
      '/img/france4.avif',
    ],
  },
  {
    name: 'Canada',
    slug: 'canada',
    summary: 'High-quality education with post-graduation work opportunities in a multicultural society.',
    description: 'Canada combines excellent universities, beautiful landscapes, and immigration-friendly policies for international students.',
    flag: '🇨🇦',
    studyCount: 200,
    practical: {
      visa: 'Study permit required',
      currency: 'Canadian Dollar (CAD)',
      language: 'English and French',
      bestTime: 'September-December for next year',
      transport: 'Public transit, buses, subway systems',
    },
    attractions: [
      { 
        name: 'University of Toronto', 
        description: 'Top-ranked research university with comprehensive programs and diverse student body.',
        hours: 'Multiple application deadlines', 
        entry: 'Competitive admission' 
      },
      { 
        name: 'McGill University', 
        description: 'Prestigious institution known for research excellence and international perspective.',
        hours: 'Fall and Winter intakes', 
        entry: 'Merit-based selection' 
      },
    ],
    tips: [
      'Apply for Post-Graduation Work Permit eligibility',
      'Prepare for Canadian winters with proper clothing',
      'Explore co-op and internship opportunities',
      'Consider Provincial Nominee Programs for immigration'
    ],
    images: [
      '/img/canada.jpg',
      '/img/canada2.avif',
      '/img/canada3.jpg',
      '/img/canada4.avif',
    ],
  },
  {
    name: 'Malta',
    slug: 'malta',
    summary: 'English-taught programs in a Mediterranean paradise with EU membership benefits.',
    description: 'Malta offers quality education in English, beautiful Mediterranean climate, and access to European opportunities in a safe, compact island nation.',
    flag: '🇲🇹',
    studyCount: 25,
    practical: {
      visa: 'EU students: No visa required, Non-EU: Student visa required',
      currency: 'Euro (€)',
      language: 'English and Maltese',
      bestTime: 'February-May for September intake',
      transport: 'Buses, walking, cycling, ferries',
    },
    attractions: [
      { 
        name: 'University of Malta', 
        description: 'The national university offering comprehensive programs with strong international connections.',
        hours: 'Multiple intake periods', 
        entry: 'Competitive but accessible' 
      },
      { 
        name: 'Malta College of Arts, Science & Technology', 
        description: 'Practical and vocational education with industry-focused programs.',
        hours: 'Flexible scheduling', 
        entry: 'Skills-based admission' 
      },
    ],
    tips: [
      'Take advantage of the Mediterranean lifestyle and outdoor activities',
      'Network within the small but tight-knit international community',
      'Explore internship opportunities in gaming, finance, and tourism sectors',
      'Use Malta as a gateway to explore Europe during breaks'
    ],
    images: [
      '/img/malta.jpg',
      '/img/malta2.webp',
      '/img/malta3.jpg',
      '/img/malta4.webp',
    ],
  },
  {
    name: 'Hungary',
    slug: 'hungary',
    summary: 'High-quality medical and engineering programs with affordable tuition in Central Europe.',
    description: 'Hungary provides excellent education, particularly in medicine and engineering, with low living costs and rich cultural heritage in the heart of Europe.',
    flag: '🇭🇺',
    studyCount: 65,
    practical: {
      visa: 'EU students: No visa required, Non-EU: Student visa required',
      currency: 'Hungarian Forint (HUF)',
      language: 'Hungarian (many English programs available)',
      bestTime: 'January-May for September intake',
      transport: 'Metro, buses, trams, trains',
    },
    attractions: [
      { 
        name: 'Semmelweis University', 
        description: 'World-renowned medical university with excellent international programs and research facilities.',
        hours: 'Annual intake cycles', 
        entry: 'Entrance examination required' 
      },
      { 
        name: 'Budapest University of Technology', 
        description: 'Leading technical university offering engineering and IT programs with industry partnerships.',
        hours: 'September/February intakes', 
        entry: 'Academic merit-based' 
      },
    ],
    tips: [
      'Consider medical programs - Hungary is famous for training international doctors',
      'Learn basic Hungarian phrases to enhance daily interactions',
      'Take advantage of affordable living costs and central European location',
      'Explore Budapest\'s vibrant student life and thermal baths'
    ],
    images: [
      '/img/hungary.png',
      '/img/hungary2.avif',
      '/img/hungary3.jpg',
      '/img/hungary4.avif',
    ],
  },
  {
    name: 'Australia',
    slug: 'australia',
    summary: 'World-class universities with excellent post-study work opportunities and diverse landscapes.',
    description: 'Australia combines top-ranked universities, multicultural society, and strong job prospects with beautiful natural environments and high quality of life.',
    flag: '🇦🇺',
    studyCount: 180,
    practical: {
      visa: 'Student visa (subclass 500) required',
      currency: 'Australian Dollar (AUD)',
      language: 'English',
      bestTime: 'August-November for next year intake',
      transport: 'Buses, trains, trams, cycling',
    },
    attractions: [
      { 
        name: 'University of Melbourne', 
        description: 'Leading research university with comprehensive programs and strong global rankings.',
        hours: 'February/July intakes', 
        entry: 'Highly competitive admission' 
      },
      { 
        name: 'Australian National University', 
        description: 'Premier research-intensive university located in the capital city of Canberra.',
        hours: 'Semester 1 & 2 intakes', 
        entry: 'Merit-based selection' 
      },
    ],
    tips: [
      'Apply for Temporary Graduate visa (subclass 485) for post-study work',
      'Prepare for higher living costs, especially in Sydney and Melbourne',
      'Take advantage of Australia\'s work-while-studying opportunities (20 hours/week)',
      'Explore the diverse landscapes from beaches to outback during semester breaks'
    ],
    images: [
      '/img/australia.jpg',
      '/img/australia2.webp',
      '/img/australia3.jpg',
      '/img/australia4.webp'
    ],
  },
  {
    name: 'Cyprus',
    slug: 'cyprus',
    summary: 'English-taught programs in a strategic Mediterranean location with EU benefits.',
    description: 'Cyprus offers quality British-style education in English, Mediterranean climate, and serves as a bridge between Europe, Asia, and Africa.',
    flag: '🇨🇾',
    studyCount: 35,
    practical: {
      visa: 'EU students: No visa required, Non-EU: Student visa required',
      currency: 'Euro (€)',
      language: 'Greek, Turkish, and English',
      bestTime: 'March-June for September intake',
      transport: 'Buses, taxis, car rental, walking',
    },
    attractions: [
      { 
        name: 'University of Cyprus', 
        description: 'The leading public university offering comprehensive programs with research excellence.',
        hours: 'Annual application cycles', 
        entry: 'Competitive academic standards' 
      },
      { 
        name: 'Cyprus International University', 
        description: 'Private institution with strong international programs and English instruction.',
        hours: 'Fall/Spring intakes', 
        entry: 'Merit and English proficiency' 
      },
    ],
    tips: [
      'Benefit from lower tuition fees compared to other EU countries',
      'Experience the unique blend of European and Middle Eastern cultures',
      'Take advantage of year-round pleasant weather for outdoor activities',
      'Network with the international business community in Limassol and Nicosia'
    ],
    images: [
      '/img/cyprus.png',
      '/img/cyprus2.jpeg',
      '/img/cyprus3.png',
      '/img/cyprus4.jpg'
    ],
  },
];

const selectedCountry = ref(null);

function selectCountry(country) {
  selectedCountry.value = country;
}
</script>

<style scoped>
.country-guides {
  padding: 64px 20px;
  background: #f4f5f3;
  font-family: 'Inter', sans-serif;
  min-height: 100vh;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.section-title {
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
  color: #333333;
  margin-bottom: 16px;
}

.section-subtitle {
  font-size: 18px;
  line-height: 28px;
  color: #666666;
}

/* Countries Grid */
.countries-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.country-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid #DDDDDD;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 16px;
}

.country-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(93, 107, 86, 0.15);
  border-color: #5d6b56;
}

.country-flag {
  width: 60px;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  flex-shrink: 0;
}

.country-flag img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.country-content {
  flex: 1;
}

.country-name {
  font-size: 20px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 8px;
}

.country-summary {
  color: #666666;
  line-height: 1.5;
  margin-bottom: 12px;
  font-size: 14px;
}

.country-stats {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #5d6b56;
  font-weight: 500;
}

.country-arrow {
  color: #5d6b56;
  flex-shrink: 0;
}

/* Country Details */
.country-details {
  max-width: 1200px;
  margin: 0 auto;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: white;
  border: 1px solid #DDDDDD;
  border-radius: 8px;
  color: #5d6b56;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 32px;
  transition: all 0.2s ease;
}

.back-button:hover {
  background: #f8f9f8;
  border-color: #5d6b56;
}

.country-header {
  background: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  margin-bottom: 32px;
}

.country-header-content {
  display: flex;
  align-items: center;
  gap: 24px;
}

.country-flag-large {
  width: 80px;
  height: 56px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
}

.country-flag-large img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.country-title {
  font-size: 32px;
  font-weight: 700;
  color: #333333;
  margin-bottom: 8px;
}

.country-description {
  font-size: 16px;
  color: #666666;
  line-height: 1.6;
}

/* Details Grid */
.details-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 32px;
  align-items: start;
}

.details-main {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.info-section {
  background: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

.section-icon {
  width: 48px;
  height: 48px;
  background: rgba(133, 148, 132, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5d6b56;
  margin-bottom: 16px;
}

.section-heading {
  font-size: 20px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 20px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.info-label {
  font-size: 12px;
  font-weight: 500;
  color: #666666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.info-value {
  font-size: 14px;
  color: #333333;
  font-weight: 500;
}

.attractions-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.attraction-item {
  border-left: 3px solid #5d6b56;
  padding-left: 16px;
}

.attraction-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 8px;
}

.attraction-name {
  font-size: 16px;
  font-weight: 600;
  color: #333333;
}

.attraction-meta {
  display: flex;
  gap: 12px;
  align-items: center;
}

.meta-item {
  font-size: 12px;
  color: #666666;
  background: #f8f9f8;
  padding: 4px 8px;
  border-radius: 4px;
}

.entry-fee {
  background: rgba(235, 101, 52, 0.1);
  color: #EB6534;
  font-weight: 500;
}

.attraction-description {
  color: #666666;
  line-height: 1.5;
  font-size: 14px;
}

.tips-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.tip-item {
  display: flex;
  align-items: start;
  gap: 12px;
  color: #666666;
  line-height: 1.5;
  font-size: 14px;
}

.tip-item svg {
  color: #5d6b56;
  margin-top: 2px;
  flex-shrink: 0;
}

/* Sidebar */
.details-sidebar {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.sidebar-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

.sidebar-title {
  font-size: 16px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 16px;
}

.sidebar-text {
  color: #666666;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 20px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}

.gallery-image {
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 6px;
}

.sidebar-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.action-button {
  padding: 12px 16px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.action-button.primary {
  background: #5d6b56;
  color: white;
  border: none;
}

.action-button.primary:hover {
  background: #6b7a6a;
}

.action-button.secondary {
  background: transparent;
  color: #EB6534;
  border: 1px solid #EB6534;
}

.action-button.secondary:hover {
  background: #EB6534;
  color: white;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.stat-box {
  text-align: center;
  padding: 16px;
  background: #f8f9f8;
  border-radius: 8px;
}

.stat-number {
  font-size: 24px;
  font-weight: 700;
  color: #5d6b56;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 12px;
  color: #666666;
  font-weight: 500;
}

/* Responsive Design */
@media (max-width: 1023px) {
  .details-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .country-header-content {
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }
}

@media (max-width: 767px) {
  .country-guides {
    padding: 32px 16px;
  }
  
  .section-title {
    font-size: 28px;
    line-height: 36px;
  }
  
  .countries-grid {
    grid-template-columns: 1fr;
  }
  
  .country-card {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
  
  .country-stats {
    justify-content: center;
  }
  
  .info-section {
    padding: 20px;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
  }
  
  .attraction-header {
    flex-direction: column;
    align-items: start;
    gap: 8px;
  }
}</style>