import React from "react";
import preloader from "../images/preloader.gif"

function Header(props) {
    const {
        inputText,
        categoryName,
        sortingMethod,
        startIndex,
        isFetching,
        searchBooks,
        setSearchingField,
        setSortingMethod,
        setCategory
    } = props;

    const addText = (event) => {
        setSearchingField(event.target.value);
    }

    const chooseSortingMethod = (event) => {
        setSortingMethod(event.target.value);
    }

    const chooseCategoryName = (event) => {
        setCategory(event.target.value);
    }

    const searchBooksThunk = (event) => {
        event.preventDefault();
        searchBooks(inputText, categoryName, sortingMethod, startIndex);
    }

    return (
        <div className="header">
            <div>
                <h1 className="title">Find Books</h1>
                <form onSubmit={searchBooksThunk}>
                    <div>
                        <input className="input" onChange={addText} type="text" value={inputText} placeholder="Enter your text" />
                        <button className="button" type="submit">Search</button>
                    </div>
                    <div>
                        <div className="selector">
                            <div className="selectorTitle">Categories:</div>
                            <select className="selectorField" defaultValue="all" onChange={chooseCategoryName}>
                                <option value="all">All</option>
                                <option value="art">Art</option>
                                <option value="biography">Biography</option>
                                <option value="computers">Computers</option>
                                <option value="history">History</option>
                                <option value="medical">Medical</option>
                                <option value="poetry">Poetry</option>
                            </select>
                        </div>
                        <div className="selector">
                            <div className="selectorTitle">Sort:</div>
                            <select className="selectorField" defaultValue="relevance"
                                onChange={chooseSortingMethod}>
                                <option value="relevance">Relevance</option>
                                <option value="newest">Newest</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
            <div>{isFetching === "searching" ? <img className="loadingWheel" src={preloader} alt="Loading wheel" /> : null}</div>
        </div>
    )
}

export default Header;