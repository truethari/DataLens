# DataLens

DataLens is an open-source ExpressJS application that simplifies the process of connecting to and reading data from various databases. Designed with ease of use in mind, DataLens allows users to fetch data in JSON format directly through a web interface, eliminating the need for downloading and setting up traditional DB clients. By providing an API endpoint that accepts connection details as parameters, DataLens makes it straightforward for anyone to query various DB collections from anywhere, at any time.

## Features

- **Flexible MongoDB Connection:** Supports connections to any MongoDB database by specifying the URI, database name, and collection name as parameters.
- **User-Friendly JSON Data Retrieval:** Enables users to read data from MongoDB collections and receive the results in JSON format, making it easy to integrate into other applications or processes.
- **Secure and Accessible:** Implements essential security practices with middleware such as CORS and Helmet, ensuring safe and cross-origin accessible endpoints.
- **Swagger-Documented API:** Comes with a Swagger UI setup that provides interactive documentation, making it easy for developers to understand and use the API endpoints.

## Installation

To get started with DataLens, follow these steps:

1. **Clone the Repository**
   ```sh
   git clone https://github.com/truethari/DataLens.git
   cd DataLens
   ```

2. **Install Dependencies**
   Navigate to the project directory and install the necessary dependencies:
   ```sh
   npm install
   ```

3. **Configure Environment**
   Create a `.env` file in the project root to store environment variables such as the server port (optional):
   ```
   PORT=3001
   ```

## Running the Application

To launch the server, run:

```sh
npm start
```

The server will start, and the application will be accessible at `http://localhost:3001` or the port you specified in the `.env` file.

## API Usage

### Reading Data from MongoDB

- **GET `/mongodb/read`**
    - **Query Parameters:**
        - `uri` (required): The MongoDB URI, supporting both standard and +srv formats.
        - `db` (required): The name of the database to connect to.
        - `collection` (required): The name of the collection from which to read data.
    - **Success Response:**
        - **Code:** 200
        - **Content:** JSON array of documents from the specified collection.
    - **Error Responses:**
        - **Code:** 400
        - **Content:** `{ message: "Missing required fields" }`
        - **Code:** 500
        - **Content:** `{ error: "Error message describing the specific issue encountered." }`

## Swagger UI

Explore and test the API using the Swagger UI interface available at `http://localhost:3001/api-docs`.

## Security Measures

DataLens employs Helmet to enhance API security and uses CORS to manage cross-origin requests, ensuring that the API is both secure and accessible from different origins.

## Contributing

Contributions to DataLens are welcome! Whether it's feature requests, bug reports, or code contributions, feel free to fork the repository, make your changes, and submit a pull request.

## License

DataLens is open-source software licensed under the MIT License. Feel free to use, modify, and distribute it as per the license terms.

Your feedback and contributions will help make DataLens a valuable tool for the developer community.