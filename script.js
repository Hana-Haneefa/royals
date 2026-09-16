// Interactive Javascript for Royals College Web Page

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navbar scroll shadow effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('shadow-md', 'bg-white/95', 'backdrop-blur-md');
      navbar.classList.remove('bg-white');
    } else {
      navbar.classList.remove('shadow-md', 'bg-white/95', 'backdrop-blur-md');
      navbar.classList.add('bg-white');
    }
  });

  // 2. Mobile Nav Menu Toggle
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // 3. Smooth scrolling for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
          }
        }
      }
    });
  });

  // 4. Modal / Toast handle for Enroll Now buttons
  const enrollButtons = document.querySelectorAll('.enroll-trigger');
  const modal = document.getElementById('enroll-modal');
  const closeModal = document.getElementById('close-modal');

  enrollButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      }
    });
  });

  if (closeModal && modal) {
    closeModal.addEventListener('click', () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    });
  }
});
