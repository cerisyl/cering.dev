// Toggle a list of element-class pairs based on conditionals
export const toggleClasses = (addCondition, removeCondition, ...pairs) => {
  if (addCondition) {
      pairs.forEach(pair => pair[0].classList.add(pair[1]))
  } else if (removeCondition) {
      pairs.forEach(pair => pair[0].classList.remove(pair[1]))
  }
}

// Adds an event listener with full touch/click coverage
export const addClickListener = async (func) => {
  if (window.hasOwnProperty('ontouchstart')) {
      window.addEventListener('touchstart', func);
  } else {
      window.addEventListener('click', func);
  }
}

// Generate a request and response using a url and handling function
export const req = async (url) => {
  const response = await fetch(url);
  return response.text();
};

// Request and response generator for JSON files
export const reqJson = async (url, resFunc) => {
  fetch(url)
  .then(response => response.json())
  .then(data => resFunc(data))
  .catch(err => console.log(err));
};

export const tooltip = (main, text) => {
  return `<span class="tooltip">
    ${main}
    <span class="tooltip-text">${text}</span>
  </span>`
}