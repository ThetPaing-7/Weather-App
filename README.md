# 🌤️ Weather Dashboard

A modern weather dashboard built with **JavaScript**, **HTML**, and **CSS** that displays real-time weather information for any city using the Visual Crossing Weather API.


## 📖 Overview

Weather Dashboard allows users to search for a city and view detailed weather information in a clean and modern glassmorphism-style interface.

The application fetches weather data from the Visual Crossing Weather API and dynamically updates the user interface with current weather conditions and atmospheric details.

---

## ✨ Features

### 🔍 City Search
- Search weather information by city name
- Input validation
- Error handling for invalid locations

### 🌡️ Current Weather
- Current temperature
- Feels-like temperature
- Weather condition
- Weather description
- Weather icon

### 📍 Location Information
- City name
- Current date
- Current time
- Sunrise time
- Sunset time
- Moon phase

### 🌬️ Atmospheric Data
- Humidity
- Air pressure
- Wind direction
- Wind speed
- Dew point
- Cloud cover
- UV Index

### 🎨 Modern User Interface
- Responsive design
- Glassmorphism cards
- Gradient background
- Hover animations
- Mobile-friendly layout

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6 Modules)
- Fetch API
- Visual Crossing Weather API
- Webpack

---

## 📂 Project Structure

```text
weather-dashboard/
│
├── src/
│   ├── get_weather_data.js
│   ├── display_weather.js
│   ├── get_city.js
│   └── index.js
│
├── dist/
│
├── assets/
│
├── package.json
├── webpack.config.js
└── README.md
```

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/weather-dashboard.git
```

### 2. Navigate to the Project

```bash
cd weather-dashboard
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development Server

```bash
npm run start
```

### 5. Build for Production

```bash
npm run build
```

---

## 🔑 API Configuration

This project uses the Visual Crossing Weather API.

Create a free account and obtain an API key:

https://www.visualcrossing.com/weather-api

Replace the API key inside:

```javascript
const response = await fetch(
  `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(city)}?unitGroup=metric&key=YOUR_API_KEY`
);
```

---

## 📊 Data Displayed

The dashboard displays:

| Category | Information |
|-----------|-------------|
| Temperature | Current temperature |
| Feels Like | Apparent temperature |
| Weather | Current conditions |
| Humidity | Air moisture percentage |
| Pressure | Atmospheric pressure |
| Wind | Speed and direction |
| Cloud Cover | Cloud percentage |
| UV Index | Ultraviolet exposure |
| Sunrise | Sunrise time |
| Sunset | Sunset time |
| Moon Phase | Current moon phase |

---

## 🔮 Future Improvements

- 7-Day Forecast
- Hourly Forecast
- Weather Charts
- Dark/Light Theme Toggle
- Geolocation Support
- Search History
- Favorite Cities
- Weather Alerts
- Air Quality Index (AQI)

---
## 👨‍💻 Author

Developed as a learning project to practice modern JavaScript development, API integration, and responsive UI design.
