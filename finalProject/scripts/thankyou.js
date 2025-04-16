const info = new URLSearchParams(window.location.search)

const formdate = new Date();
const dateTime = formdate.toLocaleString();

document.querySelector('.form-details').innerHTML = `
    <p>Your Name: ${info.get('firstname')} ${info.get('lastname')}</p>
    <p>Email: ${info.get('email')}</p>
    <p>Phone: ${info.get('phone')}</p>
    <p>Company: ${info.get('businessname')}</p>
    <p>Industry: ${info.get('industry')}</p>
    <p>Providing Opportinities in: ${info.get('states')}</p>
    <p>Membership: ${info.get('partnership')}</p>
    <p>Company Description: ${info.get('description')}</p>`
