import React from "react";
import ChosenBook from "./ChosenBook";
import preloader from "../images/preloader.gif"
import BookCard from "./BookCard";

const Main = (props) => {
    const {
        books, totalItems, startIndex, inputText, chosenBook, deleteChosenBook,
        categoryName, sortingMethod, isFetching, loadMoreBooks, setChosenBook,
    } = props;

    const loadMoreBooksThunk = (event) => {
        event.preventDefault();
        loadMoreBooks(inputText, categoryName, sortingMethod, startIndex + 30);
    }

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

export default Main;