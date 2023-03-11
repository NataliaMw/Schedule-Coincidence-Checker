# ACME solution - ioet exercise
## Description :page_facing_up:
This project is a solution to the exercise proposed by ioet: 
The company ACME offers their employees the flexibility to work the hours they want. But due to some external circumstances they need to know what employees have been at the office within the same time frame.

The goal of this exercise is to output a table containing pairs of employees and how often they have coincided in the office.
## Overview of the solution :mag_right:
The solution is based on the following assumptions:
* The employees are identified by their name
* The employees can enter and leave the office at any time
* The company will have a txt file with the employees' records in a specific format
* The employees that have not coincided in the office will not be displayed in the output

For starters, I had to read the exercise carefully and understand the requirements. Then, I had to think about the tools to use. I decided to use Javascript because its simplicity and the fact that I have more experience with it than with other languages. I also decided to use Node.js because it is a very popular tool for Javascript development, with that Jtest had to be installed for testing purposes.

After that, I had to think about the best way to structure the project. I decided to go for the MVC pattern since it will help to separate the different parts of the project and make it easier to maintain and extend, if needed. That said, I also use OOP paradigm and SOLID principles to make the code more readable and reusable.
### Architecture :building_construction:
This application is designed as a command-line tool that reads employee schedule data from a text file, calculates the number of overlapping schedules between each pair of employees, and displays the results in a table.

Since it follows the MVC pattern, the project is divided into three main parts:
* **The model:** It contains the classes that represent the data of the project. In this case, the Employee and the Schedule classes.
    * Employee: It represents an employee. It has a name and a list of schedules.
    * Schedule: It represents a schedule. It has a start time and an end time and a method to check if two schedules overlap.
  
* **The controller:** It contains the classes that control the flow of the project. In this case, the inputParser and the coincidenceService classes.
  * inputParser: It is responsible for reading the input file and parsing the data into the model classes.
  * CoincidenceService: It is responsible for calculating the number of coincidences between each pair of employees and creating a map with the results. 
* **The view:** It contains the class that is responsible for displaying the data. In this case, the view class.
  * The output is displayed in the console as a table:
    | Employee 1 | Employee 2 | Coincidences |
    |------------|------------|--------------|
    | John       | Mary       | 2            |
    | John       | Paul       | 1            |
  
Finally, the main class is the index.js file. It is the entry point of the project and it is responsible for calling the different parts of the project.

#### Diagram of the architecture :triangular_ruler:
The diagram was based on the MVC pattern.

![Diagram of the architecture](https://user-images.githubusercontent.com/67672070/224466872-5d5ff06e-fb56-45eb-8260-039195d795e9.png)


## Aproach and methodology :bulb:
The following steps were followed to solve the problem:
1. **Requirements Gathering:** Read the exercise carefully and understand the requirements. The primary requirement was to check for schedule coincidences between employees.
2. **Select the tools:** Decide which tools to use for the projects. In this case, I decided to use Javascript and Node.js, but I was also considering using Python and Java.
3. **Design:** Design the architecture of the project. The application was divided into several modules, each responsible for a specific task. The modules were designed using design patterns. I also create a diagram to represent the architecture of the project so it would be easier to understand.
4. **Implementation:** Implement the different modules of the project. I started by creating the model classes and then inputParser and the coincidenceService classes. Finally, I created the view class.
1.  **Testing:** Test the different modules of the project. I used Jest to validate the solution.
2.  **Documentation:** Document the project. I created a README file to explain the project and how to run it. Also I made sure to comment the code using guidelines from the Clean Code book.

The methodology used was iterative and involved frequent testing and feedback to ensure that the application met the requirements and was of high quality.
## Getting Started :rocket:
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
### Prerequisites :wrench:
* Node.js
* NPM or Yarn

### Run the project :computer:

1. Open the terminal or the command prompt
2. Clone the repository
   code:
    ```
    git clone https://github.com/NataliaMw/Schedule-Coincidence-ioet.git
    cd Schedule-Coincidence-ioet
    ```
3. Install the dependencies
   code:
    ```
    npm install
    ```
    or
    ```
    yarn install
    ```
4. Run the project
    ```
    npm start
    ```
    or
    ```
    yarn start
    ```
5. Run the tests
    ```
    npm test
    ```
    or
    ```
    yarn test
    ```