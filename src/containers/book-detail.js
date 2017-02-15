import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        const {book} = this.props;
        return (
            <div>
              { book ?
                <div>
                  <h3>Details for:</h3>
                  <div>
                    Title : 
                    { book.title }
                  </div>
                  <div>
                    Pages : 
                    { book.pages } 
                  </div>
                </div>
                :
                <div>
                  Select a book to get started.
                </div> }
            </div>
            );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);