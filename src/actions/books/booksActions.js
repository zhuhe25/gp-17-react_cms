import {booksListApi} from "../../api/books"
import {booksListType} from "./booksTypes"

export const booksListAsyncAction = (dataInfo)=>{
    //最终要发送给reducers的action
    const booksListAction = (data)=>({
        type:booksListType,
        data
    })
    //执行异步
    return async (dispatch)=>{
        let data = await booksListApi(dataInfo);
        console.log(data.data);
        dispatch(booksListAction(data.data))
    }
}