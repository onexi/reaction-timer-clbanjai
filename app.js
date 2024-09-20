let startTime;
let endTime;
let timeoutId;

document.getElementById('start').addEventListener('click', () => {
    clearTimeout(timeoutId);
    const delay = Math.floor(Math.random() * 3000) + 1000;
    timeoutId = setTimeout(() => {
        document.body.style.backgroundColor = 'red';
        startTime = Date.now();
    }, delay);
});

document.getElementById('stop').addEventListener('click', () => {
    if (document.body.style.backgroundColor === 'red') {
        endTime = Date.now();
        const reactionTime = endTime - startTime;
        const name = document.getElementById('name').value || 'Anonymous';
        const timeEntry = { time: reactionTime, name: name };
        displayTime(timeEntry);
        saveTime(timeEntry);

        document.body.style.backgroundColor = '';
    }
});

function displayTime(entry) {
    const timesList = document.getElementById('times');
    const listItem = document.createElement('li');
    listItem.textContent = JSON.stringify(entry);
    timesList.appendChild(listItem);
}

async function saveTime(entry) {
    try {
        const response = await fetch('http://localhost:3000/save-time', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(entry)
        });
        const data = await response.json();
        console.log('Success:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function fetchTimes() {
    try {
        const response = await fetch('http://localhost:3000/get-times');
        const data = await response.json();
        const timesList = document.getElementById('times');
        timesList.innerHTML = ''; // Clear existing list
        data.forEach(entry => {
            const listItem = document.createElement('li');
            listItem.textContent = JSON.stringify(entry);
            timesList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

// Fetch and display times when the page loads
window.onload = fetchTimes;
