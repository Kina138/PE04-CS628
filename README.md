# PE04-CS628

# Cities Application

Hi, I’m Kina, a student in CS628. This project is a demonstration of my skills in React, state management, and React Router. I developed this application as part of my coursework to provide an interactive platform where users can add new cities and view detailed information about them. The project showcases how user input can be transformed into dynamic, real-time output using modern web development techniques.

## Installation and Running
To run the application locally, follow these steps:
1. Clone the repository.
2. Navigate to the project directory and install dependencies:
   ```bash
   npm install
3. Start the development server:
    ```bash
    npm start
The app will automatically open in your browser at http://localhost:3000.

## Screenshots

Here are some screenshots illustrating key parts of the application:
1. Main Page (Cities List):
This page displays an initially empty list of cities. Once cities are added, they appear here.
<img width="1112" alt="image" src="https://github.com/user-attachments/assets/f3cd8a83-361f-4173-ad89-8694d38330e1" />

2. Add City Page:
The Add City page allows users to enter details such as city name, country, population, and a short description.
<img width="1112" alt="image" src="https://github.com/user-attachments/assets/518da714-3c32-4afe-901f-4728f5889fc4" />

3. City Detail View:
When a city is clicked, its detailed information is displayed immediately below the list.
<img width="1112" alt="image" src="https://github.com/user-attachments/assets/0945b602-ffd1-4e32-9355-2e8700fa8aec" />


## Input

In this application, the input is captured through a user-friendly web form found on the “Add City” page. I designed the form using controlled React components, where users are required to input the city name, country, population, and a description. This raw data is essential as it forms the foundational dataset that drives the functionality of the app. I ensured form validation is in place so that every entry is complete and reliable before it is processed.

## Process

Once the form is submitted, the application processes the input by updating a centralized state managed in the main App component. Each new city is assigned a unique identifier generated using the current timestamp and then appended to the cities array. I employed React Router’s nested routing mechanism to handle navigation seamlessly. When a user clicks on a city name from the list, the application uses the useParams hook to extract the city’s identifier from the URL, retrieves the corresponding data, and displays the city details immediately below the list.

## Output

The final output of the application is a dynamically updated cities list that reflects the user’s entries in real-time. The design ensures that when a user selects a city, its detailed information is displayed directly on the same page, enhancing the user experience by providing immediate visual feedback. This integrated display not only confirms that the data has been correctly captured but also allows users to easily verify and review their submissions. I believe this project successfully meets the requirements and demonstrates a clean, intuitive, and responsive interface.
