import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book.js'
import BookShelf from './Book_Shelf.js'
import ListBook from './List_Book'

class BooksApp extends React.Component {
  state = {
      Books:[]
  }

   componentDidMount() {
   BooksAPI.getAll().then((Books) => {
      this.setState({ Books })
    })
  }

  update_book_details = (book,shelf) => {
    BooksAPI.update(book,shelf).then(() => {
      BooksAPI.getAll().then((Books) => {
      this.setState({ Books })
      })
    })
  }
render() {
    console.log(this.state.Books)
    return (
      <div className="app">
        <ListBook books={this.state.Books} update={this.update_book_details}/>
      </div>
    )
  }
}

export default BooksApp
