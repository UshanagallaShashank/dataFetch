# Customer Management App(DataFetch)

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

Clone the repository:
```bash
git clone https://github.com/UshanagallaShashank/dataFetch.git
```
Create the table:
```bash
CREATE TABLE IF NOT EXISTS customers (
  sno SERIAL PRIMARY KEY,
  customer_name VARCHAR(255),
  age INT,
  phone VARCHAR(15),
  location VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);

```
Insert the data accordingly

1. Navigate to the `client` folder.(cd client)
2. Install dependencies:
```bash
npm install
```
Start  Frontend
```bash
npm start
```
Server
-Description: 
-The server application is built using Node.js and provides RESTful APIs for managing customer data.

Technologies Used:
  -1.Node.js
  -2.Express
  -3.PostgreSQL
Installation
1.Navigate to the `server` folder.(cd server)

2.Install dependencies:

```bash
npm install
```
Start the server:
```bash
npm start
```
Getting Started


