# School API 📄

This repository was created with the intention of reinforcing my knowledge in developing REST APIs using Node.js with others techs.

## Table of Contents 📚

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Contributing](#contributing)

## Overview

This API was created with the intention of gaining a deeper understanding of building CRUD operations in Node.js and creating RESTful APIs, which are widely used in the daily lives of programmers. Through this project, I was able to gain a broader perspective on working with backend applications, even on a small scale and as a solo developer.

## Features

The API provides several functions, including:

-   User creation: Allows the creation of users with basic information.
-   CRUD operations for users: Supports the PUT, UPDATE, CREATE, and DELETE methods for managing user data.
-   File import: Enables the import of files and photos into the system.
-   Token generation: Generates tokens with an expiration period, providing secure access to authenticated endpoints.
-   Student database: Provides lists of students stored in the database.

These features enhance the functionality of the API and enable effective management of user data, file handling, token-based authentication, and student information.

## Technologies

The project was built using the following technologies:

-   JavaScript: The entire project was developed using JavaScript as the programming language.
-   Express: I chose the Express framework for its practicality and functionality in building the desired functionalities.
-   Sequelize: To perform database operations, I utilized Sequelize, which is an ORM (Object-Relational Mapping) for Node.js.
-   MariaDB: The database used in the project was MariaDB, which was interacted with using Sequelize.
-   Google servers: For deployment, I utilized Google servers. This allowed me to gain experience with additional technologies such as Nginx and PM2, which are commonly used for server setup and process management.

By leveraging these technologies, I was able to create a robust and scalable application with efficient handling of HTTP requests, database operations, and deployment on Google servers using Nginx and PM2.

## Installation and Usage

To install and run the application locally, follow these steps:

1.  Make sure you have Yarn installed on your system. If not, you can install it from the official Yarn website ([https://yarnpkg.com/](https://yarnpkg.com/)).
    
2.  Clone the repository and navigate to the project's root directory.
    
3.  Run the following command to install all the project dependencies:
    
    shellCopy code
    
    `yarn` 
    
4.  Once the dependencies are installed, you can start the application locally by running the following command:
    
    shellCopy code
    
    `yarn run dev` 
    
    This will start the application on a local server. You can choose the port for the application based on your environment configuration file.
    
5.  To generate the files in the `dist` folder, which might be used for deployment, run the following command:
    
    shellCopy code
    
    `yarn run build` 
    
    This command will compile and bundle the application code into a distribution-ready format.
    

Additionally, you mentioned automating the deployment process. If you have set up a script for that, you can run it to perform updates on the server automatically. The specifics of the deployment script will depend on your setup and requirements.

Make sure to update any necessary configuration files or environment variables to match your deployment environment before running the deployment script.

Please note that the actual deployment process may vary depending on your specific hosting environment and requirements.

## Contributing
To contribute to the project, please feel free to contact me. You can reach me through the following channels:

-   GitHub: <a href="https://github.com/amandaduuaarte">Amanda Duarte</a>

I would be happy to discuss any ideas, suggestions, or contributions you have in mind. Thank you for your interest in contributing to the project!
 <div align="center">
  <br/>
  <br/>
  <br/>
    <div>
      <sub>Copyright © 2023 - <a href="https://github.com/amandaduuaarte">Amanda Duarte</sub></a>
    </div>
    <br/>
    💖
</div>
