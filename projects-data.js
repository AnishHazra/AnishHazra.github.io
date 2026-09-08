// Project Data
const projectsData = {
  personal: [
    {
      id: "omli",
      title: "Omli: Think Speak & Learn",
      description:
        "Omli is an AI-powered educational and communication development application designed to help children improve their speaking, thinking, creativity.",
      image: "assets/images/omli.jpeg",
      technologies: [
        "Swift",
        "SwiftUI",
        "UIKit",
        "MVVM Architecture",
        "REST APIs",
        "AI Integration",
        "In-App Purchases",
        "Push Notifications",
        "Local Storage",
        "User Authentication",
      ],
      appStoreUrl: "https://apps.apple.com/in/app/omli-think-speak-learn/id6754549572",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.omli.app&hl=en_IN",
    },
    {
      id: "healo",
      title: "Healo: AI Healing Companion",
      description:
        "Healo is an AI-powered mental wellness and emotional health application designed to help users improve their well-being through personalized conversations.",
      image: "assets/images/healo.jpeg",
      technologies: [
        "Flutter",
        "Dart",
        "MVVM Architecture",
        "REST APIs",
        "AI Integration",
        "Push Notifications",
        "Audio Streaming",
        "Local Storage",
        "User Authentication",
      ],
      appStoreUrl: "https://apps.apple.com/in/app/healo-ai-healing-companion/id6529520211",
      playStoreUrl: "https://play.google.com/store/apps/details?id=healoai.infiheal.app&hl=en_IN",
    },
    {
      id: "spinx",
      title: "SpinX",
      description:
        "Spinx is a modern mobile application developed to provide users with a seamless and engaging digital experience.",
      image: "assets/images/spinx.jpeg",
      technologies: ["Flutter", "Dart", "REST APIs", "MVVM Architecture", "State Management", "Push Notifications"],
      appStoreUrl: false,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.aaba.spinx&hl=en_IN",
    },
  ],
  client: [
    {
      id: "dotnotes",
      title: "Dotnotes",
      description: "Free study material aggregation for the modern student.",
      image: "assets/images/dotnotes.jpeg",
      technologies: ["React", "Tailwind", "Flask", "Supabase"],
      websiteUrl: "https://dotnotes.in/",
    },
    {
      id: "chawlas2",
      title: "Chawlas2",
      description:
        "Three generations. 65 years. One unforgettable Cream Chicken. From a humble kitchen in Haldwani to 170+ outlets across 6 countries — served home-style, exactly the way Sardar Attar Singh Chawla intended.",
      image: "assets/images/chawlas.jpeg",
      technologies: ["React", "Tailwind", "Firebase"],
      websiteUrl: "https://chawlas2.com/",
    },
    {
      id: "completefamilywithpets",
      title: "Complete Family With Pets",
      description: "Find Your Perfect Furry Friend.",
      image: "assets/images/petcare.jpeg",
      technologies: ["HTML", "CSS", "JS"],
      websiteUrl: "https://completefamilywithpets.netlify.app/",
    },
  ],
};

// Function to create project card HTML
function createProjectCard(project, delay) {
  const technologiesHTML = project.technologies
    .map((tech) => `<span class="px-3 py-1 bg-primary/20 text-primary text-sm !rounded-button">${tech}</span>`)
    .join("");

  const appStoreHTML = project.appStoreUrl
    ? `
      <a href="${project.appStoreUrl}" target="_blank" rel="noopener noreferrer"
        onclick="event.stopPropagation()" class="transition-transform hover:scale-105">
        <img src="assets/images/App_Store_Badge.png" alt="Download on the App Store"
          class="h-[2rem] sm:h-[2rem]" />
      </a>
    `
    : "";

  const playStoreHTML = project.playStoreUrl
    ? `
      <a href="${project.playStoreUrl}" target="_blank" rel="noopener noreferrer"
        onclick="event.stopPropagation()" class="transition-transform hover:scale-105">
        <img src="assets/images/Google_Play_Store_badge.png" alt="Get it on Google Play"
          class="h-[2rem] sm:h-[2rem]" />
      </a>
    `
    : "";

  const websiteHTML = project.websiteUrl
    ? `
      <a href="${project.websiteUrl}" target="_blank" rel="noopener noreferrer"
        onclick="event.stopPropagation()"
        class="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 !rounded-button font-medium text-sm hover:bg-primary/90 transition-colors">
        <i class="ri-external-link-line"></i>
        Visit Website
      </a>
    `
    : "";

  const storeLinksHTML =
    appStoreHTML || playStoreHTML
      ? `<div class="flex gap-4 justify-start mt-8">${appStoreHTML}${playStoreHTML}</div>`
      : websiteHTML
        ? `<div class="flex justify-start mt-8">${websiteHTML}</div>`
        : "";

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
  const personalProjectsContainer = document.querySelector("#personal-projects .grid");
  const clientProjectsContainer = document.querySelector("#client-projects .grid");

  if (personalProjectsContainer) {
    personalProjectsContainer.innerHTML = projectsData.personal
      .map((project, index) => createProjectCard(project, 400 + index * 100))
      .join("");
  }

  if (clientProjectsContainer) {
    clientProjectsContainer.innerHTML = projectsData.client
      .map((project, index) => createProjectCard(project, 400 + index * 100))
      .join("");
  }

  // Re-initialize AOS for dynamically loaded content
  if (typeof AOS !== "undefined") {
    AOS.refresh();
  }
}

// Load projects when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderProjects);
} else {
  renderProjects();
}
