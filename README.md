# User Management System

This project is a simple user management system that allows you to insert users into a PostgreSQL database. The project is built using [TypeScript](https://www.typescriptlang.org/) and [Node.js](https://nodejs.org/).

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed [Node.js](https://nodejs.org/) (version 14 or later).
- You have installed [PostgreSQL](https://www.postgresql.org/) (version 12 or later).
- You have a basic understanding of TypeScript and SQL.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/user-management-system.git
    cd user-management-system
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up the database:**

    - Start your PostgreSQL server.
    - Create a new database:

    ```sql
    CREATE DATABASE user_management;
    ```

    - Create the `users` table:

    ```sql
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
    );
    ```

## Configuration

1. **Create a `.env` file in the root directory of the project and add your database configuration:**

    ```env
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    DB_NAME=user_management
    ```

2. **Update the database connection in your code:**

    Ensure your database client is configured to use the environment variables from the `.env` file. For example, using `pg`:

    ```typescript
    import { Client } from 'pg';
    import dotenv from 'dotenv';

    dotenv.config();

    const client = new Client({
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });
    ```

## Usage

1. **Run the project:**

    ```bash
    npm start
    ```

2. **Insert a user:**

    Use the `insertUser` function to insert a new user into the database. For example:

    ```typescript
    import { insertUser } from './path/to/your/module';

    async function main() {
        const userId = await insertUser('john_doe', 'john@example.com', 'securepassword');
        console.log(`New user ID: ${userId}`);
    }

    main().catch(console.error);
    ```

## Database Schema

The `users` table schema:

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);
