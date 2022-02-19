import React from "react";
import BookCard from "./BookCard";
import preloader from "../../../images/preloader.gif"

const BookList = (props) => {
    const {
        setChosenBook, searchingField, subject, sortingMethod, startIndex,
        loadMoreBooks, totalItems, books, isFetching,
    } = props;

    const loadMoreBooksThunk = (e) => {
        e.preventDefault();
        loadMoreBooks(searchingField, subject, sortingMethod, startIndex + 30);
    }

    return (
        <div className="gradient">
            <div className="totalItemsBookslist">Total books: {totalItems}</div>
            <div className="booksListContainer">
                {
                    books.map((book) => {
                        return <BookCard setChosenBook={setChosenBook} key={book.id} volumeInfo={book.volumeInfo} />
                    })
                }
            </div>
            <div className="loadMoreBooksList">
                <div><button className="buttonBooksList" onClick={loadMoreBooksThunk}>Load more</button></div>
                <div>{isFetching === "loadingMore" ? <img className="loadingWheel" src={preloader} alt="Loading wheel" /> : null}</div>
            </div>
        </div>
    )
}

export default BookList;