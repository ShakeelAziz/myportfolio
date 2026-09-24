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
  certificates: [
    {
      title: "Certificate of Appreciation",
      description: "Awarded for outstanding performance and achievement.",
      image: "./assets/cert_5.jpeg",
    },
    {
      title: "Certificate of Appreciation",
      description: "Awarded for outstanding performance and achievement.",
      image: "./assets/cert_4.jpeg",
    },
    {
      title: "Certificate of Appreciation",
      description: "Awarded for outstanding performance and achievement.",
      image: "./assets/cert_3.jpeg",
    },
    {
      title: "Certificate of Appreciation",
      description: "Awarded for outstanding performance and achievement.",
      image: "./assets/cert_6.jpeg",
    },
    {
      title: "Certificate of Appreciation",
      description: "Awarded for outstanding performance and achievement.",
      image: "./assets/cert_1.jpeg",
    },
    {
      title: "Certificate of Appreciation",
      description: "Awarded for outstanding performance and achievement.",
      image: "./assets/cert_2.jpeg",
    },

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
  featuredWork: {
    title: "ASPIRE LMS",
    storeName: "ADLP SED",
    developer: "School Education Department",
    period: "Dec 2024 - Mar 2025",
    storeUpdated: "Apr 24, 2025",
    tagline: "The LMS by ASPIRE offers structured courses, progress tracking and processes.",
    description:
      "The Learning Management System by ASPIRE is designed to enhance learning experience with our structured course platform. Candidates can log in using provided credentials, navigate assigned modules, and track progress. The platform ensures sequential learning—users must complete videos and quizzes before proceeding.",
    features: [
      "Easy login and access with credentials or admin-requested accounts",
      "My Courses — view assigned modules and resume progress anytime",
      "Module completion timeline — finish courses within 10 days of availability",
      "Reattempts and progress tracking — retry failed modules up to three times",
    ],
    stack: "Kotlin, REST APIs, Android SDK",
    category: "Education",
    icon: "./assets/aspire-lms-icon.png",
    link: "https://play.google.com/store/apps/details?id=sed.pmiu.aspirelms&hl=en-US",
  },
  projects: [
    {
      title: "Classroom Construction",
      storeName: "Classroom Construction",
      developer: "PMIU - PESRP",
      tagline:
        "Monitor classroom construction progress under World Bank/GPE funded projects with geo-tagged evidence and dashboard sync.",
      stack: "Flutter, Kotlin, REST APIs",
      icon: "./assets/classroom-construction-icon.png",
      link: "https://play.google.com/store/apps/details?id=sed.pmiu.acc&hl=en-US",
      linkType: "play",
    },
    {
      title: "All Language Text Translator",
      storeName: "All Language Text Translator",
      developer: "APPTRICK",
      tagline:
        "Translate text, photos, and voice across 100+ languages with camera, voice, and conversation tools.",
      stack: "Kotlin, Java, Firebase",
      icon: "./assets/all-language-translator-icon.png",
      link: "https://play.google.com/store/apps/details?id=utranslate.languagetranslator.translatealllanguage.texttranslator.voice.cameratranslator&hl=en-US",
      linkType: "play",
    },
    {
      title: "Al-Arees Contactless Tailoring",
      storeName: "Al-Arees Contactless Tailoring",
      developer: "Al Baraa Hittah",
      tagline:
        "Contactless tailoring in KSA — customers take two photos for remote measurements and order a thobe without visiting the shop.",
      stack: "Kotlin, Java, Firebase",
      icon: "./assets/al-arees-tailoring-icon.svg",
      link: "https://play.google.com/store/apps/details?id=com.alarees.tailoruserapp&hl=en-US",
      linkType: "play",
    },
    {
      title: "Live Earth Map Satellite",
      storeName: "Live Earth Map: Satellite view",
      developer: "APPTRICK",
      tagline:
        "Explore a live Earth map with GPS navigation, satellite view, route finding, and traffic-aware guidance.",
      stack: "Kotlin, Java, Firebase",
      icon: "./assets/live-earth-map-icon.png",
      link: "https://play.google.com/store/apps/details?id=com.liveearthmap.routfinder.gpsnavigation.weather.earthmaps.satelliteview&hl=en-US",
      linkType: "play",
    },
    {
      title: "Photo Translate Text & Voice",
      storeName: "Photo Translate Text & Voice",
      developer: "APPTRICK",
      tagline:
        "Camera translator for photo, text, and voice input with 100+ language translation and object recognition.",
      stack: "Kotlin, Java, Firebase",
      icon: "./assets/photo-translate-icon.png",
      link: "https://play.google.com/store/apps/details?id=com.cameratranslator.languagetraductor.texttranslate.phototranslator.objecttranslation&hl=en-US",
      linkType: "play",
    },
    {
      title: "AI Passport & Visa Photo Maker",
      storeName: "Visa ID: Passport Photo Maker",
      developer: "APPTRICK",
      tagline:
        "Create passport, visa, and ID photos in minutes with auto crop, background cleanup, and print-ready sizing.",
      stack: "Kotlin, Java, Firebase",
      icon: "./assets/passport-photo-maker-icon.png",
      link: "https://play.google.com/store/apps/details?id=passportphoto.visa.idphoto.maker.idpassportsizephoto&hl=en-US",
      linkType: "play",
    },
    {
      title: "GPS Camera & Date Stamper",
      storeName: "GPS camera & date stamper App",
      developer: "APPTRICK",
      tagline:
        "Stamp photos with date, time, GPS location, map, and weather for field proof and documentation workflows.",
      stack: "Kotlin, Java, Firebase",
      icon: "./assets/gps-camera-stamper-icon.png",
      link: "https://play.google.com/store/apps/details?id=com.photo.timestamp.camera.gpsmapcamera.geotaglocationonphoto&hl=en-US",
      linkType: "play",
    },
    {
      title: "QR Code Reader Barcode Scanner",
      storeName: "QR Code Reader Barcode Scanner",
      developer: "APPTRICK",
      tagline:
        "Scan and create QR codes and barcodes, generate labels, and manage shopping or inventory lists on the go.",
      stack: "Kotlin, Java, Firebase",
      icon: "./assets/qr-barcode-scanner-icon.png",
      link: "https://play.google.com/store/apps/details?id=com.qrcodereader.barcode.generator.shoppinglist.scannerapp&hl=en-US",
      linkType: "play",
    },
    {
      title: "PDF Scanner & Reader: Docscan",
      storeName: "PDF Scanner & Reader: Docscan",
      developer: "APPTRICK",
      tagline:
        "Scan documents and images into PDF, then view, read, and manage files with a built-in PDF reader.",
      stack: "Kotlin, Java, Firebase",
      icon: "./assets/pdf-scanner-docscan-icon.png",
      link: "https://play.google.com/store/apps/details?id=com.pdfreader.pdfconverter.pdfviewer.makerapp.pdf.editor.ReadallPDFfiles&hl=en-US",
      linkType: "play",
    },
    {
      title: "Screen Mirroring: Smart View",
      storeName: "Screen Mirroring : Smart View",
      developer: "APPTRICK",
      tagline:
        "Mirror your phone to TV with support for Samsung, Roku, Chromecast, and other smart cast targets.",
      stack: "Kotlin, Java, Firebase",
      icon: "./assets/screen-mirroring-icon.png",
      link: "https://play.google.com/store/apps/details?id=com.screenmirroring.chromecast.miracast.rokucast.castto.screencastapp&hl=en-US",
      linkType: "play",
    },
    {
      title: "Fuel Finder",
      storeName: "Fuel Finder",
      developer: "SixSol Technologies",
      tagline:
        "Flutter mobile app to discover fuel stations and support location-based fuel search for drivers.",
      stack: "Flutter",
      icon: "./assets/fuel-finder-icon.svg",
      link: "https://github.com/ShakeelAziz/FuelFinder",
      linkType: "github",
    },
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


function renderCertificates() {
  const wrapper = document.getElementById("certGrid");
  const modal = document.getElementById("certModal");
  const modalImage = document.getElementById("modalCertImage");
  const closeModal = document.getElementById("closeCertModal");

  portfolioData.certificates.forEach((certificate) => {
    const card = el(
      "div",
      "group cursor-pointer overflow-hidden rounded-xl border border-slate-800 bg-slate-900"
    );

    const img = document.createElement("img");

    img.src = certificate.image;
    img.alt = certificate.title;

    // Same size for every certificate
    img.className =
      "h-64 w-full object-cover transition duration-300 group-hover:scale-105";

    card.appendChild(img);
    wrapper.appendChild(card);

    // Open original image
    card.addEventListener("click", () => {
      modalImage.src = certificate.image;
      modalImage.alt = certificate.title;

      modal.classList.remove("hidden");
      modal.classList.add("flex");

      document.body.classList.add("overflow-hidden");
    });
  });

  // Close button
  closeModal.addEventListener("click", closeCertificateModal);

  // Close when clicking the dark background
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeCertificateModal();
    }
  });

  // Close with Escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeCertificateModal();
    }
  });

  function closeCertificateModal() {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    modalImage.src = "";

    document.body.classList.remove("overflow-hidden");
  }
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

