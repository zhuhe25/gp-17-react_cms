import {booksListAsyncAction} from "@actions/books/booksActions"
export const mapStateToProps = (state)=>({
    booksList:state.books.booksList,
    count:state.books.count
})

export const mapDispatchToProps = (dispatch)=>({
    handleGetBooksList(page,limit){
        //获取数据 调用异步的action
       dispatch(booksListAsyncAction({page,limit}))
    }
})