
(() => {
  const menuToggle = document.querySelector('#menuToggle');
  const nav = document.querySelector('.nav');
  const progress = document.querySelector('#progress');
  const year = document.querySelector('#year');

  menuToggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle?.setAttribute('aria-expanded', 'false');
    });
  });

  window.addEventListener('scroll', () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.width = `${max ? (window.scrollY / max) * 100 : 0}%`;
  }, { passive: true });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  document.querySelectorAll('.filter').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.filter').forEach(item => item.classList.remove('active'));
      button.classList.add('active');

      const filter = button.dataset.filter;

      document.querySelectorAll('.project').forEach(project => {
        const categories = project.dataset.category.split(' ');
        project.classList.toggle(
          'hidden',
          filter !== 'all' && !categories.includes(filter)
        );
      });
    });
  });

  if (year) year.textContent = new Date().getFullYear();
})();
