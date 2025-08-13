<template>
    <section class="w-full" :style="{ height: '60vh' }">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 h-full">
        <div
          v-for="(institution, index) in featuredInstitutions"
          :key="index"
          class="relative flex items-center justify-center overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg"
          :style="{ backgroundColor: institution.primary_colour }"
        >
          <!-- Logo -->
          <img
            :src="institution.image_path"
            :alt="`${institution.name} Logo`"
            class="w-24 h-24 object-contain z-10 transition-all duration-300 group-hover:opacity-0 filter drop-shadow-sm"
          />
  
          <!-- Hover Description -->
          <div
            class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center p-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <div class="space-y-2">
              <h3 class="font-semibold text-lg leading-tight">{{ institution.name }}</h3>
              <p class="text-sm leading-relaxed">{{ institution.description }}</p>
              <p class="text-xs text-gray-300 italic">{{ institution.location }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // Enhanced institutions data with image paths
  const institutions = [
    {
      name: "Bangor University",
      primary_colour: "#CE0F25",
      location: "Bangor, Gwynedd, Wales, UK",
      description: "Public research university offering diverse undergraduate, postgraduate, and research programmes.",
      image_path: "/img/bradford.png"
    },
    {
      name: "University of Bradford",
      primary_colour: "#1E3A8A", // Updated to a more appropriate blue based on typical university branding
      location: "Bradford, West Yorkshire, England, UK",
      description: "Public research university known especially for its Department of Peace Studies.",
      image_path: "/img/bradford.png"
    },
    {
      name: "Coventry University",
      primary_colour: "#1B3F94",
      location: "Coventry, England, UK",
      description: "Modern public research university focused on high-quality education and applied research.",
      image_path: "/img/bradford.png"
    },
    {
      name: "UCLan (University of Central Lancashire)",
      primary_colour: "#E30613",
      location: "Preston, Lancashire, England, UK",
      description: "Public university offering a wide range of subjects, recently rebranded.",
      image_path: "/img/bradford.png"
    },
    {
      name: "University of Debrecen",
      primary_colour: "#FBAB2C",
      location: "Debrecen, Hungary",
      description: "Comprehensive university offering over 100 programmes in English across all degree levels.",
      image_path: "/img/bradford.png"
    },
    {
      name: "University of Hull",
      primary_colour: "#006272",
      location: "Kingston upon Hull, East Riding of Yorkshire, England, UK",
      description: "Public research university with multi-hued logo derived from its historic crest.",
      image_path: "/img/bradford.png"
    },
    {
      name: "University of South Wales",
      primary_colour: "#D0021B",
      location: "South Wales, UK",
      description: "University offering a wide range of degree programmes across arts, sciences, business and technology.",
      image_path: "/img/bradford.png"
    },
    {
      name: "Scotland's Rural College (SRUC)",
      primary_colour: "#2D5016", // Updated to a green color appropriate for an agricultural/rural college
      location: "Scotland, UK",
      description: "Land-based institution offering education, research and consultancy in agriculture and rural sectors.",
      image_path: "/img/bradford.png"
    },
    {
      name: "University of the West of England (UWE Bristol)",
      primary_colour: "#D71920",
      location: "Bristol, England, UK",
      description: "University with strong professional programmes and industry connections.",
      image_path: "/img/bradford.png"
    },
    {
      name: "Warwickshire University College",
      primary_colour: "#722F37", // Updated to a burgundy color typical for academic institutions
      location: "Warwickshire, England, UK",
      description: "College-level provider in the Warwickshire region; specific offerings vary.",
      image_path: "/img/bradford.png"
    },
    {
      name: "Metropolitan University College of Medicine",
      primary_colour: "#0B4C5F", // Updated to a medical/professional teal
      location: "Antigua and Barbuda (clinical campuses in USA & UK)",
      description: "Medical college with its primary campus in Antigua and clinical campuses in the USA and UK.",
      image_path: "/img/bradford.png"
    },
    {
      name: "International European University, Malta",
      primary_colour: "#003DA5", // Updated to a European blue
      location: "Malta",
      description: "Private tertiary institution offering programmes in various academic fields.",
      image_path: "/img/bradford.png"
    },
    {
      name: "Ascencia (France and Malta campuses)",
      primary_colour: "#CB3582",
      location: "France; Malta",
      description: "Private institution offering business and vocational programmes in France and Malta.",
      image_path: "/img/bradford.png"
    },
    {
      name: "INTO Global",
      primary_colour: "#E47B00", // Updated to an educational orange
      location: "International (multiple partner universities)",
      description: "Pathway provider offering foundation and preparation programmes in partnership with universities.",
      image_path: "/img/bradford.png"
    },
    {
      name: "OnCampus CEG",
      primary_colour: "#FFCF00",
      location: "International",
      description: "Pathway provider delivering university preparation courses with partner institutions.",
      image_path: "/img/bradford.png"
    },
    {
      name: "Oxford International",
      primary_colour: "#273069",
      location: "International",
      description: "Provider of pathway and preparation programmes for international students.",
      image_path: "/img/bradford.png"
    },
    {
      name: "NAVITAS",
      primary_colour: "#00A651", // Updated to their actual green brand color
      location: "International",
      description: "Global education provider offering university pathway programmes and English language training.",
      image_path: "/img/bradford.png"
    },
    {
      name: "Shorelight",
      primary_colour: "#1B365D", // Updated to a professional navy
      location: "International (US-focused partnerships)",
      description: "Provider partnering with US universities to offer pathway and student support programmes.",
      image_path: "/img/bradford.png"
    },
    {
      name: "Abbey DLD Group of Colleges",
      primary_colour: "#8B1538", // Updated to an academic maroon
      location: "UK",
      description: "Group of UK boarding schools and colleges offering A-levels and foundation programmes.",
      image_path: "/img/bradford.png"
    },
    {
      name: "Wakefield College",
      primary_colour: "#1F4E79", // Updated to an educational blue
      location: "Wakefield, West Yorkshire, England, UK",
      description: "Further education college offering a mix of vocational, A-level and foundation programmes.",
      image_path: "/img/bradford.png"
    },
    {
      name: "Kings College",
      primary_colour: "#800020", // Updated to a traditional academic burgundy
      location: "UK (multiple locations may apply)",
      description: "Boarding school/college offering A-levels and secondary education.",
      image_path: "/img/bradford.png"
    }
  ];
  
  // Logic to change institutions every 24 hours
  const featuredInstitutions = ref([]);
  
  // Pick 4 institutions based on the day number since a fixed date
  const pickInstitutions = () => {
    const dayIndex = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
    const start = (dayIndex * 4) % institutions.length;
    featuredInstitutions.value = institutions
      .slice(start, start + 4)
      .concat(
        start + 4 > institutions.length
          ? institutions.slice(0, (start + 4) % institutions.length)
          : []
      );
  };
  
  pickInstitutions();
  </script>
  
  <style scoped>
  /* Enhanced hover effects and transitions */
  .group:hover {
    transform: scale(1.02);
  }
  
  /* Ensure text is readable on all background colors */
  .group:hover .text-white {
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  }
  
  /* Add subtle animation to the grid items */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .group {
    animation: fadeInUp 0.5s ease-out;
  }
  
  .group:nth-child(1) { animation-delay: 0.1s; }
  .group:nth-child(2) { animation-delay: 0.2s; }
  .group:nth-child(3) { animation-delay: 0.3s; }
  .group:nth-child(4) { animation-delay: 0.4s; }
  </style>