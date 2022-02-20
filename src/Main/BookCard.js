import React from "react";

const BookCard = (props) => {
    const { categories, title, authors } = props.volumeInfo;
    const { thumbnail } = props.volumeInfo.imageLinks;
    const { setChosenBook } = props;

    const showChosenBook = () => {
        setChosenBook(props.volumeInfo);
    }

    const listItems = authors.map((item, index) =>
        <li key={index.toString()}>{item}</li>
    );

    return (
        <div onClick={showChosenBook} className="bookCard">
            <img className="bookCover" src={thumbnail} alt="Book cover">
            </img>
            <div className="textContent">
                <p className="categoryCard">{categories[0]}</p>
                <p className="titleCard">{title}</p>
                <ul className="authorsList">{listItems}</ul>
            </div>
        </div>
    )
}

export default BookCard;