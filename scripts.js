let subjects = [];

function addSubject() {
    const input = document.getElementById('subjectInput');
    const subject = input.value.trim();

    if (subject === '') {
        alert('Please enter a subject name');
        return;
    }

    if (subjects.includes(subject)) {
        alert('Subject already added');
        return;
    }

    subjects.push(subject);
    input.value = '';
    displaySubjects();
}

function removeSubject(index) {
    subjects.splice(index, 1);
    displaySubjects();
}

function displaySubjects() {
    const container = document.getElementById('subjectsList');
    container.innerHTML = '';

    subjects.forEach((subject, index) => {
        const tag = document.createElement('div');
        tag.className = 'subject-tag';
        tag.innerHTML = `
            ${subject}
            <button onclick="removeSubject(${index})">✕</button>
        `;
        container.appendChild(tag);
    });
}

function toggleTimetable() {
    const container = document.getElementById('timetableContainer');
    const toggle = document.getElementById('timetableToggle');
    
    if (container.style.display === 'none') {
        container.style.display = 'block';
        toggle.textContent = 'Hide Timetable';
    } else {
        container.style.display = 'none';
        toggle.textContent = 'Add/View Timetable';
    }
}

function displayProfile() {
    const name = document.getElementById('name').value;
    const introduction = document.getElementById('introduction').value;
    const course = document.getElementById('course').value;

    if (name === '' || introduction === '' || course === '') {
        alert('Please fill in all required fields');
        return;
    }

    const output = document.getElementById('output');
    let subjectsHTML = '';

    if (subjects.length > 0) {
        subjectsHTML = '<p><strong>Subjects:</strong> ' + subjects.join(', ') + '</p>';
    }

    output.innerHTML = `
        <div class="output">
            <h2>👤 Profile Summary</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Course:</strong> ${course}</p>
            <p><strong>Introduction:</strong> ${introduction}</p>
            ${subjectsHTML}
            <p><a class="timetable-link" onclick="toggleTimetable()">📅 View/Edit Timetable</a></p>
        </div>
    `;
}

function clearAll() {
    document.getElementById('name').value = '';
    document.getElementById('introduction').value = '';
    document.getElementById('course').value = '';
    document.getElementById('subjectInput').value = '';
    subjects = [];
    displaySubjects();
    document.getElementById('output').innerHTML = '';
    document.getElementById('timetableContainer').style.display = 'none';
}

// Allow Enter key to add subjects
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('subjectInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addSubject();
        }
    });
});
