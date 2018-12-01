import React, { Component } from 'react';
import PropTypes from 'prop-types'

class BookShelf extends Component {

	static propTypes = {
		books: PropTypes.array.isRequired,
		title: PropTypes.string.isRequired,
		onChangeShelf:PropTypes.func.isRequired
	}

render() {

}
}

export default BookShelf;