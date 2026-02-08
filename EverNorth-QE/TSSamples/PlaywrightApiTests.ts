// API Testing using Playwright for TypeScript Samples
// USe Playwright API to perform HTTP requests and validate responses. Donot import from playwright test

// CRUD Actions
// 1. Create (POST) : Post a new resource
//  Parameters: URL, payload (data), headers

// 2. Read (GET) : Fetch existing resources
// Parameters: URL, headers

// 3. Update (PUT) : Update an existing resource
// Parameters: URL, payload (data), headers

// 4. Delete (DELETE) : Remove a resource
// Parameters: URL, headers

// Terms of API Testing
// Endpoint: Specific URL where the API can be accessed
// Payload: Data sent to the API in POST or PUT requests
// Headers: Metadata sent with the API request (e.g., Content-Type, Authorization)
// Status Codes: Numeric codes indicating the result of the API request (e.g., 200 for success, 404 for not found)
// Response Body: The data returned by the API in response to a request
// API Request Context: An isolated environment for making API requests with specific configurations
// Base URL: The root URL for the API endpoints
// Extra HTTP Headers: Additional headers sent with the API request for authentication or content type
// JSON: A lightweight data interchange format commonly used in API communication
// Dispose: Clean up resources used by the API request context
// Example Code:
// Import the request module from Playwright
// Perform CRUD operations using Playwright's API testing capabilities
// Log the status codes and response data to the console
// Dispose of the API request context after use
// Note: This code is for demonstration purposes and may require adjustments based on the specific API being tested.

import { request } from 'playwright';

(async () => {
    // Create a new API request context
    const apiContext = await request.newContext({
        baseURL: 'https://jsonplaceholder.typicode.com', // Example base URL
        extraHTTPHeaders: {
            'Content-Type': 'application/json',
        },
    });
    // 1. Create (POST)
    const postResponse = await apiContext.post('/posts', {
        data: {
            title: 'foo',
            body: 'bar',
            userId: 1,
        },
    });
    console.log('POST Status:', postResponse.status());
    const postData = await postResponse.json();
    console.log('POST Response Data:', postData);
    // 2. Read (GET)
    const getResponse = await apiContext.get('/posts/1');
    console.log('GET Status:', getResponse.status());
    const getData = await getResponse.json();
    console.log('GET Response Data:', getData);
    // 3. Update (PUT)
    const putResponse = await apiContext.put('/posts/1', {
        data: {
            id: 1,
            title: 'updated title',
            body: 'updated body',
            userId: 1,
        },
    });
    console.log('PUT Status:', putResponse.status());
    const putData = await putResponse.json();
    console.log('PUT Response Data:', putData);
    // 4. Delete (DELETE)
    const deleteResponse = await apiContext.delete('/posts/1');
    console.log('DELETE Status:', deleteResponse.status());
    // Dispose of the API request context
    await apiContext.dispose();
})();

// Object Model

// An object model is a way to represent and interact with objects in a structured manner within a programming environment.
// It defines the properties, methods, and relationships of objects, allowing developers to manipulate and manage them effectively.

// COM : Component Object Model : A platform for software componentry
// Created by Microsoft to enable interprocess communication and dynamic object creation in a networked environment
// It is used to enable software components to communicate with each other regardless of the programming languages they were developed in.

// DCOM: Distributed Component Object Model : An extension of COM for networked environments
// Allows COM components to communicate over a network
// Enables remote procedure calls between software components on different machines
// It is used in distributed applications where components need to interact across different systems.

// DOM : Document Object Model
// A programming interface for web documents
// Represents the structure of a document as a tree of objects
// Allows scripts to dynamically access and update the content, structure, and style of documents
// It is used in web development to manipulate HTML and XML documents.

// In comparison with com and dcom, dom is specifically focused on web documents and their structure, while com and dcom are more general-purpose component models for software development.
// COM and DCOM are primarily used for building software components that can interact across different programming languages and networked environments, whereas DOM is used for manipulating the content and structure of web documents within a browser or similar environment.
// on a whole the purpose of com and dcom is to facilitate communication and interaction between software components, 
// while dom is focused on representing and manipulating the structure of web documents.

// Communication between web application of different technologies is often achieved through APIs (Application Programming Interfaces) that utilize HTTP (Hypertext Transfer Protocol) for data exchange.
// API : Application Programming Interface
// An interface that allows different software applications to communicate with each other
// It defines a set of rules and protocols for building and interacting with software applications

// It is used to enable integration between different systems and facilitate data exchange.
// Web Services : A type of API that is accessible over the web using standard protocols such as HTTP
// They allow different applications to communicate and share data over the internet
// They are used to enable interoperability between different systems and platforms.
// They often utilize formats like XML or JSON for data exchange.

// REST : Representational State Transfer
// An architectural style for designing networked applications
// It relies on stateless communication and standard HTTP methods (GET, POST, PUT, DELETE)
// It is used to build scalable and maintainable web services that can be easily consumed by clients.


// API Testing terminology
// HTTP : Hypertext Transfer Protocol
// CRUD : Create, Read, Update, Delete
// JSON : JavaScript Object Notation
// XML : eXtensible Markup Language
// SOAP : Simple Object Access Protocol
// RPC : Remote Procedure Call
// Endpoint : Specific URL where the API can be accessed
// Payload : Data sent to the API in POST or PUT requests
// Headers : Metadata sent with the API request (e.g., Content-Type, Authorization)
// Status Codes : Numeric codes indicating the result of the API request (e.g., 200 for success, 404 for not found)
// Response Body : The data returned by the API in response to a request
// API Request Context : An isolated environment for making API requests with specific configurations
// Base URL : The root URL for the API endpoints
// Extra HTTP Headers : Additional headers sent with the API request for authentication or content type
// Dispose : Clean up resources used by the API request context
// JSON : A lightweight data interchange format commonly used in API communication
// API Testing : The process of validating the functionality, reliability, performance, and security of an API
// It involves sending requests to the API endpoints and verifying the responses against expected outcomes.
// It is used to ensure that the API behaves as intended and meets the requirements of the application.

// Now the API's are used for communication between almost all applications, services, and systems over the web, desktop and mobile platforms.
// They enable integration, data exchange, and interoperability between different technologies and platforms.
// They are essential for building modern software applications that rely on external services and data sources.

// Playwright Rest API Testing

// Playwright provides a powerful API for testing web applications, including support for REST API testing.
// With Playwright, you can easily send HTTP requests to REST API endpoints and validate the responses.
// This allows you to ensure that your API behaves as expected and meets the requirements of your application.  

// Playwright's API testing capabilities include support for various HTTP methods (GET, POST, PUT, DELETE),
// handling request and response headers, managing authentication, and validating response status codes and payloads.
// You can also use Playwright's powerful assertion library to verify that the API responses match the expected results.    

// Overall, Playwright provides a comprehensive solution for testing REST APIs, allowing you to ensure the reliability and functionality of your web applications.

// Example Code for Playwright REST API Testing
// Import the request module from Playwright
// Perform CRUD operations using Playwright's API testing capabilities
