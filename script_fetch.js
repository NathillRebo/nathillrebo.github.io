
let currentLang = "pl";
let currentPage = "projects";

function setPage(page) {
  currentPage = page;
  updateContent();
}

function toggleLang() {
  currentLang = currentLang === "pl" ? "en" : "pl";
  updateNav();

  const type = currentPage.startsWith("project_")
    ? "projects"
    : currentPage.startsWith("personal_")
    ? "personal"
    : null;

  if (type) {
    const allItems = translations.pl.content[type].concat(translations.en.content[type]);

    const currentItem = allItems.find(item =>
      getPageId(item.link) === currentPage
    );

    if (currentItem) {
      const baseName = currentItem.link.replace(/_(pl|en)\.html$/, "");

      const match = translations[currentLang].content[type].find(item =>
        item.link.startsWith(baseName)
      );

      if (match) {
        currentPage = getPageId(match.link);
      }
    }
  }

  updateContent();
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

function updateNav() {
  const t = translations[currentLang];
  document.getElementById("title").textContent = t.title;
  const navButtons = document.querySelectorAll("nav button");
  navButtons[0].textContent = t.projects;
  navButtons[1].textContent = t.personal;
  navButtons[2].textContent = t.about;
  navButtons[3].textContent = t.contact;
}

function updateContent() {
  const t = translations[currentLang];
  const main = document.getElementById("content");

  if (currentPage === "projects" || currentPage === "personal") {
    const items = t.content[currentPage];
    main.innerHTML = `
      <div class="item-list">
        ${items.map((item, i) => `
          <div class="item animate" style="animation-delay: ${i * 0.125}s">
            <img src="${item.img}" alt="">
            <div class="item-text">
              <a href="#" onclick="setPage('${getPageId(item.link)}')">${item.name}</a>
              <p>${item.desc}</p>
            </div>
          </div>
        `).join("")}
      </div>
    `;
		addFooter();
  } else if (currentPage === "about" || currentPage === "contact") {
    main.innerHTML = `<div class="card">${t.content[currentPage]}</div>
`;
   } else if (currentPage.startsWith("project_")) {
    const allProjects = translations.pl.content.projects.concat(translations.en.content.projects);
    const project = allProjects.find(p => {
      const linkObj = typeof p.link === 'object' ? p.link : { pl: p.link, en: p.link };
      return getPageId(linkObj.pl) === currentPage || getPageId(linkObj.en) === currentPage;
    });

    let file;
    if (project) {
      const linkObj = typeof project.link === 'object' ? project.link : { pl: project.link, en: project.link };
      file = `/projects/${linkObj[currentLang]}`;
    } else {
      file = `/projects/${currentPage}.html`; // fallback
    }

    fetch(file)
      .then(res => {
        if (!res.ok) throw new Error("Nie znaleziono pliku");
        return res.text();
      })
      .then(html => {
        main.innerHTML = `<div class="project-wrapper">${html}</div>`;
      })
      .catch(err => {
        main.innerHTML = `<div class="card"><p>Błąd podczas ładowania projektu: ${err.message}</p></div>`;
      });

    addFooter();
  } else if (currentPage.startsWith("personal_")) {
		const allPersonal = translations.pl.content.personal.concat(translations.en.content.personal);
		const personal = allPersonal.find(p => {
			const linkObj = typeof p.link === 'object' ? p.link : { pl: p.link, en: p.link };
			return getPageId(linkObj.pl) === currentPage || getPageId(linkObj.en) === currentPage;
		});

		let file;
		if (personal) {
			const linkObj = typeof personal.link === 'object' ? personal.link : { pl: personal.link, en: personal.link };
			file = `/personal/${linkObj[currentLang]}`;
		} else {
			file = `/personal/${currentPage}.html`; // fallback
		}

		fetch(file)
			.then(res => {
				if (!res.ok) throw new Error("Nie znaleziono pliku");
				return res.text();
			})
			.then(html => {
				main.innerHTML = `<div class="project-wrapper">${html}</div>`;
			})
			.catch(err => {
				main.innerHTML = `<div class="card"><p>Błąd podczas ładowania projektu: ${err.message}</p></div>`;
			});

		addFooter();
	} else {
    main.innerHTML = "<p>Nieznana strona.</p>";
		addFooter();
  }
}

function addFooter() {
  if (!document.getElementById("footer")) {
    const footer = document.createElement("footer");
    footer.id = "footer";
    footer.innerHTML = `<p>&copy; 2025 Stopka</p>`;
    document.body.appendChild(footer);
  }
}

function getPageId(link) {
  return link.split("/").pop().replace(".html", "");
}

document.addEventListener("DOMContentLoaded", () => {
  updateNav();
  const params = new URLSearchParams(window.location.search);
  const pageParam = params.get("page");
  if (pageParam) {
    currentPage = pageParam;
  }
  updateContent();
});

document.addEventListener("click", function (e) {
  const target = e.target;

  if (
    target.tagName === "IMG" &&
    (target.classList.contains("project-image") || target.classList.contains("gallery-image"))
  ) {
    showFullImage(target.src);
  }

  if (
    target.classList.contains("image-overlay") ||
    target.classList.contains("full-image")
  ) {
    closeFullImage();
  }
});

function showFullImage(src) {
  if (document.querySelector(".image-overlay")) return; // już otwarte

  const overlay = document.createElement("div");
  overlay.className = "image-overlay";

  const img = document.createElement("img");
  img.className = "full-image";
  img.src = src;

  overlay.appendChild(img);
  document.body.appendChild(overlay);
}

function closeFullImage() {
  const overlay = document.querySelector(".image-overlay");
  if (overlay) {
    const img = overlay.querySelector("img.full-image");
    if (img) {
      img.style.animation = "zoomOut 0.3s ease forwards";
    }
    overlay.style.animation = "fadeOutOverlay 0.3s ease forwards";

    // Usuń element po animacji
    setTimeout(() => {
      overlay.remove();
    }, 300);
  }
}