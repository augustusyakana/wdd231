import { getJobs, displayJobs, getRandomTwo } from "./utilis.js";

const jobsContainer = document.querySelector('#home-jobs-container');

document.addEventListener('DOMContentLoaded', async () => {
    const jobs = await getJobs();
    const elites = jobs.filter(job => job.tier === "Elite");
    const rndmTwo = getRandomTwo(elites);

    displayJobs(rndmTwo, jobsContainer);
})

const lastVisitContainer = document.querySelector('.last-visit-container');
const lastVisitStatement = document.querySelector('.last-visit');
const lastVisitClose = document.querySelector('.last-visit-close');
const lastvisit = localStorage.getItem('lastVisit');
const now = new Date();

const featuredJobs = document.querySelector('#home-jobs-container')



// last visit functionality
lastVisitClose.addEventListener('click', () => {
    lastVisitContainer.classList.remove('show');
    lastVisitContainer.classList.add('hide');
})

if (lastvisit) {
    const lastVisitDate = new Date(lastvisit);
    const difference = now - lastVisitDate;
    localStorage.setItem('lastVisit', now.toISOString());

    if (difference < 1000 * 60 * 60 * 24) {
        lastVisitStatement.textContent = "Back so soon! Awesome!";
    } else {
        const numberOfDays = Math.floor(difference / (1000 * 60 * 60 * 24));
        lastVisitStatement.textContent = `You last visited ${numberOfDays} day${numberOfDays === 1 ? '' : 's'} ago.`;
    }
} else {
    localStorage.setItem('lastVisit', now.toISOString());
    lastVisitStatement.textContent = "Welcome! Let us know if you have any questions.";
}



