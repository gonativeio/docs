/**
 * Changelog tag badges
 *
 * Mintlify renders every <Update> tag as the same
 * <span data-component-part="update-tag">, with nothing that says which tag
 * it is, so CSS alone can't colour "Bug fix" differently from "iOS". This
 * script adds data-tag-kind ("type" | "platform") and data-tag (a slug) to
 * each tag, on entries and in the filter panel. changelog-tags.css does the
 * styling.
 *
 * Keep TAGS in sync with RELEASE_TYPES and PRODUCTS in
 * scripts/release-notes-sync/release-notes-sync.js.
 */
(function () {
  const TAGS = {
    'New feature': ['type', 'new-feature'],
    'Bug fix': ['type', 'bug-fix'],
    Maintenance: ['type', 'maintenance'],
    'App Studio': ['platform', 'app-studio'],
    iOS: ['platform', 'ios'],
    Android: ['platform', 'android'],
  };

  function mark(el) {
    const info = TAGS[el.textContent.trim()];
    if (!info || el.dataset.tag === info[1]) return;
    el.dataset.tagKind = info[0];
    el.dataset.tag = info[1];
  }

  function markAll() {
    document.querySelectorAll('[data-component-part="update-tag"]').forEach(mark);
    // Filter panel: mark the innermost element holding each tag's text
    const filters = document.getElementById('changelog-filters');
    if (filters) {
      filters.querySelectorAll('*').forEach((el) => {
        if (el.children.length === 0) mark(el);
      });
    }
  }

  // Filtering unmounts and remounts <Update> entries, which recreates their
  // tags without our attributes, so re-mark after DOM changes. The observer
  // only runs on pages that contain updates, and only watches child-list
  // changes (our own attribute writes don't retrigger it).
  let observer;
  let frame;
  function watch() {
    if (observer) observer.disconnect();
    markAll();
    if (!document.querySelector('.update')) return;
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(markAll);
    };
    observer = new MutationObserver(schedule);
    const content = document.getElementById('content') || document.body;
    observer.observe(content, { childList: true, subtree: true });
    const filters = document.getElementById('changelog-filters');
    if (filters && !content.contains(filters)) {
      observer.observe(filters, { childList: true, subtree: true });
    }
  }

  watch();
  window.addEventListener('mintlify:navigate', watch);
})();
