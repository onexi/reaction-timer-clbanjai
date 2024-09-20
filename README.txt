[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/e__G6ZpK)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=15848958)
Starter Code for Reaction Timer 
Run npm install to install all dependencies 
The above uses package.json to build the project
Note .gitignore is set to ignore node_modules

'index.html' contains the front end of the reaction timer. 
    I have an input field that allows the user to be able to input their name.
    There's a start button and a stop button.
    When the start button is hit, a timer starts that will run a random length of time
    between 1 second and 4 seconds. After the timer runs, the screen turns red, and the user
    hits the stop button. We record how much time it took the user to react to the button.
app.js contains the backend .
Start Timer: When the "Start" button is clicked, a random delay is triggered. Once the delay ends, the background turns red, and the timer begins.
Stop Timer: When the "Stop" button is clicked (if the background is red), the reaction time is calculated, displayed, and saved.
Display Reaction Time: The calculated reaction time, along with the user’s name, is displayed in a list.
Save Reaction Time: The reaction time is saved to the backend using the Fetch API (configured for http://localhost:3000/save-time).
Fetch Previous Times: On page load, previously saved reaction times are fetched from the backend and displayed in the list.

Some of the function here are:
displayTime(entry): Updates the UI to show a new reaction time.
saveTime(entry): Sends a POST request to save the reaction time to the backend.
fetchTimes(): Sends a GET request to fetch previously saved reaction times and display them on the page.