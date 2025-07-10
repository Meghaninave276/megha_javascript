# 🌦️ Weather App - JavaScript Project

#### This is a weather application that allows users to enter any city name and fetch the current weather conditions using the OpenWeatherMap API. It includes features like temperature, humidity, feels like, wind speed, timezone, and more. The UI is enhanced with modern design techniques like glassmorphism and weather-themed icons.

## 🚀 Features

### 🔍 City Search: Enter any city name to get real-time weather data.

### 🌡️ Temperature Display: Shows current temperature, min temperature, and feels-like value.

### 💧 Humidity: Displays the humidity percentage.

###💨 Wind Speed: Indicates the current wind speed in m/s.

### 🕒 Local Time: Shows the current time based on the city’s timezone.

### 🌍 Timezone Info: Displays the timezone offset in seconds.

### 🎨 Stylish UI: Uses modern CSS (glassmorphism, blur effects, and custom icons).

### 📱 Responsive Design (optional): Can be extended for mobile responsiveness.

## 📂 Project Structure

### bash
### Copy
### Edit
### weather-app/
### │
### ├── index.html        # Main HTML structure
### ├── style.css         # All styling including background, layout, fonts
### ├── script.js         # JavaScript logic for fetching and displaying data
### ├── images/           # Weather-related icons used in UI
### │   ├── one.png
### │   ├── four.png
### │   ├── five.png
### │   └── six.png
🔧
##  Technologies Used

### HTML5

### CSS3 (Glassmorphism, Flexbox, Responsive Design)

### JavaScript (DOM, Fetch API, Async Programming)

### Bootstrap 5 (Layout & Buttons)

### OpenWeatherMap API


## 🛠️ Setup Instructions

### Clone this repository:

### bash
### Copy
### Edit

### cd weather-app
### Add your OpenWeatherMap API key inside script.js:

### javascript
### Copy
### Edit
### fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`)
### Open index.html in your browser.

## 🔑 API Reference

### OpenWeatherMap API Documentation

### You'll need to create a free account to get your API key.


## ✅ To Do / Improvements

 ### Add real-time weather icons (from API)

 ### Make mobile responsive

 ### Add loading indicator while fetching data

 ### Save search history

 ### Add error UI when city not found

https://github.com/user-attachments/assets/8f5317f4-d422-496e-a0e1-1bce1c45df85





