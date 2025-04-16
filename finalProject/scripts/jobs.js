import { getJobs, displayJobs } from "./utilis.js";

const jobsContainer = document.querySelector('#jobs-container');
const states = document.querySelector('#states');
let allJobs = [];

document.addEventListener('DOMContentLoaded', async () => {
    const jobs = await getJobs();
    allJobs = jobs;
    displayJobs(jobs, jobsContainer);
})

function clearJobs() {
    jobsContainer.innerHTML = '';
}

states.addEventListener('change', (e) => {
    if (e.target.value === 'pohnpei') {
        const pniList = allJobs.filter(job => job.location === "Pohnpei");
        clearJobs();
        displayJobs(pniList, jobsContainer);
    } else if (e.target.value === 'chuuk') {
        const chuukList = allJobs.filter(job => job.location === "Chuuk");
        clearJobs();
        displayJobs(chuukList, jobsContainer);
    } else if (e.target.value === 'kosrae') {
        const kosraeList = allJobs.filter(job => job.location === "Kosrae");
        clearJobs();
        displayJobs(kosraeList, jobsContainer);
    } else if (e.target.value === 'yap') {
        const yapList = allJobs.filter(job => job.location === 'Yap');
        clearJobs();
        displayJobs(yapList, jobsContainer);
    } else {
        clearJobs();
        displayJobs(allJobs, jobsContainer);
    }
})