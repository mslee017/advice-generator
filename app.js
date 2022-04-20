'use strict';

// SELECTORS
const circle = document.querySelector('.circle');
const advice = document.querySelector('.advice-number');
const quotes = document.querySelector('.advice-text');

// API CALL FUNCTION
async function getAdvice() {
  try {
    const response = await fetch(`https://api.adviceslip.com/advice`);
    const data = await response.json();

    quotes.textContent = data.slip.advice;
    advice.textContent = `Advice #${data.slip.id}`;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Run the get advice function when the page loads
getAdvice();

// Run getAdvice function when the dice is clicked
circle.addEventListener('click', getAdvice);
