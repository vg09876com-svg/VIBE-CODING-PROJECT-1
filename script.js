document.addEventListener('DOMContentLoaded', () => {
  const projectsBtn = document.getElementById('projects-btn');

  projectsBtn.addEventListener('click', (event) => {
    event.preventDefault();

    // Smooth scroll fallback for older browsers
    const targetId = projectsBtn.getAttribute('href').replace('#', '');

    if (targetId === 'projects') {
      // Replace this alert with your actual projects page or section scroll
      console.log('View My Projects button clicked');
      alert('Projects section coming soon!');
    }
  });
});
