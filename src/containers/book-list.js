//  CREATING COMPONENT //
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { selectBook } from '../actions/index'; // importing action creator
import { bindActionCreators} from 'redux'; // also for action creators

class BookList extends Component {
    renderList(){
        return this.props.books.map((book)=>{
            return(
                <li 
                key={book.title} 
                onClick = {()=>this.props.selectBook(book)}
                className="list-group-item"
                >
                    {book.title}
                </li>
            );
        })
    }

    render(){
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

// CREATING LINK BETWEEN REACT AND REDUX: 

function mapStateToProps(state){
    // Whotever is returned will show as props
    // inside of BookList (this.props.)
    return {
        books: state.books
    }
}

// action creators code, any thing returned from this function
// end up as props on the BookList container
function mapDispatchToProps(dispatch){
    // whenever selectedBook is called, the result should 
    // be passed to all of our reducers:
    return bindActionCreators({ selectBook: selectBook}, dispatch)
}

// binding react redux, and 
export default connect(mapStateToProps, mapDispatchToProps)(BookList);




