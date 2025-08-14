<template>
    <section class="faq-section">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-subtitle">
            Get answers to common questions about studying abroad and our services
          </p>
        </div>
  
        <!-- FAQ Grid -->
        <div class="faq-grid">
          <!-- Left Column - Main FAQs -->
          <div class="faq-main">
            <div class="faq-list">
              <div
                v-for="(faq, index) in mainFaqs"
                :key="index"
                class="faq-item"
                :class="{ 'active': activeIndex === index }"
              >
                <button
                  class="faq-question"
                  @click="toggleFaq(index)"
                  :aria-expanded="activeIndex === index"
                >
                  <span class="question-text">{{ faq.question }}</span>
                  <div class="toggle-icon">
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      stroke-width="2"
                      :class="{ 'rotated': activeIndex === index }"
                    >
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </div>
                </button>
                
                <div 
                  class="faq-answer"
                  :ref="el => answerRefs[index] = el"
                >
                  <div class="answer-content">
                    <p v-html="faq.answer"></p>
                    <div v-if="faq.cta" class="answer-cta">
                      <NuxtLink :to="faq.cta.link" class="cta-button">
                        {{ faq.cta.text }}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Right Column - Quick Help -->
          <div class="faq-sidebar">
            <div class="help-card">
              <div class="help-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                  <path d="M12 17h.01"/>
                </svg>
              </div>
              <h3 class="help-title">Still Have Questions?</h3>
              <p class="help-text">
                Can't find what you're looking for? Our counsellors are here to help with personalized guidance.
              </p>
              <div class="help-actions">
                <NuxtLink to="/contact" class="help-button primary">
                  Book Free Consultation
                </NuxtLink>
                <a href="tel:+2348065442707" class="help-button secondary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  Call Now
                </a>
              </div>
            </div>
  
            <!-- Popular Resources -->
            <div class="resources-card">
              <h4 class="resources-title">Popular Resources</h4>
              <ul class="resources-list">
                <li>
                  <NuxtLink to="/resources/templates" class="resource-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
                    </svg>
                    2025 Student Guide
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/events" class="resource-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    Exciting Events
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/countries" class="resource-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                    Country Guides
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const activeIndex = ref(null)
  const answerRefs = ref([])
  
  // FAQ data focusing on common student worries
  const mainFaqs = ref([
    {
      question: "Do I need IELTS or TOEFL to study abroad?",
      answer: "Not always! While most universities require English proficiency tests, some accept alternatives like Duolingo, PTE, or even waive the requirement if you studied in English. We help identify universities that match your language qualifications and can guide you through test preparation if needed.",
      cta: {
        text: "Check Your Eligibility",
        link: "/apply"
      }
    },
    {
      question: "What's the easiest country to get a visa for?",
      answer: "Countries like <strong>Canada, Ireland, and Australia</strong> generally have more straightforward visa processes for Nigerian students. However, the 'easiest' depends on your profile, course choice, and financial situation. Our counsellors assess your background to recommend the best options with highest success rates.",
      cta: {
        text: "Get Country Recommendations",
        link: "/book-counselling"
      }
    },
    {
      question: "How much do your services cost?",
      answer: "Our <strong>initial consultation is completely FREE</strong>. Service fees vary based on the package you choose - from basic admission support to comprehensive visa and travel assistance. We offer flexible payment plans and our fees are transparent with no hidden charges.",
      cta: {
        text: "View Service Packages",
        link: "/services"
      }
    },
    {
      question: "Can I work while studying abroad?",
      answer: "Yes! Most study destinations allow part-time work during studies. <strong>Canada and Australia</strong> offer 20 hours/week during studies and unlimited hours during breaks. The <strong>UK</strong> allows 20 hours/week, while the <strong>US</strong> has on-campus work opportunities. We provide guidance on work regulations for each country.",
      cta: null
    },
    {
      question: "What if I don't have enough money for tuition?",
      answer: "Don't let finances stop your dreams! We help identify <strong>scholarships, grants, and affordable universities</strong>. Many students combine partial scholarships with education loans or family support. We also recommend countries with lower tuition fees and living costs that fit your budget.",
      cta: {
        text: "Explore Scholarships",
        link: "/scholarships"
      }
    },
    {
      question: "How long does the entire process take?",
      answer: "Typically <strong>6-12 months</strong> from application to travel, depending on the intake and country. We recommend starting at least 8-10 months before your intended study date. Our structured timeline ensures you meet all deadlines without rushing through important steps.",
      cta: {
        text: "Download Timeline Guide",
        link: "/resources"
      }
    },
    {
      question: "What happens if my visa gets rejected?",
      answer: "While rare with our guidance (we have a 95%+ success rate), we provide <strong>full support for reapplication or alternative options</strong>. This includes reviewing rejection reasons, strengthening your profile, or exploring other suitable countries. Your success is our commitment.",
      cta: null
    },
    {
      question: "Do you help with accommodation and travel arrangements?",
      answer: "Absolutely! Our support extends beyond admissions. We assist with <strong>accommodation booking, airport pickup, SIM cards, bank account opening</strong>, and settling-in support. Many of our students arrive to a home away from home, not a foreign country.",
      cta: {
        text: "See Full Support Services",
        link: "/services"
      }
    }
  ])
  
  const toggleFaq = (index) => {
    if (activeIndex.value === index) {
      activeIndex.value = null
    } else {
      activeIndex.value = index
    }
  }
  
  watch(activeIndex, () => {
    if (activeIndex.value !== null) {
      nextTick(() => {
        const activeElement = document.querySelector('.faq-item.active')
        if (activeElement) {
          activeElement.scrollIntoView({ block: 'nearest' })
        }
      })
    }
  })
  </script>
  
  <style scoped>
  .faq-section {
    padding: 64px 0;
    background: #f4f5f3;
    font-family: 'Inter', sans-serif;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 80px;
  }
  
  .section-header {
    text-align: center;
    margin-bottom: 48px;
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
    max-width: 600px;
    margin: 0 auto;
  }
  
  .faq-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 48px;
    align-items: start;
  }
  
  .faq-main {
    background: white;
    border-radius: 12px;
    padding: 32px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  }
  
  .faq-list {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  
  .faq-item {
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #DDDDDD;
  }
  
  .faq-item.active {
    border-color: #5d6b56;
    box-shadow: 0 4px 12px rgba(133, 148, 132, 0.15);
  }
  
  .faq-question {
    width: 100%;
    padding: 20px 24px;
    background: white;
    border: none;
    text-align: left;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    color: #333333;
  }
  
  .faq-item.active .faq-question {
    background: #f8f9f8;
    color: #5d6b56;
  }
  
  .faq-question:hover {
    background: #f8f9f8;
    color: #5d6b56;
  }
  
  .question-text {
    flex: 1;
    padding-right: 16px;
  }
  
  .toggle-icon {
    color: #5d6b56;
  }
  
  .toggle-icon svg.rotated {
    transform: rotate(180deg);
  }
  
  .faq-answer {
    overflow: hidden;
    background: white;
  }
  
  .faq-item.active .faq-answer {
    display: block;
  }
  
  .faq-item:not(.active) .faq-answer {
    display: none;
  }
  
  .answer-content {
    padding: 24px;
    color: #666666;
    line-height: 1.6;
  }
  
  .answer-content p {
    margin-bottom: 16px;
  }
  
  .answer-cta {
    margin-top: 16px;
  }
  
  .cta-button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    background: #5d6b56;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
  }
  
  .cta-button:hover {
    background: #6b7a6a;
  }
  
  .faq-sidebar {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  
  .help-card, .resources-card {
    background: white;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
    border: 1px solid #DDDDDD;
  }
  
  .help-icon {
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
  
  .help-title {
    font-size: 18px;
    font-weight: 600;
    color: #333333;
    margin-bottom: 8px;
  }
  
  .help-text {
    color: #666666;
    line-height: 1.5;
    margin-bottom: 20px;
    font-size: 14px;
  }
  
  .help-actions {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  
  .help-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 16px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
  }
  
  .help-button.primary {
    background: #5d6b56;
    color: white;
  }
  
  .help-button.secondary {
    background: transparent;
    color: #EB6534 ;
    border: 1px solid #EB6534 ;
  }
  
  .help-button.primary:hover {
    background: #6b7a6a;
  }
  
  .help-button.secondary:hover {
    background: #EB6534 ;
    color: white;
  }
  
  .resources-title {
    font-size: 16px;
    font-weight: 600;
    color: #333333;
    margin-bottom: 16px;
  }
  
  .resources-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  
  .resource-link {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #666666;
    text-decoration: none;
    font-size: 14px;
    padding: 8px 0;
    border-bottom: 1px solid #f0f0f0;
  }
  
  .resource-link:hover {
    color: #5d6b56;
  }
  
  .resource-link svg {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
  }
  
  /* Responsive Design */
  @media (max-width: 1023px) {
    .container {
      padding: 0 40px;
    }
    
    .faq-grid {
      grid-template-columns: 1fr;
      gap: 32px;
    }
    
    .section-title {
      font-size: 30px;
      line-height: 40px;
    }
  }
  
  @media (max-width: 767px) {
    .faq-section {
      padding: 32px 0;
    }
    
    .container {
      padding: 0 20px;
    }
    
    .section-title {
      font-size: 26px;
      line-height: 36px;
    }
    
    .section-subtitle {
      font-size: 16px;
      line-height: 24px;
    }
    
    .faq-main {
      padding: 20px;
    }
    
    .faq-question {
      padding: 16px 20px;
      font-size: 15px;
    }
    
    .answer-content {
      padding: 0 20px 20px;
    }
    
    .help-card, .resources-card {
      padding: 20px;
    }
  }
  </style>