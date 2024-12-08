document.addEventListener('DOMContentLoaded', function() {
    // Set current year and last modified date
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = new Date().toLocaleString();

    const weatherApiKey = '432a2657254282a9e91171c635c9438d'; // Your actual API key
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=St.%20Louis&units=imperial&appid=${weatherApiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=St.%20Louis&units=imperial&appid=${weatherApiKey}`;
    const membersUrl = 'data/members.json';
    const weatherInfo = document.getElementById('weather-info');
    const forecastInfo = document.getElementById('forecast-info');
    const businessListings = document.getElementById('business-listings');
    
    // Fetch and display current weather data
    async function fetchCurrentWeather() {
        try {
            const response = await fetch(weatherUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            displayCurrentWeather(data);
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
            weatherInfo.textContent = 'Unable to fetch weather data.';
        }
    }
    
    const displayCurrentWeather = (data) => {
        let weatherHTML = `
            <p>Current Temperature: ${data.main.temp}°F</p>
            <p>Current Weather: ${data.weather[0].description}</p>
            <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon">
            <p>High: ${data.main.temp_max}°F</p>
            <p>Low: ${data.main.temp_min}°F</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
            <p>Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
        `;
        weatherInfo.innerHTML = weatherHTML;
    };

    fetchCurrentWeather();
    
    // Fetch and display weather forecast data
    async function fetchWeatherForecast() {
        try {
            const response = await fetch(forecastUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            displayWeatherForecast(data);
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }
    
    const displayWeatherForecast = (data) => {
        const forecast = data.list.slice(1, 4);
        let forecastHTML = '<h3>3-Day Forecast:</h3>';
        
        forecast.forEach((forecast, index) => {
            forecastHTML += `
                <p>Day ${index + 1} Temperature: ${forecast.main.temp}°F</p>
                <img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png" alt="Weather Icon">
            `;
        });
        
        forecastInfo.innerHTML = forecastHTML;
    };

    fetchWeatherForecast();
    
    // Fetch and display member data
    async function getMemberData() {
        try {
            const response = await fetch(membersUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            displayMembers(data);
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }
    
    const displayMembers = (members) => {
        const goldAndSilverMembers = members.filter(member => member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver');
        const spotlights = getRandomItems(goldAndSilverMembers, 3);
    
        spotlights.forEach(member => {
            let business = document.createElement('div');
            business.classList.add('business');
    
            let fullName = document.createElement('h3');
            let portrait = document.createElement('img');
            let address = document.createElement('p');
            let phone = document.createElement('p');
            let website = document.createElement('a');
            let membershipLevel = document.createElement('p');
    
            fullName.innerHTML = `<a href="${member.website}" target="_blank">${member.name}</a>`;
            address.textContent = `Address: ${member.address}`;
            phone.textContent = `Phone: ${member.phone}`;
            website.href = member.website;
            website.textContent = member.website;
            website.target = "_blank";
            membershipLevel.textContent = `Membership Level: ${member.membershipLevel}`;
    
            portrait.setAttribute('src', `images/${member.image}`);
            portrait.setAttribute('alt', `Portrait of ${member.name}`);
            portrait.setAttribute('loading', 'lazy');
            portrait.setAttribute('width', '280');
            portrait.setAttribute('height', '200');
    
            business.appendChild(fullName);
            business.appendChild(portrait);
            business.appendChild(address);
            business.appendChild(phone);
            business.appendChild(website);
            business.appendChild(membershipLevel);
    
            businessListings.appendChild(business);
        });
    };
    
    const getRandomItems = (array, numItems) => {
        const shuffled = array.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, numItems);
    };

    getMemberData();

    // Visitor message based on last visit date
    const visitorMessage = document.getElementById('visitor-message');
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();

    if (!lastVisit) {
        visitorMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysSinceLastVisit = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
        if (daysSinceLastVisit < 1) {
            visitorMessage.textContent = "Back so soon! Awesome!";
        } else if (daysSinceLastVisit === 1) {
            visitorMessage.textContent = `You last visited 1 day ago.`;
        } else {
            visitorMessage.textContent = `You last visited ${daysSinceLastVisit} days ago.`;
        }
    }

    localStorage.setItem('lastVisit', now);
});
