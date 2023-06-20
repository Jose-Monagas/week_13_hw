# This README contains the Written Homework and the description of the TODO API (scroll down past the written homework)

## Written Homework

1. What is Express in Node.js and why is it used?

   Express.js is a free and open-source web application framework for Node.js. It is used for designing and building web apps quickly and easily. Express.js is very popular because it only requires JS becoming easier for programmers and developers to build web apps and API with little effort.

2. How does Mongoose help in using MongoDB with Node.js?

   Mongoose is an ODM library for Node.js that provides a higher-level abstraction for interacting with MongoDB. It simplifies the process of working with MongoDB by adding structure, validation, and other useful features.

3. Can you explain the role of Mongoose in managing relationships between data?

   Mongoose provides a convenient way to interact with MongoDB. It also facilitates the managing of relationships between data by providing a high level abstraction layer, schema-based approach, middleware support and built-in features.

4. What is a software design pattern? Give an example.

   A software design pattern is a reusable solution for common software development problems. It provides a blueprint or template for structuring code to achieve specific design goals and improve code quality. One example of a design pattern is the Observer pattern, which establishes a relationship between objects, allowing them to automatically notify and update each other when changes occur.

5. Can you explain the MVC architecture in detail?

   The Model-View-Controller architecture is a software architectural pattern used in the development of web apps. It separates an application into three components where each component has its specific role and responsibility.

6. What roles do Model, View, and Controller play in the MVC architecture?

   - Model: the model represents the data and business logic of the application. It holds the app's data structures, state and functions for manipulating that data. It also handles data retrieval, validation and storage operations.

   - View: the view is responsible for presenting the data to the user and handling user interface operations. The view receives data from the model and renders it in a format suitable for display.

   - Controller: the controller acts as an intermediary between the model and the view. It receives user input from the view and invokes appropriate actions on the model based on that input.

7. Define Latency and Throughput in the context of APIs.

   Latency and Throughput are performance metrics that measure different aspects of API performance.

   - Latency: refers to the time it takes for a request to travel from the client to the server and back, measuring the delay or time lag during the communication.

   - Throughput: refers to the number of requests that an API can handle withing a time period. It represents the capacity at which an API can process incoming requests.

8. Why is it important to minimize latency and maximize throughput in APIs?

   Minimizing these two is vital for delivering a good user experience with fast, efficient and scalable services.

9. What is Authentication in terms of web development?

   It is a fundamental aspect of web development. It ensures that only authorized users can access sensitive information or perform specific actions. Authentication also protects user data and provides security and control.

10. How does the authorization process start?

    The authorization process typically begins after a user has been authenticated. After the authentication happens, the authorization process begins. It usually involves the following steps:

    - Permissions: the web app must determine the roles or permission of the authenticated user.

    - Resource Access Check: the web app must check whether the authenticated user has the necessary privileges to access the requested resource or perform a specific action.

    - Authorization Decision: if the user is not authorized to access a resource or perform an action, the web app typically responds with an error message.

11. What is express.static used for in Express?

    Express.static is a middleware function used to serve static files, such as HTML, CSS, JS and other assets from a directory on the server.

12. Can you give an example of serving static files using express.static?

    ```
    const express = require('express');
    const app = express();

    // Serve static files
    app.use(express.static('some-directory'));

    // Start the server
    app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });

    ```

    Any files placed inside the "some-directory" will be accessible through the corresponding URLs.

13. What is Jest and why is it used?

    Jest is a widely used JS testing framework developed by Facebook. It is used to simplify the way we test JS code and apps built using JS. Jest provides a wide range of features for running and managing tests as well as reliability and faster development cycles.

14. How can Supertest be helpful when working with Jest?

    When combining Jest and Supertest, we can test our server, APIs and HTTP interactions. This is due to the fact that Jest provides the testing framework for our web app while Supertest allows making HTTP requests very easily.

15. Can you describe how manual and automated tests are executed?

    Manual testing involves human interaction and judgment, relying on the tester's observation. On the other hand, automated testing relies on predefined scripts and tools to execute tests and compare results.

    - Manual Testing Execution:

      - Test Case Preparation.
      - Test Environment Setup
      - Test Execution
      - Observation and Logging
      - Defect Reporting
      - Regression Testing

    - Automated Testing Execution:
      - Test Automation Framework Setup
      - Test Script Development
      - Test Execution
      - Test Result Analysis

