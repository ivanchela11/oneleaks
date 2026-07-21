/**
 * OneLeaks Forum — client logic
 * No build step: reads window.POSTS (data/posts.js), renders cards / articles,
 * handles category + tag filters, search and Markdown rendering
 * (marked.js + DOMPurify).
 */
(function () {
  "use strict";

  const POSTS = window.POSTS || [];

  // Two top-level categories. Add more here if needed — everything else
  // (tabs, badges, filtering) picks these up automatically.
  const CATEGORIES = {
    leaks: { label: "Утечки", plural: ["утечка", "утечки", "утечек"] },
    guides: { label: "Инструкции", plural: ["инструкция", "инструкции", "инструкций"] },
  };
  const DEFAULT_CATEGORY = "leaks";

  function categoryOf(post) {
    return CATEGORIES[post.category] ? post.category : DEFAULT_CATEGORY;
  }

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
    div.textContent = str == null ? "" : String(str);
    return div.innerHTML;
  }

  function pluralize(n, forms) {
    const mod10 = n % 10, mod100 = n % 100;
    if (mod10 === 1 && mod100 !== 11) return forms[0];
    if ([2, 3, 4].includes(mod10) && ![12, 13, 14].includes(mod100)) return forms[1];
    return forms[2];
  }

  function initialsOf(author) {
    const clean = (author || "?").replace(/^@/, "");
    const letters = clean.replace(/[^a-zA-Zа-яА-ЯёЁ0-9]/g, "");
    return (letters.slice(0, 2) || "??").toUpperCase();
  }

  function allTags(posts) {
    const map = new Map();
    posts.forEach((p) => (p.tags || []).forEach((t) => map.set(t, (map.get(t) || 0) + 1)));
    return [...map.entries()].sort((a, b) => b[1] - a[1]);
  }

  /**
   * Builds cover markup as a "letterbox" frame: a blurred, scaled-up copy of
   * the image fills the box edge-to-edge as a backdrop, while the real image
   * sits on top with object-fit:contain — so nothing gets cropped no matter
   * the source photo's orientation (portrait phone screenshots included).
   *
   * wrapClass: if provided, the fragment is wrapped in a sized <div> with
   * that class (used on the article page, which owns its own box). If
   * omitted, the fragment is returned bare, to be dropped inside a parent
   * that is already sized+positioned (used for grid cards).
   */
  function coverFragment(post) {
    if (!post.cover) {
      return `<div class="cover-frame__empty">${FALLBACK_COVER_ICON}</div>`;
    }
    const src = escapeHtml(post.cover);
    return `
      <div class="cover-frame__blur" style="background-image:url('${src}')" aria-hidden="true"></div>
      <img src="${src}" alt="" loading="lazy" class="cover-frame__img"
           onerror="this.parentElement.innerHTML='<div class=&quot;cover-frame__empty&quot;>${FALLBACK_COVER_ICON.replace(/"/g, "&quot;")}</div>'">
    `;
  }

  function coverImg(post, wrapClass) {
    const inner = coverFragment(post);
    if (wrapClass) {
      return `<div class="${wrapClass} cover-frame">${inner}</div>`;
    }
    return inner;
  }

  function cardTemplate(post) {
    const cat = categoryOf(post);
    const tags = (post.tags || [])
      .slice(0, 3)
      .map((t) => `<span class="tag-pill">${escapeHtml(t)}</span>`)
      .join("");
    return `
      <a class="post-card" href="post.html?slug=${encodeURIComponent(post.slug)}"
         data-category="${cat}"
         data-tags="${(post.tags || []).map(slugifyTag).join(" ")}">
        <div class="post-card__media">
          ${coverImg(post)}
          <span class="post-card__badge post-card__badge--${cat}">${escapeHtml(CATEGORIES[cat].label)}</span>
        </div>
        <div class="post-card__body">
          <div class="post-card__tags">${tags}</div>
          <h3 class="post-card__title">${escapeHtml(post.title)}</h3>
          <p class="post-card__excerpt">${escapeHtml(post.excerpt)}</p>
          <div class="post-card__meta">
            <span class="avatar">${escapeHtml(initialsOf(post.author))}</span>
            <span>${escapeHtml(post.author || "аноним")}</span>
            <span class="sep">•</span>
            <span>${formatDate(post.date)}</span>
          </div>
        </div>
      </a>`;
  }

  function featuredTemplate(post) {
    const cat = categoryOf(post);
    const tags = (post.tags || [])
      .slice(0, 3)
      .map((t) => `<span class="tag-pill">${escapeHtml(t)}</span>`)
      .join("");
    return `
      <a class="featured" href="post.html?slug=${encodeURIComponent(post.slug)}">
        <div class="featured__media">${coverImg(post)}</div>
        <div class="featured__body">
          <span class="featured__eyebrow">Свежее • ${escapeHtml(CATEGORIES[cat].label)}</span>
          <h2 class="featured__title">${escapeHtml(post.title)}</h2>
          <p class="featured__excerpt">${escapeHtml(post.excerpt)}</p>
          <div class="featured__tags">${tags}</div>
        </div>
      </a>`;
  }

  function renderStats(container, posts) {
    if (!container) return;
    const leaksCount = posts.filter((p) => categoryOf(p) === "leaks").length;
    const guidesCount = posts.filter((p) => categoryOf(p) === "guides").length;
    const tagsCount = allTags(posts).length;
    container.innerHTML = `
      <div class="stat"><span class="stat__value">${leaksCount}</span><span class="stat__label">${pluralize(leaksCount, CATEGORIES.leaks.plural)}</span></div>
      <div class="stat"><span class="stat__value">${guidesCount}</span><span class="stat__label">${pluralize(guidesCount, CATEGORIES.guides.plural)}</span></div>
      <div class="stat"><span class="stat__value">${tagsCount}</span><span class="stat__label">${pluralize(tagsCount, ["тег", "тега", "тегов"])}</span></div>
    `;
  }

  function renderFooterTagCloud(container, posts) {
    if (!container) return;
    const top = allTags(posts).slice(0, 10);
    container.innerHTML = top
      .map(([tag]) => `<span class="tag-pill" title="${escapeHtml(tag)}">${escapeHtml(tag)}</span>`)
      .join("");
  }

  /* ---------------- Home page ---------------- */
  function initHome() {
    const grid = document.getElementById("post-grid");
    if (!grid) return;

    const sorted = [...POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));
    const tags = allTags(sorted);
    const categoryTabs = document.getElementById("category-tabs");
    const chipRow = document.getElementById("chip-row");
    const searchInput = document.getElementById("search-input");
    const countLabel = document.getElementById("result-count");
    const emptyState = document.getElementById("empty-state");

    renderStats(document.getElementById("stats-row"), sorted);
    const featuredEl = document.getElementById("featured-post");
    if (featuredEl && sorted[0]) featuredEl.innerHTML = featuredTemplate(sorted[0]);
    renderFooterTagCloud(document.getElementById("footer-tagcloud"), sorted);

    let activeCategory = null; // null = all
    let activeTag = null;
    let query = "";

    // ---- Category tabs ----
    function makeTab(key, label, count) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "tab";
      btn.dataset.category = key || "";
      btn.setAttribute("aria-selected", String(key === activeCategory));
      btn.innerHTML = `${escapeHtml(label)} <span class="count">${count}</span>`;
      return btn;
    }
    categoryTabs.appendChild(makeTab(null, "Все", sorted.length));
    Object.keys(CATEGORIES).forEach((key) => {
      const count = sorted.filter((p) => categoryOf(p) === key).length;
      categoryTabs.appendChild(makeTab(key, CATEGORIES[key].label, count));
    });

    categoryTabs.addEventListener("click", (e) => {
      const btn = e.target.closest(".tab");
      if (!btn) return;
      activeCategory = btn.dataset.category || null;
      [...categoryTabs.children].forEach((c) => c.setAttribute("aria-selected", String(c === btn)));
      render();
    });

    // ---- Tag chips ----
    const allChip = document.createElement("button");
    allChip.className = "chip";
    allChip.type = "button";
    allChip.setAttribute("aria-pressed", "true");
    allChip.dataset.tag = "";
    allChip.innerHTML = `Все теги <span class="count">${sorted.length}</span>`;
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
        const matchesCategory = !activeCategory || categoryOf(p) === activeCategory;
        const matchesTag = !activeTag || (p.tags || []).includes(activeTag);
        const haystack = (p.title + " " + p.excerpt + " " + (p.tags || []).join(" ")).toLowerCase();
        const matchesQuery = !query || haystack.includes(query);
        return matchesCategory && matchesTag && matchesQuery;
      });
      grid.innerHTML = filtered.map(cardTemplate).join("");
      const forms = activeCategory ? CATEGORIES[activeCategory].plural : CATEGORIES[DEFAULT_CATEGORY].plural;
      countLabel.textContent = filtered.length + " " + pluralize(filtered.length, forms);
      emptyState.hidden = filtered.length !== 0;
    }

    render();

    // Footer "Разделы" links jump to the matching category tab, if present.
    document.querySelectorAll("[data-footer-cat]").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const btn = categoryTabs.querySelector(`.tab[data-category="${link.dataset.footerCat}"]`);
        if (btn) btn.click();
        grid.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  /* ---------------- Markdown post-processing ----------------
   * marked.js already turns `[текст](url)` into <a> and
   * `![alt](url "подпись")` into <img title="подпись">. We only need to:
   *  1) open external links in a new tab safely
   *  2) turn images that carry a title into a captioned <figure>, and cap
   *     every image's size so a huge phone photo doesn't blow up the layout
   * --------------------------------------------------------- */
  function enhanceArticleContent(articleEl) {
    if (!articleEl) return;

    articleEl.querySelectorAll("a[href]").forEach((a) => {
      try {
        const url = new URL(a.getAttribute("href"), location.href);
        if (url.origin !== location.origin) {
          a.setAttribute("target", "_blank");
          a.setAttribute("rel", "noopener noreferrer");
        }
      } catch (err) {
        /* relative/invalid URL — leave as-is */
      }
    });

    articleEl.querySelectorAll("img").forEach((img) => {
      if (img.closest("figure")) return;
      const caption = img.getAttribute("title");
      const figure = document.createElement("figure");
      figure.className = "post-figure";
      img.parentNode.insertBefore(figure, img);
      figure.appendChild(img);
      if (caption) {
        const figcaption = document.createElement("figcaption");
        figcaption.textContent = caption;
        figure.appendChild(figcaption);
      }
    });
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

    const cat = categoryOf(post);
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
          Ко всем постам
        </a>
        ${coverImg(post, "article-cover")}
        <span class="category-pill category-pill--${cat}">${escapeHtml(CATEGORIES[cat].label)}</span>
        <h1 class="article-title">${escapeHtml(post.title)}</h1>
        <div class="article-meta">
          <span class="article-meta__author">
            <span class="avatar">${escapeHtml(initialsOf(post.author))}</span>
            ${escapeHtml(post.author || "аноним")}
          </span>
          <span>•</span>
          <span>${formatDate(post.date)}</span>
        </div>
        <div class="article-tags">${tagsHtml}</div>
      </div>
      <article class="article-body" id="article-content">${html}</article>
      <div id="related-slot"></div>
      <div>
        <a class="btn btn--tonal" href="index.html">← Другие посты</a>
      </div>
    `;

    enhanceArticleContent(document.getElementById("article-content"));

    // Related posts: same category first, ranked by number of shared tags.
    const related = POSTS.filter((p) => p.slug !== post.slug)
      .map((p) => {
        const shared = (p.tags || []).filter((t) => (post.tags || []).includes(t)).length;
        return { p, score: shared + (categoryOf(p) === cat ? 0.5 : 0) };
      })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score || new Date(b.p.date) - new Date(a.p.date))
      .slice(0, 3)
      .map((x) => x.p);

    const relatedSlot = document.getElementById("related-slot");
    if (relatedSlot && related.length) {
      relatedSlot.innerHTML = `
        <section class="related">
          <h2>Похожие посты</h2>
          <div class="related__grid">${related.map(cardTemplate).join("")}</div>
        </section>`;
    }
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
