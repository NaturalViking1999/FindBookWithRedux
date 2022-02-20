import { getBooks } from "./getBooks";
import { uniqBy } from "lodash";

// ACTION TYPES:
const SEARCHING_FIELD = 'SEARCHING_FIELD';
export const setSearchingField = (newText) => ({ type: SEARCHING_FIELD, newText });

const SET_SORTING_METHOD = 'SET_SORTING_METHOD';
export const setSortingMethod = (newSortingMethod) => ({ type: SET_SORTING_METHOD, newSortingMethod });

const SET_CATEGORY = 'SET_CATEGORY';
export const setCategory = (newCategory) => ({ type: SET_CATEGORY, newCategory });

const ADD_BOOKS = 'ADD_BOOKS';
export const addBooks = (newBooks) => ({ type: ADD_BOOKS, newBooks });

const SET_TOTAL_ITEMS = 'SET_TOTAL_ITEMS';
export const setTotalItems = (totalItems) => ({ type: SET_TOTAL_ITEMS, totalItems });

const LOAD_MORE = 'LOAD_MORE';
export const loadMore = (newBooks, currentIndex) => ({ type: LOAD_MORE, newBooks, currentIndex });

const FETCHING_TOGGLE = 'FETCHING_TOGGLE';
export const fetchingToggle = (fetchingStatus) => ({ type: FETCHING_TOGGLE, fetchingStatus });

const SET_CHOSEN_BOOK = 'SET_CHOSEN_BOOK';
export const setChosenBook = (chosenBook) => ({ type: SET_CHOSEN_BOOK, chosenBook });

const DELETE_CHOSEN_BOOK = 'DELETE_CHOSEN_BOOK';
export const deleteChosenBook = () => ({ type: DELETE_CHOSEN_BOOK });

// FUNCTIONS:

// Function search books
export const searchBooks = (inputText, categoryName, sortingMethod, startIndex) => {
    return (dispatch) => {
        dispatch(fetchingToggle("searching"));
        getBooks(inputText, categoryName, sortingMethod, startIndex)
            .then(response => {
                if (response === 'STOP') {
                    alert('There are not those books, what you search.');
                    dispatch(fetchingToggle(false));
                    return;
                } else if (response === 'ERROR') {
                    dispatch(fetchingToggle(false));
                    return;
                }
                dispatch(fetchingToggle(false));
                dispatch(addBooks(response.items));
                dispatch(setTotalItems(response.totalItems));
            })
    }
};

// Function load more books
export const loadMoreBooks = (inputText, categoryName, sortingMethod, startIndex) => {
    return (dispatch) => {
        dispatch(fetchingToggle("loadingMore"));
        getBooks(inputText, categoryName, sortingMethod, startIndex)
            .then(response => {
                if (response === 'STOP') {
                    alert('There are not those books, what you search.');
                    dispatch(fetchingToggle(false));
                    return;
                } else if (response === 'ERROR') {
                    dispatch(fetchingToggle(false));
                    return;
                }
                dispatch(fetchingToggle(false));
                dispatch(loadMore(response.items, startIndex));
            })
    }
}

// Initial State
const initialState = {
    books: [], inputText: '', sortingMethod: 'relevance', categoryName: 'all',
    totalItems: null, startIndex: 0, isFetching: false, chosenBook: false
};

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCHING_FIELD:
            return {
                ...state,
                inputText: action.newText
            };
        case SET_SORTING_METHOD:
            return {
                ...state,
                sortingMethod: action.newSortingMethod
            };
        case SET_CATEGORY:
            return {
                ...state,
                categoryName: action.newSubject
            };
        case ADD_BOOKS:
            return {
                ...state,
                books: uniqBy(action.newBooks, 'id')
            };
        case SET_TOTAL_ITEMS:
            return {
                ...state,
                totalItems: action.totalItems
            };
        case LOAD_MORE:
            return {
                ...state,
                startIndex: action.currentIndex + 30,
                books: uniqBy([...state.books, ...action.newBooks], 'id')
            };
        case FETCHING_TOGGLE:
            return {
                ...state,
                isFetching: action.fetchingStatus
            };
        case SET_CHOSEN_BOOK:
            return {
                ...state,
                chosenBook: action.chosenBook
            };
        case DELETE_CHOSEN_BOOK:
            return {
                ...state,
                chosenBook: false
            };
        default:
            return state;
    }
};

export default reducer;