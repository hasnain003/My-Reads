import React from 'react'
import { Route } from 'react-router-dom'
import ListBook from './List_Book'
import BookSearch from './Book_Search'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
      Books:[]
  }

   componentDidMount() {
   BooksAPI.getAll().then((Books) => {
      this.setState({ Books })
    })
  }

  updateBookDetails = (book,shelf) => {
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
          <Route exact path='/' 
          render={() => (
            <ListBook 
            books={this.state.Books}
            update={this.updateBookDetails}
           />
           )}/>
          <Route exact path='/search' render={() => (
            <BookSearch 
            books={this.state.Books}
            update={this.updateBookDetails}
            />
            )}/>
      </div>
    ) 
  }
}

export default BooksApp
