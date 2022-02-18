import React from "react";
import ChosenBook from "./BooksList/ChosenBook";
import BooksList from "./BooksList/BooksList";

const Main = (props) => {
    const {
        books, totalItems, startIndex, searchingField, chosenBook, deleteChosenBook,
        subject, sortingMethod, isFetching, loadMoreBooks, setChosenBook,
    } = props;

    if (books.length === 0) {
        return (
            isFetching ? <div className="inscription">Searching...</div> : <div className="inscription">Add text to searching field.</div>
        );
    }

    if (chosenBook) {
        return (
            <ChosenBook chosenBook={chosenBook} deleteChosenBook={deleteChosenBook} />
        );
    }

    return (
        <BooksList loadMoreBooks={loadMoreBooks} setChosenBook={setChosenBook}
            searchingField={searchingField} startIndex={startIndex} totalItems={totalItems}
            subject={subject} sortingMethod={sortingMethod} books={books} isFetching={isFetching} />
    )
}

export default Main;