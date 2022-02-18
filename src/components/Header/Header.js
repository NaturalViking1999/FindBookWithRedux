import React from "react";
import preloader from "../../images/preloader.gif"

function Header(props) {
    const {
        searchingField, subject, sortingMethod, startIndex, isFetching, searchBooks,
        updateSearchingFieldText, updateSortingMethod, updateSubject,
    } = props;

    const addNewText = (event) => updateSearchingFieldText(event.target.value);

    const choseSortingMethod = (event) => updateSortingMethod(event.target.value);

    const choseSubject = (event) => updateSubject(event.target.value);

    const searchBooksThunk = (event) => {
        event.preventDefault();
        searchBooks(searchingField, subject, sortingMethod, startIndex);
    }

    return (
        <div className="header">
            <div>
                <h1 className="title">Find Books</h1>
                <form onSubmit={searchBooksThunk}>
                    <div>
                        <input className="input" onChange={addNewText} type="text" value={searchingField} />
                        <button className="button" type="submit">Search</button>
                    </div>
                    <div>
                        <div className="selector">
                            <div className="selectorTitle">Sort:</div>
                            <select className="selectorField" defaultValue="relevance"
                                onChange={choseSortingMethod}>
                                <option value="relevance">Relevance</option>
                                <option value="newest">Newest</option>
                            </select>
                        </div>
                        <div className="selector">
                            <div className="selectorTitle">Categories:</div>
                            <select className="selectorField" defaultValue="all" onChange={choseSubject}>
                                <option value="all">All</option>
                                <option value="art">Art</option>
                                <option value="biography">Biography</option>
                                <option value="computers">Computers</option>
                                <option value="history">History</option>
                                <option value="medical">Medical</option>
                                <option value="poetry">Poetry</option>
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