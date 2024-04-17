// Toggle a list of element-class pairs based on conditionals
export const toggleClasses = (addCondition, removeCondition, ...pairs) => {
    if (addCondition) {
        pairs.forEach(pair => pair[0].classList.add(pair[1]))
    } else if (removeCondition) {
        pairs.forEach(pair => pair[0].classList.remove(pair[1]))
    }
}

// Adds an event listener with full touch/click coverage
export const addClickListener = func => {
    if (window.hasOwnProperty('ontouchstart')) {
        window.addEventListener('touchstart', func);
    } else {
        window.addEventListener('click', func);
    }
}

// Icon sticks when selected on mobile, darken and freeze
export const sticky = () => {
    addClickListener(e => {
        if (document.documentElement.scrollTop < 30) {
            const links = document.getElementById("links");
            const menu = document.getElementById("nav-toggle");
            const header = document.querySelector("header");
            const body = document.querySelector("body");
            const main = document.querySelector("main");
            toggleClasses(
                menu.contains(e.target) && !menu.classList.contains("enlarge"),
                !links.contains(e.target) && menu.classList.contains("enlarge"),
                [links, "nav-active"],
                [menu, "enlarge"],
                [header, "header-outline"],
                [body, "freeze"]
            )
        }
    })
}

// Get transition start/end events
const transitionStarts = {
    "transition":       "transitionstart",
    "OTransition":      "oTransitionStart",
    "MozTransition":    "transitionstart"
}
const transitionEnds = {
    "transition":       "transitionend",
    "OTransition":      "oTransitionEnd",
    "MozTransition":    "transitionend",
    "WebkitTransition": "webkitTransitionEnd"
}
const bodyStyle = document.body.style;
let transitionStart, transitionEnd;
for (let transition in transitionStarts) {
    if (bodyStyle[transition] != undefined) {
        transitionStart = transitionStarts[transition];
        transitionEnd = transitionEnds[transition];
    } 
}

// Detects transition start/end to account for removal of z-index on certain elements
export const handleTransition = () => {
    // Z-index addition, .lowered removal
    window.addEventListener(transitionEnd, () => {
        const links = document.getElementById("links");
        const body = document.querySelector("body");
        const main = document.querySelector("main");
        const footer = document.querySelector("footer");
        if (links.classList.contains("nav-active")) {
            links.classList.add("no-zindex")
        } else {
            body.classList.remove("lowered");
            main.classList.remove("lowered");
            footer.classList.remove("lowered");
        }
    });
    // Z-index removal, .lowered addition
    window.addEventListener(transitionStart, () => {
        const links = document.getElementById("links");
        const body = document.querySelector("body");
        const main = document.querySelector("main");
        const footer = document.querySelector("footer");
        if (!links.classList.contains("nav-active")) {
            links.classList.remove("no-zindex");
        } else {
            body.classList.add("lowered");
            main.classList.add("lowered");
            footer.classList.add("lowered");
        }
    });
}