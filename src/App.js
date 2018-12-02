import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBook from './List_Book'
import BookSearch from './Book_Search'

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
        <Route exact path="/" 
        render={() => (<ListBook books={this.state.Books}
         update={this.update_books_details}/>)}/>
        <Route exact path='/search' render={() => (<BookSearch books={this.state.Books}
          update={this.update_book_details}/>)}/>
      </div>
    ) 
  }
}

export default BooksApp
