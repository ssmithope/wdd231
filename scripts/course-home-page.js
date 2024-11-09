document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    const courses = [
        { code: 'CSE101', name: 'Intro to Computer Science', credits: 3, completed: false },
        { code: 'CSE102', name: 'Data Structures', credits: 3, completed: false },
        { code: 'WDD101', name: 'Web Development Basics', credits: 3, completed: false },
        { code: 'WDD102', name: 'Advanced Web Development', credits: 3, completed: false }
    ];

    // Modify completed property
    courses.forEach(course => {
        if (['CSE101', 'WDD101'].includes(course.code)) {
            course.completed = true;
        }
    });

    // Display courses
    function displayCourses(filter) {
        const courseContainer = document.getElementById('courses');
        courseContainer.innerHTML = ''; // Clear previous content

        const filteredCourses = filter ? courses.filter(course => course.code.startsWith(filter)) : courses;

        filteredCourses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.classList.add('course-card');
            if (course.completed) {
                courseCard.classList.add('completed');
            }
            courseCard.innerHTML = `
                <h3>${course.name}</h3>
                <p>Code: ${course.code}</p>
                <p>Credits: ${course.credits}</p>
            `;
            courseContainer.appendChild(courseCard);
        });

        // Update total credits
        const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
        document.getElementById('totalCredits').textContent = `Total Credits: ${totalCredits}`;
    }

    // Event listeners for buttons
    document.getElementById('showCSE').addEventListener('click', () => displayCourses('CSE'));
    document.getElementById('showWDD').addEventListener('click', () => displayCourses('WDD'));
    document.getElementById('showAll').addEventListener('click', () => displayCourses());

    displayCourses();
});