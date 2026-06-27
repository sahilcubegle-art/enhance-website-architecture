/* ============================================
   CUBEGLE DESIGN SYSTEM — Case Studies JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      links.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (links.classList.contains('open') && !links.contains(e.target) && e.target !== toggle) {
        links.classList.remove('open');
      }
    });
  }

  // Listing Page Category Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.portfolio-card');

  if (filterBtns.length > 0 && cards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        cards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
            // Subtle fade-in animation trigger
            card.style.opacity = '0';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transition = 'opacity 0.3s ease';
            }, 50);
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
});
