import React, { Component } from 'react';
import PropTypes from 'prop-types'
import * as BookAPI from './BooksAPI'

class BookSearch extends Component {
	state = {
		Books: [],
		query: ''
	}

	static propTypes = {
		books : PropTypes.array.isRequired,
		update: PropTypes.func.isRequired
	}

	handleChange = (event) => {
		const value=event.target.value;
		this.setState({query:value});
		this.searchBooks(value);
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
              <ol className="books-grid"></ol>
            </div>
          </div>
		)
	}
}

export default BookSearch;