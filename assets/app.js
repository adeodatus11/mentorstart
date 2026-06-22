(function () {
  const navButton = document.querySelector("[data-menu-button]");
  const nav = document.querySelector("[data-site-nav]");

  if (navButton && nav) {
    navButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      navButton.setAttribute("aria-expanded", String(isOpen));
    });
  }

  function clearPrintTarget() {
    document.body.classList.remove("print-single");
    document.querySelectorAll(".is-printing").forEach((item) => item.classList.remove("is-printing"));
  }

  window.addEventListener("afterprint", clearPrintTarget);

  document.querySelectorAll("[data-print]").forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-print-target");
      if (targetId) {
        clearPrintTarget();
        const target = document.getElementById(targetId);
        if (target) {
          document.body.classList.add("print-single");
          target.classList.add("is-printing");
        }
      }
      window.print();
      window.setTimeout(clearPrintTarget, 500);
    });
  });

  function openHashTarget() {
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    if (!target) return;
    if (target.matches("details")) {
      target.open = true;
      return;
    }
    const parentDetails = target.closest("details");
    if (parentDetails) {
      parentDetails.open = true;
    }
  }

  openHashTarget();
  window.addEventListener("hashchange", openHashTarget);

  const filterButtons = document.querySelectorAll("[data-filter]");
  const filterItems = document.querySelectorAll("[data-tool]");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      filterItems.forEach((item) => {
        const values = (item.dataset.tool || "").split(" ");
        item.hidden = filter !== "all" && !values.includes(filter);
      });
    });
  });

  const searchInput = document.querySelector("[data-search]");
  const searchResults = document.querySelector("[data-search-results]");
  const index = window.SITE_SEARCH_INDEX || [];

  function currentDepthPrefix() {
    const depth = window.location.pathname.split("/").filter(Boolean).length;
    const inSubdir = /\/(mentor|nauczyciel|dyrekcja)\//.test(window.location.pathname);
    return inSubdir ? "../" : "";
  }

  function renderResults(query) {
    if (!searchResults) return;
    const normalized = query.trim().toLowerCase();

    if (normalized.length < 2) {
      searchResults.classList.remove("active");
      searchResults.innerHTML = "";
      return;
    }

    const parts = normalized.split(/\s+/);
    const hits = index
      .map((entry) => {
        const title = (entry.title || "").toLowerCase();
        const path = (entry.path || "").toLowerCase();
        const tags = (entry.tags || "").toLowerCase();
        const summary = (entry.summary || "").toLowerCase();
        const haystack = `${title} ${path} ${entry.role || ""} ${tags} ${summary}`;
        if (!parts.every((part) => haystack.includes(part))) return null;
        let score = 0;
        if (title.includes(normalized)) score += 100;
        if (path.includes(normalized)) score += 60;
        if (summary.includes(normalized)) score += 30;
        parts.forEach((part) => {
          if (title.includes(part)) score += 12;
          if (path.includes(part)) score += 6;
          if (tags.includes(part)) score += 3;
          if (summary.includes(part)) score += 2;
        });
        return { entry, score };
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title, "pl"))
      .map((result) => result.entry)
      .slice(0, 8);

    searchResults.classList.add("active");

    if (!hits.length) {
      searchResults.innerHTML = '<div class="empty">Brak wyników. Spróbuj krótszej frazy.</div>';
      return;
    }

    const prefix = currentDepthPrefix();
    searchResults.innerHTML = hits
      .map((entry) => {
        const url = entry.url.startsWith("../") ? entry.url : `${prefix}${entry.url}`;
        const path = entry.path || entry.role || "strona";
        return `<a href="${url}"><span class="search-result-path">${path}</span><br><strong>${entry.title}</strong><br><span class="meta">${entry.summary}</span></a>`;
      })
      .join("");
  }

  if (searchInput && searchResults) {
    searchInput.addEventListener("input", (event) => renderResults(event.target.value));
    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        searchInput.value = "";
        renderResults("");
      }
    });
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".search-wrap")) {
        searchResults.classList.remove("active");
      }
    });
  }
})();
