// Project Data
const projectsData = {
  personal: [
    {
      id: "omli",
      title: "Omli: Think Speak & Learn",
      description:
        "Omli is an AI-powered educational and communication development application designed to help children improve their speaking, thinking, creativity.",
      image: "assets/images/projects/omlikids.jpeg",
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
      id: "snapplant",
      title: "Snap Plant: AI Plant Identifier",
      description:
        "Snap Plant identifies plants from a photo, diagnoses diseases with treatment plans, and builds smart watering schedules, with an AI botanist to chat with about every plant.",
      image: "assets/images/projects/snapplant.jpeg",
      technologies: ["React Native", "AI Integration", "Camera", "REST APIs", "Push Notifications", "Weather API"],
      appStoreUrl: "https://apps.apple.com/us/app/snap-plant-ai-identification/id6737281030",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.gregplantid",
    },
    {
      id: "healo",
      title: "Healo: AI Healing Companion",
      description:
        "Healo is an AI-powered mental wellness and emotional health application designed to help users improve their well-being through personalized conversations.",
      image: "assets/images/projects/healo.jpeg",
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
      id: "meraminitheatre",
      title: "Mera Mini Theatre",
      description:
        "Mera Mini Theatre is a social platform for turning photos into slideshow-style videos and sharing them with a community of creators who can like, comment, and discover new stories.",
      image: "assets/images/projects/meraminitheatre.jpeg",
      technologies: ["Flutter", "Dart", "Firebase", "Firebase Auth", "Cloud Firestore", "Firebase Storage"],
      appStoreUrl: false,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.mera_mini_theatre",
    },
    {
      id: "gkeyboard",
      title: "G Keyboard: Rewrite Text",
      description:
        "G Keyboard is a custom iOS keyboard with built-in AI writing tools that fix grammar, change tone, and shorten text right where you type, in any app.",
      image: "assets/images/projects/gboard.jpeg",
      technologies: [
        "Swift",
        "SwiftUI",
        "Keyboard Extension",
        "ChatGPT Integration",
        "AI Integration",
        "In-App Purchases",
      ],
      appStoreUrl: "https://apps.apple.com/in/app/g-keyboard-rewrite-text/id6754501008",
      playStoreUrl: false,
    },
    {
      id: "omli",
      title: "Omli: Think Speak & Learn",
      description:
        "Omli is an AI-powered educational and communication development application designed to help children improve their speaking, thinking, creativity.",
      image: "assets/images/projects/omlikids.jpeg",
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
  const MOBILE_TAGS = 3;
  const extraTags = project.technologies.length - MOBILE_TAGS;
  const technologiesHTML =
    project.technologies
      .map(
        (tech, i) =>
          `<span class="${i >= MOBILE_TAGS ? "hidden sm:inline-block" : ""} px-2 py-0.5 sm:px-3 sm:py-1 bg-primary/20 text-primary text-[10px] sm:text-sm !rounded-button">${tech}</span>`,
      )
      .join("") +
    (extraTags > 0
      ? `<span class="sm:hidden px-2 py-0.5 bg-primary/20 text-primary text-[10px] !rounded-button">+${extraTags}</span>`
      : "");

  const appStoreHTML = project.appStoreUrl
    ? `
      <a href="${project.appStoreUrl}" target="_blank" rel="noopener noreferrer"
        onclick="event.stopPropagation()" class="transition-transform hover:scale-105">
        <img src="assets/images/App_Store_Badge.png" alt="Download on the App Store"
          class="h-7 sm:h-[2rem]" />
      </a>
    `
    : "";

  const playStoreHTML = project.playStoreUrl
    ? `
      <a href="${project.playStoreUrl}" target="_blank" rel="noopener noreferrer"
        onclick="event.stopPropagation()" class="transition-transform hover:scale-105">
        <img src="assets/images/Google_Play_Store_badge.png" alt="Get it on Google Play"
          class="h-7 sm:h-[2rem]" />
      </a>
    `
    : "";

  const websiteHTML = project.websiteUrl
    ? `
      <a href="${project.websiteUrl}" target="_blank" rel="noopener noreferrer"
        onclick="event.stopPropagation()"
        class="inline-flex items-center gap-1.5 sm:gap-2 bg-primary text-white px-3 py-2 sm:px-5 sm:py-2.5 !rounded-button font-medium text-xs sm:text-sm hover:bg-primary/90 transition-colors">
        <i class="ri-external-link-line"></i>
        Visit Website
      </a>
    `
    : "";

  const storeLinksHTML =
    appStoreHTML || playStoreHTML
      ? `<div class="flex flex-col sm:flex-row items-start gap-2 sm:gap-4 mt-auto pt-4 sm:pt-8">${appStoreHTML}${playStoreHTML}</div>`
      : websiteHTML
        ? `<div class="flex justify-start mt-auto pt-4 sm:pt-8">${websiteHTML}</div>`
        : "";

  return `
    <div class="flex flex-col bg-gray-100 !rounded-button overflow-hidden card-hover cursor-pointer project-card"
      data-aos="fade-up" data-aos-delay="${delay}" data-project="${project.id}">
      <img src="${project.image}"
        alt="${project.title}" class="w-full h-32 sm:h-auto object-cover" />
      <div class="flex flex-col flex-1 p-3 sm:p-6">
        <h3 class="text-sm sm:text-xl font-bold leading-snug mb-1 sm:mb-2">${project.title}</h3>
        <p class="text-xs sm:text-base text-gray-400 mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-none">
          ${project.description}
        </p>
        <div class="flex flex-wrap gap-1 sm:gap-2">
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

// Function to render the tech stack strip in the About section from real project data
function renderTechStack() {
  const techStackContainer = document.getElementById("tech-stack");
  if (!techStackContainer) return;

  const allTechnologies = [...projectsData.personal, ...projectsData.client].flatMap((project) => project.technologies);
  const uniqueTechnologies = [...new Set(allTechnologies)];

  techStackContainer.innerHTML = uniqueTechnologies
    .map(
      (tech) =>
        `<span class="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium !rounded-button">${tech}</span>`,
    )
    .join("");
}

// Load projects when DOM is ready
function initProjects() {
  renderProjects();
  renderTechStack();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initProjects);
} else {
  initProjects();
}
