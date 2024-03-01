# Customer Management App (DataFetch)

This is a simple customer management app with a React frontend and Node.js backend.

## Table of Contents

- [Project Structure](#project-structure)
- [Client](#client)
- [Server](#server)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

The project is organized into two main folders:

- `client`: Frontend code.
- `server`: Backend code.

## Client

### Description

The client application is built using React and allows users to interact with customer data.

### Technologies Used

- React
- Axios

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/UshanagallaShashank/dataFetch.git
    ```

2. **Navigate to the `client` folder:**

    ```bash
    cd client
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Start the frontend:**

    ```bash
    npm start
    ```

## Server

### Description

The server application is built using Node.js and provides RESTful APIs for managing customer data.

### Technologies Used

- Node.js
- Express
- PostgreSQL

### Database Setup

1. **Create the `customers` table:**

    ```sql
    CREATE TABLE IF NOT EXISTS customers (
      sno SERIAL PRIMARY KEY,
      customer_name VARCHAR(255),
      age INT,
      phone VARCHAR(15),
      location VARCHAR(255),
      created_at TIMESTAMP DEFAULT NOW()
    );
    ```

2. **Insert data into the `customers` table.**

### Installation

1. **Navigate to the `server` folder:**

    ```bash
    cd server
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the server:**

    ```bash
    npm start
    ```

## Getting Started

To set up the project locally:

1. Follow the installation instructions for both the client and server.

2. Start the frontend and server applications.

## Contributing

Feel free to contribute to this project by following the guidelines in [CONTRIBUTING.md](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for details.
