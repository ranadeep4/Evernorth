//https://restful-booker.herokuapp.com/apidoc/index.html
// Response Body: The data returned by the API in response to a request
// API Request Context: An isolated environment for making API requests with specific configurations
// Base URL: The root URL for the API endpoints

// Create Booking for https://restful-booker.herokuapp.com/booking

import { log } from 'node:console';
import { request } from 'playwright';

(async () => {


    // Create a new API request context using authentication
    const apiContext = await request.newContext({
        baseURL: 'https://restful-booker.herokuapp.com', // Base URL for Restful Booker API
        extraHTTPHeaders: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    });

    // Authentication (if needed) can be added here
    let authResponse = await apiContext.post('/auth', {
        data: {
            username: 'admin',
            password: 'password123'
        }
    });

    let token = await authResponse.json().then(data => data.token);

    console.log(token);

    // Create a new API request context with the token
    const authApiContext = await request.newContext({
        baseURL: 'https://restful-booker.herokuapp.com', // Base URL for Restful Booker API
        extraHTTPHeaders: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Cookie': `token=${token}`// Use the token for authenticated requests
        }
    });
    

    // 1. Create Booking (POST)
    const postResponse = await apiContext.post('/booking', {
        data: {
            firstname: 'John',
            lastname: 'Doe',
            totalprice: 150,
            depositpaid: true,
            bookingdates: {
                checkin: '2023-10-01',
                checkout: '2023-10-10',
            },
            additionalneeds: 'Breakfast',
        },
    });

    console.log('POST Status:', postResponse.status());
    const postData = await postResponse.json();
    console.log('POST Response Data:', postData);

    // delete the created booking to clean up
    const bookingId = postData.bookingid;
    const deleteResponse = await authApiContext.delete(`/booking/${bookingId}`);
    console.log('DELETE Status:', deleteResponse.status());

    // Dispose of the API request context
    await apiContext.dispose();
})();