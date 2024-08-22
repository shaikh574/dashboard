document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById('sidebar');
  const logo = document.getElementById('logo');
  const menuLinks = document.querySelectorAll('.menu li a');
  const pages = document.querySelectorAll('.page');

  logo.addEventListener('click', function () {
      sidebar.classList.toggle('collapsed');
  });

  menuLinks.forEach(link => {
      link.addEventListener('click', function (event) {
          event.preventDefault();
          const targetPage = this.getAttribute('data-target');

          menuLinks.forEach(l => l.classList.remove('active'));
          this.classList.add('active');

          pages.forEach(page => {
              page.classList.remove('active');
              if (page.id === targetPage) {
                  page.classList.add('active');
              }
          });
      });
  });

  
  const progressBars = document.querySelectorAll('.progress');
  progressBars.forEach(bar => {
      const value = bar.getAttribute('data-value');
      bar.style.width = `${value}%`;
  });

  
  const chartBars = document.querySelectorAll('.chart .bar');
  chartBars.forEach((bar, index) => {
      const value = bar.getAttribute('data-value');
      setTimeout(() => {
          bar.style.height = `${value}%`;
      }, index * 200);
  });
});
