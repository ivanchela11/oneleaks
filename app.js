/**
 * OneLeaks Forum — client logic
 * No build step: reads window.POSTS (data/posts.js), renders cards / articles,
 * handles tag filters, search and Markdown rendering (marked.js + DOMPurify).
 */
(function () {
  "use strict";

  const POSTS = window.POSTS || [];

  const FALLBACK_COVER_ICON = `
    <svg viewBox="0 0 24 24"><path d="M12 2C8 2 4.5 4.5 4.5 9c0 4 3 6.5 3 9.5H16.5c0-3 3-5.5 3-9.5C19.5 4.5 16 2 12 2z"/></svg>`;

  function formatDate(iso) {
    const d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" });
  }

  function slugifyTag(tag) {
    return tag.toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-а-яё]/gi, "");
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function allTags(posts) {
    const map = new Map();
    posts.forEach((p) => (p.tags || []).forEach((t) => map.set(t, (map.get(t) || 0) + 1)));
    return [...map.entries()].sort((a, b) => b[1] - a[1]);
  }

  function coverImg(post, cssClass) {
    if (post.cover) {
      return `<img src="${escapeHtml(post.cover)}" alt="" loading="lazy" class="${cssClass || ""}">`;
    }
    return `<div class="${cssClass || ""}" style="display:grid;place-items:center;background:var(--md-sys-color-surface-container-high);width:100%;height:100%;color:var(--md-sys-color-on-surface-variant)">${FALLBACK_COVER_ICON}</div>`;
  }

  function cardTemplate(post) {
    const tags = (post.tags || [])
      .slice(0, 3)
      .map((t) => `<span class="tag-pill">${escapeHtml(t)}</span>`)
      .join("");
    return `
      <a class="post-card" href="post.html?slug=${encodeURIComponent(post.slug)}" data-tags="${(post.tags || []).map(slugifyTag).join(" ")}">
        <div class="post-card__media">
          ${coverImg(post, "")}
          <span class="post-card__badge">${escapeHtml(post.tags && post.tags[0] ? post.tags[0] : "Утечка")}</span>
        </div>
        <div class="post-card__body">
          <div class="post-card__tags">${tags}</div>
          <h3 class="post-card__title">${escapeHtml(post.title)}</h3>
          <p class="post-card__excerpt">${escapeHtml(post.excerpt)}</p>
          <div class="post-card__meta">
            <span>${escapeHtml(post.author || "аноним")}</span>
            <span class="sep">•</span>
            <span>${formatDate(post.date)}</span>
          </div>
        </div>
      </a>`;
  }

  /* ---------------- Home page ---------------- */
  function initHome() {
    const grid = document.getElementById("post-grid");
    if (!grid) return;

    const sorted = [...POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));
    const tags = allTags(sorted);
    const chipRow = document.getElementById("chip-row");
    const searchInput = document.getElementById("search-input");
    const countLabel = document.getElementById("result-count");
    const emptyState = document.getElementById("empty-state");

    let activeTag = null;
    let query = "";

    // Build chips
    const allChip = document.createElement("button");
    allChip.className = "chip";
    allChip.type = "button";
    allChip.setAttribute("aria-pressed", "true");
    allChip.dataset.tag = "";
    allChip.innerHTML = `Все <span class="count">${sorted.length}</span>`;
    chipRow.appendChild(allChip);

    tags.forEach(([tag, count]) => {
      const chip = document.createElement("button");
      chip.className = "chip";
      chip.type = "button";
      chip.setAttribute("aria-pressed", "false");
      chip.dataset.tag = tag;
      chip.innerHTML = `${escapeHtml(tag)} <span class="count">${count}</span>`;
      chipRow.appendChild(chip);
    });

    chipRow.addEventListener("click", (e) => {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      activeTag = btn.dataset.tag || null;
      [...chipRow.children].forEach((c) => c.setAttribute("aria-pressed", String(c === btn)));
      render();
    });

    searchInput.addEventListener("input", () => {
      query = searchInput.value.trim().toLowerCase();
      render();
    });

    function render() {
      const filtered = sorted.filter((p) => {
        const matchesTag = !activeTag || (p.tags || []).includes(activeTag);
        const haystack = (p.title + " " + p.excerpt + " " + (p.tags || []).join(" ")).toLowerCase();
        const matchesQuery = !query || haystack.includes(query);
        return matchesTag && matchesQuery;
      });
      grid.innerHTML = filtered.map(cardTemplate).join("");
      countLabel.textContent = filtered.length + " " + pluralPosts(filtered.length);
      emptyState.hidden = filtered.length !== 0;
    }

    render();
  }

  function pluralPosts(n) {
    const mod10 = n % 10, mod100 = n % 100;
    if (mod10 === 1 && mod100 !== 11) return "утечка";
    if ([2, 3, 4].includes(mod10) && ![12, 13, 14].includes(mod100)) return "утечки";
    return "утечек";
  }

  /* ---------------- Post page ---------------- */
  function initPost() {
    const root = document.getElementById("post-root");
    if (!root) return;

    const params = new URLSearchParams(location.search);
    const slug = params.get("slug");
    const post = POSTS.find((p) => p.slug === slug);

    if (!post) {
      root.innerHTML = `
        <div class="empty-state">
          <div class="empty-state__mark">${FALLBACK_COVER_ICON}</div>
          <h2 style="font:var(--md-sys-typescale-title-large)">Пост не найден</h2>
          <p>Похоже, эта утечка была удалена или ссылка неверна.</p>
          <a class="btn btn--filled" href="index.html">На главную</a>
        </div>`;
      return;
    }

    document.title = post.title + " — OneLeaks Forum";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", post.excerpt);

    const html = window.DOMPurify
      ? window.DOMPurify.sanitize(window.marked.parse(post.content || ""))
      : window.marked.parse(post.content || "");

    const tagsHtml = (post.tags || [])
      .map((t) => `<span class="tag-pill">${escapeHtml(t)}</span>`)
      .join("");

    root.innerHTML = `
      <div class="article-header">
        <a class="back-link" href="index.html">
          <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"/></svg>
          Ко всем утечкам
        </a>
        ${coverImg(post, "article-cover")}
        <h1 class="article-title">${escapeHtml(post.title)}</h1>
        <div class="article-meta">
          <span>${escapeHtml(post.author || "аноним")}</span>
          <span>•</span>
          <span>${formatDate(post.date)}</span>
        </div>
        <div class="article-tags">${tagsHtml}</div>
      </div>
      <article class="article-body">${html}</article>
      <div>
        <a class="btn btn--tonal" href="index.html">← Другие утечки</a>
      </div>
    `;
  }

  /* ---------------- Shared chrome (theme toggle, FAB, nav) ---------------- */
  function initChrome() {
    const themeBtn = document.getElementById("theme-toggle");
    const root = document.documentElement;
    const stored = localStorage.getItem("oneleaks-theme");
    if (stored) root.setAttribute("data-theme", stored);

    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
        const next = current === "light" ? "dark" : "light";
        root.setAttribute("data-theme", next);
        localStorage.setItem("oneleaks-theme", next);
      });
    }

    const fab = document.getElementById("fab-top");
    if (fab) {
      window.addEventListener("scroll", () => {
        fab.classList.toggle("is-visible", window.scrollY > 480);
      });
      fab.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    initChrome();
    initHome();
    initPost();
  });
})();
