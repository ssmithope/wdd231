document.addEventListener('DOMContentLoaded', function() {
    // Set current year and last modified date
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

    // Toggle navigation menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.menu');
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Filter courses function
    function filterCourses() {
        const input = document.getElementById('search').value.toLowerCase();
        const courses = document.querySelectorAll('.course');

        courses.forEach(course => {
            const category = course.getAttribute('data-category').toLowerCase();
            if (category.includes(input)) {
                course.classList.add('show');
            } else {
                course.classList.remove('show');
            }
        });

        calculateTotalCredits();
    }

    // Calculate total credits function
    function calculateTotalCredits() {
        const courses = document.querySelectorAll('.course.show');
        let totalCredits = 0;

        courses.forEach(course => {
            totalCredits += parseInt(course.getAttribute('data-credits'));
        });

        document.getElementById('totalCredits').textContent = `Total Credits: ${totalCredits}`;
        document.getElementById('footerCredits').textContent = `Total Credits: ${totalCredits}`;
    }

    // Hook up the input to the filter function and initial calculations
    const search = document.getElementById('search');
    search.addEventListener('keyup', filterCourses);

    // Initial display of all courses
    filterCourses();
});
