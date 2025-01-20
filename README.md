# Google Books API Viewer

## Requirements / Purpose


## MVP:
- Header section introducing the page
- Form containing a text input and a submit / search button
- A grid of books

Instructions:

- When the submit button is clicked you need the request books from the Google books API using the input value as your query string
- The books that you receive should be rendered in the books grid.
- Each book in the grid should have an image, author, title and description
- The grid should be responsive on different screen sizes

Application Design (required):

- JavaScript logic, like functions that fetch data, can be moved to their own .js files
- Give feedback to the user when no book results can be found for the query.
- When a user clicks a book in the grid, a modal should appear with more book information, think about release, publish date, country, languages, etc.

---

## Purpose of project:

Nology project using React, using concepts like State, Effect, Props and Routes.
Using JSX, JavaScript and SCSS/Sass.

---

## Build Steps

- Made FetchBooks component with basic styling.
- Worked on the API call to Google Books to display data to the console then the screen.
- Made a SearchBar component to be used to write queries into, the value became the result of the api call.
- Formatted this data into a BookCard component.
- Worked on the landing page, global styling for buttons, colors and fonts
- Add a Header, Footer and NavBar.
- Set up routes and Links to let the NavBar go between the HomePage and BookPage.
- Made the Query show 20 results and were displayed using a BookList component.
- Worked on error handling and states like idle, loading, failure and success.
- Made a Loader component to put in place of the loading text.
- Took logic out of FetchBooks component and added it to a books-services.js file to and the code easier to read.
- Added a BookModal Component in the form of a dialog box.
- Stlyed the app to look good on all devices
- Added testing using React Testing Library.
- Added gh-pages to the app to allow it to deploy to Github Pages

---

## Design Goals / Approach

- Wanted to get a library feel, mostly done by the big picture banner of books.
- Also wanted it to feel fairly posh, hence why l chose to use the running writing font.
- Wanted it to look and work well on any device.

---

## Features

- Users can search for a book in the search bar and a list of 20 books will be displayed in a grid format.
- These books will all be unqine and display the books, title, author and book cover (if it has none, a placeholder image will take its place).
- Errors will direct users on what to do. E.g. if a user presses search when nothing is written, text will show up to say "Please enter a Book Title".
- Vitesting has been done for the following components: FetchBook and SearchBar.
- Any Book Card and be clicked on and a Book Modal will appear, giving the user further information on the book such as, description, publisher, date, page count, category and average rating.

---

## Known issues

- Styling on Book Cards can be a bit janky when at specific sizes (quite small margin)

---

## Future Goals

- To Implement pagination to allow more books to be resulted while still allowing the user to not have to scroll very far down the page.
- To refactor code by using content.

---

## Change logs

- N/A

---

## What did you struggle with?

- Google Books API wasn't working as l had used its daily limit of API calls, this made me have to get a Google API Key, so l then had to learn how to hide a private key from Github.
- Correctly managing states, there were quite alot of states to keep track of, especially when l added the modal. Just meant l had to concentrate more and know what was going on each component.
- When refactoring the code from FetchBook to FetchBook and book-services. It broke some of the code so too a bit to rewrite parts and make it work properly again.
- Testing by myself for the first time was a bit of a challenge at times.

---

## Further details, related projects, reimplementations

- N/A
