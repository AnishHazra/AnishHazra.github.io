// Project Data
const projectsData = {
  personal: [
    {
      id: 'fitness-tracker',
      title: 'FitTracker Pro',
      description: 'A comprehensive fitness tracking app with workout plans, nutrition tracking, and progress analytics.',
      image: 'https://res.cloudinary.com/dbnwetu3r/image/upload/v1730920043/portfolio/vehc9b18s2ql5voeoxuf.png',
      technologies: ['React Native', 'Firebase'],
      appStoreUrl: 'https://apps.apple.com/app/your-app-id',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=your.package.name',
      hasStoreLinks: true
    },
    {
      id: 'weather-app',
      title: 'WeatherWise',
      description: 'Beautiful weather app with detailed forecasts, interactive maps, and personalized weather alerts.',
      image: 'https://res.cloudinary.com/dbnwetu3r/image/upload/v1730920010/portfolio/ethsmvl7fujrjw2un63z.png',
      technologies: ['Flutter', 'OpenWeather API'],
      appStoreUrl: null,
      playStoreUrl: null,
      hasStoreLinks: true
    },
    {
      id: 'task-manager',
      title: 'TaskMaster',
      description: 'Intuitive task management app with team collaboration, project tracking, and productivity insights.',
      image: 'https://res.cloudinary.com/dbnwetu3r/image/upload/v1738530494/ay3fynpptn6au2izelbi.png',
      technologies: ['SwiftUI', 'Core Data'],
      appStoreUrl: null,
      playStoreUrl: null,
      hasStoreLinks: true
    }
  ],
  client: [
    {
      id: 'ecommerce-app',
      title: 'ShopEasy',
      description: 'Full-featured e-commerce platform with payment integration, inventory management, and customer analytics.',
      image: 'https://readdy.ai/api/search-image?query=E-commerce%20mobile%20app%20interface%2C%20shopping%20cart%2C%20product%20catalog%2C%20modern%20retail%20design%2C%20professional%20mobile%20commerce%20UI&width=400&height=300&seq=ecommerce-app&orientation=landscape',
      technologies: ['React Native', 'Stripe'],
      appStoreUrl: null,
      playStoreUrl: null,
      hasStoreLinks: true
    },
    {
      id: 'banking-app',
      title: 'SecureBank',
      description: 'Secure banking application with biometric authentication, real-time transactions, and financial insights.',
      image: 'https://readdy.ai/api/search-image?query=Banking%20mobile%20app%20interface%2C%20financial%20dashboard%2C%20secure%20design%2C%20transaction%20history%2C%20modern%20fintech%20UI%20design&width=400&height=300&seq=banking-app&orientation=landscape',
      technologies: ['Flutter', 'Blockchain'],
      appStoreUrl: null,
      playStoreUrl: null,
      hasStoreLinks: true
    },
    {
      id: 'social-app',
      title: 'ConnectHub',
      description: 'Social networking platform with real-time messaging, content sharing, and community building features.',
      image: 'https://readdy.ai/api/search-image?query=Social%20media%20mobile%20app%20interface%2C%20chat%20features%2C%20user%20profiles%2C%20modern%20social%20networking%20design%2C%20engaging%20mobile%20UI&width=400&height=300&seq=social-app&orientation=landscape',
      technologies: ['Kotlin', 'WebSocket'],
      appStoreUrl: null,
      playStoreUrl: null,
      hasStoreLinks: true
    }
  ]
};

// Function to create project card HTML
function createProjectCard(project, delay) {
  const technologiesHTML = project.technologies.map(tech =>
    `<span class="px-3 py-1 bg-primary/20 text-primary text-sm !rounded-button">${tech}</span>`
  ).join('');

  const storeLinksHTML = project.hasStoreLinks ? `
    <div class="flex gap-4 justify-center mt-8">
      <a href="${project.appStoreUrl}" target="_blank" rel="noopener noreferrer"
        class="transition-transform hover:scale-105">
        <img src="assets/images/App_Store_Badge.png" alt="Download on the App Store"
          class="h-[2rem] sm:h-[2rem]" />
      </a>
      <a href="${project.playStoreUrl}" target="_blank"
        rel="noopener noreferrer" class="transition-transform hover:scale-105">
        <img src="assets/images/Google_Play_Store_badge.png" alt="Get it on Google Play"
          class="h-[2rem] sm:h-[2rem]" />
      </a>
    </div>
  ` : '';

  return `
    <div class="bg-gray-100 !rounded-button overflow-hidden card-hover cursor-pointer project-card"
      data-aos="fade-up" data-aos-delay="${delay}" data-project="${project.id}">
      <img src="${project.image}"
        alt="${project.title}" class="w-full h-55 object-cover" />
      <div class="p-6">
        <h3 class="text-xl font-bold mb-2">${project.title}</h3>
        <p class="text-gray-400 mb-4">
          ${project.description}
        </p>
        <div class="flex flex-wrap gap-2">
          ${technologiesHTML}
        </div>
        ${storeLinksHTML}
      </div>
    </div>
  `;
}

// Function to render projects
function renderProjects() {
  const personalProjectsContainer = document.querySelector('#personal-projects .grid');
  const clientProjectsContainer = document.querySelector('#client-projects .grid');

  if (personalProjectsContainer) {
    personalProjectsContainer.innerHTML = projectsData.personal
      .map((project, index) => createProjectCard(project, 400 + (index * 100)))
      .join('');
  }

  if (clientProjectsContainer) {
    clientProjectsContainer.innerHTML = projectsData.client
      .map((project, index) => createProjectCard(project, 400 + (index * 100)))
      .join('');
  }

  // Re-initialize AOS for dynamically loaded content
  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }
}

// Load projects when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderProjects);
} else {
  renderProjects();
}
