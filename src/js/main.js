import * as nav from './nav';
import portfolio_gfx from 'url:../includes/portfolio/gfx.pug';
import portfolio_web from 'url:../includes/portfolio/web.pug';
import portfolio_games from 'url:../includes/portfolio/games.pug';
import portfolio_music from 'url:../includes/portfolio/music.pug';
import resume_default from 'url:../includes/resume/default.pug';
import resume_lowiro from 'url:../includes/resume/lowiro.pug';

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
if (page.includes('portfolio')) {
    ['hashchange', 'load'].forEach(el => {
        window.addEventListener(el, () => {
            const hash = window.location.hash.slice(1);
            const target = document.getElementById('portfolio');
            if (hash === 'gfx') {
                req(portfolio_gfx).then(html => target.innerHTML = html);
            } else if (hash === 'web') {
                req(portfolio_web).then(html => target.innerHTML = html);
            } else if (hash === 'games') {
                req(portfolio_games).then(html => target.innerHTML = html);
            } else if (hash === 'music') {
                req(portfolio_music).then(html => target.innerHTML = html);
            } else {
                req(portfolio_games).then(html => target.innerHTML = html);
            }
        });
    })
} else if (page.includes('resume')) {
    ['hashchange', 'load'].forEach(el => {
        window.addEventListener(el, () => {
            const hash = window.location.hash.slice(1);
            const target = document.getElementById('resume');
            const links = document.getElementById('resume-links');
            if (hash === 'lowiro') {
                req(resume_lowiro).then(html => target.innerHTML = html);
                links.innerHTML = `
                <a class="action" href="./docs/SpencerGunning-Resume_20240323-lowiro.pdf">download as pdf</a>
                <a class="action" href="./resume">view general resume</a>
                `
            } else {
                req(resume_default).then(html => target.innerHTML = html);
                links.innerHTML = `
                <a class="action" href="./docs/SpencerGunning-Resume_20240323-default.pdf">download as pdf</a>
                `
            }
        });
    })
}