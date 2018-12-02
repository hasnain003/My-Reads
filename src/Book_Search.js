import React, { Component } from 'react';
import PropTypes from 'prop-types'

class BookSearch extends Component {
	state = {
		Books: [],
		query: ''
	}

	static propTypes = {
		books : PropTypes.array.isRequired,
		update: PropTypes.func.isRequired
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