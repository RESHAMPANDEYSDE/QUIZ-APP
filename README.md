Quiz Application
* Description
This is a simple and interactive quiz application where users can answer multiple-choice questions and get their score at the end. It features a timer, dynamic question loading, and a progress bar. The application is built using HTML, CSS, and JavaScript. The quiz is styled with modern and attractive UI elements for a better user experience.

Features
Timer: A countdown timer that limits the time available to answer each question.
Progress Bar: Shows the progress of the quiz as you answer each question.
Interactive UI: The buttons and questions are visually appealing with hover and click effects.
Score Display: Shows the user's score at the end of the quiz.
Responsive Design: The app adjusts automatically to fit different screen sizes.
Technologies Used
HTML: For creating the structure of the quiz.
CSS: For styling the quiz, including animations, button effects, and responsive design.
JavaScript: For the quiz logic, timer, scoring system, and dynamic loading of questions.
How to Run the Project
Clone the repository:
git clone https://github.com/RESHAMPANDEYSDE/QUIZ-APP/tree/main

now in the terminal we have to give this command 
cd quiz-app
Open the index.html file: Open the index.html file in any preferred web browser. You can simply double-click the file, or go live .

Play the Quiz:
The quiz will automatically start once the page loads.
Answer the questions by clicking the buttons. Your score and time remaining will be displayed as you progress through the quiz.
Approach
1. UI Design:
The quiz application is designed with a clean and modern interface. I used a linear gradient background and rounded buttons to create a visually appealing design. The buttons are interactive, with hover and active states to give feedback to the user.

2. Timer:
A circular countdown timer was implemented to make the quiz more engaging. The timer runs for a fixed duration (e.g., 30 seconds) for each question and updates every second. It uses CSS animations for smooth transitions.

3. JavaScript Logic:
The quiz uses JavaScript to handle user interaction and question flow.
The questions are loaded dynamically from an array of objects containing the question text and answer options.
The timer is managed using setInterval() and updates the timer display every second.
The user's score is calculated as they answer the questions, and the score is displayed at the end.
4. Responsiveness:
I made sure that the quiz looks great on both desktop and mobile devices by using responsive CSS with media queries. This ensures the app is accessible across different screen sizes.

