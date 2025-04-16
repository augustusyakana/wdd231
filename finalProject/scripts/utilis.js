export async function getJobs() {
    try {
        const res = await fetch('./data/jobs.json');
        if (res.ok) {

            const data = await res.json();
            return data.jobs;
        } else {
            throw new Error(`HTTP error | status: ${res.status}`);
        }
    } catch (error) {
        console.error('Fetch failed:', error)
    }
}

export const displayJobs = (jobs, container) => {

    jobs.forEach(job => {
        const card = document.createElement('div');
        card.setAttribute('class', 'job-card');

        const title = document.createElement('h4');
        title.setAttribute('class', 'title')
        title.textContent = job.title;
        card.appendChild(title);

        const company = document.createElement('p');
        company.setAttribute('class', 'company');
        company.textContent = job.company;
        card.appendChild(company);

        const location = document.createElement('p');
        location.setAttribute('class', 'location');
        location.textContent = job.location
        card.appendChild(location)

        const type = document.createElement('p');
        type.setAttribute('class', 'type');
        type.textContent = job.type;
        card.appendChild(type)

        const pay = document.createElement('p')
        pay.setAttribute('class', 'pay')
        pay.textContent = job.pay;
        card.appendChild(pay);

        const dialog = document.createElement('dialog');
        dialog.setAttribute('class', 'modal');

        const date = document.createElement('p');
        date.setAttribute('class', 'date');
        date.textContent = `Date Posted: ${job.datePosted}`;

        const companyDesc = document.createElement('p');
        companyDesc.setAttribute('class', 'company-description');
        companyDesc.textContent = job.companyDescription;

        const description = document.createElement('p');
        description.setAttribute('class', 'description');
        description.textContent = job.positionDescription;

        const respUl = document.createElement('ul');
        respUl.setAttribute('class', 'responsibilities-ul');
        const resptitle = document.createElement('p');
        resptitle.innerHTML = `<strong>Responsibilities:</strong><br>`;
        respUl.appendChild(resptitle);

        const reqUl = document.createElement('ul');
        reqUl.setAttribute('class', 'requirements-ul')
        const reqtitle = document.createElement('p');
        reqtitle.innerHTML = `<strong>Requirements:</strong><br>`
        reqUl.appendChild(reqtitle);

        job.responsibilities.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            respUl.appendChild(li);
        })

        job.requirements.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            reqUl.appendChild(li);
        })

        const dialogClose = document.createElement('button');
        dialogClose.setAttribute('class', 'close');
        dialogClose.textContent = "Close";

        dialogClose.addEventListener('click', () => {
            dialog.close();
            document.body.classList.remove('modal-open')
        })

        const apply = document.createElement('button');
        apply.setAttribute('class', 'apply-btn');
        apply.innerHTML = `<a href='./applied.html'>Apply Now</a>`;

        const logo = document.createElement('img');
        logo.setAttribute('class', 'logo');
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '50')
        logo.setAttribute('alt', `${job.company} logo`);
        logo.setAttribute('src', `${job.logo}`)

        const companyClone = company.cloneNode(true);
        companyClone.setAttribute('class', 'company-clonse')

        dialog.appendChild(logo);
        dialog.appendChild(companyClone);
        dialog.appendChild(date);
        dialog.appendChild(description);
        dialog.appendChild(respUl);
        dialog.appendChild(reqUl);
        dialog.appendChild(companyDesc);
        dialog.appendChild(dialogClose);
        dialog.appendChild(apply);

        const info = document.createElement('button');
        info.setAttribute('class', 'info-btn');
        info.textContent = "More Info";

        info.addEventListener('click', () => {
            dialog.showModal();
            document.body.classList.add('modal-open')
        })
        card.appendChild(info)
        card.appendChild(dialog);

        container.append(card);
    })


}

export function getRandomTwo(jobs) {
    const sorted = [...jobs].sort(() => 0.5 - Math.random());
    return sorted.slice(0, 2);
}