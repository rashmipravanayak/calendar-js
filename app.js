// app.js

// Selecting elements
const monthElement = document.querySelector('.month');
const dayNameElement = document.querySelector('.day-name');
const dateElement = document.querySelector('.date');
const yearElement = document.querySelector('.year');

let d= new Date();
monthElement.innerHTML=d.toLocaleDateString('en',{month:"long"});
dayNameElement.textContent = d.toLocaleDateString('en', { weekday: 'long' });
dateElement.textContent = d.getDate();
yearElement.textContent = d.getFullYear();