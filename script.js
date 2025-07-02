const translations = {
  pl: {
    title: "Moja Strona",
    home: "Projekty",
    about: "Własna twórczość",
    services: "O mnie",
    contact: "Kontakt",
    content: {
      home: "Witamy na naszej stronie!",
      about: "Jesteśmy firmą z wieloletnim doświadczeniem.",
      services: "Oferujemy różne usługi dostosowane do Twoich potrzeb.",
      contact: "Skontaktuj się z nami przez e-mail lub telefon."
    }
  },
  en: {
    title: "My Website",
    home: "Projects",
    about: "Personal",
    services: "About",
    contact: "Contact",
    content: {
      home: "Welcome to our website!",
      about: "We are a company with years of experience.",
      services: "We offer various services tailored to your needs.",
      contact: "Contact us via email or phone."
    }
  }
};

let currentLang = "pl";
let currentPage = "home";

function setPage(page) {
  currentPage = page;
  updateContent();
}

function toggleLang() {
  currentLang = currentLang === "pl" ? "en" : "pl";
  updateNav();
  updateContent();
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

function updateNav() {
  const t = translations[currentLang];
  document.getElementById("title").textContent = t.title;
  const navButtons = document.querySelectorAll("nav button");
  navButtons[0].textContent = t.home;
  navButtons[1].textContent = t.about;
  navButtons[2].textContent = t.services;
  navButtons[3].textContent = t.contact;
}

function updateContent() {
  const t = translations[currentLang];
  document.getElementById("content").textContent = t.content[currentPage];
}

// Inicjalizacja po załadowaniu
document.addEventListener("DOMContentLoaded", () => {
  updateNav();
  updateContent();
});