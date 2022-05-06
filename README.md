# SENECA-TECH-TASK-TOGGLE

This is a JS news application created with Material-UI & React.js.

# Table of contents
- [SENECA-TECH-TASK-TOGGLE](#seneca-tech-task-toggle)
- [Table of contents](#table-of-contents)
- [General-Information <a name="general-information"></a>](#general-information-)
- [Tech Stack <a name="tech-stack"></a>](#tech-stack-)
- [Setup <a name="setup"></a>](#setup-)
  - [Dependencies <a name="dependencies"></a>](#dependencies-)
  - [Installation <a name="Installation"></a>](#installation-)
- [Screen-Recording-Demo <a name="screen-recording-demo"></a>](#screen-recording-demo-)
- [Future-Work <a name="future-work"></a>](#future-work-)

# General-Information <a name="general-information"></a>

The SENECA-TECH-TASK-TOGGLE app is my individual work on the take home test of the Seneca Learning. The design of this application was provided by Seneca on a figma format and I translated that to a React application. It was developed with a mobile first approach, so I considered both mobile and web views. The user is given with a question and multiple choise answers in a form of toggle buttons. The widget follows a traffic light approach in order to help the user to figure out the solution. When the user launches the app all the toggle buttons are initialiased with incorrect responses, so the widget is on a red state. If the user manages to get 50% or more of the answers correct - but no 100% - the widget turns amber and with 100% of the responses being correct, the app turns green and it locks.

The questions, the possible answers and the correct solutions are held in a json file under ./src/db/db.json. The former ones are read in the App.js file in order to be passed into the child component. I coded up a progression component and conditionally render it into the App.js, because the above information will be get by a database in the future, so we need to show a user friendly message until the data will be fetched.

All the toggle buttons are initialised with the incorrect states by flipping the information of the solutions array from the db.json. 
I have made the assumption that the two states will be called "option1" and "option2". I could have followed a more reusable way for that by creating a config file, but I assumed that will be done in the future. 

The state management way that I used is the useContext hook. I initialised the Material UI theme (ie traffic light system) and passed it to the custom widget. Furthermore, the useState hook was used extensively for storing data in different parts of this application.

# Tech Stack <a name="tech-stack"></a>

```
JavaScript
React
Material UI
CSS
HTML
```

# Setup <a name="setup"></a>

## Dependencies <a name="dependencies"></a>

<br> -> Please have a look at the list below in order to see the version of each dependency that the developer used. <-

```
- emotion/react: 11.8.1
- emotion/styled: 11.8.1
- mui/material: 5.6.3
- testing-library/jest-dom: 5.16.4
- testing-library/react: 13.1.1
- testing-library/user-event: 13.5.0
- react-dom: 18.1.0
- react-router-dom: 6.3.0
- react-scripts: 5.0.1
- web-vitals: 2.1.4
- react: 18.1.0
- npm: 8.1.2
```
## Installation <a name="Installation"></a>

To run this project you will need to clone this repository onto your local machine.

```
$ git clone https://github.com/imevanc/seneca-tech-task-toggle.git
```

Navigate inside the folder and install all dependencies by entering the following commands on your terminal window:

```
$ cd seneca-tech-task-toggle
$ npm install
```

To run the application locally enter:

```
$ npm start
```

The application will run on http://localhost:3000.

# Screen-Recording-Demo <a name="screen-recording-demo"></a>

https://user-images.githubusercontent.com/96417438/167110112-84ce7e16-a495-4bcf-a1b8-c93ea31060ab.mov


# Future-Work <a name="future-work"></a>

- Type Checking: There is no type checking at the moment. My next step as a junior developer is to become acquainted with Typescript.
- Configs File: A file where will consists of configurations of the widget (eg "option1", "option2" etc)
- More than 2 responses to choose per solution (eg (A, B, C))
- Create a custom API in order to replace the json file. That will be done in MongoDB, hosted in Atlas as a mongoose format.
- Randomised data fetching from the backend
