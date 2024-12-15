// discover-saint-louis.js

// Function to greet the user
function greetUser() {
    const name = document.getElementById('name').value;
    alert(`Hello, ${name}! Welcome to Discover Saint Louis.`);
}

// Event listener for form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    greetUser();
});

// Function to switch tabs
function switchTab(event) {
    event.preventDefault();
    const tabId = event.target.dataset.tab;
    document.querySelectorAll('.tab-content').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
}

// Event listeners for tab links
document.querySelectorAll('.tab-link').forEach(link => {
    link.addEventListener('click', switchTab);
});

// Set the default active tab
document.getElementById('home').classList.add('active');

// Function to fetch and display weather
async function fetchWeather() {
    const weatherApiKey = '432a2657254282a9e91171c635c9438d';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=St.%20Louis&units=imperial&appid=${weatherApiKey}`;
    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();
        const weatherDiv = document.getElementById('weather');
        weatherDiv.innerHTML = `
            <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">
            <p>${data.main.temp}°F</p>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Function to display calendar
function displayCalendar() {
    const calendarDiv = document.getElementById('calendar');
    const today = new Date();
    calendarDiv.innerHTML = `
        <p>${today.toDateString()}</p>
    `;
}

// Fetch weather and display calendar on page load
document.addEventListener('DOMContentLoaded', () => {
    fetchWeather();
    displayCalendar();
});
