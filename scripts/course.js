const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const coursesContainer = document.querySelector('.cert-courses');
const cerBtns = document.querySelectorAll('.cert-btn');
const allBtn = document.querySelector('.all');
const cseBtn = document.querySelector('.cse');
const wddBtn = document.querySelector('.wdd');

const modal = document.querySelector('.modal');

allBtn.addEventListener('click', () => {
    clearCourses();
    populateCourses(courses);
})

cseBtn.addEventListener('click', () => {
    clearCourses();
    const cseList = courses.filter(course => course.subject === 'CSE')
    populateCourses(cseList);
})

wddBtn.addEventListener('click', () => {
    clearCourses();
    const wddList = courses.filter(course => course.subject === 'WDD')
    populateCourses(wddList);
})

function checkComplete(course) {
    if (course.completed === true) {
        return `${course.subject} ${course.number} ✅`;
    } else {
        return `${course.subject} ${course.number}`;
    }
}




function populateCourses(list) {
    list.forEach(course => {
        let div = document.createElement('div');
        div.setAttribute('class', 'course');
        div.textContent = checkComplete(course);

        let courseModal = document.createElement('dialog');
        courseModal.setAttribute('class', 'modal');


        const name = document.createElement('h4');
        name.textContent = checkComplete(course);

        const close = document.createElement('span');
        close.textContent = 'X';

        const modalTitle = document.createElement('div')
        modalTitle.setAttribute('class', 'title-close')
        modalTitle.append(name);
        modalTitle.append(close);

        const credits = document.createElement('p');
        credits.textContent = `${course.credits} credits`;

        const title = document.createElement('p');
        title.textContent = course.title;

        const cert = document.createElement('p');
        cert.textContent = `Certificate: ${course.certificate}`

        const desc = document.createElement('p')
        desc.textContent = course.description;

        const tech = document.createElement('p');
        tech.textContent = `Technology: ${course.technology.toString()}`;

        courseModal.append(modalTitle)
        courseModal.append(credits)
        courseModal.append(title)
        courseModal.append(cert)
        courseModal.append(desc)
        courseModal.append(tech)

        coursesContainer.appendChild(courseModal);
        coursesContainer.appendChild(div);



        div.addEventListener('click', () => {
            courseModal.showModal()
        })

        close.addEventListener('click', () => {
            courseModal.close();
        })
    });
}

function clearCourses() {
    const courseList = document.querySelectorAll('.course');
    courseList.forEach(course => {
        course.remove();
    })
}


populateCourses(courses);