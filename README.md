# My Book Collection

My Book Collection is a web application built with Node.js and MongoDB for managing a personal library collection. The application provides the ability to add, edit, delete, and search books, as well as add, edit, delete, and search authors.

## Requirements

- Node.js 12.x or higher
- MongoDB 6.x or higher
- Mongoose 6.x or higher
- Express 4.x or higher
- Nodemon 2.x or higher

## Installation

Clone the repository:

```bash
  git clone https://github.com/fahad39/MyBookCollection.git
```

Navigate to the project directory:

```bash
  cd MyBookCollection
```

Install dependencies:

```bash
  npm install
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

- Create a `.env` in the root of the project
- Add the following variables to `.env` file:

```bash
  DATABASE_URL=mongodb://localhost/myFilm
```

- Replace `mongodb://localhost/myFilm` with your MongoDB connection string.

## Usage

- Start the application:

```bash
  npm run devStart
```

- Open your web browser and navigate to http://localhost:3000 (you can change the 3000 with the port you want to use in the server.js file).

- Use the application to add, edit, delete, and search books, as well as add, edit, delete, and search authors.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or create an issue if you encounter a bug or have a feature request.
