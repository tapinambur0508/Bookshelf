# Bookshelf

This is a web server that allows users to perform CRUD (Create, Read, Update, Delete) operations on a list of books stored in a MongoDB database.

## Getting Started

Before you can run the server, you'll need to do the following:

1\. Clone this repository to your local machine

2\. Install the required dependencies by running `npm install`

3\. Create a `.env` file in the root directory of the project, and add the following environment variables:

```makefile
MONGO_URI=<your MongoDB connection string>
PORT=<the port you want the server to run on>
```

Replace `your MongoDB connection string` with the connection string for your MongoDB database, and `the port you want the server to run on` with the port number you want the server to listen on (e.g., `3000`).

4\. Populate your MongoDB database with a list of books. You can use the JSON array in the `books.json` file in the root directory of the project as a starting point.

Once you've completed these steps, you can run the server by running `npm start` in your terminal.

## API Endpoints

The following API endpoints are available:

### `GET /books`

Returns a paginated list of books in the database. The response body contains the following properties:

* `books`: An array of books in the requested page.
* `meta`: An object containing metadata about the pagination, including:
  * `currentPage`: The current page number.
  * `totalPages`: The total number of pages.
  * `totalCount`: The total number of books in the database.

#### Query Parameters

The following query parameters can be used to customize the pagination:

* `page`: The page number to retrieve. The default is 1.
* `limit`: The maximum number of books to return per page. The default is 50.

### `GET /books/:id`

Returns the book with the specified `id`.

### `POST /books`

Adds a new book to the database. The request body should contain a JSON object with the following properties:

* `title`: The title of the book (string, required)
* `author`: The author of the book (string, required)

### `PUT /books/:id`

Updates the book with the specified `id`. Returns the updated book. The request body should contain a JSON object with following properties:

* `title`: The title of the book (string, required)
* `author`: The author of the book (string, required)

### `DELETE /books/:id`

Deletes the book with the specified `id`.

## Validation

To ensure that data sent to the server is valid, the server uses [Joi](https://joi.dev) for validation. The validation schema for books is defined in the `book.js` file in the `schemas` directory.

## Project Deployment

This project is deployed using Render, a cloud platform for hosting and managing web applications. The deployed version of this app can be found at [https://bookshelf-j3iu.onrender.com](https://bookshelf-j3iu.onrender.com).
