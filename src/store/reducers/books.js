import {booksListType} from "@actions/books/booksTypes"
let defaultState = {
    booksList:[],
    count:0
}

export default (state=defaultState,actions)=>{
    switch(actions.type){
        case booksListType:
        let booksState = JSON.parse(JSON.stringify(state));
        booksState.booksList = actions.data.data;
        booksState.count = actions.data.count;
        return booksState;
    }
    return state;
}