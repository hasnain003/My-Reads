import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book.js'
import BookShelf from './Book_Shelf.js'

class BooksApp extends React.Component {
  state = {
      Books:[]
  }

   componentDidMount() {
   BooksAPI.getAll().then((Books) => {
      this.setState({ Books })
    })
  }
render() {
    console.log(this.state.Books)
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BookShelf books={this.state.Books.filter((book) => (book.shelf === "currentlyReading"))} 
              title="Currently Reading" 
              onChangeShelf={this.props.onChange}/>
              <BookShelf books={this.state.Books.filter((book) => (book.shelf === "Read"))} 
              title="Read" 
              onChangeShelf={this.props.onChange}/>
              <BookShelf books={this.state.Books.filter((book) => (book.shelf === "Want to Read"))} 
              title="Want to Read" 
              onChangeShelf={this.props.onChange}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BooksApp
