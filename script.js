const portfolioData = {
  skills: [
    "Software Development",
    "Mobile App Development",
    "Flutter",
    "Kotlin",
    "Android SDK",
    "AI Automations",
    "WordPress",
    "Wix",
    "Google Ads",
    "REST APIs",
    "MVVM Architecture",
    "Team Leadership"
  ],
  services: [
    {
      title: "Custom Mobile App Development",
      description: "Production-ready Android and Flutter applications with clean architecture, scalable APIs, and reliable user experience."
    },
    {
      title: "AI Automation for Business Workflows",
      description: "Automate repetitive operations with AI-powered pipelines, reducing manual workload and improving operational speed."
    },
    {
      title: "Growth Websites & Marketing",
      description: "Business websites in WordPress/Wix and Google Ads campaigns focused on conversion, lead quality, and measurable ROI."
    }
  ],
  experience: [
    {
      role: "Software Engineer",
      company: "National Training and Documentation Center",
      period: "Most Recent",
      location: "Riyadh, Saudi Arabia",
      details: "Working on software engineering initiatives focused on digital training, documentation workflows, and scalable solution delivery."
    },
    {
      role: "Senior Software Engineer Mobile Apps",
      company: "PMIU - PESRP (Govt. of Punjab)",
      period: "Dec 2024 - Jul 2025",
      location: "Punjab, Pakistan",
      details: "Built LMS and construction monitoring apps with Kotlin/Flutter, offline sync, geo-tagging, and secure authentication."
    },
    {
      role: "Development Team Lead",
      company: "APPTRICK",
      period: "Mar 2023 - Aug 2024",
      location: "Rawalpindi, Pakistan",
      details: "Led mobile teams and delivered large-scale app improvements with modern UI/UX and architecture upgrades."
    },
    {
      role: "Mobile Application Developer",
      company: "SixSol Technologies",
      period: "Sep 2021 - May 2022",
      location: "Rawalpindi, Pakistan",
      details: "Developed client-focused Flutter and Kotlin apps including taxi and utility products with cross-team delivery."
    },
    {
      role: "Android Developer",
      company: "BOT Solutions / Xerox Soft Technologies",
      period: "Jul 2019 - May 2021",
      location: "Islamabad & Rawalpindi, Pakistan",
      details: "Delivered early-career Android projects for regional clients and built a strong base in product engineering."
    }
  ],
  projects: [
    {
      title: "ASPIRE LMS",
      date: "Dec 2024 - Mar 2025",
      description: "Android-based teacher training platform with modules, progress tracking, quizzes, secure login, and sequential course flow.",
      stack: "Kotlin, REST APIs, Android SDK",
      link: "https://play.google.com/store/apps/details?id=sed.pmiu.aspirelms&hl=en",
      linkLabel: "Play Store Link"
    },
    {
      title: "Classroom Construction App",
      date: "May 2025",
      description: "Monitoring app for field teams with geo-tagged photo evidence, timestamps, and synchronization to a central dashboard.",
      stack: "Flutter, Kotlin, GPS/Camera APIs, Offline Sync",
      link: "https://play.google.com/store/apps/details?id=sed.pmiu.acc&hl=en_US",
      linkLabel: "Play Store Link"
    },
    {
      title: "All Language Text Translation",
      date: "Dec 2022 - May 2023",
      description: "Translation platform supporting text, voice, object, and photo translation across 125+ languages with history and favorites.",
      stack: "Android, AI/ML Integrations, Camera OCR",
      link: "https://www.linkedin.com/in/shakeelaziz8",
      linkLabel: "View Featured Work"
    },
    {
      title: "Flutter CRM Application",
      date: "Jul 2021 - Mar 2022",
      description: "Customer relationship management app built for business operations and process tracking.",
      stack: "Flutter, Dart",
      link: "https://github.com/shakeelaziz/flutter_crm_app",
      linkLabel: "Project Link"
    },
    {
      title: "Al-Arees Contactless Tailoring",
      date: "Apr 2021 - Jun 2021",
      description: "COVID-era tailoring solution using photo-based measurements and contactless ordering workflow.",
      stack: "Android, Product UX",
      link: "https://play.google.com/store/apps/details?id=com.alarees.tailoruserapp",
      linkLabel: "Play Store Link"
    },
    {
      title: "Lawyer Hiring App",
      date: "Mar 2020 - Dec 2020",
      description: "Final year thesis app for lawyer hiring, court guidance, and legal support workflows.",
      stack: "Flutter, Dart",
      link: "https://www.linkedin.com/in/shakeelaziz8",
      linkLabel: "View Featured Work"
    }
  ],
  education: [
    "MS Information Sciences and Technology - Quaid-i-Azam University (2021 - 2023)",
    "BS Computer Science - University of Peshawar (2015 - 2019)"
  ],
  languages: [
    "English (Professional Working Proficiency)",
    "Urdu (Native/Bilingual)",
    "Arabic (Elementary)"
  ]
};

