import React from "react";

const ChosenBook = (props) => {
    const { categories, title, authors, description } = props.chosenBook;
    const { thumbnail } = props.chosenBook.imageLinks;

    const listItems1 = authors.map((item, index) =>
        <li key={index.toString()}>{item}</li>
    );

    const listItems2 = categories.map((item, index) =>
        <li key={index.toString()}>{item}</li>
    );

    return (
        <div className="chosenBookInfo">
            <img className="bookCoverInfo" src={thumbnail} alt="Book cover" />
            <div className="contentInfo">
                <ul className="categoriesListInfo">{listItems2}</ul>
                <div className="titleInfo">{title}</div>
                <ul className="authorsListInfo">{listItems1}</ul>
                <div className="description">{description}</div>
                <button className="buttonInfo" onClick={props.deleteChosenBook}>Back</button>
            </div>
        </div>
    )
}

export default ChosenBook;
