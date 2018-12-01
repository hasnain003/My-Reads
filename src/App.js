import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book.js'

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
      <div>
        <ol className="books-grid">
          {this.state.Books.length > 0 && 
          this.state.Books.map((book) => (<Book book={book}/>))}
        </ol>
      </div>
    )
  }
}

export default BooksApp
