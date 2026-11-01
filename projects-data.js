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
      id: "localnokri",
      title: "Local Nokri: Local Jobs & Hire",
      description:
        "Local Nokri connects job seekers with nearby employers, letting them search local vacancies by city and category, apply, chat in-app, and share PDF resumes.",
      image: "assets/images/projects/local-nokri.jpg",
      technologies: ["Flutter", "Dart", "Firebase", "Cloud Firestore", "Firebase Storage", "In-App Chat"],
      appStoreUrl: false,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.aaba.localnokri",
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
      id: "cleardry",
      title: "Cleardry: Dry-Cleaning Services",
      description:
        "Cleardry lets customers book doorstep pickup and delivery for dry cleaning, express dry cleaning, and sofa and carpet spa services, with phone sign-up and order tracking.",
      image: "assets/images/projects/cleardry.jpg",
      technologies: ["Kotlin", "Android SDK", "OTP Authentication", "REST APIs"],
      appStoreUrl: false,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.atikin.cleardry",
    },
    {
      id: "hny",
      title: "HNY: Health Near You",
      description:
        "HNY helps people find verified dentists and dental clinics near them, view clinic details, and book appointments in a few taps.",
      image: "assets/images/projects/hny.jpg",
      technologies: ["Flutter", "Dart", "Firebase", "Firebase Auth", "Cloud Firestore", "Location Services"],
      appStoreUrl: false,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.hny",
    },
    {
      id: "meraminitheatre",
      title: "Mera Mini Theatre",
      description:
        "Mera Mini Theatre is a social platform for turning photos into slideshow-style videos and sharing them with a community of creators who can like, comment, and discover new stories.",
      image: "assets/images/projects/mmt.jpg",
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
      id: "spinx",
      title: "SpinX",
      description:
        "Spinx is a modern mobile application developed to provide users with a seamless and engaging digital experience.",
      image: "assets/images/projects/spinx.jpg",
      technologies: ["Flutter", "Dart", "REST APIs", "MVVM Architecture", "State Management", "Push Notifications"],
      appStoreUrl: false,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.aaba.spinx&hl=en_IN",
    },
    {
      id: "qrx",
      title: "QRX: QR Generator & Scanner",
      description:
        "QRX is a fast, privacy-focused QR and barcode scanner that reads codes from the camera or gallery and generates custom WiFi, contact, and link QR codes, even offline.",
      image: "assets/images/projects/qrx.jpg",
      technologies: ["Flutter", "Dart", "Camera", "Barcode Scanning", "QR Generation", "Offline Support"],
      appStoreUrl: false,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.aaba.qrx",
    },
    {
      id: "vastucompass",
      title: "Vastu Compass: Vastu App Tips",
      description:
        "Vastu Compass is a digital compass and Vastu Shastra guide that shows exact directions with live sensor readings and gives room-by-room tips for homes, offices, and plots.",
      image: "assets/images/projects/compass.jpg",
      technologies: ["Flutter", "Dart", "Compass Sensor", "Localization", "Offline Support"],
      appStoreUrl: false,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.aaba.vastu_compass",
    },
    {
      id: "hbrt",
      title: "HBRT: RERA Rules, Home Guide",
      description:
        "HBRT is a home-buying guide for India that explains the RERA Act in plain language, flags builder red flags, and includes EMI and home loan calculators plus Vastu tips.",
      image: "assets/images/projects/hbrt.jpg",
      technologies: ["Flutter", "Dart", "EMI Calculator", "Compass Sensor", "Local Storage"],
      appStoreUrl: false,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.aaba.hbrt",
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
    .map(
      (tech) =>
        `<span class="px-2.5 py-1 sm:px-3 bg-primary/20 text-primary text-xs sm:text-sm !rounded-button">${tech}</span>`,
    )
    .join("");

  const appStoreHTML = project.appStoreUrl
    ? `
      <a href="${project.appStoreUrl}" target="_blank" rel="noopener noreferrer"
        onclick="event.stopPropagation()" class="transition-transform hover:scale-105">
        <img src="assets/images/App_Store_Badge.png" alt="Download on the App Store"
          class="h-[2rem]" />
      </a>
    `
    : "";

  const playStoreHTML = project.playStoreUrl
    ? `
      <a href="${project.playStoreUrl}" target="_blank" rel="noopener noreferrer"
        onclick="event.stopPropagation()" class="transition-transform hover:scale-105">
        <img src="assets/images/Google_Play_Store_badge.png" alt="Get it on Google Play"
          class="h-[2rem]" />
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
      ? `<div class="flex gap-3 sm:gap-4 mt-auto pt-5 sm:pt-8">${appStoreHTML}${playStoreHTML}</div>`
      : websiteHTML
        ? `<div class="flex justify-start mt-auto pt-5 sm:pt-8">${websiteHTML}</div>`
        : "";

  return `
    <div class="flex flex-col bg-gray-100 !rounded-button overflow-hidden card-hover cursor-pointer project-card"
      data-aos="fade-up" data-aos-delay="${delay}" data-project="${project.id}">
      <img src="${project.image}"
        alt="${project.title}" class="w-full h-auto object-cover" />
      <div class="flex flex-col flex-1 p-5 sm:p-6">
        <h3 class="text-lg sm:text-xl font-bold leading-snug mb-2">${project.title}</h3>
        <p class="text-sm sm:text-base text-gray-400 mb-4 line-clamp-3 sm:line-clamp-none">
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

// Mobile only: pins the projects header and visible tab under the navbar; scrolling slides each card up over the last
function initProjectStack() {
  const mobile = window.matchMedia("(max-width: 639px)");
  const NAV_HEIGHT = 64;
  // Fraction of each scroll step spent holding a card still before the next one starts moving in
  const HOLD = 0.3;
  let ticking = false;

  document.querySelectorAll(".project-stack").forEach((stack) => {
    const count = stack.querySelectorAll(".project-card").length;
    stack.insertAdjacentHTML(
      "beforeend",
      `<div class="project-stack-dots">${'<button type="button" aria-label="Show project"></button>'.repeat(count)}</div>`,
    );
  });

  const clamp = (v) => Math.min(1, Math.max(0, v));
  const easeOut = (v) => 1 - Math.pow(1 - v, 3);
  const track = document.getElementById("projects-track");
  const pinned = track && track.querySelector(".projects-sticky");
  if (!pinned) return;
  const activeStack = () => document.querySelector(".tab-content:not(.hidden) .project-stack");
  const step = () => window.innerHeight * 0.45;

  // 100svh stays fixed while mobile toolbars show/hide, unlike innerHeight
  const viewportProbe = document.createElement("div");
  viewportProbe.style.cssText = "position:fixed;top:0;height:100svh;visibility:hidden;pointer-events:none";
  document.body.appendChild(viewportProbe);

  // Shrinks the cards when header + card won't fit the visible screen, instead of cropping them
  function fitStack(stack) {
    stack.style.zoom = "";
    const available = viewportProbe.offsetHeight - NAV_HEIGHT - 8;
    let zoom = 1;
    // Zoomed content reflows, so one pass undershoots; a few passes converge
    for (let i = 0; i < 6; i++) {
      const over = pinned.getBoundingClientRect().height - available;
      if (over <= 1 || zoom <= 0.65) break;
      const stackHeight = stack.getBoundingClientRect().height;
      zoom = Math.max(0.65, (zoom * (stackHeight - over)) / stackHeight);
      stack.style.zoom = zoom;
    }
  }

  function update() {
    ticking = false;
    const stack = activeStack();
    if (!stack) return;
    const cards = [...stack.querySelectorAll(".project-card")];
    const dots = stack.querySelectorAll(".project-stack-dots button");

    if (!mobile.matches) {
      cards.forEach((card) => card.removeAttribute("style"));
      return;
    }

    const t = (NAV_HEIGHT - track.getBoundingClientRect().top) / step();
    const entered = cards.map((_, i) => (i === 0 ? 1 : easeOut(clamp((t - (i - 1) - HOLD) / (1 - HOLD)))));
    const heights = cards.map((card) => card.offsetHeight);
    const frames = cards.map((_, i) => {
      const covered = Math.min(
        2,
        entered.slice(i + 1).reduce((sum, e) => sum + e, 0),
      );
      return { covered, y: (1 - entered[i]) * window.innerHeight - covered * 8, scale: 1 - covered * 0.05 };
    });

    // Cards keep their natural heights, so a taller card behind must not poke out below the ones in front
    const top = entered.reduce((last, e, i) => (e > 0 ? i : last), 0);
    let limit = Infinity;
    for (let i = top; i >= 0; i--) {
      const { y, scale } = frames[i];
      const hidden = Math.max(0, heights[i] - (limit - y) / scale);
      cards[i].style.clipPath = hidden > 0 ? `inset(0 0 ${hidden}px 0 round 8px)` : "";
      limit = Math.min(limit, y + heights[i] * scale);
    }

    cards.forEach((card, i) => {
      const { covered, y, scale } = frames[i];
      card.style.transform = `translate3d(0, ${y}px, 0) scale(${scale})`;
      card.style.opacity = covered > 1 ? 2 - covered : 1;
      card.style.pointerEvents = covered > 0.5 ? "none" : "auto";
    });

    const active = entered.filter((e) => e > 0.5).length - 1;
    dots.forEach((dot, i) => dot.classList.toggle("is-active", i === active));
  }

  function layout() {
    const stack = activeStack();
    document.querySelectorAll(".project-stack").forEach((s) => (s.style.zoom = ""));
    if (!mobile.matches || !stack) {
      track.style.height = "";
    } else {
      fitStack(stack);
      const count = stack.querySelectorAll(".project-card").length;
      track.style.height = `${pinned.offsetHeight + (count - 1 + HOLD) * step()}px`;
    }
    update();
  }

  document.addEventListener("click", (e) => {
    if (e.target.closest(".tab-button")) {
      requestAnimationFrame(layout);
      return;
    }
    const dot = e.target.closest(".project-stack-dots button");
    if (!dot) return;
    const i = [...dot.parentNode.children].indexOf(dot);
    const trackTop = track.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    window.scrollTo({ top: trackTop + i * step() + 1, behavior: "smooth" });
  });

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking && mobile.matches) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  window.addEventListener("resize", layout);
  mobile.addEventListener("change", layout);
  window.addEventListener("load", layout);
  layout();
}

// Picks the store for the visitor's device; desktops get Google Play since it opens in any browser
function storeLinkFor(project) {
  if (project.websiteUrl) return project.websiteUrl;
  const ua = navigator.userAgent;
  // iPadOS reports itself as a Mac, so touch support is what tells them apart
  const isApple = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  return isApple ? project.appStoreUrl || project.playStoreUrl : project.playStoreUrl || project.appStoreUrl;
}

function initProjectLinks() {
  const allProjects = [...projectsData.personal, ...projectsData.client];
  document.addEventListener("click", (e) => {
    const card = e.target.closest(".project-card");
    if (!card || e.target.closest("a")) return;
    const project = allProjects.find((p) => p.id === card.dataset.project);
    const url = project && storeLinkFor(project);
    if (url) window.open(url, "_blank", "noopener");
  });
}

// Load projects when DOM is ready
function initProjects() {
  renderProjects();
  renderTechStack();
  initProjectStack();
  initProjectLinks();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initProjects);
} else {
  initProjects();
}
