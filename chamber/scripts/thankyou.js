
const info = new URLSearchParams(window.location.search)

document.querySelector('.form-results').innerHTML = `
    <p>Applicant name: ${info.get('firstname')} ${info.get('lastname')}</p>
    <p>Organizational Title: ${info.get('organizationaltitle')}</p>
    <p>Contact Info: <br>Email: ${info.get('email')} <br>Phone: +1${info.get('phone')}</p>
    <p>Name of Organization: ${info.get('businessname')}</p>
    <p>Business Description: ${info.get('description')}
    <p>Partnership Level: ${info.get('partnership')} Partnership</p>
    `
