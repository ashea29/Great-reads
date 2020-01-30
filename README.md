# Project Overview


## Project Description

Our project idea was to created a [Goodreads](https://www.goodreads.com/) clone.  So we created an app called Great-Reads that has some of the same functionality as Goodreads.  The app opens to the main page where we have all the books.  A user can view each book details on the main page.  They can also create, delete, and update the books.  On the Author page you can view all the books but a certain author and add authors.

The application has been deployed to Netlify and Heroku


## Project Links

- [front end repo](https://github.com/viviRbi/Great-reads)
- [deployment](https://greatreads.netlify.com/)
- [back end repo](https://github.com/allenjosephs/Great-reads-backend)
- [back end deployment](https://great-reads-seir1118.herokuapp.com/)


## Wireframes

- [wire frame](https://github.com/viviRbi/Great-reads/blob/master/plan/pr3_main.png)
- [react architecture](https://github.com/viviRbi/Great-reads/blob/master/plan/component.jpg)


#### MVP
- Books
    - See all books
    - Add new book
    - View book details
    - Delete book
- Author
    - View all authors
    - Add new author
- Testing




#### PostMVP

- Local Storage for favorite books [completed]
- Back-end user authentication and model
    - favorite books
    - Want to read books
    - Currently reading books
    - Already read books
- Book ratings
- Advanced book search

## Components

| Component | Description |
| --- | --- |
| App | This will make the initial data pull, include React Router, state |
| Header | Header including the nav & top image |
| Main | This will render the main page of books |
| BookForm | Form for creating/editing a book |
| Book-detail | View of single book details |
| Author | View of all authors |
| AuthorForm | Form for creating an author |
| Author-detail | View of single author details |
| Saved | View all favorited books |


## Code Snippets

```
const newBook = {
      _id: newId,
      title: newTitle,
      coverImgURL: newUrl,
      author: newAuthor
    }
    if (!idArr.includes(newBook._id)) {
      savedBookId.push(newBook)
    }
    this.setState({ savedBookId })
    localStorage.setItem('savedBookId', JSON.stringify(savedBookId))
```
```
  removeHandle = (e) => {
    const newFetchId = this.state.savedBook.concat()
    const removedIndex = e.target.attributes.getNamedItem('index').value
    newFetchId.splice(removedIndex, 1)
    localStorage.setItem('savedBookId', JSON.stringify(newFetchId))
    this.setState({ savedBook: newFetchId })
  }
```

### Using 'populate' to "join" documents in Mongoose
```
router.get("/", (req, res) => {
  Author.find({})
		.populate('books', [
			'_id',
			'title',
			'description',
			'coverImgURL'
		])
		.then(allAuthors => {
			res.json(allAuthors)
		})
})
```

## Issues and Resolutions

**ERROR**
  - Browser refresh on any page other than '/' was producing a 404 error

**RESOLUTION**
  - [Research on StackOverflow](https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually)
  - [Netlify redirect doc](https://docs.netlify.com/routing/redirects/redirect-options/#http-status-codes)
  - Added a `_redirects` file to the project root instructing Netlify to direct all server calls to index.html
  - Contents: `/*  /index.html   200`

---

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
