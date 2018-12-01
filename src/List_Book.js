import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import BookShelf from './Book_Shelf.js'



class ListBook extends Component {

	static propTypes = {
		books : PropTypes.array.isRequired,
		update : PropTypes.func.isRequired
	}


	render() {
		const books=this.props.books;
		const update=this.props.update;
		return (
			<div className="list-books">
          		<div className="list-books-title">
            		<h1>MyReads</h1>
          		</div>
          		<div className="list-books-content">
            		<div>
              			<BookShelf books={books.filter((book) => (book.shelf === "currentlyReading"))} 
              			title="Currently Reading" 
             			onChangeShelf={update}/>
              			<BookShelf books={books.filter((book) => (book.shelf === "read"))} 
              			title="Read" 
              			onChangeShelf={update}/>
              			<BookShelf books={books.filter((book) => (book.shelf === "wantToRead"))} 
              			title="Want to Read" 
              			onChangeShelf={update}/>
            		</div>
          		</div>
        	</div>
        	<div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
		)
	}
}

export default ListBook;