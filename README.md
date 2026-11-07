# URL Shortener

A full-stack URL shortener built using Node.js, Express, Drizzle ORM, MySQL, HTML, and CSS.

Create shortened links using an optional custom short code or an automatically generated hexadecimal code. URL records are stored in MySQL and retrieved using SQL queries for display on the frontend.

## Overview

This application converts long URLs into shorter links using a predefined base URL.

Users can provide a custom short code to personalize the generated link. If the short code is left blank, the application generates a hexadecimal code instead.

When the user submits the form, the original URL and the selected or generated short code are saved to the database. The application retrieves stored URL records and displays them on the frontend.

## Features

- Submit a long URL through a web interface.
- Provide an optional custom short code.
- Generate a hexadecimal code when no custom code is provided.
- Append the short code to a predefined base URL.
- Save original URLs and their short codes in MySQL.
- Retrieve stored records using SQL queries.
- Display saved URL data on the frontend.
- Use Express for backend request handling.
- Integrate database operations with Drizzle ORM.

## Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | Backend runtime |
| Express | Request handling and application routes |
| Drizzle ORM | Database integration |
| MySQL | Persistent storage for URL records |
| HTML | Page structure and form inputs |
| CSS | Interface styling |

## How It Works

1. The user enters the original URL.
2. The user optionally enters a custom short code.
3. The user submits the form.
4. The backend uses the provided short code or generates a hexadecimal code.
5. The original URL and short code are saved to MySQL.
6. The application retrieves stored records using SQL queries.
7. The frontend displays the saved link information.

The shortened URL follows this format:

```text
<base-url>/<short-code>
```

## Examples

### With a Custom Short Code

```text
Original URL:
[https://example.com/resources/nodejs/getting-started](https://example.com/resources/nodejs/getting-started)

Custom Short Code:
node-guide

Example Generated URL:
[https://your-short-domain.com/node-guide](https://your-short-domain.com/node-guide)
```

### Without a Custom Short Code

```text
Original URL:
[https://example.com/resources/nodejs/getting-started](https://example.com/resources/nodejs/getting-started)

Custom Short Code:
Left blank

Example Generated URL:
[https://your-short-domain.com/a3f9c2](https://your-short-domain.com/a3f9c2)
```

The domain and hexadecimal code above are illustrative. The actual domain and generated code depend on the application's configuration and implementation.

## Application Flow

```text
User enters a URL and optional short code
                    |
                    v
          Form submitted to Express
                    |
                    v
      Use custom code or generate hex code
                    |
                    v
       Save URL and short code to MySQL
                    |
                    v
       Retrieve records using SQL queries
                    |
                    v
          Display data on the frontend
```

## Database Storage

Each saved URL record contains:

- The original URL.
- Its custom or automatically generated short code.

The backend retrieves saved records using SQL queries and displays the resulting data on the frontend.

Add the actual table name, column names, and schema details here if you want to document the database structure.

## Getting Started

### Prerequisites

- Node.js and npm
- MySQL
- Git, if cloning the repository

### 1. Clone the Repository

Replace the placeholders with your actual GitHub username and repository name.

```bash
git clone [https://github.com/your-username/your-repository-name.git](https://github.com/your-username/your-repository-name.git)
cd your-repository-name
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure the Database

Set up a MySQL database and configure the connection using the settings expected by this project.

Document the actual configuration keys here, including any required:

- Database host and port.
- Database username and password.
- Database name.
- Application port.
- Default short-link base URL.

Do not commit database passwords or other credentials to the repository.

### 4. Initialize the Database

Follow the project's existing database setup process.

Add the exact schema initialization or migration command used by your Drizzle configuration here.

### 5. Start the Application

Use the startup script defined in `package.json`.

For example, if a `start` script is configured:

```bash
npm start
```

Open the application address shown in the terminal.

## Usage

1. Open the application in your browser.
2. Paste the original URL into the URL field.
3. Enter a custom short code, or leave the field empty.
4. Submit the form.
5. View the generated shortened URL.
6. View stored URL records displayed on the frontend.

## Implementation Details

Complete these details to help other developers run and understand the project:

| Setting | Project Value |
|---|---|
| Backend entry file | Add your entry filename |
| Development command | Add your development script |
| Production start command | Add your startup script |
| Local application address | Add your local address |
| Default short-link base URL | Add your configured base URL |
| Database setup command | Add your schema or migration command |
| URL table name | Add your actual table name |
| Duplicate short-code handling | Describe current behavior |
| Redirect behavior | Describe how short links resolve |

## Learning Objectives

This project provides practice with:

- Building a backend using Node.js and Express.
- Handling form submissions.
- Working with optional user input.
- Generating hexadecimal short codes.
- Connecting an application to MySQL.
- Using Drizzle ORM for database integration.
- Inserting and retrieving database records.
- Working with SQL queries.
- Displaying backend data on the frontend.
- Connecting a web interface to persistent storage.

## Future Improvements

Potential improvements, if not already implemented:

- Validate original URLs and supported protocols.
- Validate characters allowed in custom short codes.
- Enforce unique short codes in the database.
- Handle collisions during automatic code generation.
- Display helpful validation and database error messages.
- Add a copy-to-clipboard button.
- Add pagination for saved URL records.
- Add link editing and deletion.
- Track link visits.
- Add link expiration dates.
- Generate QR codes.
- Add automated tests.

## Contributing

Suggestions and improvements are welcome.

1. Fork the repository.
2. Create a branch for your changes.
3. Make and test your changes.
4. Submit a pull request.

## Author

**Tushar Deshmukh**

## License

Add your chosen license and a corresponding LICENSE file to specify the terms for using, modifying, and distributing this project.
