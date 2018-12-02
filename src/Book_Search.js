import React, { Component } from 'react';
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class BookSearch extends Component {
	state = {
		Books: [],
		query: ''
	}

	static propTypes = {
		myBooks : PropTypes.array.isRequired,
		update: PropTypes.func.isRequired
	}

	handleChange = (event) => {
		const value=event.target.value;
		this.setState({query:value});
		this.searchBooks(value);
	}

	changeBookShelf = (books) => {
		const allBooks=this.props.myBooks;
		books.map((book) => {
			book.shelf='none'
		})
		for(let book of books){
			for(let b of allBooks){
				if(book.id === b.id){
					book.shelf=b.shelf;
				}
			}
		}
		return books;
	}

	searchBooks = (val) => {
		if(val.length!==0) {
			BooksAPI.search(val,10).then((books) => {
				if(books.length > 0) {
					books = books.filter((book) => (book.imageLinks))
					books = this.changeBookShelf(books)
					this.setState(() => {
						return {Books : books}
					})
				}
			})
		}
		else {
			this.setState({Books : [],query: ''})
		}
	}

	updateBook = (book,shelf) => {
		this.props.update(book,shelf)
	}

	render() {
		return(
			<div className="search-books">
           	 <div className="search-books-bar">
              <button className="close-search" 
              onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.handleChange}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {this.state.query.length > 0 && (this.state.Books.map((book,index) => (<Book book={book} key={index} onUpdate={(shelf) => {
                    		this.updateBook(book,shelf)
                    	}}/> )) )}
              </ol>
            </div>
          </div>
		)
	}
}

export default BookSearch;