function el(tag, classNames = "", text = "") {
  const node = document.createElement(tag);
  if (classNames) node.className = classNames;
  if (text) node.textContent = text;
  return node;
}

function renderSkills() {
  const wrapper = document.getElementById("skillsGrid");
  portfolioData.skills.forEach((skill) => {
    const card = el("div", "rounded-xl border border-slate-800 bg-slate-900 p-4");
    card.appendChild(el("p", "text-sm text-slate-200", skill));
    wrapper.appendChild(card);
  });
}

function renderServices() {
  const wrapper = document.getElementById("servicesGrid");
  portfolioData.services.forEach((service) => {
    const card = el("article", "rounded-xl border border-slate-800 bg-slate-900 p-6");
    card.appendChild(el("h3", "text-lg font-semibold", service.title));
    card.appendChild(el("p", "mt-3 text-sm text-slate-300", service.description));
    wrapper.appendChild(card);
  });
}

function renderExperience() {
  const wrapper = document.getElementById("experienceList");
  portfolioData.experience.forEach((item) => {
    const card = el("article", "rounded-xl border border-slate-800 bg-slate-900 p-6");
    card.appendChild(el("h3", "text-lg font-semibold", `${item.role} - ${item.company}`));
    card.appendChild(el("p", "mt-2 text-sm text-blue-300", `${item.period} | ${item.location}`));
    card.appendChild(el("p", "mt-3 text-sm text-slate-300", item.details));
    wrapper.appendChild(card);
  });
}

function renderProjects() {
  const wrapper = document.getElementById("projectsGrid");
  portfolioData.projects.forEach((project) => {
    const card = el("article", "rounded-xl border border-slate-800 bg-slate-900 p-6");
    card.appendChild(el("h3", "text-lg font-semibold", project.title));
    card.appendChild(el("p", "mt-2 text-xs uppercase tracking-wide text-slate-400", project.date));
    card.appendChild(el("p", "mt-3 text-sm text-slate-300", project.description));
    card.appendChild(el("p", "mt-3 text-sm text-teal-300", `Stack: ${project.stack}`));

    if (project.link) {
      const a = el("a", "mt-4 inline-block text-sm font-medium text-blue-300 hover:text-blue-200", project.linkLabel || "Project Link");
      a.href = project.link;
      a.target = "_blank";
      a.rel = "noreferrer";
      card.appendChild(a);
    }
    wrapper.appendChild(card);
  });
}

function renderList(targetId, dataArray) {
  const wrapper = document.getElementById(targetId);
  dataArray.forEach((item) => {
    const li = el("li", "rounded-lg border border-slate-800 bg-slate-950 p-3 text-sm", item);
    wrapper.appendChild(li);
  });
}

function setYear() {
  document.getElementById("year").textContent = new Date().getFullYear();
}

renderSkills();
renderServices();
renderExperience();
renderProjects();
renderList("educationList", portfolioData.education);
renderList("languagesList", portfolioData.languages);
setYear();
