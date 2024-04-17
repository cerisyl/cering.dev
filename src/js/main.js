import * as nav from './nav';
import resume_default from 'url:../includes/resume/default.pug';
import resume_lowiro from 'url:../includes/resume/lowiro.pug';
import resume_dev from 'url:../includes/resume/dev.pug';
import resume_it from 'url:../includes/resume/it.pug';
import resume_graphics from 'url:../includes/resume/graphics.pug';
import Macy from "macy"

// Generate a request and response using a url and handling function
const req = async (url) => {
    const response = await fetch(url);
    return response.text();
};

// Get page details
const url = window.location.href
let page;
try {
    page = url.split("/")[3];
    page = page.split(".")[0];
} catch(e) {
    page = '';
}

// Navigation
nav.sticky();
nav.handleTransition();

// Content injection
if (page.includes('resume') || page.includes('$')) {
    ['hashchange', 'load'].forEach(el => {
        window.addEventListener(el, () => {
            const hash = window.location.hash.slice(1);
            const target = document.getElementById('resume');
            const links = document.getElementById('resume-links');
            if (hash === 'lowiro') {
                req(resume_lowiro).then(html => target.innerHTML = html);
                links.innerHTML = `
                <a class="action" href="./docs/SpencerGunning-Resume_20240323-lowiro.pdf">download as pdf</a>
                <a class="action" href="./games">view portfolio</a>
                <a class="action" href="./resume">view general resume</a>
                `
            } else if (hash === 'dev') {
                req(resume_dev).then(html => target.innerHTML = html);
                links.innerHTML = `
                <a class="action" href="./docs/SpencerGunning-Resume_20240417-dev.pdf">download as pdf</a>
                <a class="action" href="./webdev">view portfolio</a>
                <a class="action" href="./resume">view general resume</a>
                `
            } else if (hash === 'graphics') {
                req(resume_graphics).then(html => target.innerHTML = html);
                links.innerHTML = `
                <a class="action" href="./docs/SpencerGunning-Resume_20240417-graphics.pdf">download as pdf</a>
                <a class="action" href="./graphics">view portfolio</a>
                <a class="action" href="./resume">view general resume</a>
                `
            } else if (hash === 'it') {
                req(resume_it).then(html => target.innerHTML = html);
                links.innerHTML = `
                <a class="action" href="./docs/SpencerGunning-Resume_20240417-it.pdf">download as pdf</a>
                <a class="action" href="./resume">view general resume</a>
                `
            } else {
                req(resume_default).then(html => target.innerHTML = html);
                links.innerHTML = `
                <a class="action" href="./docs/SpencerGunning-Resume_20240417-default">download as pdf</a>
                `
            }
        });
    })
} else if (page.includes("graphics")) {
    const macyInstance = Macy({
        container: "#gallery",
        columns: 3,
        margin: 8,
        breakAt: {
            500: 2
        }
    });
}