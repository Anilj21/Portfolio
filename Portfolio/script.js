const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
const toast = document.querySelector("[data-toast]");

const projectDetails = {
  smartdocs: {
    type: "Case 01 / AI Web App",
    title: "SmartDocs",
    copy: `
      <p><strong>Problem:</strong> Students and readers often need quick summaries and revision questions without sending private documents to a cloud service.</p>
      <p><strong>My work:</strong> Developed a web app using React, Express.js, Ollama, Firebase authentication, and Tailwind UI for document summarization, quiz generation, and local data processing.</p>
      <p><strong>Why it matters:</strong> It connects full-stack development with practical AI workflows and keeps the user experience focused on study outcomes.</p>
    `,
    tags: ["React", "Express.js", "Ollama", "Firebase Auth", "Tailwind UI"],
  },
  yolov8: {
    type: "Case 02 / Computer Vision",
    title: "YOLOv8 ID Card Detection",
    copy: `
      <p><strong>Problem:</strong> Detect ID cards in real time with a custom dataset instead of relying on a generic detector.</p>
      <p><strong>My work:</strong> Assisted with dataset preparation, annotation in Label Studio, inference scripts, Python workflow practice, and YOLOv8 training using Ultralytics.</p>
      <p><strong>What I learned:</strong> Good AI results depend on the unglamorous parts too: data quality, labels, repeatable runs, and careful validation.</p>
    `,
    tags: ["Python", "YOLOv8", "Label Studio", "Ultralytics", "Object Detection"],
  },
  mine: {
    type: "Case 03 / Team Build",
    title: "Mine Game Clone",
    copy: `
      <p><strong>Problem:</strong> Recreate a betting game flow with frontend screens, integrations, auth behavior, and deployment readiness.</p>
      <p><strong>My work:</strong> Assisted in frontend layout using TailwindCSS, supported integration testing, contributed to deployment preparation, and learned from GraphQL, Razorpay API, and JWT-based authentication implementation.</p>
      <p><strong>Team value:</strong> I focused on layout support, testing, and making sure core behavior was ready for Vercel deployment checks.</p>
    `,
    tags: ["TailwindCSS", "GraphQL", "Razorpay", "JWT", "Vercel"],
  },
};

const envDetails = {
  "Adobe Sign": "Validated document upload, signature request workflows, signing order, status tracking, notifications, expiry, and multi-party edge cases.",
  "Cal.com": "Tested booking flows, availability setup, meeting types, time zones, recurring scheduling, notifications, and overlapping slots.",
  Rover: "Covered service listings, provider-client booking flows, messaging behavior, and payment-related scenarios.",
  "MS Teams": "Tested channel creation, messaging, file sharing, meeting scheduling, notifications, and permission-based access across roles.",
  Workable: "Covered candidate pipelines, stage transitions, job posting behavior, filters, candidate profiles, messaging, and recruitment-stage data consistency.",
  Trello: "Validated board creation, card movement, list transitions, labels, checklists, members, due dates, and activity logs.",
  Shopify: "Tested product management, inventory, orders, customers, checkout flows, discount logic, and interconnected business cases.",
  Buffer: "Covered post scheduling, queue behavior, platform connection logic, publishing states, and UI consistency.",
  Box: "Tested file and folder management, sharing permissions, version control, collaboration flows, and regression sign-off.",
  "Google Calendar": "Validated event creation, recurring event logic, attendee invites, reminders, time zones, and date-based edge cases.",
  QuickBooks: "Covered invoices, expenses, payments, tax calculations, financial views, and data consistency.",
  SAP: "Tested procurement, inventory, order management, analytics views, integrated module data flow, and complex enterprise edge cases.",
};

