# Departure Times

## Description
Departure Times is a service that provides real-time departure times for public transportation. The app geolocalizes the user and offers departure times based on their location. This project includes both a backend service to interact with public transportation APIs and a frontend React application to display the data to users.

## Features
- Real-time departure times
- Integration with NextBus public transportation API
- User-friendly interface with geolocation
- Unit tests for backend services

## Table of Contents
- [Setup](#setup)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Debugging](#debugging)
- [Deployment](#deployment)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Additional Notes](#additional-notes)

## Setup

### Backend
1. Clone the repository:
    ```sh
    git clone https://github.com/Azterix101/departure-times
    cd departure-times
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Create a `.env` file in the root directory and add any necessary environment variables (e.g., API keys).

### Frontend
1. Navigate to the `frontend` directory:
    ```sh
    cd frontend
    ```
2. Install dependencies:
    ```sh
    npm install
    ```

## Running the Application

### Start the Backend Server

    ```sh npm run dev```

  The backend server will start on http://localhost:5000.

  Start the Frontend Server
  Navigate to the frontend directory:
    ```sh

    cd frontend
    Start the frontend server:
  ```
  ```sh
    npm start
  ```
The frontend application will start on http://localhost:3000.

## Testing

### Backend Tests
Run the backend tests:

  ``` sh
    npm run test
    Frontend Tests
    Navigate to the frontend directory and run the frontend tests:
  ```

  ``` sh

    cd frontend
    npm run test
  ```

## Debugging

### Backend
  Ensure the .env file has the correct environment variables.
  Check the logs for any error messages:

```sh

  npm run dev

```

  Use tools like Postman or Curl to test your API endpoints directly.
### Frontend
  Check the browser console for any error messages.
  Ensure the frontend is correctly calling the backend API by verifying the network requests in the browser's developer tools.
  Use React DevTools to debug the component state and props.

##  Deployment

### Docker
  Ensure Docker is installed on your machine.
  Build and run the Docker containers:

```sh
docker-compose up --build

```
The application should now be running in Docker containers.

### Hosting Platforms
  You can deploy the application to platforms like Heroku, AWS, or any other cloud provider. Make sure to:

  Update environment variables as needed.
  Ensure the Dockerfile and docker-compose.yml are correctly configured for the hosting platform.

## API Endpoints
  GET /api/departures?agency=<agency>&route=<route>&stopId=<stopId>: Fetches departure times.
  Example

```sh
curl -X GET "http://localhost:5000/api/departures?agency=sf-muni&route=N&stopId=1234"
```
## Contributing
  Feel free to open issues or submit pull requests for improvements. Please follow the code of conduct and contribute to the project by:

Reporting bugs
Suggesting features
Writing and improving documentation
License
This project is licensed under the MIT License. See the LICENSE file for details.

## Additional Notes
  Tips for Debugging Issues
  Check Environment Variables: Ensure all necessary environment variables are set correctly in the .env file.
  Use Logs: Utilize console logs in both the backend and frontend to track down issues.
  Test Endpoints Directly: Use Postman or Curl to test backend endpoints directly to ensure they are working as expected.
  Verify Network Requests: Use the browser’s developer tools to verify that network requests are being made correctly from the frontend.
  Ensure Services are Running: Make sure both backend and frontend servers are running without errors.
  Updating Dependencies
  If you encounter issues with dependencies, you can update them using:

  ```sh

    npm update
  ```
  Ensure compatibility by reviewing any breaking changes in the updated dependencies.

### Troubleshooting
  If the backend server crashes, ensure that the necessary environment variables are set correctly.
  For frontend issues, clear the cache and ensure no errors are present in the console.
  For Docker-related issues, ensure that the Docker daemon is running and your containers are correctly built.