16. What is the difference between unit testing, integration testing, and end-to-end testing?

    In Web Development, each of these three levels of testing serve distinct purposes.

    - Unit Testing: is the process of testing individual components or units of code in isolation to ensure they function correctly. Its main purpose is to verify that each unit of code behaves as intended.
    - Integration Testing: involves the interaction between multiple components or modules to ensure they work correctly when combined. It also aims to validate that integrated systems work as expected.
    - End-to-End Testing: is performed to validate the complete workflow of a system form start to finish. It mimics real user interactions to ensure that the system functions correctly.

17. Can you provide examples of functional, regression, smoke, and performance tests?

    - Functional Testing:
      - E-commerce Checkout: test the process of adding items to a cart and the completion of a purchase.
    - Regression Testing:
      - Bug Fix Validation: verifying that the fixes applied to reported bugs or issues do not create new problems or regressions in other areas of the system.
    - Smoke Testing:
      - Connectivity Testing: making sure that the application can connect to the necessary databases, APIs, or external services required for its proper functioning.
    - Performance Testing:
      - Load Testing: simulating a high number of users to evaluate how the systems perform under high demand including throughput and latency.

18. What is meant by positive testing and negative testing in a functional testing context?

    These are two approaches that are used to validate the behavior of a system.

    - Positive Testing: involves testing the system with valid and expected inputs to ensure that it behaves as intended and produces the correct output or result. I.E., providing valid login credentials.
    - Negative Testing: involves testing the system with invalid or unexpected outputs to assess how well it handles erroneous or abnormal conditions.

19. How does load testing assess the behavior of software?

    Load testing is fundamental for identifying performance issues and ensuring that the system can handle the expected user load. It achieves this by simulating realistic user loads and measuring how the system performs under them. It focuses on evaluating performance and stability during the process.

20. What aspects does usability testing assess in a software application?

    It assesses aspects from the end-users perspective to evaluate usability and user experience. Its main focus it to understand how users interact with the app and gathering feedback to improve overall usability.

21. Why is security testing crucial in a software development life cycle?

    It is crucial for several reasons:

    - Identify Vulnerabilities: it helps identify potential vulnerabilities in the software that could be exploited by attackers.
    - Protect Sensitive Data: such as personal information, financial data or business information.
    - Reputation and Trust: demonstrate commitment to end users.

22. Can you explain what compatibility testing is?

    It is a type of testing that focuses on assessing how well an app or system functions across different environments and devices. The main goal is to make sure that the software will continue to work as expected to provide a consistent user experience.

23. What is the aim of recovery testing and why is it important?

    The aim is to assess the ability of a system to recover from failures or disruptions and restore normal operations. During recovery testing unexpected conditions are introduced to evaluate how well the system can recover and maintain data integrity.

24. What is User Acceptance Testing (UAT) and who typically performs it?

    It is a phase in the software development cycle where the system is tested by end-users to ensure that the software meets the business requirements and performs as expected. The main focus of this test is to validate the software from the user's perspective before final deployment.

25. Can you describe a scenario in which you would use each of the different testing types mentioned in the notes?

    An example of UAT would be if we're building a web-based project management app. In this case the team members are the primary end-users and the UAT steps would be as follow:

    1. Test Planning: here the team would collaborate to define the scope and functionalities to be tested.
    2. Test Case Preparation: here the test cases are created depending upon a desired acceptance criteria.
    3. Test Execution: the test cases are performed. End-users interact with the app and validate that the system is performing as expected
    4. Resolution: here any issues found are identified and reported.
    5. Acceptance Decision: based on user's feedback a decision is made to accept or reject the software deployment.

## Todo API:

This API allows users to create a custom todo list, update any entry or delete something. This API was built following the MVC workflow.

### Instructions on how to use

Run the server and use Postman to interact with the API. The following routes are available for use:

- localhost:3000/todos -> all todos
- (GET): localhost:3000/todos/:id -> get a single todo
- (POST): localhost:3000/todos -> create a new todo
- (PUT): localhost:3000/todos/:id -> update a single todo
- (DELETE): localhost:3000/todos/:id -> delete a todo

### Testing

Jest and Supertest were implemented to make sure that the endpoints are working correctly. Edge case tests were also created to make sure the API behaves as expected when the user doesn't provide a valid entry.

### Load Testing

Artillery was implemented to make sure the API can handle enough server requests