const skillPanels = {
  frontend: {
    title: "Frontend",
    copy: "HTML, CSS, JavaScript, React basics, Tailwind UI, responsive layouts, and practical interface polish.",
    width: "82%",
  },
  backend: {
    title: "Backend",
    copy: "Express.js, SQL fundamentals, Firebase authentication, API integration awareness, and local AI processing workflows.",
    width: "72%",
  },
  qa: {
    title: "Quality Assurance",
    copy: "Manual testing, exploratory testing, functional testing, regression verification, structured defect tickets, severity tracking, and final QA sign-off.",
    width: "88%",
  },
  tools: {
    title: "Tools",
    copy: "VS Code, Android Studio, Firebase, Label Studio, Microsoft Excel, Vercel, Ollama, and Ultralytics workflows.",
    width: "78%",
  },
};

document.querySelector("[data-year]").textContent = new Date().getFullYear();

const showToast = (message) => {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 1800);
};

const setHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  document.body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    document.body.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-35% 0px -52% 0px", threshold: 0 }
);

sections.forEach((section) => observer.observe(section));

document.querySelectorAll("[data-count-to]").forEach((counter) => {
  const target = Number(counter.dataset.countTo);
  const update = (progress) => {
    counter.textContent = Math.round(target * progress);
  };

  const countObserver = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / 900, 1);
        update(progress);
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      countObserver.disconnect();
    },
    { threshold: 0.45 }
  );

  countObserver.observe(counter);
});

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((item) => item.classList.toggle("is-active", item === button));
    document.querySelectorAll("[data-category]").forEach((card) => {
      const categories = card.dataset.category.split(" ");
      card.classList.toggle("is-hidden", filter !== "all" && !categories.includes(filter));
    });
  });
});

const modal = document.querySelector("[data-modal]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalType = document.querySelector("[data-modal-type]");
const modalCopy = document.querySelector("[data-modal-copy]");
const modalTags = document.querySelector("[data-modal-tags]");

document.querySelectorAll("[data-project]").forEach((card) => {
  card.addEventListener("click", () => {
    const details = projectDetails[card.dataset.project];
    modalType.textContent = details.type;
    modalTitle.textContent = details.title;
    modalCopy.innerHTML = details.copy;
    modalTags.innerHTML = details.tags.map((tag) => `<span>${tag}</span>`).join("");
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  });
});

document.querySelectorAll("[data-modal-close]").forEach((button) => {
  button.addEventListener("click", () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }
});

const envPanel = document.querySelector("[data-env-panel]");
document.querySelectorAll("[data-env]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-env]").forEach((item) => item.classList.toggle("is-active", item === button));
    envPanel.innerHTML = `
      <p class="project-type">Selected Environment</p>
      <h3>${button.dataset.env}</h3>
      <p>${envDetails[button.dataset.env]}</p>
    `;
  });
});

document.querySelectorAll("[data-skill-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    const details = skillPanels[button.dataset.skillTab];
    const panel = document.querySelector("[data-skill-panel]");
    document.querySelectorAll("[data-skill-tab]").forEach((item) => item.classList.toggle("is-active", item === button));
    panel.innerHTML = `
      <h3>${details.title}</h3>
      <p>${details.copy}</p>
      <div class="skill-meter"><span style="width: ${details.width}"></span></div>
    `;
  });
});

document.querySelectorAll("[data-copy-email]").forEach((button) => {
  button.addEventListener("click", async () => {
    const email = button.getAttribute("data-copy-email");
    try {
      await navigator.clipboard.writeText(email);
      showToast("Email copied");
    } catch {
      window.location.href = `mailto:${email}`;
    }
  });
});

document.querySelectorAll("[data-redirect]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.assign(link.href);
  });
});

const themeToggle = document.querySelector("[data-theme-toggle]");
const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
document.documentElement.dataset.theme = savedTheme;
themeToggle.setAttribute("aria-label", savedTheme === "dark" ? "Switch to light theme" : "Switch to dark theme");

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("portfolio-theme", nextTheme);
  themeToggle.setAttribute("aria-label", nextTheme === "dark" ? "Switch to light theme" : "Switch to dark theme");
});

if (window.matchMedia("(pointer: fine)").matches) {
  document.querySelectorAll(".project-card, .note-card, .metric-card, .link-row").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 8;
      const rotateX = ((y / rect.height) - 0.5) * -8;
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}
