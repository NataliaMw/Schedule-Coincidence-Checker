# ACME solution - ioet exercise
## Description :page_facing_up:
This project is a solution to the exercise proposed by ioet: 
The company ACME offers their employees the flexibility to work the hours they want. But due to some external circumstances they need to know what employees have been at the office within the same time frame

The goal of this exercise is to output a table containing pairs of employees and how often they have coincided in the office.
## Overview of the solution :mag_right:
The solution is based on the following assumptions:
* The employees are identified by their name
* The employees can enter and leave the office at any time
* The company will have a txt file with the employees' records in a specific format

For starters, I had to read the exercise carefully and understand the requirements. Then, I had to think about the best way to solve the problem. I decided to use Javascript because its simplicity and the fact that I have more experience with it than with other languages. I also decided to use Node.js because it is a very popular tool for Javascript development.

After that, I had to think about the best way to structure the project. I decided to go for the MVC pattern since it will help to separate the different parts of the project and make it easier to maintain and extend, if needed. That said, I also use OOP paradigm and SOLID principles to make the code more readable and reusable.
### Architecture :building_construction:

Since it follows the MVC pattern, the project is divided into three main parts:
* **The model:** It contains the classes that represent the data of the project. In this case, the Employee and the Schedule classes.
* **The controller:** It contains the classes that control the flow of the project. In this case, the inputParser and the coincidenceService classes.
* **The view:** It contains the class that is responsible for displaying the data. In this case, the view class.
  
Finally, the main class is the index.js file. It is the entry point of the project and it is responsible for calling the different parts of the project.

#### Diagram of the architecture :triangular_ruler:
The diagram was based on the MVC pattern.

![Diagram of the architecture]()

## Aproach and methodology :bulb:


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