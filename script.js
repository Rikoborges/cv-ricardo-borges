function setLanguage(lang) {
      document.querySelectorAll('[data-lang]').forEach(el => {
        el.style.display = el.getAttribute('data-lang') === lang ? 'block' : 'none';
      });
      document.querySelectorAll('.language-switch button').forEach(btn => {
        btn.classList.remove('active');
      });
      const activeBtn = document.querySelector(`.language-switch button[onclick*="${lang}"]`);
      if (activeBtn) activeBtn.classList.add('active');
    }

    document.addEventListener("DOMContentLoaded", () => {
      setLanguage('fr');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
      });
    });