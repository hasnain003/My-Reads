import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book.js'

class BookShelf extends Component {

	static propTypes = {
		books: PropTypes.array.isRequired,
		title: PropTypes.string.isRequired,
		onChangeShelf:PropTypes.func.isRequired
	}

	render() {
		const books=this.props.books;
		const title=this.props.title;
		return (
			<div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                	<ol className="books-grid">
                    	{books.map((book,index) => (<Book book={book} key={index} onUpdate={(shelf) => {
                    		this.update_book(book,shelf)
                    	}}/> ))}
                    </ol>
                </div>
            </div>
		)
	}
}

export default BookShelf;