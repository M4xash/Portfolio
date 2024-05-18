document.getElementById('filter').addEventListener('keyup', function() {
    const filter = this.value.toLowerCase();
    const projects = document.querySelectorAll('#projects-list li');

    projects.forEach(project => {
        const tech = project.getAttribute('data-tech').toLowerCase();
        if (tech.includes(filter)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
});
