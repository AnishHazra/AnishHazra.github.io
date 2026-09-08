document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenu = document.getElementById("close-menu");
  const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");
  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.add("active");
  });
  closeMenu.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
  });
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
    });
  });
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href.length < 2) return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800,
    easing: "ease-out",
    once: true,
    offset: 100,
  });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  });
  document.querySelectorAll(".underline-animation").forEach((el) => {
    observer.observe(el);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    function updateCounter() {
      start += increment;
      if (start < target) {
        element.textContent = Math.floor(start) + "+";
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target + "+";
      }
    }
    updateCounter();
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const appsCounter = document.getElementById("apps-counter");
        const yearsCounter = document.getElementById("years-counter");
        const clientsCounter = document.getElementById("clients-counter");
        animateCounter(appsCounter, 15);
        animateCounter(yearsCounter, 3);
        animateCounter(clientsCounter, 50);
        observer.unobserve(entry.target);
      }
    });
  });
  observer.observe(document.getElementById("about"));
});

document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");
  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tab = this.getAttribute("data-tab");
      tabButtons.forEach((btn) => {
        btn.classList.remove("active");
        btn.classList.add("text-gray-400");
      });
      this.classList.add("active");
      this.classList.remove("text-gray-400");
      tabContents.forEach((content) => {
        content.classList.add("hidden");
      });
      document.getElementById(tab + "-projects").classList.remove("hidden");
    });
  });
  const projectCards = document.querySelectorAll(".project-card");
  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-content");
  const closeModal = document.getElementById("close-modal");
  const projectData = {
    "fitness-tracker": {
      title: "FitTracker Pro",
      description:
        "A comprehensive fitness tracking application designed to help users achieve their health and wellness goals. Features include workout planning, nutrition tracking, progress analytics, and social sharing.",
      features: [
        "Workout Planning",
        "Nutrition Tracking",
        "Progress Analytics",
        "Social Features",
        "Wearable Integration",
      ],
      tech: ["React Native", "Firebase", "Redux", "Chart.js"],
      link: "https://github.com/alexjohnson/fittracker",
    },
    "weather-app": {
      title: "WeatherWise",
      description:
        "Beautiful and intuitive weather application providing detailed forecasts, interactive maps, and personalized weather alerts. Built with modern design principles and smooth animations.",
      features: [
        "7-Day Forecast",
        "Interactive Maps",
        "Weather Alerts",
        "Location-based Services",
        "Offline Support",
      ],
      tech: ["Flutter", "OpenWeather API", "Google Maps", "SQLite"],
      link: "https://github.com/alexjohnson/weatherwise",
    },
    "task-manager": {
      title: "TaskMaster",
      description:
        "Intuitive task management application with team collaboration features, project tracking, and productivity insights. Designed for both individual and team productivity.",
      features: [
        "Task Management",
        "Team Collaboration",
        "Project Tracking",
        "Time Tracking",
        "Productivity Reports",
      ],
      tech: ["SwiftUI", "Core Data", "CloudKit", "Combine"],
      link: "https://github.com/alexjohnson/taskmaster",
    },
    "ecommerce-app": {
      title: "ShopEasy",
      description:
        "Full-featured e-commerce platform with seamless payment integration, inventory management, and comprehensive customer analytics. Built for scalability and performance.",
      features: [
        "Product Catalog",
        "Payment Integration",
        "Order Management",
        "Customer Analytics",
        "Push Notifications",
      ],
      tech: ["React Native", "Stripe", "Node.js", "MongoDB"],
      link: "https://github.com/alexjohnson/shopeasy",
    },
    "banking-app": {
      title: "SecureBank",
      description:
        "Secure banking application with advanced biometric authentication, real-time transactions, and comprehensive financial insights. Built with security as the top priority.",
      features: [
        "Biometric Auth",
        "Real-time Transactions",
        "Financial Insights",
        "Bill Payments",
        "Investment Tracking",
      ],
      tech: ["Flutter", "Blockchain", "Biometric API", "Encryption"],
      link: "https://github.com/alexjohnson/securebank",
    },
    "social-app": {
      title: "ConnectHub",
      description:
        "Modern social networking platform with real-time messaging, content sharing, and community building features. Designed to bring people together through technology.",
      features: [
        "Real-time Messaging",
        "Content Sharing",
        "Community Groups",
        "Live Streaming",
        "Privacy Controls",
      ],
      tech: ["Kotlin", "WebSocket", "Firebase", "MediaPlayer"],
      link: "https://github.com/alexjohnson/connecthub",
    },
  };
  projectCards.forEach((card) => {
    card.addEventListener("click", function () {
      const projectId = this.getAttribute("data-project");
      const project = projectData[projectId];
      if (project) {
        modalContent.innerHTML = `
<h2 class="text-3xl font-bold mb-4">${project.title}</h2>
<p class="text-gray-300 mb-6">${project.description}</p>
<div class="grid md:grid-cols-2 gap-8 mb-8">
<div>
<h3 class="text-xl font-bold mb-4 text-primary">Key Features</h3>
<ul class="space-y-2">
${project.features.map((feature) => `<li class="flex items-center"><i class="ri-check-line text-primary mr-2"></i>${feature}</li>`).join("")}
</ul>
</div>
<div>
<h3 class="text-xl font-bold mb-4 text-primary">Technologies Used</h3>
<div class="flex flex-wrap gap-2">
${project.tech.map((tech) => `<span class="px-3 py-1 bg-primary/20 text-primary text-sm !rounded-button">${tech}</span>`).join("")}
</div>
</div>
</div>
<a href="${project.link}" target="_blank" class="glow-button bg-primary text-black px-6 py-3 !rounded-button font-bold whitespace-nowrap inline-block">
View on GitHub
</a>
`;
        modal.classList.add("active");
      }
    });
  });
  closeModal.addEventListener("click", function () {
    modal.classList.remove("active");
  });
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    setTimeout(() => {
      contactForm.style.display = "none";
      successMessage.classList.add("show");
      setTimeout(() => {
        contactForm.style.display = "block";
        contactForm.reset();
        successMessage.classList.remove("show");
      }, 3000);
    }, 500);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scroll-to-top");
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });
  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const viewWorkBtn = document.querySelector(".glow-button");
  viewWorkBtn.addEventListener("click", function () {
    document.getElementById("projects").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hero = document.getElementById("hero");
  const gridContainer = hero.querySelector(".hero-grid-container");
  if (!hero || !gridContainer) return;

  let targetX = 50,
    targetY = 50,
    currentX = 50,
    currentY = 50;
  let rafId = null;

  function animate() {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    gridContainer.style.setProperty("--mx", currentX + "%");
    gridContainer.style.setProperty("--my", currentY + "%");

    rafId = requestAnimationFrame(animate);
  }

  hero.addEventListener("mousemove", function (e) {
    const rect = hero.getBoundingClientRect();
    targetX = ((e.clientX - rect.left) / rect.width) * 100;
    targetY = ((e.clientY - rect.top) / rect.height) * 100;
    if (!rafId) rafId = requestAnimationFrame(animate);
  });

  hero.addEventListener("mouseleave", function () {
    targetX = 50;
    targetY = 50;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const heatmap = document.getElementById("gh-heatmap");
  const totalEl = document.getElementById("gh-total-contributions");
  const streakEl = document.getElementById("gh-streak");
  if (!heatmap || !totalEl || !streakEl) return;

  const levelColors = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];

  fetch("https://github-contributions-api.jogruber.de/v4/AnishHazra?y=last")
    .then((res) => res.json())
    .then((data) => {
      const contributions = data.contributions || [];

      totalEl.textContent = (data.total && data.total.lastYear ? data.total.lastYear : 0).toLocaleString();

      let streak = 0;
      for (let i = contributions.length - 1; i >= 0; i--) {
        if (contributions[i].count > 0) {
          streak++;
        } else {
          break;
        }
      }
      streakEl.textContent = streak;

      heatmap.innerHTML = contributions
        .map(
          (day) =>
            `<span style="background-color:${levelColors[day.level]}" title="${day.date}: ${day.count} contributions"></span>`
        )
        .join("");
    })
    .catch(() => {
      totalEl.textContent = "—";
      streakEl.textContent = "—";
      heatmap.innerHTML = '<p class="text-gray-400 text-sm">Could not load GitHub activity right now.</p>';
    });
});