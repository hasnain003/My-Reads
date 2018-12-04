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

   async componentDidMount() {
	 const books = await BooksAPI.getAll();
  		this.setState({ Books : books })
  }

/*
  BooksAPI.update(book, shelf);
  book.shelf = shelf;    
  this.setState(state => ({
  books: state.books.filter(b => b.id !== book.id).concat(book)
  })); 
*/
  updateBookDetails = (book,shelf) => {
    BooksAPI.update(book,shelf).then(() => {
      this.setState(state => ({
       	Books: state.Books.filter(b => b.id !== book.id).concat(book),
   	 		}))
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
          <Route exact path='/search' render={(history) => (
            <BookSearch 
            myBooks={this.state.Books}
            update={this.updateBookDetails}
            />
            )}/>
      </div>
    ) 
  }
}

export default BooksApp
