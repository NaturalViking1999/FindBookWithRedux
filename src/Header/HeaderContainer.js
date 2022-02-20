import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {
    searchBooks,
    setSearchingField,
    setSortingMethod,
    setCategory
} from "../reducer/reducer";

function HeaderContainer() {
    const { state } = this.props;
    return (
        <Header state={state} />
    );
}

const mapStateToProps = (state) => ({
    inputText: state.inputText,
    categoryName: state.categoryName,
    sortingMethod: state.sortingMethod,
    startIndex: state.startIndex,
    isFetching: state.isFetching
});

export default HeaderContainer = connect(mapStateToProps, {
    searchBooks,
    setSearchingField,
    setSortingMethod,
    setCategory
})(Header);