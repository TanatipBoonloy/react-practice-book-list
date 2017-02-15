import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

class BookList extends React.Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={ book.title }
                    className="list-group-item"
                    onClick={ () => this.props.selectBookAction(book) }>
                  { book.title }
                </li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
              { this.renderList() }
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // Watever is returned will show up as props inside of Booklist
    return {
        books: state.books
    }
}

// Anything returned from this function will end up as props on the Booklist container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed to all of our reducers
    return bindActionCreators({
        selectBookAction: selectBook
    }, dispatch);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);