function appendWorkLink(body, work) {
  const isGithub = work.linkType === "github";
  const label = work.linkLabel || (isGithub ? "View on GitHub" : "Get it on Google Play");
  const linkClasses = isGithub
    ? "mt-5 inline-flex items-center gap-2 rounded-lg border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-100 hover:border-slate-400 hover:bg-slate-800"
    : "mt-5 inline-flex items-center gap-2 rounded-lg bg-[#2563EB] px-5 py-3 text-sm font-semibold hover:bg-[#1E40AF]";

  const link = el("a", linkClasses, label);
  link.href = work.link;
  link.target = "_blank";
  link.rel = "noreferrer";
  body.appendChild(link);
}

function buildWorkCard(work, { featured = false } = {}) {
  const card = el(
    "article",
    featured
      ? "overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 lg:p-10"
      : "overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8"
  );

  const layout = el("div", "flex flex-col gap-6 sm:flex-row sm:items-start");
  const logoSize = featured ? "h-28 w-28 rounded-3xl" : "h-24 w-24 rounded-2xl";

  const logoWrap = el("div", "flex shrink-0 flex-col items-center gap-3 sm:items-start");
  const logo = document.createElement("img");
  logo.src = work.icon;
  logo.alt = `${work.title} app icon`;
  logo.className = `${logoSize} border border-slate-700 object-cover shadow-lg shadow-blue-950/40`;
  logoWrap.appendChild(logo);

  if (work.storeName || work.developer) {
    const meta = el("div", "text-center sm:text-left");
    if (work.storeName) {
      meta.appendChild(el("p", "text-xs uppercase tracking-wide text-slate-400", work.storeName));
    }
    if (work.developer) {
      meta.appendChild(el("p", "mt-1 text-sm text-slate-300", work.developer));
    }
    logoWrap.appendChild(meta);
  }

  layout.appendChild(logoWrap);

  const body = el("div", "min-w-0 flex-1");
  body.appendChild(el("h3", featured ? "text-2xl font-bold" : "text-xl font-bold", work.title));

  if (featured && work.period && work.category) {
    body.appendChild(el("p", "mt-2 text-sm text-blue-300", `${work.period} | ${work.category}`));
  }

  if (work.tagline) {
    body.appendChild(el("p", "mt-4 text-slate-300", work.tagline));
  }

  if (featured && work.description) {
    body.appendChild(el("p", "mt-3 text-sm leading-relaxed text-slate-400", work.description));
  }

  if (featured && work.features?.length) {
    body.appendChild(el("p", "mt-6 text-sm font-semibold text-slate-200", "Key features"));
    const featuresList = el("ul", "mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300");
    work.features.forEach((feature) => {
      featuresList.appendChild(el("li", "", feature));
    });
    body.appendChild(featuresList);
  }

  if (work.stack) {
    body.appendChild(el("p", "mt-5 text-sm text-teal-300", `Stack: ${work.stack}`));
  }

  if (featured && work.storeUpdated) {
    body.appendChild(el("p", "mt-2 text-xs text-slate-500", `Play Store updated ${work.storeUpdated}`));
  }

  appendWorkLink(body, work);

  layout.appendChild(body);
  card.appendChild(layout);
  return card;
}

function renderFeaturedWork() {
  const wrapper = document.getElementById("featuredWork");
  wrapper.appendChild(buildWorkCard(portfolioData.featuredWork, { featured: true }));
}

function renderProjects() {
  const wrapper = document.getElementById("projectsGrid");
  portfolioData.projects.forEach((project) => {
    wrapper.appendChild(buildWorkCard(project));
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
renderCertificates();
renderExperience();
renderFeaturedWork();
renderProjects();
renderList("educationList", portfolioData.education);
renderList("languagesList", portfolioData.languages);
setYear();
