import React from "react";
import { connect } from "react-redux";
import Main from "./Main";
import { deleteChosenBook, loadMoreBooks, setChosenBook } from "../../reducer/reducer";

function MainContainer() {
    const { state } = this.props;
    return (
        <Main state={state} />
    );
}

const mapStateToProps = (state) => ({
    books: state.books, totalItems: state.totalItems, startIndex: state.startIndex,
    searchingField: state.searchingField, subject: state.subject, sortingMethod: state.sortingMethod,
    isFetching: state.isFetching, chosenBook: state.chosenBook,
});

export default MainContainer = connect(mapStateToProps, {
    loadMoreBooks, setChosenBook, deleteChosenBook
})(Main);