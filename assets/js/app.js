document.querySelectorAll('.course-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    document.querySelectorAll('.audio-player').forEach(player => {
      player.style.display = 'none';
    });
    document.getElementById(targetId).style.display = 'block';
  });
});