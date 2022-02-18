import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { searchBooks, updateSearchingFieldText, updateSortingMethod, updateSubject } from "../../reducer/reducer";

function HeaderContainer() {
    const { state } = this.props;
    return (
        <Header state={state} />
    );
}

const mapStateToProps = (state) => ({
    searchingField: state.searchingField,
    subject: state.subject,
    sortingMethod: state.sortingMethod,
    startIndex: state.startIndex,
    isFetching: state.isFetching
});

export default HeaderContainer = connect(mapStateToProps, {
    searchBooks, updateSearchingFieldText, updateSortingMethod, updateSubject,
})(Header);